import { notFound } from "next/navigation";
import { events } from "@/data/events";
import { breadcrumbJsonLd, makeCanonical } from "@/lib/seo";
import EventHero from "@/components/eventos/detail/EventHero";
import EventInfo from "@/components/eventos/detail/EventInfo";
import EventRelated from "@/components/eventos/detail/EventRelated";
import EventLocationMapLoader from "@/components/eventos/detail/EventLocationMapLoader";

export const revalidate = 86400;

interface PageParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageParams) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return {};

  const startDate = new Date(event.startDate).toLocaleDateString("pt-AO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return {
    title: `${event.title} | Eventos | Toura Angola`,
    description: `${event.description} — ${startDate} em ${event.location ?? event.municipality}.`,
    openGraph: {
      title: event.title,
      description: event.description,
      images: [{ url: event.image, alt: event.title }],
    },
    alternates: { canonical: makeCanonical(`/eventos/${slug}`) },
  };
}

export default async function EventDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    image: event.image,
    isAccessibleForFree: event.free,
    location: {
      "@type": "Place",
      name: event.location ?? event.municipality,
      address: {
        "@type": "PostalAddress",
        addressLocality: event.municipality,
        addressRegion: event.provinceName,
        addressCountry: "AO",
      },
      ...(event.coordinates
        ? { geo: { "@type": "GeoCoordinates", latitude: event.coordinates.lat, longitude: event.coordinates.lng } }
        : {}),
    },
    organizer: { "@type": "Organization", name: "Ministério do Turismo de Angola" },
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
              { name: "Eventos", path: "/eventos" },
              { name: event.title, path: `/eventos/${event.slug}` },
            ])
          ),
        }}
      />

      {/* 1. Hero */}
      <EventHero event={event} />

      {/* 2. Main content */}
      <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-14">
        <div className="grid lg:grid-cols-[1fr_340px] gap-10">
          {/* Left: description + gallery + map */}
          <div>
            {/* Description */}
            <div className="mb-10">
              <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-4 uppercase">
                Sobre o Evento
              </span>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Gallery */}
            {event.gallery && event.gallery.length > 0 && (
              <div className="mb-10">
                <h2 className="font-headline-sm text-[18px] font-semibold mb-5 pb-4 border-b border-savanna-sand">
                  Edições Anteriores
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {event.gallery.map((src, i) => (
                    <div
                      key={i}
                      className="overflow-hidden"
                      style={{ aspectRatio: "4/3" }}
                    >
                      <img
                        src={src}
                        alt={`${event.title} — foto ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Map */}
            {event.coordinates && (
              <div>
                <h2 className="font-headline-sm text-[18px] font-semibold mb-5 pb-4 border-b border-savanna-sand">
                  Localização
                </h2>
                <div
                  className="border border-savanna-sand overflow-hidden"
                  style={{ height: 360 }}
                >
                  <EventLocationMapLoader
                    lat={event.coordinates.lat}
                    lng={event.coordinates.lng}
                    title={event.title}
                    location={event.location ?? event.municipality}
                  />
                </div>
                <p className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest mt-3">
                  <span className="material-symbols-outlined text-[13px] align-middle mr-1">location_on</span>
                  {event.location ?? `${event.municipality}, ${event.provinceName}`}
                </p>
              </div>
            )}
          </div>

          {/* Right: info card + CTA */}
          <div className="space-y-5">
            <EventInfo event={event} />

            {/* CTA */}
            <div className="border border-savanna-sand p-6 bg-surface-container-low">
              <p className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest mb-3">
                PLANEIE A SUA VIAGEM
              </p>
              <p className="font-body-md text-sm text-on-surface mb-5">
                Quer assistir a este evento? Explore os destinos e alojamentos próximos em {event.provinceName}.
              </p>
              <a
                href={`/provincias/${event.province}`}
                className="flex items-center justify-center gap-2 bg-primary text-white font-label-caps text-label-caps text-[11px] tracking-widest px-6 py-3 hover:bg-primary-container transition-colors w-full"
              >
                <span className="material-symbols-outlined text-[16px]">travel_explore</span>
                EXPLORAR {event.provinceName.toUpperCase()}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Related events */}
      <EventRelated current={event} all={events} />

      {/* 4. Back nav */}
      <div className="border-t border-savanna-sand py-10">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto">
          <a
            href="/eventos"
            className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Todos os Eventos
          </a>
        </div>
      </div>
    </main>
  );
}
