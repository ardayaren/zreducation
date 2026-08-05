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
    id: "a1-baslangic",
    title: "Sıfırdan İngilizce A1",
    subtitle: "Temel kelime ve cümle yapıları, konuşma önceliğiyle",
    level: "A1",
    format: "Grup Dersi (Maks 8–10 Kişi)",
    duration: "8 Hafta",
    lessons: 32,
    price: 4990,
    originalPrice: 7490,
    badge: "En Popüler",
    popular: true,
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
    price: 5490,
    originalPrice: 7990,
    features: ["Maks 8–10 kişilik grup", "Konuşma kulübü", "Placement test", "Sertifika"],
  },
  {
    id: "b1-orta",
    title: "Pre-Intermediate B1",
    subtitle: "İş görüşmesi ve sunum becerileri",
    level: "B1",
    format: "Grup Dersi (Maks 8–10 Kişi)",
    duration: "12 Hafta",
    lessons: 48,
    price: 6490,
    originalPrice: 9490,
    badge: "Yeni Dönem",
    features: ["Breakout room", "Writing düzeltme", "Aylık rapor", "IELTS giriş"],
  },
  {
    id: "b2-orta-ust",
    title: "Intermediate B2 Yoğun",
    subtitle: "Akademik okuma ve tartışma",
    level: "B2",
    format: "Grup Dersi (Maks 8–10 Kişi)",
    duration: "12 Hafta",
    lessons: 48,
    price: 7490,
    originalPrice: 10990,
    features: ["Native speaker", "Debate oturumları", "Mock exam", "Proje"],
  },
  {
    id: "c1-ileri",
    title: "Upper Intermediate C1",
    subtitle: "Akademik yazım ve sunum",
    level: "C1",
    format: "Grup Dersi (Maks 8–10 Kişi)",
    duration: "14 Hafta",
    lessons: 56,
    price: 8490,
    originalPrice: 12490,
    features: ["Essay yazımı", "Akademik okuma", "Peer review", "C1 sertifika"],
  },
  {
    id: "ielts-paket",
    title: "IELTS Online Hazırlık",
    subtitle: "Band 6.5 hedefli yoğun program",
    level: "B2+",
    format: "Grup Dersi (Maks 8–10 Kişi)",
    duration: "10 Hafta",
    lessons: 40,
    price: 6990,
    originalPrice: 9990,
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
    price: 4490,
    originalPrice: 6490,
    features: ["Sektöre özel", "CV desteği", "Esnek saat", "Birebir opsiyonu mevcut"],
  },
  {
    id: "birebir-online",
    title: "Birebir Online Ders",
    subtitle: "Kişiye özel program ve takvim, tüm seviyeler",
    level: "Tüm Seviyeler",
    format: "Birebir Ders",
    duration: "Esnek",
    lessons: 10,
    price: 8990,
    originalPrice: 11990,
    badge: "Premium",
    features: [
      "1-1 eğitmen",
      "Esnek saat",
      "Özel müfredat",
      "Hızlandırılmış opsiyon",
    ],
  },
];

export const promoMessages = [
  "Online eğitimlerde %30 indirim — Kod: ZRONLINE30",
  "Seviye tespit sonrası ek %10 indirim",
  "İlk kayıtta ücretsiz konuşma kulübü",
  "Denizli merkez + online hibrit paketler",
  "WhatsApp: +90 533 413 70 30",
];
