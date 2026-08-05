import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PromoBanner from "@/components/layout/PromoBanner";
import AnimatedPageHero from "@/components/layout/AnimatedPageHero";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <AnimatedPageHero title={title} subtitle={subtitle}>
      {children}
    </AnimatedPageHero>
  );
}

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PromoBanner />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
