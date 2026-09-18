import Image from "next/image";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const QUICK_LINKS = [
  {
    n: "01",
    title: "Ücretsiz Seviye Tespit",
    desc: "Doğru sınıfa yerleş.",
    href: "/seviye-tespit",
  },
  {
    n: "02",
    title: "Programlar",
    desc: "Online & yüz yüze.",
    href: "/egitimlerimiz",
  },
  {
    n: "03",
    title: "Müfredat",
    desc: "Dört beceri, konuşma önceliği.",
    href: "/ingilizce-egitimi",
  },
  {
    n: "04",
    title: "Yurt Dışı Rotası",
    desc: "İtalya & Almanya.",
    href: "/yurt-disi",
  },
];

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gold-50/50 to-surface section-flow">
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-[36rem] h-[36rem] rounded-full bg-gold-400/20 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 -left-32 w-[30rem] h-[30rem] rounded-full bg-navy-700/10 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 lg:pt-44 pb-14">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div data-reveal-group>
            <span
              data-reveal-item
              className="inline-flex items-center gap-2.5 badge-pill bg-gold-100 text-gold-700 border border-gold-500/30"
            >
              <i className="w-2 h-2 rounded-full bg-gold-500 shadow-[0_0_10px_rgba(201,168,58,0.9)]" />
              Online Konuşma Odaklı İngilizce
            </span>

            <h1
              data-reveal-item
              className="font-heading-normal text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 tracking-tight leading-[1.05] mt-6"
            >
              Sessizlikten
              <br />
              <span className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 bg-clip-text text-transparent">
                akıcı konuşmaya.
              </span>
            </h1>

            <p
              data-reveal-item
              className="text-slate text-base md:text-lg leading-relaxed mt-5 max-w-xl"
            >
              Online konuşma odaklı İngilizce eğitimi: 3 ayda 90 derste
              0&apos;dan akıcı konuşmaya. Önce seviyeni öğren, sonra doğru sınıfa
              yerleş.
            </p>

            <div data-reveal-item className="flex flex-wrap gap-3 mt-8">
              <Button href="/seviye-tespit" size="lg">
                Ücretsiz Seviye Tespit
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/egitimlerimiz" variant="outline" size="lg">
                Programlar
              </Button>
            </div>
          </div>

          <AnimatedSection delay={0.15} className="relative">
            <div className="relative mx-auto max-w-md">
              <div
                aria-hidden
                className="absolute inset-0 -rotate-3 rounded-[2rem] bg-gradient-to-br from-gold-400/50 to-gold-200/40"
              />
              <div className="relative rounded-[2rem] overflow-hidden border border-gold-500/40 shadow-[0_28px_70px_rgba(14,34,64,0.18)]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/english-classroom.jpg"
                    alt="Konuşma odaklı İngilizce sınıfı"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-navy-950/10" />

                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3.5 py-2 text-xs font-bold uppercase tracking-wide text-navy-900 shadow-lg">
                  <Star className="w-3.5 h-3.5 text-gold-500" />
                  A1 → C2 · CEFR
                </span>

                <a
                  href="/seviye-tespit"
                  className="group absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl bg-white/95 backdrop-blur p-3.5 pl-5 pr-3.5 shadow-[0_12px_32px_rgba(8,21,38,0.25)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span className="text-sm font-bold uppercase tracking-wide text-navy-900">
                    <i className="inline-block w-2 h-2 rounded-full bg-gold-500 mr-2" />
                    Ücretsiz Seviye Tespit
                  </span>
                  <span className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 text-white grid place-items-center transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
              </div>

              <div className="relative mt-4 grid grid-cols-2 rounded-2xl border border-gold-500/40 bg-white shadow-[0_10px_28px_rgba(14,34,64,0.1)] overflow-hidden">
                <div className="p-4 sm:p-5 text-center">
                  <div className="font-heading-normal text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent">
                    90
                  </div>
                  <div className="label-caps text-slate-light mt-1">
                    Ders / 3 Ay
                  </div>
                </div>
                <div className="p-4 sm:p-5 text-center border-l border-border">
                  <div className="font-heading-normal text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent">
                    %94
                  </div>
                  <div className="label-caps text-slate-light mt-1">
                    Memnuniyet
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-14">
          {QUICK_LINKS.map((l) => (
            <a
              key={l.n}
              href={l.href}
              className="group flex items-start gap-4 rounded-3xl border border-border bg-white p-5 shadow-[0_2px_12px_rgba(14,34,64,0.05)] hover:shadow-[0_10px_30px_rgba(14,34,64,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="font-heading-normal text-2xl font-bold text-gold-500 group-hover:text-navy-900 transition-colors">
                {l.n}
              </span>
              <span className="min-w-0">
                <span className="block font-heading-normal text-sm font-bold text-navy-900">
                  {l.title}
                </span>
                <span className="block text-xs text-slate-light mt-0.5">
                  {l.desc}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}