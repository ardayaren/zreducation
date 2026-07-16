import type { Metadata } from "next";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import NavySection from "@/components/ui/NavySection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { ExpandableList } from "@/components/ui/ExpandablePanel";
import {
  ingilizceLevelDetails,
  ingilizceExamDetails,
  ingilizceMethodDetails,
} from "@/data/expandableContent";

export const metadata: Metadata = {
  title: "İngilizce Eğitimi",
  description:
    "A1'den C2'ye kadar CEFR uyumlu İngilizce eğitim programları, IELTS ve TOEFL hazırlık kursları.",
};

export default function IngilizceEgitimiPage() {
  return (
    <PageLayout>
      <PageHero title="İngilizce Eğitimi" subtitle="A1 - C2">
        <p>
          Temel seviyeden ileri düzeye, CEFR uyumlu müfredat ile kapsamlı
          İngilizce eğitim programları.
        </p>
      </PageHero>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Seviyeler"
            title="CEFR Seviye Programları"
            description="Avrupa Ortak Dil Referans Çerçevesi standartlarına uygun, kademeli eğitim programları. Seviye detayları için tıklayın."
          />

          <AnimatedSection>
            <ExpandableList
              items={ingilizceLevelDetails}
              variant="surface"
              defaultOpenIndex={0}
            />
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="text-center mt-12">
              <Button href="/seviye-tespit" size="lg">
                Seviyenizi Öğrenin — Ücretsiz Sınav
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="sinav" className="py-20 bg-surface scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Sınav Hazırlık"
            title="Sınav & Sertifika Programları"
            description="Uluslararası sınavlara yönelik özel hazırlık programları ile hedef puanınıza ulaşın."
          />

          <AnimatedSection>
            <ExpandableList
              items={ingilizceExamDetails}
              variant="light"
              defaultOpenIndex={0}
            />
          </AnimatedSection>
        </div>
      </section>

      <NavySection>
        <SectionTitle
          subtitle="Metodoloji"
          title="Öğretim Yaklaşımımız"
          description="Modern ve etkili öğretim metodları ile kalıcı öğrenme sağlıyoruz."
          light
        />

        <AnimatedSection>
          <ExpandableList
            items={ingilizceMethodDetails}
            variant="navy"
            defaultOpenIndex={0}
          />
        </AnimatedSection>
      </NavySection>
    </PageLayout>
  );
}
