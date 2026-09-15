"use client";

import { promoMessages } from "@/data/onlineCourses";

export default function PromoBanner() {
  const text = promoMessages.join("   ·   ");

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-navy-950 overflow-hidden gpu-layer min-h-11 sm:min-h-12 flex items-center py-1.5 sm:py-2">
      <div className="relative flex overflow-hidden w-full overflow-x-clip">
        <div className="animate-marquee gpu-marquee whitespace-nowrap text-sm sm:text-lg font-extrabold uppercase tracking-wider">
          <span className="mx-6 sm:mx-8">{text.toLocaleUpperCase("tr-TR")}</span>
          <span className="mx-6 sm:mx-8" aria-hidden>
            {text.toLocaleUpperCase("tr-TR")}
          </span>
        </div>
      </div>
    </div>
  );
}
