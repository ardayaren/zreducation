import type { Metadata } from "next";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import StatCard from "@/components/ui/StatCard";
import { ExpandableList } from "@/components/ui/ExpandablePanel";
import {
  hakkimizdaValueDetails,
  hakkimizdaTeamDetails,
} from "@/data/expandableContent";
import { stats } from "@/data/services";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Denizli Kınıklı merkezli Zreducation — İtalya & Almanya yurt dışı danışmanlık, online ve yüz yüze İngilizce eğitimi.",
  openGraph: {
    title: "Hakkımızda | Zreducation Denizli",
    description:
      "Denizli'den İtalya ve Almanya'ya öğrenci gönderimi, online İngilizce kursları.",
  },
};

export default function HakkimizdaPage() {
  return (
    <PageLayout>
      <PageHero title="Hakkımızda" subtitle="Denizli Merkez">
        <p>
          Denizli&apos;den Türkiye&apos;nin ve Avrupa&apos;nın dört bir yanına
          ulaşan güvenilir eğitim partneriniz — online ve yüz yüze.
        </p>
      </PageHero>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedSection>
              <SectionTitle
                subtitle="Hikayemiz"
                title="Denizli'den Dünyaya"
                align="left"
              />
              <div className="space-y-4 text-slate leading-relaxed text-sm md:text-base">
                <p>
                  Zreducation, Denizli Kınıklı&apos;da kurulmuş; İtalya ve
                  Almanya odaklı yurt dışı eğitim danışmanlığı ile A1&apos;den
                  C2&apos;ye online ve yüz yüze İngilizce eğitimi sunan bir
                  kurumdur.
                </p>
                <p>
                  {siteConfig.address} adresindeki merkezimizde yüz yüze
                  dersler; Zoom ve dijital platform üzerinden tüm Türkiye&apos;ye
                  online eğitim veriyoruz.
                </p>
                <p>
                  İtalya ve Almanya partner üniversite ağımız, CEFR uyumlu
                  Language Hub müfredatımız ve %94 öğrenci memnuniyet oranımızla
                  Denizli&apos;nin güvenilir eğitim markası olmaktan gurur
                  duyuyoruz.
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
            description="Yurt dışı danışmanlık ve online eğitim alanında deneyimli ekip."
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
