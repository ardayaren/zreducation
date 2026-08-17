import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/egitimlerimiz",
    "/online-egitim",
    "/ingilizce-egitimi",
    "/ogrenci-paneli",
    "/yurt-disi",
    "/hakkimizda",
    "/sss",
    "/seviye-tespit",
    "/iletisim",
    "/gizlilik-politikasi",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === "" ? 1 : route === "/egitimlerimiz" || route === "/online-egitim" ? 0.9 : 0.8,
  }));
}
