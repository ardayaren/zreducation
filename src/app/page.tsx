import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import { KageEduHero, KageEduChapters, KageEduClosing } from "@/components/home/kage-edu/KageEdu";
import ScrollingTestimonials from "@/components/home/ScrollingTestimonials";
import InstagramGallery from "@/components/home/InstagramGallery";

export const metadata: Metadata = {
  title: "Denizli Konuşma Odaklı İngilizce Eğitimi | Online & Yüz Yüze",
  description:
    "Zreducation Denizli — konuşma odaklı İngilizce eğitimi, 3 ayda 90 derste akıcı konuşma, online ve yüz yüze birebir/grup dersleri, ücretsiz seviye tespit sınavı ve İtalya/Almanya danışmanlığı.",
  alternates: { canonical: "https://zreducation.org" },
};

export default function HomePage() {
  return (
    <PageLayout>
      <KageEduHero />
      <KageEduChapters />
      <ScrollingTestimonials />
      <InstagramGallery />
      <KageEduClosing />
    </PageLayout>
  );
}
