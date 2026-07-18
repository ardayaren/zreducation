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
              title="Denizli Merkez, Türkiye Geneli Online"
              description="Kınıklı merkezimizden İtalya & Almanya danışmanlığı ve online İngilizce."
              align="left"
            />
            <p className="text-slate text-sm leading-relaxed mb-4">
              Denizli&apos;de yüz yüze, Türkiye&apos;nin her yerinde online —
              aynı kalite, aynı CEFR müfredat.
            </p>
            <p className="text-slate text-sm leading-relaxed mb-6">
              CEFR uyumlu müfredat, kontrollü sınıf mevcutları ve
              kişiselleştirilmiş öğrenme planları ile ölçülebilir sonuçlar
              hedefliyoruz.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1.5 text-xs text-emerald-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                %94 Memnuniyet
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1.5 text-xs text-emerald-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                %87 İlk Tercih Yerleşme
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3 py-1.5 text-xs text-red-600 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                %6 Vize Red
              </span>
            </div>

            <Button href="/hakkimizda">Kurumsal Profil</Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
