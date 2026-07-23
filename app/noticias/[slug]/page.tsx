import { notFound } from "next/navigation";
import { newsArticles, getArticleBySlug, getRelatedArticles, getRecentArticles } from "@/data/noticias";
import { NEWS_CATEGORY_COLORS, NEWS_CATEGORY_ICONS } from "@/data/noticias";
import { breadcrumbJsonLd, makeCanonical } from "@/lib/seo";

export const revalidate = 86400;
import ArticleBody from "@/components/noticias/ArticleBody";
import ShareButton from "@/components/noticias/ShareButton";
import NewsCard from "@/components/noticias/NewsCard";
import NewsSidebar from "@/components/noticias/NewsSidebar";

interface PageParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageParams) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Toura Angola`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
      type: "article",
      publishedTime: article.publishedAt,
    },
    alternates: { canonical: makeCanonical(`/noticias/${slug}`) },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-AO", { day: "numeric", month: "long", year: "numeric" });
}

export default async function ArticleDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article, 3);
  const recent = getRecentArticles(5, article.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.publishedAt,
    author: { "@type": "Person", name: article.author.name },
    publisher: { "@type": "Organization", name: "Toura Angola" },
    articleSection: article.category,
    keywords: article.tags?.join(", "),
  };

  const BASE_URL = "https://toura.ao";

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Início", path: "/" },
              { name: "Notícias", path: "/noticias" },
              { name: article.title, path: `/noticias/${article.slug}` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: 480 }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${article.image})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />

        {/* Breadcrumb */}
        <div className="absolute top-6 left-6 lg:left-12 z-10">
          <nav className="flex items-center gap-2">
            <a href="/" className="font-label-caps text-label-caps text-white/60 hover:text-white transition-colors">Início</a>
            <span className="material-symbols-outlined text-[14px] text-white/40">chevron_right</span>
            <a href="/noticias" className="font-label-caps text-label-caps text-white/60 hover:text-white transition-colors">Notícias</a>
            <span className="material-symbols-outlined text-[14px] text-white/40">chevron_right</span>
            <span className="font-label-caps text-label-caps text-white/90 max-w-[200px] line-clamp-1">{article.title}</span>
          </nav>
        </div>

        <div className="relative z-10 h-full flex items-end pb-10 px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className={`font-label-caps text-label-caps text-[9px] tracking-widest px-3 py-1.5 ${NEWS_CATEGORY_COLORS[article.category]}`}>
                <span className="material-symbols-outlined text-[10px] mr-1 align-middle">{NEWS_CATEGORY_ICONS[article.category]}</span>
                {article.category.toUpperCase()}
              </span>
              <span className="font-label-caps text-label-caps text-[10px] tracking-widest text-white/60">
                {article.readTime} MIN DE LEITURA
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg-mobile md:text-[44px] font-bold text-white leading-tight mb-5">
              {article.title}
            </h1>
            <div className="flex items-center gap-4">
              <span className="font-label-caps text-label-caps text-[10px] tracking-widest text-white/70">
                {article.author.name}
                {article.author.role && ` · ${article.author.role}`}
              </span>
              <span className="text-white/30">·</span>
              <span className="font-label-caps text-label-caps text-[10px] tracking-widest text-white/60">
                {formatDate(article.publishedAt)}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          {/* Article */}
          <article>
            {/* Excerpt lead */}
            <p className="font-body-lg text-body-lg text-on-surface font-medium leading-relaxed mb-8 pb-8 border-b border-savanna-sand text-[18px]">
              {article.excerpt}
            </p>

            <ArticleBody body={article.body} />

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-10 pt-8 border-t border-savanna-sand">
                <span className="font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant block mb-3">
                  ETIQUETAS
                </span>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="font-label-caps text-label-caps text-[10px] tracking-widest px-3 py-1.5 border border-savanna-sand text-on-surface-variant hover:border-primary hover:text-primary transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share */}
            <div className="mt-8 pt-8 border-t border-savanna-sand flex items-center gap-4">
              <span className="font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant">
                PARTILHAR ARTIGO
              </span>
              <ShareButton title={article.title} url={`${BASE_URL}/noticias/${article.slug}`} />
            </div>
          </article>

          {/* Sidebar */}
          <NewsSidebar recentArticles={recent} activeCategory={article.category} />
        </div>
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="border-t border-savanna-sand bg-surface-container-low">
          <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-14">
            <div className="mb-8">
              <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">
                Continuar a Ler
              </span>
              <h2 className="font-headline-sm text-headline-sm">Artigos Relacionados</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((a) => <NewsCard key={a.id} article={a} />)}
            </div>
          </div>
        </section>
      )}

      <div className="border-t border-savanna-sand py-8">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto">
          <a href="/noticias" className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Todas as Notícias
          </a>
        </div>
      </div>
    </main>
  );
}
