import type { CulturalArticle, CulturaCategory } from "@/types";

const L = "https://lh3.googleusercontent.com/aida-public/AB6AXuAfvKAQE6xlKq__y9GCqTH6lelj14rbRO7agyGmAfHgJ5STdxktH8vGu2cYgnMYd_eNNODKGQLioRR7sR6_6dj-vpCjWvmkXEN1aWGOwZI6kRkFzXbYN1_9u2GrPea_-NX7j9rJMLAd3rBL077FzXlJ5kXZPlA1_vuGY3Q7fPxmkfNsOgzIynGlTSYMVTKyc-0cAo4CLdSpYTHjIvE6L0ku0ZWoHwGyM41-IXyPuy4X-FyZl8DAwbSiwyKYEfFKLUiem6R5zI974u6b";
const C = "https://lh3.googleusercontent.com/aida-public/AB6AXuCj6ljP_P1Em8sDC6O-4-t60actSiab2sQ4nHjgrP8WplSbSS4Dkho7RDs8YGdNViR5cUAywTKzdrCe6bsty9wf9Y132aeDAqperWYA_DM8OmZ0r6ejl1pH87l2OQEbKBQ59O_4HgO9CD7ijCj4E3xHvn_PJsFvt_l61FFAHX9fVNWm5cysGm1JZROHX06xrpNEJdkKucxPdOJe70qAaJSD8vcl5mRc4KJbm6QhtBtRYFyaUfA_2BICew_5BDp0zObUdhgJajLumaoZ";
const H = "https://lh3.googleusercontent.com/aida-public/AB6AXuALvscUa-xXKkkLq3kceqvHAOTbZ_MAd00FAxDGdgkRzcYz4NprBi6pWKhQx3mCbS6w-eJ8YE4N5zbF6paagzKEOLgWjJT8YOceSShk70c4GoSH1CCsoAeoYqynSoEYDETiQ3U0s3KxMG8vjr7JQaIrpqP8LWKym5Qok0LyU5xY0RJS9E0KSmcnH9PUYXBFWnfeeh1NBAlN3Zc1F9v9VCtdg-5hWNBZlaP8GLb9lqrVV2LwIC1TfhxmtELFluRFeRFyaoO7KYGPaikF";
const N = "https://lh3.googleusercontent.com/aida-public/AB6AXuAyEU5BhywqtacvyDrn--XuSeTd4wj5ZhGCvXiFDvanh0-ZmoCKRRBpHaGyDRCz0L9la7_OvaYR_-DMmeCgj7Ve4jkj3OTmdyfTPF_HnD6UW6gzTuICKokwh7f5jPW5J9ZgRiHSiDxKriIXedKKfZWMgpkhAoxfW5lZtHA8hgyW6W8K8iIS6rRuZG2IPAhcS5-Tg8ML6hiGHvnXGPxMlMI7UGR1-swQL4h4a327rUuWyoPnremdmEHHslKj5Ea7N3Z0l-WEUI2iX";
const M = "https://lh3.googleusercontent.com/aida-public/AB6AXuAmC8tR-ZAo-zEmHl8-qzlcrdMGnseQuV6jcy_HRDNS5QTuxwwgE_lYaStxT74Rus67H18uXoQ1BshoDNisDQUY1uua-78vGI7HDyOb8_HgpWZuZuhj3FibSbeL3LSDHjpgS5XrwARjiT38BKCj75aWPNkzbfxGQfuSHRXMtyt11eh5FMVxNmbGsfw7fqGktBPwH2v6lv9-YzWaYJHryVrTDC7KEQHBFFvs4-nxR2bC5Kglj0fG31C8Q7KMbIN6mPd-IDzMcRNC38Fv";
const Z = "https://lh3.googleusercontent.com/aida-public/AB6AXuD4eE_8DAIC7ItzrF2bj0T17TSo-gTzLO95Qsik-Te-1iMCZqlUdE73l_2VGYc2eDgO0Oll9JEpLON5wp8e08jW966JiPrTVzGJdCGqiAJwh1QTqmu1y28RDna8_tnYmpMqSmU1J795guT3y5kKC4v6DntLBT5wHBK3DJnOiklE5myLRD2nhL6P-IAcnW7Pqil6Sdn9BDs1MXrmj3b7RkTQBfWqwnztw4dpBysN0HsflfBx0LitJT-ux97cPgpXrmx5hCCJU3E15dxE";

export interface CulturaMetaItem {
  slug: string;
  category: CulturaCategory;
  label: string;
  icon: string;
  description: string;
  color: string;
}

export const CULTURA_META: CulturaMetaItem[] = [
  { slug: "musica", category: "Música", label: "Música", icon: "music_note", description: "Do Semba ao Kuduro, a música angolana conquistou o mundo.", color: "bg-primary/15 text-primary" },
  { slug: "danca", category: "Dança", label: "Dança", icon: "self_improvement", description: "Ritmos e movimentos que narram a história de um povo.", color: "bg-secondary/15 text-secondary" },
  { slug: "artesanato", category: "Artesanato", label: "Artesanato", icon: "palette", description: "Máscaras Chokwe, cerâmica e têxteis da tradição angolana.", color: "bg-[#7c3aed]/15 text-[#7c3aed]" },
  { slug: "linguas", category: "Línguas", label: "Línguas", icon: "translate", description: "Mais de 40 línguas nacionais além do português.", color: "bg-[#d97706]/15 text-[#d97706]" },
  { slug: "tradicoes", category: "Tradições", label: "Tradições", icon: "emoji_people", description: "Ritos, cerimónias e festividades que atravessam gerações.", color: "bg-error/15 text-error" },
  { slug: "arte", category: "Arte", label: "Arte", icon: "brush", description: "Pintores, escultores e artistas contemporâneos de Angola.", color: "bg-[#16a34a]/15 text-[#16a34a]" },
];

export const culturalArticles: CulturalArticle[] = [
  {
    id: "1", slug: "semba", catSlug: "musica",
    title: "O Semba: A Alma de Angola",
    category: "Música", image: L,
    excerpt: "O Semba é a expressão musical mais antiga e autêntica de Angola, raiz de toda a música afro-latina.",
    body: "O Semba surgiu nos musseques de Luanda no século XIX, misturando ritmos Mbundu com influências brasileiras e europeias. Com guitarra acústica, acordeão e percussão, o Semba narra as alegrias e tristezas do quotidiano angolano. Artistas como Bonga, Paulo Flores e Waldemar Bastos levaram este género ao mundo, tornando-o património imaterial da identidade angolana.",
    region: "Luanda",
  },
  {
    id: "2", slug: "kizomba", catSlug: "musica",
    title: "Kizomba: de Luanda para o Mundo",
    category: "Música", image: C,
    excerpt: "Nascida nos anos 80 em Luanda, a Kizomba conquistou Europa e América com o seu ritmo suave e sensual.",
    body: "A Kizomba combina o Semba angolano com o Zouk cabo-verdiano, resultando numa dança a dois de grande intimidade e fluidez. O seu crescimento global foi impulsionado por festivais internacionais e pela diáspora angolana. Hoje dança-se Kizomba em Paris, Lisboa, Nova Iorque e Tóquio — cada par uma embaixada viva da cultura angolana.",
    region: "Luanda",
  },
  {
    id: "3", slug: "kazukuta", catSlug: "danca",
    title: "Kazukuta: Dança das Máscaras do Norte",
    category: "Dança", image: L,
    excerpt: "A Kazukuta é uma dança ritual ligada às cerimónias de iniciação dos povos do Norte de Angola.",
    body: "Praticada sobretudo nas províncias de Uíge e Bengo, a Kazukuta acompanha os ritos de passagem com máscaras de madeira esculpida, penas e palha. O ritmo é marcado por tambores de membrana e chocalhos de semente. A dança representa a comunicação entre o mundo dos vivos e o dos antepassados, sendo considerada sagrada e transmitida oralmente de geração em geração.",
    region: "Norte", ethnicity: "Bacongo",
  },
  {
    id: "4", slug: "rebita", catSlug: "danca",
    title: "Rebita: Elegância e Tradição Angolana",
    category: "Dança", image: C,
    excerpt: "A Rebita é uma dança de salão angolana do século XIX, marcada pela elegância dos seus passos.",
    body: "Desenvolvida em Luanda pela burguesia crioula do século XIX, a Rebita mistura danças europeias com ritmos africanos. Os dançarinos vestem-se com trajes de gala e executam movimentos precisos ao som de viola, clarinete e tambor. Considerada Património Cultural Imaterial de Luanda, a Rebita foi declarada pela UNESCO como referência da cultura afro-lusófona.",
    region: "Luanda",
  },
  {
    id: "5", slug: "arte-chokwe", catSlug: "artesanato",
    title: "Arte Chokwe: Máscaras Sagradas do Leste",
    category: "Artesanato", image: Z,
    excerpt: "As máscaras e esculturas Chokwe estão entre as mais reconhecidas expressões de arte africana no mundo.",
    body: "Os Chokwe, povo do Leste de Angola, produzem máscaras rituais — a mais célebre sendo a Mwana Pwo, que representa o espírito feminino ancestral. Esculpidas em madeira e decoradas com contas, cabelo e fibras vegetais, estas peças são usadas em danças cerimoniais. Museus como o do Dundo preservam centenas destas obras, reconhecidas como arte clássica africana.",
    region: "Leste", ethnicity: "Chokwe",
  },
  {
    id: "6", slug: "ceramica-quissama", catSlug: "artesanato",
    title: "Cerâmica de Quiçama: Barro e Memória",
    category: "Artesanato", image: H,
    excerpt: "As oleiras de Quiçama produzem cerâmica utilitária e decorativa seguindo técnicas milenares.",
    body: "Na região de Quiçama, no Bengo, as mulheres Mbundu produzem cerâmica usando apenas as mãos e barro local. Os potes, bilhas e tigelas são cozidos em fogueiras abertas e decorados com motivos geométricos típicos. Esta cerâmica serve tanto o quotidiano como as cerimónias religiosas, sendo vendida nos mercados locais e exportada como arte de coleção.",
    region: "Litoral", ethnicity: "Mbundu",
  },
  {
    id: "7", slug: "kimbundu", catSlug: "linguas",
    title: "Kimbundu: Língua do Povo Mbundu",
    category: "Línguas", image: M,
    excerpt: "O Kimbundu é a língua do povo Mbundu e uma das mais influentes na formação do Português angolano.",
    body: "Falado por cerca de 3 milhões de pessoas nas províncias de Luanda, Malanje, Kwanza Norte e Kwanza Sul, o Kimbundu influenciou profundamente o Português falado em Angola — palavras como 'caçula', 'cacimba' e 'quissama' têm raiz Kimbundu. A língua tem uma rica tradição oral de contos, provérbios e canções que preservam a cosmovisão Mbundu.",
    region: "Norte/Centro",
  },
  {
    id: "8", slug: "kikongo", catSlug: "linguas",
    title: "Kikongo: Voz do Reino do Kongo",
    category: "Línguas", image: Z,
    excerpt: "O Kikongo foi a língua oficial do poderoso Reino do Kongo e ainda hoje é falado no Norte de Angola.",
    body: "Com mais de 5 milhões de falantes em Angola, República do Congo e RD Congo, o Kikongo foi a língua diplomática do Reino do Kongo desde o século XIII. A sua literatura oral inclui a 'lusanga' (conversa de sábios) e provérbios filosóficos complexos. O Kikongo foi também uma das primeiras línguas africanas a ser escrita, graças às missões cristãs do século XVI.",
    region: "Norte", ethnicity: "Bakongo",
  },
  {
    id: "9", slug: "efundula", catSlug: "tradicoes",
    title: "Efundula: Rito de Iniciação Ovambo",
    category: "Tradições", image: N,
    excerpt: "O Efundula é a cerimónia de iniciação feminina do povo Ovambo, no Sul de Angola.",
    body: "Realizado no Cunene, o Efundula marca a passagem das jovens Ovambo para a vida adulta. A cerimónia dura vários dias, com danças, cânticos e ensinamentos transmitidos pelas mulheres mais velhas da comunidade. As iniciadas recebem o nome adulto e aprendem as responsabilidades de mãe, esposa e guardiã da tradição. É um dos ritos de passagem femininos mais completos de África.",
    region: "Sul", ethnicity: "Ovambo",
  },
  {
    id: "10", slug: "mukanda", catSlug: "tradicoes",
    title: "Mukanda: A Escola da Vida Chokwe",
    category: "Tradições", image: Z,
    excerpt: "O Mukanda é a iniciação masculina dos povos Lunda-Chokwe, uma escola de vida na floresta.",
    body: "Praticado no Leste de Angola, o Mukanda isola os jovens rapazes da comunidade durante semanas numa 'escola' na floresta, onde aprendem caça, construção, responsabilidade e os segredos rituais do grupo. A cerimónia inclui a figura do Mwandumba — o espírito guardião que guia a iniciação. Os iniciados regressam à aldeia como homens, reconhecidos por toda a comunidade.",
    region: "Leste", ethnicity: "Chokwe/Lunda",
  },
  {
    id: "11", slug: "antonio-ole", catSlug: "arte",
    title: "António Ole e a Arte Contemporânea Angolana",
    category: "Arte", image: L,
    excerpt: "António Ole é o artista plástico angolano mais internacionalmente reconhecido.",
    body: "Nascido em Luanda em 1951, António Ole utiliza materiais encontrados nos musseques — jornais, tecidos, madeiras descartadas — para criar instalações que comentam a memória colonial e a identidade pós-independência. As suas obras estão em colecções dos museus de Arte Moderna de Nova Iorque, Lisboa e Joanesburgo. Ole abriu caminho para toda uma geração de artistas angolanos.",
    region: "Luanda",
  },
  {
    id: "12", slug: "pintura-naif", catSlug: "arte",
    title: "Pintura Naïf dos Musseques de Luanda",
    category: "Arte", image: L,
    excerpt: "A pintura naïf dos musseques retrata a vida quotidiana de Luanda com vivacidade e humor.",
    body: "Sem formação académica, os pintores naïf dos musseques de Luanda criam telas vibrantes que documentam mercados, festas, ruas e personagens do bairro. Figuras como Neves e Sousa e Francisco Van-Dúnem tornaram este estilo reconhecido internacionalmente. As suas obras são vendidas nos mercados de artesanato da cidade e estão em colecções particulares por todo o mundo.",
    region: "Luanda",
  },
];

export function getArticlesByCatSlug(catSlug: string): CulturalArticle[] {
  return culturalArticles.filter((a) => a.catSlug === catSlug);
}

export function getArticleBySlug(catSlug: string, slug: string): CulturalArticle | undefined {
  return culturalArticles.find((a) => a.catSlug === catSlug && a.slug === slug);
}

export function getCulturaMetaByCatSlug(catSlug: string): CulturaMetaItem | undefined {
  return CULTURA_META.find((m) => m.slug === catSlug);
}
