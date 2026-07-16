import type { Metadata } from "next";
import {
  Globe,
  GraduationCap,
  FileCheck,
  Home,
  Plane,
  BookOpen,
} from "lucide-react";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Yurt Dışı Eğitim",
  description:
    "Amerika, İngiltere, Kanada, Avustralya ve Avrupa üniversitelerine öğrenci yerleştirme danışmanlığı.",
};

const countries = [
  { name: "İngiltere", universities: "Oxford, Cambridge, LSE, UCL", flag: "🇬🇧" },
  { name: "Amerika", universities: "MIT, Harvard, Stanford, UCLA", flag: "🇺🇸" },
  { name: "Kanada", universities: "Toronto, UBC, McGill", flag: "🇨🇦" },
  { name: "Avustralya", universities: "Melbourne, Sydney, ANU", flag: "🇦🇺" },
  { name: "Almanya", universities: "LMU, TU Munich, Heidelberg", flag: "🇩🇪" },
  { name: "Hollanda", universities: "Amsterdam, Delft, Leiden", flag: "🇳🇱" },
];

const process = [
  {
    icon: BookOpen,
    title: "Danışmanlık & Planlama",
    description: "Hedeflerinizi belirliyor, ülke ve üniversite seçimi yapıyoruz.",
  },
  {
    icon: FileCheck,
    title: "Başvuru Hazırlığı",
    description: "Motivasyon mektubu, referanslar ve tüm belgeleri hazırlıyoruz.",
  },
  {
    icon: GraduationCap,
    title: "Kabul & Kayıt",
    description: "Başvuru takibi, kabul mektubu ve kayıt işlemlerini yönetiyoruz.",
  },
  {
    icon: Plane,
    title: "Vize Süreci",
    description: "Vize başvurusu, mülakat hazırlığı ve belge kontrolü.",
  },
  {
    icon: Home,
    title: "Yerleşim Desteği",
    description: "Konaklama, havaalanı karşılama ve oryantasyon programı.",
  },
  {
    icon: Globe,
    title: "Sürekli Destek",
    description: "Yurt dışındayken de 7/24 öğrenci destek hattımız aktif.",
  },
];

const programs = [
  "Lisans Programları (Undergraduate)",
  "Yüksek Lisans (Master's)",
  "Doktora Programları (PhD)",
  "Dil Okulu & Pathway Programları",
  "Yaz Okulu Programları",
  "Staj & Work & Travel",
];

export default function YurtDisiPage() {
  return (
    <PageLayout>
      <PageHero title="Yurt Dışı Eğitim" subtitle="Öğrenci Gönderimi">
        <p>
          Dünyanın en prestijli üniversitelerine öğrenci yerleştirme
          danışmanlığı. Başvurudan mezuniyete kadar yanınızdayız.
        </p>
      </PageHero>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
              subtitle="Ülkeler"
              title="Eğitim Destinasyonları"
              description="30'dan fazla partner üniversitemizle dünyanın dört bir yanına öğrenci gönderiyoruz."
            />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <AnimatedSection key={country.name} delay={index * 0.08}>
                <div className="bg-surface p-6 border border-border hover:border-gold-600 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{country.flag}</span>
                    <h3 className="font-heading-normal text-xl font-bold text-navy-900">
                      {country.name}
                    </h3>
                  </div>
                  <p className="text-slate text-sm">{country.universities}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
              subtitle="Programlar"
              title="Eğitim Programları"
            />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {programs.map((program, index) => (
              <AnimatedSection key={program} delay={index * 0.05}>
                <div className="bg-white rounded-sm p-6 border border-border flex items-center gap-3">
                  <span className="w-1 h-1 bg-gold-600 shrink-0" />
                  <span className="text-navy-700 font-medium">{program}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 surface-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
              subtitle="Süreç"
              title="Başvuru Sürecimiz"
              description="6 adımda yurt dışı eğitim hayalinizi gerçekleştirin."
              light
            />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.1}>
                <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-sm bg-gold-600 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-navy-950" />
                  </div>
                  <h3 className="font-heading-normal text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading-normal text-3xl font-bold text-navy-900 mb-4">
              Ücretsiz Danışmanlık Randevusu Alın
            </h2>
            <p className="text-slate mb-8 max-w-xl mx-auto">
              Uzman danışmanlarımızla ücretsiz görüşme yapın, size en uygun
              programı birlikte belirleyelim.
            </p>
            <Button href="/iletisim" size="lg">
              Randevu Al
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
