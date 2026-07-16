"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import {
  type MotionVariant,
  transition,
  variantMap,
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
      viewport={{ once, margin: "-50px" }}
      variants={variantMap[variant]}
      transition={{ ...transition.default, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
