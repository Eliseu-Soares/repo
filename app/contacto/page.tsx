import ContactForm from "@/components/contacto/ContactForm";
import { breadcrumbJsonLd, makeCanonical } from "@/lib/seo";

export const revalidate = 86400;

export const metadata = {
  title: "Contacto | Toura Angola",
  description:
    "Entre em contacto com a equipa Toura — para parcerias, media, suporte técnico ou simplesmente para partilhar a sua experiência.",
  alternates: { canonical: makeCanonical("/contacto") },
};

const CONTACT_INFO = [
  { icon: "location_on", label: "Morada", value: "Rua Rainha Ginga, Luanda, Angola" },
  { icon: "mail", label: "Email", value: "geral@toura.ao" },
  { icon: "phone", label: "Telefone", value: "+244 923 000 000" },
  { icon: "schedule", label: "Horário", value: "Segunda – Sexta, 09h00 – 18h00" },
];

const SOCIAL = [
  { icon: "face_nod", label: "Facebook", href: "https://facebook.com/touraangola" },
  { icon: "photo_camera", label: "Instagram", href: "https://instagram.com/touraangola" },
  { icon: "play_circle", label: "YouTube", href: "https://youtube.com/touraangola" },
];

const MAP_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=13.10,-8.95,13.35,-8.75&layer=mapnik&marker=-8.84,13.23";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contacto — Toura Angola",
    url: makeCanonical("/contacto"),
  },
  breadcrumbJsonLd([
    { name: "Início", path: "/" },
    { name: "Contacto", path: "/contacto" },
  ]),
];

export default function ContactoPage() {
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
      <section className="bg-surface-container-low border-b border-savanna-sand">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-16">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-10">
            <a href="/" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors">
              Início
            </a>
            <span className="material-symbols-outlined text-[14px] text-on-surface-variant/40">chevron_right</span>
            <span className="font-label-caps text-label-caps text-on-surface">Contacto</span>
          </nav>
          <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-4 uppercase">
            Fale Connosco
          </span>
          <h1 className="font-display-lg text-display-lg-mobile lg:text-[52px] font-bold text-on-surface leading-tight mb-5 max-w-xl">
            Estamos Aqui Para Si
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Para parcerias, sugestões de destinos, media ou simplesmente para partilhar
            a sua experiência com Angola — a nossa equipa responde em 24 horas.
          </p>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-16">
        <div className="grid lg:grid-cols-[1fr_380px] gap-14">
          {/* Left: form */}
          <ContactForm />

          {/* Right: info + map + social */}
          <aside className="flex flex-col gap-8">
            {/* Contact info */}
            <div className="border border-savanna-sand p-8">
              <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-6 uppercase">
                Informações de Contacto
              </span>
              <dl className="flex flex-col gap-5">
                {CONTACT_INFO.map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <span
                      className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      {icon}
                    </span>
                    <div>
                      <dt className="font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant mb-0.5">
                        {label.toUpperCase()}
                      </dt>
                      <dd className="font-body-md text-sm text-on-surface">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            {/* Map — Luanda */}
            <div>
              <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">
                Localização
              </span>
              <div className="border border-savanna-sand overflow-hidden">
                <iframe
                  src={MAP_URL}
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Toura Angola — Luanda"
                />
              </div>
            </div>

            {/* Social */}
            <div className="border border-savanna-sand p-6">
              <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-5 uppercase">
                Redes Sociais
              </span>
              <div className="flex gap-3">
                {SOCIAL.map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-savanna-sand flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      {icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="bg-surface-container-low border-t border-savanna-sand">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-16">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">
            Perguntas Frequentes
          </span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface mb-10">
            Antes de Entrar em Contacto
          </h2>
          <div className="grid lg:grid-cols-2 gap-4 max-w-4xl">
            {[
              {
                q: "Como posso sugerir um destino?",
                a: "Utilize o formulário acima com o assunto \"Sugerir um Destino\". A nossa equipa editorial avaliará e responderá em 5 dias úteis.",
              },
              {
                q: "Posso publicar fotos de Angola na Toura?",
                a: "Sim! Aceitamos contribuições de fotógrafos e viajantes. Envie as suas fotos com geolocalização e créditos através do formulário.",
              },
              {
                q: "Como me tornar parceiro da Toura?",
                a: "Agências, hotéis e operadores turísticos podem submeter propostas de parceria através do formulário com o assunto \"Parcerias Institucionais\".",
              },
              {
                q: "A plataforma está disponível em inglês?",
                a: "Sim, a Toura suporta português e inglês. Pode alternar entre os dois idiomas no canto superior direito do cabeçalho.",
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="border border-savanna-sand group"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-headline-sm text-[16px] font-semibold text-on-surface list-none select-none hover:text-primary transition-colors">
                  {q}
                  <span
                    className="material-symbols-outlined text-[20px] shrink-0 text-on-surface-variant group-open:rotate-180 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-5 font-body-md text-sm text-on-surface-variant leading-relaxed border-t border-savanna-sand pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
