"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface ExpandableDetail {
  title: string;
  summary: string;
  content: string;
  bullets?: string[];
  related?: string;
}

type Variant = "light" | "navy" | "surface" | "gold";

const variantStyles: Record<
  Variant,
  { wrapper: string; title: string; summary: string; body: string; related: string }
> = {
  light: {
    wrapper: "bg-white shadow-sm hover:shadow-md",
    title: "text-navy-900",
    summary: "text-slate",
    body: "text-slate",
    related: "text-gold-700 bg-gold-50",
  },
  surface: {
    wrapper: "bg-surface shadow-sm hover:shadow-md",
    title: "text-navy-900",
    summary: "text-slate",
    body: "text-slate",
    related: "text-gold-700 bg-gold-50",
  },
  navy: {
    wrapper: "navy-card-glass hover:bg-white/10",
    title: "text-white",
    summary: "text-white/65",
    body: "text-white/75",
    related: "text-gold-300 bg-white/10",
  },
  gold: {
    wrapper: "bg-gradient-to-br from-gold-50 to-white shadow-sm",
    title: "text-navy-900",
    summary: "text-slate",
    body: "text-slate",
    related: "text-gold-800 bg-gold-100",
  },
};

interface ExpandablePanelProps {
  item: ExpandableDetail;
  variant?: Variant;
  defaultOpen?: boolean;
}

export function ExpandablePanel({
  item,
  variant = "light",
  defaultOpen = false,
}: ExpandablePanelProps) {
  const [open, setOpen] = useState(defaultOpen);
  const styles = variantStyles[variant];

  return (
    <div className={`rounded-2xl overflow-hidden ${styles.wrapper}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 p-5 text-left"
        aria-expanded={open}
      >
        <div className="min-w-0 flex-1">
          <h4 className={`text-sm font-semibold mb-1 ${styles.title}`}>
            {item.title}
          </h4>
          <p className={`text-xs leading-relaxed ${styles.summary}`}>
            {item.summary}
          </p>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className={`shrink-0 mt-0.5 ${variant === "navy" ? "text-gold-400" : "text-gold-600"}`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>

      <div
        className="accordion-grid"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="accordion-inner">
          <div
            className={`px-5 pb-5 pt-0 border-t ${variant === "navy" ? "border-white/10" : "border-border/40"}`}
          >
            <p className={`text-xs leading-relaxed mb-3 ${styles.body}`}>
              {item.content}
            </p>
            {item.bullets && item.bullets.length > 0 && (
              <ul className="space-y-1.5 mb-3">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className={`flex items-start gap-2 text-xs leading-relaxed ${styles.body}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${variant === "navy" ? "bg-gold-400" : "bg-gold-600"}`}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
            {item.related && (
              <p
                className={`text-[11px] leading-relaxed rounded-xl px-3 py-2 ${styles.related}`}
              >
                <span className="font-semibold">İlgili hizmet: </span>
                {item.related}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ExpandableListProps {
  items: ExpandableDetail[];
  variant?: Variant;
  defaultOpenIndex?: number;
}

export function ExpandableList({
  items,
  variant = "light",
  defaultOpenIndex = 0,
}: ExpandableListProps) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <ExpandablePanel
          key={item.title}
          item={item}
          variant={variant}
          defaultOpen={index === defaultOpenIndex}
        />
      ))}
    </div>
  );
}
