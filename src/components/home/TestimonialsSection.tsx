"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/data/testimonials";
import { transition } from "@/lib/motion";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Referanslar"
          title="Öğrenci Geri Bildirimleri"
          description="Mezunlarımızın deneyimleri, hizmet kalitemizin göstergesidir."
        />

        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-border rounded-md p-8 md:p-10 overflow-hidden shadow-sm">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={transition.fast}
                >
                  <p className="text-navy-700 text-base leading-relaxed mb-8">
                    {testimonials[current].content}
                  </p>
                  <div className="flex items-center justify-between border-t border-border pt-6">
                    <div>
                      <div className="font-heading-normal text-sm font-bold text-navy-900">
                        {testimonials[current].name}
                      </div>
                      <div className="text-xs text-gold-600 mt-1">
                        {testimonials[current].role}
                      </div>
                    </div>
                    <span className="label-caps text-slate-light">
                      {String(current + 1).padStart(2, "0")} /{" "}
                      {String(testimonials.length).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-between mt-4">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={prev}
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-gold-600 hover:text-gold-600 transition-colors"
                aria-label="Önceki"
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={next}
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-gold-600 hover:text-gold-600 transition-colors"
                aria-label="Sonraki"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
