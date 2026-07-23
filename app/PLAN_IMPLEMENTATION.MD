


Toura Portal — Plano de Sprints (MVP → Produção)                                                                                                           
                                                                                                                                                             
  Contexto: Stack — Next.js 16 / React 19 / Tailwind v4 / TypeScript. Sprints de 2 semanas. Foco no Portal Web público; Mobile App e Backoffice são projetos 
  separados (referenciados onde integram).                                                                                                                   
                                                                                                                                                             
  ---                                                                                                                                                        
  Sprint 0 — Fundação e Design System
                                     
  Duração: 2 semanas | Objetivo: Base sólida antes de qualquer feature
                                                                                                                                                             
  Configuração do Projeto                                                                                                                                    
                                                                                                                                                             
  - Configurar Tailwind v4 com tokens de design do branding (cores, tipografia, espaçamentos)                                                                
  - Instalar e configurar fontes Poppins + Inter via next/font
  - Criar tailwind.config com paleta completa:                                                                                                               
    - brand-navy: #0B132B, brand-teal: #00BFA5, brand-amber: #FFC107, brand-coral: #FF5A3D, brand-blue: #2563EB, brand-dark: #111111, brand-light: #F4F6F8,  
  brand-cream: #F0E8D8                                                                                                                                       
  - Configurar globals.css com variáveis CSS e reset base                                                                                                    
  - Configurar next.config.ts — i18n, image domains, metadata defaults                                                                                       
  - Configurar ESLint + Prettier + Husky (pre-commit hooks)                                                                                                  
  - Definir estrutura de pastas: app/, components/, lib/, types/, data/, public/                                                                             
                                                                                                                                                             
  Design System (componentes base)                                                                                                                           
                                                                                                                                                             
  - Button — variantes: Primary (teal), Secondary (outline), Tertiary (text), Disabled                                                                       
  - Typography — H1–H5 com Poppins, Body 1/2/Caption com Inter
  - Icon — wrapper para biblioteca de ícones (Lucide) no estilo minimalista/arredondado                                                                      
  - Card — DestinationCard com foto, título, localização, rating, botão de favorito                                                                          
  - SearchInput — campo com ícone de lupa, placeholder "Pesquisar destinos, eventos…"                                                                        
  - Badge — categorias/tags                                                                                                                                  
  - Spinner / Skeleton — estados de loading                                                                                                                  
                                                                                                                                                             
  Padrões Gráficos e Assets                                                                                                                                  
  
  - Adicionar padrão geométrico angolano como SVG reutilizável (PatternBackground)                                                                           
  - Configurar logo Tour.a nas variantes: completo, ícone, negativo
  - Criar public/patterns/ com variantes do padrão gráfico                                                                                                   
  - Definir estrutura de metadata global (layout.tsx) com OG tags                                                                                            
                                                                                                                                                             
  Entregável: Design system documentado, projeto rodando com npm run dev, paleta e tipografia aplicadas.                                                     
                                                                                                                                                             
  ---                                                                                                                                                        
  Sprint 1 — Homepage e Navegação Global
                                        
  Duração: 2 semanas | Objetivo: Primeira impressão — a "porta de entrada" da Toura
                                                                                                                                                             
  Navbar
                                                                                                                                                             
  - Navbar — logo Tour.a à esquerda, links de navegação, botão CTA "Explorar Destinos", menu mobile hamburger                                                
  - Navbar transparente no hero, sólida (navy #0B132B) ao fazer scroll
  - Indicador de rota ativa                                                                                                                                  
  - Seletor de idioma (PT | EN) — placeholder, funcional no Sprint 9
                                                                                                                                                             
  Hero Section    
                                                                                                                                                             
  - Hero full-screen com vídeo/imagem de fundo (Cataratas do Kalandula ou paisagem icónica)                                                                  
  - Overlay com padrão geométrico sutil
  - Headline: "Descubra Angola. Viva experiências inesquecíveis." (Poppins Bold)                                                                             
  - Search bar central — pesquisa rápida de destinos
  - CTA primário "Explorar Destinos" + CTA secundário "Saber Mais"                                                                                           
                                                                                                                                                             
  Secções da Homepage                                                                                                                                        
                                                                                                                                                             
  - Destinos em Destaque — grid de 4 DestinationCard (dados mock)                                                                                            
  - Explorar por Categoria — ícones: Praias, Parques Naturais, Monumentos, Gastronomia, Cultura, Aventura
  - Províncias de Angola — mapa ilustrativo ou grid das 18 províncias com foto                                                                               
  - Eventos Próximos — carrossel horizontal de 3 eventos (mock)                                                                                              
  - Números de Angola — counter animado: X destinos, Y províncias, Z experiências                                                                            
  - Galeria Inspiracional — grid masonry de fotos de alta qualidade                                                                                          
  - Call to Action final — "Planeie a sua viagem" com fundo em padrão angolano                                                                               
                                                                                                                                                             
  Footer                                                                                                                                                     
                                                                                                                                                             
  - Logo + slogan 
  - Links: Sobre a Toura, Destinos, Eventos, Contacto
  - Links legais: Política de Privacidade, Termos de Uso                                                                                                     
  - Redes sociais (placeholders)                                                                                                                             
  - Copyright Zyeta Technologies / Ministério do Turismo                                                                                                     
                                                                                                                                                             
  Entregável: Homepage completa e responsiva, navegação funcional, mobile-first.                                                                             
                                                                                                                                                             
  ---                                                                                                                                                        
  Sprint 2 — Catálogo de Destinos e Pesquisa
                                                                                                                                                             
  Duração: 2 semanas | Objetivo: Motor de descoberta de destinos
                                                                                                                                                             
  Página /destinos                                                                                                                                           
  
  - Grid responsivo de DestinationCard (12–24 por página)                                                                                                    
  - Filtros laterais/superiores:
    - Província                                                                                                                                              
    - Categoria (Praia, Natureza, Cultura, Aventura, Gastronomia, Histórico)
    - Classificação (rating stars)                                                                                                                           
    - Ordenação (popularidade, alfabético, mais recente)                                                                                                     
  - Paginação / infinite scroll                                                                                                                              
  - Estado vazio com ilustração ("Nenhum destino encontrado")                                                                                                
  - Breadcrumb de navegação                                                                                                                                  
                  
  Sistema de Pesquisa                                                                                                                                        
                  
  - SearchPage — /pesquisa?q=kalandula                                                                                                                       
  - Resultados agrupados: Destinos, Eventos, Notícias
  - Highlight do termo pesquisado nos resultados                                                                                                             
  - Sugestões de pesquisa (autocomplete) com dados mock
  - Pesquisa "sem resultados" com sugestões alternativas                                                                                                     
                                                                                                                                                             
  Dados e Tipos                                                                                                                                              
                                                                                                                                                             
  - Definir tipos TypeScript: Destination, Province, Category, Event, Review                                                                                 
  - Criar data/destinations.ts — 20+ destinos mock com dados completos
  - Criar data/provinces.ts — 18 províncias com dados                                                                                                        
  - Utilitário de filtragem e ordenação em lib/filters.ts
                                                                                                                                                             
  Entregável: Catálogo navegável, filtros funcionais, pesquisa com resultados.                                                                               
                                                                                                                                                             
  ---                                                                                                                                                        
  Sprint 3 — Página de Detalhe do Destino
                                         
  Duração: 2 semanas | Objetivo: Página rica que inspira e informa o turista
                                                                                                                                                             
  Rota /destinos/[slug]                                                                                                                                      
                                                                                                                                                             
  - Hero com galeria fotográfica (slideshow / lightbox) full-width                                                                                           
  - Breadcrumb: Início > Destinos > [Província] > [Destino]
  - Header com nome, categoria, localização (Província, Município), rating                                                                                   
  - Botão Favorito (coração) e Partilhar                                                                                                                     
  - Tabs de conteúdo:                                                                                                                                        
    - Sobre — descrição completa, história, curiosidades                                                                                                     
    - O que fazer — atividades e experiências                                                                                                                
    - Como chegar — indicações de acesso                                                                                                                     
    - Informações úteis — horários, entrada, época ideal, clima                                                                                              
  - Mapa integrado — embed Google Maps ou Mapbox com pin do destino                                                                                          
  - Pontos de Interesse Próximos — carrossel de 4 DestinationCard relacionados                                                                               
  - Galeria completa — grid de fotos com lightbox                                                                                                            
  - Avaliações — média de estrelas + lista de reviews (mock)                                                                                                 
  - Secção "Partilhe a sua experiência" (placeholder para futuro)                                                                                            
                                                                                                                                                             
  SEO e Metadata                                                                                                                                             
                                                                                                                                                             
  - generateMetadata() dinâmico por destino                                                                                                                  
  - OG Image com foto do destino
  - Schema.org TouristAttraction (JSON-LD)                                                                                                                   
  - generateStaticParams() para SSG dos destinos mock                                                                                                        
                                                                                                                                                             
  Entregável: Página de destino completa, SEO configurado, SSG funcionando.                                                                                  
                                                                                                                                                             
  ---             
  Sprint 4 — Províncias e Exploração por Mapa
                                                                                                                                                             
  Duração: 2 semanas | Objetivo: Navegação geográfica e contexto regional
                                                                                                                                                             
  Página /provincias
                                                                                                                                                             
  - Grade das 18 províncias com foto representativa, nome e número de destinos                                                                               
  - Mapa interativo de Angola (SVG ou Mapbox) — hover/click por província
  - Ordenação por região (Norte, Centro, Sul, Leste, Oeste)                                                                                                  
                  
  Página /provincias/[slug]                                                                                                                                  
                  
  - Hero com foto icónica da província                                                                                                                       
  - Descrição da província — geografia, cultura, economia, turismo
  - Grid de municípios com destinos                                                                                                                          
  - Destaques da Província — top 3 destinos em cards grandes
  - Grid de todos os destinos da província (com filtros)                                                                                                     
  - Mapa da província com pins dos destinos                                                                                                                  
  - Gastronomia Local — pratos típicos em cards                                                                                                              
  - Festivais e Eventos — próximos eventos na província                                                                                                      
                                                                                                                                                             
  Mapa Exploratório /mapa                                                                                                                                    
                  
  - Mapa full-screen de Angola (Mapbox GL ou Leaflet)                                                                                                        
  - Pins de todos os destinos por categoria (cor diferente por tipo)
  - Cluster de pins ao zoom out                                                                                                                              
  - Popup no hover/click com mini card do destino
  - Filtros flutuantes sobre o mapa (por categoria)                                                                                                          
  - Botão "Ver destino" no popup que navega para o detalhe                                                                                                   
                                                                                                                                                             
  Entregável: Navegação geográfica completa, mapa interativo funcional.                                                                                      
                                                                                                                                                             
  ---                                                                                                                                                        
  Sprint 5 — Eventos e Calendário
                                 
  Duração: 2 semanas | Objetivo: Promoção de festivais, eventos culturais e experiências
                                                                                                                                                             
  Página /eventos
                                                                                                                                                             
  - Vista em grid e vista em calendário (toggle)                                                                                                             
  - EventCard — foto, título, data, local, categoria
  - Filtros: Categoria (Festival, Cultural, Desportivo, Gastronómico, Musical), Província, Mês                                                               
  - Banner de destaque para o evento principal do momento                                                                                                    
  - Carrossel "Esta semana em Angola"                                                                                                                        
                                                                                                                                                             
  Página /eventos/[slug]                                                                                                                                     
                                                                                                                                                             
  - Hero com foto do evento                                                                                                                                  
  - Informações: datas, horários, local, entrada (gratuito/pago)
  - Mapa do local do evento                                                                                                                                  
  - Galeria de edições anteriores                                                                                                                            
  - Eventos relacionados (mesma categoria ou província)                                                                                                      
  - CTA "Planear viagem para este evento"                                                                                                                    
                                                                                                                                                             
  Calendário de Eventos
                                                                                                                                                             
  - Vista mensal — calendário com marcadores de eventos                                                                                                      
  - Vista de lista — agrupado por mês
  - Filtros integrados ao calendário                                                                                                                         
                  
  Entregável: Secção de eventos completa, calendário interativo.                                                                                             
                  
  ---                                                                                                                                                        
  Sprint 6 — Cultura, Gastronomia e Experiências
                                                
  Duração: 2 semanas | Objetivo: Conteúdo editorial que enriquece a identidade cultural
                                                                                                                                                             
  Secção /cultura
                                                                                                                                                             
  - Página index com categorias: Música, Dança, Artesanato, Línguas, Tradições, Arte                                                                         
  - Páginas de subcategoria com artigos editoriais
  - Cards de expressões culturais por região/etnia                                                                                                           
  - Galeria de arte e artesanato angolano                                                                                                                    
                                                                                                                                                             
  Secção /gastronomia                                                                                                                                        
                  
  - Grid de pratos típicos com foto, descrição, origem regional                                                                                              
  - Página de detalhe de prato
  - Restaurantes e experiências gastronómicas recomendadas (por província)                                                                                   
  - "Rota gastronómica" — sugestão de itinerário culinário                                                                                                   
                                                                                                                                                             
  Secção /experiencias                                                                                                                                       
                                                                                                                                                             
  - Categorias: Aventura, Ecoturismo, Mergulho, Safari, Caminhadas, Cultural                                                                                 
  - ExperienceCard — foto, duração, dificuldade, localização, operador (mock)
  - Página de detalhe da experiência                                                                                                                         
  - Filtro por tipo, duração, província
                                                                                                                                                             
  Entregável: Conteúdo editorial rico sobre cultura, gastronomia e experiências.                                                                             
                                                                                                                                                             
  ---                                                                                                                                                        
  Sprint 7 — Notícias e Blog Editorial
                                      
  Duração: 2 semanas | Objetivo: Canal de comunicação oficial e conteúdo SEO
                                                                                                                                                             
  Secção /noticias
                                                                                                                                                             
  - Grid de artigos: foto, título, categoria, data, resumo                                                                                                   
  - Categorias: Turismo, Cultura, Eventos, Investimento, Sustentabilidade
  - Artigo em destaque (hero editorial)                                                                                                                      
  - Sidebar: artigos recentes, categorias, newsletter signup (placeholder)                                                                                   
  - Paginação                                                                                                                                                
                                                                                                                                                             
  Página /noticias/[slug]                                                                                                                                    
                  
  - Layout de artigo: hero image, título, autor, data, categoria, body text                                                                                  
  - Typografia editorial bem espaçada
  - Partilha em redes sociais (Web Share API)                                                                                                                
  - Artigos relacionados
  - Schema.org NewsArticle (JSON-LD)                                                                                                                         
                  
  RSS e SEO Editorial                                                                                                                                        
                  
  - sitemap.xml dinâmico                                                                                                                                     
  - robots.txt
  - RSS feed (/feed.xml)                                                                                                                                     
  - OpenGraph por artigo
                                                                                                                                                             
  Entregável: Secção editorial funcional, SEO técnico completo.
                                                                                                                                                             
  ---             
  Sprint 8 — Favoritos, Planeamento e Perfil de Utilizador
                                                                                                                                                             
  Duração: 2 semanas | Objetivo: Personalização e envolvimento do utilizador
                                                                                                                                                             
  Sistema de Favoritos (sem autenticação)
                                                                                                                                                             
  - Favoritos guardados em localStorage                                                                                                                      
  - Botão de coração em todos os DestinationCard e EventCard
  - Página /favoritos — lista de itens guardados                                                                                                             
  - Remover favorito, partilhar lista                                                                                                                        
                                                                                                                                                             
  Autenticação (Fase 1)                                                                                                                                      
                  
  - Integração com NextAuth.js ou Clerk                                                                                                                      
  - Login com Google e Email/Password
  - Sincronizar favoritos com conta quando autenticado                                                                                                       
                                                                                                                                                             
  Página de Perfil /perfil                                                                                                                                   
                                                                                                                                                             
  - Avatar, nome, e-mail
  - Lista de favoritos sincronizados
  - Histórico de pesquisas (opcional)                                                                                                                        
  - Preferências: idioma, notificações
                                                                                                                                                             
  Planeador de Viagem (MVP)                                                                                                                                  
                                                                                                                                                             
  - "Adicionar ao plano" — agrupar destinos numa viagem                                                                                                      
  - /planeador — lista de destinos escolhidos, estimativa de dias
  - Exportar lista como PDF ou partilhar link                                                                                                                
                                                                                                                                                             
  Entregável: Sistema de favoritos funcional, autenticação básica, planeador MVP.                                                                            
                                                                                                                                                             
  ---                                                                                                                                                        
  Sprint 9 — Internacionalização (PT / EN)
                                          
  Duração: 2 semanas | Objetivo: Atrair turistas internacionais com conteúdo em inglês
                                                                                                                                                             
  Setup i18n
                                                                                                                                                             
  - Configurar next-intl ou i18n nativo do Next.js 16                                                                                                        
  - Estrutura de rotas: /pt/... e /en/... (ou via header Accept-Language)
  - Ficheiros de tradução: messages/pt.json, messages/en.json                                                                                                
                  
  Tradução de Conteúdo                                                                                                                                       
                  
  - Todas as strings de UI traduzidas (PT/EN)                                                                                                                
  - Dados dos destinos com campos title_pt, title_en, description_pt, description_en
  - Seletor de idioma funcional no navbar                                                                                                                    
  - hreflang nas páginas para SEO multilíngue                                                                                                                
                                                                                                                                                             
  Conteúdo Específico para Turistas Internacionais                                                                                                           
                  
  - Página /visitar-angola — vistos, requisitos de entrada, clima, moeda, segurança                                                                          
  - FAQ para viajantes internacionais
  - Guia prático: como se deslocar, o que saber antes de ir                                                                                                  
                                                                                                                                                             
  Entregável: Portal 100% funcional em PT e EN.
                                                                                                                                                             
  ---             
  Sprint 10 — Performance, SEO e Acessibilidade
                                                                                                                                                             
  Duração: 2 semanas | Objetivo: Lighthouse 90+, Core Web Vitals verde
                                                                                                                                                             
  Performance     
                                                                                                                                                             
  - Auditoria com Lighthouse — atingir 90+ em Performance, SEO, Acessibilidade                                                                               
  - Optimização de imagens: next/image com sizes, formatos WebP/AVIF
  - Lazy loading de secções abaixo do fold                                                                                                                   
  - Bundle analysis — eliminar dependências pesadas
  - Configurar ISR (Incremental Static Regeneration) para destinos                                                                                           
  - Configurar cache headers para assets estáticos                                                                                                           
                                                                                                                                                             
  SEO Técnico                                                                                                                                                
                  
  - Sitemap dinâmico com todas as rotas                                                                                                                      
  - robots.txt configurado
  - Canonical URLs em todas as páginas                                                                                                                       
  - Schema.org em todas as páginas (TouristDestination, Event, NewsArticle, Organization)
  - Breadcrumbs com schema markup                                                                                                                            
                                                                                                                                                             
  Acessibilidade (WCAG 2.1 AA)                                                                                                                               
                                                                                                                                                             
  - Todos os elementos interativos acessíveis por teclado                                                                                                    
  - aria-label em ícones e botões sem texto
  - Contraste de cores validado (#0B132B / #00BFA5 sobre backgrounds)                                                                                        
  - Skip navigation link                                                                                                                                     
  - Imagens com alt descritivo                                                                                                                               
                                                                                                                                                             
  Entregável: Lighthouse 90+ em todas as categorias, site acessível.                                                                                         
  
  ---                                                                                                                                                        
  Sprint 11 — Sobre, Páginas Institucionais e Detalhes Finais
                                                                                                                                                             
  Duração: 2 semanas | Objetivo: Completar o portal com páginas institucionais
                                                                                                                                                             
  Páginas Institucionais
                                                                                                                                                             
  - /sobre — Missão da Toura, sobre o Ministério do Turismo, Zyeta Technologies                                                                              
  - /contacto — formulário de contacto, localização, redes sociais
  - /parceiros — operadores turísticos, hotéis parceiros (grid com logos)                                                                                    
  - /investir — oportunidades de investimento em turismo em Angola                                                                                           
  - /politica-privacidade e /termos-uso                                                                                                                      
                                                                                                                                                             
  Página 404 e Estados de Erro                                                                                                                               
                  
  - Página 404 customizada com padrão angolano e sugestões de destinos                                                                                       
  - Página 500 com contacto de suporte
  - error.tsx e not-found.tsx configurados                                                                                                                   
                                                                                                                                                             
  Polimento Visual
                                                                                                                                                             
  - Animações de entrada (Framer Motion ou CSS transitions)                                                                                                  
  - Hover states consistentes em todos os cards e botões
  - Transições de página suaves                                                                                                                              
  - Scroll progress indicator nos artigos                                                                                                                    
  - "Back to top" button                                                                                                                                     
                                                                                                                                                             
  Testes                                                                                                                                                     
                  
  - Testes E2E críticos com Playwright (homepage, pesquisa, detalhe de destino)                                                                              
  - Testes de componentes base com Vitest/Testing Library
  - Teste cross-browser (Chrome, Firefox, Safari, Edge)                                                                                                      
  - Teste em dispositivos móveis reais (iOS Safari, Android Chrome)
                                                                                                                                                             
  Entregável: Portal completo, polido, testado.                                                                                                              
                                                                                                                                                             
  ---                                                                                                                                                        
  Sprint 12 — Integração com API Real e Deploy
                                                                                                                                                             
  Duração: 2 semanas | Objetivo: Substituir dados mock pela API real, lançar em produção
                                                                                                                                                             
  Integração de API
                                                                                                                                                             
  - Definir contratos de API com equipa de backend (OpenAPI/Swagger)                                                                                         
  - Substituir data/*.ts mock por chamadas à API real
  - Criar lib/api.ts — cliente HTTP tipado (fetch nativo ou axios)                                                                                           
  - Configurar variáveis de ambiente: .env.local, .env.production                                                                                            
  - Tratamento de erros da API (timeouts, 404, 500)                                                                                                          
  - Loading states e skeleton screens em todas as páginas com dados assíncronos                                                                              
                                                                                                                                                             
  Analytics e Monitoring
                                                                                                                                                             
  - Integrar Google Analytics 4 ou Plausible (privacy-friendly)                                                                                              
  - Configurar eventos: pesquisa, clique em destino, favorito, partilha
  - Error tracking com Sentry                                                                                                                                
  - Uptime monitoring
                                                                                                                                                             
  Deploy e Infraestrutura
                                                                                                                                                             
  - Configurar deploy na Vercel (recomendado para Next.js) ou infraestrutura própria                                                                         
  - Configurar domínio toura.ao
  - SSL/HTTPS automático                                                                                                                                     
  - CI/CD pipeline (GitHub Actions) — build, lint, testes, deploy automático
  - Configurar CDN para assets e imagens                                                                                                                     
  - Variáveis de ambiente de produção configuradas
                                                                                                                                                             
  Lançamento      
                                                                                                                                                             
  - Smoke tests em produção
  - Checklist de lançamento: SEO, performance, links, formulários
  - Configurar redirects do domínio antigo (se existir)                                                                                                      
  - Monitorizar Core Web Vitals pós-lançamento                                                                                                               
                                                                                                                                                             
  Entregável: Portal em produção, integrado com API real, monitorado.                                                                                        
                  
  ---                                                                                                                                                        
  Backlog Pós-MVP (Futuras Iterações)
                                                                                                                                                             
  Funcionalidades planeadas para após o lançamento inicial:
                                                                                                                                                             
  ┌───────────────────────────────────────┬────────────┬───────────────────────────────────┐
  │                Feature                │ Prioridade │               Notas               │                                                                 
  ├───────────────────────────────────────┼────────────┼───────────────────────────────────┤
  │ Reservas de hotéis/atividades         │ Alta       │ Integração com parceiros           │
  ├───────────────────────────────────────┼────────────┼────────────────────────────────────┤
  │ App Mobile (React Native / Expo)      │ Alta       │ Projeto separado                   │                                                                
  ├───────────────────────────────────────┼────────────┼────────────────────────────────────┤                                                                
  │ Painel Administrativo (Backoffice)    │ Alta       │ Projeto separado                   │                                                                
  ├───────────────────────────────────────┼────────────┼────────────────────────────────────┤                                                                
  │ IA de recomendações personalizadas    │ Média      │ Baseada em histórico de navegação      │
  ├───────────────────────────────────────┼────────────┼────────────────────────────────────────┤                                                            
  │ Avaliações e reviews dos utilizadores │ Média      │ Sistema de moderação necessário        │
  ├───────────────────────────────────────┼────────────┼────────────────────────────────────────┤                                                            
  │ Marketplace de experiências           │ Média      │ Operadores turísticos parceiros        │
  ├───────────────────────────────────────┼────────────┼────────────────────────────────────────┤                                                            
  │ API pública para parceiros            │ Baixa      │ Documentação e portal de developer     │
  ├───────────────────────────────────────┼────────────┼────────────────────────────────────────┤                                                            
  │ Dashboard analítico para o Ministério │ Baixa      │ Indicadores estratégicos               │
  ├───────────────────────────────────────┼────────────┼────────────────────────────────────────┤                                                            
  │ Suporte a mais idiomas (ES, FR, ZH)   │ Baixa      │ Após consolidação PT/EN                │
  ├───────────────────────────────────────┼────────────┼────────────────────────────────────────┤                                                            
  │ PWA (modo offline)                    │ Baixa      │ Service worker para destinos visitados │
  └───────────────────────────────────────┴────────────┴────────────────────────────────────────┘                                                            
                  
  ---                                                                                                                                                        
  Resumo do Calendário
                      
  ┌──────────┬──────────────────────────┬─────────┐
  │  Sprint  │                Tema                │ Semanas │                                                                                                
  ├──────────┼────────────────────────────────────┼─────────┤
  │ Sprint 0 │ Fundação e Design System           │ 1–2     │                                                                                                
  ├──────────┼────────────────────────────────────┼─────────┤
  │ Sprint 1 │ Homepage e Navegação               │ 3–4     │
  ├──────────┼────────────────────────────────────┼─────────┤                                                                                                
  │ Sprint 2 │ Catálogo e Pesquisa                │ 5–6     │
  ├──────────┼────────────────────────────────────┼─────────┤                                                                                                
  │ Sprint 3 │ Detalhe do Destino                 │ 7–8     │
  ├──────────┼────────────────────────────────────┼─────────┤                                                                                                
  │ Sprint 4  │ Províncias e Mapa                  │ 9–10    │
  ├───────────┼────────────────────────────────────┼─────────┤                                                                                               
  │ Sprint 5  │ Eventos e Calendário               │ 11–12   │
  ├───────────┼────────────────────────────────────┼─────────┤                                                                                               
  │ Sprint 6  │ Cultura, Gastronomia, Experiências │ 13–14   │
  ├───────────┼────────────────────────────────────┼─────────┤                                                                                               
  │ Sprint 7  │ Notícias e Blog                    │ 15–16   │
  ├───────────┼────────────────────────────────────┼─────────┤
  │ Sprint 8  │ Favoritos e Perfil                 │ 17–18   │
  ├───────────┼────────────────────────────────────┼─────────┤                                                                                               
  │ Sprint 9  │ Internacionalização PT/EN          │ 19–20   │
  ├───────────┼────────────────────────────────────┼─────────┤                                                                                               
  │ Sprint 10 │ Performance, SEO, Acessibilidade   │ 21–22   │
  ├───────────┼────────────────────────────────────┼─────────┤                                                                                               
  │ Sprint 11 │ Institucional, Testes, Polimento   │ 23–24   │
  ├───────────┼────────────────────────────────────┼─────────┤                                                                                               
  │ Sprint 12 │ API Real e Deploy                  │ 25–26   │
  └───────────┴────────────────────────────────────┴─────────┘                                                                                               
  
  Total: ~26 semanas (6 meses) para MVP completo em produção.                                                                                                
                  
  ---                                                                                                                                                        
  Agora vou salvar este contexto em memória para futuras conversas.
                                                                                                                                                             
  Listed 1 directory, wrote 4 memories (ctrl+o to expand)    
                                                                                                                                                             
● O plano está completo e o contexto guardado em memória. Aqui o resumo executivo:                                                                        
                                                                                                                                                             
  12 sprints / 26 semanas para um MVP completo em produção:                                                                                                  
                                                                                                                                                             
  - Sprint 0–1: Base técnica (design system com o branding Toura) + Homepage                                                                                 
  - Sprint 2–4: Motor de descoberta — catálogo, pesquisa, detalhe de destino, mapa interativo por províncias
  Total: ~26 semanas (6 meses) para MVP completo em produção.

  ---
  Agora vou salvar este contexto em memória para futuras conversas.

  Listed 1 directory, wrote 4 memories (ctrl+o to expand)

● O plano está completo e o contexto guardado em memória. Aqui o resumo executivo:

  12 sprints / 26 semanas para um MVP completo em produção:

  - Sprint 0–1: Base técnica (design system com o branding Toura) + Homepage
  - Sprint 2–4: Motor de descoberta — catálogo, pesquisa, detalhe de destino, mapa interativo por províncias
  - Sprint 5–7: Conteúdo editorial — eventos, cultura, gastronomia, notícias
  - Sprint 8–9: Personalização (favoritos, perfil) + suporte a PT/EN
  - Sprint 10–11: Qualidade — Lighthouse 90+, acessibilidade, testes Playwright
  - Sprint 12: Integração com API real + deploy em toura.ao

  A próxima ação natural é iniciar o Sprint 0 — quer começar agora? Posso configurar o design system completo com os tokens de cor, tipografia e os
  componentes base respeitando o branding da Tour.a.

✻ Baked for 3m 13s

※ recap: Building the Toura Angola tourism portal from a fresh Next.js install. Sprint plan covering 12 sprints over 26 weeks was created. Next: start Sprint
   0 by setting up the design system with brand tokens and base components. (disable recaps in /config)

─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
❯  
─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  ? for shortcuts
