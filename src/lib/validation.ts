/** Form girişlerini temizleme ve temel doğrulama. */

export function cleanText(value: unknown, maxLength = 500): string {
  if (typeof value !== "string") return "";
  /* Kontrol karakterlerini ve fazla boşlukları temizle */
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, maxLength);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_RE.test(value);
}

export function isValidPhone(value: string): boolean {
  const digits = value.replace(/[^\d+]/g, "");
  return digits.length >= 10 && digits.length <= 15;
}