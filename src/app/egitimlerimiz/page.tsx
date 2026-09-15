import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import NavySection from "@/components/ui/NavySection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { ExpandableList } from "@/components/ui/ExpandablePanel";
import { coreSkills } from "@/data/services";
import { onlineCourses } from "@/data/onlineCourses";
import { onlineProgramDetails } from "@/data/expandableContent";

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
                className={`relative h-full flex flex-col rounded-3xl overflow-hidden border transition-shadow duration-300 ${
                  course.popular
                    ? "border-gold-400/70 shadow-[0_8px_32px_rgba(201,168,58,0.2)] bg-gradient-to-br from-gold-500/[0.14] via-white/[0.05] to-transparent"
                    : "border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
                } navy-card-glass`}
              >
                {course.badge && (
                  <span
                    className={`absolute top-4 right-4 badge-pill text-[11px] ${
                      course.popular
                        ? "bg-gold-500 text-navy-950"
                        : "bg-white/15 text-white"
                    }`}
                  >
                    {course.badge}
                  </span>
                )}
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <span
                    className={`badge-pill w-fit mb-3 ${
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
                  <h3 className="font-heading-normal text-lg md:text-xl font-bold text-white mb-1.5">
                    {course.title}
                  </h3>
                  <p className="text-sm md:text-[15px] text-white/60 mb-5">
                    {course.subtitle}
                  </p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {course.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm md:text-[15px] text-white/75"
                      >
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-4 rounded-2xl bg-gold-500/[0.08] border border-gold-400/20 px-4 py-3 text-sm text-gold-200 leading-relaxed">
                    Fiyat bilgisi için &quot;Bilgi Al &amp; Kayıt Ol&quot; ile
                    yazın — güncel fiyat ve kontenjanı paylaşalım.
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