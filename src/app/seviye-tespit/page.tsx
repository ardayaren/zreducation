import type { Metadata } from "next";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import PlacementTest from "@/components/test/PlacementTest";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Seviye Tespit Sınavı",
  description:
    "Ücretsiz İngilizce seviye tespit sınavı ile mevcut seviyenizi öğrenin ve size özel program önerisi alın.",
  path: "/seviye-tespit",
});

export default function SeviyeTespitPage() {
  return (
    <PageLayout>
      <PageHero
        title="Seviye Tespit Sınavı"
        subtitle="Ücretsiz"
      >
        <p>
          İki aşamalı ücretsiz sınavımız: Önce 30 dakikalık, 70 soruluk çoktan
          seçmeli Language Hub yazılı testi, ardından Zoom/Teams üzerinden 15
          dakikalık online speaking (konuşma) görüşmesi için randevu. Süre
          dolduğunda sınav otomatik teslim edilir; sonucunuzu ve hangi
          soruları doğru/yanlış yaptığınızı anında görün.
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
