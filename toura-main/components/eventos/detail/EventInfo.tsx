import type { Event } from "@/types";

interface Props {
  event: Event;
}

export default function EventInfo({ event }: Props) {
  const startDate = new Date(event.startDate);
  const endDate = new Date(event.endDate);
  const isSameDay = event.startDate === event.endDate;
  const days = Math.ceil((endDate.getTime() - startDate.getTime()) / 86400000) + 1;

  const fmtFull = (d: Date) =>
    d.toLocaleDateString("pt-AO", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  const rows: { icon: string; label: string; value: string }[] = [
    {
      icon: "event",
      label: "Data de início",
      value: fmtFull(startDate),
    },
    ...(isSameDay
      ? []
      : [{ icon: "event_available", label: "Data de encerramento", value: fmtFull(endDate) }]),
    {
      icon: "timer",
      label: "Duração",
      value: days === 1 ? "1 dia" : `${days} dias`,
    },
    {
      icon: "location_on",
      label: "Local",
      value: event.location ?? `${event.municipality}, ${event.provinceName}`,
    },
    {
      icon: "map",
      label: "Província",
      value: event.provinceName,
    },
    ...(event.schedule
      ? [{ icon: "schedule", label: "Horário", value: event.schedule }]
      : []),
    {
      icon: "sell",
      label: "Entrada",
      value: event.free ? "Entrada Gratuita" : (event.entry ?? "Consultar organização"),
    },
  ];

  return (
    <div className="border border-savanna-sand p-6 h-fit">
      <h2 className="font-headline-sm text-[18px] font-semibold mb-6 pb-4 border-b border-savanna-sand">
        Informações do Evento
      </h2>

      <dl className="flex flex-col gap-4">
        {rows.map(({ icon, label, value }) => (
          <div key={label} className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0">{icon}</span>
            <div>
              <dt className="font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant mb-0.5">
                {label.toUpperCase()}
              </dt>
              <dd className="font-body-md text-sm text-on-surface capitalize">{value}</dd>
            </div>
          </div>
        ))}
      </dl>

      <a
        href={`/provincias/${event.province}`}
        className="mt-6 flex items-center gap-2 font-label-caps text-label-caps text-[11px] tracking-widest text-on-surface-variant hover:text-primary transition-colors border-t border-savanna-sand pt-5"
      >
        <span className="material-symbols-outlined text-[16px]">travel_explore</span>
        Explorar {event.provinceName}
      </a>
    </div>
  );
}
