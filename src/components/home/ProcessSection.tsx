import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
  {
    step: "01",
    title: "Danışmanlık",
    description:
      "Hedeflerinizi analiz ediyor, uygun program ve rotayı birlikte belirliyoruz.",
  },
  {
    step: "02",
    title: "Seviye Tespiti",
    description:
      "Mevcut yeterliliğinizi ölçüyor, kişisel eğitim planınızı oluşturuyoruz.",
  },
  {
    step: "03",
    title: "Eğitim Süreci",
    description:
      "Online veya yüz yüze programlarla yapılandırılmış eğitime başlıyorsunuz.",
  },
  {
    step: "04",
    title: "Yerleştirme",
    description:
      "Başvuru, vize ve yerleşim süreçlerinde uçtan uca danışmanlık sunuyoruz.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 surface-navy border-t-[3px] border-gold-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Süreç"
          title="Çalışma Metodolojimiz"
          description="Başvurudan tamamlanmaya kadar her aşamada tanımlı ve izlenebilir süreçler."
          light
        />

        <AnimatedStagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((item) => (
            <AnimatedItem key={item.step}>
              <div className="bg-navy-800/50 backdrop-blur-sm rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <span className="label-caps text-gold-500 block mb-4">
                  Adım {item.step}
                </span>
                <h3 className="font-heading-normal text-base font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
