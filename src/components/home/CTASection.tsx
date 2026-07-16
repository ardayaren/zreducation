"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer, transition } from "@/lib/motion";

export default function CTASection() {
  return (
    <section className="py-20 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="surface-navy navy-panel p-8 md:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <motion.span
                  variants={fadeUp}
                  transition={transition.fast}
                  className="label-caps text-gold-400 block mb-4"
                >
                  Seviye Tespit Sınavı
                </motion.span>
                <motion.h2
                  variants={fadeUp}
                  transition={transition.default}
                  className="font-heading-normal text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight"
                >
                  İngilizce Seviyenizi Belirleyin
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  transition={transition.default}
                  className="text-white/65 text-sm leading-relaxed"
                >
                  70 soruluk Language Hub sınavı ile mevcut seviyenizi öğrenin. Sonuçlar
                  anında paylaşılır, kurumumuza davet mesajı ile birlikte
                  program önerisi alırsınız.
                </motion.p>
              </div>
              <motion.div
                variants={fadeUp}
                transition={{ ...transition.default, delay: 0.1 }}
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
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
