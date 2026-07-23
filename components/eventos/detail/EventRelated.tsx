import type { Event } from "@/types";
import EventCard from "@/components/eventos/EventCard";

interface Props {
  current: Event;
  all: Event[];
}

export default function EventRelated({ current, all }: Props) {
  const related = all
    .filter((e) => e.id !== current.id)
    .sort((a, b) => {
      const sameCategory = (a.category === current.category ? 1 : 0) - (b.category === current.category ? 1 : 0);
      if (sameCategory !== 0) return -sameCategory;
      const sameProvince = (a.province === current.province ? 1 : 0) - (b.province === current.province ? 1 : 0);
      return -sameProvince;
    })
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="border-t border-savanna-sand bg-surface-container-low">
      <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-16">
        <div className="mb-10">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">
            Próximos Eventos
          </span>
          <h2 className="font-headline-sm text-headline-sm">Outros Eventos que Podem Interessar</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/eventos"
            className="inline-flex items-center gap-2 border border-savanna-sand font-label-caps text-label-caps text-[11px] tracking-widest px-8 py-3 text-on-surface-variant hover:border-primary hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">calendar_month</span>
            VER TODOS OS EVENTOS
          </a>
        </div>
      </div>
    </section>
  );
}
