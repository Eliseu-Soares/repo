"use client";

import { motion } from "framer-motion";
import { fadeUp, slideLeft, stagger, staggerSlow, viewportOnce } from "@/lib/motion";

const CATEGORIES = [
  {
    icon: "beach_access",
    label: "Praias",
    description: "Litoral virgem de 1.650 km",
    href: "/destinos?categoria=praias",
    color: "bg-blue-50 text-blue-600",
    hoverBg: "group-hover:bg-blue-600",
  },
  {
    icon: "forest",
    label: "Parques Naturais",
    description: "Fauna e flora únicas de África",
    href: "/destinos?categoria=parques",
    color: "bg-green-50 text-green-700",
    hoverBg: "group-hover:bg-green-700",
  },
  {
    icon: "account_balance",
    label: "Monumentos",
    description: "Testemunhos de séculos de história",
    href: "/destinos?categoria=monumentos",
    color: "bg-amber-50 text-amber-700",
    hoverBg: "group-hover:bg-amber-700",
  },
  {
    icon: "restaurant",
    label: "Gastronomia",
    description: "Sabores da terra e do mar",
    href: "/gastronomia",
    color: "bg-orange-50 text-orange-600",
    hoverBg: "group-hover:bg-orange-600",
  },
  {
    icon: "theaters",
    label: "Cultura",
    description: "Arte, música e tradições vivas",
    href: "/cultura",
    color: "bg-purple-50 text-purple-700",
    hoverBg: "group-hover:bg-purple-700",
  },
  {
    icon: "hiking",
    label: "Aventura",
    description: "Trilhos, safari e adrenalina",
    href: "/experiencias?tipo=aventura",
    color: "bg-teal-50 text-teal-700",
    hoverBg: "group-hover:bg-teal-700",
  },
];

export default function CategorySection() {
  return (
    <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
      {/* Header */}
      <motion.div
        className="mb-14"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.span
          className="font-label-caps text-label-caps text-secondary tracking-widest block mb-4 uppercase"
          variants={fadeUp}
        >
          O que quer descobrir?
        </motion.span>
        <motion.h2 className="font-headline-md text-headline-md" variants={slideLeft}>
          Explorar por Categoria
        </motion.h2>
      </motion.div>

      {/* Category grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        variants={staggerSlow}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {CATEGORIES.map((cat) => (
          <motion.a
            key={cat.label}
            href={cat.href}
            className="group flex flex-col items-center text-center p-6 border border-savanna-sand hover:border-transparent hover:shadow-xl transition-all duration-300 rounded-sm cursor-pointer"
            variants={fadeUp}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
          >
            {/* Icon container */}
            <motion.div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 ${cat.color} ${cat.hoverBg} transition-colors duration-300`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <span className={`material-symbols-outlined text-[28px] group-hover:text-white transition-colors duration-300`}>
                {cat.icon}
              </span>
            </motion.div>

            <h3 className="font-headline-sm text-[16px] font-semibold mb-2 group-hover:text-primary transition-colors">
              {cat.label}
            </h3>
            <p className="font-body-md text-[13px] text-on-surface-variant leading-snug">
              {cat.description}
            </p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
