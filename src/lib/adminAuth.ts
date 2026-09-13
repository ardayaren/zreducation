import { createHash, randomBytes, timingSafeEqual } from "node:crypto";

export const ADMIN_COOKIE = "zr_admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "";

function sign(token: string): string {
  return createHash("sha256")
    .update(`${token}:${ADMIN_PASSWORD}`)
    .digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  return ba.length === bb.length && timingSafeEqual(ba, bb);
}

/** .env'de ADMIN_PASSWORD tanımlı mı? */
export function isAdminConfigured(): boolean {
  return ADMIN_PASSWORD.length > 0;
}

export function checkPassword(password: unknown): boolean {
  if (typeof password !== "string" || !ADMIN_PASSWORD) return false;
  return safeEqual(password, ADMIN_PASSWORD);
}

/** İmza doğrulaması gerektirmeyen, sunucuda durum tutmayan oturum değeri. */
export function createSessionValue(): string {
  const token = randomBytes(32).toString("hex");
  return `${token}.${sign(token)}`;
}

/** Oturum çerezini doğrula (süresiz, şifre değişince otomatik düşer). */
export function verifySessionValue(value: string | undefined): boolean {
  if (!value || !ADMIN_PASSWORD) return false;
  const dot = value.indexOf(".");
  if (dot < 1) return false;
  const token = value.slice(0, dot);
  const sig = value.slice(dot + 1);
  if (!token || !sig) return false;
  return safeEqual(sig, sign(token));
}
