"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { fadeUp, stagger, slideLeft, slideRight, viewportOnce, EASE } from "@/lib/motion";

const STATS = [
  { value: 18, suffix: "", label: "Províncias", sub: "cada uma com identidade própria" },
  { value: 200, suffix: "+", label: "Destinos", sub: "catalogados e verificados" },
  { value: 1650, suffix: " km", label: "de Litoral", sub: "entre praias e baías selvagens" },
  { value: 50, suffix: "K+", label: "Visitantes/Ano", sub: "e a crescer todos os anos" },
];

function Counter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const step = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span>
      {count.toLocaleString("pt-PT")}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-section-gap bg-[#0B132B] relative overflow-hidden"
      ref={ref}
    >
      {/* Subtle angular pattern background */}
      <div className="absolute inset-0 pattern-overlay opacity-30 pointer-events-none" />

      <div className="px-margin-desktop max-w-container-max mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={slideLeft}>
            <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-4 uppercase">
              Angola em Números
            </span>
            <h2 className="font-headline-md text-headline-md text-white">
              Um País de Dimensões Épicas
            </h2>
          </motion.div>
          <motion.p
            className="font-body-md text-white/60 max-w-sm"
            variants={slideRight}
          >
            Dados que revelam a grandiosidade de um destino ainda por descobrir
            pelo mundo.
          </motion.p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-[#0B132B] p-10 flex flex-col gap-3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
            >
              {/* Counter */}
              <div className="font-display-lg text-display-lg-mobile md:text-[56px] font-bold text-primary leading-none tabular-nums">
                <Counter target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <h3 className="font-headline-sm text-[20px] text-white mt-1">
                {stat.label}
              </h3>
              <p className="font-body-md text-white/50 text-sm">
                {stat.sub}
              </p>
              {/* Decorative line */}
              <motion.div
                className="w-8 h-0.5 bg-primary mt-2"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
