"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  transition,
} from "@/lib/motion";

interface AnimatedPageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function AnimatedPageHero({
  title,
  subtitle,
  children,
}: AnimatedPageHeroProps) {
  return (
    <section className="relative pt-[128px] pb-16 surface-navy page-hero-navy overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gold-500/15 to-transparent pointer-events-none" />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-border-dark origin-left"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid lg:grid-cols-12 gap-8 items-end"
        >
          <div className="lg:col-span-8">
            {subtitle && (
              <motion.span
                variants={fadeUp}
                transition={transition.fast}
                className="label-caps text-gold-300 block mb-4"
              >
                {subtitle}
              </motion.span>
            )}
            <motion.h1
              variants={slideInLeft}
              transition={transition.slow}
              className="font-heading-normal text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
            >
              {title}
            </motion.h1>
          </div>
          <motion.div
            variants={slideInRight}
            transition={{ ...transition.slow, delay: 0.15 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="h-px bg-border-dark w-full" />
          </motion.div>
        </motion.div>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition.default, delay: 0.35 }}
            className="mt-6 max-w-2xl text-white/70 text-base leading-relaxed"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
