"use client";

import { useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { slideLeft, viewportOnce } from "@/lib/motion";
import { destinations } from "@/data/destinations";
import DestinationCard from "@/components/ui/DestinationCard";
import type { Category } from "@/types";

interface Props {
  currentSlug: string;
  provinceSlug: string;
  category: Category;
}

const CARD_WIDTH = 360;
const CARD_GAP = 32;

export default function NearbyDestinations({
  currentSlug,
  provinceSlug,
  category,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nearby = useMemo(() => {
    const sameProvince = destinations.filter(
      (d) => d.province === provinceSlug && d.slug !== currentSlug
    );
    if (sameProvince.length >= 2) return sameProvince.slice(0, 4);
    const sameCategory = destinations.filter(
      (d) => d.category === category && d.slug !== currentSlug
    );
    return sameCategory.slice(0, 4);
  }, [currentSlug, provinceSlug, category]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const index = Math.round(
      scrollRef.current.scrollLeft / (CARD_WIDTH + CARD_GAP)
    );
    setCurrentIndex(index);
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const clamped = Math.max(0, Math.min(index, nearby.length - 1));
    scrollRef.current.scrollTo({
      left: clamped * (CARD_WIDTH + CARD_GAP),
      behavior: "smooth",
    });
    setCurrentIndex(clamped);
  };

  if (nearby.length === 0) return null;

  return (
    <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-16">
      {/* Header */}
      <div className="flex items-end justify-between mb-10">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">
            Explore Mais
          </span>
          <h2 className="font-headline-sm text-headline-sm">
            Destinos Próximos
          </h2>
        </motion.div>

        {/* Nav arrows */}
        <div className="flex gap-3">
          <button
            onClick={() => scrollToIndex(currentIndex - 1)}
            disabled={currentIndex === 0}
            aria-label="Destino anterior"
            className="w-11 h-11 border border-savanna-sand flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors disabled:opacity-30"
          >
            <span className="material-symbols-outlined text-[20px]">
              arrow_back
            </span>
          </button>
          <button
            onClick={() => scrollToIndex(currentIndex + 1)}
            disabled={currentIndex >= nearby.length - 1}
            aria-label="Próximo destino"
            className="w-11 h-11 border border-savanna-sand flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors disabled:opacity-30"
          >
            <span className="material-symbols-outlined text-[20px]">
              arrow_forward
            </span>
          </button>
        </div>
      </div>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-8 overflow-x-auto hide-scrollbar pb-4"
      >
        {nearby.map((dest) => (
          <div
            key={dest.id}
            className="shrink-0"
            style={{ width: CARD_WIDTH }}
          >
            <DestinationCard destination={dest} />
          </div>
        ))}
      </div>
    </div>
  );
}
