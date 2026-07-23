import { Suspense } from "react";
import PesquisaHero from "@/components/pesquisa/PesquisaHero";
import SearchResults from "@/components/pesquisa/SearchResults";

export function generateMetadata() {
  return {
    title: "Pesquisa | Tour.a — Angola",
    description:
      "Pesquise destinos, eventos, províncias e experiências em Angola.",
  };
}

export default async function PesquisaPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
    [key: string]: string | string[] | undefined;
  }>;
}) {
  // Next.js 16: searchParams is a Promise and must be awaited
  const params = await searchParams;
  const query = typeof params.q === "string" ? params.q : "";

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* 1. Hero — h-[921px] com search bar integrado */}
      <Suspense fallback={<HeroPlaceholder />}>
        <PesquisaHero initialQuery={query} />
      </Suspense>

      {/* 2. Results section */}
      <Suspense
        fallback={
          <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-20 text-center">
            <span className="material-symbols-outlined text-[48px] text-on-surface-variant/30 animate-pulse block mb-4">
              search
            </span>
            <p className="font-body-md text-on-surface-variant">
              A pesquisar…
            </p>
          </div>
        }
      >
        <SearchResults initialQuery={query} />
      </Suspense>
    </main>
  );
}

function HeroPlaceholder() {
  return (
    <div className="h-[921px] w-full bg-surface-dim animate-pulse flex items-center justify-center">
      <span className="material-symbols-outlined text-[72px] text-on-surface-variant/20">
        search
      </span>
    </div>
  );
}
