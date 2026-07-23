"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { destinations } from "@/data/destinations";
import { CATEGORIES } from "@/types";
import type { Category } from "@/types";

const CATEGORY_COLORS: Record<Category, string> = {
  Praia: "#2563EB",
  Natureza: "#16a34a",
  Cultura: "#d97706",
  Aventura: "#ea580c",
  Gastronomia: "#dc2626",
  Histórico: "#7c3aed",
};

function createPinIcon(color: string) {
  return L.divIcon({
    html: `<div style="width:16px;height:16px;border-radius:50%;background:${color};border:2.5px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.35)"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    className: "",
  });
}

function popupHtml(dest: (typeof destinations)[number]) {
  return `
    <div style="width:230px;font-family:system-ui,sans-serif;overflow:hidden">
      <div style="width:100%;height:130px;overflow:hidden">
        <img src="${dest.image}" alt="${dest.title}"
          style="width:100%;height:100%;object-fit:cover" />
      </div>
      <div style="padding:10px 12px 12px">
        <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;margin-bottom:4px">
          ${dest.provinceName} · ${dest.category}
        </div>
        <div style="font-size:15px;font-weight:600;color:#111827;margin-bottom:4px;line-height:1.3">
          ${dest.title}
        </div>
        <div style="font-size:12px;color:#6b7280;margin-bottom:10px;line-height:1.5">
          ${dest.description.slice(0, 90)}…
        </div>
        <a href="/destinos/${dest.slug}"
          style="display:inline-flex;align-items:center;gap:6px;background:#00bfa5;color:white;font-size:10px;text-transform:uppercase;letter-spacing:0.08em;padding:7px 14px;text-decoration:none;font-weight:600">
          Explorar Guia
          <span style="font-size:12px">→</span>
        </a>
      </div>
    </div>
  `;
}

const WITH_COORDS = destinations.filter((d) => d.coordinates);

export default function MapClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const [activeCategory, setActiveCategory] = useState<Category | "Todos">("Todos");
  const [count, setCount] = useState(WITH_COORDS.length);

  // Init map once
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [-11.8, 17.5],
      zoom: 5,
      zoomControl: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);

    mapRef.current = map;
  }, []);

  // Update markers on filter change
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    markersRef.current.forEach((m) => map.removeLayer(m));
    markersRef.current = [];

    const filtered = WITH_COORDS.filter(
      (d) => activeCategory === "Todos" || d.category === activeCategory
    );
    setCount(filtered.length);

    filtered.forEach((dest) => {
      if (!dest.coordinates) return;
      const marker = L.marker(
        [dest.coordinates.lat, dest.coordinates.lng],
        { icon: createPinIcon(CATEGORY_COLORS[dest.category]) }
      ).addTo(map);

      marker.bindPopup(popupHtml(dest), {
        maxWidth: 250,
        className: "toura-popup",
      });

      markersRef.current.push(marker);
    });
  }, [activeCategory]);

  return (
    <div className="relative w-full" style={{ height: "calc(100vh - 64px)" }}>
      {/* Map container */}
      <div ref={containerRef} className="w-full h-full" />

      {/* Floating header bar */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] bg-white/95 backdrop-blur-md shadow-lg px-5 py-3 flex items-center gap-3 max-w-[90vw]">
        <span className="material-symbols-outlined text-primary text-[20px]">
          travel_explore
        </span>
        <span className="font-label-caps text-label-caps text-on-surface tracking-widest">
          {count} DESTINO{count !== 1 ? "S" : ""} NO MAPA
        </span>
        <a
          href="/destinos"
          className="ml-4 font-label-caps text-label-caps text-[10px] text-on-surface-variant hover:text-primary transition-colors tracking-widest"
        >
          VER CATÁLOGO →
        </a>
      </div>

      {/* Category filter pills */}
      <div className="absolute top-20 left-4 z-[1000] flex flex-col gap-2">
        <button
          onClick={() => setActiveCategory("Todos")}
          className={`px-4 py-2.5 font-label-caps text-label-caps text-[10px] tracking-widest shadow-md text-left transition-all ${
            activeCategory === "Todos"
              ? "bg-primary text-white"
              : "bg-white text-on-surface-variant hover:bg-primary/10"
          }`}
        >
          TODOS ({WITH_COORDS.length})
        </button>
        {CATEGORIES.map((cat) => {
          const n = WITH_COORDS.filter((d) => d.category === cat).length;
          if (n === 0) return null;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? "Todos" : cat)}
              className={`px-4 py-2.5 font-label-caps text-label-caps text-[10px] tracking-widest shadow-md text-left transition-all ${
                activeCategory === cat
                  ? "text-white"
                  : "bg-white text-on-surface-variant hover:opacity-80"
              }`}
              style={
                activeCategory === cat
                  ? { backgroundColor: CATEGORY_COLORS[cat] }
                  : {}
              }
            >
              {cat.toUpperCase()} ({n})
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="absolute bottom-10 left-4 z-[1000] bg-white/95 backdrop-blur-sm shadow-lg p-4">
        <p className="font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant mb-3 uppercase">
          Legenda
        </p>
        {CATEGORIES.map((cat) => (
          <div key={cat} className="flex items-center gap-2.5 mb-1.5">
            <div
              className="w-3 h-3 rounded-full border-2 border-white shadow-sm shrink-0"
              style={{ backgroundColor: CATEGORY_COLORS[cat] }}
            />
            <span className="font-label-caps text-label-caps text-[10px] text-on-surface-variant">
              {cat}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
