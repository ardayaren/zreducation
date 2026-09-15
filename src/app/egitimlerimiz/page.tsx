import type { Metadata } from "next";
import { Check, MessageCircle } from "lucide-react";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import NavySection from "@/components/ui/NavySection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { ExpandableList } from "@/components/ui/ExpandablePanel";
import { coreSkills } from "@/data/services";
import { onlineCourses, yuzYuzeCourses } from "@/data/onlineCourses";
import { contactInfo } from "@/data/contact";
import {
  onlineProgramDetails,
  yuzYuzeProgramDetails,
} from "@/data/expandableContent";

export const metadata: Metadata = {
  title: "Eğitimlerimiz",
  description:
    "Konuşma odaklı İngilizce eğitimi, online ve yüz yüze birebir/grup dersleri, sınav hazırlık programları ve öğrenci paneli — tek sayfada.",
};

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
                        className="flex items-start gap-2 text-sm text-white/70"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-4 rounded-2xl bg-white/8 border border-white/10 px-4 py-3 text-sm text-white/70">
                    Fiyat bilgisi için &quot;Bilgi Al &amp; Kayıt Ol&quot; ile
                    bize yazın — güncel fiyat ve kontenjanı paylaşalım.
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
                          className="flex items-start gap-2 text-sm text-slate"
                        >
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mb-4 rounded-2xl bg-surface-2 px-4 py-3 text-sm text-slate">
                    Fiyat bilgisi için &quot;Bilgi Al &amp; Kayıt Ol&quot; ile
                    bize yazın — güncel fiyat ve kontenjanı paylaşalım.
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
                <h3 className="font-heading-normal text-lg font-bold text-navy-900 mb-2">
                  Hangi seviyeden başlamalıyım?
                </h3>
                <p className="text-base text-slate mb-4">
                  Ücretsiz seviye tespit sınavımız ile seviyenizi belirleyin,
                  ardından konuşma (speaking) görüşmesiyle netleşsin.
                </p>
                <Button href="/seviye-tespit" size="sm">
                  Ücretsiz Seviye Tespit
                </Button>
              </div>
              <div className="soft-card p-6">
                <h3 className="font-heading-normal text-lg font-bold text-navy-900 mb-2">
                  Birebir mi, grup mu?
                </h3>
                <p className="text-base text-slate mb-4">
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
                <h3 className="font-heading-normal text-lg font-bold text-navy-900 mb-2">
                  Gelişiminizi nasıl takip edersiniz?
                </h3>
                <p className="text-base text-slate mb-4">
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
                <h3 className="font-heading-normal text-xl font-bold mb-1">
                  {skill.title}
                </h3>
                <p
                  className={`text-sm mb-3 ${skill.priority ? "text-navy-900/70" : "text-slate-light"}`}
                >
                  {skill.titleTr}
                </p>
                <p
                  className={`text-base leading-relaxed ${skill.priority ? "text-navy-900/85" : "text-slate"}`}
                >
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}