import type { GastronomicRouteStep } from "@/data/gastronomia";

interface Props {
  steps: GastronomicRouteStep[];
}

export default function GastronomicRoute({ steps }: Props) {
  return (
    <section>
      <div className="mb-10">
        <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">Itinerário</span>
        <h2 className="font-headline-sm text-headline-sm">Rota Gastronómica de Angola</h2>
        <p className="font-body-md text-on-surface-variant mt-3 max-w-2xl">
          Uma viagem pelos sabores de Angola, de norte a sul — cinco províncias, cinco pratos que definem a identidade culinária do país.
        </p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-7 top-0 bottom-0 w-px bg-savanna-sand hidden md:block" />

        <div className="flex flex-col gap-8">
          {steps.map((step) => (
            <div key={step.step} className="flex gap-6 items-start">
              {/* Step number */}
              <div className="w-14 h-14 bg-primary text-white flex items-center justify-center font-display-lg font-bold text-[18px] shrink-0 z-10">
                {step.step}
              </div>

              {/* Content */}
              <div className="flex-1 border border-savanna-sand p-6 hover:border-primary/30 hover:shadow-sm transition-all">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                  <div>
                    <span className="font-label-caps text-label-caps text-secondary text-[10px] tracking-widest block mb-1">
                      {step.provinceName.toUpperCase()}
                    </span>
                    <h3 className="font-headline-sm text-[18px] font-semibold">{step.dish}</h3>
                  </div>
                  <a
                    href={`/provincias/${step.province}`}
                    className="font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 shrink-0"
                  >
                    <span className="material-symbols-outlined text-[14px]">travel_explore</span>
                    Ver província
                  </a>
                </div>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
