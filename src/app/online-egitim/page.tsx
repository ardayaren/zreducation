import type { Metadata } from "next";
import { Check, Monitor, PlayCircle, Shield } from "lucide-react";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import NavySection from "@/components/ui/NavySection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { onlineCourses } from "@/data/onlineCourses";
import { contactInfo } from "@/data/contact";

export const metadata: Metadata = {
  title: "Online İngilizce Eğitimi",
  description:
    "Canlı Zoom dersleri, kayıt arşivi ve dijital platform ile online İngilizce kursları. A1–C1, IELTS hazırlık ve birebir ders paketleri. Denizli merkezli Zreducation.",
  keywords: [
    "online ingilizce kursu",
    "zoom ingilizce dersi",
    "online ielts",
    "ingilizce online eğitim denizli",
    "zreducation online",
  ],
  openGraph: {
    title: "Online İngilizce Eğitimi | Zreducation",
    description:
      "Canlı online İngilizce kursları — A1'den C1'e, IELTS hazırlık ve birebir ders paketleri.",
  },
};

function formatPrice(n: number) {
  return new Intl.NumberFormat("tr-TR").format(n);
}

export default function OnlineEgitimPage() {
  return (
    <PageLayout>
      <PageHero title="Online Eğitim" subtitle="Canlı & Kayıtlı">
        <p>
          Canlı Zoom dersleri, dijital materyaller ve kayıt arşivi ile evden
          konuşma odaklı İngilizce eğitimi. 3 ayda 90 derste 0&apos;dan akıcı
          konuşmaya — birebir veya maks 8–10 kişilik grup dersiyle.
        </p>
      </PageHero>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
            {[
              { icon: Monitor, text: "Canlı Zoom dersleri" },
              { icon: PlayCircle, text: "7/24 kayıt arşivi" },
              { icon: Shield, text: "CEFR sertifikası" },
              { icon: Check, text: "Dijital workbook" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 rounded-2xl bg-surface px-3 py-3 text-xs sm:text-sm text-navy-800"
              >
                <item.icon className="w-4 h-4 text-gold-600 shrink-0" />
                {item.text}
              </div>
            ))}
          </div>

          <SectionTitle
            subtitle="Paketler"
            title="Online Eğitim Paketleri — Birebir & Grup"
            description="Tüm paketlerde %30 indirim aktif. Seviye tespit sonrası ek %10. Güncel kampanya fiyatları için bizi arayın veya WhatsApp'tan yazın."
          />

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {onlineCourses.map((course, index) => (
              <AnimatedSection key={course.id} delay={index * 0.04}>
                <article
                  className={`relative h-full flex flex-col rounded-3xl overflow-hidden border ${
                    course.popular
                      ? "border-gold-400 shadow-[0_8px_32px_rgba(201,168,58,0.15)]"
                      : "border-border shadow-sm"
                  } bg-white`}
                >
                  {course.badge && (
                    <span className="absolute top-4 right-4 badge-pill bg-gold-500 text-navy-950 text-[10px]">
                      {course.badge}
                    </span>
                  )}

                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <span
                      className={`badge-pill w-fit mb-3 text-[10px] ${
                        course.format === "Birebir Ders"
                          ? "bg-navy-900 text-white"
                          : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      }`}
                    >
                      {course.format}
                    </span>
                    <span className="label-caps text-gold-600 mb-2">
                      {course.level} · {course.duration}
                    </span>
                    <h3 className="font-heading-normal text-lg font-bold text-navy-900 mb-1">
                      {course.title}
                    </h3>
                    <p className="text-sm text-slate mb-4">{course.subtitle}</p>

                    <ul className="space-y-1.5 mb-6 flex-1">
                      {course.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-xs text-slate"
                        >
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-end gap-2 mb-4">
                      <span className="font-heading-normal text-2xl font-bold text-navy-900 tabular-nums">
                        {formatPrice(course.price)} ₺
                      </span>
                      <span className="text-sm text-slate line-through tabular-nums">
                        {formatPrice(course.originalPrice)} ₺
                      </span>
                    </div>

                    <Button
                      href={`/iletisim?paket=${course.id}`}
                      className="w-full"
                      size="sm"
                    >
                      Satın Al / Bilgi Al
                    </Button>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <NavySection>
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle
            subtitle="Nasıl Çalışır?"
            title="3 Adımda Online Eğitime Başlayın"
            description="Kayıt sonrası aynı gün ders platformuna erişim."
            light
          />
          <div className="grid sm:grid-cols-3 gap-4 text-left mt-8">
            {[
              {
                step: "01",
                title: "Paket Seçin",
                text: "Seviyenize uygun online paketi seçin veya ücretsiz placement test yapın.",
              },
              {
                step: "02",
                title: "Kayıt Olun",
                text: "WhatsApp veya iletişim formu ile kayıt; ödeme sonrası platform erişimi.",
              },
              {
                step: "03",
                title: "Derse Katılın",
                text: "Canlı Zoom derslerine katılın; kaçırdıklarınızı kayıttan izleyin.",
              },
            ].map((item) => (
              <div key={item.step} className="navy-card-glass p-5">
                <span className="text-gold-400 font-bold text-sm">{item.step}</span>
                <h3 className="text-white font-semibold mt-2 mb-1">{item.title}</h3>
                <p className="text-white/65 text-xs leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/seviye-tespit" size="lg">
              Ücretsiz Seviye Tespit
            </Button>
            <Button
              href={contactInfo.whatsapp.href}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              WhatsApp: {contactInfo.whatsapp.display}
            </Button>
          </div>
        </div>
      </NavySection>
    </PageLayout>
  );
}
