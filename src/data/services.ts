import {
  Globe,
  GraduationCap,
  Monitor,
  Users,
  BookOpen,
  Award,
  type LucideIcon,
} from "lucide-react";
import type { StatItem } from "@/lib/statTone";

export interface ServiceFeature {
  title: string;
  text: string;
}

export interface ServiceHighlight {
  label: string;
  value: string;
  tone?: StatItem["tone"];
}

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  detailIntro: string;
  details: string[];
  features: ServiceFeature[];
  highlights: ServiceHighlight[];
  href: string;
}

export const services: Service[] = [
  {
    id: "yurt-disi",
    icon: Globe,
    title: "Yurt Dışı Öğrenci Gönderimi",
    description:
      "Amerika, İngiltere, Kanada, Avustralya ve Avrupa'nın önde gelen üniversitelerine öğrenci yerleştirme danışmanlığı.",
    detailIntro:
      "Lisans, yüksek lisans ve dil okulu başvurularınızı baştan sona yönetiyoruz. Her öğrenciye özel yol haritası çıkarıyor, bütçe ve akademik hedeflere uygun ülke–üniversite eşleştirmesi yapıyoruz.",
    details: [
      "İlk görüşmede akademik geçmişiniz, kariyer hedefleriniz ve finansal planınız değerlendirilir. Ardından size özel bir ülke ve program listesi hazırlanır.",
      "Motivasyon mektubu, CV, referans ve portfolyo gibi başvuru belgeleriniz native danışman kontrolünden geçer. Her dosya üniversite formatına göre düzenlenir.",
      "Kabul mektubu sonrası vize randevusu, konaklama seçimi ve varış öncesi oryantasyon dahil tüm süreçte yanınızdayız. Öğrencilerimizin %87'si ilk tercihlerine yerleşmektedir.",
    ],
    features: [
      {
        title: "Üniversite & Bölüm Danışmanlığı",
        text: "QS sıralaması, bölüm uygunluğu ve mezuniyet sonrası iş imkânlarına göre kişisel shortlist oluşturulur.",
      },
      {
        title: "Başvuru Dosyası Hazırlığı",
        text: "Essay, SOP ve referans mektupları üniversite beklentilerine göre yazılır ve çok aşamalı kontrol edilir.",
      },
      {
        title: "Vize & Evrak Yönetimi",
        text: "Finansal belgeler, sağlık sigortası ve mülakat provası dahil eksiksiz vize dosyası hazırlanır.",
      },
      {
        title: "Yerleşim & Konaklama",
        text: "Yurt, homestay veya paylaşımlı daire seçenekleri sunulur; havaalanı karşılama organize edilir.",
      },
    ],
    highlights: [
      { label: "Partner Üniversite", value: "30+", tone: "neutral" },
      { label: "Ülke", value: "12", tone: "neutral" },
      { label: "İlk Tercih Yerleşme", value: "%87", tone: "positive" },
      { label: "Danışmanlık", value: "Ücretsiz", tone: "gold" },
    ],
    href: "/yurt-disi",
  },
  {
    id: "ingilizce",
    icon: GraduationCap,
    title: "İngilizce Eğitimi",
    description:
      "A1'den C2'ye CEFR uyumlu, ölçülebilir sonuç odaklı İngilizce eğitim programları.",
    detailIntro:
      "Macmillan Language Hub müfredatı ve uluslararası standartlara dayalı ders planlarımızla dört beceri (okuma, yazma, dinleme, konuşma) dengeli gelişir. Her seviye sonunda resmi seviye tespit sınavı uygulanır.",
    details: [
      "Yeni başlayanlardan ileri düzeye kadar her öğrenci, ücretsiz Language Hub placement testi ile doğru sınıfa yerleştirilir. Böylece zaman kaybı olmadan hedef seviyeye ulaşırsınız.",
      "Dersler iletişim odaklıdır: gerçek hayat senaryoları, rol oyunları ve proje tabanlı ödevlerle kalıcı öğrenme sağlanır. Haftalık ilerleme raporu ile gelişiminizi takip edersiniz.",
      "İş İngilizcesi, akademik yazım ve sınav hazırlık modülleri ana programa entegre edilebilir. Mezun öğrencilerimizin %78'i bir üst CEFR seviyesine 6 ay içinde geçmektedir.",
    ],
    features: [
      {
        title: "CEFR Uyumlu Müfredat",
        text: "A1–C2 tüm seviyelerde uluslararası geçerliliği olan, ölçülebilir kazanımlara dayalı ders içerikleri.",
      },
      {
        title: "Dört Beceri Dengesi",
        text: "Her derste konuşma, dinleme, okuma ve yazma becerileri eşit ağırlıkta çalışılır.",
      },
      {
        title: "Sınav Hazırlık Modülleri",
        text: "IELTS, TOEFL ve YDS için ayrı strateji dersleri ve deneme sınavları sunulur.",
      },
      {
        title: "Kişisel Öğrenme Planı",
        text: "Zayıf alanlarınıza göre ek materyal ve birebir destek oturumları planlanır.",
      },
    ],
    highlights: [
      { label: "Seviye", value: "A1 – C2", tone: "neutral" },
      { label: "Sınıf Mevcudu", value: "Max 8", tone: "neutral" },
      { label: "6 Ay Seviye Geçişi", value: "%78", tone: "positive" },
      { label: "Ders Süresi", value: "48–96 Saat", tone: "gold" },
    ],
    href: "/ingilizce-egitimi",
  },
  {
    id: "online",
    icon: Monitor,
    title: "Online Eğitim",
    description:
      "Canlı dersler, kayıt arşivi ve dijital platform ile İstanbul dışından da aynı kalitede eğitim.",
    detailIntro:
      "Zoom ve Teams üzerinden interaktif canlı dersler, 7/24 erişilebilir kayıt arşivi ve ödev takip paneli ile fiziksel sınıf deneyimini eve taşıyoruz. Türkiye'nin her yerinden ve yurt dışından katılım mümkündür.",
    details: [
      "Canlı derslerde breakout room aktiviteleri, dijital tahta ve anlık quiz uygulamalarıyla aktif katılım sağlanır. Ders kaçıran öğrenciler kayıtlardan telafi edebilir.",
      "Öğrenme platformumuzda haftalık ödevler, kelime listeleri ve seviye testleri dijital ortamda takip edilir. Eğitmen geri bildirimi 48 saat içinde paylaşılır.",
      "Birebir ve küçük grup (4 kişi) online seçenekleri yoğun çalışan profesyoneller ve yurt dışındaki öğrenciler için idealdir. Ders saatleri Türkiye saati ve Avrupa saatine göre planlanabilir.",
    ],
    features: [
      {
        title: "Canlı İnteraktif Dersler",
        text: "Gerçek zamanlı konuşma pratiği, ekran paylaşımı ve grup çalışmalarıyla yüz yüze ders kalitesi.",
      },
      {
        title: "Kayıt Arşivi",
        text: "Tüm dersler kaydedilir; istediğiniz zaman tekrar izleyerek konuları pekiştirebilirsiniz.",
      },
      {
        title: "Dijital Öğrenme Paneli",
        text: "Ödev teslimi, seviye testleri ve ilerleme grafikleri tek panelden yönetilir.",
      },
      {
        title: "Esnek Program",
        text: "Sabah, akşam ve hafta sonu seansları; yoğun tempoya uygun ders planlaması.",
      },
    ],
    highlights: [
      { label: "Platform", value: "Zoom / Teams", tone: "neutral" },
      { label: "Erişim", value: "7/24 Arşiv", tone: "positive" },
      { label: "Grup", value: "Birebir / 4 Kişi", tone: "neutral" },
    ],
    href: "/hizmetler#online",
  },
  {
    id: "grup",
    icon: Users,
    title: "Grup Dersleri",
    description:
      "Maksimum 8 kişilik sınıflarda, sosyal ve ekonomik öğrenme deneyimi.",
    detailIntro:
      "Grup derslerimiz konuşma pratiğini hızlandırır ve motivasyonu yüksek tutar. Aynı seviyedeki öğrencilerle eşleştirilir, haftalık konuşma kulüplerine ücretsiz katılım hakkı kazanırsınız.",
    details: [
      "Sınıflar placement test sonuçlarına göre oluşturulur; farklı seviyelerden öğrenci aynı gruba alınmaz. Bu sayede her ders verimli ve akıcı ilerler.",
      "Grup projeleri, sunumlar ve tartışma oturumlarıyla pasif dinlemeden aktif üretime geçilir. Öğrenciler birbirinden öğrenerek özgüven kazanır.",
      "Yoğun iş temposundaki katılımcılar için haftada 3 veya 4 gün seçenekleri sunulur. Grup dersleri birebir eğitime göre %35'e varan maliyet avantajı sağlar.",
    ],
    features: [
      {
        title: "Küçük Sınıf Ortamı",
        text: "Maksimum 8 kişiyle her öğrenci söz hakkı bulur; eğitmen bireysel geri bildirim verir.",
      },
      {
        title: "Seviye Eşleştirmesi",
        text: "Language Hub testi ve sözlü değerlendirme ile homojen gruplar oluşturulur.",
      },
      {
        title: "Konuşma Kulübü",
        text: "Haftalık ücretsiz kulüp oturumlarında native speaker eşliğinde pratik yapılır.",
      },
      {
        title: "Sosyal Öğrenme",
        text: "Grup projeleri ve rol oyunlarıyla gerçek iletişim ortamı simüle edilir.",
      },
    ],
    highlights: [
      { label: "Sınıf", value: "Max 8 Kişi", tone: "neutral" },
      { label: "Program", value: "3–4 Gün / Hafta", tone: "neutral" },
      { label: "Maliyet Avantajı", value: "%35", tone: "positive" },
    ],
    href: "/hizmetler#grup",
  },
  {
    id: "yuz-yuze",
    icon: BookOpen,
    title: "Yüz Yüze Eğitim",
    description:
      "İstanbul Levent merkezimizde akıllı sınıflar, kütüphane ve konuşma alanlarıyla tam donanımlı eğitim.",
    detailIntro:
      "Beşiktaş Levent'teki merkezimizde akıllı tahta, multimedya laboratuvarı ve sessiz çalışma alanlarıyla odaklanmış bir öğrenme ortamı sunuyoruz. Birebir ve grup dersleri aynı kampüste yürütülür.",
    details: [
      "Sınıflarımız gün ışığı alan, ergonomik oturma düzenine sahip ve en fazla 8 kişiliktir. Her öğrenci için dijital materyal erişimi ve ücretsiz çay–kahve ikramı sağlanır.",
      "Haftalık konuşma atölyeleri, film geceleri ve debate kulübü gibi sosyal aktivitelerle İngilizceyi sınıf dışında da yaşarsınız. Kütüphanemizde CEFR seviyesine göre kitap ve kaynak önerileri sunulur.",
      "Seviye tamamlama sertifikası, devam oranı ve sınav sonuçlarına göre verilir. Kurumsal firmalar için özel sınıf ve şirket içi eğitim paketleri de mevcuttur.",
    ],
    features: [
      {
        title: "Merkez Lokasyon",
        text: "Levent metro ve otobüs hatlarına 5 dakika yürüme mesafesinde, ulaşımı kolay kampüs.",
      },
      {
        title: "Akıllı Sınıf Teknolojisi",
        text: "İnteraktif tahta, kablosuz sunum ve dijital ödev sistemiyle modern ders ortamı.",
      },
      {
        title: "Birebir Geri Bildirim",
        text: "Her 4 derste bir bireysel gelişim görüşmesi ve yazılı performans raporu.",
      },
      {
        title: "Sertifika & Devam Takibi",
        text: "CEFR uyumlu bitirme sertifikası ve dijital devam çizelgesi ile şeffaf süreç.",
      },
    ],
    highlights: [
      { label: "Konum", value: "Levent, İstanbul", tone: "neutral" },
      { label: "Çalışma Alanı", value: "Kütüphane & Lab", tone: "positive" },
      { label: "Saat", value: "Pzt–Cmt 09–19", tone: "gold" },
    ],
    href: "/hizmetler#yuz-yuze",
  },
  {
    id: "sertifika",
    icon: Award,
    title: "Sınav Hazırlık & Sertifika",
    description:
      "IELTS, TOEFL, YDS ve Cambridge sınavlarına yönelik yoğunlaştırılmış hazırlık programları.",
    detailIntro:
      "Hedef puanınıza odaklı, deneme sınavı destekli hazırlık programlarımızda strateji, zaman yönetimi ve bölüm bazlı teknikler öğretilir. Son 3 yılda IELTS öğrencilerimizin ortalama band skoru 6.5'tir.",
    details: [
      "Program başında seviye analizi ve hedef puan belirleme görüşmesi yapılır. Ardından Reading, Writing, Listening ve Speaking için ayrı modüller planlanır.",
      "Her hafta deneme sınavı veya bölüm testi uygulanır; sonuçlar detaylı raporla paylaşılır. Writing ve Speaking için birebir koçluk seansları standart programa dahildir.",
      "Sınav tarihine 2 hafta kala yoğunlaştırılmış tekrar kampı ve stres yönetimi atölyesi sunulur. YDS programımız kamu personeline özel kelime ve okuma stratejileri içerir.",
    ],
    features: [
      {
        title: "Deneme Sınavları",
        text: "Gerçek sınav formatında haftalık denemeler ve ayrıntılı puan analizi.",
      },
      {
        title: "Birebir Koçluk",
        text: "Writing düzeltme ve Speaking mock interview ile kişisel geri bildirim.",
      },
      {
        title: "Strateji Atölyeleri",
        text: "Zaman yönetimi, tahmin teknikleri ve bölüm bazlı püf noktaları.",
      },
      {
        title: "Hedef Odaklı Plan",
        text: "Band 6, 7 veya YDS 80+ gibi somut hedeflere göre kişiselleştirilmiş müfredat.",
      },
    ],
    highlights: [
      { label: "IELTS Ort.", value: "Band 6.5", tone: "positive" },
      { label: "Program", value: "8–14 Hafta", tone: "neutral" },
      { label: "Format", value: "Online / Yüz Yüze", tone: "gold" },
    ],
    href: "/ingilizce-egitimi#sinav",
  },
];

export const stats: StatItem[] = [
  { value: "15+", label: "Yıllık Deneyim", tone: "gold" },
  { value: "5000+", label: "Mezun Öğrenci", tone: "positive" },
  { value: "30+", label: "Partner Üniversite", tone: "neutral" },
  { value: "%94", label: "Memnuniyet Oranı", tone: "positive" },
];

export const performanceStats: StatItem[] = [
  { value: "%94", label: "Memnuniyet Oranı", tone: "positive", hint: "Sektör ort. %82" },
  { value: "%87", label: "İlk Tercih Yerleşme", tone: "positive", hint: "Yurt dışı başvuru" },
  { value: "%78", label: "6 Ay Seviye Geçişi", tone: "positive", hint: "İngilizce programı" },
  { value: "%6", label: "Vize Red Oranı", tone: "negative", hint: "Sektör ort. %14" },
];

export const levels = [
  {
    code: "A1",
    name: "Başlangıç",
    description:
      "Tanışma, sayılar, günlük rutinler ve basit soru–cevap kalıpları. 48 saatlik program sonunda temel iletişim kurabilirsiniz.",
  },
  {
    code: "A2",
    name: "Temel",
    description:
      "Alışveriş, yol tarifi, geçmiş zaman ve kısa paragraflar. Seyahat ve günlük yaşamda bağımsız iletişim hedeflenir.",
  },
  {
    code: "B1",
    name: "Orta Alt",
    description:
      "İş görüşmeleri, deneyim anlatımı ve görüş bildirme. 72 saatlik program; orta düzey metinleri anlama ve yazma becerisi kazandırır.",
  },
  {
    code: "B2",
    name: "Orta Üst",
    description:
      "Akademik sunumlar, tartışma ve argüman geliştirme. Üniversite hazırlık atlama ve IELTS 6.0+ hedefleyenler için uygundur.",
  },
  {
    code: "C1",
    name: "İleri",
    description:
      "Akademik makale özeti, profesyonel rapor yazımı ve nüanslı ifade. Yüksek lisans başvuruları ve IELTS 7.0+ hedefi için tasarlandı.",
  },
  {
    code: "C2",
    name: "Uzman",
    description:
      "Anadile yakın akıcılık, edebi metin analizi ve akademik yayın dili. Doktora, hakemli dergi ve üst düzey iş İngilizcesi için.",
  },
];
