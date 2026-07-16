import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zreducation | Eğitim & Danışmanlık",
    template: "%s | Zreducation",
  },
  description:
    "Yurt dışı öğrenci gönderimi, temelden ileri düzeye İngilizce eğitimi, online ve yüz yüze grup dersleri. Türkiye'nin güvenilir eğitim partneri.",
  keywords: [
    "ingilizce kursu",
    "yurt dışı eğitim",
    "öğrenci gönderimi",
    "IELTS",
    "TOEFL",
    "online ingilizce",
    "seviye tespit",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${jakarta.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
