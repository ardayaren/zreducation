import {
  Globe,
  GraduationCap,
  Monitor,
  Users,
  BookOpen,
  Award,
} from "lucide-react";

export const services = [
  {
    id: "yurt-disi",
    icon: Globe,
    title: "Yurt Dışı Öğrenci Gönderimi",
    description:
      "Amerika, İngiltere, Kanada, Avustralya ve Avrupa'nın önde gelen üniversitelerine öğrenci yerleştirme hizmeti sunuyoruz.",
    features: [
      "Üniversite ve bölüm seçimi danışmanlığı",
      "Başvuru dosyası hazırlama",
      "Vize süreç yönetimi",
      "Konaklama ve yerleşim desteği",
    ],
    href: "/yurt-disi",
  },
  {
    id: "ingilizce",
    icon: GraduationCap,
    title: "İngilizce Eğitimi",
    description:
      "Temel seviyeden ileri düzeye kadar kapsamlı İngilizce eğitim programları ile hedeflerinize ulaşın.",
    features: [
      "A1'den C2'ye kadar tüm seviyeler",
      "CEFR uyumlu müfredat",
      "IELTS & TOEFL hazırlık",
      "İş İngilizcesi programları",
    ],
    href: "/ingilizce-egitimi",
  },
  {
    id: "online",
    icon: Monitor,
    title: "Online Eğitim",
    description:
      "Esnek programlarla evinizin konforunda, canlı dersler ve interaktif materyallerle öğrenin.",
    features: [
      "Canlı interaktif dersler",
      "Kayıtlı ders arşivi",
      "7/24 öğrenme platformu",
      "Birebir ve grup seçenekleri",
    ],
    href: "/hizmetler#online",
  },
  {
    id: "grup",
    icon: Users,
    title: "Grup Dersleri",
    description:
      "Dinamik sınıf ortamında, uygun fiyatlı ve sosyal öğrenme deneyimi sunan grup dersleri.",
    features: [
      "Maksimum 8 kişilik sınıflar",
      "Seviye bazlı gruplandırma",
      "Haftalık konuşma kulüpleri",
      "Esnek ders saatleri",
    ],
    href: "/hizmetler#grup",
  },
  {
    id: "yuz-yuze",
    icon: BookOpen,
    title: "Yüz Yüze Eğitim",
    description:
      "Modern sınıflarımızda, deneyimli eğitmenlerimizle birebir veya grup halinde yüz yüze eğitim.",
    features: [
      "Merkez lokasyonlarımız",
      "Akıllı sınıf teknolojisi",
      "Kişiselleştirilmiş geri bildirim",
      "Sertifika programları",
    ],
    href: "/hizmetler#yuz-yuze",
  },
  {
    id: "sertifika",
    icon: Award,
    title: "Sınav Hazırlık & Sertifika",
    description:
      "IELTS, TOEFL, YDS ve diğer uluslararası sınavlara yönelik özel hazırlık programları.",
    features: [
      "Deneme sınavları",
      "Birebir koçluk",
      "Strateji atölyeleri",
      "Başarı garantili programlar",
    ],
    href: "/ingilizce-egitimi#sinav",
  },
];

export const stats = [
  { value: "15+", label: "Yıllık Deneyim" },
  { value: "5000+", label: "Mezun Öğrenci" },
  { value: "30+", label: "Partner Üniversite" },
  { value: "%94", label: "Memnuniyet Oranı" },
];

export const levels = [
  {
    code: "A1",
    name: "Başlangıç",
    description: "Temel kelimeler ve basit cümleler",
  },
  {
    code: "A2",
    name: "Temel",
    description: "Günlük konuşmalar ve basit metinler",
  },
  {
    code: "B1",
    name: "Orta Alt",
    description: "Seyahat ve iş konularında iletişim",
  },
  {
    code: "B2",
    name: "Orta Üst",
    description: "Akıcı ve spontan iletişim",
  },
  {
    code: "C1",
    name: "İleri",
    description: "Akademik ve profesyonel dil kullanımı",
  },
  {
    code: "C2",
    name: "Uzman",
    description: "Anadil seviyesine yakın yeterlilik",
  },
];
