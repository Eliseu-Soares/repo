"use client";

import { useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { searchAll, highlightText } from "@/lib/filters";
import { destinations } from "@/data/destinations";
import { events } from "@/data/events";
import { fadeUp, stagger, EASE } from "@/lib/motion";
import type { Destination, Event } from "@/types";

interface Props {
  initialQuery: string;
}

export default function SearchResults({ initialQuery }: Props) {
  const query = initialQuery.trim();

  const results = useMemo(() => {
    if (!query) return { destinations, events };
    return searchAll(query);
  }, [query]);

  const hasResults =
    results.destinations.length > 0 || results.events.length > 0;
  const totalCount = results.destinations.length + results.events.length;
  const isFiltered = !!query;

  return (
    <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-12 pb-section-gap">
      {/* Header row */}
      <AnimatePresence mode="wait">
        {isFiltered ? (
          <motion.div
            key="filtered-header"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="mb-10"
          >
            {hasResults ? (
              <p className="font-body-md text-on-surface-variant">
                <span className="font-semibold text-on-surface">
                  {totalCount}
                </span>{" "}
                resultado{totalCount !== 1 ? "s" : ""} para{" "}
                <span className="text-primary font-semibold">"{query}"</span>
              </p>
            ) : (
              <NoResults query={query} />
            )}
          </motion.div>
        ) : (
          <motion.div
            key="all-header"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="mb-10"
          >
            <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-2 uppercase">
              Descobrir Angola
            </span>
            <p className="font-body-md text-on-surface-variant">
              Todos os destinos e eventos disponíveis —{" "}
              <span className="font-semibold text-on-surface">
                {destinations.length} destinos
              </span>{" "}
              e{" "}
              <span className="font-semibold text-on-surface">
                {events.length} eventos
              </span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* No results state */}
      {isFiltered && !hasResults ? null : (
        <>
          {/* Destinations grid */}
          {results.destinations.length > 0 && (
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary text-[22px]">
                  travel_explore
                </span>
                <h2 className="font-headline-sm text-headline-sm">
                  {isFiltered ? "Destinos" : "Todos os Destinos"}
                </h2>
                <span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-container px-2.5 py-1">
                  {results.destinations.length}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`dest-${query}`}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  variants={stagger}
                  initial="hidden"
                  animate="show"
                >
                  {results.destinations.map((dest, i) => (
                    <motion.div key={dest.id} variants={fadeUp}>
                      <DestinationResultCard
                        dest={dest}
                        query={query}
                        priority={i < 4}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </section>
          )}

          {/* Events section */}
          {results.events.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary text-[22px]">
                  event
                </span>
                <h2 className="font-headline-sm text-headline-sm">
                  {isFiltered ? "Eventos" : "Próximos Eventos"}
                </h2>
                <span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-container px-2.5 py-1">
                  {results.events.length}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`evt-${query}`}
                  className="flex flex-col gap-4"
                  variants={stagger}
                  initial="hidden"
                  animate="show"
                >
                  {results.events.map((event) => (
                    <motion.div key={event.id} variants={fadeUp}>
                      <EventResultCard event={event} query={query} />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </section>
          )}
        </>
      )}
    </div>
  );
}

/* ── Sub-components ──────────────────────────────────────────── */

function DestinationResultCard({
  dest,
  query,
  priority,
}: {
  dest: Destination;
  query: string;
  priority?: boolean;
}) {
  return (
    <a
      href={`/destinos/${dest.slug}`}
      className="group flex flex-col overflow-hidden border border-savanna-sand hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <Image
          src={dest.image}
          alt={dest.title}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-2">
          <span className="font-label-caps text-label-caps text-secondary">
            {dest.provinceName.toUpperCase()} · {dest.category.toUpperCase()}
          </span>
          <div className="flex items-center gap-1 text-primary">
            <span
              className="material-symbols-outlined text-[14px]"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              star
            </span>
            <span className="font-label-caps text-label-caps font-bold">
              {dest.rating.toFixed(1)}
            </span>
          </div>
        </div>

        <h3
          className="font-headline-sm text-[18px] font-semibold group-hover:text-primary transition-colors line-clamp-1 [&_mark]:bg-secondary/20 [&_mark]:text-secondary-container"
          dangerouslySetInnerHTML={{
            __html: query ? highlightText(dest.title, query) : dest.title,
          }}
        />
        <p
          className="font-body-md text-sm text-on-surface-variant mt-1 line-clamp-2 flex-1 [&_mark]:bg-secondary/20 [&_mark]:text-secondary-container"
          dangerouslySetInnerHTML={{
            __html: query
              ? highlightText(dest.description, query)
              : dest.description,
          }}
        />

        <div className="mt-4 flex items-center gap-1 text-primary font-label-caps text-label-caps border-b border-primary pb-0.5 w-fit group-hover:text-secondary group-hover:border-secondary transition-colors">
          <span>Explorar Guia</span>
          <span className="material-symbols-outlined text-[13px]">
            arrow_forward
          </span>
        </div>
      </div>
    </a>
  );
}

function EventResultCard({ event, query }: { event: Event; query: string }) {
  const startDate = new Date(event.startDate);
  const day = startDate.getDate();
  const month = startDate
    .toLocaleDateString("pt-AO", { month: "short" })
    .toUpperCase()
    .replace(".", "");

  return (
    <a
      href={`/eventos/${event.slug}`}
      className="group flex items-start gap-0 border border-savanna-sand hover:border-primary/30 hover:shadow-md transition-all duration-300 overflow-hidden"
    >
      {/* Event image with date overlay */}
      <div className="relative w-32 md:w-48 shrink-0 self-stretch overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <span className="font-label-caps text-label-caps text-white/80">
            {month}
          </span>
          <span className="font-headline-sm text-headline-sm leading-none mt-0.5">
            {day}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 p-5">
        <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">
          {event.category.toUpperCase()} · {event.provinceName.toUpperCase()}
          {event.free && (
            <span className="ml-2 text-primary">· ENTRADA LIVRE</span>
          )}
        </span>
        <h3
          className="font-headline-sm text-[18px] font-semibold group-hover:text-primary transition-colors line-clamp-1 [&_mark]:bg-secondary/20 [&_mark]:text-secondary-container"
          dangerouslySetInnerHTML={{
            __html: query ? highlightText(event.title, query) : event.title,
          }}
        />
        <p
          className="font-body-md text-sm text-on-surface-variant mt-1 line-clamp-2 [&_mark]:bg-secondary/20 [&_mark]:text-secondary-container"
          dangerouslySetInnerHTML={{
            __html: query
              ? highlightText(event.description, query)
              : event.description,
          }}
        />
      </div>

      <span className="material-symbols-outlined text-on-surface-variant/30 group-hover:text-primary transition-colors shrink-0 self-center mr-5">
        arrow_forward
      </span>
    </a>
  );
}

function NoResults({ query }: { query: string }) {
  const SUGGESTIONS = ["Kalandula", "Luanda", "Namibe", "Kissama", "Benguela", "Safari"];

  return (
    <div className="py-16 text-center">
      <span className="material-symbols-outlined text-[64px] text-on-surface-variant/20 mb-6 block">
        search_off
      </span>
      <h2 className="font-headline-sm text-headline-sm mb-3">
        Sem resultados para &ldquo;{query}&rdquo;
      </h2>
      <p className="font-body-md text-on-surface-variant mb-10 max-w-md mx-auto">
        Tente um termo diferente ou explore estas sugestões populares.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        {SUGGESTIONS.filter(
          (s) => !s.toLowerCase().includes(query.toLowerCase())
        )
          .slice(0, 6)
          .map((s) => (
            <a
              key={s}
              href={`/pesquisa?q=${encodeURIComponent(s)}`}
              className="px-5 py-2.5 border border-savanna-sand font-label-caps text-label-caps text-on-surface-variant hover:border-primary hover:text-primary transition-all"
            >
              {s.toUpperCase()}
            </a>
          ))}
      </div>
    </div>
  );
}
