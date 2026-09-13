import type { CSSProperties, ReactNode } from "react";
import type { MotionVariant } from "@/lib/motion";

const variantAttr: Record<MotionVariant, string> = {
  fadeUp: "up",
  fadeIn: "fade",
  slideLeft: "left",
  slideRight: "right",
};

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: MotionVariant;
  once?: boolean;
}

/**
 * Kaydırdıkça yumuşak giriş. Animasyon saf CSS'tir; tetikleme ScrollFx'in
 * tek paylaşımlı observer'ından gelir. Prop API değişmedi.
 */
export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  variant = "fadeUp",
  once = true,
}: AnimatedSectionProps) {
  return (
    <div
      data-reveal={variantAttr[variant]}
      data-reveal-repeat={once ? undefined : ""}
      style={{ "--rv-d": `${delay}s` } as CSSProperties}
      className={`gpu-layer ${className}`}
    >
      {children}
    </div>
  );
}
