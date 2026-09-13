import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, verifySessionValue } from "@/lib/adminAuth";
import {
  deleteSubmission,
  listSubmissions,
  type SubmissionType,
} from "@/lib/submissions";

function unauthorized() {
  return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
}

function check(request: NextRequest): boolean {
  return verifySessionValue(request.cookies.get(ADMIN_COOKIE)?.value);
}

const TYPES: SubmissionType[] = ["exam", "registration", "speaking"];

/** Liste: GET ?type=exam&q=arama */
export async function GET(request: NextRequest) {
  if (!check(request)) return unauthorized();

  const { searchParams } = new URL(request.url);
  const rawType = searchParams.get("type");
  const type: SubmissionType | undefined = TYPES.includes(rawType as SubmissionType)
    ? (rawType as SubmissionType)
    : undefined;
  const q = (searchParams.get("q") || "").trim().toLocaleLowerCase("tr");

  let items = await listSubmissions(type);
  if (q) {
    items = items.filter((s) =>
      `${s.name} ${s.email} ${s.phone} ${s.summary}`
        .toLocaleLowerCase("tr")
        .includes(q)
    );
  }

  const counts = {
    all: (await listSubmissions()).length,
    exam: (await listSubmissions("exam")).length,
    registration: (await listSubmissions("registration")).length,
    speaking: (await listSubmissions("speaking")).length,
  };

  return NextResponse.json({ items, counts });
}

/** Sil: DELETE ?id=... */
export async function DELETE(request: NextRequest) {
  if (!check(request)) return unauthorized();

  const id = new URL(request.url).searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id gerekli" }, { status: 400 });

  const ok = await deleteSubmission(id);
  return NextResponse.json({ ok }, { status: ok ? 200 : 404 });
}
