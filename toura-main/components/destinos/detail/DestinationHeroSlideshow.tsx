"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  images: string[];
  title: string;
  category: string;
  province: string;
}

export default function DestinationHeroSlideshow({
  images,
  title,
  category,
  province,
}: Props) {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => {
    const clamped = ((index % images.length) + images.length) % images.length;
    setCurrent(clamped);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden" style={{ height: "921px" }}>
      {/* Slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          {/* Ken Burns scale */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[current]})` }}
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "linear" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Category badge — top right */}
      <div className="absolute top-6 right-6 z-10">
        <span className="bg-primary text-white font-label-caps text-label-caps px-3 py-1 tracking-widest uppercase">
          {category}
        </span>
      </div>

      {/* Province / title — bottom left */}
      <div className="absolute bottom-20 left-6 lg:left-12 z-10 max-w-2xl">
        <p className="font-label-caps text-label-caps text-white/80 tracking-widest uppercase mb-3">
          {province}
        </p>
        <h1 className="font-headline-md text-headline-md text-white leading-tight drop-shadow-lg">
          {title}
        </h1>
      </div>

      {/* Left arrow */}
      <button
        onClick={() => goTo(current - 1)}
        aria-label="Imagem anterior"
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center border border-white/40 backdrop-blur-sm text-white hover:bg-white/15 transition-colors"
      >
        <span className="material-symbols-outlined text-[24px]">chevron_left</span>
      </button>

      {/* Right arrow */}
      <button
        onClick={() => goTo(current + 1)}
        aria-label="Próxima imagem"
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center border border-white/40 backdrop-blur-sm text-white hover:bg-white/15 transition-colors"
      >
        <span className="material-symbols-outlined text-[24px]">chevron_right</span>
      </button>

      {/* Dot indicators — bottom center */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir para imagem ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Photo counter — bottom right */}
      <div className="absolute bottom-6 right-6 z-10">
        <span className="font-label-caps text-label-caps text-white/80 tracking-widest">
          {current + 1} / {images.length}
        </span>
      </div>
    </div>
  );
}
