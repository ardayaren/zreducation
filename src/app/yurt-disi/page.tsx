import type { Metadata } from "next";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import NavySection from "@/components/ui/NavySection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { ExpandableList } from "@/components/ui/ExpandablePanel";
import {
  yurtDisiCountryDetails,
  yurtDisiProgramDetails,
  yurtDisiProcessDetails,
} from "@/data/expandableContent";

export const metadata: Metadata = {
  title: "Yurt Dışı Eğitim — İtalya & Almanya",
  description:
    "İtalya ve Almanya üniversitelerine öğrenci yerleştirme danışmanlığı. Denizli merkezli Zreducation.",
  keywords: [
    "italya üniversite başvurusu",
    "almanya öğrenci vizesi",
    "yurt dışı eğitim denizli",
    "uni-assist danışmanlık",
  ],
};

export default function YurtDisiPage() {
  return (
    <PageLayout>
      <PageHero title="Yurt Dışı Eğitim" subtitle="İtalya & Almanya">
        <p>
          İtalya ve Almanya üniversitelerine öğrenci yerleştirme danışmanlığı.
          Denizli merkezimizden başvurudan vizeye kadar yanınızdayız.
        </p>
      </PageHero>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Ülkeler"
            title="Eğitim Destinasyonları"
            description="Yalnızca İtalya ve Almanya — uzmanlaştığımız iki ülke, güçlü partner ağı."
          />

          <AnimatedSection>
            <ExpandableList
              items={yurtDisiCountryDetails}
              variant="surface"
              defaultOpenIndex={0}
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Programlar"
            title="Eğitim Programları"
            description="Lisans'tan doktoraya, dil okulundan staja kadar tüm program türleri."
          />

          <AnimatedSection>
            <ExpandableList
              items={yurtDisiProgramDetails}
              variant="light"
              defaultOpenIndex={0}
            />
          </AnimatedSection>
        </div>
      </section>

      <NavySection>
        <SectionTitle
          subtitle="Süreç"
          title="Başvuru Sürecimiz"
          description="6 adımda yurt dışı eğitim hayalinizi gerçekleştirin. Her adımın detayını açarak inceleyin."
          light
        />

        <AnimatedSection>
          <ExpandableList
            items={yurtDisiProcessDetails}
            variant="navy"
            defaultOpenIndex={0}
          />
        </AnimatedSection>
      </NavySection>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading-normal text-3xl font-bold text-navy-900 mb-4">
              Ücretsiz Danışmanlık Randevusu Alın
            </h2>
            <p className="text-slate mb-8 max-w-xl mx-auto">
              Uzman danışmanlarımızla ücretsiz görüşme yapın, size en uygun
              programı birlikte belirleyelim.
            </p>
            <Button href="/iletisim" size="lg">
              Randevu Al
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
