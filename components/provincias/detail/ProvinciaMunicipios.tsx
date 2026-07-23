import type { Destination } from "@/types";

interface Props {
  destinations: Destination[];
  provinceName: string;
}

export default function ProvinciaMunicipios({ destinations, provinceName }: Props) {
  const byMunicipality = destinations.reduce<Record<string, Destination[]>>((acc, dest) => {
    const key = dest.municipality;
    if (!acc[key]) acc[key] = [];
    acc[key].push(dest);
    return acc;
  }, {});

  const municipalities = Object.entries(byMunicipality).sort((a, b) => b[1].length - a[1].length);

  if (municipalities.length === 0) return null;

  return (
    <section className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-16 border-t border-savanna-sand">
      <div className="mb-10">
        <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">
          Municípios
        </span>
        <h2 className="font-headline-sm text-headline-sm">
          Destinos por Município
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {municipalities.map(([municipality, dests]) => {
          const topDest = dests[0];
          return (
            <a
              key={municipality}
              href={`/destinos?municipio=${encodeURIComponent(municipality)}&provincia=${encodeURIComponent(provinceName)}`}
              className="group relative overflow-hidden border border-savanna-sand hover:border-primary/40 hover:shadow-md transition-all duration-300"
              style={{ aspectRatio: "4/3" }}
            >
              {/* Background image from first destination */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${topDest.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-headline-sm text-[15px] font-semibold text-white leading-tight mb-0.5">
                  {municipality}
                </p>
                <p className="font-label-caps text-label-caps text-white/70 text-[10px] tracking-widest">
                  {dests.length} destino{dests.length !== 1 ? "s" : ""}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
