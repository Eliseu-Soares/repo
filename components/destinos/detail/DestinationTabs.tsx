"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { DestinationDetails } from "@/types";

interface Props {
  details: DestinationDetails;
}

const TABS = ["Sobre", "O que fazer", "Como chegar", "Informações úteis"] as const;
type Tab = (typeof TABS)[number];

const INFO_ITEMS: {
  key: keyof DestinationDetails["usefulInfo"];
  icon: string;
  label: string;
}[] = [
  { key: "hours", icon: "schedule", label: "Horário" },
  { key: "entry", icon: "confirmation_number", label: "Entrada" },
  { key: "bestSeason", icon: "wb_sunny", label: "Melhor época" },
  { key: "climate", icon: "thermostat", label: "Clima" },
];

export default function DestinationTabs({ details }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("Sobre");

  return (
    <div>
      {/* Tab bar */}
      <div className="flex gap-0 border-b border-savanna-sand overflow-x-auto hide-scrollbar">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-4 font-label-caps text-label-caps border-b-2 transition-all whitespace-nowrap shrink-0 ${
              activeTab === tab
                ? "border-primary text-primary"
                : "border-transparent text-on-surface-variant hover:text-on-surface"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="pt-8 min-h-[320px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {activeTab === "Sobre" && (
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {details.history}
              </p>
            )}

            {activeTab === "O que fazer" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {details.activities.map((activity, i) => (
                  <div
                    key={i}
                    className="border border-savanna-sand p-5 flex flex-col gap-3"
                  >
                    <span className="material-symbols-outlined text-primary text-[28px]">
                      {activity.icon}
                    </span>
                    <h4 className="font-headline-sm text-headline-sm">
                      {activity.name}
                    </h4>
                    <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "Como chegar" && (
              <div className="flex flex-col gap-6">
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {details.howToGet}
                </p>
                <div className="border border-savanna-sand bg-surface-container-low p-5 flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-[28px] shrink-0">
                    tips_and_updates
                  </span>
                  <div>
                    <p className="font-label-caps text-label-caps text-secondary mb-1">
                      DICA DE VIAGEM
                    </p>
                    <p className="font-body-md text-sm text-on-surface-variant">
                      Verifique com a TAAG (a companhia aérea nacional) os voos
                      disponíveis a partir de Luanda para a região. Muitos
                      operadores turísticos oferecem transferes desde o aeroporto.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Informações úteis" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {INFO_ITEMS.map(({ key, icon, label }) => {
                  const value = details.usefulInfo[key];
                  if (!value) return null;
                  return (
                    <div
                      key={key}
                      className="bg-surface-container-low p-5 flex items-start gap-3"
                    >
                      <span className="material-symbols-outlined text-primary text-[24px] shrink-0 mt-0.5">
                        {icon}
                      </span>
                      <div>
                        <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">
                          {label.toUpperCase()}
                        </span>
                        <span className="font-body-md text-sm text-on-surface">
                          {value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
