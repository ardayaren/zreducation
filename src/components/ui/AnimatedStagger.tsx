import type { CSSProperties, ReactNode } from "react";

interface AnimatedStaggerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

/**
 * Grup reveal: çocuklar ([data-reveal-item] / AnimatedItem) saf CSS ile
 * kademeli gelir. Prop API değişmedi.
 */
export function AnimatedStagger({
  children,
  className = "",
  delay = 0,
  once = true,
}: AnimatedStaggerProps) {
  return (
    <div
      data-reveal-group
      data-reveal-repeat={once ? undefined : ""}
      style={{ "--rv-d": `${delay}s` } as CSSProperties}
      className={`gpu-layer ${className}`}
    >
      {children}
    </div>
  );
}

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedItem({ children, className = "" }: AnimatedItemProps) {
  return (
    <div data-reveal-item className={className}>
      {children}
    </div>
  );
}
