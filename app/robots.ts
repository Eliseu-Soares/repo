import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/pesquisa?*", "/_next/"],
      },
    ],
    sitemap: "https://toura.ao/sitemap.xml",
    host: "https://toura.ao",
  };
}
