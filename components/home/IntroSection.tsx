"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export default function IntroSection() {
  return (
    <motion.section
      id="intro"
      className="py-section-gap px-margin-desktop max-w-container-max mx-auto text-center"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <motion.span
        className="font-label-caps text-label-caps text-secondary tracking-widest block mb-4"
        variants={fadeUp}
      >
        DESCUBRA A MAGIA
      </motion.span>
      <motion.h2
        className="font-headline-md text-headline-md mb-6"
        variants={fadeUp}
      >
        Explore o Inexplorado
      </motion.h2>
      <motion.p
        className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto"
        variants={fadeUp}
      >
        Desde as areias infinitas do Namibe às águas sagradas de Kalandula,
        Angola oferece uma jornada de descoberta cultural e natural sem
        precedentes em África.
      </motion.p>
    </motion.section>
  );
}
