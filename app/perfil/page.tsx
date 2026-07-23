import PerfilShell from "@/components/perfil/PerfilShell";

export const metadata = {
  title: "O Meu Perfil | Toura Angola",
  description: "Gerencie as suas preferências, favoritos e plano de viagem.",
};

export default function PerfilPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <section className="bg-surface-container-low border-b border-savanna-sand">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-14">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">Conta</span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight">
            O Meu Perfil
          </h1>
        </div>
      </section>

      <section className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-12 pb-section-gap">
        <PerfilShell />
      </section>
    </main>
  );
}
