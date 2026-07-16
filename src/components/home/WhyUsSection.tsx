import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import SectionTitle from "@/components/ui/SectionTitle";

const reasons = [
  {
    title: "Güvenilirlik",
    description:
      "15 yıllık operasyonel deneyim ve şeffaf süreç yönetimi.",
  },
  {
    title: "Uzman Kadro",
    description:
      "Sertifikalı eğitmenler ve yurt dışı eğitim danışmanlarından oluşan ekip.",
  },
  {
    title: "Akredite Müfredat",
    description:
      "CEFR standartlarına uygun, uluslararası geçerliliği olan programlar.",
  },
  {
    title: "Sürekli Destek",
    description:
      "Eğitim süreci boyunca erişilebilir öğrenci danışmanlık hattı.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Kurumsal Avantajlar"
          title="Neden Zreducation?"
          description="Eğitimde kalite, güven ve ölçülebilir sonuç odaklı kurumsal yaklaşım."
        />

        <AnimatedStagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason) => (
            <AnimatedItem key={reason.title}>
              <div className="card-corporate bg-surface p-8 h-full">
                <div className="w-8 h-0.5 bg-gold-600 mb-5" />
                <h3 className="font-heading-normal text-sm font-bold text-navy-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
