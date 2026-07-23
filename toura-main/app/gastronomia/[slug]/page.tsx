import { notFound } from "next/navigation";
import { dishes, getDishBySlug } from "@/data/gastronomia";
import DishCard from "@/components/gastronomia/DishCard";
import { breadcrumbJsonLd, makeCanonical } from "@/lib/seo";

export const revalidate = 86400;

interface PageParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return dishes.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageParams) {
  const { slug } = await params;
  const dish = getDishBySlug(slug);
  if (!dish) return {};
  return {
    title: `${dish.name} | Gastronomia | Toura Angola`,
    description: dish.description,
    openGraph: { title: dish.name, description: dish.description, images: [{ url: dish.image }] },
    alternates: { canonical: makeCanonical(`/gastronomia/${slug}`) },
  };
}

export default async function DishDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const dish = getDishBySlug(slug);
  if (!dish) notFound();

  const related = dishes.filter((d) => d.id !== dish.id && (d.province === dish.province || d.type === dish.type)).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: dish.name,
    description: dish.description,
    image: dish.image,
    recipeCategory: dish.type,
    recipeOrigin: dish.provinceName,
    recipeIngredient: dish.ingredients ?? [],
  };

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Início", path: "/" },
              { name: "Gastronomia", path: "/gastronomia" },
              { name: dish.name, path: `/gastronomia/${dish.slug}` },
            ])
          ),
        }}
      />

      {/* Hero image */}
      <section className="relative overflow-hidden" style={{ height: 420 }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${dish.image})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-6 left-6 lg:left-12 z-10">
          <nav className="flex items-center gap-2">
            <a href="/" className="font-label-caps text-label-caps text-white/60 hover:text-white transition-colors">Início</a>
            <span className="material-symbols-outlined text-[14px] text-white/40">chevron_right</span>
            <a href="/gastronomia" className="font-label-caps text-label-caps text-white/60 hover:text-white transition-colors">Gastronomia</a>
            <span className="material-symbols-outlined text-[14px] text-white/40">chevron_right</span>
            <span className="font-label-caps text-label-caps text-white/90 line-clamp-1 max-w-[160px]">{dish.name}</span>
          </nav>
        </div>

        <div className="relative z-10 h-full flex items-end px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto w-full pb-10">
          <div>
            <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3">{dish.type.toUpperCase()} · {dish.provinceName.toUpperCase()}</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-[52px] font-bold text-white leading-tight">{dish.name}</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-14">
        <div className="grid lg:grid-cols-[1fr_300px] gap-10">
          {/* Left */}
          <div>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8">{dish.longDescription}</p>

            {dish.ingredients && dish.ingredients.length > 0 && (
              <div>
                <h2 className="font-headline-sm text-[18px] font-semibold mb-5 pb-4 border-b border-savanna-sand">Ingredientes Principais</h2>
                <div className="flex flex-wrap gap-2">
                  {dish.ingredients.map((ing) => (
                    <span key={ing} className="font-label-caps text-label-caps text-[11px] tracking-widest px-3 py-2 border border-savanna-sand text-on-surface hover:border-primary hover:text-primary transition-colors">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right */}
          <div className="space-y-4">
            <div className="border border-savanna-sand p-6">
              <h2 className="font-headline-sm text-[17px] font-semibold mb-5 pb-4 border-b border-savanna-sand">Sobre o Prato</h2>
              <dl className="flex flex-col gap-4">
                {[
                  { icon: "restaurant", label: "Tipo", value: dish.type },
                  { icon: "location_on", label: "Origem", value: dish.provinceName },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0">{icon}</span>
                    <div>
                      <dt className="font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant mb-0.5">{label.toUpperCase()}</dt>
                      <dd className="font-body-md text-sm text-on-surface">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <a href={`/provincias/${dish.province}`}
                className="mt-5 flex items-center gap-2 font-label-caps text-label-caps text-[11px] tracking-widest text-on-surface-variant hover:text-primary transition-colors border-t border-savanna-sand pt-5">
                <span className="material-symbols-outlined text-[16px]">travel_explore</span>
                Explorar {dish.provinceName}
              </a>
            </div>
            <a href="/gastronomia"
              className="flex items-center justify-center gap-2 border border-savanna-sand font-label-caps text-label-caps text-[11px] tracking-widest px-6 py-3 text-on-surface-variant hover:border-primary hover:text-primary transition-colors w-full">
              <span className="material-symbols-outlined text-[16px]">restaurant_menu</span>
              TODOS OS PRATOS
            </a>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-savanna-sand bg-surface-container-low">
          <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-14">
            <div className="mb-8">
              <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">Descobrir Mais</span>
              <h2 className="font-headline-sm text-headline-sm">Outros Pratos Angolanos</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((d) => <DishCard key={d.id} dish={d} />)}
            </div>
          </div>
        </section>
      )}

      <div className="border-t border-savanna-sand py-8">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto">
          <a href="/gastronomia" className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Gastronomia Angolana
          </a>
        </div>
      </div>
    </main>
  );
}
