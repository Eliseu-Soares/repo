import { Suspense } from "react";
import DestinosHero from "@/components/destinos/DestinosHero";
import ProvinceSpotlight from "@/components/destinos/ProvinceSpotlight";
import DestinationCatalog from "@/components/destinos/DestinationCatalog";
import FeaturedSpotlight from "@/components/destinos/FeaturedSpotlight";
import TrustSection from "@/components/destinos/TrustSection";
import { destinations } from "@/data/destinations";
import { itemListJsonLd, makeCanonical } from "@/lib/seo";

export const revalidate = 86400;

export const metadata = {
  title: "Destinos | Tour.a — Angola",
  description:
    "Explore os destinos mais fascinantes de Angola: praias, parques naturais, monumentos históricos e muito mais. 22 destinos, 18 províncias.",
  alternates: { canonical: makeCanonical("/destinos") },
};

export default async function DestinosPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Next.js 16: searchParams is a Promise and must be awaited
  await searchParams;

  const jsonLd = itemListJsonLd(
    "Destinos em Angola",
    "/destinos",
    destinations.map((d) => ({ name: d.title, url: `/destinos/${d.slug}` }))
  );

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 1. Hero — full height, left-aligned editorial */}
      <DestinosHero />

      {/* 2. Province spotlight — 4 portrait cards */}
      <ProvinceSpotlight />

      {/* 3. Destination catalog — filters + grid */}
      <Suspense fallback={<CatalogSkeleton />}>
        <DestinationCatalog />
      </Suspense>

      {/* 4. Featured spotlight — Huíla editorial section */}
      <FeaturedSpotlight />

      {/* 5. Trust / institutional section */}
      <TrustSection />
    </main>
  );
}

function CatalogSkeleton() {
  return (
    <div
      id="destinos"
      className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-12 pb-section-gap"
    >
      <div className="flex gap-3 py-6 mb-8 border-b border-savanna-sand">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-9 bg-surface-dim animate-pulse"
            style={{ width: i === 0 ? 60 : 80 }}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="flex flex-col border border-savanna-sand overflow-hidden">
            <div
              className="bg-surface-dim animate-pulse"
              style={{ aspectRatio: "16/10" }}
            />
            <div className="p-6 flex flex-col gap-3">
              <div className="flex justify-between">
                <div className="h-3 bg-surface-dim animate-pulse w-2/5" />
                <div className="h-3 bg-surface-dim animate-pulse w-10" />
              </div>
              <div className="h-6 bg-surface-dim animate-pulse w-3/4" />
              <div className="h-3 bg-surface-dim animate-pulse" />
              <div className="h-3 bg-surface-dim animate-pulse w-4/5" />
              <div className="h-3 bg-surface-dim animate-pulse w-1/3 mt-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
