"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, staggerSlow, viewportOnce } from "@/lib/motion";

const PLANNING_CARDS = [
  {
    icon: "fact_check",
    title: "Vistos & Formalidades",
    description:
      "Informação atualizada sobre o processo simplificado de isenção e pedido de vistos para turistas internacionais.",
    cta: "SABER MAIS",
  },
  {
    icon: "flight",
    title: "Voos & Acessos",
    description:
      "Consulte as principais rotas internacionais e ligações domésticas operadas pela TAAG e parceiros.",
    cta: "RESERVAR VOOS",
  },
  {
    icon: "directions_car",
    title: "Transportes Internos",
    description:
      "Opções de aluguer de viaturas 4x4, guias certificados e logística de transporte entre províncias.",
    cta: "COMO MOVER-SE",
  },
];

export default function PlanningSection() {
  return (
    <section className="bg-surface-container-low py-section-gap">
      <div className="px-margin-desktop max-w-container-max mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.h2
            className="font-headline-md text-headline-md mb-4"
            variants={fadeUp}
          >
            Planeie a sua Viagem
          </motion.h2>
          <motion.p
            className="font-body-md text-on-surface-variant"
            variants={fadeUp}
          >
            Tudo o que precisa para entrar no coração de África com total
            segurança e conforto.
          </motion.p>
        </motion.div>

        {/* Cards — stagger with spring */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={staggerSlow}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {PLANNING_CARDS.map((card) => (
            <motion.div
              key={card.title}
              className="bg-white p-10 border border-savanna-sand group cursor-pointer"
              variants={fadeUp}
              whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 bg-primary-container/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">
                  {card.icon}
                </span>
              </motion.div>
              <h5 className="font-headline-sm text-[22px] mb-4">
                {card.title}
              </h5>
              <p className="text-on-surface-variant font-body-md mb-6">
                {card.description}
              </p>
              <a
                href="#"
                className="font-label-caps text-label-caps text-primary flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                {card.cta}{" "}
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
