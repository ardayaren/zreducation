"use client";

import { promoMessages } from "@/data/onlineCourses";

export default function PromoBanner() {
  const text = promoMessages.join("   ·   ");

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-navy-950 overflow-hidden gpu-layer min-h-10 sm:min-h-11 flex items-center py-2">
      <div className="relative flex overflow-hidden w-full">
        <div className="animate-marquee gpu-marquee whitespace-nowrap text-[15px] sm:text-lg font-extrabold uppercase tracking-wider">
          <span className="mx-8">{text.toLocaleUpperCase("tr-TR")}</span>
          <span className="mx-8" aria-hidden>
            {text.toLocaleUpperCase("tr-TR")}
          </span>
        </div>
      </div>
    </div>
  );
}
