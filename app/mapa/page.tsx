import MapClientLoader from "@/components/mapa/MapClientLoader";

export function generateMetadata() {
  return {
    title: "Mapa de Angola | Toura",
    description:
      "Explore todos os destinos de Angola no mapa interativo — filtre por categoria e descubra o que há perto de si.",
  };
}

export default function MapaPage() {
  return (
    <main className="overflow-hidden">
      <MapClientLoader />
    </main>
  );
}
