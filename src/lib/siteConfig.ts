import type { Metadata } from "next";
import { brandLogo } from "@/data/brand";

export const siteConfig = {
  name: "Zreducation",
  url: "https://zreducation.org",
  description:
    "Denizli merkezli Zreducation — İtalya & Almanya yurt dışı eğitim danışmanlığı, online ve yüz yüze İngilizce kursları, IELTS hazırlık.",
  locale: "tr_TR",
  phone: "+905334137030",
  email: "info@zreducation.com",
  address: "Kınıklı, 6017. Sk. No:11, 20160 Denizli Merkez/Denizli",
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Zreducation | Denizli — Online İngilizce & Yurt Dışı Eğitim",
    template: "%s | Zreducation Denizli",
  },
  description: siteConfig.description,
  keywords: [
    "denizli ingilizce kursu",
    "online ingilizce eğitimi",
    "italya üniversite başvurusu",
    "almanya öğrenci vizesi",
    "yurt dışı eğitim danışmanlığı denizli",
    "ielts hazırlık online",
    "seviye tespit sınavı",
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
    title: "Zreducation — Denizli Online İngilizce & İtalya/Almanya Danışmanlık",
    description: siteConfig.description,
    images: [{ url: brandLogo.mark, width: 512, height: 512, alt: "Zreducation Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zreducation Denizli",
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
