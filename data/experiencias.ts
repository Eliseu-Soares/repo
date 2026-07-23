import type { Experience } from "@/types";

const C = "https://lh3.googleusercontent.com/aida-public/AB6AXuCj6ljP_P1Em8sDC6O-4-t60actSiab2sQ4nHjgrP8WplSbSS4Dkho7RDs8YGdNViR5cUAywTKzdrCe6bsty9wf9Y132aeDAqperWYA_DM8OmZ0r6ejl1pH87l2OQEbKBQ59O_4HgO9CD7ijCj4E3xHvn_PJsFvt_l61FFAHX9fVNWm5cysGm1JZROHX06xrpNEJdkKucxPdOJe70qAaJSD8vcl5mRc4KJbm6QhtBtRYFyaUfA_2BICew_5BDp0zObUdhgJajLumaoZ";
const H = "https://lh3.googleusercontent.com/aida-public/AB6AXuALvscUa-xXKkkLq3kceqvHAOTbZ_MAd00FAxDGdgkRzcYz4NprBi6pWKhQx3mCbS6w-eJ8YE4N5zbF6paagzKEOLgWjJT8YOceSShk70c4GoSH1CCsoAeoYqynSoEYDETiQ3U0s3KxMG8vjr7JQaIrpqP8LWKym5Qok0LyU5xY0RJS9E0KSmcnH9PUYXBFWnfeeh1NBAlN3Zc1F9v9VCtdg-5hWNBZlaP8GLb9lqrVV2LwIC1TfhxmtELFluRFeRFyaoO7KYGPaikF";
const N = "https://lh3.googleusercontent.com/aida-public/AB6AXuAyEU5BhywqtacvyDrn--XuSeTd4wj5ZhGCvXiFDvanh0-ZmoCKRRBpHaGyDRCz0L9la7_OvaYR_-DMmeCgj7Ve4jkj3OTmdyfTPF_HnD6UW6gzTuICKokwh7f5jPW5J9ZgRiHSiDxKriIXedKKfZWMgpkhAoxfW5lZtHA8hgyW6W8K8iIS6rRuZG2IPAhcS5-Tg8ML6hiGHvnXGPxMlMI7UGR1-swQL4h4a327rUuWyoPnremdmEHHslKj5Ea7N3Z0l-WEUI2iX";
const M = "https://lh3.googleusercontent.com/aida-public/AB6AXuAmC8tR-ZAo-zEmHl8-qzlcrdMGnseQuV6jcy_HRDNS5QTuxwwgE_lYaStxT74Rus67H18uXoQ1BshoDNisDQUY1uua-78vGI7HDyOb8_HgpWZuZuhj3FibSbeL3LSDHjpgS5XrwARjiT38BKCj75aWPNkzbfxGQfuSHRXMtyt11eh5FMVxNmbGsfw7fqGktBPwH2v6lv9-YzWaYJHryVrTDC7KEQHBFFvs4-nxR2bC5Kglj0fG31C8Q7KMbIN6mPd-IDzMcRNC38Fv";
const L = "https://lh3.googleusercontent.com/aida-public/AB6AXuAfvKAQE6xlKq__y9GCqTH6lelj14rbRO7agyGmAfHgJ5STdxktH8vGu2cYgnMYd_eNNODKGQLioRR7sR6_6dj-vpCjWvmkXEN1aWGOwZI6kRkFzXbYN1_9u2GrPea_-NX7j9rJMLAd3rBL077FzXlJ5kXZPlA1_vuGY3Q7fPxmkfNsOgzIynGlTSYMVTKyc-0cAo4CLdSpYTHjIvE6L0ku0ZWoHwGyM41-IXyPuy4X-FyZl8DAwbSiwyKYEfFKLUiem6R5zI974u6b";
const Z = "https://lh3.googleusercontent.com/aida-public/AB6AXuD4eE_8DAIC7ItzrF2bj0T17TSo-gTzLO95Qsik-Te-1iMCZqlUdE73l_2VGYc2eDgO0Oll9JEpLON5wp8e08jW966JiPrTVzGJdCGqiAJwh1QTqmu1y28RDna8_tnYmpMqSmU1J795guT3y5kKC4v6DntLBT5wHBK3DJnOiklE5myLRD2nhL6P-IAcnW7Pqil6Sdn9BDs1MXrmj3b7RkTQBfWqwnztw4dpBysN0HsflfBx0LitJT-ux97cPgpXrmx5hCCJU3E15dxE";
const S = "https://lh3.googleusercontent.com/aida-public/AB6AXuCDFVzkjAF5MjyB-UKCmkh9hM8xyUV9iX7EOZM2-apfjPVsTGxxV7jQ4MptF779tUuaJ3V4Y24cEjL0hfwRJKDc7pcXHoY9yc3ToMOYKXj9HWzKR2iIXBktqf1llkVz5XyA8ef_CiNMgWs-m_bXG1Fv_LyhMg06ycb85ZSvjSDa0-E-VUOBrq0D_2Gm50H9IXTWeK8YB7PdA17IGdvAWLd7whoNloRoYQc9pI30mgZJHu76OLCWKHL4UAMchgbAIGGPqjIcvGo9_Rex";

export const experiences: Experience[] = [
  {
    id: "1", slug: "safari-kissama",
    title: "Safari no Parque Nacional do Kissama",
    category: "Safari", province: "bengo", provinceName: "Bengo",
    duration: "1 dia", difficulty: "Fácil", operator: "Toura Safaris",
    image: H, price: "desde 15.000 AOA", featured: true,
    description: "Aviste elefantes, girafas e zebras no maior parque nacional de Angola, a apenas 1 hora de Luanda.",
    longDescription: "O Parque Nacional do Kissama é um dos mais antigos de Angola e alberga uma fauna notável — elefantes africanos, hipopótamos, girafas trazidas do Zimbabwe, eland e mais de 190 espécies de aves. O safari inclui jeep tour ao amanhecer, quando os animais são mais activos, com guia naturalista certificado. Termina com piquenique junto ao rio Kwanza.",
    includes: ["Transfer de Luanda", "Guia naturalista", "Piquenique no parque", "Seguro de viagem"],
    gallery: [H, N, M],
  },
  {
    id: "2", slug: "mergulho-namibe",
    title: "Mergulho nas Ilhas do Namibe",
    category: "Mergulho", province: "namibe", provinceName: "Namibe",
    duration: "3 horas", difficulty: "Moderado", operator: "Namibe Dive",
    image: N, price: "desde 8.000 AOA", featured: true,
    description: "Mergulhe nas águas cristalinas do Atlântico Sul e descubra a vida marinha ao largo do Namibe.",
    longDescription: "As águas frias e ricas do Atlântico Sul ao largo do Namibe oferecem visibilidade excepcional e uma biodiversidade marinha surpreendente — focas-do-cabo, arraias, tartarugas marinhas e inúmeras espécies de peixes tropicais. A experiência inclui mergulho supervisionado adequado a todos os níveis, do iniciante ao avançado.",
    includes: ["Equipamento completo de mergulho", "Instrução e briefing de segurança", "2 mergulhos guiados", "Lanche a bordo"],
  },
  {
    id: "3", slug: "trekking-tundavala",
    title: "Trekking à Fenda da Tundavala",
    category: "Caminhadas", province: "huila", provinceName: "Huíla",
    duration: "4 horas", difficulty: "Moderado", operator: "Serra Trails",
    image: H, price: "desde 5.000 AOA",
    description: "Caminhada até ao bordo da mais impressionante escarpa de Angola, com vistas de 2.000m de altitude.",
    longDescription: "A Fenda da Tundavala é uma fissura na Serra da Leba que se abre para um precipício de quase 1.000 metros. O trekking percorre trilhos de planalto com flora endémica, passando por aldeias Nyaneka-Humbe antes de atingir o miradouro onde o horizonte se perde em 200km de planície. É uma das caminhadas mais espectaculares de África.",
    includes: ["Guia de montanha certificado", "Transporte até ao ponto de partida", "Mapa do trilho", "Água e lanche energético"],
  },
  {
    id: "4", slug: "kayak-kwanza",
    title: "Kayak no Rio Kwanza",
    category: "Aventura", province: "kwanza-norte", provinceName: "Kwanza Norte",
    duration: "3 horas", difficulty: "Fácil", operator: "Rio Adventures",
    image: S, price: "desde 6.000 AOA",
    description: "Desça o maior rio de Angola em kayak, entre margens cobertas de floresta tropical.",
    longDescription: "O Rio Kwanza nasce no planalto do Bié e percorre 1.000km até ao Atlântico, atravessando paisagens de beleza extraordinária. A descida em kayak ou canoa canadiana permite observar crocodilos à distância segura, aves aquáticas raras e aldeias piscatórias nas margens. O percurso navega por rápidos suaves e troços calmos alternados.",
    includes: ["Kayak e equipamento de segurança", "Instrutor", "Transfer de e para Luanda", "Almoço típico no rio"],
  },
  {
    id: "5", slug: "birdwatching-okavango",
    title: "Birdwatching no Cuando Cubango",
    category: "Ecoturismo", province: "cuando-cubango", provinceName: "Cuando Cubango",
    duration: "2 dias", difficulty: "Fácil", operator: "Wild Angola",
    image: M, price: "desde 35.000 AOA",
    description: "Observe mais de 150 espécies de aves nos pântanos e florestas do Okavango angolano.",
    longDescription: "O Cuando Cubango é um dos últimos grandes santuários de biodiversidade de África. Nas suas planícies de inundação e florestas de miombo nidificam espécies raras como o pelicano-rosa, a garça-goliath e o jacana-africano. O tour de 2 dias inclui noite em campo de tenda, sessões de birdwatching ao amanhecer e ao entardecer, e canoa nos canais.",
    includes: ["1 noite em campo de campo de tenda", "Todas as refeições", "Guia ornitólogo", "Binóculos e guia de campo"],
  },
  {
    id: "6", slug: "escalada-pedras-negras",
    title: "Escalada nas Pedras Negras de Pungo Andongo",
    category: "Aventura", province: "malanje", provinceName: "Malanje",
    duration: "1 dia", difficulty: "Difícil", operator: "Angola Climb",
    image: M, price: "desde 12.000 AOA",
    description: "Escale as misteriosas formações basálticas que surgem abruptamente da savana do Malanje.",
    longDescription: "As Pedras Negras de Pungo Andongo são formações vulcânicas com mais de 3.000 anos que atingem 300 metros de altura. Lendárias na história angolana — associadas à rainha Njinga Mbandi — oferecem vias de escalada de todos os níveis de dificuldade. No topo, a vista sobre a savana do Malanje é simplesmente irrepetível.",
    includes: ["Equipamento de escalada", "2 instrutores certificados", "Transfer do Malanje", "Almoço na base"],
  },
  {
    id: "7", slug: "visita-mbanza-kongo",
    title: "Visita às Ruínas de M'Banza Kongo",
    category: "Cultural", province: "zaire", provinceName: "Zaire",
    duration: "3 horas", difficulty: "Fácil", operator: "Kongo Heritage",
    image: Z, price: "desde 3.000 AOA", featured: true,
    description: "Percorra a antiga capital do poderoso Reino do Kongo, Património Mundial da UNESCO desde 2017.",
    longDescription: "M'Banza Kongo foi a capital de um dos maiores impérios da África pré-colonial, com mais de 100.000 habitantes no século XVI. A visita guiada inclui as ruínas da Catedral de São Salvador (a mais antiga da África subsaariana), o Palácio dos Reis do Kongo e o museu local com artefactos históricos únicos. Um guia especializado contextualiza 700 anos de história.",
    includes: ["Guia historiador certificado", "Bilhetes de entrada", "Visita ao museu local", "Material de leitura"],
  },
  {
    id: "8", slug: "quadriciclo-namibe",
    title: "Quadriciclo no Deserto do Namibe",
    category: "Aventura", province: "namibe", provinceName: "Namibe",
    duration: "2 horas", difficulty: "Moderado", operator: "Desert Rush",
    image: N, price: "desde 10.000 AOA",
    description: "Percorra as dunas vermelhas do deserto mais antigo do mundo em quadriciclo todo-o-terreno.",
    longDescription: "O Deserto do Namibe é o deserto costeiro mais antigo do mundo, com mais de 55 milhões de anos. Em quadriciclo ATV, percorrem-se dunas de areia vermelha, leitos de rios secos e campos de pedras coloridas num ambiente marciano de beleza surreal. A experiência inclui paragem para observação da Welwitschia mirabilis — planta com mais de 1.000 anos.",
    includes: ["Quadriciclo ATV e equipamento de segurança", "Instrutor de off-road", "Óculos e protecção", "Água e lanche"],
  },
  {
    id: "9", slug: "kizomba-workshop",
    title: "Workshop de Kizomba em Luanda",
    category: "Cultural", province: "luanda", provinceName: "Luanda",
    duration: "2 horas", difficulty: "Fácil", operator: "Luanda Dance Academy",
    image: L, price: "desde 4.000 AOA",
    description: "Aprenda os passos básicos da Kizomba com os melhores instrutores de Luanda.",
    longDescription: "A Kizomba nasceu em Luanda nos anos 80 e conquistou o mundo com o seu ritmo sensual e a dança a dois de grande intimidade. O workshop em grupo pequeno (máximo 8 pares) ensina os fundamentos do movimento, a postura característica e os primeiros passos do vocabulário desta dança única. Termina com uma sessão de dança livre com música ao vivo.",
    includes: ["2 horas de aula com instrutor profissional", "Água e refrigerantes", "Certificado de participação", "Playlist curada para continuar a praticar"],
  },
  {
    id: "10", slug: "whale-watching",
    title: "Whale Watching em Benguela",
    category: "Ecoturismo", province: "benguela", provinceName: "Benguela",
    duration: "3 horas", difficulty: "Fácil", operator: "Benguela Ocean Tours",
    image: C, price: "desde 9.000 AOA",
    description: "Observe baleias jubarte e golfinhos nas águas do Atlântico Sul ao largo de Benguela (Jul-Out).",
    longDescription: "A corrente fria de Benguela atrai baleias jubarte em migração entre Junho e Outubro, oferecendo alguns dos melhores avistamentos de baleias de África. O barco pneumático semi-rígido aproxima-se respeitando as distâncias de segurança, permitindo observar os saltos e as caudas. Os golfinhos-comuns e golfinhos-de-peito-branco são companhia constante durante todo o percurso.",
    includes: ["Saída em barco com máx. 8 pessoas", "Guia de biologia marinha", "Snacks e bebidas a bordo", "Colete salva-vidas e equipamento de segurança"],
  },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}

export function getFeaturedExperiences(): Experience[] {
  return experiences.filter((e) => e.featured);
}
