import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/home/Hero";
import BentoGridSection from "@/components/home/BentoGridSection";
import AboutPreview from "@/components/home/AboutPreview";
import WhyUsSection from "@/components/home/WhyUsSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <BentoGridSection />
      <AboutPreview />
      <WhyUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </PageLayout>
  );
}
