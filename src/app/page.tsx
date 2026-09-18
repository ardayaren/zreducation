import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import LandingHero from "@/components/home/LandingHero";
import { KageEduChapters, KageEduClosing } from "@/components/home/kage-edu/KageEdu";
import PackagesSection from "@/components/home/PackagesSection";
import ScrollingTestimonials from "@/components/home/ScrollingTestimonials";
import InstagramGallery from "@/components/home/InstagramGallery";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/ui/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "Konuşma Odaklı İngilizce Eğitimi — Online & Yüz Yüze",
  description:
    "Zreducation — konuşma odaklı İngilizce eğitimi, 3 ayda 90 derste akıcı konuşma, online ve yüz yüze birebir/grup dersleri, ücretsiz seviye tespit sınavı ve İtalya/Almanya danışmanlığı.",
  path: "",
  keywords: [
    "konuşma odaklı ingilizce eğitimi",
    "online ingilizce kursu",
    "3 ayda 90 ders ingilizce",
    "ingilizce speaking dersi",
    "seviye tespit sınavı",
    "zreducation",
  ],
});

export default function HomePage() {
  return (
    <PageLayout>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${siteConfig.url}/#website`,
          name: siteConfig.name,
          url: siteConfig.url,
          publisher: { "@id": `${siteConfig.url}/#organization` },
          inLanguage: "tr-TR",
        }}
      />
      <LandingHero />
      <KageEduChapters />
      <PackagesSection />
      <ScrollingTestimonials />
      <InstagramGallery />
      <KageEduClosing />
    </PageLayout>
  );
}
