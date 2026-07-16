"use client";

import { ExpandableList } from "@/components/ui/ExpandablePanel";
import type { AccordionSection } from "@/data/expandableContent";

interface ServiceAccordionBlockProps {
  sections: AccordionSection[];
  variant?: "light" | "navy" | "surface" | "gold";
}

export default function ServiceAccordionBlock({
  sections,
  variant = "surface",
}: ServiceAccordionBlockProps) {
  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <div key={section.heading}>
          <h4 className="text-xs font-semibold text-navy-700/70 uppercase tracking-wide mb-3">
            {section.heading}
          </h4>
          <ExpandableList items={section.items} variant={variant} />
        </div>
      ))}
    </div>
  );
}
