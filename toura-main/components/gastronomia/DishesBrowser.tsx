"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stagger, fadeUp } from "@/lib/motion";
import type { Dish, DishType } from "@/types";
import { DISH_TYPES } from "@/types";
import { provinces } from "@/data/provinces";
import DishCard from "./DishCard";

interface Props {
  dishes: Dish[];
}

export default function DishesBrowser({ dishes }: Props) {
  const [type, setType] = useState<DishType | "Todos">("Todos");
  const [province, setProvince] = useState("Todos");

  const provinceOptions = useMemo(() => {
    const seen = new Set(dishes.map((d) => d.province));
    return provinces.filter((p) => seen.has(p.id));
  }, [dishes]);

  const filtered = useMemo(() =>
    dishes
      .filter((d) => type === "Todos" || d.type === type)
      .filter((d) => province === "Todos" || d.province === province),
    [dishes, type, province]
  );

  return (
    <div>
      {/* Type pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setType("Todos")}
          className={`px-4 py-2 font-label-caps text-label-caps text-[10px] tracking-widest transition-all ${type === "Todos" ? "bg-primary text-white" : "border border-savanna-sand text-on-surface-variant hover:border-primary hover:text-primary"}`}
        >
          TODOS ({dishes.length})
        </button>
        {DISH_TYPES.map((t) => {
          const n = dishes.filter((d) => d.type === t).length;
          if (n === 0) return null;
          return (
            <button key={t} onClick={() => setType(type === t ? "Todos" : t)}
              className={`px-4 py-2 font-label-caps text-label-caps text-[10px] tracking-widest transition-all ${type === t ? "bg-primary text-white" : "border border-savanna-sand text-on-surface-variant hover:border-primary hover:text-primary"}`}
            >
              {t.toUpperCase()} ({n})
            </button>
          );
        })}
      </div>

      {/* Province filter */}
      <div className="flex items-center gap-4 mb-8">
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
        <span className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest">
          {filtered.length} PRATO{filtered.length !== 1 ? "S" : ""}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${type}-${province}`}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={stagger} initial="hidden" animate="show"
        >
          {filtered.map((dish) => (
            <motion.div key={dish.id} variants={fadeUp}>
              <DishCard dish={dish} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="py-16 text-center">
          <span className="material-symbols-outlined text-[56px] text-on-surface-variant/20 block mb-4">restaurant</span>
          <p className="font-body-md text-on-surface-variant">Nenhum prato encontrado com estes filtros.</p>
          <button onClick={() => { setType("Todos"); setProvince("Todos"); }}
            className="mt-4 font-label-caps text-label-caps text-primary border border-primary px-5 py-2 hover:bg-primary hover:text-white transition-colors">
            LIMPAR FILTROS
          </button>
        </div>
      )}
    </div>
  );
}
