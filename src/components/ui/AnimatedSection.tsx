"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import {
  type MotionVariant,
  transition,
  variantMap,
  viewportOnce,
} from "@/lib/motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: MotionVariant;
  once?: boolean;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  variant = "fadeUp",
  once = true,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={once ? viewportOnce : { once: false, amount: 0.12 }}
      variants={variantMap[variant]}
      transition={{ ...transition.default, delay }}
      className={`gpu-layer ${className}`}
    >
      {children}
    </motion.div>
  );
}
