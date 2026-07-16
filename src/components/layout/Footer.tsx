import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { footerLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="surface-navy footer-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-gold-600 to-gold-400 flex items-center justify-center shadow-md">
                <span className="font-heading text-white text-sm font-bold">
                  ZR
                </span>
              </div>
              <span className="font-heading-normal text-lg font-bold tracking-wide">
                Zreducation
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Yurt dışı öğrenci gönderimi ve kapsamlı İngilizce eğitim
              hizmetleri.
            </p>
          </div>

          <div>
            <h3 className="label-caps text-gold-300 mb-5">Hizmetlerimiz</h3>
            <ul className="space-y-2.5">
              {footerLinks.hizmetler.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label-caps text-gold-300 mb-5">Kurumsal</h3>
            <ul className="space-y-2.5">
              {footerLinks.kurumsal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label-caps text-gold-300 mb-5">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-sm text-white/60">
                  Levent Mah. Eğitim Cad. No:42
                  <br />
                  Beşiktaş / İstanbul
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <a
                  href="tel:+902121234567"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  +90 (212) 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a
                  href="mailto:info@zreducation.com"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  info@zreducation.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 relative">
          <div className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Zreducation. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-5 text-xs text-white/40">
            <Link href="#" className="hover:text-gold-400 transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="#" className="hover:text-gold-400 transition-colors">
              Kullanım Koşulları
            </Link>
            <Link href="#" className="hover:text-gold-400 transition-colors">
              KVKK
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
