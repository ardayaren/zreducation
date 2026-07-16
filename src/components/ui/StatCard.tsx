import {
  getStatCardClass,
  getStatDotClass,
  getStatValueClass,
  inferStatTone,
  type StatItem,
} from "@/lib/statTone";

interface StatCardProps {
  stat: StatItem;
  onDark?: boolean;
  size?: "sm" | "md" | "lg";
  showDot?: boolean;
}

const sizeClasses = {
  sm: { value: "text-xl md:text-2xl", label: "text-[10px]", padding: "px-4 py-3" },
  md: { value: "text-2xl md:text-3xl", label: "text-xs", padding: "p-8" },
  lg: { value: "text-xl", label: "text-sm", padding: "px-5 py-4" },
};

export default function StatCard({
  stat,
  onDark = false,
  size = "sm",
  showDot = false,
}: StatCardProps) {
  const tone = stat.tone ?? inferStatTone(stat.label, stat.value);
  const sizes = sizeClasses[size];

  return (
    <div
      className={`rounded-2xl text-center ${sizes.padding} ${getStatCardClass(tone, onDark)}`}
    >
      {showDot && (
        <span
          className={`inline-block w-2 h-2 rounded-full mb-2 ${getStatDotClass(tone)}`}
          aria-hidden
        />
      )}
      <div
        className={`font-heading-normal font-bold tabular-nums ${sizes.value} ${getStatValueClass(tone, onDark)}`}
      >
        {stat.value}
      </div>
      <div
        className={`mt-0.5 ${sizes.label} ${onDark ? "text-white/55" : "text-slate"}`}
      >
        {stat.label}
      </div>
      {stat.hint && (
        <div
          className={`text-[10px] mt-1 ${tone === "negative" ? "text-red-500" : "text-emerald-600"}`}
        >
          {stat.hint}
        </div>
      )}
    </div>
  );
}
