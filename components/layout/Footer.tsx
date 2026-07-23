const SOCIAL = [
  { href: "https://facebook.com/touraangola", label: "Facebook", icon: "face_nod" },
  { href: "https://instagram.com/touraangola", label: "Instagram", icon: "photo_camera" },
  { href: "https://youtube.com/touraangola", label: "YouTube", icon: "play_circle" },
];

const NAV_COLUMNS = [
  {
    heading: "EXPLORAR",
    links: [
      { label: "Todos os Destinos", href: "/destinos" },
      { label: "Províncias de Angola", href: "/provincias" },
      { label: "Eventos & Festivais", href: "/eventos" },
      { label: "Cultura de Angola", href: "/cultura" },
      { label: "Gastronomia", href: "/gastronomia" },
      { label: "Experiências", href: "/experiencias" },
    ],
  },
  {
    heading: "INFORMAÇÃO",
    links: [
      { label: "Visitar Angola", href: "/visitar-angola" },
      { label: "Notícias", href: "/noticias" },
      { label: "Mapa Interativo", href: "/mapa" },
      { label: "Sobre a Toura", href: "/sobre" },
    ],
  },
  {
    heading: "SUPORTE",
    links: [
      { label: "Contacto", href: "/contacto" },
      { label: "Perguntas Frequentes", href: "/contacto#faq" },
      { label: "Termos e Condições", href: "/termos" },
      { label: "Política de Privacidade", href: "/privacidade" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest border-t border-savanna-sand/30">
      <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto pt-16 pb-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-savanna-sand/30">
          {/* Brand */}
          <div>
            <a
              href="/"
              className="font-headline-sm text-headline-sm font-bold text-on-surface block mb-5"
            >
              Toura
            </a>
            <p className="font-body-md text-sm text-on-surface-variant mb-7 leading-relaxed">
              A plataforma oficial de turismo de Angola, dedicada a revelar a
              beleza, a alma e a hospitalidade da nossa nação ao mundo.
            </p>
            <div className="flex gap-3">
              {SOCIAL.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-savanna-sand flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {NAV_COLUMNS.map(({ heading, links }) => (
            <div key={heading}>
              <h6 className="font-label-caps text-label-caps text-[10px] tracking-widest text-primary mb-6">
                {heading}
              </h6>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <div className="flex items-center gap-1.5 font-label-caps text-[10px] tracking-widest text-on-surface-variant">
            <span>Desenvolvido por</span>
            <span className="font-bold text-on-surface">Zyeta Technologies</span>
          </div>
          <p className="font-label-caps text-[10px] tracking-widest text-on-surface-variant/60">
            © 2025 Toura Angola. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
