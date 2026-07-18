import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/home/Hero";
import BentoGridSection from "@/components/home/BentoGridSection";
import AboutPreview from "@/components/home/AboutPreview";
import WhyUsSection from "@/components/home/WhyUsSection";
import ProcessSection from "@/components/home/ProcessSection";
import ScrollingTestimonials from "@/components/home/ScrollingTestimonials";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Denizli Online İngilizce & İtalya/Almanya Eğitim Danışmanlığı",
  description:
    "Zreducation Denizli — online İngilizce kursları, seviye tespit sınavı, İtalya ve Almanya üniversite danışmanlığı. Canlı Zoom dersleri ve kayıt arşivi.",
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
      <CTASection />
    </PageLayout>
  );
}
