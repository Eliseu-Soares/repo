import { provinces } from "@/data/provinces";
import { destinations } from "@/data/destinations";
import ProvinciasGrid from "@/components/provincias/ProvinciasGrid";

export function generateMetadata() {
  return {
    title: "Províncias | Toura Angola",
    description:
      "Explore as 18 províncias de Angola — cada uma com a sua cultura, paisagens e experiências únicas.",
    openGraph: {
      title: "18 Províncias de Angola | Toura",
      description:
        "Da floresta equatorial do norte às dunas do Namibe — descubra Angola, região a região.",
    },
  };
}

export default function ProvinciasPage() {
  const totalDestinations = destinations.length;

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-surface-container-low border-b border-savanna-sand overflow-hidden">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-20 lg:py-28 relative z-10">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-5 uppercase">
            18 Províncias · 5 Regiões
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight mb-6 max-w-3xl">
            Angola, Região a Região
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10">
            Do enclave florestal de Cabinda às planícies do Cuando Cubango, cada
            província guarda um mundo de experiências únicas. Escolha a sua
            próxima aventura.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-8">
            <div>
              <span className="font-display-lg text-[40px] font-bold text-primary block leading-none">
                18
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                PROVÍNCIAS
              </span>
            </div>
            <div>
              <span className="font-display-lg text-[40px] font-bold text-primary block leading-none">
                {totalDestinations}
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                DESTINOS
              </span>
            </div>
            <div>
              <span className="font-display-lg text-[40px] font-bold text-primary block leading-none">
                5
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                REGIÕES
              </span>
            </div>
          </div>
        </div>

        {/* Decorative map link */}
        <a
          href="/mapa"
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 group"
        >
          <div className="w-20 h-20 border border-savanna-sand flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
            <span className="material-symbols-outlined text-[40px] text-on-surface-variant group-hover:text-primary transition-colors">
              map
            </span>
          </div>
          <span className="font-label-caps text-label-caps text-on-surface-variant group-hover:text-primary transition-colors tracking-widest text-[10px]">
            VER MAPA
          </span>
        </a>
      </section>

      {/* Grid */}
      <ProvinciasGrid />
    </main>
  );
}
