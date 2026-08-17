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
          İki aşamalı ücretsiz sınavımız: Önce 70 soruluk çoktan seçmeli
          Language Hub yazılı testi, ardından Zoom/Teams üzerinden 15
          dakikalık online speaking (konuşma) görüşmesi için randevu.
          Sonucunuzu anında görün ve size en uygun programı birlikte
          belirleyelim.
        </p>
      </PageHero>

      <section className="py-16 md:py-24 test-section-bg relative overflow-hidden">
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-[5%] w-80 h-80 bg-navy-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <PlacementTest />
        </div>
      </section>
    </PageLayout>
  );
}
