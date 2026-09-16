"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/* JS (requestAnimationFrame) tabanlı marquee — CSS animasyonunun bazı
   Chrome'larda donması (compositor bug'ı) sorununu kökten çözer.
   Performans için: bölüm ekranda görünmüyorken ve sekme arka plandayken
   animasyon durur (CPU/GPU tasarrufu). */
export default function Marquee({
  children,
  reverse = false,
  speed = 50,
  className = "",
}: {
  children: ReactNode;
  reverse?: boolean;
  speed?: number;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [half, setHalf] = useState(0);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (track) setHalf(Math.max(1, track.scrollWidth / 2));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || half <= 0) return;

    let raf = 0;
    let last = performance.now();
    let x = 0;
    let running = true;

    const step = (ts: number) => {
      const dt = Math.min((ts - last) / 1000, 0.06);
      last = ts;
      x = (x + speed * dt) % half;
      const pos = reverse ? x : -x;
      track.style.transform = `translate3d(${pos.toFixed(2)}px, 0, 0)`;
      raf = requestAnimationFrame(step);
    };

    const start = () => {
      if (running) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(step);
    };
    const stop = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(raf);
    };

    /* görünürlük + sekme durumu kontrolü */
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { rootMargin: "80px" }
    );
    io.observe(track);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    raf = requestAnimationFrame(step);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      cancelAnimationFrame(raf);
    };
  }, [half, reverse, speed]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        ref={trackRef}
        className="flex w-max will-change-transform"
        style={{ transform: "translate3d(0, 0, 0)" }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}