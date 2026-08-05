import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import NavySection from "@/components/ui/NavySection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { ExpandableList } from "@/components/ui/ExpandablePanel";
import ServiceAccordionBlock from "@/components/ui/ServiceAccordionBlock";
import { services, coreSkills } from "@/data/services";
import { getStatCardClass, getStatValueClass, inferStatTone } from "@/lib/statTone";
import {
  serviceAccordionSections,
  onlineProgramDetails,
  yuzYuzeProgramDetails,
} from "@/data/expandableContent";

export const metadata: Metadata = {
  title: "Eğitimlerimiz",
  description:
    "Konuşma odaklı İngilizce eğitimi, online ve yüz yüze birebir/grup dersleri, sınav hazırlık programları ve İtalya & Almanya danışmanlığı — tek sayfada.",
};

const overviewDetails = (paragraphs: string[]) =>
  paragraphs.map((text, i) => ({
    title: `Program Özeti ${i + 1}`,
    summary: text.slice(0, 80) + (text.length > 80 ? "…" : ""),
    content: text,
  }));

export default function EgitimlerimizPage() {
  return (
    <PageLayout>
      <PageHero title="Eğitimlerimiz" subtitle="Konuşma Odaklı Programlar">
        <p>
          3 ayda, 90 derste 0&apos;dan akıcı konuşmaya. Online ve yüz yüze
          birebir/grup dersleri, sınav hazırlığı ve İtalya & Almanya
          danışmanlığına dair tüm detaylar tek sayfada.
        </p>
      </PageHero>

      <section className="py-16 md:py-20 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Metodolojimiz"
            title="Dört Temel Beceri, Konuşma Önceliğiyle"
            description="Speaking, Listening, Reading ve Writing dengeli işlenir; ancak her dersin merkezinde konuşma pratiği vardır."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreSkills.map((skill) => (
              <div
                key={skill.key}
                className={`rounded-3xl p-6 h-full ${
                  skill.priority
                    ? "bg-gradient-to-br from-gold-500 to-gold-600 text-navy-950 shadow-[0_8px_28px_rgba(201,168,58,0.28)]"
                    : "bg-surface text-navy-900"
                }`}
              >
                {skill.priority && (
                  <span className="label-caps text-navy-900/70 block mb-2">
                    #1 Öncelik
                  </span>
                )}
                <h3 className="font-heading-normal text-lg font-bold mb-1">
                  {skill.title}
                </h3>
                <p
                  className={`text-xs mb-3 ${skill.priority ? "text-navy-900/70" : "text-slate-light"}`}
                >
                  {skill.titleTr}
                </p>
                <p
                  className={`text-sm leading-relaxed ${skill.priority ? "text-navy-900/85" : "text-slate"}`}
                >
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gradient-to-b from-white to-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Tüm Programlar"
            title="Eğitim Portföyümüz"
            description="Her program için süreç, kapsam ve sonuç odaklı detaylı bilgiler aşağıdadır. Başlıklara tıklayarak içerikleri açabilirsiniz."
          />

          <div className="space-y-10">
            {services.map((service, index) => {
              const accordionSections = serviceAccordionSections[service.id];
              const isSecondary = service.id === "yurt-disi";

              return (
                <div key={service.id}>
                  {isSecondary && (
                    <div className="flex items-center gap-3 mb-6 mt-2">
                      <span className="h-px flex-1 bg-border" />
                      <span className="label-caps text-slate-light">
                        Ayrıca Sunuyoruz
                      </span>
                      <span className="h-px flex-1 bg-border" />
                    </div>
                  )}
                  <AnimatedSection delay={index * 0.05}>
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
                            {service.highlights.map((h) => {
                              const tone = h.tone ?? inferStatTone(h.label, h.value);
                              return (
                                <span
                                  key={h.label}
                                  className={`inline-flex flex-col rounded-2xl px-3 py-2 shadow-sm ${getStatCardClass(tone)}`}
                                >
                                  <span className="text-[10px] text-slate uppercase tracking-wide">
                                    {h.label}
                                  </span>
                                  <span
                                    className={`text-xs font-semibold ${getStatValueClass(tone)}`}
                                  >
                                    {h.value}
                                  </span>
                                </span>
                              );
                            })}
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
                                Program Detayları
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
                            Detaylı Bilgi Al
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </article>
                  </AnimatedSection>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <NavySection id="online" className="scroll-mt-28">
        <SectionTitle
          subtitle="Online Eğitim"
          title="Her Yerden Öğrenin — Birebir & Grup (Maks 8–10 Kişi)"
          description="Türkiye'nin ve dünyanın her yerinden canlı derslere katılın; birebir veya küçük grup dersini seçin. Başlıklara tıklayarak detayları görün."
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

      <section id="yuz-yuze" className="py-20 md:py-24 bg-surface scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Yüz Yüze Eğitim"
            title="Denizli Merkez Kampüsümüz — Birebir & Grup (Maks 8–10 Kişi)"
            description="Kınıklı'da ulaşımı kolay, tam donanımlı merkezimizde birebir veya küçük grup dersleriyle eğitim deneyimi."
          />

          <AnimatedSection>
            <ExpandableList
              items={yuzYuzeProgramDetails}
              variant="light"
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
