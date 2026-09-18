/** Basit, bellekte oturumlu istek sınırlayıcı (sliding window).
 *  Üretimde çoklu instance için Redis gerekir; tek instance Vercel
 *  function'larında yeterli olur ve saldırıları büyük ölçüde yavaşlatır.
 */

const WINDOWS = new Map<string, number[]>();

/** Belirtilen aralık içinde (ms) izin verilen istek sayısı aşılırsa true. */
export function isRateLimited(
  key: string,
  limit: number,
  windowMs: number
): boolean {
  const now = Date.now();
  const cutoff = now - windowMs;
  const hits = (WINDOWS.get(key) || []).filter((t) => t > cutoff);

  if (hits.length >= limit) {
    WINDOWS.set(key, hits);
    return true;
  }

  hits.push(now);
  WINDOWS.set(key, hits);

  /* Belleği sınırlı tut: küçük bir temizlik */
  if (WINDOWS.size > 5000) {
    for (const [k, v] of WINDOWS) {
      if (v.length === 0 || v[v.length - 1] <= cutoff) WINDOWS.delete(k);
    }
  }

  return false;
}

/** İstek sahibini temsili anahtar: IP (proxy header yoksa) */
export function clientKey(request: Request): string {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  return ip;
}

export const RATE = {
  /** Admin girişi: 15 dakikada 5 deneme */
  login: { limit: 5, windowMs: 15 * 60 * 1000 },
  /** Form gönderimleri: dakikada 10 */
  forms: { limit: 10, windowMs: 60 * 1000 },
  /** Sınav sonucu işleme: dakikada 10 */
  exam: { limit: 10, windowMs: 60 * 1000 },
} as const;