import { events } from "@/data/events";
import FeaturedEventBanner from "@/components/eventos/FeaturedEventBanner";
import ThisWeekCarousel from "@/components/eventos/ThisWeekCarousel";
import EventsBrowser from "@/components/eventos/EventsBrowser";
import { itemListJsonLd, makeCanonical } from "@/lib/seo";

export const revalidate = 86400;

export function generateMetadata() {
  return {
    title: "Eventos | Toura Angola",
    description:
      "Festivais, eventos culturais, musicais e desportivos em Angola — calendário completo com todos os eventos do país.",
    openGraph: {
      title: "Agenda de Angola 2026 | Toura",
      description: "Não perca nenhum festival, concerto ou evento cultural em Angola.",
    },
    alternates: { canonical: makeCanonical("/eventos") },
  };
}

const TODAY = new Date("2026-06-30");
const ONE_WEEK = new Date("2026-07-07");

export default function EventosPage() {
  const sorted = [...events].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );

  const upcoming = sorted.filter((e) => new Date(e.startDate) >= TODAY);
  const featuredEvent =
    upcoming.find((e) => e.featured) ?? upcoming[0] ?? sorted[sorted.length - 1];

  const thisWeek = sorted.filter((e) => {
    const start = new Date(e.startDate);
    return start >= TODAY && start <= ONE_WEEK;
  });

  const jsonLd = itemListJsonLd(
    "Eventos em Angola",
    "/eventos",
    sorted.map((e) => ({ name: e.title, url: `/eventos/${e.slug}` }))
  );

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero — Featured event banner */}
      {featuredEvent && <FeaturedEventBanner event={featuredEvent} />}

      {/* This week carousel */}
      <ThisWeekCarousel events={thisWeek} />

      {/* Page header */}
      <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto pt-14 pb-2">
        <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-4 uppercase">
          Agenda 2026
        </span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight mb-4 max-w-2xl">
          Eventos em Angola
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Do carnaval de Luanda aos festivais de praia do sul — encontre o evento que combina
          com a sua próxima viagem a Angola.
        </p>
      </div>

      {/* Events browser — grid/calendar/list */}
      <EventsBrowser events={events} />
    </main>
  );
}
