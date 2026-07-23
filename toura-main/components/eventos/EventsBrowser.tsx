"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stagger, fadeUp } from "@/lib/motion";
import type { Event, EventCategory } from "@/types";
import { EVENT_CATEGORIES } from "@/types";
import { provinces } from "@/data/provinces";
import EventCard from "./EventCard";

type ViewMode = "grid" | "calendar" | "list";

const MONTHS = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

interface Props {
  events: Event[];
}

/* ── Calendar helpers ── */
function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // Mon=0
}

function eventSpansDays(event: Event): string[] {
  const result: string[] = [];
  const start = new Date(event.startDate);
  const end = new Date(event.endDate);
  const cur = new Date(start);
  while (cur <= end) {
    result.push(cur.toISOString().slice(0, 10));
    cur.setDate(cur.getDate() + 1);
  }
  return result;
}

export default function EventsBrowser({ events }: Props) {
  const today = new Date();
  const [view, setView] = useState<ViewMode>("grid");
  const [category, setCategory] = useState<EventCategory | "Todos">("Todos");
  const [province, setProvince] = useState("Todos");
  const [calYear, setCalYear] = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return events
      .filter((e) => category === "Todos" || e.category === category)
      .filter((e) => province === "Todos" || e.province === province)
      .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  }, [events, category, province]);

  /* Calendar: map day → events */
  const calendarDays = useMemo(() => {
    const map: Record<string, Event[]> = {};
    filtered.forEach((e) => {
      eventSpansDays(e).forEach((d) => {
        if (!map[d]) map[d] = [];
        if (!map[d].find((x) => x.id === e.id)) map[d].push(e);
      });
    });
    return map;
  }, [filtered]);

  /* List: group by month */
  const byMonth = useMemo(() => {
    const groups: Record<string, Event[]> = {};
    filtered.forEach((e) => {
      const key = e.startDate.slice(0, 7); // YYYY-MM
      if (!groups[key]) groups[key] = [];
      groups[key].push(e);
    });
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  /* Province options from events */
  const provinceOptions = useMemo(() => {
    const seen = new Set<string>();
    events.forEach((e) => seen.add(e.province));
    return provinces.filter((p) => seen.has(p.id));
  }, [events]);

  /* Calendar navigation */
  function prevMonth() {
    if (calMonth === 0) { setCalYear(y => y - 1); setCalMonth(11); }
    else setCalMonth(m => m - 1);
  }
  function nextMonth() {
    if (calMonth === 11) { setCalYear(y => y + 1); setCalMonth(0); }
    else setCalMonth(m => m + 1);
  }

  const daysInMonth = getDaysInMonth(calYear, calMonth);
  const firstDay = getFirstDayOfWeek(calYear, calMonth);

  /* Calendar selected day events */
  const selectedDayEvents = selectedDay ? (calendarDays[selectedDay] ?? []) : [];

  return (
    <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-12 pb-section-gap">
      {/* Controls bar */}
      <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
        {/* View toggle */}
        <div className="flex border border-savanna-sand">
          {(["grid", "calendar", "list"] as ViewMode[]).map((v) => {
            const icons = { grid: "grid_view", calendar: "calendar_month", list: "view_agenda" };
            const labels = { grid: "Grelha", calendar: "Calendário", list: "Lista" };
            return (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`flex items-center gap-2 px-4 py-2.5 font-label-caps text-label-caps text-[10px] tracking-widest transition-all ${
                  view === v ? "bg-primary text-white" : "text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">{icons[v]}</span>
                <span className="hidden sm:inline">{labels[v]}</span>
              </button>
            );
          })}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          <select
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            className="border border-savanna-sand bg-background font-label-caps text-label-caps text-[11px] tracking-widest px-3 py-2.5 text-on-surface-variant focus:outline-none focus:border-primary"
          >
            <option value="Todos">Todas as províncias</option>
            {provinceOptions.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setCategory("Todos")}
          className={`px-4 py-2 font-label-caps text-label-caps text-[10px] tracking-widest transition-all ${
            category === "Todos" ? "bg-primary text-white" : "border border-savanna-sand text-on-surface-variant hover:border-primary hover:text-primary"
          }`}
        >
          TODOS ({events.length})
        </button>
        {EVENT_CATEGORIES.map((cat) => {
          const n = events.filter((e) => e.category === cat).length;
          if (n === 0) return null;
          return (
            <button
              key={cat}
              onClick={() => setCategory(category === cat ? "Todos" : cat)}
              className={`px-4 py-2 font-label-caps text-label-caps text-[10px] tracking-widest transition-all ${
                category === cat ? "bg-primary text-white" : "border border-savanna-sand text-on-surface-variant hover:border-primary hover:text-primary"
              }`}
            >
              {cat.toUpperCase()} ({n})
            </button>
          );
        })}
      </div>

      {/* Count */}
      <p className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest mb-6">
        {filtered.length} EVENTO{filtered.length !== 1 ? "S" : ""}
        {category !== "Todos" ? ` · ${category.toUpperCase()}` : ""}
        {province !== "Todos" ? ` · ${provinces.find((p) => p.id === province)?.name.toUpperCase()}` : ""}
      </p>

      {/* ── GRID VIEW ── */}
      {view === "grid" && (
        <AnimatePresence mode="wait">
          <motion.div
            key={`${category}-${province}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {filtered.map((event) => (
              <motion.div key={event.id} variants={fadeUp}>
                <EventCard event={event} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}

      {/* ── CALENDAR VIEW ── */}
      {view === "calendar" && (
        <div className="grid lg:grid-cols-[1fr_300px] gap-6">
          <div className="border border-savanna-sand">
            {/* Calendar header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-savanna-sand">
              <button onClick={prevMonth} className="w-8 h-8 flex items-center justify-center hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-[18px]">chevron_left</span>
              </button>
              <span className="font-headline-sm text-[16px] font-semibold">
                {MONTHS[calMonth]} {calYear}
              </span>
              <button onClick={nextMonth} className="w-8 h-8 flex items-center justify-center hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>

            {/* Day-of-week headers */}
            <div className="grid grid-cols-7 border-b border-savanna-sand">
              {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((d) => (
                <div key={d} className="py-2 text-center font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant">
                  {d}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7">
              {/* Leading empty cells */}
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} className="border-b border-r border-savanna-sand min-h-[80px]" />
              ))}

              {/* Day cells */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const dayNum = i + 1;
                const dateStr = `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(dayNum).padStart(2, "0")}`;
                const dayEvents = calendarDays[dateStr] ?? [];
                const isToday = dateStr === today.toISOString().slice(0, 10);
                const isSelected = selectedDay === dateStr;
                const col = (firstDay + i) % 7;
                const isLastCol = col === 6;

                return (
                  <button
                    key={dayNum}
                    onClick={() => setSelectedDay(isSelected ? null : dateStr)}
                    className={`relative border-b border-savanna-sand min-h-[80px] p-2 text-left transition-colors ${
                      !isLastCol ? "border-r" : ""
                    } ${isSelected ? "bg-primary/5 border-primary/30" : dayEvents.length > 0 ? "hover:bg-surface-container cursor-pointer" : "cursor-default"}`}
                  >
                    <span className={`font-label-caps text-label-caps text-[11px] block mb-1.5 ${
                      isToday ? "w-6 h-6 bg-primary text-white flex items-center justify-center rounded-full text-[10px]" : "text-on-surface"
                    }`}>
                      {dayNum}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      {dayEvents.slice(0, 2).map((ev) => (
                        <div
                          key={ev.id}
                          className="text-[9px] font-medium bg-primary/15 text-primary px-1 py-0.5 truncate"
                        >
                          {ev.title}
                        </div>
                      ))}
                      {dayEvents.length > 2 && (
                        <div className="text-[9px] text-on-surface-variant">+{dayEvents.length - 2} mais</div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sidebar: selected day events */}
          <div className="border border-savanna-sand p-5 h-fit">
            {selectedDay ? (
              <>
                <p className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest mb-4">
                  {new Date(selectedDay + "T00:00:00").toLocaleDateString("pt-AO", { weekday: "long", day: "numeric", month: "long" }).toUpperCase()}
                </p>
                {selectedDayEvents.length > 0 ? (
                  <div className="flex flex-col gap-3">
                    {selectedDayEvents.map((ev) => (
                      <a
                        key={ev.id}
                        href={`/eventos/${ev.slug}`}
                        className="group flex gap-3 p-3 border border-savanna-sand hover:border-primary/40 transition-colors"
                      >
                        <div
                          className="w-12 h-12 bg-cover bg-center shrink-0"
                          style={{ backgroundImage: `url(${ev.image})` }}
                        />
                        <div className="min-w-0">
                          <p className="font-headline-sm text-[13px] font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                            {ev.title}
                          </p>
                          <p className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest mt-1">
                            {ev.location ?? ev.municipality}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="font-body-md text-sm text-on-surface-variant">Sem eventos neste dia.</p>
                )}
              </>
            ) : (
              <div className="text-center py-8">
                <span className="material-symbols-outlined text-[40px] text-on-surface-variant/20 block mb-3">event</span>
                <p className="font-body-md text-sm text-on-surface-variant">
                  Clique num dia para ver os eventos.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── LIST VIEW ── */}
      {view === "list" && (
        <div className="flex flex-col gap-12">
          {byMonth.map(([monthKey, monthEvents]) => {
            const [year, month] = monthKey.split("-").map(Number);
            const label = `${MONTHS[month - 1]} ${year}`;
            return (
              <div key={monthKey}>
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="font-headline-sm text-[20px] font-semibold">{label}</h3>
                  <div className="flex-1 h-px bg-savanna-sand" />
                  <span className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest">
                    {monthEvents.length} evento{monthEvents.length !== 1 ? "s" : ""}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  {monthEvents.map((event) => {
                    const start = new Date(event.startDate);
                    const end = new Date(event.endDate);
                    const isSameDay = event.startDate === event.endDate;
                    const fmtShort = (d: Date) =>
                      d.toLocaleDateString("pt-AO", { day: "numeric", month: "short" }).replace(".", "");
                    const dateStr = isSameDay ? fmtShort(start) : `${fmtShort(start)} – ${fmtShort(end)}`;

                    return (
                      <a
                        key={event.id}
                        href={`/eventos/${event.slug}`}
                        className="group flex items-start gap-0 border border-savanna-sand hover:border-primary/30 hover:shadow-md transition-all duration-300 overflow-hidden"
                      >
                        {/* Date + image block */}
                        <div className="relative w-28 md:w-36 shrink-0 self-stretch overflow-hidden">
                          <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `url(${event.image})` }}
                          />
                          <div className="absolute inset-0 bg-black/55" />
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-2">
                            <span className="font-label-caps text-[10px] tracking-widest text-white/80">
                              {start.toLocaleDateString("pt-AO", { month: "short" }).replace(".", "").toUpperCase()}
                            </span>
                            <span className="font-headline-sm text-[24px] font-bold leading-none mt-0.5">
                              {start.getDate()}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 p-5">
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <span className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest">
                              {event.category.toUpperCase()}
                            </span>
                            {event.free && (
                              <span className="font-label-caps text-label-caps text-primary text-[10px] tracking-widest">
                                · ENTRADA LIVRE
                              </span>
                            )}
                            <span className="font-label-caps text-label-caps text-on-surface-variant/50 text-[10px]">
                              {dateStr}
                            </span>
                          </div>
                          <h3 className="font-headline-sm text-[17px] font-semibold group-hover:text-primary transition-colors line-clamp-1 mb-1">
                            {event.title}
                          </h3>
                          <p className="font-body-md text-sm text-on-surface-variant line-clamp-2">
                            {event.description}
                          </p>
                          <div className="flex items-center gap-1.5 mt-3 text-on-surface-variant">
                            <span className="material-symbols-outlined text-[13px]">location_on</span>
                            <span className="font-label-caps text-label-caps text-[10px] tracking-widest">
                              {event.location ?? `${event.municipality}, ${event.provinceName}`}
                            </span>
                          </div>
                        </div>

                        <span className="material-symbols-outlined text-on-surface-variant/30 group-hover:text-primary transition-colors shrink-0 self-center mr-5">
                          arrow_forward
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <span className="material-symbols-outlined text-[64px] text-on-surface-variant/20 block mb-4">event_busy</span>
          <p className="font-headline-sm text-headline-sm mb-2">Nenhum evento encontrado</p>
          <p className="font-body-md text-on-surface-variant mb-6">
            Tente ajustar os filtros para encontrar eventos.
          </p>
          <button
            onClick={() => { setCategory("Todos"); setProvince("Todos"); }}
            className="font-label-caps text-label-caps text-primary border border-primary px-6 py-2.5 hover:bg-primary hover:text-white transition-colors"
          >
            LIMPAR FILTROS
          </button>
        </div>
      )}
    </div>
  );
}
