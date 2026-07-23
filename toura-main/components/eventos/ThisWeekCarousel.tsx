import type { Event } from "@/types";

interface Props {
  events: Event[];
}

export default function ThisWeekCarousel({ events }: Props) {
  if (events.length === 0) return null;

  return (
    <section className="border-b border-savanna-sand bg-surface-container-low py-10">
      <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-label-caps text-label-caps text-on-surface tracking-widest text-[11px]">
            A ACONTECER EM ANGOLA
          </span>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none snap-x snap-mandatory">
          {events.map((event) => {
            const start = new Date(event.startDate);
            const day = start.getDate();
            const month = start.toLocaleDateString("pt-AO", { month: "short" }).replace(".", "");

            return (
              <a
                key={event.id}
                href={`/eventos/${event.slug}`}
                className="group flex items-center gap-4 border border-savanna-sand bg-background hover:border-primary/40 hover:shadow-md transition-all duration-300 p-4 min-w-[280px] snap-start shrink-0"
              >
                {/* Date block */}
                <div className="w-14 h-14 bg-primary/10 flex flex-col items-center justify-center shrink-0">
                  <span className="font-display-lg text-[20px] font-bold text-primary leading-none">{day}</span>
                  <span className="font-label-caps text-[10px] text-on-surface-variant tracking-widest uppercase">{month}</span>
                </div>

                {/* Info */}
                <div className="min-w-0">
                  <p className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest mb-1">
                    {event.category.toUpperCase()} · {event.provinceName.toUpperCase()}
                  </p>
                  <p className="font-headline-sm text-[14px] font-semibold leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
