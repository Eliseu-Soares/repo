"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCiqjQO7kNJbjST2uEcmzcbIlZiL2M7fu-5UMDm-5BJnnZ8mmm55_tJHXpcPgU4NpZD3uK3DmED8ePvD68uftEihqyaDA-WYmosSxr3WImFmseUXgI9EqwCeYlSMyiXo_K_MhjBbqMjehWJVRx8VEhetxYgjQ60swn_nkJhxFcw5z-E1k73X0yXtgTsPeI2bUxA8I5ZoJr6OsEFiQRctlTDpnRyVJkrAKzPkPqoLmE5LcEho6Dmgr2JQqzZdTUYcer8S6s6Kv_n_qrH";

const QUICK_SEARCHES = [
  "Kalandula",
  "Praia",
  "Safari",
  "Luanda",
  "Namibe",
  "Benguela",
];

interface Props {
  initialQuery: string;
}

export default function PesquisaHero({ initialQuery }: Props) {
  const router = useRouter();
  const [value, setValue] = useState(initialQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = value.trim();
    if (q) router.push(`/pesquisa?q=${encodeURIComponent(q)}`);
  };

  const handleQuick = (s: string) => {
    setValue(s);
    router.push(`/pesquisa?q=${encodeURIComponent(s)}`);
  };

  return (
    <section className="relative h-[921px] w-full overflow-hidden flex items-center">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        role="img"
        aria-label="Deserto do Namibe, Angola — paisagem de dunas ocre encontrando o oceano Atlântico"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: EASE }}
      />

      {/* Dark overlay — centre focus for search */}
      <motion.div
        className="absolute inset-0 bg-black/55"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto text-center">
        {/* Eyebrow */}
        <motion.span
          className="font-label-caps text-label-caps text-secondary tracking-widest block mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        >
          ENCONTRE O SEU PRÓXIMO DESTINO
        </motion.span>

        {/* Headline */}
        <motion.h1
          className="font-display-lg text-display-lg-mobile md:text-display-lg text-white leading-tight mb-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35, ease: EASE }}
        >
          Pesquise Angola
        </motion.h1>

        <motion.p
          className="text-white/80 font-body-lg text-body-lg mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
        >
          Destinos, eventos, províncias e experiências — tudo num só lugar.
        </motion.p>

        {/* Search form */}
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto flex gap-0 shadow-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
        >
          <div className="flex-1 flex items-center bg-white/96 backdrop-blur-md px-5 gap-3">
            <span className="material-symbols-outlined text-primary text-[24px] shrink-0">
              search
            </span>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Kalandula, Namibe, Safari, Benguela…"
              className="flex-1 bg-transparent py-5 font-body-lg focus:outline-none text-on-surface placeholder:text-on-surface-variant/50"
              autoFocus={!initialQuery}
            />
            {value && (
              <button
                type="button"
                onClick={() => setValue("")}
                className="material-symbols-outlined text-[20px] text-on-surface-variant hover:text-on-surface transition-colors shrink-0"
              >
                close
              </button>
            )}
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-10 font-label-caps text-label-caps tracking-widest hover:bg-primary-container transition-colors shrink-0"
          >
            PESQUISAR
          </button>
        </motion.form>

        {/* Quick searches */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <span className="font-label-caps text-label-caps text-white/50 self-center">
            SUGESTÕES:
          </span>
          {QUICK_SEARCHES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => handleQuick(s)}
              className="px-4 py-2 border border-white/30 font-label-caps text-label-caps text-white/80 hover:bg-white/15 hover:border-white/60 hover:text-white transition-all"
            >
              {s.toUpperCase()}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
