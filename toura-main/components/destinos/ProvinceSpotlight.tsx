"use client";

import { motion } from "framer-motion";
import { stagger, viewportOnce, EASE } from "@/lib/motion";

const PROVINCE_CARDS = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOCGRRmSTKss2S5jX-bse-9_wx22vFvqt8IGIj3U4mf_ZEiqlxogE5J8Dx4XecRBUSdMDmyVzKY8gpuTL_VgbYZtJr1aKDgqRxT3ndmp2DO9xfouOS-wQ2SY6miA0qYJvBaegK54CDPRL2tGv-lXsbh-7hqbaj2M2TuUlqe6YRt8JEdbGT0DMxUWwc-l4S45E0knOUDvf-tyn_cc3Iri4xfZciMfK3aIbn-Z07nn2l_k8GAQTxihWzmZP3AHmR0uWsMZB5mxqrmale",
    label: "CAPITAL · LITORAL",
    name: "Luanda",
    description:
      "O pulsar moderno de uma nação, onde a história colonial encontra o brilho dos arranha-céus e a energia do Atlântico.",
    href: "/provincias/luanda",
    destinations: 8,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAairkcSgUmER3GOO1MLHuA7oH8WcqQllCU9fKy0TKGpma0JXudceRK8CeJSO1t1MMX8y-gEU2rHPOWm2tfakZr09rbc6XiSsck0XVxKcHhNBUttLJ5i2e84uJNxLdpCUXhZ3H4rZhuUPs7GHdJysjywwlc6swvA8U_V8gk88UjDoFV_nSf82e5Df_duPZZNZbDZe2QJvT6GPgho1l99azPUTZCFDHVQHBzoCBgb-QAV61t9GsrM6FB013ER7OuiYclTATamdakkM8L",
    label: "LITORAL · SUL",
    name: "Benguela",
    description:
      "A cidade das acácias rubras e das praias de águas mornas que encantam o olhar, com uma gastronomia de marisco inigualável.",
    href: "/provincias/benguela",
    destinations: 4,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCiqjQO7kNJbjST2uEcmzcbIlZiL2M7fu-5UMDm-5BJnnZ8mmm55_tJHXpcPgU4NpZD3uK3DmED8ePvD68uftEihqyaDA-WYmosSxr3WImFmseUXgI9EqwCeYlSMyiXo_K_MhjBbqMjehWJVRx8VEhetxYgjQ60swn_nkJhxFcw5z-E1k73X0yXtgTsPeI2bUxA8I5ZoJr6OsEFiQRctlTDpnRyVJkrAKzPkPqoLmE5LcEho6Dmgr2JQqzZdTUYcer8S6s6Kv_n_qrH",
    label: "AVENTURA · SUL",
    name: "Namibe",
    description:
      "Onde o deserto mais antigo do mundo encontra o mar e as tradições ancestrais dos povos do sul permanecem vivas.",
    href: "/provincias/namibe",
    destinations: 5,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmC8tR-ZAo-zEmHl8-qzlcrdMGnseQuV6jcy_HRDNS5QTuxwwgE_lYaStxT74Rus67H18uXoQ1BshoDNisDQUY1uua-78vGI7HDyOb8_HgpWZuZuhj3FibSbeL3LSDHjpgS5XrwARjiT38BKCj75aWPNkzbfxGQfuSHRXMtyt11eh5FMVxNmbGsfw7fqGktBPwH2v6lv9-YzWaYJHryVrTDC7KEQHBFFvs4-nxR2bC5Kglj0fG31C8Q7KMbIN6mPd-IDzMcRNC38Fv",
    label: "NATUREZA · NORTE",
    name: "Malanje",
    description:
      "Lar das Cataratas do Kalandula e das misteriosas Pedras Negras de Pungo Andongo — um destino de maravilhas naturais.",
    href: "/provincias/malanje",
    destinations: 3,
  },
];

export default function ProvinceSpotlight() {
  return (
    <section className="py-section-gap pattern-overlay bg-surface-container-low">
      <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end gap-6 mb-14"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div>
            <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-4 uppercase">
              Explorar por Destino
            </span>
            <h2 className="font-headline-md text-headline-md">
              Províncias em Destaque
            </h2>
            <p className="font-body-md text-on-surface-variant mt-2 max-w-lg">
              Selecione uma província para iniciar o seu itinerário
              personalizado.
            </p>
          </div>
          <a
            href="/provincias"
            className="font-label-caps text-label-caps text-primary border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-all shrink-0"
          >
            VER TODAS AS PROVÍNCIAS
          </a>
        </motion.div>

        {/* Portrait cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {PROVINCE_CARDS.map((card, i) => (
            <motion.a
              key={card.name}
              href={card.href}
              className="group relative overflow-hidden cursor-pointer bg-surface-container"
              style={{ aspectRatio: "4/5" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Destination count badge */}
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white px-3 py-1.5 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">
                  place
                </span>
                <span className="font-label-caps text-label-caps">
                  {card.destinations} destinos
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-2">
                  {card.label}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-white mb-2">
                  {card.name}
                </h3>
                <p className="text-white/80 text-sm font-body-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3 leading-relaxed">
                  {card.description}
                </p>
                {/* CTA */}
                <div className="mt-4 flex items-center gap-1.5 text-secondary font-label-caps text-label-caps opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span>EXPLORAR</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
