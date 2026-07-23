"use client";

import { useFavorites } from "@/lib/favorites";
import type { FavoriteItem } from "@/types";

interface Props {
  item: Omit<FavoriteItem, "addedAt">;
  className?: string;
}

export default function FavoriteButton({ item, className = "" }: Props) {
  const { isFavorited, toggle } = useFavorites();
  const saved = isFavorited(item.id);

  return (
    <button
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggle(item); }}
      aria-label={saved ? "Remover dos favoritos" : "Guardar nos favoritos"}
      className={`w-9 h-9 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors ${className}`}
    >
      <span
        className={`material-symbols-outlined text-[20px] transition-colors ${saved ? "text-error" : "text-on-surface-variant"}`}
        style={{ fontVariationSettings: saved ? '"FILL" 1, "wght" 400' : '"FILL" 0, "wght" 400' }}
      >
        favorite
      </span>
    </button>
  );
}
