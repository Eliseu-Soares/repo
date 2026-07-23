import type { Event } from "@/types";

interface Props {
  events: Event[];
}

export default function ProvinciaEvents({ events }: Props) {
  if (events.length === 0) return null;

  return (
    <section className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-16 border-t border-savanna-sand">
      <div className="mb-10">
        <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">
          Agenda
        </span>
        <h2 className="font-headline-sm text-headline-sm">
          Festivais e Eventos
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {events.map((event) => {
          const startDate = new Date(event.startDate);
          const day = startDate.getDate();
          const month = startDate
            .toLocaleDateString("pt-AO", { month: "short" })
            .toUpperCase()
            .replace(".", "");

          return (
            <a
              key={event.id}
              href={`/eventos/${event.slug}`}
              className="group flex items-start gap-0 border border-savanna-sand hover:border-primary/30 hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Date image block */}
              <div className="relative w-28 md:w-40 shrink-0 self-stretch overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50" />
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
                  {event.category.toUpperCase()}
                  {event.free && (
                    <span className="ml-2 text-primary">· ENTRADA LIVRE</span>
                  )}
                </span>
                <h3 className="font-headline-sm text-[18px] font-semibold group-hover:text-primary transition-colors line-clamp-1">
                  {event.title}
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant mt-1 line-clamp-2">
                  {event.description}
                </p>
              </div>

              <span className="material-symbols-outlined text-on-surface-variant/30 group-hover:text-primary transition-colors shrink-0 self-center mr-5">
                arrow_forward
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
