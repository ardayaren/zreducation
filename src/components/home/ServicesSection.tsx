import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import SectionTitle from "@/components/ui/SectionTitle";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="py-20 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Hizmetlerimiz"
          title="Eğitim ve Danışmanlık Hizmetleri"
          description="Yurt dışı eğitimden İngilizce programlarına, online ve yüz yüze eğitimden sınav hazırlığına kadar kurumsal çözümler."
        />

        <AnimatedStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <AnimatedItem key={service.id}>
              <Link
                href={service.href}
                className="group block h-full card-corporate p-8 hover:bg-gold-50/60"
              >
                <service.icon
                  className="w-6 h-6 text-gold-600 mb-5"
                  strokeWidth={1.5}
                />
                <h3 className="font-heading-normal text-base font-bold text-navy-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-1.5 mb-6">
                  {service.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature.title}
                      className="text-xs text-slate flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-gold-600 shrink-0" />
                      {feature.title}
                    </li>
                  ))}
                </ul>
                <span className="label-caps inline-flex items-center gap-2 text-gold-600 group-hover:text-navy-900 transition-colors">
                  Detay
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
