"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import type EventLocationMap from "./EventLocationMap";

const LazyMap = dynamic(() => import("./EventLocationMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-surface-dim flex items-center justify-center gap-3">
      <span className="material-symbols-outlined text-[36px] text-on-surface-variant/20 animate-pulse">map</span>
      <p className="font-label-caps text-label-caps text-on-surface-variant/40 tracking-widest text-[10px]">
        A CARREGAR MAPA…
      </p>
    </div>
  ),
});

export default function EventLocationMapLoader(
  props: ComponentProps<typeof EventLocationMap>
) {
  return <LazyMap {...props} />;
}
