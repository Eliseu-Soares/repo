import { dishes, restaurants, gastronomicRoute } from "@/data/gastronomia";
import DishesBrowser from "@/components/gastronomia/DishesBrowser";
import RestaurantCard from "@/components/gastronomia/RestaurantCard";
import GastronomicRoute from "@/components/gastronomia/GastronomicRoute";

const IMG_BG = "https://lh3.googleusercontent.com/aida-public/AB6AXuCj6ljP_P1Em8sDC6O-4-t60actSiab2sQ4nHjgrP8WplSbSS4Dkho7RDs8YGdNViR5cUAywTKzdrCe6bsty9wf9Y132aeDAqperWYA_DM8OmZ0r6ejl1pH87l2OQEbKBQ59O_4HgO9CD7ijCj4E3xHvn_PJsFvt_l61FFAHX9fVNWm5cysGm1JZROHX06xrpNEJdkKucxPdOJe70qAaJSD8vcl5mRc4KJbm6QhtBtRYFyaUfA_2BICew_5BDp0zObUdhgJajLumaoZ";

export function generateMetadata() {
  return {
    title: "Gastronomia Angolana | Toura",
    description: "Descubra os pratos típicos de Angola — da Muamba de Galinha ao Mufete de Benguela — e a rota gastronómica do país.",
  };
}

export default function GastronomiaPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: 420 }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMG_BG})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/85 via-brand-navy/60 to-transparent" />
        <div className="relative z-10 px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-24 flex items-center min-h-[420px]">
          <div className="max-w-2xl">
            <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-5">SABORES DE ANGOLA</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white leading-tight mb-6">
              Gastronomia Angolana
            </h1>
            <p className="font-body-lg text-body-lg text-white/80 max-w-xl">
              A cozinha angolana é uma fusão de influências africanas, portuguesas e brasileiras — pratos ricos em óleo de palma, quiabos, amendoim e peixe fresco do Atlântico.
            </p>
          </div>
        </div>
      </section>

      {/* Dishes browser */}
      <section className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-14">
        <div className="mb-10">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">Pratos Típicos</span>
          <h2 className="font-headline-sm text-headline-sm">Sabores de Angola</h2>
        </div>
        <DishesBrowser dishes={dishes} />
      </section>

      {/* Restaurants */}
      <section className="border-t border-savanna-sand bg-surface-container-low">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-14">
          <div className="mb-10">
            <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">Onde Comer</span>
            <h2 className="font-headline-sm text-headline-sm">Restaurantes Recomendados</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {restaurants.map((r) => (
              <RestaurantCard key={r.id} restaurant={r} />
            ))}
          </div>
        </div>
      </section>

      {/* Gastronomic route */}
      <section className="border-t border-savanna-sand">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-14">
          <GastronomicRoute steps={gastronomicRoute} />
        </div>
      </section>
    </main>
  );
}
