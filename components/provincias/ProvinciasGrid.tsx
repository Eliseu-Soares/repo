"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";
import { provinces } from "@/data/provinces";
import ProvinciaCard from "./ProvinciaCard";

const REGIONS = ["Todas", "Litoral", "Norte", "Centro", "Sul", "Leste"] as const;
type RegionFilter = (typeof REGIONS)[number];

export default function ProvinciasGrid() {
  const [active, setActive] = useState<RegionFilter>("Todas");

  const filtered =
    active === "Todas" ? provinces : provinces.filter((p) => p.region === active);

  return (
    <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-12 pb-section-gap">
      {/* Region filter pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {REGIONS.map((region) => (
          <button
            key={region}
            onClick={() => setActive(region)}
            className={`px-5 py-2.5 font-label-caps text-label-caps tracking-widest transition-all ${
              active === region
                ? "bg-primary text-white"
                : "border border-savanna-sand text-on-surface-variant hover:border-primary hover:text-primary"
            }`}
          >
            {region.toUpperCase()}
          </button>
        ))}
        {active !== "Todas" && (
          <span className="self-center font-label-caps text-label-caps text-on-surface-variant ml-2">
            {filtered.length} províncias
          </span>
        )}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {filtered.map((province) => (
            <motion.div key={province.id} variants={fadeUp}>
              <ProvinciaCard province={province} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Regional stats */}
      <motion.div
        className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-0 border border-savanna-sand"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6 }}
      >
        {(["Litoral", "Norte", "Centro", "Sul", "Leste"] as const).map((region, i) => {
          const count = provinces.filter((p) => p.region === region).length;
          return (
            <button
              key={region}
              onClick={() => setActive(active === region ? "Todas" : region)}
              className={`p-6 text-center border-r border-savanna-sand last:border-r-0 hover:bg-surface-container transition-colors ${
                active === region ? "bg-surface-container" : ""
              }`}
            >
              <span className="font-display-lg text-[32px] font-bold text-primary block mb-1">
                {count}
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest">
                {region.toUpperCase()}
              </span>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
}
