"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import "./kage-edu.css";

/**
 * KageEdu — Kage sayfa DİLİNDEN İLHAMLA yazılmış özgün Zreducation akışı.
 * Exact Kage kaynağının kopyası/portu değildir: Three.js yok, iframe yok,
 * gömülü belge yok. Hafif DOM + CSS + IntersectionObserver.
 */

const CHAPTERS = [
  { n: "01", title: "Eşik", desc: "Ücretsiz seviye tespit ile doğru sınıfa yerleş.", href: "#kage-esik" },
  { n: "02", title: "Programlar", desc: "Konuşma odaklı İngilizce, online ve yüz yüze.", href: "#kage-programlar" },
  { n: "03", title: "Müfredat", desc: "Dört beceri, konuşma önceliğiyle dengede.", href: "#kage-mufredat" },
  { n: "04", title: "Işık", desc: "Hedefine uygun plan ve yurt dışı rotası.", href: "#kage-isik" },
];

const RAIL = [
  { href: "#kage-top", label: "Giriş" },
  { href: "#kage-esik", label: "Eşik — Seviye Tespit" },
  { href: "#kage-programlar", label: "Programlar" },
  { href: "#kage-mufredat", label: "Müfredat" },
  { href: "#kage-isik", label: "Işık — Başla" },
];

function useKageReveal(scope: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const root = scope.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.querySelectorAll("[data-rv]").forEach((el) => el.classList.add("rv-in"));
      return;
    }
    const els = Array.from(root.querySelectorAll("[data-rv]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          window.setTimeout(() => e.target.classList.add("rv-in"), 90);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [scope]);
}

function useKageRail(scope: React.RefObject<HTMLDivElement | null>) {
  const railRef = useRef<HTMLElement | null>(null);  useEffect(() => {
    const root = scope.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = RAIL.map((r) => root.querySelector(r.href)).filter(Boolean) as HTMLElement[];
    const dots = Array.from(root.querySelectorAll(".ke-rail a"));
    const chips = Array.from(root.querySelectorAll(".ke-chip"));

    const exitEls = Array.from(root.querySelectorAll<HTMLElement>("[data-exit]"));
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const vh = window.innerHeight;

      // aktif bölüm: bölüm orta noktası viewport ortasını geçince
      let active = 0;
      sections.forEach((s, i) => {
        if (y + vh * 0.45 >= s.offsetTop) active = i;
      });
      dots.forEach((d, i) => d.classList.toggle("on", i === active));
      chips.forEach((c) => {
        const href = c.getAttribute("href");
        const idx = RAIL.findIndex((r) => r.href === href);
        c.classList.toggle("on", idx === active);
      });

      // hero çıkışı: ilk ekran kayınca alt blok yumuşakça çözülür
      if (!reduce && exitEls.length) {
        const t = Math.min(1, Math.max(0, y / Math.max(1, vh * 0.6)));
        exitEls.forEach((el, i) => {
          const at = i * 0.08;
          const a = 1 - Math.min(1, Math.max(0, (t - at) / 0.35));
          el.style.transition = "none";
          el.style.opacity = a.toFixed(3);
          el.style.transform = `translate3d(0,${((1 - a) * 14).toFixed(1)}px,0)`;
          el.style.pointerEvents = a < 0.05 ? "none" : "";
          if (t <= 0) {
            el.style.opacity = "";
            el.style.transform = "";
            el.style.pointerEvents = "";
            el.style.transition = "";
          }
        });
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [scope]);
  return railRef;
}

export function KageEduHero() {
  const scope = useRef<HTMLDivElement | null>(null);
  useKageReveal(scope);
  useKageRail(scope);

  return (
    <div ref={scope} className="kage-edu ke-edu">
      <div className="ke-night" aria-hidden>
        <div className="ke-night-photo" />
        <div className="ke-grain" />
        <div className="ke-vignette" />
      </div>

      <nav className="ke-rail" aria-label="Bölümler">
        {RAIL.map((r, i) => (
          <a key={r.href} href={r.href} aria-label={r.label} className={i === 0 ? "on" : ""}>
            <i />
          </a>
        ))}
      </nav>

      <section className="ke-hero" id="kage-top">
        <div className="ke-hero-top">
          <p className="ke-eyebrow" data-rv="fade">
            <span className="dot" /> Bölüm 00 — Eşik
          </p>
          <h1 className="ke-display ke-h-hero" data-rv="up">
            Sessizlikten
            <br />
            akıcı konuşmaya.
          </h1>
          <p className="ke-body ke-hero-sub" data-rv="up">
            Denizli&apos;de konuşma odaklı İngilizce eğitimi: 3 ayda 90 derste 0&apos;dan akıcı
            konuşmaya. Önce seviyeni öğren, sonra doğru sınıfa yerleş.
          </p>
          <div className="ke-hero-cta" data-rv="up">
            <Link href="/seviye-tespit" className="ke-btn ke-btn-solid">
              Ücretsiz Seviye Tespit <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/egitimlerimiz" className="ke-btn ke-btn-ghost">
              Programlar
            </Link>
          </div>
        </div>

        <div className="ke-spacer" />

        <div className="ke-hero-foot">
          <div className="ke-cue" data-rv="fade" data-exit>
            <span>Kaydırarak başla</span>
            <span className="track">
              <i />
            </span>
          </div>
          <div className="ke-chapters">
            {CHAPTERS.map((c) => (
              <a key={c.n} href={c.href} className="ke-chip" data-rv="up" data-exit>
                <span className="num">{c.n}</span>
                <span>
                  <b>{c.title}</b>
                  <p>{c.desc}</p>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="ke-side" aria-hidden data-rv="fade" data-exit>
          ZREDUCATION — DENİZLİ
        </div>
      </section>
    </div>
  );
}

const STATS = [
  { v: "05", l: "Program" },
  { v: "90", l: "Ders / 3 Ay" },
  { v: "A1–C2", l: "CEFR Seviye" },
  { v: "%94", l: "Memnuniyet" },
];

export function KageEduChapters() {
  const scope = useRef<HTMLDivElement | null>(null);
  useKageReveal(scope);

  return (
    <div ref={scope} className="kage-edu ke-edu">
      {/* Bölüm I — Eşik */}
      <section className="ke-sec" id="kage-esik">
        <div className="ke-sec-head" data-rv="fade">
          <span className="k">
            <b>01</b> — Eşik · Seviye Tespit
          </span>
          <span className="ke-rule" />
          <span className="k">Başlangıç</span>
        </div>
        <div className="ke-gate-grid">
          <h2 className="ke-display ke-h-sec" data-rv="up">
            Önce seviyeni bil, sonra hızlı ilerle.
          </h2>
          <div>
            <p className="ke-lead" data-rv="up">
              İki aşamalı ücretsiz sınav: çoktan seçmeli yazılı test ve 15 dakikalık online
              speaking görüşmesi. Sonuçların anında paylaşılır, sana en uygun program önerilir.
            </p>
            <p className="ke-body" data-rv="up" style={{ marginTop: 18 }}>
              Doğru sınıfa yerleşmek zaman kazandırır. Her seviye sonunda resmi seviye tespit
              sınavı uygulanır; 8–10 kişilik homojen gruplarda kimse geride kalmaz, kimse
              beklemez.
            </p>
            <Link href="/seviye-tespit" className="ke-arrowlink" data-rv="fade">
              <span>Seviyeni öğren</span>
              <span className="ar">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
        <div className="ke-stats" data-rv="up">
          {STATS.map((s) => (
            <div key={s.l}>
              <b>{s.v}</b>
              <span>{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bölüm II — Programlar */}
      <section className="ke-sec" id="kage-programlar">
        <div className="ke-sec-head" data-rv="fade">
          <span className="k">
            <b>02</b> — Programlar
          </span>
          <span className="ke-rule" />
          <span className="k">Üç Yol</span>
        </div>
        <div className="ke-cards">
          <Link href="/ingilizce-egitimi" className="ke-card" data-rv="up">
            <span className="ke-card-fr">
              <img src="/images/english-classroom.jpg" alt="Konuşma odaklı İngilizce sınıfı" loading="lazy" />
              <span className="ke-card-lab">
                <b>Konuşma Odaklı</b>
                <span className="jp">SPEAKING</span>
              </span>
            </span>
            <span className="ke-card-meta">
              <span>A1–C2 · 3 ay / 90 ders</span>
              <span>01 / 03</span>
            </span>
          </Link>
          <Link href="/online-egitim" className="ke-card" data-rv="up">
            <span className="ke-card-fr">
              <img src="/images/online-learning.jpg" alt="Online canlı İngilizce dersi" loading="lazy" />
              <span className="ke-card-lab">
                <b>Online Eğitim</b>
                <span className="jp">CANLI</span>
              </span>
            </span>
            <span className="ke-card-meta">
              <span>Birebir / Grup · 7/24 arşiv</span>
              <span>02 / 03</span>
            </span>
          </Link>
          <Link href="/egitimlerimiz#yuz-yuze" className="ke-card" data-rv="up">
            <span className="ke-card-fr">
              <img src="/images/campus-classroom.jpg" alt="Denizli yüz yüze sınıf" loading="lazy" />
              <span className="ke-card-lab">
                <b>Yüz Yüze · Denizli</b>
                <span className="jp">KAMPÜS</span>
              </span>
            </span>
            <span className="ke-card-meta">
              <span>Maks 8–10 kişi · kulüp</span>
              <span>03 / 03</span>
            </span>
          </Link>
        </div>
      </section>

      {/* Bölüm III — Müfredat */}
      <section className="ke-sec" id="kage-mufredat">
        <div className="ke-sec-head" data-rv="fade">
          <span className="k">
            <b>03</b> — Müfredat
          </span>
          <span className="ke-rule" />
          <span className="k">Dört Beceri</span>
        </div>
        <h2 className="ke-display ke-h-sec" data-rv="up" style={{ maxWidth: "16ch", marginBottom: 34 }}>
          Dört beceri. Tek öncelik: konuşmak.
        </h2>
        <div className="ke-cur">
          {[
            { n: "01", t: "Speaking", e: "KONUŞMA", d: "Her dersin en az yarısı aktif konuşma pratiği; sınıfta susan öğrenci bırakmamak hedefi.", m: "Her ders" },
            { n: "02", t: "Listening", e: "DİNLEME", d: "Gerçek konuşma kayıtları ve podcast materyalleriyle doğal İngilizceyi anlama.", m: "Haftalık" },
            { n: "03", t: "Reading", e: "OKUMA", d: "Seviyeye uygun metinlerle kelime hazinesi ve okuduğunu anlama hızı.", m: "Haftalık" },
            { n: "04", t: "Writing", e: "YAZMA", d: "Günlük yazışmadan akademik metne yapılandırılmış yazma çalışmaları.", m: "Haftalık" },
            { n: "05", t: "Sınav Hazırlık", e: "IELTS · TOEFL · YDS", d: "Hedef puana odaklı strateji, deneme sınavları ve birebir koçluk.", m: "8–14 hf" },
          ].map((l) => (
            <Link key={l.n} href="/ingilizce-egitimi" className="ke-les" data-rv="up">
              <span className="k">{l.n}</span>
              <h3>
                {l.t}
                <em>{l.e}</em>
              </h3>
              <p>{l.d}</p>
              <span className="t">{l.m}</span>
              <i className="bar" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export function KageEduClosing() {
  const scope = useRef<HTMLDivElement | null>(null);
  useKageReveal(scope);

  return (
    <div ref={scope} className="kage-edu ke-edu">
      <section className="ke-fin" id="kage-isik">
        <p className="ke-eyebrow" data-rv="fade" style={{ justifyContent: "center" }}>
          <span className="dot" /> Bölüm 04 — Işık
        </p>
        <h2 className="ke-display" data-rv="up">
          Işık
        </h2>
        <p className="ke-body-lg" data-rv="up">
          Kapı kapanmıyor: seviyeni belirle, programını seç, ilk derste konuşmaya başla.
          Yurt dışı hedefin varsa İtalya ve Almanya rotanı birlikte çizelim.
        </p>
        <div className="ke-cta-row" data-rv="fade">
          <Link href="/seviye-tespit" className="ke-btn ke-btn-solid">
            Sınava Başla <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/iletisim" className="ke-btn ke-btn-ghost">
            İletişim
          </Link>
        </div>
      </section>
    </div>
  );
}
