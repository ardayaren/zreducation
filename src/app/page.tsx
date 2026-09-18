import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import LandingHero from "@/components/home/LandingHero";
import { KageEduChapters, KageEduClosing } from "@/components/home/kage-edu/KageEdu";
import PackagesSection from "@/components/home/PackagesSection";
import ScrollingTestimonials from "@/components/home/ScrollingTestimonials";
import InstagramGallery from "@/components/home/InstagramGallery";

export const metadata: Metadata = {
  title: "Konuşma Odaklı İngilizce Eğitimi | Online & Yüz Yüze",
  description:
    "Zreducation — konuşma odaklı İngilizce eğitimi, 3 ayda 90 derste akıcı konuşma, online ve yüz yüze birebir/grup dersleri, ücretsiz seviye tespit sınavı ve İtalya/Almanya danışmanlığı.",
  alternates: { canonical: "https://zreducation.org" },
};

export default function HomePage() {
  return (
    <PageLayout>
      <LandingHero />
      <KageEduChapters />
      <PackagesSection />
      <ScrollingTestimonials />
      <InstagramGallery />
      <KageEduClosing />
    </PageLayout>
  );
}
