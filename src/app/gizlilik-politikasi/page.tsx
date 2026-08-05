import type { Metadata } from "next";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteConfig } from "@/lib/siteConfig";
import { contactInfo } from "@/data/contact";

export const metadata: Metadata = {
  title: "Gizlilik Politikası, Kullanım Koşulları & KVKK",
  description:
    "Zreducation gizlilik politikası, web sitesi kullanım koşulları ve KVKK aydınlatma metni.",
};

export default function GizlilikPage() {
  return (
    <PageLayout>
      <PageHero title="Yasal Bilgilendirme" subtitle="Gizlilik & KVKK">
        <p>
          Gizlilik politikamız, kullanım koşullarımız ve KVKK aydınlatma
          metnimiz aşağıda yer almaktadır.
        </p>
      </PageHero>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <AnimatedSection>
            <div id="gizlilik" className="scroll-mt-28">
              <SectionTitle
                subtitle="Bölüm 1"
                title="Gizlilik Politikası"
                align="left"
              />
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  {siteConfig.name} ({siteConfig.url}), web sitemiz ve
                  formlarımız üzerinden paylaştığınız ad soyad, telefon,
                  e-posta, şehir ve program tercihi gibi kişisel bilgileri
                  yalnızca sizinle iletişime geçmek, talep ettiğiniz eğitim
                  hizmetini sunmak ve size özel program önerisi hazırlamak
                  amacıyla kullanır.
                </p>
                <p>
                  Bilgileriniz üçüncü taraflarla pazarlama amacıyla
                  paylaşılmaz. Verileriniz, yalnızca hizmet sağlayıcılarımız
                  (e-posta/SMS altyapısı gibi) aracılığıyla ve yasal
                  zorunluluklar kapsamında işlenebilir.
                </p>
                <p>
                  Sitemizde kullanılan çerezler, gezinme deneyiminizi
                  iyileştirmek amacıyla kullanılır. Tarayıcı ayarlarınızdan
                  çerez tercihlerinizi yönetebilirsiniz.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div id="kullanim-kosullari" className="scroll-mt-28">
              <SectionTitle
                subtitle="Bölüm 2"
                title="Kullanım Koşulları"
                align="left"
              />
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Bu web sitesini kullanarak, sitede yer alan içeriklerin
                  bilgilendirme amaçlı olduğunu ve eğitim programı, fiyat ve
                  kampanya detaylarının güncel teklif için doğrulanması
                  gerektiğini kabul edersiniz.
                </p>
                <p>
                  Sitedeki tüm marka, logo ve içerikler {siteConfig.name}
                  &apos;a aittir; izinsiz kopyalanamaz veya ticari amaçla
                  kullanılamaz.
                </p>
                <p>
                  Seviye tespit sınavı, kayıt formu ve randevu formları
                  üzerinden paylaşılan bilgilerin doğruluğu kullanıcı
                  beyanına dayanır.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div id="kvkk" className="scroll-mt-28">
              <SectionTitle
                subtitle="Bölüm 3"
                title="KVKK Aydınlatma Metni"
                align="left"
              />
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;)
                  kapsamında, veri sorumlusu sıfatıyla {siteConfig.name}
                  , web sitesi ve formlar aracılığıyla topladığı kişisel
                  verilerinizi eğitim danışmanlığı hizmetlerinin
                  yürütülmesi, iletişim ve talep/şikayet yönetimi amaçlarıyla
                  işler.
                </p>
                <p>
                  KVKK madde 11 kapsamındaki haklarınız (bilgi talep etme,
                  düzeltme, silme, itiraz vb.) için{" "}
                  <a
                    href={contactInfo.email.href}
                    className="text-gold-700 hover:text-navy-900 underline"
                  >
                    {contactInfo.email.display}
                  </a>{" "}
                  adresinden bizimle iletişime geçebilirsiniz.
                </p>
                <p>
                  Verileriniz, ilgili mevzuatta belirtilen süreler
                  boyunca veya işleme amacının gerektirdiği süre kadar
                  saklanır; talebiniz üzerine silinir veya anonim hale
                  getirilir.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
