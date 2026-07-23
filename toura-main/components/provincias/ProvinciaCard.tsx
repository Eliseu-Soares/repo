import type { Province } from "@/types";

const REGION_COLORS: Record<string, string> = {
  Norte: "bg-primary/15 text-primary",
  Centro: "bg-secondary/15 text-secondary",
  Sul: "bg-error/15 text-error",
  Leste: "bg-on-surface/10 text-on-surface-variant",
  Litoral: "bg-primary/25 text-primary",
};

export default function ProvinciaCard({ province }: { province: Province }) {
  return (
    <a
      href={`/provincias/${province.slug}`}
      className="group flex flex-col overflow-hidden border border-savanna-sand hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image — portrait */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${province.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Region badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`font-label-caps text-label-caps px-2.5 py-1 text-[10px] tracking-widest uppercase ${REGION_COLORS[province.region] ?? "bg-surface/80 text-on-surface"} backdrop-blur-sm`}
          >
            {province.region}
          </span>
        </div>

        {/* Province name overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-headline-sm text-[22px] font-semibold text-white leading-tight mb-1">
            {province.name}
          </h3>
          <p className="font-label-caps text-label-caps text-white/70">
            {province.destinationCount} destino{province.destinationCount !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 flex items-center justify-between">
        <div>
          <span className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest uppercase block mb-0.5">
            Capital
          </span>
          <span className="font-body-md text-sm text-on-surface">{province.capital}</span>
        </div>
        <div className="flex items-center gap-1 text-primary font-label-caps text-label-caps border-b border-primary pb-0.5 group-hover:text-secondary group-hover:border-secondary transition-colors">
          <span className="text-[11px]">Explorar</span>
          <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
        </div>
      </div>
    </a>
  );
}
