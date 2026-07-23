"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import type { Event } from "@/types";

interface Props {
  event: Event;
}

export default function EventHero({ event }: Props) {
  const startDate = new Date(event.startDate);
  const endDate = new Date(event.endDate);
  const isSameDay = event.startDate === event.endDate;

  const fmtLong = (d: Date) =>
    d.toLocaleDateString("pt-AO", { day: "numeric", month: "long", year: "numeric" });

  const dateLabel = isSameDay
    ? fmtLong(startDate)
    : `${fmtLong(startDate)} – ${fmtLong(endDate)}`;

  return (
    <section className="relative overflow-hidden" style={{ height: 540 }}>
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${event.image})` }}
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: EASE }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />

      {/* Breadcrumb */}
      <div className="absolute top-6 left-6 lg:left-12 z-10">
        <nav className="flex items-center gap-2">
          <a href="/" className="font-label-caps text-label-caps text-white/60 hover:text-white transition-colors">Início</a>
          <span className="material-symbols-outlined text-[14px] text-white/40">chevron_right</span>
          <a href="/eventos" className="font-label-caps text-label-caps text-white/60 hover:text-white transition-colors">Eventos</a>
          <span className="material-symbols-outlined text-[14px] text-white/40">chevron_right</span>
          <span className="font-label-caps text-label-caps text-white/90 line-clamp-1 max-w-[200px]">{event.title}</span>
        </nav>
      </div>

      <div className="relative z-10 h-full flex items-center px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="max-w-2xl">
          <motion.span
            className="font-label-caps text-label-caps text-secondary tracking-widest block mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          >
            {event.category.toUpperCase()} · {event.provinceName.toUpperCase()}
          </motion.span>

          <motion.h1
            className="font-display-lg text-display-lg-mobile md:text-[52px] font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: EASE }}
          >
            {event.title}
          </motion.h1>

          <motion.div
            className="flex flex-wrap gap-5 items-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
          >
            <div className="flex items-center gap-2 text-white/80">
              <span className="material-symbols-outlined text-secondary text-[18px]">calendar_today</span>
              <span className="font-label-caps text-label-caps text-[11px] tracking-widest">{dateLabel}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <span className="material-symbols-outlined text-secondary text-[18px]">location_on</span>
              <span className="font-label-caps text-label-caps text-[11px] tracking-widest">
                {event.location ?? `${event.municipality}, ${event.provinceName}`}
              </span>
            </div>
            {event.free ? (
              <span className="font-label-caps text-label-caps text-[11px] tracking-widest bg-primary text-white px-3 py-1">
                ENTRADA LIVRE
              </span>
            ) : event.entry ? (
              <span className="font-label-caps text-label-caps text-[11px] tracking-widest border border-white/50 text-white px-3 py-1">
                {event.entry}
              </span>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
