import PlaneadorShell from "@/components/planeador/PlaneadorShell";

export const metadata = {
  title: "Planeador de Viagem | Toura Angola",
  description: "Planeie a sua viagem a Angola — escolha destinos, defina os dias e exporte o seu itinerário.",
};

export default function PlaneadorPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <section className="bg-surface-container-low border-b border-savanna-sand">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-14">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">O Seu Itinerário</span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight">
            Planeador de Viagem
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-3 max-w-xl">
            Adicione destinos, defina quantos dias quer em cada sítio e exporte o seu plano.
          </p>
        </div>
      </section>

      <section className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-12 pb-section-gap">
        <PlaneadorShell />
      </section>
    </main>
  );
}
