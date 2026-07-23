"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCKiEDol5SdTfVy_ZvxPII9gHGUGdw69UdLZQ4Wb7pnbc1w1M_ZJb9taD0YoV41XqNgN-d3omuu3-Y2qb8bhenx61yAPBd_CkTw6czMOdA1xryG9mx6cMo6tI1xvwTtXG09CByVH_E4FCl-Uub2FbhnFgYRMQqHmsl0iR2W5gxvpH37i6FbE_vv5QhCH-lzEyCRtxeTcIyUQvpT7Ijk2Nh5rVZ_9rJbb3rxz_t1iHPQ7bvAa_HgbnIwHIAMqy50psJtvO1XZyIKz7v-";

const HEADLINE = "Descubra Angola, Província a Província";

export default function DestinosHero() {
  const words = HEADLINE.split(" ");

  return (
    <section className="relative h-[921px] w-full overflow-hidden">
      {/* Background — ken burns */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        role="img"
        aria-label="Fenda da Tundavala na Huíla — panorâmica dramática do planalto sul de Angola"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: EASE }}
      />

      {/* Editorial gradient — left-to-right (dark on left, transparent on right) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Content — left-aligned */}
      <div className="relative z-10 h-full flex items-center px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.span
            className="font-label-caps text-label-caps text-secondary tracking-widest block mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          >
            18 PROVÍNCIAS · INFINITAS EXPERIÊNCIAS
          </motion.span>

          {/* Headline word-by-word */}
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white leading-tight mb-6">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.35 + i * 0.085,
                  ease: EASE,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Description */}
          <motion.p
            className="text-white/85 font-body-lg text-body-lg mb-10 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease: EASE }}
          >
            De Luanda cosmopolita às paisagens lunares do Namibe, cada
            quilómetro revela uma nova alma desta terra vibrante.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: EASE }}
          >
            <a
              href="#destinos"
              className="bg-secondary text-on-secondary px-10 py-4 font-label-caps text-label-caps tracking-widest hover:bg-on-secondary-fixed-variant transition-colors text-center"
            >
              COMEÇAR A EXPLORAR
            </a>
            <a
              href="/provincias"
              className="border border-white/80 text-white px-10 py-4 font-label-caps text-label-caps tracking-widest hover:bg-white/15 hover:border-white transition-all text-center"
            >
              VER PROVÍNCIAS
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="font-label-caps text-label-caps text-white/40 tracking-widest text-[10px]">
          SCROLL
        </span>
        <motion.div
          className="w-px h-12 bg-white/30 origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </section>
  );
}
