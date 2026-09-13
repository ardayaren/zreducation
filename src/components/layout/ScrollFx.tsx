"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { observeReveals, startParallax } from "@/lib/scrollFx";

/**
 * Sayfa genelinde tek observer + tek paralaks döngüsü kurar.
 * Route değişiminde yeni gelen [data-reveal] elemanlarını da toplar.
 */
export default function ScrollFx() {
  const pathname = usePathname();

  useEffect(() => {
    observeReveals();
    const stop = startParallax();
    return stop;
  }, [pathname]);

  return null;
}
