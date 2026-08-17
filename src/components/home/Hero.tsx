"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import StatCard from "@/components/ui/StatCard";
import { performanceStats } from "@/data/services";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  transition,
} from "@/lib/motion";
import { getStatValueClass } from "@/lib/statTone";

const highlights = [
  { text: "Konuşma Odaklı Eğitim", tone: "gold" as const },
  { text: "Maks 8–10 Kişilik Sınıflar", tone: "neutral" as const },
  { text: "Online & Yüz Yüze (Denizli)", tone: "neutral" as const },
  { text: "7/24 WhatsApp Destek", tone: "positive" as const },
];

export default function Hero() {
  return (
    <section className="pt-[128px] min-h-[85vh] flex items-stretch overflow-hidden bg-gradient-to-b from-white to-surface section-flow">
      <div className="w-full grid lg:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-20 bg-transparent relative z-10"
        >
          <div className="max-w-xl mx-auto lg:mx-0 lg:ml-auto lg:pr-12 w-full">
              <motion.span
                variants={fadeUp}
                transition={transition.fast}
                className="label-caps text-gold-600 mb-5 block"
              >
                Denizli Merkezli Eğitim Kurumu
              </motion.span>

              <motion.h1
                variants={slideInLeft}
                transition={transition.slow}
                className="font-heading-normal text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-navy-900 leading-[1.15] tracking-tight mb-6"
              >
                3 Ayda, 90 Derste 0&apos;dan Akıcı Konuşmaya
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={transition.default}
                className="text-slate text-base leading-relaxed mb-8 max-w-lg"
              >
                Asıl hedefimiz sizi İngilizce konuşturmak.
                Speaking, Listening, Reading ve Writing odaklı, konuşma
                ağırlıklı müfredatla online ve yüz yüze birebir/grup
                dersleri. 7/24 WhatsApp hattımızdan her an bize ulaşın.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={transition.default}
                className="flex flex-wrap gap-3 mb-10"
              >
                <Button href="/seviye-tespit" size="lg">
                  Ücretsiz Seviye Tespit
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="/egitimlerimiz" variant="outline" size="lg">
                  Eğitimlerimiz & Fiyatlar
                </Button>
              </motion.div>

            <motion.ul
              variants={staggerContainer}
              className="grid grid-cols-2 gap-x-4 gap-y-2 pt-6"
            >
              {highlights.map((item) => (
                <motion.li
                  key={item.text}
                  variants={fadeUp}
                  transition={transition.fast}
                  className="flex items-center gap-2 text-sm text-slate bg-surface/80 rounded-full px-3 py-1.5"
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      item.tone === "positive"
                        ? "bg-emerald-500"
                        : item.tone === "gold"
                          ? "bg-gold-500"
                          : "bg-navy-400"
                    }`}
                  />
                  {item.text}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          transition={{ delayChildren: 0.2 }}
          className="flex flex-col justify-center px-4 sm:px-6 lg:px-10 py-16 lg:py-12 relative"
        >
          <div className="surface-navy navy-panel-inset relative overflow-hidden flex flex-col justify-center px-5 sm:px-8 py-14 lg:py-16 h-full m-4 sm:m-6 lg:m-8 gpu-layer">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-25 gpu-layer"
              style={{ backgroundImage: "url(/images/harvard.jpg)" }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-navy-950/55" aria-hidden />

            <div className="relative max-w-md mx-auto lg:mx-0 lg:mr-auto lg:pl-4 w-full">
              <motion.span
                variants={fadeUp}
                transition={transition.fast}
                className="label-caps text-gold-400 mb-6 block"
              >
                Kurumsal Veriler
              </motion.span>

              <motion.div
                variants={slideInRight}
                transition={transition.slow}
                className="grid grid-cols-2 gap-2 mb-4"
              >
                {performanceStats.map((stat) => (
                  <StatCard key={stat.label} stat={stat} onDark size="sm" showDot />
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                transition={transition.default}
                className="flex items-center justify-between px-5 py-4 navy-card-glass"
              >
                <span className="text-sm text-white/60">Genel Başarı Skoru</span>
                <span
                  className={`font-heading-normal text-xl font-bold tabular-nums ${getStatValueClass("positive", true)}`}
                >
                  %91
                </span>
              </motion.div>

              <motion.p
                variants={fadeUp}
                transition={transition.default}
                className="mt-4 text-sm text-white/50 leading-relaxed navy-card-glass px-5 py-4"
              >
                <span className="text-emerald-400 font-semibold">%94 memnuniyet</span>{" "}
                ve{" "}
                <span className="text-red-400 font-semibold">%6 vize red</span>{" "}
                oranlarıyla şeffaf performans takibi sunuyoruz.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
