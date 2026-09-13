import type { CSSProperties, ReactNode } from "react";

export type RevealVariant = "up" | "fade" | "left" | "right" | "scale";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** up | fade | left | right | scale */
  variant?: RevealVariant;
  /** saniye cinsinden giriş gecikmesi */
  delay?: number;
  /** false ise ekrandan çıkınca gizlenip tekrar oynar */
  once?: boolean;
}

/**
 * Hafif scroll-reveal sarmalayıcı. Animasyon saf CSS'tir; tetikleme
 * PageLayout içindeki ScrollFx'in tek paylaşımlı observer'ından gelir.
 */
export default function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  once = true,
}: RevealProps) {
  return (
    <div
      data-reveal={variant}
      data-reveal-repeat={once ? undefined : ""}
      style={{ "--rv-d": `${delay}s` } as CSSProperties}
      className={className}
    >
      {children}
    </div>
  );
}
