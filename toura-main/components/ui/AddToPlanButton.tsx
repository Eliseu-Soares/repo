"use client";

import { usePlanner } from "@/lib/planner";
import type { PlanItem } from "@/types";

interface Props {
  item: PlanItem;
  variant?: "icon" | "full";
}

export default function AddToPlanButton({ item, variant = "icon" }: Props) {
  const { isInPlan, add, remove } = usePlanner();
  const inPlan = isInPlan(item.id);

  function handle(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    inPlan ? remove(item.id) : add(item);
  }

  if (variant === "full") {
    return (
      <button
        onClick={handle}
        className={`flex items-center gap-2 px-4 py-2.5 font-label-caps text-label-caps text-[10px] tracking-widest border transition-colors ${inPlan ? "border-primary text-primary bg-primary/5" : "border-savanna-sand text-on-surface-variant hover:border-primary hover:text-primary"}`}
      >
        <span className="material-symbols-outlined text-[16px]">{inPlan ? "check_circle" : "add_circle"}</span>
        {inPlan ? "NO PLANO" : "ADICIONAR AO PLANO"}
      </button>
    );
  }

  return (
    <button
      onClick={handle}
      aria-label={inPlan ? "Remover do plano" : "Adicionar ao plano"}
      className={`w-9 h-9 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors ${inPlan ? "ring-1 ring-primary" : ""}`}
    >
      <span className={`material-symbols-outlined text-[18px] ${inPlan ? "text-primary" : "text-on-surface-variant"}`}>
        {inPlan ? "check_circle" : "add_circle"}
      </span>
    </button>
  );
}
