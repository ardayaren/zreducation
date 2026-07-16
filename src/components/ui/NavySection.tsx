import { ReactNode } from "react";

interface NavySectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function NavySection({
  children,
  className = "",
  id,
}: NavySectionProps) {
  return (
    <section id={id} className={`navy-section-wrap ${className}`}>
      <div className="surface-navy navy-panel max-w-7xl mx-auto px-6 sm:px-8 md:px-10 py-14 md:py-16">
        {children}
      </div>
    </section>
  );
}
