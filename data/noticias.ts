import type { NewsArticle, NewsCategory } from "@/types";

const A1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCj6ljP_P1Em8sDC6O-4-t60actSiab2sQ4nHjgrP8WplSbSS4Dkho7RDs8YGdNViR5cUAywTKzdrCe6bsty9wf9Y132aeDAqperWYA_DM8OmZ0r6ejl1pH87l2OQEbKBQ59O_4HgO9CD7ijCj4E3xHvn_PJsFvt_l61FFAHX9fVNWm5cysGm1JZROHX06xrpNEJdkKucxPdOJe70qAaJSD8vcl5mRc4KJbm6QhtBtRYFyaUfA_2BICew_5BDp0zObUdhgJajLumaoZ";
const A2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuALvscUa-xXKkkLq3kceqvHAOTbZ_MAd00FAxDGdgkRzcYz4NprBi6pWKhQx3mCbS6w-eJ8YE4N5zbF6paagzKEOLgWjJT8YOceSShk70c4GoSH1CCsoAeoYqynSoEYDETiQ3U0s3KxMG8vjr7JQaIrpqP8LWKym5Qok0LyU5xY0RJS9E0KSmcnH9PUYXBFWnfeeh1NBAlN3Zc1F9v9VCtdg-5hWNBZlaP8GLb9lqrVV2LwIC1TfhxmtELFluRFeRFyaoO7KYGPaikF";
const A3 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCyqopJyomNRxI0yD9LJuV7oTq3mvhAHKvYlGbhC4P8T5O8ceDWc6NJFTkKf_FBFXS8kFlnlZAnc5JF7Hzb0gGzqNSVVAiZJpYKlPwFLIVbQUMhcDV9P-RBkf9fjHp7_p8XC0e9b7i5V0b0j2Vb6Ri6KyUYEUQZ9g";
const A4 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCPXbpfTe0G5h4k1sGV4yWpGD4PJdpz9S68p62A7bqjK56FeAZVj0tEPn-T1HkXLuZjWr4OBUWfYqijbAM1Y47f1s1v80J3pq_3p4Tgh1gNwQVnHvXzv0jVRO4kpkVj8KILTt9o_UoLKReTBx9nWzLvyX-mw2Mk5ga";
const A5 = "https://lh3.googleusercontent.com/aida-public/AB6AXuD-hPF1WbJKYG3wkn-J8QfKhzJ6KSXWJT7vlmJB-g_ZO73MXO7j0F6wv1bQ0L9pDkSi0XFdSWcgWLTb5mH6MkKfK_UxKhC4X81r84IXqKqCx5W_J7I4yRPwwnC7Vj7Z5QTIUGpYfPJA";
const A6 = "https://lh3.googleusercontent.com/aida-public/AB6AXuB7QGsIGN6rDOz6P4qj-5eAk3h3jHpGFfO4Kv_CMSbbOvLvTGbRi7JJRGv7xoWQtFQAHbJVQVpsTkI17gRnB0cjvJIpV5pObLrMK5DZoHxRnCvH0ZHamDgLbf7X9aCUMbBZMLAXcQ";
const A7 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCFuBz5J8eDNEVmCe9i0MhX1tIHnlgX6Hy3sJGnbGgfPnr3PoMRQdyHV2wMYxPzBF0ySiXlVBs6vLkpQHGf2t5j_GqYvRWjX8Qol3kALJ2M4Gh5RQvv2sJ8Mz1A";
const A8 = "https://lh3.googleusercontent.com/aida-public/AB6AXuAYzHq9V0vBaGVzP5yWl4Vbr8zPbK0KJGi7u3TN4cPxM3KpXLiqsWHZqIUGvFqLFX_9k3NXZmFEIWLzC9g8R7pVPXDjT7q0WHzQxHNQs9A5F0gC8kmCHPYDnWY";
const A9 = "https://lh3.googleusercontent.com/aida-public/AB6AXuBVpkNxl4j5WkY0XvH1R0Bq4NPKtMKIjxBzpHwXkYBKPJW4f3RG3RoFvE2C6gKMSwJo8m5jj6Z4FBpPFJHOGvGHGMrCKjPRLEkmIwX4V8";
const A10 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCzD4Fl7tTRvYJiUMW5H_g_kqgX_FQjJKhFIc4B9nqN3aN5R2cxQWcABr8PFhPW0U9Kn3HPL1MUJPt6hSMmU2BIWj6P4d1V8v";
const A11 = A1;
const A12 = A2;

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "angola-turismo-2026-recorde",
    title: "Angola regista recorde de visitantes internacionais em 2026",
    category: "Turismo",
    excerpt: "O país recebeu mais de 450 mil turistas estrangeiros no primeiro semestre, representando um crescimento de 34% face ao mesmo período do ano anterior.",
    body: `Angola registou no primeiro semestre de 2026 o maior número de visitantes internacionais da sua história, com 450 mil turistas — um crescimento de 34% face a 2025.

Os principais mercados emissores foram Portugal, Brasil, China e África do Sul. O turismo de natureza liderou as preferências, com destaque para o Parque Nacional do Kissama, as Cataratas de Kalandula e o Deserto do Namibe.

Segundo o Ministério do Turismo, o aumento deve-se ao investimento em infraestruturas aeroportuárias, à abertura de novos voos diretos para Luanda e à promoção internacional desenvolvida pela Toura em parceria com entidades públicas.

"Estamos a transformar Angola num destino de referência em África", afirmou o Ministro do Turismo. "Os números mostram que a nossa estratégia está a resultar."

Para o segundo semestre, prevê-se o lançamento de novos pacotes turísticos temáticos — safaris no Kuando Kubango, rotas culturais no Zaire e experiências gastronómicas em Benguela.`,
    image: A1,
    author: { name: "Redação Toura", role: "Editorial" },
    publishedAt: "2026-06-28",
    readTime: 4,
    featured: true,
    tags: ["Turismo", "Angola", "Visitantes", "2026"],
  },
  {
    id: "2",
    slug: "carnaval-luanda-2027-preparacao",
    title: "Preparativos do Carnaval de Luanda 2027 já arrancaram com novo circuito",
    category: "Eventos",
    excerpt: "A Câmara Municipal de Luanda revelou o novo percurso do desfile e confirmou a participação de grupos de toda a CPLP na edição de 2027.",
    body: `Os preparativos para o Carnaval de Luanda 2027 arrancaram este mês, com a Câmara Municipal a apresentar um novo circuito de desfile que percorre a Marginal, a Avenida 4 de Fevereiro e o centro histórico.

A edição contará com grupos convidados de Portugal, Brasil, Cabo Verde e São Tomé e Príncipe, reforçando o carácter lusófono do evento. Espera-se a participação de 120 blocos locais e 25 grupos internacionais.

O tema desta edição será "Angola: Raízes e Futuro" — uma homenagem à diversidade cultural das 18 províncias do país, com carros alegóricos representando cada região.

A venda de espaços no circuito oficial já está disponível, com áreas VIP e gerais. As inscrições de grupos participantes decorrem até outubro de 2026.`,
    image: A2,
    author: { name: "Carlos Mendes", role: "Repórter de Eventos" },
    publishedAt: "2026-06-25",
    readTime: 3,
    featured: false,
    tags: ["Carnaval", "Luanda", "Eventos", "CPLP"],
  },
  {
    id: "3",
    slug: "mucua-patrimonio-imaterial-unesco",
    title: "Mucuá candidata-se a Património Cultural Imaterial da UNESCO",
    category: "Cultura",
    excerpt: "Angola submeteu a candidatura formal do ritual Mucuá dos povos Ovimbundu à lista representativa do Património Cultural Imaterial da Humanidade.",
    body: `Angola submeteu à UNESCO a candidatura do ritual Mucuá, uma cerimónia de iniciação feminina dos povos Ovimbundu do planalto central, à lista do Património Cultural Imaterial da Humanidade.

O Mucuá é um rito de passagem que marca a transição da adolescência para a vida adulta. A cerimónia inclui danças, cantos tradicionais, ensinamentos de valores e técnicas ancestrais de tecelagem e cerâmica.

"Esta candidatura é um reconhecimento da riqueza cultural angolana", disse o Diretor do Instituto Nacional do Património Cultural. "O Mucuá ainda é praticado em mais de 200 comunidades no Huambo e Bié."

A decisão da UNESCO deverá ser conhecida no final de 2027. Angola já conta com a candidatura da Dikanza (percussão) em análise desde 2024.`,
    image: A3,
    author: { name: "Ana Ferreira", role: "Editora de Cultura" },
    publishedAt: "2026-06-22",
    readTime: 4,
    featured: false,
    tags: ["UNESCO", "Cultura", "Ovimbundu", "Patrimônio"],
  },
  {
    id: "4",
    slug: "investimento-hoteleiro-benguela-2026",
    title: "Benguela recebe investimento de 120 milhões USD em novos hotéis e resorts",
    category: "Investimento",
    excerpt: "Dois grupos hoteleiros internacionais anunciaram projetos para a Baía de Benguela, com abertura prevista para 2028 e criação de 800 empregos diretos.",
    body: `A Baía de Benguela vai receber um investimento de 120 milhões de dólares americanos com a construção de dois complexos hoteleiros de categoria internacional, anunciaram esta semana o Grupo Pestana e um consórcio luso-angolano.

O Pestana Benguela Beach Resort, com 200 quartos e marina privada, será construído na zona da Restinga e deverá abrir em 2028. O segundo projeto, o Atlântico Benguela, prevê um resort de 150 suítes com spa, campo de golfe e centro de convenções.

"Benguela tem todas as condições para se tornar o destino de praia premium de Angola", afirmou o CEO do consórcio. "A qualidade das praias, o clima e a gastronomia local são ativos únicos."

Os projetos criarão 800 empregos diretos e deverão atrair 60 mil turistas adicionais por ano quando estiverem operacionais.`,
    image: A4,
    author: { name: "João Pestana", role: "Editor de Economia" },
    publishedAt: "2026-06-18",
    readTime: 5,
    featured: false,
    tags: ["Investimento", "Benguela", "Hotéis", "Turismo"],
  },
  {
    id: "5",
    slug: "areas-protegidas-angola-expansao",
    title: "Angola expande áreas protegidas para 20% do território nacional",
    category: "Sustentabilidade",
    excerpt: "O novo Plano Nacional de Áreas Protegidas vai ampliar a cobertura de parques e reservas, protegendo ecossistemas únicos da savana, floresta e litoral.",
    body: `Angola anunciou esta semana a aprovação do novo Plano Nacional de Áreas Protegidas, que vai elevar a cobertura de zonas protegidas dos atuais 12% para 20% do território nacional até 2030.

O plano cria três novas reservas naturais — no Kuando Kubango (wetlands do Okavango), no Zaire (floresta húmida do Maiombe) e no Namibe (extensão do deserto) — e amplia os limites de seis parques existentes.

"Esta é a maior expansão da conservação na história de Angola", disse o Ministro do Ambiente. "Vamos proteger ecossistemas únicos que sustentam a biodiversidade e o ecoturismo."

O plano inclui um investimento de 80 milhões de dólares para reforço do patrulhamento, reintrodução de espécies e desenvolvimento de comunidades locais como guardas florestais.`,
    image: A5,
    author: { name: "Sofia Nunes", role: "Editora de Sustentabilidade" },
    publishedAt: "2026-06-15",
    readTime: 4,
    featured: false,
    tags: ["Sustentabilidade", "Conservação", "Natureza", "Angola"],
  },
  {
    id: "6",
    slug: "festival-kizomba-internacional-luanda",
    title: "Festival Internacional de Kizomba regressa a Luanda em agosto",
    category: "Eventos",
    excerpt: "A 5.ª edição do festival reunirá bailarinos de 30 países na Ilha de Luanda, com masterclasses, concertos e desfile de moda angolana.",
    body: `A 5.ª edição do Festival Internacional de Kizomba de Luanda realiza-se de 14 a 18 de agosto na Ilha de Luanda, com a participação confirmada de bailarinos e músicos de 30 países.

O programa inclui masterclasses diurnas com os melhores professores mundiais de kizomba, semba e tarraxinha, concertos noturnos na Praia do Sangano e um desfile de moda angolana contemporânea no sábado.

"A kizomba nasceu em Angola e é hoje dançada em todos os continentes", disse a diretora artística do festival. "Queremos trazer o mundo de volta às raízes."

Os bilhetes para o passe completo custam entre 50 e 150 USD, com opções para dias individuais. A inscrição em masterclasses é separada e limitada a 20 participantes por turma.`,
    image: A6,
    author: { name: "Redação Toura", role: "Editorial" },
    publishedAt: "2026-06-12",
    readTime: 3,
    featured: false,
    tags: ["Kizomba", "Festival", "Luanda", "Música"],
  },
  {
    id: "7",
    slug: "pesca-artesanal-namibe-sustentavel",
    title: "Comunidades do Namibe adotam pesca sustentável com apoio internacional",
    category: "Sustentabilidade",
    excerpt: "Projeto piloto com 12 aldeias costeiras introduz técnicas de pesca seletiva e criação de zonas de exclusão marinha para recuperar os estoques.",
    body: `Doze comunidades de pescadores artesanais do litoral do Namibe aderiu a um projeto de pesca sustentável financiado pela União Europeia e coordenado pela FAO, com o objetivo de recuperar as populações de peixe na costa angolana.

O projeto introduz redes seletivas que reduzem as capturas acidentais de espécies jovens, define zonas de exclusão de pesca rotatórias e forma os pescadores em técnicas de conservação a frio para reduzir o desperdício.

"Nos últimos 10 anos os estoques reduziram-se a metade", disse o coordenador do projeto. "Com estas medidas esperamos uma recuperação de 30% em cinco anos."

A iniciativa também apoia o ecoturismo de observação de cetáceos, criando uma nova fonte de rendimento para as famílias de pescadores.`,
    image: A7,
    author: { name: "Pedro Costa", role: "Editor de Sustentabilidade" },
    publishedAt: "2026-06-08",
    readTime: 4,
    featured: false,
    tags: ["Sustentabilidade", "Pesca", "Namibe", "FAO"],
  },
  {
    id: "8",
    slug: "artesanato-chokwe-mercado-internacional",
    title: "Artesanato Chokwe conquista mercados internacionais com exportações recordes",
    category: "Cultura",
    excerpt: "As máscaras e esculturas Chokwe da Lunda Norte registaram exportações de 8 milhões USD em 2025, com procura crescente de museus e colecionadores europeus.",
    body: `O artesanato Chokwe da Lunda Norte atingiu em 2025 um recorde de 8 milhões de dólares em exportações, segundo dados do Ministério do Comércio, com destaque para a procura de museus, galerias e colecionadores privados na Europa e nos EUA.

As máscaras Mwana Pwo e Chihongo, as cadeiras reais e as esculturas de divindades ancestrais são os produtos mais procurados. A cooperativa Mwini Lunda, que agrega 450 artesãos, triplicou a produção nos últimos três anos.

"Cada peça é única e carrega séculos de tradição", disse a presidente da cooperativa. "Estamos a formar a nova geração para garantir que estas técnicas não se percam."

A Toura criou um circuito cultural dedicado ao artesanato Chokwe que permite aos visitantes acompanhar o processo de criação nas aldeias da Lunda Norte.`,
    image: A8,
    author: { name: "Ana Ferreira", role: "Editora de Cultura" },
    publishedAt: "2026-06-05",
    readTime: 4,
    featured: false,
    tags: ["Artesanato", "Chokwe", "Exportações", "Cultura"],
  },
  {
    id: "9",
    slug: "novos-voos-diretos-angola-europa",
    title: "TAAG lança novos voos diretos entre Luanda e Lisboa, Madrid e Paris",
    category: "Turismo",
    excerpt: "A companhia aérea angolana anuncia três novas rotas europeias para o segundo semestre de 2026, reduzindo os tempos de viagem e aumentando a conectividade.",
    body: `A TAAG — Linhas Aéreas de Angola anunciou o lançamento de três novas rotas diretas entre Luanda e Lisboa, Madrid e Paris, com início previsto para setembro de 2026.

Os voos para Lisboa passam a ser diários, com cinco frequências por semana para Madrid e quatro para Paris. A rota para Madrid utiliza os novos Boeing 787 Dreamliner, com capacidade para 250 passageiros.

"Esta é a maior expansão da TAAG para a Europa", afirmou o CEO da companhia. "Vamos ligar Angola aos principais hubs europeus com mais comodidade e a preços competitivos."

As tarifas especiais de lançamento para os voos diretos Luanda–Madrid e Luanda–Paris arrancam em 800 USD (ida e volta, com bagagem incluída), disponíveis em taag.com a partir de julho.`,
    image: A9,
    author: { name: "Carlos Mendes", role: "Repórter de Turismo" },
    publishedAt: "2026-06-02",
    readTime: 3,
    featured: false,
    tags: ["TAAG", "Voos", "Turismo", "Europa"],
  },
  {
    id: "10",
    slug: "rota-gastronomica-benguela-lancamento",
    title: "Benguela lança rota gastronómica oficial com 15 restaurantes certificados",
    category: "Turismo",
    excerpt: "A primeira rota gastronómica estruturada de Angola percorre o centro histórico e a orla marítima de Benguela, com foco no mufete e nos frutos do mar.",
    body: `Benguela tornou-se a primeira cidade angolana com uma rota gastronómica oficial, com 15 restaurantes certificados pelo programa de qualidade da Câmara Municipal em parceria com o Instituto Nacional de Turismo.

A rota divide-se em dois percursos: o "Caminho do Mar" percorre a orla marítima com foco em mariscos, mufete de peixe fresco e lagosta; o "Caminho da Cidade" passa pelo centro histórico com restaurantes de cozinha tradicional angolana.

Cada restaurante certificado exibe o selo "Autêntico Benguela" e cumpre critérios de qualidade dos ingredientes, uso de receitas tradicionais e serviço. Os visitantes recebem um passaporte gastronómico para registar as visitas.

A Toura integrou a rota nos seus pacotes de fim de semana em Benguela, disponíveis para reserva na plataforma.`,
    image: A10,
    author: { name: "Sofia Nunes", role: "Editora de Gastronomia" },
    publishedAt: "2026-05-28",
    readTime: 4,
    featured: false,
    tags: ["Gastronomia", "Benguela", "Rota", "Turismo"],
  },
  {
    id: "11",
    slug: "parque-nacional-kissama-expansao-2026",
    title: "Parque Nacional do Kissama expande para sul com nova zona de safari pedestre",
    category: "Sustentabilidade",
    excerpt: "A ampliação do Kissama cria uma zona de safari a pé de 40 km² onde os visitantes podem observar elefantes, búfalos e hipopótamos com guias certificados.",
    body: `O Parque Nacional do Kissama expandiu a sua área sul, criando uma nova zona de 40 km² exclusiva para safari pedestre guiado, onde os visitantes podem observar a vida selvagem a distâncias nunca antes permitidas nos percursos de jipe.

A zona inclui três acampamentos de luxo em tendas que operam em rotação sazonal, garantindo que cada grupo tem exclusividade numa área de 15 km². Os guias são recrutas locais das comunidades Mbundu formados por especialistas sul-africanos em técnicas de tracking.

"O safari pedestre é a forma mais imersiva de experienciar a savana angolana", disse o Diretor do Parque. "Permite ouvir, cheirar e sentir o ecossistema de uma forma que o jipe não permite."

As reservas para a época alta (junho–outubro) esgotaram-se em menos de 48 horas após o lançamento.`,
    image: A11,
    author: { name: "Pedro Costa", role: "Editor de Natureza" },
    publishedAt: "2026-05-22",
    readTime: 5,
    featured: false,
    tags: ["Kissama", "Safari", "Natureza", "Ecoturismo"],
  },
  {
    id: "12",
    slug: "musica-angolana-streaming-recordes",
    title: "Músicos angolanos batem recordes de streaming com 2 mil milhões de reproduções em 2025",
    category: "Cultura",
    excerpt: "O afrobeat angolano, o kuduro e o semba modernizado conquistaram plataformas globais como Spotify e Apple Music, projetando a música de Angola no mundo.",
    body: `Os artistas angolanos acumularam 2 mil milhões de reproduções em plataformas de streaming em 2025, um crescimento de 180% face a 2024, segundo um relatório da IFPI divulgado esta semana.

O afrobeat angolano liderou o crescimento, com artistas como Puto Português, Yola Semedo e Kalaf Epalanga a conquistar audiências em Portugal, Brasil, Reino Unido e EUA. O kuduro, ressurgido com produções mais modernas, voltou ao top das paradas em vários países lusófonos.

"Angola está a exportar a sua cultura musical para o mundo", disse o presidente da Associação de Músicos Angolanos. "Isto cria orgulho nacional e atrai turistas curiosos em conhecer as raízes destas músicas."

O sucesso musical tem impulsionado o turismo cultural: 15% dos visitantes estrangeiros citam a vontade de conhecer a cena musical de Luanda como motivação principal da visita.`,
    image: A12,
    author: { name: "Ana Ferreira", role: "Editora de Cultura" },
    publishedAt: "2026-05-18",
    readTime: 4,
    featured: false,
    tags: ["Música", "Streaming", "Kuduro", "Cultura"],
  },
];

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: NewsCategory): NewsArticle[] {
  return newsArticles.filter((a) => a.category === category);
}

export function getFeaturedArticle(): NewsArticle {
  return newsArticles.find((a) => a.featured) ?? newsArticles[0];
}

export function getRecentArticles(limit = 5, excludeId?: string): NewsArticle[] {
  return newsArticles
    .filter((a) => a.id !== excludeId)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit);
}

export function getRelatedArticles(article: NewsArticle, limit = 3): NewsArticle[] {
  return newsArticles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit);
}

export const NEWS_CATEGORY_COLORS: Record<NewsCategory, string> = {
  Turismo: "bg-teal-500/20 text-teal-700",
  Cultura: "bg-amber-500/20 text-amber-700",
  Eventos: "bg-purple-500/20 text-purple-700",
  Investimento: "bg-blue-500/20 text-blue-700",
  Sustentabilidade: "bg-green-500/20 text-green-700",
};

export const NEWS_CATEGORY_ICONS: Record<NewsCategory, string> = {
  Turismo: "travel_explore",
  Cultura: "palette",
  Eventos: "event",
  Investimento: "trending_up",
  Sustentabilidade: "eco",
};
