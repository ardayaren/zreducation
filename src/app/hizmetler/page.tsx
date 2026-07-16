import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import NavySection from "@/components/ui/NavySection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Yurt dışı eğitim, İngilizce kursları, online ve yüz yüze eğitim, grup dersleri ve sınav hazırlık programları.",
};

const onlineDetails = [
  {
    title: "Canlı İnteraktif Dersler",
    text: "Zoom ve Microsoft Teams üzerinden breakout room aktiviteleri, anlık quiz ve dijital tahta ile yüz yüze ders deneyimi.",
  },
  {
    title: "Kayıt Arşivi",
    text: "Kaçırdığınız dersleri 7/24 izleyin. Her kayıt seviyenize göre etiketlenir ve platformdan erişilebilir.",
  },
  {
    title: "Dijital Öğrenme Platformu",
    text: "Ödev teslimi, kelime listeleri, seviye testleri ve haftalık ilerleme raporları tek panelde.",
  },
  {
    title: "Birebir & Küçük Grup",
    text: "4 kişilik online gruplar veya birebir dersler; yoğun çalışanlar ve yurt dışındaki öğrenciler için ideal.",
  },
  {
    title: "Esnek Ders Saatleri",
    text: "Sabah 09:00, öğle 13:00 ve akşam 19:30 seansları; hafta sonu yoğunlaştırılmış program seçeneği.",
  },
  {
    title: "Online Seviye Takibi",
    text: "Her 4 haftada bir dijital placement testi ve eğitmen geri bildirimi ile gelişiminiz ölçülür.",
  },
];

const yuzYuzeDetails = [
  {
    title: "Levent Merkez Kampüs",
    text: "Beşiktaş Levent'te metro ve otobüs hatlarına 5 dakika mesafede, tam donanımlı eğitim merkezi.",
  },
  {
    title: "Akıllı Sınıflar",
    text: "İnteraktif tahta, kablosuz sunum sistemi ve multimedya laboratuvarı ile modern ders ortamı.",
  },
  {
    title: "Küçük Sınıflar",
    text: "Maksimum 8 kişilik sınıflar; her öğrenci aktif konuşma pratiği ve bireysel geri bildirim alır.",
  },
  {
    title: "Konuşma Kulübü & Atölyeler",
    text: "Haftalık debate, film gecesi ve sunum atölyeleriyle İngilizceyi sınıf dışında da yaşayın.",
  },
  {
    title: "Kütüphane & Çalışma Alanı",
    text: "CEFR seviyesine göre kitap önerileri, sessiz çalışma odaları ve ücretsiz Wi-Fi.",
  },
  {
    title: "Sertifika Töreni",
    text: "Seviye tamamlayan öğrencilerimize CEFR uyumlu bitirme sertifikası ve mezuniyet etkinliği.",
  },
];

const grupDetails = [
  {
    title: "Seviye Bazlı Gruplandırma",
    text: "Language Hub placement testi ve sözlü değerlendirme ile homojen sınıflar oluşturulur.",
  },
  {
    title: "Haftalık Program",
    text: "3 veya 4 gün seçenekleri; sabah ve akşam grupları mevcuttur. Toplam 6–8 saat / hafta.",
  },
  {
    title: "Konuşma Odaklı Aktiviteler",
    text: "Rol oyunları, grup projeleri ve tartışma oturumlarıyla aktif üretim odaklı dersler.",
  },
  {
    title: "Grup Projeleri",
    text: "Sunum, poster ve mini-debate projeleriyle takım çalışması ve özgüven gelişimi.",
  },
  {
    title: "Ekonomik Avantaj",
    text: "Birebir eğitime kıyasla %35'e varan maliyet avantajı; aynı müfredat kalitesi.",
  },
  {
    title: "Sosyal Öğrenme Ortamı",
    text: "Benzer hedefli öğrencilerle motivasyon yüksek, destekleyici sınıf kültürü.",
  },
];

export default function HizmetlerPage() {
  return (
    <PageLayout>
      <PageHero title="Hizmetlerimiz" subtitle="Kapsamlı Çözümler">
        <p>
          Yurt dışı eğitimden İngilizce programlarına, online ve yüz yüze
          derslerden sınav hazırlığına kadar uçtan uca profesyonel danışmanlık
          ve eğitim hizmetleri sunuyoruz.
        </p>
      </PageHero>

      <section className="py-20 md:py-24 bg-gradient-to-b from-white to-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Tüm Hizmetler"
            title="Eğitim Portföyümüz"
            description="Her hizmet için süreç, kapsam ve sonuç odaklı detaylı bilgiler aşağıdadır."
          />

          <div className="space-y-10">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.05}>
                <article
                  id={service.id}
                  className="soft-card scroll-mt-28 overflow-hidden"
                >
                  <div className="grid lg:grid-cols-12 gap-0">
                    <div className="lg:col-span-5 p-8 md:p-10 bg-gradient-to-br from-surface to-white border-b lg:border-b-0 lg:border-r border-border/40">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center mb-5 shadow-md">
                        <service.icon className="w-7 h-7 text-gold-400" />
                      </div>
                      <h3 className="font-heading-normal text-2xl font-bold text-navy-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-slate leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <p className="text-sm text-navy-700/80 leading-relaxed mb-6">
                        {service.detailIntro}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.highlights.map((h) => (
                          <span
                            key={h.label}
                            className="inline-flex flex-col rounded-2xl bg-white px-3 py-2 shadow-sm"
                          >
                            <span className="text-[10px] text-slate uppercase tracking-wide">
                              {h.label}
                            </span>
                            <span className="text-xs font-semibold text-navy-900">
                              {h.value}
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-7 p-8 md:p-10">
                      <span className="label-caps text-gold-600 block mb-4">
                        Detaylı Bilgi
                      </span>

                      <div className="space-y-3 mb-8">
                        {service.details.map((paragraph) => (
                          <p
                            key={paragraph.slice(0, 24)}
                            className="text-sm text-slate leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature) => (
                          <div
                            key={feature.title}
                            className="rounded-2xl bg-surface/80 p-4"
                          >
                            <h4 className="text-sm font-semibold text-navy-900 mb-1.5">
                              {feature.title}
                            </h4>
                            <p className="text-xs text-slate leading-relaxed">
                              {feature.text}
                            </p>
                          </div>
                        ))}
                      </div>

                      <Button href={service.href} size="sm">
                        Sayfaya Git
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <NavySection id="online" className="scroll-mt-20">
        <SectionTitle
          subtitle="Online Eğitim"
          title="Her Yerden Öğrenin"
          description="Türkiye'nin ve dünyanın her yerinden canlı derslere katılın. Kayıt arşivi ve dijital platform ile öğrenme hiç durmaz."
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {onlineDetails.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.05}>
              <div className="navy-card-glass p-5 h-full">
                <h4 className="text-sm font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </NavySection>

      <section id="yuz-yuze" className="py-20 md:py-24 bg-surface scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Yüz Yüze Eğitim"
            title="Levent Kampüsümüz"
            description="İstanbul'un kalbinde, ulaşımı kolay ve tam donanımlı merkezimizde yüz yüze eğitim deneyimi."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {yuzYuzeDetails.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.05}>
                <div className="bg-white rounded-3xl p-5 shadow-sm h-full">
                  <h4 className="text-sm font-semibold text-navy-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="grup" className="py-20 md:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Grup Dersleri"
            title="Birlikte Öğrenin"
            description="Küçük sınıflarda sosyal öğrenme, konuşma pratiği ve ekonomik program avantajı."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {grupDetails.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.05}>
                <div className="bg-surface rounded-3xl p-5 h-full">
                  <h4 className="text-sm font-semibold text-navy-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="text-center mt-12">
              <p className="text-sm text-slate mb-6 max-w-xl mx-auto">
                Hangi programın size uygun olduğundan emin değil misiniz?
                Ücretsiz seviye tespit sınavımızla başlayın, danışmanlarımız
                size en doğru programı önersin.
              </p>
              <Button href="/seviye-tespit" size="lg">
                Ücretsiz Seviye Tespit
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
