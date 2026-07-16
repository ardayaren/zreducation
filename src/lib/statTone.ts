export type StatTone = "positive" | "negative" | "neutral" | "gold";

export interface StatItem {
  value: string;
  label: string;
  tone?: StatTone;
  hint?: string;
}

const toneValueClasses: Record<StatTone, string> = {
  positive: "text-emerald-600",
  negative: "text-red-500",
  neutral: "text-navy-900",
  gold: "text-gold-500",
};

const toneValueClassesOnDark: Record<StatTone, string> = {
  positive: "text-emerald-400",
  negative: "text-red-400",
  neutral: "text-white",
  gold: "text-gold-400",
};

const toneCardClasses: Record<StatTone, string> = {
  positive: "bg-emerald-50 border border-emerald-200/80",
  negative: "bg-red-50 border border-red-200/80",
  neutral: "bg-surface/80",
  gold: "bg-gold-50 border border-gold-200/80",
};

const toneCardClassesOnDark: Record<StatTone, string> = {
  positive: "bg-emerald-500/15 border border-emerald-400/25",
  negative: "bg-red-500/15 border border-red-400/25",
  neutral: "navy-card-glass",
  gold: "bg-gold-500/15 border border-gold-400/25",
};

const toneDotClasses: Record<StatTone, string> = {
  positive: "bg-emerald-500",
  negative: "bg-red-500",
  neutral: "bg-navy-400",
  gold: "bg-gold-500",
};

export function getStatValueClass(tone: StatTone = "neutral", onDark = false) {
  return onDark ? toneValueClassesOnDark[tone] : toneValueClasses[tone];
}

export function getStatCardClass(tone: StatTone = "neutral", onDark = false) {
  return onDark ? toneCardClassesOnDark[tone] : toneCardClasses[tone];
}

export function getStatDotClass(tone: StatTone = "neutral") {
  return toneDotClasses[tone];
}

export function inferStatTone(label: string, value: string): StatTone {
  const text = `${label} ${value}`.toLowerCase();

  if (
    text.includes("memnuniyet") ||
    text.includes("başarı") ||
    text.includes("yerleşme") ||
    text.includes("geçiş") ||
    text.includes("mezun")
  ) {
    return "positive";
  }

  if (
    text.includes("red") ||
    text.includes("yanlış") ||
    text.includes("kayıp") ||
    text.includes("düşük")
  ) {
    return "negative";
  }

  if (text.includes("deneyim") || text.includes("yıllık")) {
    return "gold";
  }

  return "neutral";
}
