import { notFound } from "next/navigation";
import { CULTURA_META, getArticlesByCatSlug } from "@/data/cultura";
import CulturaArticleCard from "@/components/cultura/CulturaArticleCard";
import { breadcrumbJsonLd, makeCanonical } from "@/lib/seo";

export const revalidate = 86400;

interface PageParams {
  params: Promise<{ catSlug: string }>;
}

export async function generateStaticParams() {
  return CULTURA_META.map((m) => ({ catSlug: m.slug }));
}

export async function generateMetadata({ params }: PageParams) {
  const { catSlug } = await params;
  const meta = CULTURA_META.find((m) => m.slug === catSlug);
  if (!meta) return {};
  return {
    title: `${meta.label} | Cultura de Angola | Toura`,
    description: meta.description,
    alternates: { canonical: makeCanonical(`/cultura/${catSlug}`) },
  };
}

export default async function CulturaCategoriePage({ params }: PageParams) {
  const { catSlug } = await params;
  const meta = CULTURA_META.find((m) => m.slug === catSlug);
  if (!meta) notFound();

  const articles = getArticlesByCatSlug(catSlug);
  const otherCategories = CULTURA_META.filter((m) => m.slug !== catSlug);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Início", path: "/" },
              { name: "Cultura", path: "/cultura" },
              { name: meta.label, path: `/cultura/${meta.slug}` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-surface-container-low border-b border-savanna-sand">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8">
            <a href="/" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors">Início</a>
            <span className="material-symbols-outlined text-[14px] text-on-surface-variant/40">chevron_right</span>
            <a href="/cultura" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors">Cultura</a>
            <span className="material-symbols-outlined text-[14px] text-on-surface-variant/40">chevron_right</span>
            <span className="font-label-caps text-label-caps text-on-surface">{meta.label}</span>
          </nav>

          <div className="flex items-start gap-6">
            <div className={`w-16 h-16 flex items-center justify-center shrink-0 ${meta.color}`}>
              <span className="material-symbols-outlined text-[32px]">{meta.icon}</span>
            </div>
            <div>
              <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-2 uppercase">Cultura</span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-[48px] font-bold text-on-surface leading-tight mb-3">
                {meta.label}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">{meta.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-14">
        {articles.length > 0 ? (
          <>
            <p className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest mb-8">
              {articles.length} ARTIGO{articles.length !== 1 ? "S" : ""}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <CulturaArticleCard key={article.id} article={article} />
              ))}
            </div>
          </>
        ) : (
          <div className="py-20 text-center">
            <span className="material-symbols-outlined text-[56px] text-on-surface-variant/20 block mb-4">{meta.icon}</span>
            <p className="font-body-md text-on-surface-variant">Artigos em breve.</p>
          </div>
        )}
      </section>

      {/* Other categories */}
      <section className="border-t border-savanna-sand bg-surface-container-low">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-12">
          <p className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest mb-5">OUTRAS CATEGORIAS</p>
          <div className="flex flex-wrap gap-3">
            {otherCategories.map((m) => (
              <a key={m.slug} href={`/cultura/${m.slug}`}
                className={`flex items-center gap-2 px-4 py-2.5 border border-savanna-sand font-label-caps text-label-caps text-[10px] tracking-widest hover:border-primary hover:text-primary transition-colors`}>
                <span className="material-symbols-outlined text-[15px]">{m.icon}</span>
                {m.label.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Article detail note: individual articles use catSlug/slug route */}
      <div className="border-t border-savanna-sand py-8">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto">
          <a href="/cultura" className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Toda a Cultura
          </a>
        </div>
      </div>
    </main>
  );
}
