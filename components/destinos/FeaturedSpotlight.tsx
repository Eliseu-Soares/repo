"use client";

import { motion } from "framer-motion";
import { slideLeft, slideRight, fadeUp, stagger, viewportOnce, EASE } from "@/lib/motion";

const FEATURES = [
  {
    icon: "landscape",
    title: "Serra da Tundavala",
    description: "Uma fenda monumental de 1000m de profundidade com vistas de cortar a respiração.",
  },
  {
    icon: "route",
    title: "Serra da Leba",
    description: "A estrada serpenteante mais famosa do continente, entre Lubango e o Namibe.",
  },
  {
    icon: "spa",
    title: "Clima de Montanha",
    description: "Microclima fresco e agradável, perfeito para caminhadas e turismo rural.",
  },
];

const IMAGE_1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAEOXx8m1FpHLTvLvhxQx1q6oVlHLwJu5-wh6N3CgE7_t6zg7hMKfhELROB0Sfk6eA8pm_1hn1Hu-onr6bzUC6OA6I4op6Ym4hXutpLCPuK89L1hKAKbJk0JihKIovDeVycj23zcpXA77Ijq2zLk2BNACgiY8_DG1QABhF5P5RDy9b8HcY_HtKkQU1sRnrqcr4k5jxIpq-Y3eSD4Y6ND9Bbeg_Gjo220dVAimVWVWqL0FVNtWnRCh-wnwgV-OTKSCbG_B_SERxETiaE";

const IMAGE_2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBfs0XsNBeygDf4x-pVi9mpigTw1AHeP9ZSfXjqw-LNuv7y24QvnhutAUykPMUFsm-jZEbctZAM29phlOzzNP5WgLUHHBZjt7vEF1qQLAxNfWEKOd8aDevf4ViLx6WBX4tDlDknS_5el0MEYeZxrAruRL4ef_DkrpYRYG1DJWXNVLFUq1iojK6HG3ePbOx-S6FtMkJZUtxpNgUIw8khFg_XoqfR38OM7hMy4lE3PaTuqtP38RMoYMHMyIv47_MuzEi2AotuVvreVD6s";

export default function FeaturedSpotlight() {
  return (
    <section className="py-section-gap bg-surface-container-lowest border-t border-savanna-sand">
      <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto">
        <motion.div
          className="flex flex-col md:flex-row gap-16 items-start"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {/* Left — text */}
          <motion.div className="w-full md:w-5/12" variants={slideLeft}>
            <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-4 uppercase">
              Destaque Mensal
            </span>
            <h2 className="font-headline-md text-headline-md mb-6 leading-tight">
              A Joia do Sul:{" "}
              <span className="text-primary">Huíla</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
              Suba até às terras altas e descubra um microclima refrescante onde
              a natureza esculpiu monumentos. Da majestosa Serra da Leba à
              vertigem da Fenda da Tundavala, a Huíla é um convite à
              contemplação e ao luxo rural.
            </p>

            {/* Feature list */}
            <div className="flex flex-col gap-6">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-[24px] mt-0.5 shrink-0">
                    {f.icon}
                  </span>
                  <div>
                    <h4 className="font-body-md font-semibold text-on-surface mb-1">
                      {f.title}
                    </h4>
                    <p className="text-on-surface-variant text-sm font-body-md">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/destinos?provincia=huila"
              className="inline-flex items-center gap-2 mt-10 text-primary font-label-caps text-label-caps border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-all"
            >
              VER GUIA COMPLETO DA HUÍLA
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </a>
          </motion.div>

          {/* Right — staggered images */}
          <motion.div
            className="w-full md:w-7/12 grid grid-cols-2 gap-4"
            variants={slideRight}
          >
            <div className="overflow-hidden h-80 relative group">
              <img
                src={IMAGE_1}
                alt="Cultura de Lubango, Huíla"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="overflow-hidden h-80 relative group mt-10">
              <img
                src={IMAGE_2}
                alt="Serra da Leba, Huíla — estrada serpenteante"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-label-caps text-label-caps text-white text-[10px] tracking-widest">
                  SERRA DA LEBA
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
