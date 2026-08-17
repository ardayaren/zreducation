import {
  Globe,
  GraduationCap,
  Monitor,
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
    id: "ingilizce",
    icon: GraduationCap,
    title: "İngilizce Eğitimi — Konuşma Odaklı",
    description:
      "A1'den C2'ye, konuşma pratiğini merkeze alan CEFR uyumlu İngilizce eğitim programları. 3 ayda, 90 derste 0'dan akıcı konuşmaya.",
    detailIntro:
      "Macmillan Language Hub müfredatı ve konuşma odaklı ders planlarımızla dört temel beceri (Speaking, Listening, Reading, Writing) dengeli gelişir; ancak önceliğimiz her öğrencinin sınıfta aktif olarak konuşması. Her seviye sonunda resmi seviye tespit sınavı uygulanır.",
    details: [
      "Yeni başlayanlardan ileri düzeye kadar her öğrenci, ücretsiz Language Hub placement testi ile doğru sınıfa yerleştirilir. Böylece zaman kaybı olmadan hedef seviyeye ulaşırsınız.",
      "Dersler konuşma odaklıdır: gerçek hayat senaryoları, rol oyunları ve proje tabanlı ödevlerle kalıcı öğrenme sağlanır. Haftalık ilerleme raporu ile gelişiminizi takip edersiniz.",
      "İş İngilizcesi, akademik yazım ve sınav hazırlık modülleri ana programa entegre edilebilir. Mezun öğrencilerimizin %78'i bir üst CEFR seviyesine 6 ay içinde geçmektedir.",
    ],
    features: [
      {
        title: "Konuşma Önceliği",
        text: "Her ders en az yarı yarıya konuşma pratiğine ayrılır; hedefimiz sınıfta susan öğrenci bırakmamak.",
      },
      {
        title: "Dört Beceri Dengesi",
        text: "Speaking, Listening, Reading ve Writing becerileri konuşma önceliğiyle birlikte dengeli işlenir.",
      },
      {
        title: "Sınav Hazırlık Modülleri",
        text: "IELTS, TOEFL ve YDS için ayrı strateji dersleri ve deneme sınavları sunulur.",
      },
      {
        title: "Birebir & Grup Seçenekleri",
        text: "Online ve yüz yüze programlarımızda birebir ders ya da maks. 8–10 kişilik grup dersi seçebilirsiniz.",
      },
    ],
    highlights: [
      { label: "Seviye", value: "A1 – C2", tone: "neutral" },
      { label: "Sınıf Mevcudu", value: "Maks 8–10 Kişi", tone: "neutral" },
      { label: "Program", value: "3 Ay / 90 Ders", tone: "gold" },
      { label: "6 Ay Seviye Geçişi", value: "%78", tone: "positive" },
    ],
    href: "/ingilizce-egitimi",
  },
  {
    id: "online",
    icon: Monitor,
    title: "Online Eğitim",
    description:
      "Canlı dersler, kayıt arşivi ve dijital platform ile Türkiye'nin ve dünyanın her yerinden aynı kalitede, konuşma odaklı eğitim.",
    detailIntro:
      "Zoom ve Teams üzerinden interaktif canlı dersler, 7/24 erişilebilir kayıt arşivi ve ödev takip paneli ile fiziksel sınıf deneyimini eve taşıyoruz. Birebir ve grup (maks. 8–10 kişi) seçenekleri ana başlık altında sunulur.",
    details: [
      "Birebir Ders: Tamamen size özel program, eğitmeninizle esnek saatlerde, hedefinize göre kişiselleştirilmiş içerik.",
      "Grup Dersi (Maks 8–10 Kişi): Sosyal ve ekonomik avantajlı, seviyesi eşleştirilmiş küçük gruplarda konuşma pratiği ağırlıklı dersler.",
      "Öğrenme platformumuzda haftalık ödevler, kelime listeleri ve seviye testleri dijital ortamda takip edilir. Eğitmen geri bildirimi 48 saat içinde paylaşılır. Ders saatleri Türkiye saati ve Avrupa saatine göre planlanabilir.",
    ],
    features: [
      {
        title: "Birebir Ders",
        text: "Bireysel program, esnek saat ve tamamen size özel konuşma ağırlıklı müfredat.",
      },
      {
        title: "Grup Dersi (Maks 8–10 Kişi)",
        text: "Sosyal öğrenme deneyimi, ekonomik avantaj ve seviyesi eşleştirilmiş küçük sınıflar.",
      },
      {
        title: "Kayıt Arşivi",
        text: "Tüm dersler kaydedilir; istediğiniz zaman tekrar izleyerek konuları pekiştirebilirsiniz.",
      },
      {
        title: "Dijital Öğrenme Paneli",
        text: "Ödev teslimi, seviye testleri ve ilerleme grafikleri tek panelden yönetilir.",
      },
    ],
    highlights: [
      { label: "Platform", value: "Zoom / Teams", tone: "neutral" },
      { label: "Erişim", value: "7/24 Arşiv & Destek", tone: "positive" },
      { label: "Ders Şekli", value: "Birebir / Grup", tone: "neutral" },
    ],
    href: "/online-egitim",
  },
  {
    id: "yuz-yuze",
    icon: BookOpen,
    title: "Yüz Yüze Eğitim",
    description:
      "Denizli Kınıklı merkezimizde akıllı sınıflar, kütüphane ve konuşma alanlarıyla tam donanımlı, birebir ve grup ders seçenekli eğitim.",
    detailIntro:
      "Denizli merkezimizde akıllı tahta, multimedya laboratuvarı ve sessiz çalışma alanlarıyla odaklanmış bir öğrenme ortamı sunuyoruz. Birebir ve grup dersleri (maks. 8–10 kişi) aynı kampüste, ana başlık altında yürütülür.",
    details: [
      "Birebir Ders: Eğitmeninizle tamamen size özel oturumlar, hızlı ilerleme ve anında geri bildirim.",
      "Grup Dersi (Maks 8–10 Kişi): Homojen seviye grupları, sosyal öğrenme ve haftalık konuşma kulübü katılımı ile ekonomik avantaj.",
      "Sınıflarımız gün ışığı alan, ergonomik oturma düzenine sahiptir. Her öğrenci için dijital materyal erişimi ve ücretsiz çay–kahve ikramı sağlanır. Kurumsal firmalar için özel sınıf ve şirket içi eğitim paketleri de mevcuttur.",
    ],
    features: [
      {
        title: "Birebir Ders",
        text: "Eğitmeninizle tamamen size özel oturumlar; her 4 derste bir bireysel gelişim görüşmesi.",
      },
      {
        title: "Grup Dersi (Maks 8–10 Kişi)",
        text: "Homojen seviye grupları, sosyal öğrenme ve %35'e varan maliyet avantajı.",
      },
      {
        title: "Akıllı Sınıf Teknolojisi",
        text: "İnteraktif tahta, kablosuz sunum ve dijital ödev sistemiyle modern ders ortamı.",
      },
      {
        title: "Konuşma Kulübü",
        text: "Haftalık ücretsiz kulüp oturumlarında native speaker eşliğinde pratik yapılır.",
      },
    ],
    highlights: [
      { label: "Konum", value: "Denizli Merkez", tone: "neutral" },
      { label: "Sınıf Mevcudu", value: "Maks 8–10 Kişi", tone: "neutral" },
      { label: "Erişim", value: "7/24 WhatsApp", tone: "gold" },
    ],
    href: "/egitimlerimiz#yuz-yuze",
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
  {
    id: "ogrenci-paneli",
    icon: Award,
    title: "Öğrenci Paneli & Ders Kayıtları",
    description:
      "Ders kayıtları, devamsızlık, ödevler, kursun bitişine kalan süre ve her 4 haftada bir hazırlanan ilerleme raporları tek panelde.",
    detailIntro:
      "Eğitmenlerimiz her ders sonrası öğrencinin performansına dair not tutar. Bu notlar, dört beceri (Speaking, Listening, Reading, Writing) bazında her 4 haftada bir hazırlanan ilerleme raporunun temelini oluşturur. Öğrenciler tüm süreci öğrenci panelinden izler.",
    details: [
      "Öğrenci panelinde ders kayıtları, devamsızlık durumu, verilen ödevler ve kursun bitişine kalan süre anlık görünür.",
      "Eğitmen notları her ders sonrası kaydedilir; her 4 haftada bir kapsamlı ilerleme raporu hazırlanır.",
      "Devamsızlık takibi sayesinde düzenli katılım teşvik edilir; 8–10 kişilik gruplarda her öğrenci düzenli konuşma fırsatı yakalar.",
    ],
    features: [
      {
        title: "Ders Kayıtları",
        text: "Katıldığınız ve izleyebileceğiniz tüm dersler tek panelde.",
      },
      {
        title: "Devamsızlık Takibi",
        text: "Devamsızlık durumunuzu anlık görün, düzenli katılım sağlayın.",
      },
      {
        title: "Ödev & Raporlar",
        text: "Ödevleriniz, teslimleriniz ve 4 haftalık gelişim raporlarınız.",
      },
      {
        title: "Kalan Süre",
        text: "Kursun bitişine kalan ders ve süre her an görünür.",
      },
    ],
    highlights: [
      { label: "Kapsam", value: "Tüm Programlar", tone: "neutral" },
      { label: "Rapor", value: "4 Haftada Bir", tone: "gold" },
      { label: "Erişim", value: "7/24", tone: "positive" },
    ],
    href: "/ogrenci-paneli",
  },
  {
    id: "yurt-disi",
    icon: Globe,
    title: "Yurt Dışı Eğitim Danışmanlığı",
    description:
      "İtalya ve Almanya üniversitelerinde eğitim almak isteyenlere Denizli merkezli danışmanlık. Öncelik her zaman doğru eğitim planı.",
    detailIntro:
      "İtalya ve Almanya odaklı danışmanlığımızla önce doğru eğitim planını ve İngilizce/Almanca seviyenizi netleştiriyor, ardından lisans, yüksek lisans ve pathway başvurularınızı Denizli merkezimizden yönetiyoruz. Eğitim her zaman ön plandadır; dil hazırlığınız konuşma odaklı programlarımızla tamamlanır.",
    details: [
      "İlk görüşmede akademik geçmişiniz, eğitim hedefleriniz ve dil seviyeniz değerlendirilir. İtalya veya Almanya için kişisel eğitim ve program listesi hazırlanır.",
      "Motivasyon mektubu, CV ve referans belgeleriniz ülke formatına uygun hazırlanır. Uni-Assist, Uni-Italia ve universitaly.it süreçleri takip edilir.",
      "Eğitim başvurunuzun en kritik bileşeni İngilizce seviyenizdir; bu yüzden konuşma odaklı İngilizce/Almanca hazırlık programlarımız danışmanlığın merkezine yerleştirilir.",
    ],
    features: [
      {
        title: "Eğitim Planı & Dil Hazırlığı",
        text: "Hedef ülkeye göre gereken dil seviyesi belirlenir, İngilizce/Almanca eğitim programınız planlanır.",
      },
      {
        title: "Üniversite & Bölüm Danışmanlığı",
        text: "QS sıralaması, bölüm uygunluğu ve mezuniyet sonrası imkânlara göre kişisel shortlist oluşturulur.",
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
      { label: "Ülke", value: "İtalya & Almanya", tone: "neutral" },
      { label: "Öncelik", value: "Eğitim & Dil", tone: "gold" },
      { label: "İlk Tercih Yerleşme", value: "%87", tone: "positive" },
    ],
    href: "/yurt-disi",
  },
];

export const stats: StatItem[] = [
  { value: "15+", label: "Yıllık Deneyim", tone: "gold" },
  { value: "5000+", label: "Mezun Öğrenci", tone: "positive" },
  { value: "3 Ay", label: "90 Derste Akıcı Konuşma", tone: "positive" },
  { value: "%94", label: "Memnuniyet Oranı", tone: "positive" },
];

export const performanceStats: StatItem[] = [
  { value: "%94", label: "Memnuniyet Oranı", tone: "positive", hint: "Sektör ort. %82" },
  { value: "%78", label: "6 Ay Seviye Geçişi", tone: "positive", hint: "İngilizce programı" },
  { value: "%87", label: "İlk Tercih Yerleşme", tone: "positive", hint: "Yurt dışı başvuru" },
  { value: "%6", label: "Vize Red Oranı", tone: "negative", hint: "Sektör ort. %14" },
];

export const coreSkills = [
  {
    key: "speaking",
    title: "Speaking",
    titleTr: "Konuşma",
    description:
      "Her dersin merkezinde konuşma pratiği vardır. Hedefimiz sınıfta susan öğrenci bırakmamak.",
    priority: true,
  },
  {
    key: "listening",
    title: "Listening",
    titleTr: "Dinleme",
    description:
      "Gerçek konuşma kayıtları ve podcast tabanlı materyallerle doğal İngilizceyi anlama becerisi gelişir.",
  },
  {
    key: "reading",
    title: "Reading",
    titleTr: "Okuma",
    description:
      "Seviyeye uygun metinlerle kelime hazinesi ve okuduğunu anlama hızı artırılır.",
  },
  {
    key: "writing",
    title: "Writing",
    titleTr: "Yazma",
    description:
      "Günlük yazışmadan akademik metne, yapılandırılmış yazma çalışmalarıyla ifade gücü kazandırılır.",
  },
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
