import type { Metadata } from "next";
import { Quote, Award, Users, GraduationCap, TrendingUp } from "lucide-react";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { ExpandableList } from "@/components/ui/ExpandablePanel";
import {
  hakkimizdaValueDetails,
  hakkimizdaTeamDetails,
} from "@/data/expandableContent";
import { siteConfig } from "@/lib/siteConfig";
import { contactInfo } from "@/data/contact";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Hakkımızda",
  description:
    "Merkezi Denizli'de olan Zreducation — konuşma odaklı İngilizce eğitimi, online ve yüz yüze dersler, İtalya & Almanya danışmanlığı.",
  path: "/hakkimizda",
});

const aboutStats = [
  { icon: Award, value: "15+", label: "Yıllık Deneyim", percent: 100 },
  { icon: Users, value: "5000+", label: "Mezun Öğrenci", percent: 92 },
  { icon: GraduationCap, value: "90", label: "Derste Akıcı Konuşma", percent: 100 },
  { icon: TrendingUp, value: "%94", label: "Memnuniyet Oranı", percent: 94 },
];

const milestones = [
  { year: "2009", text: "Zreducation, Denizli Kınıklı'da eğitim vermeye başladı." },
  { year: "2014", text: "Konuşma odaklı İngilizce programı ve grup dersleri genişletildi." },
  { year: "2019", text: "Online eğitim platformu ve canlı Zoom dersleri başlatıldı." },
  { year: "2023", text: "Konuşma odaklı '3 ayda 90 ders' metodolojisi hayata geçti." },
  { year: "2025", text: "Öğrenci paneli ve 4 haftalık ilerleme raporları devreye alındı." },
];

export default function HakkimizdaPage() {
  return (
    <PageLayout>
      <PageHero title="Hakkımızda" subtitle="Online & Denizli Merkez">
        <p>
          Zreducation, merkezi Denizli&apos;de olan, konuşma odaklı İngilizce
          eğitimiyle Türkiye&apos;nin her yerine ulaşan bir eğitim kurumudur.
          Asıl amacımız öğrencilerimizi İngilizce konuşturmak — online ve yüz
          yüze, birebir ve grup derslerinde.
        </p>
      </PageHero>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedSection>
              <SectionTitle
                subtitle="Hikayemiz"
                title="Konuşma Odaklı Eğitim"
                align="left"
              />
              <div className="space-y-5 text-slate leading-relaxed text-base md:text-lg">
                <p>
                  Zreducation, 2009 yılında Denizli Kınıklı&apos;da kuruldu.
                  Bugüne dek 5.000&apos;den fazla öğrenciyi İngilizce
                  konuşturmak için çalıştık. Türkiye&apos;de birçok kurum
                  gramere odaklanır; biz ise dersin merkezine her zaman
                  konuşmayı koyarız.
                </p>
                <p>
                  Speaking, Listening, Reading ve Writing olmak üzere dört
                  temel beceri üzerine kurulu, konuşma ağırlıklı CEFR uyumlu
                  Language Hub müfredatımızla &quot;3 ayda 90 derste sıfırdan
                  akıcı konuşma&quot; hedefini öğrencilerimizle birlikte
                  gerçekleştiriyoruz.
                </p>
                <p>
                  {siteConfig.address} adresindeki merkezimizde birebir ve
                  maks 8–10 kişilik grup dersleri; Zoom ve Microsoft Teams
                  üzerinden tüm Türkiye&apos;ye online eğitim veriyoruz.
                  Denizli&apos;de yaşayan öğrencilerimizi yüz yüze görüşme ve
                  ders için kampüsümüze her zaman bekleriz.
                </p>
                <p>
                  Öğrenci gelişimini ciddiye alırız: Eğitmenlerimiz her ders
                  sonrası not tutar, her 4 haftada bir ilerleme raporu
                  hazırlanır ve öğrencilerimiz panelimizden tüm süreci izler.
                  %94 öğrenci memnuniyet oranımızla Denizli&apos;nin güvenilir
                  eğitim markası olmaktan gurur duyuyoruz.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-3xl border border-border bg-white shadow-[0_8px_32px_rgba(14,34,64,0.06)] p-5 md:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {aboutStats.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center gap-4 rounded-2xl border border-border/70 bg-gradient-to-br from-surface to-white p-4"
                    >
                      <span className="w-12 h-12 shrink-0 rounded-2xl bg-navy-900 flex items-center justify-center shadow-md">
                        <s.icon className="w-6 h-6 text-gold-400" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="font-heading-normal text-2xl md:text-3xl font-bold text-navy-900 leading-none tabular-nums">
                          {s.value}
                        </div>
                        <div className="text-sm text-slate mt-1.5 leading-snug">
                          {s.label}
                        </div>
                        <div className="progress-track h-1.5 mt-2.5">
                          <div
                            className="progress-fill h-full"
                            style={{ width: `${s.percent}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="soft-card p-8 md:p-12 relative overflow-hidden">
              <Quote className="w-10 h-10 text-gold-200 absolute top-6 right-6" />
              <span className="badge-pill bg-gold-100 text-gold-700 mb-5">
                Kurucudan Mesaj
              </span>
              <p className="text-xl md:text-2xl font-heading-normal text-navy-900 leading-relaxed mb-6 max-w-3xl">
                &quot;Bizim için İngilizce öğrenmek demek, İngilizce
                konuşabilmek demektir. Amacımız her öğrencimizin sınıfta en az
                bir kez söz alması, kendine güvenerek konuşması ve bunu günlük
                hayata taşımasıdır. Gelişiminizi her 4 haftada bir raporluyor,
                ders kayıtlarınızı ve ödevlerinizi panelinizden takip
                ediyoruz. Sorularınız için 7/24 WhatsApp&apos;tayız.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center text-gold-400 font-heading-normal font-bold">
                  {contactInfo.founder.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-heading-normal font-bold text-navy-900">
                    {contactInfo.founder.name}
                  </p>
                  <p className="text-xs text-slate-light">
                    {contactInfo.founder.title}
                  </p>
                </div>
                <Button href="/iletisim" size="sm" className="ml-auto hidden sm:inline-flex">
                  İletişime Geç
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Yolculuğumuz"
            title="Zreducation Zaman Çizelgesi"
            description="2009'dan bugüne kurumsal gelişimimiz."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {milestones.map((m) => (
              <AnimatedSection key={m.year}>
                <div className="rounded-3xl bg-surface p-6 h-full">
                  <span className="font-heading-normal text-3xl font-bold text-gold-600 block mb-2">
                    {m.year}
                  </span>
                  <p className="text-base text-slate leading-relaxed">{m.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="vizyon" className="py-16 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Vizyon & Misyon"
            title="Neye İnanıyoruz?"
            description="Kurumsal değerlerimiz ve hedeflerimiz."
          />

          <AnimatedSection>
            <ExpandableList
              items={hakkimizdaValueDetails}
              variant="light"
              defaultOpenIndex={0}
            />
          </AnimatedSection>
        </div>
      </section>

      <section id="ekip" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Ekibimiz"
            title="Uzman Kadromuz"
            description="Konuşma odaklı İngilizce eğitimi, online eğitim, sınav hazırlık ve öğrenci takibi konusunda deneyimli ekip."
          />

          <AnimatedSection>
            <ExpandableList
              items={hakkimizdaTeamDetails}
              variant="surface"
              defaultOpenIndex={0}
            />
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
