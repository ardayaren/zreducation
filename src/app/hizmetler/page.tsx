import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import NavySection from "@/components/ui/NavySection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { ExpandableList } from "@/components/ui/ExpandablePanel";
import ServiceAccordionBlock from "@/components/ui/ServiceAccordionBlock";
import { services } from "@/data/services";
import {
  serviceAccordionSections,
  onlineProgramDetails,
  yuzYuzeProgramDetails,
  grupProgramDetails,
} from "@/data/expandableContent";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Yurt dışı eğitim, İngilizce kursları, online ve yüz yüze eğitim, grup dersleri ve sınav hazırlık programları.",
};

const overviewDetails = (paragraphs: string[]) =>
  paragraphs.map((text, i) => ({
    title: `Program Özeti ${i + 1}`,
    summary: text.slice(0, 80) + (text.length > 80 ? "…" : ""),
    content: text,
  }));

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
            description="Her hizmet için süreç, kapsam ve sonuç odaklı detaylı bilgiler aşağıdadır. Başlıklara tıklayarak içerikleri açabilirsiniz."
          />

          <div className="space-y-10">
            {services.map((service, index) => {
              const accordionSections = serviceAccordionSections[service.id];

              return (
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

                        <div className="mb-6">
                          <h4 className="text-xs font-semibold text-navy-700/70 uppercase tracking-wide mb-3">
                            Genel Bakış
                          </h4>
                          <ExpandableList
                            items={overviewDetails(service.details)}
                            variant="surface"
                            defaultOpenIndex={0}
                          />
                        </div>

                        {accordionSections ? (
                          <div className="mb-8">
                            <ServiceAccordionBlock sections={accordionSections} />
                          </div>
                        ) : (
                          <div className="mb-8">
                            <h4 className="text-xs font-semibold text-navy-700/70 uppercase tracking-wide mb-3">
                              Hizmet Detayları
                            </h4>
                            <ExpandableList
                              items={service.features.map((f) => ({
                                title: f.title,
                                summary: f.text,
                                content: f.text,
                              }))}
                              variant="surface"
                            />
                          </div>
                        )}

                        <Button href={service.href} size="sm">
                          Sayfaya Git
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <NavySection id="online" className="scroll-mt-20">
        <SectionTitle
          subtitle="Online Eğitim"
          title="Her Yerden Öğrenin"
          description="Türkiye'nin ve dünyanın her yerinden canlı derslere katılın. Başlıklara tıklayarak detayları görün."
          light
        />

        <AnimatedSection>
          <ExpandableList
            items={onlineProgramDetails}
            variant="navy"
            defaultOpenIndex={0}
          />
        </AnimatedSection>
      </NavySection>

      <section id="yuz-yuze" className="py-20 md:py-24 bg-surface scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Yüz Yüze Eğitim"
            title="Levent Kampüsümüz"
            description="İstanbul'un kalbinde, ulaşımı kolay ve tam donanımlı merkezimizde yüz yüze eğitim deneyimi."
          />

          <AnimatedSection>
            <ExpandableList
              items={yuzYuzeProgramDetails}
              variant="light"
              defaultOpenIndex={0}
            />
          </AnimatedSection>
        </div>
      </section>

      <section id="grup" className="py-20 md:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Grup Dersleri"
            title="Birlikte Öğrenin"
            description="Küçük sınıflarda sosyal öğrenme, konuşma pratiği ve ekonomik program avantajı."
          />

          <AnimatedSection>
            <ExpandableList
              items={grupProgramDetails}
              variant="gold"
              defaultOpenIndex={0}
            />
          </AnimatedSection>

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
