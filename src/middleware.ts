import { NextRequest, NextResponse } from "next/server";

/* ADMIN_COOKIE (@/lib/adminAuth) — edge uyumluluğu için import edilmedi. */
const ADMIN_COOKIE = "zr_admin";

/**
 * /admin sayfalarını girişe yönlendirir (hafif kontrol: çerez varlığı).
 * Asıl imza doğrulaması /api/admin rotalarında yapılır; çerez uydurma
 * olsa bile API 401 döner ve panel boş kalır.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/admin/login")) return NextResponse.next();
  if (!request.cookies.get(ADMIN_COOKIE)?.value) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
