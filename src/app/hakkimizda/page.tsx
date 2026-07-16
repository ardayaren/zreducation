import type { Metadata } from "next";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { ExpandableList } from "@/components/ui/ExpandablePanel";
import {
  hakkimizdaValueDetails,
  hakkimizdaTeamDetails,
} from "@/data/expandableContent";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Zreducation hakkında bilgi edinin. 15 yıllık deneyim, vizyon, misyon ve uzman ekibimiz.",
};

export default function HakkimizdaPage() {
  return (
    <PageLayout>
      <PageHero title="Hakkımızda" subtitle="Kurumsal">
        <p>
          2009&apos;dan bu yana eğitimde mükemmelliği hedefleyen, binlerce
          öğrencinin hayallerine ulaşmasına yardımcı olan güvenilir eğitim
          partneriniz.
        </p>
      </PageHero>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionTitle
                subtitle="Hikayemiz"
                title="15 Yıllık Eğitim Yolculuğu"
                align="left"
              />
              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  Zreducation, 2009 yılında İstanbul&apos;da küçük bir dil
                  okulu olarak kuruldu. Kurucularımızın eğitimde kalite ve
                  güvenilirlik vizyonu, kısa sürede binlerce öğrencinin
                  tercih ettiği bir kuruma dönüşmemizi sağladı.
                </p>
                <p>
                  Bugün 50&apos;den fazla uzman eğitmen ve danışmandan oluşan
                  kadromuzla, yurt dışı öğrenci gönderimi, A1&apos;den C2&apos;ye
                  kadar İngilizce eğitimi, online ve yüz yüze grup dersleri
                  sunuyoruz.
                </p>
                <p>
                  30&apos;dan fazla partner üniversitemiz, CEFR uyumlu
                  müfredatımız ve %94 öğrenci memnuniyet oranımızla
                  Türkiye&apos;nin önde gelen eğitim danışmanlık kurumlarından
                  biri olmaktan gurur duyuyoruz.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2009", label: "Kuruluş Yılı" },
                  { value: "5000+", label: "Mezun Öğrenci" },
                  { value: "50+", label: "Uzman Kadro" },
                  { value: "30+", label: "Partner Üniversite" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-surface p-8 text-center border border-border"
                  >
                    <div className="text-3xl font-bold text-gold-500 font-heading-normal">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="vizyon" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
              subtitle="Vizyon & Misyon"
              title="Neye İnanıyoruz?"
              description="Kurumsal değerlerimiz ve hedeflerimiz. Detaylar için başlıklara tıklayın."
            />

          <AnimatedSection>
            <ExpandableList
              items={hakkimizdaValueDetails}
              variant="light"
              defaultOpenIndex={0}
            />
          </AnimatedSection>
        </div>
      </section>

      <section id="ekip" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
              subtitle="Ekibimiz"
              title="Uzman Kadromuz"
              description="Alanında deneyimli, uluslararası sertifikalı eğitmen ve danışmanlarımızla hizmetinizdeyiz."
            />

          <AnimatedSection>
            <ExpandableList
              items={hakkimizdaTeamDetails}
              variant="surface"
              defaultOpenIndex={0}
            />
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
