import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/home/Hero";
import BentoGridSection from "@/components/home/BentoGridSection";
import AboutPreview from "@/components/home/AboutPreview";
import WhyUsSection from "@/components/home/WhyUsSection";
import ProcessSection from "@/components/home/ProcessSection";
import ScrollingTestimonials from "@/components/home/ScrollingTestimonials";
import InstagramGallery from "@/components/home/InstagramGallery";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Denizli Konuşma Odaklı İngilizce Eğitimi | Online & Yüz Yüze",
  description:
    "Zreducation Denizli — konuşma odaklı İngilizce eğitimi, 3 ayda 90 derste akıcı konuşma, online ve yüz yüze birebir/grup dersleri, ücretsiz seviye tespit sınavı ve İtalya/Almanya danışmanlığı.",
  alternates: { canonical: "https://zreducation.org" },
};

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <BentoGridSection />
      <AboutPreview />
      <WhyUsSection />
      <ProcessSection />
      <ScrollingTestimonials />
      <InstagramGallery />
      <CTASection />
    </PageLayout>
  );
}
