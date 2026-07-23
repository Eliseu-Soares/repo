"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import type { Province } from "@/types";

export default function ProvinciaHero({ province }: { province: Province }) {
  return (
    <section className="relative overflow-hidden" style={{ height: 560 }}>
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${province.image})` }}
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: EASE }}
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />

      {/* Breadcrumb */}
      <div className="absolute top-6 left-6 lg:left-12 z-10">
        <nav className="flex items-center gap-2">
          <a
            href="/"
            className="font-label-caps text-label-caps text-white/60 hover:text-white transition-colors"
          >
            Início
          </a>
          <span className="material-symbols-outlined text-[14px] text-white/40">
            chevron_right
          </span>
          <a
            href="/provincias"
            className="font-label-caps text-label-caps text-white/60 hover:text-white transition-colors"
          >
            Províncias
          </a>
          <span className="material-symbols-outlined text-[14px] text-white/40">
            chevron_right
          </span>
          <span className="font-label-caps text-label-caps text-white/90">
            {province.name}
          </span>
        </nav>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="max-w-2xl">
          <motion.span
            className="font-label-caps text-label-caps text-secondary tracking-widest block mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          >
            REGIÃO {province.region.toUpperCase()} · CAPITAL: {province.capital.toUpperCase()}
          </motion.span>

          <motion.h1
            className="font-display-lg text-display-lg-mobile md:text-display-lg text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: EASE }}
          >
            {province.name}
          </motion.h1>

          <motion.p
            className="text-white/85 font-body-lg text-body-lg mb-10 max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
          >
            {province.description}
          </motion.p>

          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: EASE }}
          >
            <div className="text-center">
              <span className="font-display-lg text-[36px] font-bold text-secondary block leading-none">
                {province.destinationCount}
              </span>
              <span className="font-label-caps text-label-caps text-white/60 text-[10px] tracking-widest">
                DESTINOS
              </span>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <a
              href={`/mapa?provincia=${province.slug}`}
              className="flex items-center gap-2 border border-white/40 px-5 py-3 text-white font-label-caps text-label-caps hover:bg-white/15 transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">map</span>
              VER NO MAPA
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
