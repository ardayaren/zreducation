"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import StatCard from "@/components/ui/StatCard";
import { stats } from "@/data/services";
import { fadeUp, staggerContainer, transition } from "@/lib/motion";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white border-t border-border section-flow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection variant="slideRight">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="surface-navy navy-panel overflow-hidden relative"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: "url(/images/english-classroom.jpg)" }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-navy-950/60" aria-hidden />

              <div className="relative grid grid-cols-2 gap-3 p-4">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeUp}
                    transition={transition.default}
                  >
                    <StatCard stat={stat} onDark size="md" showDot />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection variant="slideLeft" delay={0.1}>
            <SectionTitle
              subtitle="Hakkımızda"
              title="Denizli Merkez, Konuşma Odaklı Eğitim"
              description="Kınıklı merkezimizden online ve yüz yüze konuşma odaklı İngilizce eğitimi, gerektiğinde İtalya & Almanya danışmanlığı."
              align="left"
            />
            <p className="text-slate text-sm leading-relaxed mb-4">
              Denizli&apos;de yüz yüze, Türkiye&apos;nin her yerinde online —
              aynı kalite, aynı konuşma odaklı müfredat.
            </p>
            <p className="text-slate text-sm leading-relaxed mb-6">
              Kişiselleştirilmiş öğrenme planları ve maks. 8–10 kişilik
              sınıflarla, 3 ayda 90 derste 0&apos;dan akıcı konuşmayı
              hedefliyoruz.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1.5 text-xs text-emerald-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                %94 Memnuniyet
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1.5 text-xs text-emerald-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                %78 6 Ay Seviye Geçişi
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-gold-50 border border-gold-200 px-3 py-1.5 text-xs text-gold-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                İtalya & Almanya Danışmanlık
              </span>
            </div>

            <Button href="/hakkimizda">Kurumsal Profil</Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
