/* Paylaşımlı scroll-reveal altyapısı: tek IntersectionObserver + tek rAF.
   Animasyonun kendisi saf CSS'tir (opacity + translate3d only) — JS kare
   başına iş yapmaz, bu yüzden onlarca bölümde bile 60fps korunur. */

let io: IntersectionObserver | null = null;
let plxEls: HTMLElement[] = [];
let plxTicking = false;
let plxRunning = false;

const REDUCED =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || !("IntersectionObserver" in window))
    return null;
  if (!io) {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("rv-on");
            if (!el.hasAttribute("data-reveal-repeat")) io?.unobserve(el);
          } else if (el.hasAttribute("data-reveal-repeat")) {
            el.classList.remove("rv-on");
          }
        });
      },
      /* Alt kenarda erken tetikle: eleman ekrana girerken değil, girmeden
         hemen önce başlar — kaydırdıkça süzülüyormuş hissi verir. */
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
  }
  return io;
}

/** Sayfadaki tüm [data-reveal] / [data-reveal-group] elemanlarını izle. */
export function observeReveals(root: ParentNode = document): void {
  if (typeof window === "undefined") return;
  const obs = getObserver();
  if (!obs) {
    /* Çok eski tarayıcı: her şeyi görünür bırak, içerik kaybolmasın. */
    root
      .querySelectorAll("[data-reveal], [data-reveal-group]")
      .forEach((el) => el.classList.add("rv-on"));
    return;
  }
  root
    .querySelectorAll("[data-reveal], [data-reveal-group]")
    .forEach((el) => {
      if (!el.classList.contains("rv-on")) obs.observe(el);
    });
  refreshParallax();
}

/* ------------------------- scroll-paralel paralaks -------------------------
   [data-plx="0.12"] — eleman viewport merkezinden uzaklaştıkça translateY.
   Sadece transform yazılır; rAF başına ve sadece ekrandaki elemanlara. */

function refreshParallax(): void {
  if (typeof document === "undefined") return;
  plxEls = Array.from(
    document.querySelectorAll<HTMLElement>("[data-plx]")
  );
}

function applyParallax(): void {
  plxTicking = false;
  if (!plxEls.length) return;
  const vh = window.innerHeight;
  for (let i = 0; i < plxEls.length; i++) {
    const el = plxEls[i];
    const r = el.getBoundingClientRect();
    if (r.bottom < -120 || r.top > vh + 120) continue;
    const speed = parseFloat(el.dataset.plx || "0.1") || 0;
    if (!speed) continue;
    const off = (r.top + r.height / 2 - vh / 2) * speed;
    el.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0)`;
  }
}

function onScroll(): void {
  if (plxTicking || !plxEls.length) return;
  plxTicking = true;
  requestAnimationFrame(applyParallax);
}

/** Paralaks döngüsünü başlat; cleanup fonksiyonu döner. */
export function startParallax(): () => void {
  if (typeof window === "undefined" || REDUCED || plxRunning) return () => {};
  plxRunning = true;
  refreshParallax();
  applyParallax();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  return () => {
    plxRunning = false;
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
  };
}
