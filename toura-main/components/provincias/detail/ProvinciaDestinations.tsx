"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stagger, fadeUp } from "@/lib/motion";
import type { Destination } from "@/types";
import { CATEGORIES } from "@/types";
import DestinationCard from "@/components/ui/DestinationCard";

interface Props {
  destinations: Destination[];
}

export default function ProvinciaDestinations({ destinations }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  const availableCategories = [
    "Todos",
    ...CATEGORIES.filter((c) => destinations.some((d) => d.category === c)),
  ];

  const filtered =
    activeCategory === "Todos"
      ? destinations
      : destinations.filter((d) => d.category === activeCategory);

  if (destinations.length === 0) return null;

  return (
    <section className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-16">
      {/* Header */}
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">
            Explorar
          </span>
          <h2 className="font-headline-sm text-headline-sm">
            Todos os Destinos
          </h2>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2">
          {availableCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 font-label-caps text-label-caps text-[10px] tracking-widest transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "border border-savanna-sand text-on-surface-variant hover:border-primary hover:text-primary"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {filtered.map((dest, i) => (
            <motion.div key={dest.id} variants={fadeUp}>
              <DestinationCard destination={dest} priority={i < 4} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="text-center font-body-md text-on-surface-variant py-12">
          Sem destinos nesta categoria.
        </p>
      )}
    </section>
  );
}
