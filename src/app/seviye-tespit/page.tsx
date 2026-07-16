import type { Metadata } from "next";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import PlacementTest from "@/components/test/PlacementTest";

export const metadata: Metadata = {
  title: "Seviye Tespit Sınavı",
  description:
    "Ücretsiz İngilizce seviye tespit sınavı ile mevcut seviyenizi öğrenin ve size özel program önerisi alın.",
};

export default function SeviyeTespitPage() {
  return (
    <PageLayout>
      <PageHero
        title="Seviye Tespit Sınavı"
        subtitle="Ücretsiz"
      >
        <p>
          30 soruluk kapsamlı sınavımızla İngilizce seviyenizi belirleyin.
          Sonuçlarınızı anında görün ve kurumumuza davet edilin.
        </p>
      </PageHero>

      <section className="py-16 md:py-20 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PlacementTest />
        </div>
      </section>
    </PageLayout>
  );
}
