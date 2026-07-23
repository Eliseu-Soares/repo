import { newsArticles, getFeaturedArticle, getRecentArticles } from "@/data/noticias";
import FeaturedArticleBanner from "@/components/noticias/FeaturedArticleBanner";
import NewsBrowser from "@/components/noticias/NewsBrowser";
import NewsSidebar from "@/components/noticias/NewsSidebar";
import { itemListJsonLd, makeCanonical } from "@/lib/seo";

export const revalidate = 86400;

export function generateMetadata() {
  return {
    title: "Notícias | Toura Angola",
    description: "Últimas notícias sobre turismo, cultura, eventos e investimento em Angola.",
    alternates: { canonical: makeCanonical("/noticias") },
  };
}

export default function NoticiasPage() {
  const featured = getFeaturedArticle();
  const recent = getRecentArticles(5, featured.id);
  const rest = newsArticles.filter((a) => !a.featured);

  const jsonLd = itemListJsonLd(
    "Notícias de Angola",
    "/noticias",
    newsArticles.map((a) => ({ name: a.title, url: `/noticias/${a.slug}` }))
  );

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero */}
      <section className="bg-surface-container-low border-b border-savanna-sand">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-14">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">
            Portal de Informação
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight">
            Notícias de Angola
          </h1>
        </div>
      </section>

      {/* Featured */}
      <section className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-10">
        <FeaturedArticleBanner article={featured} />
      </section>

      {/* Main content + sidebar */}
      <section className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-10 pb-section-gap">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          <div>
            <div className="mb-10">
              <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">
                Últimas Notícias
              </span>
              <h2 className="font-headline-sm text-headline-sm">Todas as Notícias</h2>
            </div>
            <NewsBrowser articles={rest} />
          </div>
          <NewsSidebar recentArticles={recent} />
        </div>
      </section>
    </main>
  );
}
