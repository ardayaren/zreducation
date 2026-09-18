import { mkdir, readFile, writeFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import path from "node:path";
import { put, list, del } from "@vercel/blob";

export type SubmissionType = "exam" | "registration" | "speaking";

export interface Submission {
  id: string;
  type: SubmissionType;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  /** Tabloda tek satırlık özet */
  summary: string;
  /** Forma özel tüm alanlar */
  data: Record<string, unknown>;
}

/**
 * Kalıcı depolama: Vercel Blob (üretim) + yerel JSON dosyası (geliştirme).
 * Vercel'de fonksiyon dosya sistemi geçicidir; bu yüzden kayıtlar Blob'a
 * yazılır. Lokalde BLOB env yoksa data/submissions.json kullanılır.
 */
const BLOB_ENABLED =
  !!process.env.BLOB_STORE_ID || !!process.env.BLOB_READ_WRITE_TOKEN;

const PREFIX = "submissions/";
const FILE = path.join(process.cwd(), "data", "submissions.json");

async function readAllBlob(): Promise<Submission[]> {
  const items: Submission[] = [];
  let cursor: string | undefined;
  do {
    const res = await list({ prefix: PREFIX, limit: 1000, cursor });
    for (const blob of res.blobs) {
      if (!blob.pathname.endsWith(".json")) continue;
      try {
        const text = await (await fetch(blob.url)).text();
        const parsed: unknown = JSON.parse(text);
        items.push(parsed as Submission);
      } catch {
        /* tek kayıt bozuksa atla */
      }
    }
    cursor = res.hasMore ? res.cursor : undefined;
  } while (cursor);
  return items;
}

async function readAllLocal(): Promise<Submission[]> {
  try {
    const raw = await readFile(FILE, "utf-8");
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Submission[]) : [];
  } catch {
    return [];
  }
}

async function readAll(): Promise<Submission[]> {
  if (BLOB_ENABLED) {
    try {
      return await readAllBlob();
    } catch (error) {
      console.error("Blob kayıtları okunamadı:", error);
      return [];
    }
  }
  return readAllLocal();
}

async function writeAllLocal(items: Submission[]): Promise<void> {
  await mkdir(path.dirname(FILE), { recursive: true });
  await writeFile(FILE, JSON.stringify(items, null, 2), "utf-8");
}

/** Yeni başvuruyu kalıcı depoya ekler. Hata fırlatmaz. */
export async function saveSubmission(
  input: Omit<Submission, "id" | "createdAt">
): Promise<Submission | null> {
  const item: Submission = {
    ...input,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };

  if (BLOB_ENABLED) {
    try {
      await put(`${PREFIX}${item.id}.json`, JSON.stringify(item), {
        access: "private",
        addRandomSuffix: false,
        contentType: "application/json",
      });
      return item;
    } catch (error) {
      console.error("Başvuru Blob'a kaydedilemedi:", error);
      return null;
    }
  }

  try {
    const all = await readAllLocal();
    all.unshift(item);
    await writeAllLocal(all);
    return item;
  } catch (error) {
    console.error("Başvuru kaydedilemedi:", error);
    return null;
  }
}

/** En yeniden en eskiye sıralı liste. */
export async function listSubmissions(
  type?: SubmissionType
): Promise<Submission[]> {
  const all = await readAll();
  const sorted = all.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  return type ? sorted.filter((s) => s.type === type) : sorted;
}

export async function deleteSubmission(id: string): Promise<boolean> {
  if (BLOB_ENABLED) {
    try {
      await del(`${PREFIX}${id}.json`);
      return true;
    } catch (error) {
      console.error("Başvuru silinemedi:", error);
      return false;
    }
  }

  try {
    const all = await readAllLocal();
    const next = all.filter((s) => s.id !== id);
    if (next.length === all.length) return false;
    await writeAllLocal(next);
    return true;
  } catch (error) {
    console.error("Başvuru silinemedi:", error);
    return false;
  }
}