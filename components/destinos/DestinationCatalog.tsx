"use client";

import { useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES, SORT_OPTIONS, type Category, type SortOption } from "@/types";
import { destinations } from "@/data/destinations";
import { provinces } from "@/data/provinces";
import { filterDestinations, paginateArray } from "@/lib/filters";
import DestinationCard from "@/components/ui/DestinationCard";
import { fadeUp, stagger, viewportOnce, EASE } from "@/lib/motion";

const ITEMS_PER_PAGE = 9;

const REGIONS = [
  { value: "", label: "Tudo" },
  { value: "Norte", label: "Norte" },
  { value: "Centro", label: "Centro" },
  { value: "Sul", label: "Sul" },
  { value: "Leste", label: "Leste" },
  { value: "Litoral", label: "Litoral" },
];

export default function DestinationCatalog() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const regiao = searchParams.get("regiao") ?? "";
  const provincia = searchParams.get("provincia") ?? "";
  const categoria = (searchParams.get("categoria") ?? "") as Category | "";
  const rating = Number(searchParams.get("rating") ?? "0");
  const sort = (searchParams.get("sort") ?? "popular") as SortOption;
  const page = Math.max(1, Number(searchParams.get("page") ?? "1"));

  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    params.delete("page");
    router.push(`/destinos?${params.toString()}`, { scroll: false });
  };

  const setPage = (p: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(p));
    router.push(`/destinos?${params.toString()}`, { scroll: true });
  };

  const filtered = useMemo(
    () =>
      filterDestinations(destinations, {
        regiao: regiao || undefined,
        provincia: provincia || undefined,
        categoria: (categoria as Category) || undefined,
        rating: rating || undefined,
        sort,
      }),
    [regiao, provincia, categoria, rating, sort]
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paged = paginateArray(filtered, page, ITEMS_PER_PAGE);
  const hasFilters = !!(regiao || provincia || categoria || rating);

  return (
    <div id="destinos" className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto pb-section-gap">
      {/* ── Filter Header ── */}
      <div className="pt-12 pb-8 border-b border-savanna-sand mb-10">
        {/* Row 1: Region pills + Sort */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <span className="font-label-caps text-label-caps text-secondary block mb-3 uppercase">
              Explorar por Região
            </span>
            <div className="flex flex-wrap gap-2">
              {REGIONS.map((r) => (
                <button
                  key={r.value}
                  onClick={() => setParam("regiao", r.value === regiao ? "" : r.value)}
                  className={`px-5 py-2 font-label-caps text-label-caps transition-all duration-200 border ${
                    (r.value === "" && !regiao) || r.value === regiao
                      ? "bg-primary text-white border-primary"
                      : "border-savanna-sand text-on-surface-variant hover:border-primary hover:text-primary"
                  }`}
                >
                  {r.label.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 self-end">
            {hasFilters && (
              <button
                onClick={() => router.push("/destinos")}
                className="flex items-center gap-1 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
                LIMPAR
              </button>
            )}
            <select
              value={sort}
              onChange={(e) => setParam("sort", e.target.value)}
              className="border border-savanna-sand px-4 py-2.5 font-body-md text-sm text-on-surface bg-surface-container-lowest focus:outline-none focus:border-primary transition-colors"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 2: Categories + Province + Rating */}
        <div className="flex flex-wrap items-center gap-3">
          <div>
            <span className="font-label-caps text-label-caps text-secondary block mb-3 uppercase">
              Categoria
            </span>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() =>
                    setParam("categoria", categoria === cat ? "" : cat)
                  }
                  className={`px-4 py-2 font-label-caps text-label-caps transition-all duration-200 border ${
                    categoria === cat
                      ? "bg-primary text-white border-primary"
                      : "border-savanna-sand text-on-surface-variant hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="ml-auto flex gap-3 self-end">
            <select
              value={provincia}
              onChange={(e) => setParam("provincia", e.target.value)}
              className="border border-savanna-sand px-4 py-2.5 font-body-md text-sm text-on-surface bg-surface-container-lowest focus:outline-none focus:border-primary transition-colors"
            >
              <option value="">Todas as Províncias</option>
              {provinces.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name}
                </option>
              ))}
            </select>

            <select
              value={rating || ""}
              onChange={(e) => setParam("rating", e.target.value)}
              className="border border-savanna-sand px-4 py-2.5 font-body-md text-sm text-on-surface bg-surface-container-lowest focus:outline-none focus:border-primary transition-colors"
            >
              <option value="">Avaliação</option>
              <option value="4">4+ estrelas</option>
              <option value="3">3+ estrelas</option>
            </select>
          </div>
        </div>
      </div>

      {/* Result count */}
      <p className="font-body-md text-sm text-on-surface-variant mb-8">
        <span className="font-semibold text-on-surface">{filtered.length}</span>{" "}
        {filtered.length === 1 ? "destino encontrado" : "destinos encontrados"}
        {hasFilters && (
          <span className="text-primary ml-1">com os filtros selecionados</span>
        )}
      </p>

      {/* Grid or empty state */}
      <AnimatePresence mode="wait">
        {paged.length > 0 ? (
          <motion.div
            key={`${regiao}-${provincia}-${categoria}-${rating}-${sort}-${page}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {paged.map((dest, i) => (
              <motion.div key={dest.id} variants={fadeUp}>
                <DestinationCard destination={dest} priority={i < 3} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <EmptyState
              hasFilters={hasFilters}
              onReset={() => router.push("/destinos")}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-16">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="w-10 h-10 flex items-center justify-center border border-savanna-sand text-on-surface-variant hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Página anterior"
          >
            <span className="material-symbols-outlined text-[20px]">
              chevron_left
            </span>
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              aria-current={p === page ? "page" : undefined}
              className={`w-10 h-10 font-label-caps text-label-caps font-bold transition-all ${
                p === page
                  ? "bg-primary text-white"
                  : "border border-savanna-sand text-on-surface-variant hover:border-primary hover:text-primary"
              }`}
            >
              {p}
            </button>
          ))}

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="w-10 h-10 flex items-center justify-center border border-savanna-sand text-on-surface-variant hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Próxima página"
          >
            <span className="material-symbols-outlined text-[20px]">
              chevron_right
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

function EmptyState({
  hasFilters,
  onReset,
}: {
  hasFilters: boolean;
  onReset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <span className="material-symbols-outlined text-[72px] text-on-surface-variant/20 mb-6">
        travel_explore
      </span>
      <h3 className="font-headline-sm text-headline-sm mb-3">
        Nenhum destino encontrado
      </h3>
      <p className="font-body-md text-on-surface-variant max-w-sm mb-8">
        {hasFilters
          ? "Tente ajustar ou remover os filtros para ver mais destinos."
          : "Não existem destinos disponíveis de momento."}
      </p>
      {hasFilters && (
        <button
          onClick={onReset}
          className="bg-primary text-white px-10 py-4 font-label-caps text-label-caps tracking-widest hover:bg-primary-container transition-colors"
        >
          LIMPAR FILTROS
        </button>
      )}
    </div>
  );
}
