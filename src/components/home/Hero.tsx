"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  transition,
} from "@/lib/motion";

const highlights = [
  "15+ Yıllık Deneyim",
  "CEFR Uyumlu Müfredat",
  "30+ Partner Üniversite",
  "Ücretsiz Seviye Tespit",
];

const stats = [
  { label: "Mezun Öğrenci", value: "5.000+" },
  { label: "Partner Üniversite", value: "30+" },
  { label: "Uzman Eğitmen", value: "50+" },
  { label: "Memnuniyet Oranı", value: "%94" },
];

export default function Hero() {
  return (
    <section className="pt-[104px] min-h-[85vh] flex items-stretch overflow-hidden bg-gradient-to-b from-white to-surface">
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
              Eğitim & Danışmanlık Kurumu
            </motion.span>

            <motion.h1
              variants={slideInLeft}
              transition={transition.slow}
              className="font-heading-normal text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-navy-900 leading-[1.15] tracking-tight mb-6"
            >
              Yurt Dışı Eğitim ve İngilizce Programlarında Kurumsal Çözüm
              Ortağınız
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={transition.default}
              className="text-slate text-base leading-relaxed mb-8 max-w-lg"
            >
              Öğrenci yerleştirmeden A1–C2 İngilizce eğitimine, online ve yüz
              yüze grup derslerine kadar uçtan uca profesyonel hizmet
              sunuyoruz.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={transition.default}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Button href="/seviye-tespit" size="lg">
                Seviye Tespit Sınavı
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/hizmetler" variant="outline" size="lg">
                Hizmetler
              </Button>
            </motion.div>

            <motion.ul
              variants={staggerContainer}
              className="grid grid-cols-2 gap-x-4 gap-y-2 pt-6"
            >
              {highlights.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  transition={transition.fast}
                  className="flex items-center gap-2 text-sm text-slate bg-surface/80 rounded-full px-3 py-1.5"
                >
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full shrink-0" />
                  {item}
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
          <div className="surface-navy navy-panel-inset flex flex-col justify-center px-5 sm:px-8 py-14 lg:py-16 h-full m-4 sm:m-6 lg:m-8">
          <div className="max-w-md mx-auto lg:mx-0 lg:mr-auto lg:pl-4 w-full">
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
              className="space-y-2"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    ...transition.default,
                    delay: 0.35 + index * 0.08,
                  }}
                  className="flex items-center justify-between px-5 py-4 navy-card-glass"
                >
                  <span className="text-sm text-white/60">{stat.label}</span>
                  <span className="font-heading-normal text-xl font-bold text-gold-400 tabular-nums">
                    {stat.value}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ ...transition.default, delay: 0.65 }}
              className="mt-6 text-sm text-white/50 leading-relaxed navy-card-glass px-5 py-4"
            >
              Ücretsiz seviye tespit sınavı ile İngilizce yeterliliğinizi
              ölçün, size özel program önerisi alın.
            </motion.p>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
