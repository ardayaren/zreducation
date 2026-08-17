import type { Metadata } from "next";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import NavySection from "@/components/ui/NavySection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { ExpandableList } from "@/components/ui/ExpandablePanel";
import ServiceAccordionBlock from "@/components/ui/ServiceAccordionBlock";
import { services, coreSkills } from "@/data/services";
import { onlineCourses, yuzYuzeCourses } from "@/data/onlineCourses";
import { contactInfo } from "@/data/contact";
import { getStatCardClass, getStatValueClass, inferStatTone } from "@/lib/statTone";
import {
  serviceAccordionSections,
  onlineProgramDetails,
  yuzYuzeProgramDetails,
} from "@/data/expandableContent";

export const metadata: Metadata = {
  title: "Eğitimlerimiz",
  description:
    "Konuşma odaklı İngilizce eğitimi, online ve yüz yüze birebir/grup dersleri, fiyatlar, sınav hazırlık programları ve öğrenci paneli — tek sayfada.",
};

function formatPrice(n: number) {
  return new Intl.NumberFormat("tr-TR").format(n);
}

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
          birebir/grup dersleri, Speaking/Listening/Reading/Writing odaklı
          CEFR müfredatıyla tek sayfada. Asıl hedefimiz sizi İngilizce
          konuşturmak — bilgi almak için yazın, 7/24 WhatsApp&apos;tayız.
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
                        Ek Danışmanlık Hizmeti
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

                          <div className="flex flex-wrap gap-3">
                            <Button
                              href={`/iletisim?paket=${service.id}`}
                              size="sm"
                            >
                              Bilgi Al &amp; Kayıt Ol
                              <ArrowRight className="w-4 h-4" />
                            </Button>
                            <Button
                              href={service.href}
                              variant="outline"
                              size="sm"
                            >
                              Program Detayları
                            </Button>
                          </div>
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

      <section className="py-20 md:py-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Paketler & Fiyatlar"
            title="Eğitim Paketleri"
            description="Tüm paketler konuşma odaklıdır; Speaking, Listening, Reading ve Writing becerileri dengeli gelişir. Fiyat ve kontenjan için yazın, 7/24 yanınızdayız."
          />
        </div>
      </section>

      <NavySection id="online" className="scroll-mt-28">
        <SectionTitle
          subtitle="Online Eğitim Paketleri"
          title="Her Yerden Öğrenin — Birebir & Grup (Maks 8–10 Kişi)"
          description="Türkiye'nin ve dünyanın her yerinden canlı derslere katılın; birebir veya küçük grup dersini seçin. 'Bilgi Al' ile paket detaylarını ve güncel fiyatları öğrenin."
          light
        />

        <AnimatedSection>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {onlineCourses.map((course) => (
              <article
                key={course.id}
                className={`relative h-full flex flex-col rounded-3xl overflow-hidden border ${
                  course.popular
                    ? "border-gold-400 shadow-[0_8px_32px_rgba(201,168,58,0.15)] navy-card-glass"
                    : "border-white/10 navy-card-glass"
                } bg-white/5`}
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
                        ? "bg-white/15 text-white"
                        : "bg-emerald-500/15 text-emerald-300"
                    }`}
                  >
                    {course.format}
                  </span>
                  <span className="label-caps text-gold-300 mb-2">
                    {course.level} · {course.duration} · {course.lessons} ders
                  </span>
                  <h3 className="font-heading-normal text-lg font-bold text-white mb-1">
                    {course.title}
                  </h3>
                  <p className="text-sm text-white/60 mb-4">{course.subtitle}</p>

                  <ul className="space-y-1.5 mb-6 flex-1">
                    {course.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-xs text-white/70"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-end gap-2 mb-4">
                    <span className="font-heading-normal text-2xl font-bold text-gold-400 tabular-nums">
                      {formatPrice(course.price)} ₺
                    </span>
                    <span className="text-sm text-white/40 line-through tabular-nums">
                      {formatPrice(course.originalPrice)} ₺
                    </span>
                  </div>

                  <Button
                    href={`/iletisim?paket=${course.id}`}
                    className="w-full"
                    size="sm"
                  >
                    Bilgi Al &amp; Kayıt Ol
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <ExpandableList
            items={onlineProgramDetails}
            variant="navy"
            defaultOpenIndex={-1}
          />
        </AnimatedSection>
      </NavySection>

      <section id="yuz-yuze" className="py-20 md:py-24 bg-surface scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Yüz Yüze Eğitim Paketleri"
            title="Denizli Merkez Kampüsümüz — Birebir & Grup (Maks 8–10 Kişi)"
            description="Kınıklı'da ulaşımı kolay, tam donanımlı merkezimizde birebir veya küçük grup dersleriyle eğitim deneyimi. Denizli'deyseniz yüz yüze görüşme için bize ulaşın."
          />

          <AnimatedSection>
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
              {yuzYuzeCourses.map((course) => (
                <article
                  key={course.id}
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
                      {course.level} · {course.duration} · {course.lessons} ders
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
                      Bilgi Al &amp; Kayıt Ol
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <ExpandableList
              items={yuzYuzeProgramDetails}
              variant="light"
              defaultOpenIndex={-1}
            />
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="grid md:grid-cols-3 gap-4 mt-12">
              <div className="soft-card p-6">
                <h3 className="font-heading-normal text-sm font-bold text-navy-900 mb-2">
                  Hangi seviyeden başlamalıyım?
                </h3>
                <p className="text-sm text-slate mb-4">
                  Ücretsiz seviye tespit sınavımız ile seviyenizi belirleyin,
                  ardından konuşma (speaking) görüşmesiyle netleşsin.
                </p>
                <Button href="/seviye-tespit" size="sm">
                  Ücretsiz Seviye Tespit
                </Button>
              </div>
              <div className="soft-card p-6">
                <h3 className="font-heading-normal text-sm font-bold text-navy-900 mb-2">
                  Birebir mi, grup mu?
                </h3>
                <p className="text-sm text-slate mb-4">
                  Hızlı ilerleme için birebir, sosyal öğrenme için maks 8–10
                  kişilik grup dersini seçin. Danışmanlarımız önerir.
                </p>
                <Button
                  href={contactInfo.whatsapp.href}
                  variant="outline"
                  size="sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp&apos;tan Sorun
                </Button>
              </div>
              <div className="soft-card p-6">
                <h3 className="font-heading-normal text-sm font-bold text-navy-900 mb-2">
                  Gelişiminizi nasıl takip edersiniz?
                </h3>
                <p className="text-sm text-slate mb-4">
                  Eğitmenlerimiz her ders sonrası not alır, her 4 haftada
                  rapor hazırlanır; öğrenci panelinizden tümünü izlersiniz.
                </p>
                <Button href="/ogrenci-paneli" variant="outline" size="sm">
                  Öğrenci Paneli
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
