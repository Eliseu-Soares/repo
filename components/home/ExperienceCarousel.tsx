"use client";

import { motion } from "framer-motion";
import { fadeUp, slideLeft, fadeIn, stagger, viewportOnce } from "@/lib/motion";

const EXPERIENCES = [
  {
    title: "Safaris no Parque Nacional da Kissama",
    description: "Descubra a fauna selvagem no seu estado mais puro e livre.",
    category: "AVENTURA",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQhauavbRiDVyMMahtiFlHBJrLRaJ1rNULw0EFt16VYsYCn440j_x50dfW--5jLZqz3-i_-Mpv4uIFk06Ni-KSWhaxSFfrpXCbOMVjYxru4hSnY7MoJK61ChbG85-MVhQiz39GYf451sBzhVYMaDDjjGe8qAAmhnlgM4f5ejFXaAm8sKbcEQ91H3j-ifMo77Mc1TlNrx9KhMnmh517TvSle4_T1baOFYIpMIU8R1HuAs_g19csyJptfVTc3KmuDy4jFU7nmqm5Hke4",
  },
  {
    title: "A Alma dos Sabores Angolanos",
    description:
      "Uma viagem sensorial através do funge, calulu e vinhos locais.",
    category: "GASTRONOMIA",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB8B5ACCYBZH7PLl66aO1psa8t6wWUhkZtKTP1DztcoMBo5WkXdDyjTlMFQ2K8vs0j1ya7sbZNyExeuQWl6eRV21zW3JXE7zgQf8amU5a5WwUnvPVQUa2IzaD2N_ZRowTPHnGctpIe_ZI8ZE1fnnLViyw6tGKDBy2lbl8xRq4KLLtI6dpClcjQHmt_SC2wXZe29XypAmkpn3vnq3b9W1elRwtq9q2f6EN9H10Vy9kwwP-9Psn6_9fS1DaXQBGg74gndV5ObDS-suS16",
  },
  {
    title: "Herança Muxima e Artesanato",
    description:
      "Explore a história viva e o artesanato ancestral das nossas províncias.",
    category: "CULTURA",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4eE_8DAIC7ItzrF2bj0T17TSo-gTzLO95Qsik-Te-1iMCZqlUdE73l_2VGYc2eDgO0Oll9JEpLON5wp8e08jW966JiPrTVzGJdCGqiAJwh1QTqmu1y28RDna8_tnYmpMqSmU1J795guT3y5kKC4v6DntLBT5wHBK3DJnOiklE5myLRD2nhL6P-IAcnW7Pqil6Sdn9BDs1MXrmj3b7RkTQBfWqwnztw4dpBysN0HsflfBx0LitJT-ux97cPgpXrmx5hCCJU3E15dxE",
  },
  {
    title: "Retiro no Mussulo e Cabo Ledo",
    description: "Onde o tempo para e o descanso se torna absoluto.",
    category: "LUXO",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVW4Gn2awf7jkOwImNg-Y_8MsSskQooiKuyPlWlxIWFXN_oSwcLN-K6PiPcGO0UQUKvnI9OxfDoC5fR1iYfzXpIGD4iLXvfMedKTvh2cjksKCO0fyIvoiyDUfWTGHEBLznl1u1TqQFJUb3WTCoheYlrdNR_XA2DnNqtXQc6vz1LaaY_HVeqRO658OFg_7zetkp047b0yQ6HjtpCOCLEQpivYy6hew2ac-gp-STM5RQsA-TdVJKa5G8jMjmcA0L-9fe_9fS1DaXQ",
  },
];

export default function ExperienceCarousel() {
  return (
    <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
      {/* Header row */}
      <motion.div
        className="flex justify-between items-end mb-12"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger}
      >
        <motion.div variants={slideLeft}>
          <h2 className="font-headline-md text-headline-md mb-4">
            Experiências por Essência
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-lg">
            Momentos curados para transformar a sua estadia numa memória eterna.
          </p>
        </motion.div>
        <motion.div className="flex gap-4" variants={fadeIn}>
          <button
            aria-label="Anterior"
            className="w-12 h-12 border border-savanna-sand flex items-center justify-center hover:bg-primary hover:text-white transition-all"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            aria-label="Próximo"
            className="w-12 h-12 border border-savanna-sand flex items-center justify-center hover:bg-primary hover:text-white transition-all"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Cards — staggered reveal */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-gutter"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {EXPERIENCES.map((exp) => (
          <motion.div
            key={exp.title}
            className="group cursor-pointer"
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-[400px] mb-6 overflow-hidden relative">
              <motion.img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              />
              <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                {exp.category}
              </div>
            </div>
            <h4 className="font-headline-sm text-[20px] mb-2 group-hover:text-primary transition-colors">
              {exp.title}
            </h4>
            <p className="text-on-surface-variant font-body-md">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
