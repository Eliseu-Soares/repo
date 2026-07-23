"use client";

import Image from "next/image";
import type { Destination } from "@/types";
import FavoriteButton from "./FavoriteButton";
import AddToPlanButton from "./AddToPlanButton";

interface Props {
  destination: Destination;
  priority?: boolean;
}

const CATEGORY_ICONS: Record<string, string> = {
  Praia: "beach_access",
  Natureza: "forest",
  Cultura: "museum",
  Aventura: "hiking",
  Gastronomia: "restaurant",
  Histórico: "account_balance",
};

export default function DestinationCard({ destination, priority }: Props) {
  const favItem = {
    id: `destino-${destination.slug}`,
    type: "destino" as const,
    slug: destination.slug,
    title: destination.title,
    image: destination.image,
    subtitle: destination.provinceName,
  };

  const planItem = {
    id: `destino-${destination.slug}`,
    slug: destination.slug,
    title: destination.title,
    image: destination.image,
    provinceName: destination.provinceName,
    days: 2,
  };

  return (
    <a
      href={`/destinos/${destination.slug}`}
      className="group flex flex-col overflow-hidden bg-surface-container-lowest border border-savanna-sand hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category icon */}
        {CATEGORY_ICONS[destination.category] && (
          <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm px-2 py-1 flex items-center gap-1">
            <span className="material-symbols-outlined text-white text-[14px]">{CATEGORY_ICONS[destination.category]}</span>
          </div>
        )}

        {/* Action buttons — appear on hover */}
        <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <AddToPlanButton item={planItem} variant="icon" />
          <FavoriteButton item={favItem} />
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="font-label-caps text-label-caps text-secondary">
            {destination.provinceName.toUpperCase()} · {destination.category.toUpperCase()}
          </span>
          <div className="flex items-center gap-1 text-primary">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '"FILL" 1, "wght" 400' }}>star</span>
            <span className="font-label-caps text-label-caps font-bold">{destination.rating.toFixed(1)}</span>
          </div>
        </div>

        <h3 className="font-headline-sm text-headline-sm leading-snug mb-3 group-hover:text-primary transition-colors">
          {destination.title}
        </h3>

        <p className="font-body-md text-sm text-on-surface-variant line-clamp-2 flex-1 mb-5">
          {destination.description}
        </p>

        <div className="flex items-center gap-1.5 text-primary font-label-caps text-label-caps border-b border-primary pb-1 w-fit group-hover:text-secondary group-hover:border-secondary transition-colors duration-300">
          <span>Explorar Guia</span>
          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </div>
      </div>
    </a>
  );
}
