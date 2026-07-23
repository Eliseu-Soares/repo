import { destinations } from "@/data/destinations";
import { provinces } from "@/data/provinces";
import { events } from "@/data/events";
import { newsArticles } from "@/data/noticias";
import { breadcrumbJsonLd, makeCanonical } from "@/lib/seo";
import SobreTimeline from "@/components/sobre/SobreTimeline";
import SobreTeam from "@/components/sobre/SobreTeam";
import FadeIn from "@/components/ui/FadeIn";

export const revalidate = 86400;

export const metadata = {
  title: "Sobre a Toura | A Plataforma de Turismo de Angola",
  description:
    "Conheça a missão, a equipa e a visão da Toura — a plataforma oficial que conecta o mundo às maravilhas de Angola.",
  alternates: { canonical: makeCanonical("/sobre") },
};

const TEAM = [
  {
    name: "Dra. Ana Luísa Monteiro",
    role: "Directora Executiva",
    initials: "AL",
    bio: "Especialista em turismo sustentável com 15 anos de experiência no sector privado e governamental angolano.",
  },
  {
    name: "Pedro Afonso Figueiredo",
    role: "Director de Tecnologia",
    initials: "PF",
    bio: "Engenheiro de software com foco em plataformas digitais de impacto social em África e nos PALOP.",
  },
  {
    name: "Mariana Santos",
    role: "Directora Editorial",
    initials: "MS",
    bio: "Jornalista e escritora de viagens, autora de dois guias sobre Angola publicados em Portugal e no Brasil.",
  },
  {
    name: "Carlos Eduardo Neto",
    role: "Director de Parcerias",
    initials: "CE",
    bio: "Lidera as relações com o Ministério do Turismo, ENATUR e parceiros internacionais.",
  },
  {
    name: "Filipa Rodrigues",
    role: "Directora de Marketing",
    initials: "FR",
    bio: "Especialista em marketing digital com experiência em destinos emergentes e turismo de luxo.",
  },
];

const TIMELINE = [
  {
    year: "2021",
    title: "Fundação em Luanda",
    desc: "A Toura nasce com a missão de digitalizar o sector do turismo angolano e revelar a riqueza do país ao mundo.",
  },
  {
    year: "2022",
    title: "Primeiros 50 Destinos",
    desc: "Mapeámos os primeiros 50 destinos em parceria com o Ministério do Turismo e operadores locais.",
  },
  {
    year: "2023",
    title: "Cobertura Nacional",
    desc: "Alcançámos as 18 províncias de Angola com dados verificados no terreno e fotografias originais.",
  },
  {
    year: "2024",
    title: "Nova Plataforma",
    desc: "Redesign completo com tecnologia de ponta, acesso mobile optimizado e suporte multilingue.",
  },
  {
    year: "2025",
    title: "Expansão Internacional",
    desc: "Lançamento em inglês e início de parcerias com operadores turísticos europeus e norte-americanos.",
  },
];

const PARTNERS = [
  "Ministério do Turismo e Hotelaria",
  "ENATUR",
  "Aeroportos de Angola",
  "TAAG Angola Airlines",
  "Associação de Operadores Turísticos",
  "Câmara de Comércio de Angola",
];

export default function SobrePage() {
  const stats = [
    { value: destinations.length, label: "Destinos Mapeados", icon: "travel_explore" },
    { value: provinces.length, label: "Províncias Cobertas", icon: "map" },
    { value: events.length, label: "Eventos na Agenda", icon: "event" },
    { value: newsArticles.length, label: "Artigos Publicados", icon: "article" },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "Sobre a Toura Angola",
      url: makeCanonical("/sobre"),
      description: metadata.description,
    },
    breadcrumbJsonLd([
      { name: "Início", path: "/" },
      { name: "Sobre", path: "/sobre" },
    ]),
  ];

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-surface-container-low border-b border-savanna-sand">
        <div className="pattern-overlay absolute inset-0 opacity-50" />
        <div className="relative z-10 px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-24 lg:py-32">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-12">
            <a href="/" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors">
              Início
            </a>
            <span className="material-symbols-outlined text-[14px] text-on-surface-variant/40">chevron_right</span>
            <span className="font-label-caps text-label-caps text-on-surface">Sobre</span>
          </nav>
          <FadeIn direction="up">
            <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-5 uppercase">
              A Nossa Missão
            </span>
            <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface leading-tight mb-8">
              Revelar Angola<br className="hidden sm:block" /> ao Mundo
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
              A Toura é a plataforma oficial de turismo de Angola — construída para
              ligar visitantes às experiências autênticas, à cultura viva e às
              paisagens inesquecíveis deste país extraordinário.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────── */}
      <section className="border-b border-savanna-sand">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map(({ value, label, icon }, i) => (
              <FadeIn key={label} direction="up" delay={i * 0.08}>
                <div className="text-center">
                  <span className="material-symbols-outlined text-primary text-[28px] block mb-4">{icon}</span>
                  <p className="font-display-lg text-[52px] lg:text-[64px] font-bold text-on-surface leading-none mb-2">
                    {value}+
                  </p>
                  <p className="font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant">
                    {label.toUpperCase()}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ──────────────────────────────────── */}
      <section className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <FadeIn direction="left">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-[22px]">flag</span>
            </div>
            <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-4 uppercase">
              Missão
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">
              Democratizar o Turismo Angolano
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Tornámos Angola acessível a cada viajante do mundo — com informação
              actualizada, multilingue e verificada no terreno. Trabalhamos em
              parceria com comunidades locais para garantir que o turismo beneficia
              quem vive nesses destinos.
            </p>
          </FadeIn>
          <FadeIn direction="left" delay={0.12}>
            <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary text-[22px]">visibility</span>
            </div>
            <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-4 uppercase">
              Visão
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">
              Angola no Mapa do Turismo Mundial
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Até 2030, a Toura será a referência digital para qualquer viajante
              que escolha Angola — seja para explorar o Parque Nacional do Kissama,
              viver o Carnaval de Luanda, ou descobrir a gastronomia do sul do país.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────────── */}
      <section className="bg-surface-container-low border-y border-savanna-sand">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-20">
          <FadeIn>
            <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">
              A Nossa História
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-12">
              De Luanda para o Mundo
            </h2>
          </FadeIn>
          <SobreTimeline items={TIMELINE} />
        </div>
      </section>

      {/* ── Team ──────────────────────────────────────────────── */}
      <section className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-20 lg:py-24">
        <FadeIn>
          <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">
            A Nossa Equipa
          </span>
          <h2 className="font-headline-md text-headline-md text-on-surface mb-12">
            As Pessoas por Detrás da Toura
          </h2>
        </FadeIn>
        <SobreTeam members={TEAM} />
      </section>

      {/* ── Partners ──────────────────────────────────────────── */}
      <section className="bg-surface-container-low border-y border-savanna-sand">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-16">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">
                Parceiros Institucionais
              </span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">
                Construído em Parceria
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {PARTNERS.map((partner, i) => (
              <FadeIn key={partner} delay={i * 0.06}>
                <div className="border border-savanna-sand bg-background p-6 flex items-center justify-center text-center h-full hover:border-primary transition-colors">
                  <span className="font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant">
                    {partner.toUpperCase()}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-20 text-center">
        <FadeIn>
          <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-4 uppercase">
            Vamos Colaborar
          </span>
          <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Tem Uma Ideia Para Nós?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">
            Para parcerias, sugestões de destinos, media ou simplesmente para
            partilhar o seu feedback — a nossa equipa está disponível.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 bg-primary text-white font-label-caps text-label-caps px-10 py-4 hover:bg-primary-container transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
            CONTACTAR A EQUIPA
          </a>
        </FadeIn>
      </section>
    </main>
  );
}
