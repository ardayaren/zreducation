import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/online-egitim",
    "/yurt-disi",
    "/ingilizce-egitimi",
    "/hizmetler",
    "/hakkimizda",
    "/seviye-tespit",
    "/iletisim",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/online-egitim" ? 0.9 : 0.8,
  }));
}
