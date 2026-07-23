"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import type ProvinciaMapEmbed from "./ProvinciaMapEmbed";

const LazyProvinciaMapEmbed = dynamic(() => import("./ProvinciaMapEmbed"), {
  ssr: false,
  loading: () => (
    <div className="border-t border-savanna-sand">
      <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-10">
        <div
          className="border border-savanna-sand bg-surface-dim flex items-center justify-center gap-3"
          style={{ height: 400 }}
        >
          <span className="material-symbols-outlined text-[40px] text-on-surface-variant/20 animate-pulse">
            map
          </span>
          <p className="font-label-caps text-label-caps text-on-surface-variant/40 tracking-widest text-[10px]">
            A CARREGAR MAPA…
          </p>
        </div>
      </div>
    </div>
  ),
});

export default function ProvinciaMapEmbedLoader(
  props: ComponentProps<typeof ProvinciaMapEmbed>
) {
  return <LazyProvinciaMapEmbed {...props} />;
}
