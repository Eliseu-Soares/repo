"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";

// -----------------------------------------------------------------------
// Tipos
// -----------------------------------------------------------------------
export interface PanoramaHotspot {
  pitch: number;
  yaw: number;
  text: string;
}

export interface Panorama360 {
  id: string;
  title: string;
  description?: string;
  thumbnail: string;
  panorama: string;
  audioSrc?: string; // caminho do áudio, ex: "/audio/lakeside.mp3"
  hotspots?: PanoramaHotspot[];
}

interface MetaTurismoSectionProps {
  panoramas?: Panorama360[];
}

export const DEMO_PANORAMAS: Panorama360[] = [
  {
    id: "lakeside-sunrise",
    title: "Lakeside Sunrise (Demo)",
    description: "Paisagem de exemplo — Poly Haven",
    thumbnail: "/panoramas/lakeside_sunrise.jpg",
    panorama: "/panoramas/lakeside_sunrise.jpg",
    audioSrc: undefined, // ex: "/audio/lakeside_sunrise.mp3"
    hotspots: [
      { pitch: 5, yaw: 30, text: "Ali ao fundo vês a linha de montanhas que emolduram o vale." },
      { pitch: -10, yaw: 150, text: "Esta vegetação ribeirinha é típica de zonas húmidas de altitude." },
    ],
  },
];

// -----------------------------------------------------------------------
// Carregamento do Pannellum via CDN
// -----------------------------------------------------------------------
declare global {
  interface Window {
    pannellum: any;
  }
}

const PANNELLUM_JS = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js";
const PANNELLUM_CSS = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css";

let loadingPromise: Promise<void> | null = null;

function loadPannellum(): Promise<void> {
  if (typeof window !== "undefined" && window.pannellum) return Promise.resolve();
  if (loadingPromise) return loadingPromise;

  loadingPromise = new Promise((resolve, reject) => {
    if (!document.querySelector(`link[href="${PANNELLUM_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = PANNELLUM_CSS;
      document.head.appendChild(link);
    }
    const script = document.createElement("script");
    script.src = PANNELLUM_JS;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Falha ao carregar Pannellum"));
    document.body.appendChild(script);
  });

  return loadingPromise;
}

function formatTime(seconds: number): string {
  if (!isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

// -----------------------------------------------------------------------
// Ícones (SVG próprios, minimalistas)
// -----------------------------------------------------------------------
const IconClose = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
  </svg>
);
const IconPlay = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);
const IconPause = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
  </svg>
);
const IconVolume = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M4 9v6h4l5 5V4L8 9H4zM16.5 12a4.5 4.5 0 00-2.5-4v8a4.5 4.5 0 002.5-4z" />
  </svg>
);
const IconMute = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M4 9v6h4l5 5V4L8 9H4zM19 8l-4 4m0-4l4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);
const IconRotate = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 12a8 8 0 0114-5.3M20 12a8 8 0 01-14 5.3M17 4v4h-4M7 20v-4h4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconReset = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4v5h5M20 20v-5h-5M4 9a8 8 0 0113.3-4M20 15a8 8 0 01-13.3 4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconFullscreen = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 4H4v4M16 4h4v4M8 20H4v-4M16 20h4v-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// -----------------------------------------------------------------------
// Card individual
// -----------------------------------------------------------------------
function PanoramaCard({
  panorama,
  onSelect,
}: {
  panorama: Panorama360;
  onSelect: (p: Panorama360) => void;
}) {
  return (
    <button
      onClick={() => onSelect(panorama)}
      className="group relative flex-shrink-0 w-72 rounded-2xl overflow-hidden bg-neutral-900 text-left focus:outline-none focus:ring-2 focus:ring-white/50 transition-transform duration-200 hover:scale-[1.02]"
      aria-label={`Visualizar ${panorama.title}`}
    >
      <div className="relative w-full aspect-video overflow-hidden">
        <img
          src={panorama.thumbnail}
          alt={panorama.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute top-2 left-2 text-[10px] font-semibold tracking-wide bg-black/60 backdrop-blur text-white px-2 py-1 rounded-full">
          360°
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center transition-transform group-hover:scale-110">
            <div className="text-black ml-0.5">
              <IconPlay />
            </div>
          </div>
        </div>
      </div>
      <div className="p-3">
        <p className="text-white font-medium text-sm truncate">{panorama.title}</p>
        {panorama.description && (
          <p className="text-neutral-400 text-xs truncate">{panorama.description}</p>
        )}
      </div>
    </button>
  );
}

// -----------------------------------------------------------------------
// Modal fullscreen com viewer 360 + áudio
// -----------------------------------------------------------------------
function PanoramaModal({
  panorama,
  onClose,
}: {
  panorama: Panorama360;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [autoRotate, setAutoRotate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fov, setFov] = useState(100);
  const [rotationSpeed] = useState(2);
  const [tooltip, setTooltip] = useState<string | null>(null);
  const tooltipTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);

  // ---- Bloqueia o scroll da página por baixo do modal ----
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  // ---- Impede que o wheel "vaze" para a página ----
  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;
    const preventPageScroll = (e: WheelEvent) => e.preventDefault();
    el.addEventListener("wheel", preventPageScroll, { passive: false });
    return () => el.removeEventListener("wheel", preventPageScroll);
  }, []);

  // ---- Criar viewer Pannellum ----
  useEffect(() => {
    let cancelled = false;

    loadPannellum().then(() => {
      if (cancelled || !containerRef.current) return;

      try {
        viewerRef.current = window.pannellum.viewer(containerRef.current, {
          type: "equirectangular",
          panorama: panorama.panorama,
          autoLoad: true,
          title: panorama.title,
          caption: panorama.description || "",
          compass: true,
          showZoomCtrl: false,
          showFullscreenCtrl: false,
          default: { fov, pitch: 0, yaw: 0 },
          hotSpots: (panorama.hotspots || []).map((h) => ({
            pitch: h.pitch,
            yaw: h.yaw,
            type: "info",
            text: h.text,
          })),
        });

        viewerRef.current.on("load", () => setLoading(false));
        viewerRef.current.on("error", () => setLoading(false));
      } catch (error) {
        console.error("Erro ao criar viewer:", error);
        setLoading(false);
      }
    });

    return () => {
      cancelled = true;
      viewerRef.current?.destroy?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panorama]);

  const handleFovChange = useCallback((newFov: number) => {
    setFov(newFov);
    viewerRef.current?.setFov?.(newFov);
  }, []);

  const toggleAutoRotate = useCallback(() => {
    if (!viewerRef.current) return;
    setAutoRotate((prev) => {
      if (prev) viewerRef.current.stopAutoRotate();
      else viewerRef.current.startAutoRotate(-rotationSpeed);
      return !prev;
    });
  }, [rotationSpeed]);

  const resetView = useCallback(() => {
    viewerRef.current?.lookAt?.(0, 0, 100, false);
    setFov(100);
  }, []);

  const showTooltip = useCallback((message: string) => {
    setTooltip(message);
    if (tooltipTimeoutRef.current) clearTimeout(tooltipTimeoutRef.current);
    tooltipTimeoutRef.current = setTimeout(() => setTooltip(null), 1500);
  }, []);

  // ---- Teclado ----
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "r":
        case "R":
          e.preventDefault();
          resetView();
          break;
        case "+":
        case "=":
          e.preventDefault();
          handleFovChange(Math.max(30, fov - 5));
          showTooltip(`Zoom: ${Math.round((fov - 5) * 0.6)}%`);
          break;
        case "-":
        case "_":
          e.preventDefault();
          handleFovChange(Math.min(120, fov + 5));
          showTooltip(`Zoom: ${Math.round(Math.min(120, fov + 5) * 0.6)}%`);
          break;
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
      if (tooltipTimeoutRef.current) clearTimeout(tooltipTimeoutRef.current);
    };
  }, [fov, onClose, resetView, handleFovChange, showTooltip]);

  // ---- Controlos de áudio ----
  const toggleAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause();
    else audio.play();
  }, [isPlaying]);

  const handleSeek = useCallback((value: number) => {
    if (audioRef.current) audioRef.current.currentTime = value;
    setCurrentTime(value);
  }, []);

  const toggleMuteAudio = useCallback(() => {
    if (audioRef.current) audioRef.current.muted = !audioRef.current.muted;
    setMuted((m) => !m);
  }, []);

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-black overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador 360"
    >
      {/* Viewer ocupa todo o ecrã */}
      <div ref={containerRef} className="absolute inset-0" aria-busy={loading} />

      {/* Cabeçalho flutuante */}
      <div className="absolute top-0 inset-x-0 z-20 bg-gradient-to-b from-black/80 to-transparent p-4 md:p-6 flex items-start justify-between">
        <div className="min-w-0 pr-4">
          <h3 className="font-bold text-white text-lg md:text-2xl truncate drop-shadow">{panorama.title}</h3>
          {panorama.description && (
            <p className="text-white/70 text-xs md:text-sm truncate">{panorama.description}</p>
          )}
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors backdrop-blur"
          aria-label="Fechar (Esc)"
          title="Fechar (Esc)"
        >
          <IconClose />
        </button>
      </div>

      {tooltip && (
        <div className="absolute top-20 left-4 z-20 px-3 py-1.5 bg-white/15 text-white text-xs rounded-lg backdrop-blur">
          {tooltip}
        </div>
      )}

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-30">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
            <p className="text-white text-sm">Carregando {panorama.title}...</p>
          </div>
        </div>
      )}

      {/* Barra inferior flutuante */}
      <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-black/85 to-transparent p-4 md:p-6 space-y-3">
        {panorama.audioSrc && (
          <div className="flex items-center gap-3 max-w-xl bg-white/10 rounded-full px-3 py-2 backdrop-blur">
            <button onClick={toggleAudio} className="text-white flex-shrink-0" aria-label={isPlaying ? "Pausar" : "Reproduzir"}>
              {isPlaying ? <IconPause /> : <IconPlay />}
            </button>
            <span className="text-white text-xs font-mono w-9 flex-shrink-0">{formatTime(currentTime)}</span>
            <input
              type="range"
              min={0}
              max={duration || 0}
              value={currentTime}
              onChange={(e) => handleSeek(Number(e.target.value))}
              className="flex-1 h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-white"
            />
            <span className="text-white text-xs font-mono w-9 flex-shrink-0 text-right">{formatTime(duration)}</span>
            <button onClick={toggleMuteAudio} className="text-white flex-shrink-0" aria-label={muted ? "Ativar som" : "Silenciar"}>
              {muted ? <IconMute /> : <IconVolume />}
            </button>
            <audio
              ref={audioRef}
              src={panorama.audioSrc}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
              onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
            />
          </div>
        )}

        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2 backdrop-blur">
            <span className="text-white text-xs font-mono w-9">{Math.round(fov)}°</span>
            <input
              type="range"
              min="30"
              max="120"
              value={fov}
              onChange={(e) => handleFovChange(Number(e.target.value))}
              className="w-28 md:w-40 h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-white"
              aria-label="Zoom"
            />
          </div>

          <button
            onClick={toggleAutoRotate}
            className={`w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur ${
              autoRotate ? "bg-white/30" : "bg-white/10 hover:bg-white/20"
            }`}
            aria-label="Rotação automática"
            title="Rotação automática (Espaço)"
          >
            <IconRotate />
          </button>

          <button
            onClick={resetView}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors backdrop-blur"
            aria-label="Restaurar vista"
            title="Restaurar (R)"
          >
            <IconReset />
          </button>

          <button
            onClick={() => viewerRef.current?.toggleFullscreen?.()}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors backdrop-blur"
            aria-label="Ecrã inteiro (nativo)"
            title="Ecrã inteiro do browser"
          >
            <IconFullscreen />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

// -----------------------------------------------------------------------
// Seção principal
// -----------------------------------------------------------------------
export default function MetaTurismoSection({ panoramas = DEMO_PANORAMAS }: MetaTurismoSectionProps) {
  const [selected, setSelected] = useState<Panorama360 | null>(null);

  return (
    <section className="w-full bg-black py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">🌍 Meta Turismo</h2>
          <p className="text-neutral-400 max-w-2xl">
            Explora Angola em realidade virtual 360°.
          </p>
        </div>

        {panoramas.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-neutral-400">Nenhum panorama disponível.</p>
          </div>
        ) : (
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin">
            {panoramas.map((p) => (
              <PanoramaCard key={p.id} panorama={p} onSelect={setSelected} />
            ))}
          </div>
        )}
      </div>

      {selected && <PanoramaModal panorama={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}