export interface OnlineCourse {
  id: string;
  title: string;
  subtitle: string;
  level: string;
  format: "Grup Dersi (Maks 8–10 Kişi)" | "Birebir Ders";
  duration: string;
  lessons: number;
  price: number;
  originalPrice: number;
  badge?: string;
  features: string[];
  popular?: boolean;
}

export const onlineCourses: OnlineCourse[] = [
  {
    id: "3-ayda-90-ders",
    title: "3 Ayda 90 Ders Yoğun Program",
    subtitle:
      "Sıfırdan akıcı konuşmaya — konuşma odaklı amiral programımız",
    level: "A1 → B1",
    format: "Grup Dersi (Maks 8–10 Kişi)",
    duration: "12 Hafta",
    lessons: 90,
    price: 14900,
    originalPrice: 19900,
    badge: "En Popüler",
    popular: true,
    features: [
      "90 canlı ders + kayıt arşivi",
      "Konuşma ağırlıklı özel müfredat",
      "Her 4 haftada ilerleme raporu",
      "Öğrenci paneli + devam takibi",
      "CEFR uyumlu bitirme sertifikası",
    ],
  },
  {
    id: "a1-baslangic",
    title: "Sıfırdan İngilizce A1",
    subtitle: "Temel kelime ve cümle yapıları, konuşma önceliğiyle",
    level: "A1",
    format: "Grup Dersi (Maks 8–10 Kişi)",
    duration: "8 Hafta",
    lessons: 32,
    price: 6900,
    originalPrice: 9900,
    features: [
      "Canlı Zoom dersleri",
      "Kayıt arşivi 6 ay",
      "Dijital workbook",
      "Haftalık quiz",
    ],
  },
  {
    id: "a2-temel",
    title: "Elementary A2 Paketi",
    subtitle: "Günlük iletişim ve seyahat İngilizcesi",
    level: "A2",
    format: "Grup Dersi (Maks 8–10 Kişi)",
    duration: "10 Hafta",
    lessons: 40,
    price: 7900,
    originalPrice: 10900,
    features: [
      "Maks 8–10 kişilik grup",
      "Konuşma kulübü",
      "Placement test",
      "Sertifika",
    ],
  },
  {
    id: "b1-orta",
    title: "Pre-Intermediate B1",
    subtitle: "İş görüşmesi ve sunum becerileri",
    level: "B1",
    format: "Grup Dersi (Maks 8–10 Kişi)",
    duration: "12 Hafta",
    lessons: 48,
    price: 8900,
    originalPrice: 11900,
    badge: "Yeni Dönem",
    features: [
      "Breakout room",
      "Writing düzeltme",
      "Aylık rapor",
      "IELTS giriş",
    ],
  },
  {
    id: "b2-orta-ust",
    title: "Intermediate B2 Yoğun",
    subtitle: "Akademik okuma ve tartışma",
    level: "B2",
    format: "Grup Dersi (Maks 8–10 Kişi)",
    duration: "12 Hafta",
    lessons: 48,
    price: 9900,
    originalPrice: 13900,
    features: [
      "Native speaker",
      "Debate oturumları",
      "Mock exam",
      "Proje",
    ],
  },
  {
    id: "c1-ileri",
    title: "Upper Intermediate C1",
    subtitle: "Akademik yazım ve sunum",
    level: "C1",
    format: "Grup Dersi (Maks 8–10 Kişi)",
    duration: "14 Hafta",
    lessons: 56,
    price: 10900,
    originalPrice: 14900,
    features: [
      "Essay yazımı",
      "Akademik okuma",
      "Peer review",
      "C1 sertifika",
    ],
  },
  {
    id: "ielts-paket",
    title: "IELTS Online Hazırlık",
    subtitle: "Band 6.5 hedefli yoğun program",
    level: "B2+",
    format: "Grup Dersi (Maks 8–10 Kişi)",
    duration: "10 Hafta",
    lessons: 40,
    price: 9900,
    originalPrice: 13900,
    popular: true,
    features: [
      "Haftalık mock exam",
      "Writing koçluğu",
      "Speaking mock",
      "Band analizi",
    ],
  },
  {
    id: "is-ingilizcesi",
    title: "İş İngilizcesi Online",
    subtitle: "Toplantı, e-posta ve müzakere",
    level: "B1+",
    format: "Grup Dersi (Maks 8–10 Kişi)",
    duration: "6 Hafta",
    lessons: 24,
    price: 6900,
    originalPrice: 9900,
    features: [
      "Sektöre özel",
      "CV desteği",
      "Esnek saat",
      "Birebir opsiyonu mevcut",
    ],
  },
  {
    id: "birebir-online",
    title: "Birebir Online Ders",
    subtitle: "Kişiye özel program ve takvim, tüm seviyeler",
    level: "Tüm Seviyeler",
    format: "Birebir Ders",
    duration: "Esnek",
    lessons: 10,
    price: 12900,
    originalPrice: 15900,
    badge: "Premium",
    features: [
      "1-1 eğitmen",
      "Esnek saat",
      "Özel müfredat",
      "Hızlandırılmış opsiyon",
    ],
  },
];

export interface YuzYuzeCourse {
  id: string;
  title: string;
  subtitle: string;
  level: string;
  format: "Grup Dersi (Maks 8–10 Kişi)" | "Birebir Ders";
  duration: string;
  lessons: number;
  price: number;
  originalPrice: number;
  badge?: string;
  features: string[];
  popular?: boolean;
}

export const yuzYuzeCourses: YuzYuzeCourse[] = [
  {
    id: "yy-3-ayda-90-ders",
    title: "3 Ayda 90 Ders Yoğun (Kampüs)",
    subtitle: "Sıfırdan akıcı konuşmaya, yüz yüze yoğun program",
    level: "A1 → B1",
    format: "Grup Dersi (Maks 8–10 Kişi)",
    duration: "12 Hafta",
    lessons: 90,
    price: 13900,
    originalPrice: 17900,
    badge: "En Popüler",
    popular: true,
    features: [
      "Kampüste 90 yüz yüze ders",
      "Konuşma kulübü dahil",
      "Her 4 haftada ilerleme raporu",
      "Öğrenci paneli + devam takibi",
      "CEFR uyumlu bitirme sertifikası",
    ],
  },
  {
    id: "yy-a1-baslangic",
    title: "Sıfırdan İngilizce A1 (Kampüs)",
    subtitle: "Kınıklı merkezimizde temel seviye grup programı",
    level: "A1",
    format: "Grup Dersi (Maks 8–10 Kişi)",
    duration: "8 Hafta",
    lessons: 32,
    price: 5900,
    originalPrice: 8900,
    features: [
      "Maks 8–10 kişilik sınıf",
      "Akıllı sınıf teknolojisi",
      "Dijital materyal",
      "Konuşma kulübü",
    ],
  },
  {
    id: "yy-b1-orta",
    title: "Intermediate B1 (Kampüs)",
    subtitle: "Homojen seviye gruplarında konuşma pratiği",
    level: "B1",
    format: "Grup Dersi (Maks 8–10 Kişi)",
    duration: "12 Hafta",
    lessons: 48,
    price: 7900,
    originalPrice: 10900,
    features: [
      "Haftalık konuşma kulübü",
      "Debate ve sunum atölyeleri",
      "Aylık ilerleme raporu",
      "Sertifika",
    ],
  },
  {
    id: "yy-birebir",
    title: "Birebir Kampüs Dersi",
    subtitle: "Denizli merkezde tamamen size özel oturumlar",
    level: "Tüm Seviyeler",
    format: "Birebir Ders",
    duration: "Esnek",
    lessons: 10,
    price: 11900,
    originalPrice: 14900,
    badge: "Premium",
    features: [
      "1-1 eğitmen",
      "Kişisel program",
      "Her 4 derste gelişim görüşmesi",
      "Konuşma kulübü dahil",
    ],
  },
];

export const promoMessages = [
  "Konuşma odaklı İngilizce — 3 ayda 90 derste 0'dan akıcı konuşmaya",
  "WhatsApp destek hattımız 7/24 açık — istediğiniz an yazın",
  "Maks 8–10 kişilik sınıflar, her derste herkes konuşur",
  "Ücretsiz seviye tespit sınavı + online speaking görüşmesi",
  "Online ve yüz yüze birebir/grup paketleri — bilgi almak için yazın",
];
