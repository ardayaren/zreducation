"use client";

import { testimonials } from "@/data/testimonials";
import SectionTitle from "@/components/ui/SectionTitle";

function ReviewCard({
  item,
  duplicate = false,
}: {
  item: (typeof testimonials)[0];
  duplicate?: boolean;
}) {
  return (
    <article
      className="shrink-0 w-[280px] sm:w-[320px] bg-white rounded-3xl p-5 shadow-[0_4px_24px_rgba(14,34,64,0.06)] border border-border/50"
      aria-hidden={duplicate}
    >
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`text-sm ${i < item.rating ? "text-emerald-500" : "text-slate-light"}`}
          >
            ★
          </span>
        ))}
      </div>
      <p className="text-sm text-navy-700 leading-relaxed mb-4 line-clamp-4">
        &ldquo;{item.content}&rdquo;
      </p>
      <div>
        <p className="text-sm font-bold text-navy-900">{item.name}</p>
        <p className="text-xs text-gold-600 mt-0.5">{item.role}</p>
      </div>
    </article>
  );
}

export default function ScrollingTestimonials() {
  const items = [...testimonials, ...testimonials];

  return (
    <section className="py-16 md:py-20 bg-surface border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <SectionTitle
          subtitle="Referanslar"
          title="Öğrenci Yorumları"
          description="20+ gerçek öğrenci deneyimi — Denizli merkezimiz ve online programlarımız."
        />
      </div>

      <div className="relative">
        <div className="flex gap-4 animate-marquee-slow w-max">
          {items.map((item, index) => (
            <ReviewCard
              key={`${item.name}-${index}`}
              item={item}
              duplicate={index >= testimonials.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
