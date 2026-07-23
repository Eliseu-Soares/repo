import { CULTURA_META, culturalArticles } from "@/data/cultura";
import CulturaCategoryCard from "@/components/cultura/CulturaCategoryCard";
import CulturaArticleCard from "@/components/cultura/CulturaArticleCard";

const IMG_BG = "https://lh3.googleusercontent.com/aida-public/AB6AXuD4eE_8DAIC7ItzrF2bj0T17TSo-gTzLO95Qsik-Te-1iMCZqlUdE73l_2VGYc2eDgO0Oll9JEpLON5wp8e08jW966JiPrTVzGJdCGqiAJwh1QTqmu1y28RDna8_tnYmpMqSmU1J795guT3y5kKC4v6DntLBT5wHBK3DJnOiklE5myLRD2nhL6P-IAcnW7Pqil6Sdn9BDs1MXrmj3b7RkTQBfWqwnztw4dpBysN0HsflfBx0LitJT-ux97cPgpXrmx5hCCJU3E15dxE";

export function generateMetadata() {
  return {
    title: "Cultura de Angola | Toura",
    description: "Explore a riqueza cultural de Angola — música, dança, artesanato, línguas, tradições e arte contemporânea.",
  };
}

export default function CulturaPage() {
  const featured = culturalArticles.slice(0, 4);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: 440 }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMG_BG})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/85 via-brand-navy/60 to-transparent" />
        <div className="relative z-10 px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-24 flex items-center min-h-[440px]">
          <div className="max-w-2xl">
            <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-5">
              IDENTIDADE · MEMÓRIA · EXPRESSÃO
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white leading-tight mb-6">
              Cultura de Angola
            </h1>
            <p className="font-body-lg text-body-lg text-white/80 max-w-xl">
              De norte a sul, Angola é um mosaico de povos, línguas e expressões artísticas que atravessam milénios. Explore a riqueza imaterial de um país extraordinário.
            </p>
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-16">
        <div className="mb-10">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">Explorar</span>
          <h2 className="font-headline-sm text-headline-sm">Categorias Culturais</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CULTURA_META.map((meta) => (
            <CulturaCategoryCard key={meta.slug} meta={meta} />
          ))}
        </div>
      </section>

      {/* Featured articles */}
      <section className="bg-surface-container-low border-t border-savanna-sand">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-16">
          <div className="mb-10">
            <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">Em Destaque</span>
            <h2 className="font-headline-sm text-headline-sm">Artigos Culturais</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((article) => (
              <CulturaArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <div className="flex flex-wrap justify-center gap-3">
              {CULTURA_META.map((m) => (
                <a key={m.slug} href={`/cultura/${m.slug}`}
                  className="flex items-center gap-2 border border-savanna-sand font-label-caps text-label-caps text-[10px] tracking-widest px-4 py-2 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[14px]">{m.icon}</span>
                  {m.label.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="border-t border-savanna-sand">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-16">
          <div className="mb-8">
            <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">Galeria Visual</span>
            <h2 className="font-headline-sm text-headline-sm">Angola em Imagens</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {culturalArticles.slice(0, 6).map((a, i) => (
              <div key={i} className="overflow-hidden" style={{ aspectRatio: i === 0 || i === 5 ? "4/3" : "1/1" }}>
                <img src={a.image} alt={a.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
