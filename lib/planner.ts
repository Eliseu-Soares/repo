"use client";

import { useState, useEffect, useCallback } from "react";
import type { PlanItem } from "@/types";

const KEY = "toura:planner";
const EV = "toura:planner:change";

function read(): PlanItem[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(KEY) ?? "[]"); } catch { return []; }
}

function write(items: PlanItem[]) {
  localStorage.setItem(KEY, JSON.stringify(items));
  window.dispatchEvent(new Event(EV));
}

export function usePlanner() {
  const [items, setItems] = useState<PlanItem[]>([]);

  useEffect(() => {
    setItems(read());
    const sync = () => setItems(read());
    window.addEventListener(EV, sync);
    window.addEventListener("storage", sync);
    return () => { window.removeEventListener(EV, sync); window.removeEventListener("storage", sync); };
  }, []);

  const add = useCallback((item: PlanItem) => {
    const cur = read();
    if (cur.some((p) => p.id === item.id)) return;
    const next = [...cur, item];
    write(next);
    setItems(next);
  }, []);

  const remove = useCallback((id: string) => {
    const next = read().filter((p) => p.id !== id);
    write(next);
    setItems(next);
  }, []);

  const updateDays = useCallback((id: string, days: number) => {
    const next = read().map((p) => (p.id === id ? { ...p, days } : p));
    write(next);
    setItems(next);
  }, []);

  const clear = useCallback(() => { write([]); setItems([]); }, []);

  const isInPlan = useCallback((id: string) => items.some((p) => p.id === id), [items]);

  const totalDays = items.reduce((s, p) => s + p.days, 0);

  return { items, add, remove, updateDays, clear, isInPlan, totalDays };
}
