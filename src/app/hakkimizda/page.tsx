import type { Metadata } from "next";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Zreducation hakkında bilgi edinin. 15 yıllık deneyim, vizyon, misyon ve uzman ekibimiz.",
};

const team = [
  { name: "Dr. Ayşe Yıldız", role: "Kurucu & Genel Müdür", specialty: "Eğitim Yönetimi" },
  { name: "James Mitchell", role: "Akademik Direktör", specialty: "İngilizce Eğitimi" },
  { name: "Mehmet Arslan", role: "Yurt Dışı Eğitim Müdürü", specialty: "Üniversite Danışmanlığı" },
  { name: "Sarah Johnson", role: "IELTS Koordinatörü", specialty: "Sınav Hazırlık" },
  { name: "Elif Korkmaz", role: "Online Eğitim Sorumlusu", specialty: "Dijital Öğrenme" },
  { name: "Can Demirtaş", role: "Öğrenci İşleri Müdürü", specialty: "Öğrenci Destek" },
];

const values = [
  {
    title: "Misyonumuz",
    description:
      "Her öğrencinin eğitim potansiyelini en üst düzeye çıkarmak, yurt dışı eğitim hayallerini gerçekleştirmek ve İngilizce yeterliliğini uluslararası standartlarda sağlamak.",
  },
  {
    title: "Vizyonumuz",
    description:
      "Türkiye'nin ve bölgenin en güvenilir, yenilikçi ve sonuç odaklı eğitim danışmanlık kurumu olmak; global eğitim standartlarını yerel erişilebilirlikle buluşturmak.",
  },
  {
    title: "Değerlerimiz",
    description:
      "Şeffaflık, güvenilirlik, öğrenci odaklılık, sürekli gelişim ve uluslararası kalite standartlarına bağlılık temel değerlerimizdir.",
  },
];

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
            />

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="bg-white p-8 h-full border border-border">
                  <div className="w-8 h-0.5 bg-gold-600 mb-5" />
                  <h3 className="font-heading-normal text-xl font-bold text-navy-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="ekip" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
              subtitle="Ekibimiz"
              title="Uzman Kadromuz"
              description="Alanında deneyimli, uluslararası sertifikalı eğitmen ve danışmanlarımızla hizmetinizdeyiz."
            />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <div className="bg-surface p-8 border border-border hover:border-gold-600 transition-colors text-center">
                  <span className="label-caps text-gold-600 block mb-3">
                    {member.role}
                  </span>
                  <h3 className="font-heading-normal text-base font-bold text-navy-900">
                    {member.name}
                  </h3>
                  <p className="text-slate-light text-sm mt-2">{member.specialty}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
