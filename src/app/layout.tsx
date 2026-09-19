import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Source_Sans_3 } from "next/font/google";
import MotionProvider from "@/components/providers/MotionProvider";
import { defaultMetadata } from "@/lib/siteConfig";
import JsonLd from "@/components/ui/JsonLd";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  display: "swap",
  preload: true,
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e2240",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${jakarta.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased touch-manipulation">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js')",
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "@id": `${siteConfig.url}/#organization`,
            name: siteConfig.name,
            url: siteConfig.url,
            logo: `${siteConfig.url}/images/logo-emblem.png`,
            image: `${siteConfig.url}/images/logo-emblem.png`,
            description: siteConfig.description,
            email: siteConfig.email,
            telephone: siteConfig.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Kınıklı, 6020. Sk. No:31",
              addressLocality: "Denizli",
              addressRegion: "Denizli",
              postalCode: "20160",
              addressCountry: "TR",
            },
            areaServed: "TR",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: siteConfig.phone,
              contactType: "customer service",
              availableLanguage: ["Turkish", "English"],
            },
            sameAs: ["https://zreducation.org"],
          }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
