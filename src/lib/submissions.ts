import { mkdir, readFile, writeFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import path from "node:path";

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

const FILE = path.join(process.cwd(), "data", "submissions.json");

async function readAll(): Promise<Submission[]> {
  try {
    const raw = await readFile(FILE, "utf-8");
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Submission[]) : [];
  } catch {
    return [];
  }
}

async function writeAll(items: Submission[]): Promise<void> {
  await mkdir(path.dirname(FILE), { recursive: true });
  await writeFile(FILE, JSON.stringify(items, null, 2), "utf-8");
}

/** Yeni başvuruyu dosyanın başına ekler. Hata fırlatmaz. */
export async function saveSubmission(
  input: Omit<Submission, "id" | "createdAt">
): Promise<Submission | null> {
  try {
    const item: Submission = {
      ...input,
      id: randomUUID(),
      createdAt: new Date().toISOString(),
    };
    const all = await readAll();
    all.unshift(item);
    await writeAll(all);
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
  try {
    const all = await readAll();
    const next = all.filter((s) => s.id !== id);
    if (next.length === all.length) return false;
    await writeAll(next);
    return true;
  } catch (error) {
    console.error("Başvuru silinemedi:", error);
    return false;
  }
}
