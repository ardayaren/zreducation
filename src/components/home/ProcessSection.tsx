import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import NavySection from "@/components/ui/NavySection";
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
    title: "Sertifikasyon",
    description:
      "Yazılı test ve speaking sınavını tamamlayıp CEFR uyumlu sertifikanızı alırsınız; yurt dışı hedefiniz varsa danışmanlık sürecine geçeriz.",
  },
];

export default function ProcessSection() {
  return (
    <NavySection>
      <SectionTitle
          subtitle="Süreç"
          title="Çalışma Metodolojimiz"
          description="Başvurudan tamamlanmaya kadar her aşamada tanımlı ve izlenebilir süreçler."
          light
        />

        <AnimatedStagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((item) => (
            <AnimatedItem key={item.step}>
              <div className="navy-card-glass rounded-3xl p-8 h-full transition-transform duration-300 hover:translate-y-[-2px] gpu-layer">
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
    </NavySection>
  );
}
