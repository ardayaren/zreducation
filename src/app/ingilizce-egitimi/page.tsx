import type { Metadata } from "next";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { levels } from "@/data/services";

export const metadata: Metadata = {
  title: "İngilizce Eğitimi",
  description:
    "A1'den C2'ye kadar CEFR uyumlu İngilizce eğitim programları, IELTS ve TOEFL hazırlık kursları.",
};

const examPrograms = [
  {
    name: "IELTS Hazırlık",
    duration: "8-12 Hafta",
    description: "Academic ve General Training modülleri, deneme sınavları ve birebir koçluk.",
  },
  {
    name: "TOEFL iBT Hazırlık",
    duration: "8-12 Hafta",
    description: "Reading, Listening, Speaking ve Writing bölümlerine özel strateji eğitimi.",
  },
  {
    name: "YDS Hazırlık",
    duration: "10-14 Hafta",
    description: "Kamu personeli için YDS sınavına yönelik kapsamlı hazırlık programı.",
  },
  {
    name: "İş İngilizcesi",
    duration: "6-8 Hafta",
    description: "Profesyonel iletişim, toplantı, sunum ve e-posta yazım becerileri.",
  },
];

const methods = [
  "İletişim odaklı öğretim (CLT)",
  "Gerçek hayat senaryoları ve vaka çalışmaları",
  "Multimedya destekli ders materyalleri",
  "Haftalık konuşma kulüpleri",
  "Kişiselleştirilmiş öğrenme planları",
  "Düzenli ilerleme raporları",
];

export default function IngilizceEgitimiPage() {
  return (
    <PageLayout>
      <PageHero title="İngilizce Eğitimi" subtitle="A1 - C2">
        <p>
          Temel seviyeden ileri düzeye, CEFR uyumlu müfredat ile kapsamlı
          İngilizce eğitim programları.
        </p>
      </PageHero>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
              subtitle="Seviyeler"
              title="CEFR Seviye Programları"
              description="Avrupa Ortak Dil Referans Çerçevesi standartlarına uygun, kademeli eğitim programları."
            />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {levels.map((level, index) => (
              <AnimatedSection key={level.code} delay={index * 0.08}>
                <div className="bg-surface p-8 border border-border hover:border-gold-400 hover:shadow-sm transition-all group">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-14 h-14 rounded-md surface-navy flex items-center justify-center font-heading-normal text-xl font-bold text-gold-400">
                      {level.code}
                    </span>
                    <div>
                      <h3 className="font-heading-normal text-lg font-bold text-navy-900">
                        {level.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate text-sm leading-relaxed">
                    {level.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="text-center mt-12">
              <Button href="/seviye-tespit" size="lg">
                Seviyenizi Öğrenin — Ücretsiz Sınav
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="sinav" className="py-20 bg-surface scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
              subtitle="Sınav Hazırlık"
              title="Sınav & Sertifika Programları"
              description="Uluslararası sınavlara yönelik özel hazırlık programları ile hedef puanınıza ulaşın."
            />

          <div className="grid md:grid-cols-2 gap-6">
            {examPrograms.map((program, index) => (
              <AnimatedSection key={program.name} delay={index * 0.1}>
                <div className="bg-white p-8 border border-border">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-heading-normal text-xl font-bold text-navy-900">
                      {program.name}
                    </h3>
                    <span className="label-caps px-2 py-1 border border-gold-600 text-gold-600">
                      {program.duration}
                    </span>
                  </div>
                  <p className="text-slate leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 surface-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
              subtitle="Metodoloji"
              title="Öğretim Yaklaşımımız"
              description="Modern ve etkili öğretim metodları ile kalıcı öğrenme sağlıyoruz."
              light
            />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {methods.map((method, index) => (
              <AnimatedSection key={method} delay={index * 0.05}>
                <div className="bg-white/5 border border-white/10 rounded-sm p-5 text-white/90">
                  {method}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
