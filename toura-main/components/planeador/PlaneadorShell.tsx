"use client";

import { usePlanner } from "@/lib/planner";
import type { PlanItem } from "@/types";

function PlanCard({ item, onRemove, onDaysChange }: {
  item: PlanItem;
  onRemove: () => void;
  onDaysChange: (days: number) => void;
}) {
  return (
    <div className="flex gap-4 border border-savanna-sand p-4 bg-background hover:border-primary/40 transition-colors group">
      <a href={`/destinos/${item.slug}`} className="shrink-0 overflow-hidden" style={{ width: 88, height: 72 }}>
        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
      </a>
      <div className="flex-1 min-w-0">
        <a href={`/destinos/${item.slug}`}>
          <h3 className="font-headline-sm text-[15px] font-semibold leading-snug hover:text-primary transition-colors line-clamp-1 mb-0.5">{item.title}</h3>
        </a>
        <p className="font-label-caps text-label-caps text-[9px] tracking-widest text-on-surface-variant mb-3">{item.provinceName.toUpperCase()}</p>

        {/* Days selector */}
        <div className="flex items-center gap-3">
          <span className="font-label-caps text-label-caps text-[9px] tracking-widest text-on-surface-variant">DIAS</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onDaysChange(Math.max(1, item.days - 1))}
              className="w-7 h-7 flex items-center justify-center border border-savanna-sand hover:border-primary hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[14px]">remove</span>
            </button>
            <span className="font-body-md text-sm font-semibold w-6 text-center">{item.days}</span>
            <button
              onClick={() => onDaysChange(Math.min(30, item.days + 1))}
              className="w-7 h-7 flex items-center justify-center border border-savanna-sand hover:border-primary hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[14px]">add</span>
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={onRemove}
        aria-label="Remover do plano"
        className="shrink-0 w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-error transition-colors"
      >
        <span className="material-symbols-outlined text-[18px]">close</span>
      </button>
    </div>
  );
}

export default function PlaneadorShell() {
  const { items, remove, updateDays, clear, totalDays } = usePlanner();

  async function handleExport() {
    const lines = [
      "PLANO DE VIAGEM — TOURA ANGOLA",
      `Total: ${totalDays} dias`,
      "",
      ...items.map((p, i) => `${i + 1}. ${p.title} (${p.provinceName}) — ${p.days} dia${p.days !== 1 ? "s" : ""}`),
      "",
      `Gerado em toura.ao`,
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "plano-viagem-angola.txt";
    a.click();
    URL.revokeObjectURL(url);
  }

  async function handleShare() {
    const text = items.map((p) => `${p.title} (${p.days} dia${p.days !== 1 ? "s" : ""})`).join(" → ");
    const msg = `O meu plano para Angola: ${text}. Descoberto em toura.ao`;
    if (navigator.share) {
      try { await navigator.share({ title: "O meu plano de viagem — Toura Angola", text: msg }); } catch { /* cancelled */ }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(msg);
    }
  }

  if (items.length === 0) {
    return (
      <div className="py-24 text-center">
        <span className="material-symbols-outlined text-[64px] text-on-surface-variant/20 block mb-5" style={{ fontVariationSettings: '"FILL" 0, "wght" 200' }}>map</span>
        <h2 className="font-headline-sm text-[20px] font-semibold mb-3">Plano de viagem vazio</h2>
        <p className="font-body-md text-on-surface-variant mb-8 max-w-sm mx-auto">
          Adicione destinos ao plano clicando em{" "}
          <span className="material-symbols-outlined text-[14px] align-middle">add_circle</span>{" "}
          nos cartões ou nas páginas de destino.
        </p>
        <a href="/destinos" className="inline-flex items-center gap-2 bg-primary text-white font-label-caps text-label-caps text-[11px] tracking-widest px-6 py-3.5 hover:bg-primary-container transition-colors">
          <span className="material-symbols-outlined text-[16px]">explore</span>
          EXPLORAR DESTINOS
        </a>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-10">
      {/* Left: list */}
      <div>
        <p className="font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant mb-5">
          {items.length} DESTINO{items.length !== 1 ? "S" : ""} · {totalDays} DIAS NO TOTAL
        </p>
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <PlanCard
              key={item.id}
              item={item}
              onRemove={() => remove(item.id)}
              onDaysChange={(days) => updateDays(item.id, days)}
            />
          ))}
        </div>
        <button
          onClick={clear}
          className="mt-6 flex items-center gap-2 font-label-caps text-label-caps text-[9px] tracking-widest text-on-surface-variant hover:text-error transition-colors"
        >
          <span className="material-symbols-outlined text-[15px]">delete</span>
          LIMPAR PLANO
        </button>
      </div>

      {/* Right: summary */}
      <div className="space-y-4">
        {/* Summary card */}
        <div className="border border-savanna-sand p-6">
          <h2 className="font-headline-sm text-[17px] font-semibold mb-5 pb-4 border-b border-savanna-sand">Resumo</h2>
          <dl className="flex flex-col gap-4 mb-5">
            <div className="flex items-center justify-between">
              <dt className="font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant">DESTINOS</dt>
              <dd className="font-body-md text-sm font-semibold">{items.length}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant">TOTAL DE DIAS</dt>
              <dd className="font-body-md text-sm font-semibold text-primary">{totalDays}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant">PROVÍNCIAS</dt>
              <dd className="font-body-md text-sm font-semibold">{new Set(items.map((p) => p.provinceName)).size}</dd>
            </div>
          </dl>

          {/* Province breakdown */}
          <div className="border-t border-savanna-sand pt-4 flex flex-col gap-2">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <span className="font-body-md text-sm text-on-surface-variant truncate mr-2">{item.title}</span>
                <span className="font-label-caps text-label-caps text-[9px] tracking-widest text-on-surface shrink-0">{item.days}d</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <button
          onClick={handleExport}
          className="flex items-center justify-center gap-2 w-full bg-primary text-white font-label-caps text-label-caps text-[11px] tracking-widest px-6 py-4 hover:bg-primary-container transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">download</span>
          EXPORTAR PLANO
        </button>
        <button
          onClick={handleShare}
          className="flex items-center justify-center gap-2 w-full border border-savanna-sand font-label-caps text-label-caps text-[11px] tracking-widest px-6 py-3.5 text-on-surface-variant hover:border-primary hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[16px]">share</span>
          PARTILHAR PLANO
        </button>
        <a
          href="/contacto"
          className="flex items-center justify-center gap-2 w-full border border-savanna-sand font-label-caps text-label-caps text-[11px] tracking-widest px-6 py-3.5 text-on-surface-variant hover:border-primary hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[16px]">support_agent</span>
          CONTACTAR AGÊNCIA
        </a>
      </div>
    </div>
  );
}
