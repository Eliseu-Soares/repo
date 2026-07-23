"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn, viewportOnce, EASE } from "@/lib/motion";

const CTA_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA85B915LEeSeR_KbUTM_Y52q80h0xc1f2E1VOvrvVEvYCjyte5kyFCwHA9-CYZMPEUuj1uBq_q8n732cjLzuu-mLGe6fI33_mbh5lUnOuLOjsxSiVkIGnD5Xsge-OPZPNY2xcHetDiIa6-T8rfdUFiBdpyUBclcymEME64tAJh-sMH5ROSyn7eS0G51bQwEwLdh4-psHMiQeXpfmsj66SGDt5ZUfvWvqI9U5FjFDLwey5xI1XmNi57aTj28eukLxmsp74gMMO0Jwix";

const HEADLINE = "Sua Jornada por Angola Começa Aqui";

export default function CTASection() {
  const words = HEADLINE.split(" ");

  return (
    <section className="relative w-full h-[600px] flex items-center overflow-hidden">
      {/* Background — subtle scale on enter */}
      <motion.img
        alt="Panorâmica do Tundavala — Serra da Leba, Huíla"
        src={CTA_IMAGE}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.6, ease: EASE }}
      />

      {/* Gradient overlay — #840101 (vermelho angolano) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #840101 0%, #840101 30%, rgba(132,1,1,0.75) 60%, transparent 100%)",
        }}
      />

      <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="max-w-2xl text-white">
          {/* Word-by-word headline reveal */}
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.65, delay: 0.1 + i * 0.09, ease: EASE }}
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p
            className="font-body-lg text-white/90 mb-10 max-w-lg"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.65, ease: EASE }}
          >
            Explore destinos inesquecíveis e viva experiências únicas no coração
            da África. Estamos prontos para o levar mais longe.
          </motion.p>

          <motion.a
            href="/destinos"
            className="inline-block bg-white text-[#840101] hover:bg-clay-ivory px-12 py-5 font-label-caps text-label-caps tracking-widest transition-all rounded-lg shadow-2xl duration-200"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
            whileHover={{ scale: 1.04, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.97 }}
          >
            PLANEAR A MINHA VIAGEM
          </motion.a>
        </div>
      </div>
    </section>
  );
}
