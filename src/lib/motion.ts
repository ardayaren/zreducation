import type { Transition, Variants, ViewportOptions } from "framer-motion";

/** Premium ease — hızlı başlangıç, yumuşak iniş (60fps dostu) */
export const corporateEase = [0.22, 1, 0.36, 1] as const;

export const transition: Record<string, Transition> = {
  default: { duration: 0.38, ease: corporateEase },
  fast: { duration: 0.24, ease: corporateEase },
  slow: { duration: 0.48, ease: corporateEase },
  spring: { type: "spring", stiffness: 380, damping: 32, mass: 0.8 },
};

export const viewportOnce: ViewportOptions = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -40px 0px",
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition.default,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transition.fast,
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transition.default,
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transition.default,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.04,
    },
  },
};

export const accentBarReveal: Variants = {
  hidden: { scaleX: 0, opacity: 0.6 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.42, ease: corporateEase, delay: 0.08 },
  },
};

export type MotionVariant = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight";

export const variantMap: Record<MotionVariant, Variants> = {
  fadeUp,
  fadeIn,
  slideLeft: slideInLeft,
  slideRight: slideInRight,
};
