"use client";

import { motion } from "framer-motion";
import { fadeUp, clipReveal, stagger, EASE, viewportOnce } from "@/lib/motion";

const FEATURED = [
  {
    name: "Luanda",
    tagline: "A pulsação urbana do futuro africano.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAC1JwCPwd0OsRVZ95jzrODh506t3iu1KwoIlBb0QThHRz_XoRXsUGd9T27NQ0wdenwYzgSl6tVmZkY1yMlwXaAn-S7-uTcFX_Ql7oR08NXog015skvcQNh7KloT1xJIiSt7rcORTkpW4XlhQ9GfVWqErUgK65dRz0AiBI2Aq5zyuSQRnJWQoXSMt5Lx0E4Xg2Ng82tkRnbx_1Dn3qiDqsmPEQ6VTdPmWIPMJN9bQopIR9_ECFuuPuw5w3b1TbD2Goza3lriJvGdokO",
  },
  {
    name: "Huíla",
    tagline: "Miradouros que tocam o céu.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA85B915LEeSeR_KbUTM_Y52q80h0xc1f2E1VOvrvVEvYCjyte5kyFCwHA9-CYZMPEUuj1uBq_q8n732cjLzuu-mLGe6fI33_mbh5lUnOuLOjsxSiVkIGnD5Xsge-OPZPNY2xcHetDiIa6-T8rfdUFiBdpyUBclcymEME64tAJh-sMH5ROSyn7eS0G51bQwEwLdh4-psHMiQeXpfmsj66SGDt5ZUfvWvqI9U5FjFDLwey5xI1XmNi57aTj28eukLxmsp74gMMO0Jwix",
  },
  {
    name: "Namibe",
    tagline: "O mistério das areias milenares.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyEU5BhywqtacvyDrn--XuSeTd4wj5ZhGCvXiFDvanh0-ZmoCKRJHRRBpHaGyDRCz0L9la7_OvaYR_-DMmeCgj7Ve4jkj3OTmdyfTPF_HnD6UW6gzTuICKokwh7f5jPW5J9ZgRiHSiDxKriIXedKKfZWMgpkhAoxfW5lZtHA8hgyW6W8K8iIS6rRuZG2IPAhcS5-Tg8ML6hiGHvnXGPxMlMI7UGR1-swQL4h4a327rUuWyoPnremdmEHHslKj5Ea7N3Z0l-WEUI2iX",
  },
];

export default function ProvincesSection() {
  return (
    <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.span
          className="font-label-caps text-label-caps text-secondary tracking-widest block mb-4 uppercase"
          variants={fadeUp}
        >
          Geografia Viva
        </motion.span>
        <motion.h2 className="font-headline-md text-headline-md mb-4" variants={fadeUp}>
          Províncias em Destaque
        </motion.h2>
        <motion.p
          className="font-body-md text-on-surface-variant max-w-2xl mx-auto"
          variants={fadeUp}
        >
          Cada região de Angola conta uma história diferente através das suas
          paisagens e gentes.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {/* Luanda — dramatic clip-path wipe from left */}
        <motion.div
          className="md:col-span-2 md:row-span-2 relative overflow-hidden group rounded-lg"
          variants={clipReveal}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
        >
          <img
            alt="Panorâmica moderna de Luanda"
            src={FEATURED[0].image}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 scrim-gradient" />
          <motion.div
            className="absolute bottom-0 left-0 p-10 text-white"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.8, ease: EASE }}
          >
            <h3 className="font-headline-md text-headline-md mb-2">{FEATURED[0].name}</h3>
            <p className="font-body-lg opacity-90 mb-6">{FEATURED[0].tagline}</p>
            <button className="bg-primary hover:bg-primary-container text-white px-8 py-3 font-label-caps text-[11px] tracking-widest transition-all">
              VISITAR CAPITAL
            </button>
          </motion.div>
        </motion.div>

        {/* Huíla — scale in, delayed */}
        <motion.div
          className="relative overflow-hidden group rounded-lg"
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, delay: 0.25, ease: EASE }}
          whileHover={{ y: -4 }}
        >
          <img
            alt="Serra da Tundavala na Huíla"
            src={FEATURED[1].image}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 scrim-gradient" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="font-headline-sm text-headline-sm mb-1">{FEATURED[1].name}</h3>
            <p className="font-body-md opacity-80">{FEATURED[1].tagline}</p>
          </div>
        </motion.div>

        {/* Namibe — scale in, more delayed */}
        <motion.div
          className="relative overflow-hidden group rounded-lg"
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, delay: 0.45, ease: EASE }}
          whileHover={{ y: -4 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
            style={{ backgroundImage: `url('${FEATURED[2].image}')` }}
            role="img"
            aria-label="Deserto do Namibe"
          />
          <div className="absolute inset-0 scrim-gradient" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="font-headline-sm text-headline-sm mb-1">{FEATURED[2].name}</h3>
            <p className="font-body-md opacity-80">{FEATURED[2].tagline}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
