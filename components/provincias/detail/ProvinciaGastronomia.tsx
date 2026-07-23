import type { LocalDish } from "@/types";

interface Props {
  dishes: LocalDish[];
  provinceName: string;
}

export default function ProvinciaGastronomia({ dishes, provinceName }: Props) {
  if (dishes.length === 0) return null;

  return (
    <section className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-16 border-t border-savanna-sand">
      <div className="mb-10">
        <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">
          Gastronomia Local
        </span>
        <h2 className="font-headline-sm text-headline-sm">
          Sabores de {provinceName}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <div
            key={dish.name}
            className="flex gap-5 p-6 border border-savanna-sand hover:border-primary/30 hover:shadow-sm transition-all duration-300"
          >
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary text-[24px]">
                {dish.icon}
              </span>
            </div>
            <div>
              <h3 className="font-headline-sm text-[16px] font-semibold mb-2">
                {dish.name}
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                {dish.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
