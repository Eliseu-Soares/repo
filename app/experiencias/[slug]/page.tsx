import { notFound } from "next/navigation";
import { experiences, getExperienceBySlug } from "@/data/experiencias";
import ExperienceCard from "@/components/experiencias/ExperienceCard";
import { breadcrumbJsonLd, makeCanonical } from "@/lib/seo";

export const revalidate = 86400;

interface PageParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageParams) {
  const { slug } = await params;
  const exp = getExperienceBySlug(slug);
  if (!exp) return {};
  return {
    title: `${exp.title} | Experiências | Toura Angola`,
    description: exp.description,
    openGraph: { title: exp.title, description: exp.description, images: [{ url: exp.image }] },
    alternates: { canonical: makeCanonical(`/experiencias/${slug}`) },
  };
}

const DIFFICULTY_COLOR: Record<string, string> = {
  Fácil: "text-[#16a34a]",
  Moderado: "text-[#d97706]",
  Difícil: "text-error",
};

export default async function ExperienceDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const exp = getExperienceBySlug(slug);
  if (!exp) notFound();

  const related = experiences
    .filter((e) => e.id !== exp.id && e.category === exp.category)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: exp.title,
    description: exp.description,
    image: exp.image,
    address: { "@type": "PostalAddress", addressRegion: exp.provinceName, addressCountry: "AO" },
  };

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Início", path: "/" },
              { name: "Experiências", path: "/experiencias" },
              { name: exp.title, path: `/experiencias/${exp.slug}` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: 500 }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${exp.image})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute top-6 left-6 lg:left-12 z-10">
          <nav className="flex items-center gap-2">
            <a href="/" className="font-label-caps text-label-caps text-white/60 hover:text-white transition-colors">Início</a>
            <span className="material-symbols-outlined text-[14px] text-white/40">chevron_right</span>
            <a href="/experiencias" className="font-label-caps text-label-caps text-white/60 hover:text-white transition-colors">Experiências</a>
            <span className="material-symbols-outlined text-[14px] text-white/40">chevron_right</span>
            <span className="font-label-caps text-label-caps text-white/90 max-w-[180px] line-clamp-1">{exp.title}</span>
          </nav>
        </div>

        <div className="relative z-10 h-full flex items-end pb-10 px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-2xl">
            <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-4">
              {exp.category.toUpperCase()} · {exp.provinceName.toUpperCase()}
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-[48px] font-bold text-white leading-tight mb-5">
              {exp.title}
            </h1>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5">
                <span className="material-symbols-outlined text-secondary text-[16px]">schedule</span>
                <span className="font-label-caps text-label-caps text-white text-[11px] tracking-widest">{exp.duration.toUpperCase()}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5">
                <span className={`material-symbols-outlined text-[16px] ${DIFFICULTY_COLOR[exp.difficulty]}`}>local_fire_department</span>
                <span className="font-label-caps text-label-caps text-white text-[11px] tracking-widest">{exp.difficulty.toUpperCase()}</span>
              </div>
              {exp.price && (
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5">
                  <span className="material-symbols-outlined text-secondary text-[16px]">sell</span>
                  <span className="font-label-caps text-label-caps text-white text-[11px] tracking-widest">{exp.price.toUpperCase()}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-14">
        <div className="grid lg:grid-cols-[1fr_320px] gap-10">
          {/* Left */}
          <div>
            {exp.longDescription && (
              <div className="mb-10">
                <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-4 uppercase">Sobre a Experiência</span>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{exp.longDescription}</p>
              </div>
            )}

            {/* Gallery */}
            {exp.gallery && exp.gallery.length > 0 && (
              <div>
                <h2 className="font-headline-sm text-[18px] font-semibold mb-5 pb-4 border-b border-savanna-sand">Galeria</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {exp.gallery.map((src, i) => (
                    <div key={i} className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                      <img src={src} alt={`${exp.title} ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: info card */}
          <div className="space-y-4">
            <div className="border border-savanna-sand p-6">
              <h2 className="font-headline-sm text-[17px] font-semibold mb-5 pb-4 border-b border-savanna-sand">Detalhes</h2>
              <dl className="flex flex-col gap-4 mb-5">
                {[
                  { icon: "schedule", label: "Duração", value: exp.duration },
                  { icon: "local_fire_department", label: "Dificuldade", value: exp.difficulty },
                  { icon: "location_on", label: "Localização", value: exp.provinceName },
                  { icon: "support_agent", label: "Operador", value: exp.operator },
                  ...(exp.price ? [{ icon: "sell", label: "Preço", value: exp.price }] : []),
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0">{icon}</span>
                    <div>
                      <dt className="font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant mb-0.5">{label.toUpperCase()}</dt>
                      <dd className="font-body-md text-sm text-on-surface">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>

              {exp.includes && exp.includes.length > 0 && (
                <div className="border-t border-savanna-sand pt-5">
                  <p className="font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant mb-3">INCLUI</p>
                  <ul className="flex flex-col gap-2">
                    {exp.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 font-body-md text-sm text-on-surface">
                        <span className="material-symbols-outlined text-primary text-[14px]">check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* CTA */}
            <a href="/contacto"
              className="flex items-center justify-center gap-2 bg-primary text-white font-label-caps text-label-caps text-[11px] tracking-widest px-6 py-4 hover:bg-primary-container transition-colors w-full">
              <span className="material-symbols-outlined text-[18px]">calendar_add_on</span>
              RESERVAR EXPERIÊNCIA
            </a>
            <a href={`/provincias/${exp.province}`}
              className="flex items-center justify-center gap-2 border border-savanna-sand font-label-caps text-label-caps text-[11px] tracking-widest px-6 py-3 text-on-surface-variant hover:border-primary hover:text-primary transition-colors w-full">
              <span className="material-symbols-outlined text-[16px]">travel_explore</span>
              EXPLORAR {exp.provinceName.toUpperCase()}
            </a>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-savanna-sand bg-surface-container-low">
          <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-14">
            <div className="mb-8">
              <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">Continuar a Explorar</span>
              <h2 className="font-headline-sm text-headline-sm">Experiências de {exp.category}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((e) => <ExperienceCard key={e.id} experience={e} />)}
            </div>
          </div>
        </section>
      )}

      <div className="border-t border-savanna-sand py-8">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto">
          <a href="/experiencias" className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Todas as Experiências
          </a>
        </div>
      </div>
    </main>
  );
}
