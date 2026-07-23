import type { Event } from "@/types";

interface Props {
  event: Event;
}

export default function FeaturedEventBanner({ event }: Props) {
  const startDate = new Date(event.startDate);
  const endDate = new Date(event.endDate);
  const isSameDay = event.startDate === event.endDate;

  const fmt = (d: Date) =>
    d.toLocaleDateString("pt-AO", { day: "numeric", month: "long", year: "numeric" });

  const dateLabel = isSameDay ? fmt(startDate) : `${fmt(startDate)} – ${fmt(endDate)}`;

  return (
    <section className="relative overflow-hidden" style={{ minHeight: 480 }}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${event.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-transparent" />

      <div className="relative z-10 px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto h-full flex items-center py-20">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="font-label-caps text-label-caps text-secondary tracking-widest text-[11px]">
              EVENTO EM DESTAQUE
            </span>
          </div>

          <h2 className="font-display-lg text-display-lg-mobile md:text-[48px] font-bold text-white leading-tight mb-5">
            {event.title}
          </h2>

          <p className="font-body-lg text-body-lg text-white/80 mb-8 leading-relaxed">
            {event.description}
          </p>

          <div className="flex flex-wrap gap-6 mb-10 text-white/70">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[18px]">calendar_today</span>
              <span className="font-label-caps text-label-caps text-[11px] tracking-widest">{dateLabel}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[18px]">location_on</span>
              <span className="font-label-caps text-label-caps text-[11px] tracking-widest">
                {event.location ?? `${event.municipality}, ${event.provinceName}`}
              </span>
            </div>
            {event.free ? (
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">sell</span>
                <span className="font-label-caps text-label-caps text-[11px] tracking-widest text-secondary">
                  ENTRADA LIVRE
                </span>
              </div>
            ) : event.entry ? (
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">sell</span>
                <span className="font-label-caps text-label-caps text-[11px] tracking-widest">{event.entry}</span>
              </div>
            ) : null}
          </div>

          <a
            href={`/eventos/${event.slug}`}
            className="inline-flex items-center gap-3 bg-primary text-white font-label-caps text-label-caps tracking-widest px-8 py-4 hover:bg-primary-container transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">event</span>
            VER DETALHES DO EVENTO
          </a>
        </div>
      </div>
    </section>
  );
}
