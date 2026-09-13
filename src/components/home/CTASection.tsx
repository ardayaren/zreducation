"use client";

import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-20 bg-white border-t border-border section-flow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div data-reveal-group className="surface-navy navy-panel p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span
                  data-reveal-item
                  className="label-caps text-gold-400 block mb-4"
                >
                  Seviye Tespit Sınavı
                </span>
                <h2
                  data-reveal-item
                  className="font-heading-normal text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight"
                >
                  İngilizce Seviyenizi Belirleyin
                </h2>
                <p
                  data-reveal-item
                  className="text-white/65 text-sm leading-relaxed"
                >
                  İki aşamalı ücretsiz sınavımızla seviyenizi öğrenin: önce
                  çoktan seçmeli yazılı test, ardından 15 dakikalık online
                  speaking görüşmesi. Sonuçlarınız anında paylaşılır ve size
                  en uygun program önerilir.
                </p>
              </div>
              <div
                data-reveal-item
                className="flex flex-col sm:flex-row gap-3 lg:justify-end"
              >
                <Button href="/seviye-tespit" size="lg">
                  Sınava Başla
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  href="/iletisim"
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white hover:text-navy-900 hover:border-white"
                >
                  İletişim
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
