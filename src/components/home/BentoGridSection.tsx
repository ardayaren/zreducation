"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, Sparkles } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import StatCard from "@/components/ui/StatCard";
import { services, performanceStats } from "@/data/services";
import { fadeUp, staggerContainer, transition } from "@/lib/motion";

type BentoVariant = "navy" | "gold" | "light" | "surface";

interface BentoTile {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: (typeof services)[number]["icon"];
  span: string;
  variant: BentoVariant;
  eyebrow?: string;
  stat?: string;
  backgroundImage?: string;
}

const variantStyles: Record<
  BentoVariant,
  { tile: string; title: string; text: string; icon: string; link: string }
> = {
  navy: {
    tile: "surface-navy text-white",
    title: "text-white",
    text: "text-white/65",
    icon: "text-gold-400",
    link: "text-gold-300 hover:text-gold-200",
  },
  gold: {
    tile: "bg-gradient-to-br from-gold-500 via-gold-600 to-gold-700 text-navy-950",
    title: "text-navy-950",
    text: "text-navy-900/75",
    icon: "text-navy-900/80",
    link: "text-navy-900 hover:text-navy-950",
  },
  light: {
    tile: "bg-white shadow-[0_4px_24px_rgba(14,34,64,0.06)]",
    title: "text-navy-900",
    text: "text-slate",
    icon: "text-gold-600",
    link: "text-gold-600 hover:text-navy-900",
  },
  surface: {
    tile: "bg-surface shadow-[0_4px_20px_rgba(14,34,64,0.05)]",
    title: "text-navy-900",
    text: "text-slate",
    icon: "text-gold-600",
    link: "text-gold-600 hover:text-navy-900",
  },
};

const imageOverlays: Record<BentoVariant, string> = {
  navy: "bg-gradient-to-t from-navy-950/95 via-navy-900/72 to-navy-900/35",
  gold: "bg-gradient-to-t from-navy-950/92 via-navy-900/68 to-navy-800/30",
  light: "bg-gradient-to-t from-navy-950/94 via-navy-900/70 to-navy-900/32",
  surface: "bg-gradient-to-t from-navy-950/94 via-navy-900/70 to-navy-900/32",
};

const serviceById = Object.fromEntries(services.map((s) => [s.id, s]));

function fromService(
  id: string,
  extra: Omit<BentoTile, keyof (typeof services)[number]>
): BentoTile {
  return { ...serviceById[id], ...extra };
}

const tiles: BentoTile[] = [
  fromService("yurt-disi", {
    span: "md:col-span-2 lg:col-span-7 lg:row-span-2",
    variant: "navy",
    eyebrow: "Öne Çıkan",
    stat: "İtalya & Almanya",
    backgroundImage: "/images/harvard.jpg",
  }),
  fromService("ingilizce", {
    span: "md:col-span-1 lg:col-span-5",
    variant: "light",
    eyebrow: "A1 – C2",
    backgroundImage: "/images/english-classroom.jpg",
  }),
  {
    id: "seviye-tespit",
    title: "Seviye Tespit Sınavı",
    description: "70 soruluk Language Hub testi ile seviyenizi ölçün.",
    href: "/seviye-tespit",
    icon: ClipboardCheck,
    span: "md:col-span-1 lg:col-span-5",
    variant: "gold",
    eyebrow: "Ücretsiz",
    stat: "~30 dk",
    backgroundImage: "/images/exam-prep.jpg",
  },
  fromService("online", {
    span: "lg:col-span-4",
    variant: "surface",
    backgroundImage: "/images/online-learning.jpg",
  }),
  fromService("grup", {
    span: "lg:col-span-4",
    variant: "light",
    backgroundImage: "/images/group-class.jpg",
  }),
  fromService("yuz-yuze", {
    span: "lg:col-span-4",
    variant: "surface",
    backgroundImage: "/images/campus-classroom.jpg",
  }),
  fromService("sertifika", {
    span: "md:col-span-2 lg:col-span-6",
    variant: "navy",
    eyebrow: "IELTS · TOEFL · YDS",
    backgroundImage: "/images/exam-prep.jpg",
  }),
];

function BentoCard({
  tile,
  large = false,
}: {
  tile: BentoTile;
  large?: boolean;
}) {
  const styles = variantStyles[tile.variant];
  const Icon = tile.icon;
  const hasImage = Boolean(tile.backgroundImage);

  return (
    <Link href={tile.href} className="block h-full group">
      <div
        className={`relative h-full overflow-hidden rounded-3xl p-6 md:p-7 flex flex-col transition-all duration-500 ease-out group-hover:scale-[1.01] group-hover:shadow-[0_20px_48px_rgba(14,34,64,0.12)] ${hasImage ? "text-white" : styles.tile} ${large ? "min-h-[300px] lg:min-h-full" : "min-h-[160px]"}`}
      >
        {hasImage && tile.backgroundImage && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url(${tile.backgroundImage})` }}
              aria-hidden
            />
            <div
              className={`absolute inset-0 ${imageOverlays[tile.variant]}`}
              aria-hidden
            />
          </>
        )}

        {tile.variant === "navy" && !hasImage && (
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
        )}
        {tile.variant === "gold" && !hasImage && (
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/20 rounded-full blur-2xl pointer-events-none" />
        )}

        <div className="relative flex items-start justify-between gap-4 mb-auto">
          <div className="space-y-1">
            {tile.eyebrow && (
              <span
                className={`label-caps text-[10px] block ${hasImage ? "text-white/80" : "opacity-70"}`}
              >
                {tile.eyebrow}
              </span>
            )}
            {tile.stat && large && (
              <span
                className={`inline-flex badge-pill text-[10px] mt-1 ${hasImage ? "bg-white/15 text-gold-300" : "bg-white/10 text-gold-300"}`}
              >
                {tile.stat}
              </span>
            )}
          </div>
          <div
            className={`shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center ${hasImage ? "bg-white/15 backdrop-blur-sm" : tile.variant === "navy" ? "navy-card-glass" : tile.variant === "gold" ? "bg-white/25" : "bg-gold-50"}`}
          >
            <Icon
              className={`w-5 h-5 ${hasImage ? "text-gold-400" : styles.icon}`}
              strokeWidth={1.5}
            />
          </div>
        </div>

        <div className="relative mt-6">
          <h3
            className={`font-heading-normal font-bold tracking-tight mb-2 ${hasImage ? "text-white" : styles.title} ${large ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}
          >
            {tile.title}
          </h3>
          <p
            className={`text-sm leading-relaxed ${hasImage ? "text-white/75 max-w-md" : styles.text} ${large && !hasImage ? "max-w-md" : !hasImage ? "line-clamp-2" : ""}`}
          >
            {tile.description}
          </p>

          <div className="flex items-center justify-between mt-5">
            <span
              className={`label-caps inline-flex items-center gap-1.5 text-[10px] transition-colors ${hasImage ? "text-gold-300 hover:text-gold-200" : styles.link}`}
            >
              Keşfet
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </span>
            {tile.stat && !large && (
              <span
                className={`text-xs font-semibold tabular-nums ${hasImage ? "text-white/70" : styles.text}`}
              >
                {tile.stat}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function BentoGridSection() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white via-surface/40 to-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Programlar"
          title="Her Hedef İçin Bir Alan"
          description="Modüler ve orantılı düzenle hizmetlerimizi keşfedin."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4"
        >
          {tiles.map((tile, index) => (
            <motion.div
              key={tile.id}
              variants={fadeUp}
              transition={{ ...transition.default, delay: index * 0.05 }}
              className={tile.span}
            >
              <BentoCard tile={tile} large={tile.id === "yurt-disi"} />
            </motion.div>
          ))}

          <motion.div
            variants={fadeUp}
            transition={{ ...transition.default, delay: 0.4 }}
            className="md:col-span-2 lg:col-span-6"
          >
            <div className="relative h-full min-h-[160px] rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(14,34,64,0.06)] p-6 md:p-7 flex flex-col justify-between">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: "url(/images/campus-classroom.jpg)" }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-white/92" aria-hidden />

              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-gold-600" />
                  <span className="label-caps text-gold-600 text-[10px]">
                    Rakamlarla Zreducation
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {performanceStats.map((stat) => (
                    <StatCard key={stat.label} stat={stat} size="sm" showDot />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
