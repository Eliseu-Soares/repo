"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stagger, fadeUp } from "@/lib/motion";
import type { Experience, ExperienceCategory, ExperienceDifficulty } from "@/types";
import { EXPERIENCE_CATEGORIES, EXPERIENCE_DIFFICULTIES } from "@/types";
import { provinces } from "@/data/provinces";
import ExperienceCard from "./ExperienceCard";

interface Props {
  experiences: Experience[];
}

export default function ExperiencesBrowser({ experiences }: Props) {
  const [category, setCategory] = useState<ExperienceCategory | "Todos">("Todos");
  const [difficulty, setDifficulty] = useState<ExperienceDifficulty | "Todos">("Todos");
  const [province, setProvince] = useState("Todos");

  const provinceOptions = useMemo(() => {
    const seen = new Set(experiences.map((e) => e.province));
    return provinces.filter((p) => seen.has(p.id));
  }, [experiences]);

  const filtered = useMemo(() =>
    experiences
      .filter((e) => category === "Todos" || e.category === category)
      .filter((e) => difficulty === "Todos" || e.difficulty === difficulty)
      .filter((e) => province === "Todos" || e.province === province),
    [experiences, category, difficulty, province]
  );

  return (
    <div>
      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={() => setCategory("Todos")}
          className={`px-4 py-2 font-label-caps text-label-caps text-[10px] tracking-widest transition-all ${category === "Todos" ? "bg-primary text-white" : "border border-savanna-sand text-on-surface-variant hover:border-primary hover:text-primary"}`}>
          TODOS ({experiences.length})
        </button>
        {EXPERIENCE_CATEGORIES.map((cat) => {
          const n = experiences.filter((e) => e.category === cat).length;
          if (n === 0) return null;
          return (
            <button key={cat} onClick={() => setCategory(category === cat ? "Todos" : cat)}
              className={`px-4 py-2 font-label-caps text-label-caps text-[10px] tracking-widest transition-all ${category === cat ? "bg-primary text-white" : "border border-savanna-sand text-on-surface-variant hover:border-primary hover:text-primary"}`}>
              {cat.toUpperCase()} ({n})
            </button>
          );
        })}
      </div>

      {/* Secondary filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <div className="flex gap-2">
          {(["Todos", ...EXPERIENCE_DIFFICULTIES] as const).map((d) => (
            <button key={d} onClick={() => setDifficulty(d as ExperienceDifficulty | "Todos")}
              className={`px-3 py-2 font-label-caps text-label-caps text-[10px] tracking-widest transition-all ${difficulty === d ? "bg-on-surface text-background" : "border border-savanna-sand text-on-surface-variant hover:border-on-surface hover:text-on-surface"}`}>
              {d === "Todos" ? "DIFICULDADE" : d.toUpperCase()}
            </button>
          ))}
        </div>
        <select value={province} onChange={(e) => setProvince(e.target.value)}
          className="border border-savanna-sand bg-background font-label-caps text-label-caps text-[11px] tracking-widest px-3 py-2 text-on-surface-variant focus:outline-none focus:border-primary">
          <option value="Todos">Todas as províncias</option>
          {provinceOptions.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
        <span className="self-center font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest">
          {filtered.length} EXPERIÊNCIA{filtered.length !== 1 ? "S" : ""}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={`${category}-${difficulty}-${province}`}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger} initial="hidden" animate="show">
          {filtered.map((exp) => (
            <motion.div key={exp.id} variants={fadeUp}>
              <ExperienceCard experience={exp} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="py-16 text-center">
          <span className="material-symbols-outlined text-[56px] text-on-surface-variant/20 block mb-4">explore</span>
          <p className="font-body-md text-on-surface-variant">Nenhuma experiência encontrada.</p>
          <button onClick={() => { setCategory("Todos"); setDifficulty("Todos"); setProvince("Todos"); }}
            className="mt-4 font-label-caps text-label-caps text-primary border border-primary px-5 py-2 hover:bg-primary hover:text-white transition-colors">
            LIMPAR FILTROS
          </button>
        </div>
      )}
    </div>
  );
}
