import type { Transition, Variants } from "framer-motion";

export const corporateEase = [0.25, 0.1, 0.25, 1] as const;

export const transition: Record<string, Transition> = {
  default: { duration: 0.45, ease: corporateEase },
  fast: { duration: 0.3, ease: corporateEase },
  slow: { duration: 0.55, ease: corporateEase },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -18 },
  visible: { opacity: 1, x: 0 },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 18 },
  visible: { opacity: 1, x: 0 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.06,
    },
  },
};

export const accentBarReveal: Variants = {
  hidden: { scaleX: 0, opacity: 0.6 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: corporateEase, delay: 0.12 },
  },
};

export type MotionVariant = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight";

export const variantMap: Record<MotionVariant, Variants> = {
  fadeUp,
  fadeIn,
  slideLeft: slideInLeft,
  slideRight: slideInRight,
};
