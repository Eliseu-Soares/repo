"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAmC8tR-ZAo-zEmHl8-qzlcrdMGnseQuV6jcy_HRDNS5QTuxwwgE_lYaStxT74Rus67H18uXoQ1BshoDNisDQUY1uua-78vGI7HDyOb8_HgpWZuZuhj3FibSbeL3LSDHjpgS5XrwARjiT38BKCj75aWPNkzbfxGQfuSHRXMtyt11eh5FMVxNmbGsfw7fqGktBPwH2v6lv9-YzWaYJHryVrTDC7KEQHBFFvs4-nxR2bC5Kglj0fG31C8Q7KMbIN6mPd-IDzMcRNC38Fv";

const HERO_VIDEO_SRC = "/video.webm";

const HEADLINE = "Angola: Onde a Natureza encontra a Alma";

export default function HeroSection() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const hasHeroVideo = HERO_VIDEO_SRC.trim().length > 0;

  const words = HEADLINE.split(" ");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination.trim()) params.set("q", destination.trim());
    if (date.trim()) params.set("data", date.trim());
    router.push(`/pesquisa${params.size > 0 ? `?${params}` : ""}`);
  };

  const togglePlayback = () => {
    const video = videoRef.current;

    if (!video) {
      setIsPlaying((current) => !current);
      return;
    }

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      return;
    }

    video.pause();
    setIsPlaying(false);
  };

  const toggleMuted = () => {
    const video = videoRef.current;
    const nextMuted = !isMuted;

    if (video) {
      video.muted = nextMuted;
      video.volume = nextMuted ? 0 : 1;
    }

    setIsMuted(nextMuted);
  };

  return (
    <section className="relative h-[921px] w-full overflow-hidden">
      {/* Background — subtle ken burns on load */}
      {hasHeroVideo ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          poster={HERO_IMAGE}
          aria-label="Vídeo de apresentação de Angola"
        >
          <source src={HERO_VIDEO_SRC} />
        </video>
      ) : (
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
          role="img"
          aria-label="Cataratas do Kalandula em Angola — paisagem majestosa de cascatas sobre rochas vulcânicas rodeadas de vegetação tropical"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: EASE }}
        />
      )}

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-black/26"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {hasHeroVideo ? (
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 rounded-full bg-black/32 px-2.5 py-2 backdrop-blur-md shadow-md border border-white/10">
          <button
            type="button"
            onClick={toggleMuted}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white transition-colors hover:bg-black/65"
            aria-label={isMuted ? "Ativar volume" : "Desativar volume"}
            title={isMuted ? "Ativar volume" : "Desativar volume"}
          >
            <span className="material-symbols-outlined text-[22px]">
              {isMuted ? "volume_off" : "volume_up"}
            </span>
          </button>

          <button
            type="button"
            onClick={togglePlayback}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white transition-colors hover:bg-black/65"
            aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
            title={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
          >
            <span className="material-symbols-outlined text-[22px]">
              {isPlaying ? "pause" : "play_arrow"}
            </span>
          </button>
        </div>
      ) : null}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-margin-mobile">
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

        {/* Search form */}
        <motion.form
          onSubmit={handleSearch}
          className="w-full max-w-3xl bg-white/95 backdrop-blur-md p-2 rounded-lg shadow-2xl flex flex-col md:flex-row gap-2 border border-savanna-sand"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15, ease: EASE }}
        >
          <div className="flex-1 flex items-center px-4 md:border-r border-savanna-sand/50">
            <span className="material-symbols-outlined text-primary mr-3 shrink-0">
              location_on
            </span>
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full border-none focus:ring-0 bg-transparent py-4 font-body-md outline-none"
              placeholder="Para onde quer ir?"
              type="text"
            />
          </div>
   
          <button
            type="submit"
            className="bg-primary text-white px-10 py-4 font-label-caps text-label-caps hover:bg-primary-container transition-colors active:scale-95 duration-200 rounded-md shrink-0"
          >
            PESQUISAR
          </button>
        </motion.form>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: EASE }}
        >
          <a
            href="/destinos"
            className="bg-primary text-white px-10 py-4 font-label-caps text-label-caps tracking-widest hover:bg-primary-container transition-colors active:scale-95 duration-200 text-center"
          >
            EXPLORAR DESTINOS
          </a>
          <a
            href="#intro"
            className="border border-white/80 text-white px-10 py-4 font-label-caps text-label-caps tracking-widest hover:bg-white/15 hover:border-white transition-all text-center"
          >
            SABER MAIS
          </a>
        </motion.div>
      </div>
    </section>
  );
}
