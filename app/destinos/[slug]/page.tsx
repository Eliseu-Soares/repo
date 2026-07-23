import { notFound } from "next/navigation";
import { destinations } from "@/data/destinations";
import { getReviewsByDestination } from "@/data/reviews";
import { breadcrumbJsonLd, makeCanonical } from "@/lib/seo";

export const revalidate = 86400;
import DestinationHeroSlideshow from "@/components/destinos/detail/DestinationHeroSlideshow";
import DestinationActions from "@/components/destinos/detail/DestinationActions";
import DestinationTabs from "@/components/destinos/detail/DestinationTabs";
import NearbyDestinations from "@/components/destinos/detail/NearbyDestinations";
import DestinationGallery from "@/components/destinos/detail/DestinationGallery";
import ReviewsSection from "@/components/destinos/detail/ReviewsSection";

interface PageParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageParams) {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) return {};

  return {
    title: `${dest.title} | Toura Angola`,
    description: dest.description,
    openGraph: {
      title: dest.title,
      description: dest.description,
      images: [{ url: dest.image, alt: dest.title }],
    },
    alternates: { canonical: makeCanonical(`/destinos/${slug}`) },
  };
}

export default async function DestinoDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) notFound();

  const gallery = dest.gallery ?? [dest.image];
  const reviews = getReviewsByDestination(dest.id);
  const mapUrl = dest.coordinates
    ? `https://www.openstreetmap.org/export/embed.html?bbox=${dest.coordinates.lng - 0.15},${dest.coordinates.lat - 0.12},${dest.coordinates.lng + 0.15},${dest.coordinates.lat + 0.12}&layer=mapnik&marker=${dest.coordinates.lat},${dest.coordinates.lng}`
    : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: dest.title,
    description: dest.description,
    image: dest.image,
    address: {
      "@type": "PostalAddress",
      addressLocality: dest.municipality,
      addressRegion: dest.provinceName,
      addressCountry: "AO",
    },
    ...(dest.coordinates && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: dest.coordinates.lat,
        longitude: dest.coordinates.lng,
      },
    }),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: dest.rating,
      reviewCount: dest.reviewCount,
    },
  };

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* JSON-LD */}
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
              { name: "Destinos", path: "/destinos" },
              { name: dest.title, path: `/destinos/${dest.slug}` },
            ])
          ),
        }}
      />

      {/* 1. Hero slideshow */}
      <DestinationHeroSlideshow
        images={gallery}
        title={dest.title}
        category={dest.category}
        province={dest.provinceName}
      />

      {/* 2. Sticky breadcrumb + actions bar */}
      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-md border-b border-savanna-sand">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto h-14 flex items-center justify-between gap-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 min-w-0">
            <a
              href="/"
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors shrink-0"
            >
              Início
            </a>
            <span className="material-symbols-outlined text-[14px] text-on-surface-variant/40 shrink-0">
              chevron_right
            </span>
            <a
              href="/destinos"
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors shrink-0"
            >
              Destinos
            </a>
            <span className="material-symbols-outlined text-[14px] text-on-surface-variant/40 shrink-0">
              chevron_right
            </span>
            <span className="font-label-caps text-label-caps text-on-surface truncate">
              {dest.title}
            </span>
          </nav>
          <DestinationActions slug={dest.slug} title={dest.title} image={dest.image} provinceName={dest.provinceName} />
        </div>
      </div>

      {/* 3. Main content */}
      <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: tabs */}
          <div className="lg:col-span-2">
            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="flex items-center gap-1.5 text-primary">
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span className="font-label-caps text-label-caps font-bold">
                  {dest.rating.toFixed(1)}
                </span>
                <span className="font-label-caps text-label-caps text-on-surface-variant">
                  ({dest.reviewCount.toLocaleString("pt-AO")} avaliações)
                </span>
              </div>
              <span className="w-px h-4 bg-savanna-sand" />
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                  location_on
                </span>
                <span className="font-label-caps text-label-caps text-on-surface-variant">
                  {dest.municipality}, {dest.provinceName}
                </span>
              </div>
              <span className="w-px h-4 bg-savanna-sand" />
              <span className="font-label-caps text-label-caps text-secondary">
                {dest.category.toUpperCase()}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {dest.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-surface-container font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Tabs — only if details exist */}
            {dest.details ? (
              <DestinationTabs details={dest.details} />
            ) : (
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {dest.description}
              </p>
            )}
          </div>

          {/* Right: map */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">
                Localização
              </span>
              {mapUrl ? (
                <div className="border border-savanna-sand overflow-hidden">
                  <iframe
                    src={mapUrl}
                    width="100%"
                    height="340"
                    style={{ border: 0 }}
                    loading="lazy"
                    title={`Mapa de ${dest.title}`}
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="border border-savanna-sand bg-surface-container-low h-[340px] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[40px] text-on-surface-variant/30">
                    location_on
                  </span>
                </div>
              )}
              <div className="mt-4 flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px]">
                  location_on
                </span>
                <span className="font-body-md text-sm">
                  {dest.municipality}, {dest.provinceName}, Angola
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Gallery */}
      {gallery.length > 1 && (
        <DestinationGallery images={gallery} title={dest.title} />
      )}

      {/* 5. Reviews */}
      <ReviewsSection
        reviews={reviews}
        rating={dest.rating}
        reviewCount={dest.reviewCount}
      />

      {/* 6. Nearby destinations */}
      <div className="border-t border-savanna-sand bg-surface-container-low">
        <NearbyDestinations
          currentSlug={dest.slug}
          provinceSlug={dest.province}
          category={dest.category}
        />
      </div>
    </main>
  );
}
