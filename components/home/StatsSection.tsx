"use client";

import { fadeUp, stagger, staggerSlow, viewportOnce } from "@/lib/motion";

const PLANNING_CARDS = [
  {
    icon: "fact_check",
    title: "Vistos & Formalidades",
    description:
      "Informação atualizada sobre o processo simplificado de isenção e pedido de vistos para turistas internacionais.",
    cta: "SABER MAIS",
  },
  {
    icon: "flight",
    title: "Voos & Acessos",
    description:
      "Consulte as principais rotas internacionais e ligações domésticas operadas pela TAAG e parceiros.",
    cta: "RESERVAR VOOS",
  },
  {
    icon: "directions_car",
    title: "Transportes Internos",
    description:
      "Opções de aluguer de viaturas 4x4, guias certificados e logística de transporte entre províncias.",
    cta: "COMO MOVER-SE",
  },
];

export default function PlanningSection() {
  return (
    <section className="bg-surface-container-low py-section-gap">
      <div className="px-margin-desktop max-w-container-max mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md tracking-tight mb-4">
            Planeie a sua Viagem
          </h2>
          <p className="font-body-md text-on-surface-variant">
            Tudo o que precisa para entrar no coração de África com total
            segurança e conforto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {PLANNING_CARDS.map((card) => (
            <div
              key={card.title}
              className="relative bg-surface-container-lowest p-10 border border-savanna-sand hover:border-transparent hover:shadow-[0_24px_60px_rgba(11,19,43,0.14)] transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-primary transition-[width] duration-300 group-hover:w-full" />

              <div className="w-16 h-16 rounded-full ring-1 ring-primary-container/20 bg-primary-container/10 flex items-center justify-center mb-7 group-hover:bg-primary transition-colors duration-300">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-[26px] transition-colors duration-300">
                  {card.icon}
                </span>
              </div>

              <h5 className="font-headline-sm text-[20px] font-semibold tracking-tight leading-snug mb-3">
                {card.title}
              </h5>
              <p className="text-on-surface-variant font-body-md text-[12px] leading-relaxed mb-7">
                {card.description}
              </p>
              <a
                href="#"
                className="font-label-caps text-[11px] tracking-[0.12em] text-primary flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                {card.cta}{" "}
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}