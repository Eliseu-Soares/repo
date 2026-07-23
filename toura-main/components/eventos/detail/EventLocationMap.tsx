"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface Props {
  lat: number;
  lng: number;
  title: string;
  location: string;
}

function createPin() {
  return L.divIcon({
    html: `<div style="width:18px;height:18px;border-radius:50%;background:#00BFA5;border:3px solid white;box-shadow:0 3px 8px rgba(0,0,0,0.4)"></div>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    className: "",
  });
}

export default function EventLocationMap({ lat, lng, title, location }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [lat, lng],
      zoom: 13,
      zoomControl: true,
      scrollWheelZoom: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    L.marker([lat, lng], { icon: createPin() })
      .addTo(map)
      .bindPopup(
        `<div style="font-family:system-ui,sans-serif;min-width:160px">
          <div style="font-size:13px;font-weight:600;color:#111827;margin-bottom:3px">${title}</div>
          <div style="font-size:11px;color:#6b7280">${location}</div>
        </div>`
      )
      .openPopup();

    mapRef.current = map;
    return () => { map.remove(); mapRef.current = null; };
  }, [lat, lng, title, location]);

  return <div ref={containerRef} className="w-full h-full" />;
}
