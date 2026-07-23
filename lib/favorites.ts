"use client";

import { useState, useEffect, useCallback } from "react";
import type { FavoriteItem } from "@/types";

const KEY = "toura:favorites";
const EV = "toura:favorites:change";

function read(): FavoriteItem[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(KEY) ?? "[]"); } catch { return []; }
}

function write(items: FavoriteItem[]) {
  localStorage.setItem(KEY, JSON.stringify(items));
  window.dispatchEvent(new Event(EV));
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    setFavorites(read());
    const sync = () => setFavorites(read());
    window.addEventListener(EV, sync);
    window.addEventListener("storage", sync);
    return () => { window.removeEventListener(EV, sync); window.removeEventListener("storage", sync); };
  }, []);

  const toggle = useCallback((item: Omit<FavoriteItem, "addedAt">) => {
    const cur = read();
    const next = cur.some((f) => f.id === item.id)
      ? cur.filter((f) => f.id !== item.id)
      : [...cur, { ...item, addedAt: new Date().toISOString() }];
    write(next);
    setFavorites(next);
  }, []);

  const isFavorited = useCallback((id: string) => favorites.some((f) => f.id === id), [favorites]);
  const clear = useCallback(() => { write([]); setFavorites([]); }, []);

  return { favorites, toggle, isFavorited, clear };
}
