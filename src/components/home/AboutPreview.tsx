"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { stats } from "@/data/services";
import { fadeUp, staggerContainer, transition } from "@/lib/motion";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection variant="slideRight">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="surface-navy rounded-3xl shadow-lg"
            >
              <div className="grid grid-cols-2 divide-x divide-y divide-border-dark">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeUp}
                    transition={transition.default}
                    className="p-8 text-center"
                  >
                    <div className="font-heading-normal text-3xl font-bold text-gold-400 tabular-nums">
                      {stat.value}
                    </div>
                    <div className="label-caps text-white/50 mt-2">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection variant="slideLeft" delay={0.1}>
            <SectionTitle
              subtitle="Hakkımızda"
              title="15 Yıllık Kurumsal Deneyim"
              description="2009'dan bu yana öğrencilerin yurt dışı eğitim ve İngilizce hedeflerine ulaşmasına destek oluyoruz."
              align="left"
            />
            <p className="text-slate text-sm leading-relaxed mb-4">
              Deneyimli kadromuz, uluslararası akreditasyonlarımız ve öğrenci
              odaklı yaklaşımımızla güvenilir bir eğitim danışmanlık kurumu
              olarak hizmet veriyoruz.
            </p>
            <p className="text-slate text-sm leading-relaxed mb-8">
              CEFR uyumlu müfredat, kontrollü sınıf mevcutları ve
              kişiselleştirilmiş öğrenme planları ile ölçülebilir sonuçlar
              hedefliyoruz.
            </p>
            <Button href="/hakkimizda">Kurumsal Profil</Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
