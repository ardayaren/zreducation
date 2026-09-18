import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  checkPassword,
  createSessionValue,
  isAdminConfigured,
  verifySessionValue,
} from "@/lib/adminAuth";
import { clientKey, isRateLimited, RATE } from "@/lib/rateLimit";

/** Oturum kontrolü (panel açılışında kullanılır). */
export async function GET(request: NextRequest) {
  const ok = verifySessionValue(request.cookies.get(ADMIN_COOKIE)?.value);
  return NextResponse.json(
    { ok, configured: isAdminConfigured() },
    { status: ok ? 200 : 401 }
  );
}

/** Giriş: doğru şifrede httpOnly çerez yazar. */
export async function POST(request: NextRequest) {
  if (isRateLimited(`login:${clientKey(request)}`, RATE.login.limit, RATE.login.windowMs)) {
    return NextResponse.json(
      { error: "Çok fazla deneme yaptınız. Lütfen biraz sonra tekrar deneyin." },
      { status: 429 }
    );
  }

  if (!isAdminConfigured()) {
    return NextResponse.json(
      { error: "Admin şifresi tanımlı değil (ADMIN_PASSWORD)" },
      { status: 503 }
    );
  }

  let password: unknown = "";
  try {
    password = (await request.json())?.password ?? "";
  } catch {
    password = "";
  }

  if (!checkPassword(password)) {
    return NextResponse.json({ error: "Hatalı şifre" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, createSessionValue(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
