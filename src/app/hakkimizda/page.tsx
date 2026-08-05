import type { Metadata } from "next";
import { Quote } from "lucide-react";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import StatCard from "@/components/ui/StatCard";
import Button from "@/components/ui/Button";
import { ExpandableList } from "@/components/ui/ExpandablePanel";
import {
  hakkimizdaValueDetails,
  hakkimizdaTeamDetails,
} from "@/data/expandableContent";
import { stats } from "@/data/services";
import { siteConfig } from "@/lib/siteConfig";
import { contactInfo } from "@/data/contact";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Denizli Kınıklı merkezli Zreducation — konuşma odaklı İngilizce eğitimi, online ve yüz yüze dersler, İtalya & Almanya danışmanlığı.",
  openGraph: {
    title: "Hakkımızda | Zreducation Denizli",
    description:
      "Denizli'den konuşma odaklı İngilizce eğitimi ve İtalya/Almanya danışmanlığı.",
  },
};

const milestones = [
  { year: "2009", text: "Zreducation, Denizli Kınıklı'da kuruldu." },
  { year: "2014", text: "İtalya & Almanya üniversite partner ağı genişletildi." },
  { year: "2019", text: "Online eğitim platformu ve canlı Zoom dersleri başlatıldı." },
  { year: "2023", text: "Konuşma odaklı '3 ayda 90 ders' metodolojisi hayata geçti." },
];

export default function HakkimizdaPage() {
  return (
    <PageLayout>
      <PageHero title="Hakkımızda" subtitle="Denizli Merkez">
        <p>
          Denizli&apos;den konuşma odaklı İngilizce eğitimiyle Türkiye&apos;nin
          her yerine ulaşan güvenilir eğitim partneriniz — online ve yüz yüze.
        </p>
      </PageHero>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedSection>
              <SectionTitle
                subtitle="Hikayemiz"
                title="Denizli'den, Konuşma Odaklı"
                align="left"
              />
              <div className="space-y-4 text-slate leading-relaxed text-sm md:text-base">
                <p>
                  Zreducation, Denizli Kınıklı&apos;da kurulmuş; konuşma
                  odaklı, A1&apos;den C2&apos;ye online ve yüz yüze İngilizce
                  eğitimi sunan; talep halinde İtalya ve Almanya odaklı yurt
                  dışı eğitim danışmanlığı da veren bir kurumdur.
                </p>
                <p>
                  {siteConfig.address} adresindeki merkezimizde birebir ve
                  maks 8–10 kişilik grup dersleri; Zoom ve dijital platform
                  üzerinden tüm Türkiye&apos;ye online eğitim veriyoruz.
                </p>
                <p>
                  CEFR uyumlu Language Hub müfredatımız, &quot;3 ayda 90
                  derste 0&apos;dan akıcı konuşma&quot; hedefimiz ve %94
                  öğrenci memnuniyet oranımızla Denizli&apos;nin güvenilir
                  eğitim markası olmaktan gurur duyuyoruz.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {stats.map((stat) => (
                  <StatCard key={stat.label} stat={stat} size="md" showDot />
                ))}
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
              <p className="text-lg md:text-xl font-heading-normal text-navy-900 leading-relaxed mb-6 max-w-3xl">
                &quot;Amacımız İngilizceyi ezberden çıkarıp gerçek bir
                iletişim aracı haline getirmek. Her öğrencimizin sınıfta
                konuşarak öğrenmesini, kendine güvenerek ilerlemesini
                istiyoruz. Sorularınız için bize her zaman ulaşabilirsiniz.&quot;
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
                  <span className="font-heading-normal text-2xl font-bold text-gold-600 block mb-2">
                    {m.year}
                  </span>
                  <p className="text-sm text-slate leading-relaxed">{m.text}</p>
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
            title="Denizli Uzman Kadromuz"
            description="Konuşma odaklı İngilizce eğitimi, online eğitim ve yurt dışı danışmanlığında deneyimli ekip."
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
