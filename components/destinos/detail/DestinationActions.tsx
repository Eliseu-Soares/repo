"use client";

import { useState } from "react";
import { useFavorites } from "@/lib/favorites";
import { usePlanner } from "@/lib/planner";

interface Props {
  slug: string;
  title: string;
  image: string;
  provinceName: string;
}

export default function DestinationActions({ slug, title, image, provinceName }: Props) {
  const [toast, setToast] = useState<string | null>(null);
  const { isFavorited, toggle } = useFavorites();
  const { isInPlan, add, remove } = usePlanner();

  const favId = `destino-${slug}`;
  const saved = isFavorited(favId);
  const inPlan = isInPlan(favId);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  }

  function handleFavorite() {
    toggle({ id: favId, type: "destino", slug, title, image, subtitle: provinceName });
    showToast(saved ? "Removido dos favoritos" : "Guardado nos favoritos!");
  }

  function handlePlan() {
    if (inPlan) { remove(favId); showToast("Removido do plano"); }
    else { add({ id: favId, slug, title, image, provinceName, days: 2 }); showToast("Adicionado ao plano!"); }
  }

  async function handleShare() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      try { await navigator.share({ title, url }); } catch { /* cancelled */ }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      showToast("Link copiado!");
    }
  }

  return (
    <div className="relative flex flex-wrap items-center gap-3">
      {toast && (
        <span className="absolute -top-10 left-0 bg-on-surface text-surface font-label-caps text-label-caps px-3 py-1.5 whitespace-nowrap pointer-events-none z-10">
          {toast}
        </span>
      )}

      <button
        onClick={handleFavorite}
        className={`flex items-center gap-2 border px-4 py-2.5 font-label-caps text-label-caps text-[10px] tracking-widest transition-all ${saved ? "border-error text-error" : "border-savanna-sand text-on-surface-variant hover:border-primary hover:text-primary"}`}
      >
        <span
          className="material-symbols-outlined text-[18px]"
          style={{ fontVariationSettings: saved ? '"FILL" 1, "wght" 400' : '"FILL" 0, "wght" 400' }}
        >
          favorite
        </span>
        {saved ? "GUARDADO" : "GUARDAR"}
      </button>

      <button
        onClick={handlePlan}
        className={`flex items-center gap-2 border px-4 py-2.5 font-label-caps text-label-caps text-[10px] tracking-widest transition-all ${inPlan ? "border-primary text-primary bg-primary/5" : "border-savanna-sand text-on-surface-variant hover:border-primary hover:text-primary"}`}
      >
        <span className="material-symbols-outlined text-[18px]">{inPlan ? "check_circle" : "add_circle"}</span>
        {inPlan ? "NO PLANO" : "PLANO"}
      </button>

      <button
        onClick={handleShare}
        className="flex items-center gap-2 border border-savanna-sand px-4 py-2.5 font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant hover:border-primary hover:text-primary transition-all"
      >
        <span className="material-symbols-outlined text-[18px]">share</span>
        PARTILHAR
      </button>
    </div>
  );
}
