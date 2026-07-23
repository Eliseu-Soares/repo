import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import CategorySection from "@/components/home/CategorySection";
import BentoGrid from "@/components/home/BentoGrid";
import PatternDivider from "@/components/home/PatternDivider";
import StatsSection from "@/components/home/StatsSection";
import ProvincesSection from "@/components/home/ProvincesSection";
import ExperienceCarousel from "@/components/home/ExperienceCarousel";
import CulturalSection from "@/components/home/CulturalSection";
import EventsSection from "@/components/home/EventsSection";
import GallerySection from "@/components/home/GallerySection";
import MetaTurismoSection from "@/components/metaturismo/MetaTurismoSection";
import PlanningSection from "@/components/home/PlanningSection";
import NewsSection from "@/components/home/NewsSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <main>
      {/* 1 — Hero com pesquisa e CTAs */}
      <HeroSection />

      {/* 2 — Intro / tagline */}
      <IntroSection />

      {/* 3 — Explorar por Categoria */}
      <CategorySection />

      {/* 4 — Destinos em Destaque (BentoGrid) */}
      <BentoGrid />

      <PatternDivider />

      {/* 5 — Números de Angola */}
      {/*<StatsSection />*/}

      {/* 6 — Províncias em Destaque */}
      <ProvincesSection />

      {/* 7 — Experiências por Essência */}
      <ExperienceCarousel />

      {/* 8 — Experiências Culturais */}
      <CulturalSection />

      {/* 9 — Eventos e Festivais */}
      <EventsSection />

      {/* 10 — Galeria Inspiracional */}
      <GallerySection />

      {/* 11 — MetaTurismo / VR360 */}
      <MetaTurismoSection />

      {/* 12 — Planeie a sua Viagem */}
      <PlanningSection />

      {/* 13 — Notícias e Atualidades */}
      <NewsSection />

      {/* 14 — Newsletter */}
      <NewsletterSection />

      {/* 15 — CTA Final */}
      <CTASection />
    </main>
  );
}
