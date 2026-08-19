import type { Metadata } from "next";
import { brandLogo } from "@/data/brand";

export const siteConfig = {
  name: "Zreducation",
  url: "https://zreducation.org",
  description:
    "Zreducation Denizli — konuşma odaklı İngilizce eğitimi. 3 ayda 90 derste sıfırdan akıcı konuşmaya, online ve yüz yüze birebir/grup dersleri, Speaking/Listening/Reading/Writing odaklı CEFR müfredatı, ücretsiz seviye tespit ve 7/24 WhatsApp destek.",
  locale: "tr_TR",
  phone: "+905334137030",
  email: "info@zreducation.com",
  address: "Kınıklı, 6020. Sk. No:31, 20160 Denizli Merkez/Denizli",
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Zreducation | Denizli — Konuşma Odaklı İngilizce Eğitimi",
    template: "%s | Zreducation Denizli",
  },
  description: siteConfig.description,
  keywords: [
    "denizli ingilizce kursu",
    "konuşma odaklı ingilizce eğitimi",
    "online ingilizce eğitimi",
    "3 ayda 90 derste ingilizce",
    "ingilizce speaking dersi",
    "online ingilizce kursu",
    "yüz yüze ingilizce denizli",
    "seviye tespit sınavı",
    "ielts hazırlık online",
    "zreducation",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { email: false, telephone: false },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Zreducation — Denizli Konuşma Odaklı İngilizce Eğitimi",
    description: siteConfig.description,
    images: [{ url: brandLogo.mark, width: 533, height: 533, alt: "Zreducation Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zreducation — Konuşma Odaklı İngilizce",
    description: siteConfig.description,
    images: [brandLogo.mark],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: siteConfig.url },
  icons: {
    icon: [
      { url: "/icon", type: "image/png", sizes: "32x32" },
      { url: brandLogo.icon, type: "image/png", sizes: "64x64" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
    shortcut: brandLogo.icon,
  },
};
