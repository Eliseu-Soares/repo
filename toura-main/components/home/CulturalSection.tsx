"use client";

import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, scaleIn, stagger, staggerSlow, viewportOnce } from "@/lib/motion";

const CULTURAL_ITEMS = [
  {
    title: "Ritmos de Luanda",
    description:
      "Sinta a vibração da Kizomba e do Semba nas ruas históricas da capital.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDFVzkjAF5MjyB-UKCmkh9hM8xyUV9iX7EOZM2-apfjPVsTGxxV7jQ4MptF779tUuaJ3V4Y24cEjL0hfwRJKDc7pcXHoY9yc3ToMOYKXj9HWzKR2iIXBktqf1llkVz5XyA8ef_CiNMgWs-m_bXG1Fv_LyhMg06ycb85ZSvjSDa0-E-VUOBrq0D_2Gm50H9IXTWeK8YB7PdA17IGdvAWLd7whoNloRoYQc9pI30mgZJHu76OLCWKHL4UAMchgbAIGGPqjIcvGo9_Rex",
  },
  {
    title: "Sabores do Kwanza",
    description:
      "Uma jornada gastronómica pelo Funge de Bombó e a Muamba de Galinha.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDkh5g6okbBDDaSVXcIZCvPfmLzCxtz_DtxmHeFV10BmjRKLQlKuJ_a2mO_PD6Pycne-DG0HvbK6FVDxJGZZIZtWACZWiuDqQ1qjVreGdBCZR6qRHYUXIMahVPOweZ_kEni5NwcnoxyeL8XQcnoOxYswxQ_eiEIErNdn270L42RDJvJVjWXA9oOGUdQwZw5rPcN4TGUNk9HaacKcTE-_6GZp3c4_r6Wdmwpje6SNfWAD4jUtdBFdLuIsZ_mYFbpc0Vo3PadTvNmb4Nv",
  },
];

const ARTISAN_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD4eE_8DAIC7ItzrF2bj0T17TSo-gTzLO95Qsik-Te-1iMCZqlUdE73l_2VGYc2eDgO0Oll9JEpLON5wp8e08jW966JiPrTVzGJdCGqiAJwh1QTqmu1y28RDna8_tnYmpMqSmU1J795guT3y5kKC4v6DntLBT5wHBK3DJnOiklE5myLRD2nhL6P-IAcnW7Pqil6Sdn9BDs1MXrmj3b7RkTQBfWqwnztw4dpBysN0HsflfBx0LitJT-ux97cPgpXrmx5hCCJU3E15dxE";

export default function CulturalSection() {
  return (
    <section className="py-section-gap bg-surface-container overflow-hidden">
      <div className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — slides in from left */}
        <motion.div
          className="space-y-12"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={slideLeft}>
            <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-4 uppercase">
              Identidade &amp; Alma
            </span>
            <h2 className="font-headline-md text-headline-md mb-6">
              Experiências Culturais
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-8">
              Mergulhe na riqueza de uma nação onde a tradição e a modernidade
              dançam em perfeita harmonia. Da gastronomia ancestral aos ritmos
              que conquistaram o mundo.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerSlow}
          >
            {CULTURAL_ITEMS.map((item) => (
              <motion.div
                key={item.title}
                className="group"
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-64 overflow-hidden mb-6 rounded-lg">
                  <motion.img
                    alt={item.title}
                    src={item.image}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                </div>
                <h4 className="font-headline-sm text-[20px] mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-on-surface-variant font-body-md">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — slides in from right with subtle rotation */}
        <motion.div
          className="relative h-[600px] overflow-hidden rounded-lg shadow-2xl"
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.img
            alt="Artesão angolano"
            src={ARTISAN_IMAGE}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <div className="absolute inset-0 bg-primary/10" />
          <motion.blockquote
            className="absolute bottom-8 right-8 bg-white p-6 max-w-xs border-l-4 border-primary"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <p className="font-body-md text-on-surface italic mb-4">
              &ldquo;A cultura não se vê, sente-se no pulsar do tambor e no
              sabor da nossa terra.&rdquo;
            </p>
            <footer className="font-label-caps text-[10px] text-primary">
              MANUEL DOS SANTOS, ARTESÃO
            </footer>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}
