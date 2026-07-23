import { newsArticles } from "@/data/noticias";

const BASE = "https://toura.ao";

function escapeXml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const sorted = [...newsArticles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  const items = sorted
    .map((article) => {
      const pubDate = new Date(article.publishedAt).toUTCString();
      return `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${BASE}/noticias/${article.slug}</link>
      <guid isPermaLink="true">${BASE}/noticias/${article.slug}</guid>
      <description>${escapeXml(article.excerpt)}</description>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(article.category)}</category>
      <author>${escapeXml(article.author.name)}</author>
      <media:content url="${escapeXml(article.image)}" medium="image" />
    </item>`.trim();
    })
    .join("\n    ");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:media="http://search.yahoo.com/mrss/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Toura Angola — Notícias</title>
    <link>${BASE}</link>
    <description>Últimas notícias sobre turismo, cultura, eventos e investimento em Angola.</description>
    <language>pt</language>
    <copyright>© ${new Date().getFullYear()} Toura Angola</copyright>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${BASE}/logo.png</url>
      <title>Toura Angola</title>
      <link>${BASE}</link>
    </image>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
