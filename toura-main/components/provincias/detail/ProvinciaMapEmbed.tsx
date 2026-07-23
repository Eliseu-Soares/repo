"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Destination } from "@/types";

const CATEGORY_COLORS: Record<string, string> = {
  Praia: "#2563EB",
  Natureza: "#16a34a",
  Cultura: "#d97706",
  Aventura: "#ea580c",
  Gastronomia: "#dc2626",
  Histórico: "#7c3aed",
};

function createPinIcon(color: string) {
  return L.divIcon({
    html: `<div style="width:14px;height:14px;border-radius:50%;background:${color};border:2.5px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.35)"></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    className: "",
  });
}

interface Props {
  destinations: Destination[];
  center: { lat: number; lng: number };
  provinceName: string;
}

export default function ProvinciaMapEmbed({ destinations, center, provinceName }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const withCoords = destinations.filter((d) => d.coordinates);

    const map = L.map(containerRef.current, {
      center: [center.lat, center.lng],
      zoom: withCoords.length > 0 ? 7 : 6,
      zoomControl: true,
      scrollWheelZoom: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    withCoords.forEach((dest) => {
      if (!dest.coordinates) return;
      const marker = L.marker(
        [dest.coordinates.lat, dest.coordinates.lng],
        { icon: createPinIcon(CATEGORY_COLORS[dest.category] ?? "#00BFA5") }
      ).addTo(map);

      marker.bindPopup(
        `<div style="min-width:180px;font-family:system-ui,sans-serif">
          <div style="font-size:10px;text-transform:uppercase;color:#6b7280;margin-bottom:3px">${dest.category}</div>
          <div style="font-size:14px;font-weight:600;color:#111827;margin-bottom:6px">${dest.title}</div>
          <a href="/destinos/${dest.slug}" style="font-size:10px;text-transform:uppercase;letter-spacing:.06em;color:#00bfa5;font-weight:600;text-decoration:none">
            Explorar →
          </a>
        </div>`,
        { maxWidth: 220 }
      );
    });

    if (withCoords.length > 1) {
      const bounds = L.latLngBounds(
        withCoords.map((d) => [d.coordinates!.lat, d.coordinates!.lng])
      );
      map.fitBounds(bounds, { padding: [40, 40] });
    }

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  const pinCount = destinations.filter((d) => d.coordinates).length;

  return (
    <section className="border-t border-savanna-sand">
      <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-10">
        <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
          <div>
            <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-2 uppercase">
              Mapa
            </span>
            <h2 className="font-headline-sm text-headline-sm">
              Destinos de {provinceName} no Mapa
            </h2>
          </div>
          {pinCount > 0 && (
            <span className="font-label-caps text-label-caps text-on-surface-variant text-[11px] tracking-widest">
              {pinCount} pin{pinCount !== 1 ? "s" : ""} interativo{pinCount !== 1 ? "s" : ""}
            </span>
          )}
        </div>

        <div className="relative border border-savanna-sand overflow-hidden" style={{ height: 400 }}>
          <div ref={containerRef} className="w-full h-full" />

          {pinCount === 0 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-dim gap-3 pointer-events-none">
              <span className="material-symbols-outlined text-[48px] text-on-surface-variant/20">map</span>
              <p className="font-label-caps text-label-caps text-on-surface-variant/40 tracking-widest text-[10px]">
                SEM COORDENADAS REGISTADAS
              </p>
            </div>
          )}
        </div>

        <div className="mt-4 flex items-center justify-end">
          <a
            href={`/mapa`}
            className="flex items-center gap-2 font-label-caps text-label-caps text-[11px] text-on-surface-variant hover:text-primary transition-colors tracking-widest"
          >
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            VER MAPA COMPLETO DE ANGOLA
          </a>
        </div>
      </div>
    </section>
  );
}
