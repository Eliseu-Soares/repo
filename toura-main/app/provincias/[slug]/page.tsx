import { notFound } from "next/navigation";
import { provinces } from "@/data/provinces";
import { destinations } from "@/data/destinations";
import { events } from "@/data/events";
import { breadcrumbJsonLd, makeCanonical } from "@/lib/seo";

export const revalidate = 86400;
import ProvinciaHero from "@/components/provincias/detail/ProvinciaHero";
import ProvinciaDestinations from "@/components/provincias/detail/ProvinciaDestinations";
import ProvinciaEvents from "@/components/provincias/detail/ProvinciaEvents";
import ProvinciaMunicipios from "@/components/provincias/detail/ProvinciaMunicipios";
import ProvinciaGastronomia from "@/components/provincias/detail/ProvinciaGastronomia";
import ProvinciaMapEmbedLoader from "@/components/provincias/detail/ProvinciaMapEmbedLoader";
import DestinationCard from "@/components/ui/DestinationCard";

interface PageParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return provinces.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageParams) {
  const { slug } = await params;
  const province = provinces.find((p) => p.slug === slug);
  if (!province) return {};

  return {
    title: `${province.name} | Províncias | Toura Angola`,
    description: province.description,
    openGraph: {
      title: `${province.name} — Descubra esta província de Angola`,
      description: province.description,
      images: [{ url: province.image, alt: province.name }],
    },
    alternates: { canonical: makeCanonical(`/provincias/${slug}`) },
  };
}

export default async function ProvinciaDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const province = provinces.find((p) => p.slug === slug);
  if (!province) notFound();

  const provinceDestinations = destinations
    .filter((d) => d.province === slug)
    .sort((a, b) => b.rating - a.rating);

  const topDestinations = provinceDestinations.slice(0, 3);
  const remainingDestinations = provinceDestinations.slice(3);
  const provinceEvents = events.filter((e) => e.province === slug);

  const defaultCenter = province.coordinates ?? { lat: -11.8, lng: 17.5 };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AdministrativeArea",
    name: province.name,
    description: province.description,
    image: province.image,
    containedInPlace: { "@type": "Country", name: "Angola" },
  };

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Início", path: "/" },
              { name: "Províncias", path: "/provincias" },
              { name: province.name, path: `/provincias/${province.slug}` },
            ])
          ),
        }}
      />

      {/* 1. Hero */}
      <ProvinciaHero province={province} />

      {/* 2. Top 3 destinations — featured */}
      {topDestinations.length > 0 && (
        <section className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-16">
          <div className="mb-10">
            <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">
              Em Destaque
            </span>
            <h2 className="font-headline-sm text-headline-sm">
              Melhores Destinos de {province.name}
            </h2>
          </div>

          <div
            className={`grid gap-6 ${
              topDestinations.length === 1
                ? "grid-cols-1 max-w-sm"
                : topDestinations.length === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {topDestinations.map((dest, i) => (
              <DestinationCard key={dest.id} destination={dest} priority={i === 0} />
            ))}
          </div>
        </section>
      )}

      {/* 3. Municipalities grid */}
      {provinceDestinations.length > 0 && (
        <ProvinciaMunicipios
          destinations={provinceDestinations}
          provinceName={province.name}
        />
      )}

      {/* 4. All remaining destinations with filter */}
      {remainingDestinations.length > 0 && (
        <div className="border-t border-savanna-sand">
          <ProvinciaDestinations destinations={provinceDestinations} />
        </div>
      )}

      {/* 5. Interactive map */}
      <ProvinciaMapEmbedLoader
        destinations={provinceDestinations}
        center={defaultCenter}
        provinceName={province.name}
      />

      {/* 6. Gastronomy */}
      {(province.localDishes?.length ?? 0) > 0 && (
        <div className="bg-surface-container-low">
          <ProvinciaGastronomia
            dishes={province.localDishes!}
            provinceName={province.name}
          />
        </div>
      )}

      {/* 7. Events */}
      {provinceEvents.length > 0 && (
        <div className="bg-surface-container-low">
          <ProvinciaEvents events={provinceEvents} />
        </div>
      )}

      {/* 8. Empty state if no destinations */}
      {provinceDestinations.length === 0 && (
        <section className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-20 text-center">
          <span className="material-symbols-outlined text-[64px] text-on-surface-variant/20 block mb-6">
            travel_explore
          </span>
          <h2 className="font-headline-sm text-headline-sm mb-3">Em breve</h2>
          <p className="font-body-md text-on-surface-variant max-w-md mx-auto mb-8">
            Estamos a mapear os destinos desta província. Regresse em breve
            para descobrir as maravilhas de {province.name}.
          </p>
          <a
            href="/destinos"
            className="inline-flex items-center gap-2 bg-primary text-white font-label-caps text-label-caps px-8 py-3 hover:bg-primary-container transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">travel_explore</span>
            Explorar Todos os Destinos
          </a>
        </section>
      )}

      {/* 9. Navigation */}
      <div className="border-t border-savanna-sand py-10">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto flex items-center justify-between flex-wrap gap-4">
          <a
            href="/provincias"
            className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Todas as Províncias
          </a>
          <a
            href="/mapa"
            className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">map</span>
            Ver Mapa Interativo
          </a>
        </div>
      </div>
    </main>
  );
}
