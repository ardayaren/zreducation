import { Check, Star, ArrowRight, GraduationCap, Users } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { onlineCourses } from "@/data/onlineCourses";

const featured90 = onlineCourses.find((c) => c.id === "3-ayda-90-ders");
const featuredBirebir = onlineCourses.find((c) => c.id === "birebir-online");

const levelCourses = onlineCourses.filter((c) =>
  ["A1", "A2", "B1", "B2", "C1"].includes(c.level)
);

const levelNames: Record<string, string> = {
  A1: "Başlangıç",
  A2: "Temel",
  B1: "Orta Alt",
  B2: "Orta Üst",
  C1: "İleri",
};

export default function PackagesSection() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-surface/60 to-white border-b border-border section-flow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Eğitim Paketleri"
          title="En Çok Tercih Edilen Programlar"
          description="Her program konuşma odaklıdır; online veya yüz yüze, birebir ya da maks 8–10 kişilik gruplarla. Fiyat bilgisi için bize yazın, 7/24 yanınızdayız."
        />

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-10">
          {featured90 && (
            <AnimatedSection>
              <div className="relative h-full flex flex-col rounded-3xl overflow-hidden border border-gold-400 shadow-[0_8px_32px_rgba(201,168,58,0.18)] surface-navy">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
                <span className="absolute top-4 right-4 badge-pill bg-gold-500 text-navy-950 text-[10px] inline-flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  En Çok Tercih Edilen
                </span>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <span className="badge-pill w-fit mb-3 bg-white/15 text-white">
                    {featured90.format}
                  </span>
                  <span className="label-caps text-gold-300 mb-2">
                    {featured90.level} · {featured90.duration} ·{" "}
                    {featured90.lessons} ders
                  </span>
                  <h3 className="font-heading-normal text-xl md:text-2xl font-bold text-white mb-2">
                    {featured90.title}
                  </h3>
                  <p className="text-sm text-white/60 mb-5">
                    {featured90.subtitle}
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {featured90.features.map((f) => (
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
                    href={`/iletisim?paket=${featured90.id}`}
                    className="w-full"
                    size="lg"
                  >
                    Bilgi Al &amp; Kayıt Ol
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          )}

          {featuredBirebir && (
            <AnimatedSection delay={0.1}>
              <div className="relative h-full flex flex-col rounded-3xl overflow-hidden border border-gold-400 shadow-[0_8px_32px_rgba(201,168,58,0.18)] bg-white">
                <span className="absolute top-4 right-4 badge-pill bg-gold-500 text-navy-950 text-[10px] inline-flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  En Çok Tercih Edilen
                </span>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <span className="badge-pill w-fit mb-3 bg-navy-900 text-white inline-flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {featuredBirebir.format}
                  </span>
                  <span className="label-caps text-gold-600 mb-2">
                    {featuredBirebir.level} · {featuredBirebir.duration} ·{" "}
                    {featuredBirebir.lessons} ders
                  </span>
                  <h3 className="font-heading-normal text-xl md:text-2xl font-bold text-navy-900 mb-2">
                    {featuredBirebir.title}
                  </h3>
                  <p className="text-sm text-slate mb-5">
                    {featuredBirebir.subtitle}
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {featuredBirebir.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-slate"
                      >
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href={`/iletisim?paket=${featuredBirebir.id}`}
                    className="w-full"
                    size="lg"
                  >
                    Bilgi Al &amp; Kayıt Ol
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>

        <AnimatedSection delay={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {levelCourses.map((course) => (
              <div
                key={course.id}
                className="group rounded-3xl border border-border bg-white shadow-[0_2px_12px_rgba(14,34,64,0.05)] hover:shadow-[0_8px_28px_rgba(14,34,64,0.1)] hover:-translate-y-1 transition-all duration-300 p-5 md:p-6 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading-normal text-2xl md:text-3xl font-bold text-gold-600">
                    {course.level}
                  </span>
                  <GraduationCap className="w-5 h-5 text-navy-300" />
                </div>
                <h3 className="font-heading-normal text-sm font-bold text-navy-900 mb-1">
                  {levelNames[course.level] ?? course.level}
                </h3>
                <p className="text-xs text-slate-light mb-4">
                  {course.lessons} ders · {course.duration}
                </p>
                <div className="mt-auto">
                  <a
                    href={`/iletisim?paket=${course.id}`}
                    className="inline-flex items-center gap-1.5 label-caps text-gold-600 group-hover:text-navy-900 transition-colors text-[11px]"
                  >
                    Bilgi Al
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <div className="mt-10 text-center">
            <Button href="/egitimlerimiz" variant="secondary" size="lg">
              Tüm Paketleri İnceleyin
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}