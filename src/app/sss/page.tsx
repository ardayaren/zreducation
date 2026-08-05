import type { Metadata } from "next";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { ExpandableList } from "@/components/ui/ExpandablePanel";
import { faqCategories } from "@/data/faq";
import { contactInfo } from "@/data/contact";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description:
    "Zreducation eğitim programları, seviye tespit sınavı, kayıt ve ödeme, online/yüz yüze dersler ile yurt dışı danışmanlığı hakkında sıkça sorulan sorular.",
};

const variants = ["surface", "light", "gold", "navy"] as const;

export default function SssPage() {
  return (
    <PageLayout>
      <PageHero title="Sıkça Sorulan Sorular" subtitle="SSS">
        <p>
          Eğitim programlarımız, seviye tespit sınavı, kayıt süreci ve daha
          fazlası hakkında en çok sorulan sorular ve cevapları.
        </p>
      </PageHero>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {faqCategories.map((cat, catIndex) => (
            <div key={cat.category}>
              <SectionTitle
                subtitle={`Kategori ${catIndex + 1}`}
                title={cat.category}
                align="left"
              />
              <AnimatedSection>
                <ExpandableList
                  items={cat.items.map((item) => ({
                    title: item.question,
                    summary:
                      item.answer.slice(0, 90) +
                      (item.answer.length > 90 ? "…" : ""),
                    content: item.answer,
                  }))}
                  variant={variants[catIndex % variants.length]}
                  defaultOpenIndex={catIndex === 0 ? 0 : -1}
                />
              </AnimatedSection>
            </div>
          ))}

          <AnimatedSection>
            <div className="soft-card p-8 md:p-10 text-center">
              <h3 className="font-heading-normal text-lg font-bold text-navy-900 mb-2">
                Sorunuzun cevabını bulamadınız mı?
              </h3>
              <p className="text-sm text-slate mb-6 max-w-md mx-auto">
                WhatsApp destek hattımız 7/24 açık. İstediğiniz an yazın,
                danışmanlarımız size yardımcı olsun.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button href={contactInfo.whatsapp.href} size="lg">
                  WhatsApp&apos;tan Sorun
                </Button>
                <Button href="/iletisim" variant="outline" size="lg">
                  İletişim Formu
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
