import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { brandLogo } from "@/data/brand";

interface BuildMetadataOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noindex?: boolean;
}

/** Site genelinde tutarlı SEO meta seti: canonical, hreflang, OG, Twitter. */
export function buildMetadata({
  title,
  description,
  path = "",
  keywords,
  noindex = false,
}: BuildMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = `${title} | Zreducation`;
  const ogImage = `${siteConfig.url}${brandLogo.mark}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        tr: url,
        "x-default": url,
      },
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 533,
          height: 533,
          alt: "Zreducation Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    ...(keywords?.length ? { keywords } : {}),
  };
}