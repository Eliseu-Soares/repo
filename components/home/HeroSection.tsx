"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAmC8tR-ZAo-zEmHl8-qzlcrdMGnseQuV6jcy_HRDNS5QTuxwwgE_lYaStxT74Rus67H18uXoQ1BshoDNisDQUY1uua-78vGI7HDyOb8_HgpWZuZuhj3FibSbeL3LSDHjpgS5XrwARjiT38BKCj75aWPNkzbfxGQfuSHRXMtyt11eh5FMVxNmbGsfw7fqGktBPwH2v6lv9-YzWaYJHryVrTDC7KEQHBFFvs4-nxR2bC5Kglj0fG31C8Q7KMbIN6mPd-IDzMcRNC38Fv";

const HEADLINE = "Angola: Onde a Natureza encontra a Alma";

export default function HeroSection() {
  const router = useRouter();
  const [destination, setDestination] = useState("");

  const words = HEADLINE.split(" ");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination.trim()) params.set("q", destination.trim());
    router.push(`/pesquisa${params.size > 0 ? `?${params}` : ""}`);
  };

  return (
    <section className="relative h-[921px] w-full overflow-hidden">
      {/* Background — subtle ken burns on load */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        role="img"
        aria-label="Cataratas do Kalandula em Angola — paisagem majestosa de cascatas sobre rochas vulcânicas rodeadas de vegetação tropical"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: EASE }}
      />

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Content */}
      <div className="relative z-10 h-full mb-16 flex flex-col justify-center items-center text-center px-margin-mobile">
        {/* Word-by-word headline */}
        <h1 className="text-white font-display-lg text-display-lg-mobile md:text-display-lg max-w-4xl leading-tight">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.25em]"
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35 + i * 0.085, ease: EASE }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Description */}
        <motion.p
          className="text-white/85 font-body-lg text-body-lg max-w-2xl mt-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95, ease: EASE }}
        >
          Explore as 18 províncias, descubra patrimónios naturais únicos e viva
          experiências inesquecíveis no coração de África.
        </motion.p>

        {/* Search bar — single field, pill shape, no borders */}
        <motion.form
          onSubmit={handleSearch}
          className="w-full max-w-xl bg-white/95 backdrop-blur-md p-1.5 shadow-lg flex items-center gap-1 transition-shadow focus-within:shadow-xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15, ease: EASE }}
        >
          <div className="flex-1 flex items-center pl-5">
            <span className="material-symbols-outlined text-primary mr-3 shrink-0 text-[20px]">
              location_on
            </span>
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full border-none bg-transparent py-3.5 font-body-md outline-none"
              placeholder="Para onde quer ir?"
              type="text"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white px-8 py-3.5 font-label-caps text-label-caps hover:bg-primary-container transition-colors active:scale-95 duration-200 shrink-0"
          >
            Pesquisar
          </button>
        </motion.form>

        {/* Secondary actions — both solid, no borders */}
        <motion.div
          className="flex items-center gap-4 mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: EASE }}
        >
          <a
            href="/destinos"
            className="group inline-flex items-center gap-2 bg-primary/90 text-white px-8 py-3 font-label-caps text-label-caps tracking-widest hover:bg-primary-container transition-colors active:scale-95 duration-200"
          >
            Explorar destinos
            <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
          <a
            href="#intro"
            className="bg-white/15 text-white px-16 py-4.5 font-label-caps text-label-caps tracking-widest hover:bg-white/25 transition-colors active:scale-95 duration-200"
          >
            Saber mais
          </a>
        </motion.div>
      </div>
    </section>
  );
}