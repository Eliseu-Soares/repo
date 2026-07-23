"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce, EASE } from "@/lib/motion";

const PILLARS = [
  {
    icon: "verified_user",
    title: "Segurança Garantida",
    description:
      "Todos os nossos operadores e guias são rigorosamente verificados e cumprem os mais altos padrões de segurança internacional.",
  },
  {
    icon: "workspace_premium",
    title: "Certificação Oficial",
    description:
      "Detemos o selo de qualidade 'Visite Angola', assegurando que cada experiência contribui para a economia formal do país.",
  },
  {
    icon: "eco",
    title: "Turismo Sustentável",
    description:
      "Comprometemo-nos com o turismo regenerativo, protegendo o nosso património natural e apoiando as comunidades locais.",
  },
];

const PARTNERS = [
  "MINISTÉRIO DO TURISMO",
  "INFOTUR ANGOLA",
  "PARQUES NACIONAIS",
  "ANGOLA 2025",
];

export default function TrustSection() {
  return (
    <section className="py-section-gap bg-surface-container-low border-t border-savanna-sand">
      <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-4 uppercase">
            Parceiro Oficial
          </span>
          <h2 className="font-headline-md text-headline-md mb-4">
            Compromisso com o Turismo Nacional
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            A Toura é a plataforma designada pelo Ministério do Turismo de
            Angola para promover o destino nacional com excelência e
            integridade.
          </p>
        </motion.div>

        {/* Pillars */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {PILLARS.map((p) => (
            <motion.div
              key={p.title}
              className="flex flex-col items-center text-center"
              variants={fadeUp}
            >
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-[32px]">
                  {p.icon}
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm mb-3">
                {p.title}
              </h4>
              <p className="text-on-surface-variant font-body-md text-sm leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner logos */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 opacity-40 hover:opacity-70 transition-opacity duration-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {PARTNERS.map((name) => (
            <div
              key={name}
              className="h-10 px-6 border border-on-surface/20 flex items-center justify-center"
            >
              <span className="font-label-caps text-label-caps text-on-surface text-[10px] tracking-widest">
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
