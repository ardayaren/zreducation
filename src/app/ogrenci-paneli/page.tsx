import type { Metadata } from "next";
import {
  ClipboardList,
  CalendarCheck,
  FileText,
  Timer,
  GraduationCap,
  LineChart,
  BookOpenCheck,
  UserCheck,
} from "lucide-react";
import PageLayout, { PageHero } from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import NavySection from "@/components/ui/NavySection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Öğrenci Paneli & Ders Kayıtları",
  description:
    "Zreducation öğrenci paneli — ders kayıtlarınız, devamsızlık durumunuz, ödevleriniz, kursun bitiş süresi ve her 4 haftada bir hazırlanan ilerleme raporları. Eğitmenlerin her ders sonrası tuttuğu notları tek panelden görün.",
};

const features = [
  {
    icon: BookOpenCheck,
    title: "Ders Kayıtları & İlerleme",
    text: "Katıldığınız online/yüz yüze derslerin kayıtları ve ünite bazlı ilerlemeniz tek panelde.",
  },
  {
    icon: CalendarCheck,
    title: "Devamsızlık Takibi",
    text: "Devamsızlık durumunuzu anlık görün; 8–10 kişilik gruplarda herkes görünür olduğu için düzenli katılım doğal olarak teşvik edilir.",
  },
  {
    icon: ClipboardList,
    title: "Ödev & Görevler",
    text: "Eğitmenlerin size verdiği ödevler, teslim tarihleri ve kelime listeleri listelenir, teslimleriniz işaretlenir.",
  },
  {
    icon: Timer,
    title: "Kursun Bitişine Kalan Süre",
    text: "Kursunuzun kaç dersi kaldığı ve bitiş tarihi her an görünür; hedefinize kalan yol haritanız netleşir.",
  },
  {
    icon: LineChart,
    title: "4 Haftalık İlerleme Raporları",
    text: "Her 4 haftada bir eğitmeninizin hazırladığı, dört beceri (Speaking, Listening, Reading, Writing) bazlı gelişim raporunu görüntülersiniz.",
  },
  {
    icon: UserCheck,
    title: "Eğitmen Notları",
    text: "Eğitmenleriniz her ders sonrası performansınızla ilgili kısa notlar tutar; bu notlar raporlamanın temelini oluşturur.",
  },
];

export default function OgrenciPaneliPage() {
  return (
    <PageLayout>
      <PageHero title="Öğrenci Paneli" subtitle="Ders Kayıtları & Takip">
        <p>
          Öğrencilerimiz ders kayıtları, devamsızlık, ödevler ve kursun
          bitişine kalan süreyi öğrenci panelinden takip eder. Eğitmenlerimiz
          her ders sonrası not tutar, her 4 haftada bir kapsamlı ilerleme
          raporu hazırlanır.
        </p>
      </PageHero>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Panel Özellikleri"
            title="Tek Panelde Her Şey"
            description="Öğrenciler İngilizce konuşmayı öğrenirken gelişimlerini de net biçimde izler."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.05}>
                <div className="soft-card p-7 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center mb-5 shadow-md">
                    <f.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="font-heading-normal text-base font-bold text-navy-900 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">{f.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <div className="mt-12 soft-card p-8 md:p-10 bg-gradient-to-br from-gold-50/60 to-white flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-gold-600 shrink-0" />
                <div>
                  <h3 className="font-heading-normal text-base font-bold text-navy-900 mb-1">
                    Panele nasıl erişiyorum?
                  </h3>
                  <p className="text-sm text-slate max-w-2xl">
                    Kayıt olduğunuzda kişisel bağlantınız WhatsApp üzerinden
                    paylaşılır. Kurs sonuna kadar tüm ders kayıtlarınız ve
                    raporlarınız tek adresten erişilebilir olur.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Button href="/iletisim">Kayıt Ol</Button>
                <Button href="/seviye-tespit" variant="outline">
                  Seviye Tespit
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <NavySection>
        <SectionTitle
          subtitle="Öğretmen Notları"
          title="Her Ders Sonrası Not, 4 Haftada Rapor"
          description="Öğretmenlerimiz her ders sonrası öğrenci performansına dair kısa notlar kaydeder. Bu notlar, her 4 haftada bir hazırlanan detaylı ilerleme raporunun temelini oluşturur."
          light
        />
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="navy-card-glass p-7">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-gold-400" />
                <h3 className="text-white font-semibold text-sm">Ders Notu Örneği</h3>
              </div>
              <span className="text-[10px] text-white/40 uppercase tracking-wide block mb-2">
                12. Ders · Speaking Odaklı
              </span>
              <p className="text-white/70 text-sm leading-relaxed">
                &quot;Defne bugün role-play etkinliğinde çok aktif; present
                perfect kullanımında gelişim var. Ders sonunda 2 kelime
                (gürültülü, yol tarif etmek) üzerinde pratik yapılması önerilir.&quot;
              </p>
            </div>
            <div className="navy-card-glass p-7">
              <div className="flex items-center gap-3 mb-4">
                <LineChart className="w-5 h-5 text-gold-400" />
                <h3 className="text-white font-semibold text-sm">4 Haftalık Rapor Kapsamı</h3>
              </div>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  Speaking / Listening / Reading / Writing puanları
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  Devamsızlık ve katılım durumu
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  Ödev tamamlama oranı
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  Kursun bitişine kalan süre
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </NavySection>
    </PageLayout>
  );
}
