import type { MetadataRoute } from "next";
import { destinations } from "@/data/destinations";
import { events } from "@/data/events";
import { newsArticles } from "@/data/noticias";
import { dishes } from "@/data/gastronomia";
import { experiences } from "@/data/experiencias";
import { provinces } from "@/data/provinces";
import { CULTURA_META, culturalArticles } from "@/data/cultura";

const BASE = "https://toura.ao";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/destinos`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/provincias`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/eventos`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/experiencias`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/gastronomia`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/cultura`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/noticias`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/mapa`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const destinationRoutes: MetadataRoute.Sitemap = destinations.map((d) => ({
    url: `${BASE}/destinos/${d.slug}`,
    lastModified: d.createdAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const provinceRoutes: MetadataRoute.Sitemap = provinces.map((p) => ({
    url: `${BASE}/provincias/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const eventRoutes: MetadataRoute.Sitemap = events.map((e) => ({
    url: `${BASE}/eventos/${e.slug}`,
    lastModified: e.startDate,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const newsRoutes: MetadataRoute.Sitemap = newsArticles.map((a) => ({
    url: `${BASE}/noticias/${a.slug}`,
    lastModified: a.publishedAt,
    changeFrequency: "never",
    priority: 0.7,
  }));

  const dishRoutes: MetadataRoute.Sitemap = dishes.map((d) => ({
    url: `${BASE}/gastronomia/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const experienceRoutes: MetadataRoute.Sitemap = experiences.map((e) => ({
    url: `${BASE}/experiencias/${e.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const culturaRoutes: MetadataRoute.Sitemap = CULTURA_META.map((m) => ({
    url: `${BASE}/cultura/${m.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const culturaArticleRoutes: MetadataRoute.Sitemap = culturalArticles.map((a) => ({
    url: `${BASE}/cultura/${a.catSlug}/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...destinationRoutes,
    ...provinceRoutes,
    ...eventRoutes,
    ...newsRoutes,
    ...dishRoutes,
    ...experienceRoutes,
    ...culturaRoutes,
    ...culturaArticleRoutes,
  ];
}
