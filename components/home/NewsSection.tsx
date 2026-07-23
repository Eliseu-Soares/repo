"use client";

import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, stagger, staggerSlow, viewportOnce } from "@/lib/motion";

const NEWS = [
  {
    category: "INFRAESTRUTURA",
    date: "12 OUT 2023",
    title:
      "Inauguração do Novo Aeroporto Internacional Dr. António Agostinho Neto",
    description:
      "O novo hub logístico e de passageiros em Luanda promete revolucionar a conectividade de Angola com o mundo.",
  },
  {
    category: "VISTOS",
    date: "05 OUT 2023",
    title: "Simplificação de Vistos para Mais de 90 Países: O Que Saber",
    description:
      "Angola abre as portas ao turismo global com novas políticas de isenção e facilitação de entrada para viajantes internacionais.",
  },
  {
    category: "SUSTENTABILIDADE",
    date: "28 SET 2023",
    title:
      "Projectos de Ecoturismo no Parque da Quiçama Recebem Investimento",
    description:
      "Novas parcerias focadas na preservação da Palanca Negra Gigante e no desenvolvimento de alojamentos de baixo impacto.",
  },
];

export default function NewsSection() {
  return (
    <section className="py-section-gap border-t border-savanna-sand">
      <div className="px-margin-desktop max-w-container-max mx-auto">
        {/* Header row — opposing directions */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.div variants={slideLeft}>
            <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-4 uppercase">
              Info Tourism
            </span>
            <h2 className="font-headline-md text-headline-md">
              Notícias e Atualidades
            </h2>
          </motion.div>
          <motion.a
            href="/noticias"
            className="font-label-caps text-label-caps border-b-2 border-primary pb-1 hover:text-secondary transition-all"
            variants={slideRight}
          >
            VER TODAS AS NOTÍCIAS
          </motion.a>
        </motion.div>

        {/* Articles — stagger from bottom */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={staggerSlow}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {NEWS.map((article) => (
            <motion.article
              key={article.title}
              className="flex flex-col gap-6 group cursor-pointer"
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-label-caps text-[10px] text-secondary">
                {article.category} • {article.date}
              </span>
              <h3 className="font-headline-sm text-[22px] leading-tight group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-on-surface-variant font-body-md">
                {article.description}
              </p>
              <div className="w-12 h-px bg-savanna-sand group-hover:w-full transition-all duration-500" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
