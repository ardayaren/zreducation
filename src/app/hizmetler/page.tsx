import type { Metadata } from "next";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Yurt dışı eğitim, İngilizce kursları, online ve yüz yüze eğitim, grup dersleri ve sınav hazırlık programları.",
};

const onlineFeatures = [
  "Canlı interaktif dersler (Zoom/Teams)",
  "Kayıtlı ders arşivi — 7/24 erişim",
  "Dijital öğrenme platformu",
  "Birebir ve grup ders seçenekleri",
  "Esnek ders saatleri",
  "Online seviye tespit ve takip",
];

const yuzYuzeFeatures = [
  "İstanbul merkez lokasyonları",
  "Akıllı tahta ve multimedya sınıflar",
  "Maksimum 8 kişilik sınıflar",
  "Konuşma kulübü ve atölyeler",
  "Kütüphane ve çalışma alanları",
  "Sertifika töreni",
];

const grupFeatures = [
  "Seviye bazlı gruplandırma",
  "Haftada 3-4 gün ders programı",
  "Konuşma odaklı aktiviteler",
  "Grup projeleri ve sunumlar",
  "Uygun fiyat avantajı",
  "Sosyal öğrenme ortamı",
];

export default function HizmetlerPage() {
  return (
    <PageLayout>
      <PageHero title="Hizmetlerimiz" subtitle="Kapsamlı Çözümler">
        <p>
          Eğitim ihtiyaçlarınıza özel, uçtan uca profesyonel hizmetler
          sunuyoruz.
        </p>
      </PageHero>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
              subtitle="Tüm Hizmetler"
              title="Eğitim Portföyümüz"
            />

          <div className="space-y-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.05}>
                <div
                  id={service.id}
                  className="grid lg:grid-cols-3 gap-8 bg-surface p-8 border border-border scroll-mt-28"
                >
                  <div className="lg:col-span-1">
                    <div className="w-14 h-14 rounded-2xl surface-navy flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-gold-400" />
                    </div>
                    <h3 className="font-heading-normal text-2xl font-bold text-navy-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-navy-700"
                        >
                          <span className="w-1 h-1 bg-gold-600 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button href={service.href} size="sm">
                        Detaylı Bilgi
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="online" className="py-20 surface-navy scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
              subtitle="Online Eğitim"
              title="Her Yerden Öğrenin"
              description="Esnek programlarla evinizin konforunda, canlı dersler ve interaktif materyallerle İngilizce öğrenin."
              light
            />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {onlineFeatures.map((feature, index) => (
              <AnimatedSection key={feature} delay={index * 0.05}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-white/90">
                  {feature}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="yuz-yuze" className="py-20 bg-surface scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
              subtitle="Yüz Yüze Eğitim"
              title="Modern Sınıflarımız"
              description="İstanbul merkezlerimizde, deneyimli eğitmenlerimizle yüz yüze eğitim deneyimi."
            />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {yuzYuzeFeatures.map((feature, index) => (
              <AnimatedSection key={feature} delay={index * 0.05}>
                <div className="bg-white rounded-2xl p-5 border border-border text-navy-700">
                  {feature}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="grup" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
              subtitle="Grup Dersleri"
              title="Birlikte Öğrenin"
              description="Dinamik sınıf ortamında, uygun fiyatlı ve sosyal öğrenme deneyimi."
            />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {grupFeatures.map((feature, index) => (
              <AnimatedSection key={feature} delay={index * 0.05}>
                <div className="bg-surface rounded-2xl p-5 border border-border text-navy-700">
                  {feature}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
