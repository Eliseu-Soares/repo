import type { Restaurant } from "@/types";

interface Props {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant: r }: Props) {
  return (
    <div className="flex gap-4 p-5 border border-savanna-sand hover:border-primary/30 hover:shadow-sm transition-all duration-300">
      <div
        className="w-20 h-20 bg-cover bg-center shrink-0"
        style={{ backgroundImage: `url(${r.image})` }}
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-headline-sm text-[15px] font-semibold">{r.name}</h3>
          <span className="font-label-caps text-label-caps text-[11px] text-on-surface-variant shrink-0">{r.priceRange}</span>
        </div>
        <p className="font-label-caps text-label-caps text-secondary text-[10px] tracking-widest mb-1.5">{r.specialty.toUpperCase()}</p>
        <p className="font-body-md text-xs text-on-surface-variant line-clamp-2 mb-2">{r.description}</p>
        <div className="flex items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined text-[12px]">location_on</span>
          <span className="font-label-caps text-label-caps text-[10px] tracking-widest">{r.provinceName.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
}
