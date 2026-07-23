import type { Dish } from "@/types";

const TYPE_COLORS: Record<string, string> = {
  "Prato Principal": "bg-primary/15 text-primary",
  "Entrada": "bg-secondary/15 text-secondary",
  "Sobremesa": "bg-error/15 text-error",
  "Bebida": "bg-[#2563EB]/15 text-[#2563EB]",
  "Acompanhamento": "bg-[#d97706]/15 text-[#d97706]",
};

interface Props {
  dish: Dish;
}

export default function DishCard({ dish }: Props) {
  return (
    <a
      href={`/gastronomia/${dish.slug}`}
      className="group flex flex-col overflow-hidden border border-savanna-sand hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-background"
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${dish.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className={`font-label-caps text-label-caps px-2.5 py-1 text-[10px] tracking-widest backdrop-blur-sm ${TYPE_COLORS[dish.type] ?? "bg-surface/80 text-on-surface"}`}>
            {dish.type.toUpperCase()}
          </span>
        </div>
        {dish.featured && (
          <div className="absolute top-3 right-3">
            <span className="font-label-caps text-label-caps px-2.5 py-1 text-[10px] tracking-widest bg-secondary text-white">
              DESTAQUE
            </span>
          </div>
        )}
      </div>

      <div className="flex-1 p-5 flex flex-col gap-3">
        <h3 className="font-headline-sm text-[17px] font-semibold group-hover:text-primary transition-colors">
          {dish.name}
        </h3>
        <p className="font-body-md text-sm text-on-surface-variant line-clamp-2 flex-1">
          {dish.description}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-savanna-sand">
          <div className="flex items-center gap-1.5 text-on-surface-variant">
            <span className="material-symbols-outlined text-[14px]">location_on</span>
            <span className="font-label-caps text-label-caps text-[10px] tracking-widest">{dish.provinceName.toUpperCase()}</span>
          </div>
          <span className="flex items-center gap-1 text-primary font-label-caps text-label-caps text-[11px] border-b border-primary pb-0.5 group-hover:text-secondary group-hover:border-secondary transition-colors">
            Ver receita
            <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
          </span>
        </div>
      </div>
    </a>
  );
}
