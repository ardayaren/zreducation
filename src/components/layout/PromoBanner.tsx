"use client";

import { promoMessages } from "@/data/onlineCourses";
import Marquee from "@/components/ui/Marquee";

export default function PromoBanner() {
  const text = promoMessages
    .join("   ·   ")
    .toLocaleUpperCase("tr-TR")
    .replaceAll("ZREDUCATİON", "ZREDUCATION");

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-navy-950 gpu-layer min-h-11 sm:min-h-12 flex items-center">
      <Marquee speed={55} className="w-full">
        <span className="mx-6 sm:mx-8 whitespace-nowrap text-sm sm:text-lg font-extrabold uppercase tracking-wider">
          {text}
        </span>
      </Marquee>
    </div>
  );
}