"use client";

import { useFavorites } from "@/lib/favorites";
import type { FavoriteItem, FavoriteItemType } from "@/types";
import { useState } from "react";

const TYPE_LABELS: Record<FavoriteItemType, string> = {
  destino: "Destinos",
  evento: "Eventos",
  experiencia: "Experiências",
};

const TYPE_ICONS: Record<FavoriteItemType, string> = {
  destino: "location_on",
  evento: "event",
  experiencia: "hiking",
};

const TYPE_HREFS: Record<FavoriteItemType, (slug: string) => string> = {
  destino: (s) => `/destinos/${s}`,
  evento: (s) => `/eventos/${s}`,
  experiencia: (s) => `/experiencias/${s}`,
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-AO", { day: "numeric", month: "long" });
}

function FavoriteCard({ item, onRemove }: { item: FavoriteItem; onRemove: () => void }) {
  return (
    <div className="group relative flex gap-4 border border-savanna-sand p-4 hover:border-primary/40 transition-colors bg-background">
      <a href={TYPE_HREFS[item.type](item.slug)} className="shrink-0 overflow-hidden" style={{ width: 88, height: 72 }}>
        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
      </a>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="material-symbols-outlined text-[13px] text-on-surface-variant">{TYPE_ICONS[item.type]}</span>
          <span className="font-label-caps text-label-caps text-[9px] tracking-widest text-on-surface-variant uppercase">{TYPE_LABELS[item.type]}</span>
        </div>
        <a href={TYPE_HREFS[item.type](item.slug)}>
          <h3 className="font-headline-sm text-[15px] font-semibold leading-snug hover:text-primary transition-colors line-clamp-1">{item.title}</h3>
        </a>
        <p className="font-body-md text-sm text-on-surface-variant mt-0.5">{item.subtitle}</p>
        <p className="font-label-caps text-label-caps text-[9px] tracking-widest text-on-surface-variant/60 mt-1">
          Guardado a {formatDate(item.addedAt)}
        </p>
      </div>
      <button
        onClick={onRemove}
        aria-label="Remover dos favoritos"
        className="shrink-0 w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-error transition-colors"
      >
        <span className="material-symbols-outlined text-[18px]">close</span>
      </button>
    </div>
  );
}

export default function FavoritosShell() {
  const { favorites, toggle, clear } = useFavorites();
  const [filter, setFilter] = useState<FavoriteItemType | "all">("all");

  const filtered = filter === "all" ? favorites : favorites.filter((f) => f.type === filter);
  const sorted = [...filtered].sort((a, b) => b.addedAt.localeCompare(a.addedAt));

  if (favorites.length === 0) {
    return (
      <div className="py-24 text-center">
        <span className="material-symbols-outlined text-[64px] text-on-surface-variant/20 block mb-5" style={{ fontVariationSettings: '"FILL" 0, "wght" 200' }}>favorite</span>
        <h2 className="font-headline-sm text-[20px] font-semibold mb-3">Sem favoritos ainda</h2>
        <p className="font-body-md text-on-surface-variant mb-8 max-w-sm mx-auto">
          Clique no coração nos destinos, eventos e experiências para os guardar aqui.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          {(["destino", "evento", "experiencia"] as const).map((t) => (
            <a key={t} href={`/${t === "destino" ? "destinos" : t === "evento" ? "eventos" : "experiencias"}`}
              className="flex items-center gap-2 border border-savanna-sand px-4 py-2.5 font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant hover:border-primary hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[15px]">{TYPE_ICONS[t]}</span>
              {TYPE_LABELS[t].toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    );
  }

  async function handleShare() {
    const text = favorites.map((f) => `${f.title} — ${typeof window !== "undefined" ? window.location.origin : "https://toura.ao"}${TYPE_HREFS[f.type](f.slug)}`).join("\n");
    if (navigator.share) {
      try { await navigator.share({ title: "Os meus favoritos — Toura Angola", text }); } catch { /* cancelled */ }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
    }
  }

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        {/* Type filter */}
        <div className="flex gap-2 flex-wrap">
          {(["all", "destino", "evento", "experiencia"] as const).map((t) => {
            const count = t === "all" ? favorites.length : favorites.filter((f) => f.type === t).length;
            if (count === 0 && t !== "all") return null;
            return (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`flex items-center gap-1.5 font-label-caps text-label-caps text-[9px] tracking-widest px-3 py-2 border transition-colors ${filter === t ? "bg-primary text-white border-primary" : "border-savanna-sand text-on-surface-variant hover:border-primary hover:text-primary"}`}
              >
                {t !== "all" && <span className="material-symbols-outlined text-[12px]">{TYPE_ICONS[t]}</span>}
                {t === "all" ? "TODOS" : TYPE_LABELS[t].toUpperCase()} ({count})
              </button>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={handleShare}
            className="flex items-center gap-2 border border-savanna-sand px-3 py-2 font-label-caps text-label-caps text-[9px] tracking-widest text-on-surface-variant hover:border-primary hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[15px]">share</span>
            PARTILHAR LISTA
          </button>
          <button
            onClick={clear}
            className="flex items-center gap-2 border border-savanna-sand px-3 py-2 font-label-caps text-label-caps text-[9px] tracking-widest text-on-surface-variant hover:border-error hover:text-error transition-colors"
          >
            <span className="material-symbols-outlined text-[15px]">delete</span>
            LIMPAR
          </button>
        </div>
      </div>

      {/* Count */}
      <p className="font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant mb-5">
        {sorted.length} ITEM{sorted.length !== 1 ? "S" : ""}
      </p>

      {/* List */}
      <div className="flex flex-col gap-3">
        {sorted.map((item) => (
          <FavoriteCard
            key={item.id}
            item={item}
            onRemove={() => toggle(item)}
          />
        ))}
      </div>

      {filtered.length === 0 && favorites.length > 0 && (
        <div className="py-16 text-center">
          <p className="font-body-md text-on-surface-variant">Nenhum item nesta categoria.</p>
        </div>
      )}
    </div>
  );
}
