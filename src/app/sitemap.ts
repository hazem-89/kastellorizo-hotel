import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";

const base = siteConfig.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/rooms`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];
}
