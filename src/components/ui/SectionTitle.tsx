"use client";

import { motion } from "framer-motion";
import {
  accentBarReveal,
  fadeUp,
  staggerContainer,
  transition,
} from "@/lib/motion";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
  animate?: boolean;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  light = false,
  align = "center",
  animate = true,
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const origin = align === "center" ? "center" : "left";

  if (!animate) {
    return (
      <div className={`max-w-3xl mb-14 ${alignClass}`}>
        {subtitle && (
          <span
            className={`label-caps block mb-4 ${
              light ? "text-gold-300" : "text-gold-500"
            }`}
          >
            {subtitle}
          </span>
        )}
        <h2
          className={`font-heading-normal text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-4 text-base leading-relaxed ${
              light ? "text-white/75" : "text-slate"
            }`}
          >
            {description}
          </p>
        )}
        <div
          className={`mt-5 accent-bar ${align === "center" ? "mx-auto" : ""}`}
        />
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer}
      className={`max-w-3xl mb-14 ${alignClass}`}
    >
      {subtitle && (
        <motion.span
          variants={fadeUp}
          transition={transition.fast}
          className={`label-caps block mb-4 ${
            light ? "text-gold-300" : "text-gold-500"
          }`}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        transition={transition.default}
        className={`font-heading-normal text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          transition={transition.default}
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-white/75" : "text-slate"
          }`}
        >
          {description}
        </motion.p>
      )}
      <motion.div
        variants={accentBarReveal}
        style={{ originX: origin }}
        className={`mt-5 accent-bar ${align === "center" ? "mx-auto" : ""}`}
      />
    </motion.div>
  );
}
