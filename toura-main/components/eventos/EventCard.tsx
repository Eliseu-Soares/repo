import type { Event } from "@/types";
import FavoriteButton from "@/components/ui/FavoriteButton";

const CATEGORY_COLORS: Record<string, string> = {
  Festival: "bg-primary/15 text-primary",
  Cultural: "bg-secondary/15 text-secondary",
  Desportivo: "bg-[#2563EB]/15 text-[#2563EB]",
  Gastronómico: "bg-error/15 text-error",
  Musical: "bg-[#7c3aed]/15 text-[#7c3aed]",
};

interface Props {
  event: Event;
  priority?: boolean;
}

export default function EventCard({ event, priority = false }: Props) {
  void priority;
  const startDate = new Date(event.startDate);
  const endDate = new Date(event.endDate);
  const isSameDay = event.startDate === event.endDate;

  const day = startDate.getDate();
  const month = startDate.toLocaleDateString("pt-AO", { month: "short" }).replace(".", "");
  const endDay = endDate.getDate();
  const endMonth = endDate.toLocaleDateString("pt-AO", { month: "short" }).replace(".", "");

  const dateLabel = isSameDay
    ? `${day} ${month}`
    : `${day}–${endDay} ${startDate.getMonth() === endDate.getMonth() ? month : `${month} / ${endMonth}`}`;

  return (
    <a
      href={`/eventos/${event.slug}`}
      className="group flex flex-col overflow-hidden border border-savanna-sand hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-background"
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${event.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className={`font-label-caps text-label-caps px-2.5 py-1 text-[10px] tracking-widest ${CATEGORY_COLORS[event.category] ?? "bg-surface/80 text-on-surface"} backdrop-blur-sm`}>
            {event.category.toUpperCase()}
          </span>
        </div>

        {/* Free badge or favorite */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
          {event.free && (
            <span className="font-label-caps text-label-caps px-2.5 py-1 text-[10px] tracking-widest bg-primary text-white">
              ENTRADA LIVRE
            </span>
          )}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FavoriteButton
              item={{
                id: `evento-${event.slug}`,
                type: "evento",
                slug: event.slug,
                title: event.title,
                image: event.image,
                subtitle: event.provinceName,
              }}
            />
          </div>
        </div>

        {/* Date strip */}
        <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1.5">
          <span className="font-label-caps text-label-caps text-white text-[11px] tracking-widest uppercase">
            {dateLabel} {startDate.getFullYear()}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col gap-3">
        <h3 className="font-headline-sm text-[17px] font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
          {event.title}
        </h3>

        <p className="font-body-md text-sm text-on-surface-variant line-clamp-2 flex-1">
          {event.description}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-savanna-sand">
          <div className="flex items-center gap-1.5 text-on-surface-variant">
            <span className="material-symbols-outlined text-[14px]">location_on</span>
            <span className="font-label-caps text-label-caps text-[10px] tracking-widest">
              {event.municipality}, {event.provinceName}
            </span>
          </div>
          <div className="flex items-center gap-1 text-primary font-label-caps text-label-caps text-[11px] border-b border-primary pb-0.5 group-hover:text-secondary group-hover:border-secondary transition-colors">
            <span>Ver evento</span>
            <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
          </div>
        </div>
      </div>
    </a>
  );
}
