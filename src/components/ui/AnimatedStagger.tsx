"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { staggerContainer, transition, viewportOnce } from "@/lib/motion";

interface AnimatedStaggerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function AnimatedStagger({
  children,
  className = "",
  delay = 0,
  once = true,
}: AnimatedStaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={once ? viewportOnce : { once: false, amount: 0.12 }}
      variants={staggerContainer}
      transition={{ ...transition.default, delayChildren: delay }}
      className={`gpu-layer ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedItem({ children, className = "" }: AnimatedItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: transition.default,
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
