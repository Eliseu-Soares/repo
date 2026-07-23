import FavoritosShell from "@/components/favoritos/FavoritosShell";

export const metadata = {
  title: "Os Meus Favoritos | Toura Angola",
  description: "Os seus destinos, eventos e experiências guardados em Angola.",
};

export default function FavoritosPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <section className="bg-surface-container-low border-b border-savanna-sand">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-14">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">Guardados</span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight">
            Os Meus Favoritos
          </h1>
        </div>
      </section>

      <section className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-12 pb-section-gap">
        <FavoritosShell />
      </section>
    </main>
  );
}
