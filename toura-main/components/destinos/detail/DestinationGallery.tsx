"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  images: string[];
  title: string;
}

export default function DestinationGallery({ images, title }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goTo = useCallback(
    (index: number) => {
      const clamped = ((index % images.length) + images.length) % images.length;
      setLightboxIndex(clamped);
    },
    [images.length]
  );

  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goTo(lightboxIndex - 1);
      if (e.key === "ArrowRight") goTo(lightboxIndex + 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen, lightboxIndex, goTo]);

  return (
    <>
      <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-16">
        {/* Header */}
        <div className="mb-10">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">
            Imagens
          </span>
          <h2 className="font-headline-sm text-headline-sm">
            Galeria de {title}
          </h2>
        </div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-4">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="block w-full mb-4 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={`Ver imagem ${i + 1} de ${title}`}
            >
              <div
                className="w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${src})`,
                  aspectRatio: i % 3 === 0 ? "4/5" : i % 3 === 1 ? "16/10" : "3/4",
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Image */}
            <motion.img
              key={lightboxIndex}
              src={images[lightboxIndex]}
              alt={`${title} — imagem ${lightboxIndex + 1}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22 }}
              className="object-contain max-h-[90vh] max-w-[90vw] pointer-events-none select-none"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Close button */}
            <button
              onClick={closeLightbox}
              aria-label="Fechar galeria"
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center border border-white/30 text-white hover:bg-white/15 transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>

            {/* Left arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goTo(lightboxIndex - 1);
              }}
              aria-label="Imagem anterior"
              className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-white/30 text-white hover:bg-white/15 transition-colors"
            >
              <span className="material-symbols-outlined text-[24px]">chevron_left</span>
            </button>

            {/* Right arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goTo(lightboxIndex + 1);
              }}
              aria-label="Próxima imagem"
              className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-white/30 text-white hover:bg-white/15 transition-colors"
            >
              <span className="material-symbols-outlined text-[24px]">chevron_right</span>
            </button>

            {/* Counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
              <span className="font-label-caps text-label-caps text-white/80 tracking-widest">
                {lightboxIndex + 1} / {images.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
