"use client";

import { useState, useEffect } from "react";
import { useFavorites } from "@/lib/favorites";
import { usePlanner } from "@/lib/planner";

interface Prefs {
  name: string;
  email: string;
  lang: "pt" | "en";
  newsletter: boolean;
}

const DEFAULT_PREFS: Prefs = { name: "", email: "", lang: "pt", newsletter: true };

function readPrefs(): Prefs {
  if (typeof window === "undefined") return DEFAULT_PREFS;
  try { return { ...DEFAULT_PREFS, ...JSON.parse(localStorage.getItem("toura:prefs") ?? "{}") }; } catch { return DEFAULT_PREFS; }
}

export default function PerfilShell() {
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);
  const [saved, setSaved] = useState(false);
  const { favorites, clear: clearFavs } = useFavorites();
  const { items: planItems, totalDays, clear: clearPlan } = usePlanner();

  useEffect(() => { setPrefs(readPrefs()); }, []);

  function update(patch: Partial<Prefs>) {
    setPrefs((p) => ({ ...p, ...patch }));
    setSaved(false);
  }

  function save() {
    localStorage.setItem("toura:prefs", JSON.stringify(prefs));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-10">
      {/* Left: preferences form */}
      <div className="space-y-8">
        {/* Identity */}
        <section>
          <h2 className="font-headline-sm text-[18px] font-semibold mb-5 pb-4 border-b border-savanna-sand">Informações Pessoais</h2>

          {/* Avatar placeholder */}
          <div className="flex items-center gap-5 mb-6">
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-[36px] text-primary">person</span>
            </div>
            <div>
              <p className="font-headline-sm text-[15px] font-semibold">
                {prefs.name || "Viajante Toura"}
              </p>
              <p className="font-body-md text-sm text-on-surface-variant">{prefs.email || "Sem e-mail definido"}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <label className="font-label-caps text-label-caps text-[9px] tracking-widest text-on-surface-variant block mb-1.5">NOME</label>
              <input
                type="text"
                value={prefs.name}
                onChange={(e) => update({ name: e.target.value })}
                placeholder="O seu nome"
                className="w-full border border-savanna-sand px-3 py-2.5 font-body-md text-sm bg-background focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="font-label-caps text-label-caps text-[9px] tracking-widest text-on-surface-variant block mb-1.5">E-MAIL</label>
              <input
                type="email"
                value={prefs.email}
                onChange={(e) => update({ email: e.target.value })}
                placeholder="o-seu@email.com"
                className="w-full border border-savanna-sand px-3 py-2.5 font-body-md text-sm bg-background focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
        </section>

        {/* Preferences */}
        <section>
          <h2 className="font-headline-sm text-[18px] font-semibold mb-5 pb-4 border-b border-savanna-sand">Preferências</h2>
          <div className="flex flex-col gap-5">
            {/* Language */}
            <div>
              <p className="font-label-caps text-label-caps text-[9px] tracking-widest text-on-surface-variant mb-2">IDIOMA</p>
              <div className="flex gap-2">
                {(["pt", "en"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => update({ lang: l })}
                    className={`px-4 py-2 font-label-caps text-label-caps text-[10px] tracking-widest border transition-colors ${prefs.lang === l ? "bg-primary text-white border-primary" : "border-savanna-sand text-on-surface-variant hover:border-primary hover:text-primary"}`}
                  >
                    {l === "pt" ? "PORTUGUÊS" : "ENGLISH"}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <label className="flex items-center gap-3 cursor-pointer">
              <button
                role="switch"
                aria-checked={prefs.newsletter}
                onClick={() => update({ newsletter: !prefs.newsletter })}
                className={`relative w-10 h-5 transition-colors ${prefs.newsletter ? "bg-primary" : "bg-on-surface-variant/30"}`}
              >
                <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white transition-transform ${prefs.newsletter ? "translate-x-5" : ""}`} />
              </button>
              <span className="font-body-md text-sm text-on-surface">Receber newsletter mensal</span>
            </label>
          </div>
        </section>

        {/* Auth placeholder */}
        <section>
          <h2 className="font-headline-sm text-[18px] font-semibold mb-5 pb-4 border-b border-savanna-sand">Conta</h2>
          <p className="font-body-md text-sm text-on-surface-variant mb-5">
            Crie uma conta para sincronizar os seus favoritos e planos em todos os dispositivos.
          </p>
          <div className="flex flex-col gap-3">
            <button className="flex items-center gap-3 border border-savanna-sand px-4 py-3 font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant hover:border-primary hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[18px]">mail</span>
              ENTRAR COM E-MAIL
            </button>
            <button className="flex items-center gap-3 border border-savanna-sand px-4 py-3 font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant hover:border-primary hover:text-primary transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              ENTRAR COM GOOGLE
            </button>
          </div>
          <p className="font-label-caps text-label-caps text-[9px] tracking-widest text-on-surface-variant/60 mt-3">
            Autenticação disponível em breve.
          </p>
        </section>

        {/* Save */}
        <button
          onClick={save}
          className={`flex items-center gap-2 px-6 py-3.5 font-label-caps text-label-caps text-[11px] tracking-widest transition-colors ${saved ? "bg-[#16a34a] text-white" : "bg-primary text-white hover:bg-primary-container"}`}
        >
          <span className="material-symbols-outlined text-[18px]">{saved ? "check" : "save"}</span>
          {saved ? "GUARDADO!" : "GUARDAR PREFERÊNCIAS"}
        </button>
      </div>

      {/* Right: stats */}
      <div className="space-y-4">
        <div className="border border-savanna-sand p-6">
          <h3 className="font-headline-sm text-[15px] font-semibold mb-5 pb-4 border-b border-savanna-sand">A Sua Actividade</h3>
          <div className="flex flex-col gap-4">
            <a href="/favoritos" className="flex items-center justify-between hover:text-primary transition-colors group">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-on-surface-variant" style={{ fontVariationSettings: '"FILL" 0, "wght" 400' }}>favorite</span>
                <span className="font-body-md text-sm">Favoritos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-label-caps text-label-caps text-[11px] tracking-widest font-semibold text-primary">{favorites.length}</span>
                <span className="material-symbols-outlined text-[14px] text-on-surface-variant group-hover:text-primary transition-colors">arrow_forward</span>
              </div>
            </a>
            <a href="/planeador" className="flex items-center justify-between hover:text-primary transition-colors group">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-on-surface-variant">map</span>
                <span className="font-body-md text-sm">Plano de Viagem</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-label-caps text-label-caps text-[11px] tracking-widest font-semibold text-primary">{planItems.length} destinos</span>
                <span className="material-symbols-outlined text-[14px] text-on-surface-variant group-hover:text-primary transition-colors">arrow_forward</span>
              </div>
            </a>
            {totalDays > 0 && (
              <div className="flex items-center justify-between border-t border-savanna-sand pt-4">
                <span className="font-label-caps text-label-caps text-[9px] tracking-widest text-on-surface-variant">DIAS PLANEADOS</span>
                <span className="font-body-md text-sm font-semibold text-primary">{totalDays} dias</span>
              </div>
            )}
          </div>
        </div>

        {/* Data management */}
        <div className="border border-savanna-sand p-6">
          <h3 className="font-headline-sm text-[15px] font-semibold mb-4">Gerir Dados</h3>
          <div className="flex flex-col gap-2">
            <button onClick={clearFavs} className="flex items-center gap-2 font-label-caps text-label-caps text-[9px] tracking-widest text-on-surface-variant hover:text-error transition-colors py-1.5">
              <span className="material-symbols-outlined text-[15px]">heart_minus</span>
              LIMPAR FAVORITOS
            </button>
            <button onClick={clearPlan} className="flex items-center gap-2 font-label-caps text-label-caps text-[9px] tracking-widest text-on-surface-variant hover:text-error transition-colors py-1.5">
              <span className="material-symbols-outlined text-[15px]">delete</span>
              LIMPAR PLANO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
