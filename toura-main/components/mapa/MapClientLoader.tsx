"use client";

import dynamic from "next/dynamic";

const MapClient = dynamic(() => import("./MapClient"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full flex flex-col items-center justify-center bg-surface-dim gap-4"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <span className="material-symbols-outlined text-[72px] text-on-surface-variant/20 animate-pulse">
        map
      </span>
      <p className="font-label-caps text-label-caps text-on-surface-variant tracking-widest">
        A CARREGAR MAPA…
      </p>
    </div>
  ),
});

export default MapClient;
