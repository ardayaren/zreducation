import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import NavySection from "@/components/ui/NavySection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { coreSkills } from "@/data/services";
import { onlineCourses } from "@/data/onlineCourses";

export const metadata: Metadata = {
  title: "Eğitimlerimiz",
  description:
    "Konuşma odaklı İngilizce eğitimi, online ve yüz yüze birebir/grup dersleri, sınav hazırlık programları ve öğrenci paneli — tek sayfada.",
};

const levelNames: Record<string, string> = {
  A1: "Başlangıç",
  A2: "Temel",
  B1: "Orta Alt",
  B2: "Orta Üst",
  C1: "İleri",
  C2: "Uzman",
};

const featuredCourses = onlineCourses.filter((c) => c.popular);
const levelCourses = onlineCourses.filter((c) =>
  ["A1", "A2", "B1", "B2", "C1", "C2"].includes(c.level)
);
const specialCourses = onlineCourses.filter(
  (c) =>
    !c.popular && !["A1", "A2", "B1", "B2", "C1", "C2"].includes(c.level)
);

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
          description="Türkiye'nin ve dünyanın her yerinden canlı derslere katılın; birebir veya küçük grup dersini seçin. Güncel fiyat ve kontenjan için 'Bilgi Al & Kayıt Ol' ile bize yazın."
          light
        />

        {/* En Çok Tercih Edilen */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-6 mb-6">
          {featuredCourses.map((course) => (
            <AnimatedSection key={course.id}>
              <article className="relative h-full flex flex-col rounded-3xl border border-gold-400/60 bg-gradient-to-br from-white/[0.09] to-white/[0.02] p-6 md:p-8 overflow-hidden shadow-[0_8px_32px_rgba(201,168,58,0.12)]">
                <span className="badge-pill w-fit bg-gold-500 text-navy-950 mb-4">
                  {course.badge}
                </span>
                <span className="label-caps text-gold-300 mb-2">
                  {course.format}
                </span>
                <h3 className="font-heading-normal text-xl md:text-2xl font-bold text-white mb-2">
                  {course.title}
                </h3>
                <p className="text-sm md:text-base text-white/60 mb-3">
                  {course.subtitle}
                </p>
                <span className="text-sm font-semibold text-gold-300 mb-4">
                  {course.level} · {course.duration} · {course.lessons} ders
                </span>
                <ul className="space-y-2 mb-6 flex-1">
                  {course.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-white/75"
                    >
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href={`/iletisim?paket=${course.id}`}
                  className="w-full"
                  size="lg"
                >
                  Bilgi Al &amp; Kayıt Ol
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {/* CEFR seviye paketleri — A1–C2 */}
        <AnimatedSection delay={0.1}>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 md:p-6 mb-6">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
              <h3 className="font-heading-normal text-base md:text-lg font-bold text-white">
                Seviye Paketleri — Her Seviye 32 Ders
              </h3>
              <span className="text-xs text-white/50 uppercase tracking-wide">
                A1 → C2 · CEFR
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
              {levelCourses.map((course) => (
                <a
                  key={course.id}
                  href={`/iletisim?paket=${course.id}`}
                  className="group rounded-2xl border border-white/10 bg-white/[0.05] hover:bg-white/[0.12] hover:border-gold-400/50 p-4 md:p-5 text-center transition-all duration-300"
                >
                  <span className="block font-heading-normal text-2xl md:text-3xl font-extrabold text-gold-400 group-hover:text-gold-300 transition-colors">
                    {course.level}
                  </span>
                  <span className="block text-xs md:text-sm font-semibold text-white/80 mt-1">
                    {levelNames[course.level] ?? course.level}
                  </span>
                  <span className="block text-xs text-white/40 mt-1.5">
                    {course.lessons} ders · {course.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-gold-300 mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
                    Bilgi Al
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Özel programlar */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-6">
          {specialCourses.map((course) => (
            <AnimatedSection key={course.id} delay={0.15}>
              <article className="relative h-full flex flex-col rounded-3xl border border-white/10 bg-white/[0.05] p-6 md:p-7 overflow-hidden">
                <span className="badge-pill w-fit bg-emerald-500/15 text-emerald-300 mb-3">
                  {course.format}
                </span>
                <span className="label-caps text-gold-300 mb-2">
                  {course.level} · {course.duration} · {course.lessons} ders
                </span>
                <h3 className="font-heading-normal text-lg md:text-xl font-bold text-white mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-white/60 mb-4">{course.subtitle}</p>
                <ul className="space-y-1.5 mb-6 flex-1">
                  {course.features.slice(0, 3).map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-white/70"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href={`/iletisim?paket=${course.id}`}
                  className="w-full"
                  size="sm"
                >
                  Bilgi Al &amp; Kayıt Ol
                </Button>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="rounded-3xl bg-gold-500/[0.08] border border-gold-400/30 px-6 md:px-8 py-6 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
            <div>
              <h3 className="font-heading-normal text-base md:text-lg font-bold text-white">
                Fiyat ve kontenjan için bize yazın
              </h3>
              <p className="text-sm text-white/60 mt-1">
                WhatsApp destek hattımız 7/24 açık — güncel fiyat, kampanya ve
                kontenjan bilgisini anında paylaşalım.
              </p>
            </div>
            <Button
              href="/iletisim"
              size="lg"
              className="shrink-0 w-full md:w-auto"
            >
              Kayıt Formu
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
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