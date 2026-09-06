"use client";

import { promoMessages } from "@/data/onlineCourses";

export default function PromoBanner() {
  const text = promoMessages.join("   ·   ");

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-navy-950 overflow-hidden gpu-layer h-9 sm:h-10 flex items-center">
      <div className="relative flex overflow-hidden w-full">
        <div className="animate-marquee gpu-marquee whitespace-nowrap text-sm sm:text-base font-bold uppercase tracking-wide">
          <span className="mx-8">{text}</span>
          <span className="mx-8" aria-hidden>
            {text}
          </span>
        </div>
      </div>
    </div>
  );
}
