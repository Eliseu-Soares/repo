import type { Destination } from "@/types";

const IMG = {
  kalandula:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAmC8tR-ZAo-zEmHl8-qzlcrdMGnseQuV6jcy_HRDNS5QTuxwwgE_lYaStxT74Rus67H18uXoQ1BshoDNisDQUY1uua-78vGI7HDyOb8_HgpWZuZuhj3FibSbeL3LSDHjpgS5XrwARjiT38BKCj75aWPNkzbfxGQfuSHRXMtyt11eh5FMVxNmbGsfw7fqGktBPwH2v6lv9-YzWaYJHryVrTDC7KEQHBFFvs4-nxR2bC5Kglj0fG31C8Q7KMbIN6mPd-IDzMcRNC38Fv",
  marginalLuanda:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAfvKAQE6xlKq__y9GCqTH6lelj14rbRO7agyGmAfHgJ5STdxktH8vGu2cYgnMYd_eNNODKGQLioRR7sR6_6dj-vpCjWvmkXEN1aWGOwZI6kRkFzXbYN1_9u2GrPea_-NX7j9rJMLAd3rBL077FzXlJ5kXZPlA1_vuGY3Q7fPxmkfNsOgzIynGlTSYMVTKyc-0cAo4CLdSpYTHjIvE6L0ku0ZWoHwGyM41-IXyPuy4X-FyZl8DAwbSiwyKYEfFKLUiem6R5zI974u6b",
  tundavala:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuALvscUa-xXKkkLq3kceqvHAOTbZ_MAd00FAxDGdgkRzcYz4NprBi6pWKhQx3mCbS6w-eJ8YE4N5zbF6paagzKEOLgWjJT8YOceSShk70c4GoSH1CCsoAeoYqynSoEYDETiQ3U0s3KxMG8vjr7JQaIrpqP8LWKym5Qok0LyU5xY0RJS9E0KSmcnH9PUYXBFWnfeeh1NBAlN3Zc1F9v9VCtdg-5hWNBZlaP8GLb9lqrVV2LwIC1TfhxmtELFluRFeRFyaoO7KYGPaikF",
  namibe:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAyEU5BhywqtacvyDrn--XuSeTd4wj5ZhGCvXiFDvanh0-ZmoCKRRBpHaGyDRCz0L9la7_OvaYR_-DMmeCgj7Ve4jkj3OTmdyfTPF_HnD6UW6gzTuICKokwh7f5jPW5J9ZgRiHSiDxKriIXedKKfZWMgpkhAoxfW5lZtHA8hgyW6W8K8iIS6rRuZG2IPAhcS5-Tg8ML6hiGHvnXGPxMlMI7UGR1-swQL4h4a327rUuWyoPnremdmEHHslKj5Ea7N3Z0l-WEUI2iX",
  benguela:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCj6ljP_P1Em8sDC6O-4-t60actSiab2sQ4nHjgrP8WplSbSS4Dkho7RDs8YGdNViR5cUAywTKzdrCe6bsty9wf9Y132aeDAqperWYA_DM8OmZ0r6ejl1pH87l2OQEbKBQ59O_4HgO9CD7ijCj4E3xHvn_PJsFvt_l61FFAHX9fVNWm5cysGm1JZROHX06xrpNEJdkKucxPdOJe70qAaJSD8vcl5mRc4KJbm6QhtBtRYFyaUfA_2BICew_5BDp0zObUdhgJajLumaoZ",
  ritmos:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCDFVzkjAF5MjyB-UKCmkh9hM8xyUV9iX7EOZM2-apfjPVsTGxxV7jQ4MptF779tUuaJ3V4Y24cEjL0hfwRJKDc7pcXHoY9yc3ToMOYKXj9HWzKR2iIXBktqf1llkVz5XyA8ef_CiNMgWs-m_bXG1Fv_LyhMg06ycb85ZSvjSDa0-E-VUOBrq0D_2Gm50H9IXTWeK8YB7PdA17IGdvAWLd7whoNloRoYQc9pI30mgZJHu76OLCWKHL4UAMchgbAIGGPqjIcvGo9_Rex",
  artesanato:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD4eE_8DAIC7ItzrF2bj0T17TSo-gTzLO95Qsik-Te-1iMCZqlUdE73l_2VGYc2eDgO0Oll9JEpLON5wp8e08jW966JiPrTVzGJdCGqiAJwh1QTqmu1y28RDna8_tnYmpMqSmU1J795guT3y5kKC4v6DntLBT5wHBK3DJnOiklE5myLRD2nhL6P-IAcnW7Pqil6Sdn9BDs1MXrmj3b7RkTQBfWqwnztw4dpBysN0HsflfBx0LitJT-ux97cPgpXrmx5hCCJU3E15dxE",
  kissama:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBQhauavbRiDVyMMahtiFlHBJrLRaJ1rNULw0EFt16VYsYCn440j_x50dfW--5jLZqz3-i_-Mpv4uIFk06Ni-KSWhaxSFfrpXCbOMVjYxru4hSnY7MoJK61ChbG85-MVhQiz39GYf451sBzhVYMaDDjjGe8qAAmhnlgM4f5ejFXaAm8sKbcEQ91H3j-ifMo77Mc1TlNrx9KhMnmh517TvSle4_T1baOFYIpMIU8R1HuAs_g19csyJptfVTc3KmuDy4jFU7nmqm5Hke4",
  huila:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA85B915LEeSeR_KbUTM_Y52q80h0xc1f2E1VOvrvVEvYCjyte5kyFCwHA9-CYZMPEUuj1uBq_q8n732cjLzuu-mLGe6fI33_mbh5lUnOuLOjsxSiVkIGnD5Xsge-OPZPNY2xcHetDiIa6-T8rfdUFiBdpyUBclcymEME64tAJh-sMH5ROSyn7eS0G51bQwEwLdh4-psHMiQeXpfmsj66SGDt5ZUfvWvqI9U5FjFDLwey5xI1XmNi57aTj28eukLxmsp74gMMO0Jwix",
};

export const destinations: Destination[] = [
  {
    id: "1",
    slug: "cataratas-kalandula",
    title: "Cataratas do Kalandula",
    province: "malanje",
    provinceName: "Malanje",
    municipality: "Kalandula",
    category: "Natureza",
    description:
      "As segundas maiores cataratas de África em volume de água, com uma queda espetacular de 105 metros sobre rochas vulcânicas rodeadas de vegetação tropical exuberante.",
    image: IMG.kalandula,
    gallery: [IMG.kalandula, IMG.kissama, IMG.huila, IMG.namibe],
    coordinates: { lat: -9.0469, lng: 16.0247 },
    details: {
      history:
        "As Cataratas do Kalandula, também conhecidas como Quedas do Duque de Bragança, são as segundas maiores cataratas de África em volume de água. Com 105 metros de altura e mais de 400 metros de largura, foram documentadas pelos exploradores europeus no século XVII e tornaram-se o símbolo mais reconhecível da grandiosidade natural de Angola. As cataratas formam-se no Rio Lucala, afluente do Kwanza, e o estrondo das suas águas pode ser ouvido a vários quilómetros de distância.",
      activities: [
        {
          icon: "photo_camera",
          name: "Fotografia",
          description:
            "Cenário incomparável para fotografia — nascer e pôr do sol sobre as cataratas oferecem luz dourada espetacular.",
        },
        {
          icon: "hiking",
          name: "Trekking",
          description:
            "Trilhos pedestres que percorrem a orla das cataratas com vistas privilegiadas sobre o vale do Lucala.",
        },
        {
          icon: "water",
          name: "Piscinas Naturais",
          description:
            "As piscinas naturais na base das cataratas permitem um banho único com a queda de água ao fundo.",
        },
        {
          icon: "directions_car",
          name: "Excursão 4x4",
          description:
            "O acesso ao miradouro superior requer veículo todo-o-terreno e oferece a vista mais panorâmica.",
        },
      ],
      howToGet:
        "A partir de Luanda, siga a EN-10 em direção a Malanje (430 km, aprox. 5-6 horas de viagem). A partir de Malanje, são mais 90 km até Kalandula. A TAAG opera voos regulares Luanda–Malanje (45 min), reduzindo a viagem terrestre para 90 km. Recomenda-se veículo 4x4 para o último troço. Existem operadores turísticos em Luanda que oferecem excursões organizadas de 2 dias.",
      usefulInfo: {
        hours: "Acesso 24 horas",
        entry: "Gratuito",
        bestSeason:
          "Outubro a Abril (época das chuvas — maior volume de água e mais espetacular)",
        climate:
          "Tropical húmido, temperatura média 24°C. Humidade elevada junto às cataratas.",
      },
    },
    rating: 4.9,
    reviewCount: 312,
    tags: ["cascatas", "natureza", "fotografia", "excursão"],
    featured: true,
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    slug: "ilha-de-luanda",
    title: "Ilha de Luanda",
    province: "luanda",
    provinceName: "Luanda",
    municipality: "Luanda",
    category: "Praia",
    description:
      "Uma península de areia branca que abraça a Baía de Luanda, com restaurantes de marisco, vida nocturna animada e pôres do sol inesquecíveis sobre o Atlântico.",
    image: IMG.marginalLuanda,
    gallery: [IMG.marginalLuanda, IMG.benguela, IMG.ritmos, IMG.kissama],
    coordinates: { lat: -8.8225, lng: 13.2376 },
    details: {
      history:
        "A Ilha de Luanda é uma estreita língua de areia com 7 km de comprimento que forma a baía de Luanda. Foi o primeiro ponto de estabelecimento dos colonizadores portugueses em 1575, servindo de base estratégica para o comércio transatlântico. Durante séculos separada do continente, hoje está ligada por duas pontes e é o centro nevrálgico do lazer, gastronomia e vida noturna da capital angolana.",
      activities: [
        {
          icon: "beach_access",
          name: "Praia",
          description:
            "Praias de areia fina ao longo de toda a península com águas mornas do Atlântico.",
        },
        {
          icon: "restaurant",
          name: "Gastronomia",
          description:
            "Restaurantes de marisco ao longo da orla com frutos do mar frescos e a famosa caldeirada angolana.",
        },
        {
          icon: "sailing",
          name: "Desportos Náuticos",
          description:
            "Jetski, kitesurf e passeios de barco disponíveis ao longo da marina.",
        },
        {
          icon: "nightlife",
          name: "Vida Noturna",
          description:
            "Bares e clubes animados com música angolana, kizomba e semba ao vivo.",
        },
      ],
      howToGet:
        "Localizada dentro de Luanda, acessível de táxi ou uber a partir do centro da cidade (10-20 min). A entrada principal é pela Avenida Murtala Mohamed. Estacionamento disponível ao longo da avenida principal.",
      usefulInfo: {
        hours: "24 horas",
        entry: "Gratuito (praias públicas)",
        bestSeason:
          "Todo o ano. Época seca (Jun-Set) tem menos humidade e céu mais limpo.",
        climate: "Tropical, 24-30°C. Água do mar: 22-26°C.",
      },
    },
    rating: 4.5,
    reviewCount: 487,
    tags: ["praia", "gastronomia", "vida-noturna", "baía"],
    featured: true,
    createdAt: "2024-01-20",
  },
  {
    id: "3",
    slug: "deserto-namibe",
    title: "Deserto do Namibe",
    province: "namibe",
    provinceName: "Namibe",
    municipality: "Moçâmedes",
    category: "Aventura",
    description:
      "O deserto mais antigo do mundo (mais de 55 milhões de anos) encontra o Oceano Atlântico criando uma das paisagens mais dramáticas e surreais de todo o continente africano.",
    image: IMG.namibe,
    gallery: [IMG.namibe, IMG.tundavala, IMG.huila, IMG.kissama],
    coordinates: { lat: -15.1761, lng: 12.1536 },
    details: {
      history:
        "O Deserto do Namibe é considerado o deserto mais antigo da Terra, com uma idade estimada entre 55 e 80 milhões de anos. Esta faixa costeira árida estende-se desde o sul de Angola até à Namíbia, criando um ecossistema único onde o oceano frio e o deserto quente se encontram. O seu habitante mais famoso é a Welwitschia mirabilis, uma planta com mais de 1.500 anos que não existe em mais nenhum lugar do mundo.",
      activities: [
        {
          icon: "directions_car",
          name: "Safari de 4x4",
          description:
            "Excursões em veículos todo-o-terreno pelas dunas e planaltos com guias especializados.",
        },
        {
          icon: "photo_camera",
          name: "Astrofotografia",
          description:
            "Céu sem poluição luminosa — uma das melhores experiências de observação astronómica de África.",
        },
        {
          icon: "hiking",
          name: "Sandboard",
          description:
            "Descida de prancha pelas dunas vermelhas — uma experiência única de adrenalina no deserto.",
        },
        {
          icon: "science",
          name: "Welwitschia Trail",
          description:
            "Rota pelas plantas de Welwitschia mirabilis — algumas com mais de mil anos de vida.",
        },
      ],
      howToGet:
        "Voo de Luanda para Moçâmedes/Namibe (TAAG, 1h30 min). A partir de Moçâmedes, contratar guia e veículo 4x4 — obrigatório para aceder às áreas mais remotas. Existem operadores turísticos locais e em Luanda. Distância de Moçâmedes ao deserto: 30-150 km consoante o destino.",
      usefulInfo: {
        hours: "Excursões: 6h00-18h00",
        entry: "Taxa de acesso ao parque: aprox. USD 20/pessoa",
        bestSeason: "Maio a Setembro (temperaturas mais amenas e menos humidade)",
        climate:
          "Árido costeiro. 15-35°C. Noites frescas no interior (pode descer a 8°C).",
      },
    },
    rating: 4.7,
    reviewCount: 198,
    tags: ["deserto", "aventura", "4x4", "camping", "fotografia"],
    featured: true,
    createdAt: "2024-02-01",
  },
  {
    id: "4",
    slug: "serra-tundavala",
    title: "Serra da Tundavala",
    province: "huila",
    provinceName: "Huíla",
    municipality: "Lubango",
    category: "Natureza",
    description:
      "Uma fenda espetacular que desce abruptamente 1000 metros, revelando uma das vistas mais imponentes de Angola. No horizonte, o deserto do Namibe encontra o litoral atlântico.",
    image: IMG.tundavala,
    gallery: [IMG.tundavala, IMG.huila, IMG.namibe, IMG.kalandula],
    coordinates: { lat: -14.9083, lng: 13.5111 },
    details: {
      history:
        "A Fenda da Tundavala é uma das maravilhas geológicas mais impressionantes de Angola. Localizada a 18 km de Lubango, esta escarpa calcária mergulha abruptamente mais de 1.000 metros para a planície inferior, revelando uma vista que abrange desde o planalto da Huíla até à planície do Namibe no horizonte. O nome 'Tundavala' deriva do idioma Nyaneka-Nkhumbi e significa 'precipício' ou 'lugar de vertigem'.",
      activities: [
        {
          icon: "landscape",
          name: "Miradouro",
          description:
            "Vistas de 360° sobre o planalto e a planície — um dos panoramas mais dramáticos de toda Angola.",
        },
        {
          icon: "hiking",
          name: "Caminhadas",
          description:
            "Trilhos ao longo da escarpa para diferentes pontos de observação e formações rochosas.",
        },
        {
          icon: "photo_camera",
          name: "Fotografia",
          description:
            "Pôr do sol sobre a fenda é um dos momentos fotográficos mais icónicos de Angola.",
        },
        {
          icon: "park",
          name: "Piquenique",
          description:
            "Área de lazer no topo com espaços verdes e mesas para piquenique com vista para o vale.",
        },
      ],
      howToGet:
        "A partir de Lubango (capital da Huíla), seguir a estrada para Namibe por 18 km. Voos regulares Luanda–Lubango (TAAG, 1h30). A partir de Lubango, aluguer de carro ou táxi até à fenda (30 min). Entrada pela área de lazer junto ao miradouro principal.",
      usefulInfo: {
        hours: "08h00-18h00",
        entry: "Gratuito (área de lazer: pequena taxa local)",
        bestSeason:
          "Todo o ano. Maio a Outubro para céu mais limpo e vistas mais nítidas.",
        climate:
          "Temperado de altitude, 15-25°C. Noites frias (pode descer a 5°C). Vento moderado.",
      },
    },
    rating: 4.8,
    reviewCount: 245,
    tags: ["montanha", "miradouro", "trekking", "natureza"],
    featured: true,
    createdAt: "2024-02-10",
  },
  {
    id: "5",
    slug: "praia-de-benguela",
    title: "Praia de Benguela",
    province: "benguela",
    provinceName: "Benguela",
    municipality: "Benguela",
    category: "Praia",
    description:
      "Areias douradas e águas quentes do Atlântico fazem de Benguela um destino de praia por excelência. A cidade histórica e a gastronomia de marisco completam a experiência.",
    image: IMG.benguela,
    gallery: [IMG.benguela, IMG.marginalLuanda, IMG.kissama, IMG.ritmos],
    coordinates: { lat: -12.5733, lng: 13.4072 },
    details: {
      history:
        "Benguela, fundada pelos portugueses em 1617, é uma das cidades mais históricas de Angola. A sua costa é coroada por praias de areias douradas e águas mornas do Atlântico. A cidade foi durante séculos um importante porto comercial e hoje alia a sua herança colonial arquitetónica a uma vibrante cultura de praia e uma gastronomia de frutos do mar considerada a melhor do país.",
      activities: [
        {
          icon: "beach_access",
          name: "Praia",
          description:
            "Praias extensas com areia dourada e águas tranquilas — ideais para famílias.",
        },
        {
          icon: "surfing",
          name: "Surf e Bodyboard",
          description:
            "Ondas consistentes nas praias mais expostas da costa de Benguela.",
        },
        {
          icon: "restaurant",
          name: "Mariscada",
          description:
            "Os restaurantes da orla servem camarão, lagosta e peixe fresco acabado de pescar.",
        },
        {
          icon: "museum",
          name: "Cidade Histórica",
          description:
            "Centro histórico com arquitetura colonial portuguesa e o famoso comboio de Benguela.",
        },
      ],
      howToGet:
        "Voo Luanda–Benguela (TAAG, 45 min). Por estrada: 600 km pela EN-280 (6-7 horas). Existe também ligação ferroviária histórica. Benguela fica a 30 km ao norte de Lobito, o maior porto de Angola.",
      usefulInfo: {
        hours: "Praias abertas 24h",
        entry: "Gratuito",
        bestSeason: "Todo o ano. Época seca (Jun-Set) para praia sem chuva.",
        climate:
          "Tropical seco, 22-30°C. Influência da Corrente de Benguela mantém as temperaturas mais amenas.",
      },
    },
    rating: 4.3,
    reviewCount: 356,
    tags: ["praia", "surf", "gastronomia", "história"],
    featured: false,
    createdAt: "2024-02-15",
  },
  {
    id: "6",
    slug: "parque-nacional-kissama",
    title: "Parque Nacional da Kissama",
    province: "bengo",
    provinceName: "Bengo",
    municipality: "Quiçama",
    category: "Natureza",
    description:
      "O maior e mais acessível parque nacional de Angola, a apenas 70 km de Luanda. Elefantes, gnus, búfalos e mais de 200 espécies de aves habitam esta reserva costeira única.",
    image: IMG.kissama,
    gallery: [IMG.kissama, IMG.kalandula, IMG.huila, IMG.namibe],
    coordinates: { lat: -9.1665, lng: 13.3318 },
    details: {
      history:
        "O Parque Nacional da Kissama, fundado em 1938 e redesignado em 1957, é o maior e mais acessível parque nacional de Angola. Situado a apenas 70 km de Luanda, foi o foco de um ambicioso projeto de reintrodução de fauna nos anos 2000, trazendo elefantes do Botswana e Zimbabwe para repovoar as savanas empobrecidas por décadas de conflito. Hoje é um símbolo da recuperação ambiental de Angola.",
      activities: [
        {
          icon: "forest",
          name: "Game Drive",
          description:
            "Safaris ao amanhecer e entardecer com guias experientes para avistamento de fauna.",
        },
        {
          icon: "photo_camera",
          name: "Birdwatching",
          description:
            "Mais de 200 espécies de aves, incluindo espécies endémicas da África Austral.",
        },
        {
          icon: "beach_access",
          name: "Praia do Atlântico",
          description:
            "O parque tem fronteira com o oceano — praias selvagens sem turistas dentro do parque.",
        },
        {
          icon: "camping",
          name: "Campismo",
          description:
            "Zona de campismo autorizada dentro do parque com instalações básicas.",
        },
      ],
      howToGet:
        "A partir de Luanda, seguir a Estrada Nacional EN-100 para sul por 70 km (1h). A entrada principal fica em Cabo Ledo. Existe a opção de travessia de barco pelo Rio Kwanza. Muitos operadores de Luanda oferecem day tours e safaris de 1-2 noites.",
      usefulInfo: {
        hours: "06h00-18h00",
        entry: "Adultos: USD 10/dia. Veículo: USD 5.",
        bestSeason:
          "Época seca (Jun-Nov) — melhor visibilidade e animais concentrados junto à água.",
        climate:
          "Tropical, 22-28°C. Época das chuvas (Out-Abr) com vegetação exuberante.",
      },
    },
    rating: 4.6,
    reviewCount: 289,
    tags: ["safari", "fauna", "reserva", "elefantes"],
    featured: true,
    createdAt: "2024-03-01",
  },
  {
    id: "7",
    slug: "miradouro-da-lua",
    title: "Miradouro da Lua",
    province: "luanda",
    provinceName: "Luanda",
    municipality: "Luanda",
    category: "Natureza",
    description:
      "Formações rochosas de argila erosiva que evocam a superfície lunar, pintadas pela natureza em tons de ocre, amarelo e vermelho. Um espectáculo geológico único a 40 km de Luanda.",
    image: IMG.namibe,
    gallery: [IMG.namibe, IMG.tundavala, IMG.huila, IMG.kissama],
    coordinates: { lat: -9.2083, lng: 13.1417 },
    details: {
      history:
        "O Miradouro da Lua é uma formação geológica de argila erodida pelo vento e pela chuva ao longo de milhões de anos, criando uma paisagem que evoca a superfície lunar. Localizado a 40 km ao sul de Luanda, este fenómeno natural é dos mais fotografados de Angola e foi popularizado pelos astronautas da missão Apolo que vieram a Angola no final dos anos 1960.",
      activities: [
        {
          icon: "photo_camera",
          name: "Fotografia",
          description:
            "Formações únicas em tons de laranja, ocre e amarelo — o cenário perfeito ao pôr do sol.",
        },
        {
          icon: "hiking",
          name: "Caminhada Geológica",
          description:
            "Percurso a pé entre as formações rochosas com explicações sobre a geologia local.",
        },
        {
          icon: "directions_car",
          name: "Excursão de Dia",
          description:
            "Facilmente combinável com uma visita ao Parque da Kissama numa excursão de dia inteiro.",
        },
      ],
      howToGet:
        "A 40 km ao sul de Luanda pela EN-100 em direção a Cabo Ledo. Accessible de carro próprio ou táxi (40-50 min). Muitos operadores turísticos incluem o Miradouro da Lua numa excursão combinada com a Kissama.",
      usefulInfo: {
        hours: "24 horas (melhor ao pôr do sol)",
        entry: "Gratuito",
        bestSeason: "Todo o ano. Pôr do sol especialmente dramático.",
        climate: "Tropical, 24-30°C. Mais fresco ao entardecer.",
      },
    },
    rating: 4.4,
    reviewCount: 178,
    tags: ["geologia", "fotografia", "paisagem", "excursão"],
    featured: false,
    createdAt: "2024-03-10",
  },
  {
    id: "8",
    slug: "cidade-alta-luanda",
    title: "Cidade Alta de Luanda",
    province: "luanda",
    provinceName: "Luanda",
    municipality: "Luanda",
    category: "Histórico",
    description:
      "O coração histórico de Luanda, com o Palácio Presidencial, a Fortaleza de São Miguel e museus que narram séculos de história angolana e africana.",
    image: IMG.ritmos,
    gallery: [IMG.ritmos, IMG.artesanato, IMG.marginalLuanda, IMG.kissama],
    coordinates: { lat: -8.8383, lng: 13.2344 },
    details: {
      history:
        "A Cidade Alta é o núcleo fundador de Luanda, estabelecido pelos portugueses em 1576 no alto da colina que domina a baía. Durante mais de 400 anos foi o centro do poder colonial e hoje alberga o Palácio Presidencial, ministérios e monumentos históricos que narram a longa história de Angola desde o Reino do Kongo até à independência.",
      activities: [
        {
          icon: "account_balance",
          name: "Visita Histórica",
          description:
            "Percurso a pé pelos monumentos históricos, igrejas coloniais e edifícios governamentais.",
        },
        {
          icon: "museum",
          name: "Museus",
          description:
            "Museu Nacional de História Natural e outros museus que preservam o patrimônio angolano.",
        },
        {
          icon: "photo_camera",
          name: "Fotografia Urbana",
          description:
            "Vistas panorâmicas sobre a baía de Luanda e a skyline moderna da cidade.",
        },
      ],
      howToGet:
        "No centro de Luanda, acessível de táxi ou a pé a partir da Baixa de Luanda. Localizado na colina acima da Marginal, com acesso pela Avenida 4 de Fevereiro.",
      usefulInfo: {
        hours: "Exterior: 24h. Museus: 9h-17h (encerrado à segunda)",
        entry: "Exterior gratuito. Museus: taxa variável",
        bestSeason: "Todo o ano. Manhãs para evitar calor.",
        climate: "Tropical, 24-32°C. Época seca mais agradável para visitar.",
      },
    },
    rating: 4.2,
    reviewCount: 203,
    tags: ["história", "arquitetura", "museus", "colonial"],
    featured: false,
    createdAt: "2024-03-20",
  },
  {
    id: "9",
    slug: "museu-antropologia-luanda",
    title: "Museu Nacional de Antropologia",
    province: "luanda",
    provinceName: "Luanda",
    municipality: "Luanda",
    category: "Cultura",
    description:
      "A maior coleção etnográfica de Angola, com máscaras rituais, esculturas Chokwe, instrumentos musicais e têxteis que preservam a identidade cultural das 9 etnias angolanas.",
    image: IMG.artesanato,
    gallery: [IMG.artesanato, IMG.ritmos, IMG.marginalLuanda, IMG.huila],
    coordinates: { lat: -8.82, lng: 13.234 },
    details: {
      history:
        "O Museu Nacional de Antropologia de Luanda é a mais importante instituição de preservação do patrimônio etnográfico de Angola. Fundado na era colonial, o museu alberga uma coleção que abrange as expressões culturais de todos os grupos étnicos angolanos, desde as máscaras Cokwe do nordeste até aos adornos Nyaneka-Nkhumbi do sul.",
      activities: [
        {
          icon: "museum",
          name: "Coleção Etnográfica",
          description:
            "Máscaras rituais, esculturas, instrumentos musicais e têxteis das 9 principais etnias angolanas.",
        },
        {
          icon: "school",
          name: "Visitas Guiadas",
          description:
            "Guias especializados que contextualizam cada peça na sua cultura e tradição de origem.",
        },
        {
          icon: "shopping_bag",
          name: "Loja do Museu",
          description:
            "Artesanato autêntico e reproduções de qualidade para levar como memória.",
        },
      ],
      howToGet:
        "Localizado no centro de Luanda, próximo da Avenida 4 de Fevereiro. Acessível de táxi ou a pé a partir da Marginal de Luanda (10-15 min a pé).",
      usefulInfo: {
        hours: "Terça a Domingo: 9h00-17h00",
        entry: "Adultos: 500 AOA. Crianças: gratuito",
        bestSeason: "Todo o ano.",
        climate: "Interior climatizado. Exterior tropical, 24-32°C.",
      },
    },
    rating: 4.1,
    reviewCount: 134,
    tags: ["museu", "etnografia", "arte", "cultura"],
    featured: false,
    createdAt: "2024-04-01",
  },
  {
    id: "10",
    slug: "ruinas-mbanza-kongo",
    title: "Ruínas de Mbanza Kongo",
    province: "zaire",
    provinceName: "Zaire",
    municipality: "M'Banza Congo",
    category: "Histórico",
    description:
      "Capital do antigo Reino do Kongo, classificada como Património Mundial da UNESCO em 2017. Um sítio arqueológico de importância civilizacional para toda a África Subsaariana.",
    image: IMG.artesanato,
    gallery: [IMG.artesanato, IMG.huila, IMG.ritmos, IMG.tundavala],
    coordinates: { lat: -6.2668, lng: 14.2364 },
    details: {
      history:
        "Mbanza Kongo foi a capital do poderoso Reino do Kongo, que floresceu entre os séculos XIV e XVII e chegou a controlar um território que abrange o atual norte de Angola, o oeste da RDC e o Congo-Brazzaville. Classificada como Património Mundial da UNESCO em 2017, a cidade preserva ruínas de igrejas, palácios e cemitérios reais que testemunham a grandeza desta civilização africana pré-colonial.",
      activities: [
        {
          icon: "account_balance",
          name: "Sítio Arqueológico",
          description:
            "Ruínas da catedral de São Salvador, palácios reais e necrópoles do antigo Reino do Kongo.",
        },
        {
          icon: "museum",
          name: "Museu do Reino do Kongo",
          description:
            "Artefactos, documentos e exposições que narram a história desta civilização africana única.",
        },
        {
          icon: "hiking",
          name: "Percurso Histórico",
          description:
            "Caminhada guiada pelos principais pontos históricos da antiga capital.",
        },
      ],
      howToGet:
        "Voo de Luanda para M'Banza Congo (TAAG). Por estrada: 500 km pelo norte de Angola (6-8 horas). Recomenda-se contratar guia local especializado na história do Reino do Kongo.",
      usefulInfo: {
        hours: "8h00-17h00",
        entry: "Taxa de visita ao sítio UNESCO: aprox. USD 10",
        bestSeason: "Maio a Outubro (época mais seca e estradas mais acessíveis)",
        climate: "Tropical húmido, 22-30°C. Época chuvosa intensa de Nov-Abr.",
      },
    },
    rating: 4.5,
    reviewCount: 89,
    tags: ["unesco", "patrimônio", "arqueologia", "reino-kongo"],
    featured: true,
    createdAt: "2024-04-10",
  },
  {
    id: "11",
    slug: "pedras-negras-pungo-andongo",
    title: "Pedras Negras de Pungo Andongo",
    province: "malanje",
    provinceName: "Malanje",
    municipality: "Pungo Andongo",
    category: "Histórico",
    description:
      "Gigantescos blocos de granito negro dispersos na savana, com lendas ligadas à Rainha Njinga Mbande. Um lugar de poder espiritual e beleza geológica singular.",
    image: IMG.huila,
    gallery: [IMG.huila, IMG.namibe, IMG.tundavala, IMG.kissama],
    coordinates: { lat: -9.6681, lng: 15.8233 },
    details: {
      history:
        "As Pedras Negras de Pungo Andongo são gigantescos monólitos de granito que emergem da savana angolana como sentinelas de pedra. Profundamente ligadas à lenda da Rainha Njinga Mbande — a guerreira que resistiu à colonização portuguesa no século XVII — estas formações são locais de peregrinação e de profundo significado espiritual para o povo Mbundu.",
      activities: [
        {
          icon: "hiking",
          name: "Exploração das Pedras",
          description:
            "Percurso pelos monólitos gigantes com histórias e lendas da Rainha Njinga.",
        },
        {
          icon: "photo_camera",
          name: "Fotografia",
          description:
            "Formações rochosas únicas contrastam com o verde da savana em cenários fotográficos extraordinários.",
        },
        {
          icon: "history_edu",
          name: "Turismo Cultural",
          description:
            "Visita às marcas históricas atribuídas à Rainha Njinga — o Pedra do Feitiço e o Pedra de Njinga.",
        },
      ],
      howToGet:
        "A partir de Malanje, seguir para sudeste por cerca de 110 km em direção a Cacuso. Recomenda-se veículo 4x4 e guia local. Voos de Luanda para Malanje (TAAG, 45 min) facilitam o acesso.",
      usefulInfo: {
        hours: "Acesso livre (visitas: 8h-17h recomendado)",
        entry: "Gratuito",
        bestSeason: "Maio a Outubro",
        climate: "Tropical de savana, 22-34°C. Período húmido de Novembro a Abril.",
      },
    },
    rating: 4.6,
    reviewCount: 112,
    tags: ["geologia", "história", "rainha-njinga", "espiritualidade"],
    featured: false,
    createdAt: "2024-04-20",
  },
  {
    id: "12",
    slug: "praia-cabo-ledo",
    title: "Praia do Cabo Ledo",
    province: "luanda",
    provinceName: "Luanda",
    municipality: "Luanda",
    category: "Praia",
    description:
      "Considerada pelos surfistas uma das melhores ondas de África, com 5 km de praias selvagens e intactas. O spot perfeito para surf, kiteboard e ecoturismo costeiro.",
    image: IMG.benguela,
    gallery: [IMG.benguela, IMG.marginalLuanda, IMG.kissama, IMG.namibe],
    coordinates: { lat: -9.7119, lng: 13.035 },
    details: {
      history:
        "O Cabo Ledo é uma das praias mais selvagens e virgens de Angola, localizado a cerca de 75 km a sul de Luanda. Famosa entre surfistas internacionais pela qualidade consistente das suas ondas, esta praia de 5 km de extensão permanece relativamente intocada e é o local ideal para quem procura natureza costeira autêntica.",
      activities: [
        {
          icon: "surfing",
          name: "Surf",
          description:
            "Ondas de direita longas e consistentes — consideradas entre as melhores de África para longboard.",
        },
        {
          icon: "kitesurfing",
          name: "Kitesurf",
          description:
            "Ventos regulares da tarde e espaço amplo tornam o Cabo Ledo ideal para kitesurf.",
        },
        {
          icon: "camping",
          name: "Campismo",
          description:
            "Área de campismo junto à praia com instalações básicas para estadias de fim de semana.",
        },
      ],
      howToGet:
        "A 75 km a sul de Luanda pela EN-100 (1h30). Adjacente à entrada sul do Parque Nacional da Kissama. Acessível de carro próprio — estrada alcatroada até à entrada, último troço de terra.",
      usefulInfo: {
        hours: "Acesso livre",
        entry: "Gratuito",
        bestSeason: "Outubro a Março (melhores ondas de surf)",
        climate: "Tropical costeiro, 22-28°C. Influência do Atlântico mantém temperaturas amenas.",
      },
    },
    rating: 4.4,
    reviewCount: 267,
    tags: ["surf", "praia-selvagem", "kiteboard", "ecoturismo"],
    featured: false,
    createdAt: "2024-05-01",
  },
  {
    id: "13",
    slug: "parque-nacional-iona",
    title: "Parque Nacional do Iona",
    province: "namibe",
    provinceName: "Namibe",
    municipality: "Tombua",
    category: "Natureza",
    description:
      "O maior parque nacional de Angola e um dos maiores de África, onde o deserto do Namibe encontra a fauna africana. Elefantes do deserto, leões e oryx gemsbok vivem nesta imensidão.",
    image: IMG.kissama,
    gallery: [IMG.namibe, IMG.kissama, IMG.huila, IMG.tundavala],
    coordinates: { lat: -16.55, lng: 11.9167 },
    details: {
      history:
        "O Parque Nacional do Iona, com mais de 15.000 km², é o maior parque nacional de Angola e um dos maiores ecosistemas áridos de África. Criado em 1937, preserva a transição única entre o deserto costeiro do Namibe e a fauna africana da savana seca. Elefantes do deserto adaptados à aridez, leões, guepardos e oryx gemsbok habitam esta paisagem de rara beleza.",
      activities: [
        {
          icon: "directions_car",
          name: "Safari 4x4",
          description:
            "Expedições de vários dias pelo parque com guias especializados em fauna do deserto.",
        },
        {
          icon: "photo_camera",
          name: "Fotografia de Fauna",
          description:
            "Avistamento de elefantes do deserto, leões, oryx e aves migratórias em habitat natural.",
        },
        {
          icon: "camping",
          name: "Acampamento Remoto",
          description:
            "Noites sob o céu estrelado do deserto em locais de acampamento primitivo dentro do parque.",
        },
      ],
      howToGet:
        "Voo Luanda–Namibe (TAAG, 1h30). A partir de Namibe ou Tombua (80 km), contratar guia com veículo 4x4 obrigatoriamente. O acesso sem guia especializado é perigoso e desencorajado.",
      usefulInfo: {
        hours: "Expedições: 6h00-18h00",
        entry: "Taxa de entrada no parque: USD 15/dia",
        bestSeason: "Maio a Setembro",
        climate: "Árido, 15-38°C. Variação extrema entre dia e noite.",
      },
    },
    rating: 4.5,
    reviewCount: 76,
    tags: ["parque-nacional", "safari", "deserto", "fauna-rara"],
    featured: false,
    createdAt: "2024-05-10",
  },
  {
    id: "14",
    slug: "baia-dos-tigres",
    title: "Baía dos Tigres",
    province: "namibe",
    provinceName: "Namibe",
    municipality: "Tombua",
    category: "Praia",
    description:
      "Uma península que parece saída de um planeta distante: dunas cor-de-laranja mergulham no oceano frio da corrente de Benguela, onde focas e flamingos convivem em harmonia.",
    image: IMG.benguela,
    gallery: [IMG.benguela, IMG.namibe, IMG.kissama, IMG.marginalLuanda],
    coordinates: { lat: -16.598, lng: 11.708 },
    details: {
      history:
        "A Baía dos Tigres é uma das paisagens mais remotas e espetaculares de Angola, onde as dunas vermelhas do deserto mergulham diretamente no oceano frio da Corrente de Benguela. Antigamente uma ilha de pescadores, hoje é uma península unida ao continente pela areia. Colónias de focas-do-cabo, flamingos e pelicanos habitam estas águas ricas em nutrientes.",
      activities: [
        {
          icon: "photo_camera",
          name: "Observação de Focas",
          description:
            "Colónias de focas-do-cabo descansam nas praias junto à baía — espetáculo único.",
        },
        {
          icon: "kitesurfing",
          name: "Kitesurf e Wind",
          description:
            "Ventos constantes e espaço infinito tornam a baía ideal para desportos de vela.",
        },
        {
          icon: "directions_car",
          name: "Exploração 4x4",
          description:
            "Percursos pelas dunas vermelhas que mergulham no atlântico — paisagem de outro mundo.",
        },
      ],
      howToGet:
        "A partir de Tombua (sul do Namibe), são 70 km de estrada de terra que exige 4x4. Acessível de Namibe em cerca de 3 horas com veículo adequado. Expedições organizadas a partir de Namibe disponíveis.",
      usefulInfo: {
        hours: "Acesso livre",
        entry: "Gratuito",
        bestSeason: "Todo o ano. Focas presentes o ano inteiro.",
        climate: "Árido costeiro, 14-26°C. Muito vento. Oceano frio (16-18°C).",
      },
    },
    rating: 4.3,
    reviewCount: 58,
    tags: ["praia-remota", "focas", "flamingos", "dunas"],
    featured: false,
    createdAt: "2024-05-20",
  },
  {
    id: "15",
    slug: "lagos-de-carumbo",
    title: "Lagos de Carumbo",
    province: "lunda-norte",
    provinceName: "Lunda Norte",
    municipality: "Dundo",
    category: "Natureza",
    description:
      "Um arquipélago de lagoas cristalinas cercadas por floresta miombo, com hipopótamos, crocodilos e uma avifauna exuberante. O paraíso escondido do nordeste angolano.",
    image: IMG.kissama,
    gallery: [IMG.kissama, IMG.kalandula, IMG.huila, IMG.namibe],
    coordinates: { lat: -7.1833, lng: 20.4833 },
    details: {
      history:
        "Os Lagos de Carumbo constituem um sistema de lagoas interligadas na floresta miombo do nordeste de Angola, na região de Lunda Norte. Este ecossistema aquático único, praticamente desconhecido do turismo internacional, alberga hipopótamos, crocodilos do Nilo e uma extraordinária variedade de aves aquáticas. A região é também rica em diamantes e cultura Chokwe.",
      activities: [
        {
          icon: "kayak",
          name: "Passeios de Canoa",
          description:
            "Exploração das lagoas interligadas em canoa com observação de hipopótamos e crocodilos.",
        },
        {
          icon: "photo_camera",
          name: "Birdwatching",
          description:
            "Mais de 150 espécies de aves aquáticas — garças, cegonhas e martins-pescadores em abundância.",
        },
        {
          icon: "forest",
          name: "Floresta Miombo",
          description:
            "Caminhadas na floresta de miombo com guia local para conhecer a flora e fauna únicas.",
        },
      ],
      howToGet:
        "Voo de Luanda para Dundo (Lunda Norte) via TAAG ou companhias regionais. A partir de Dundo, são cerca de 150 km em estrada de terra — veículo 4x4 e guia local obrigatório.",
      usefulInfo: {
        hours: "Visitas organizadas: 6h-18h",
        entry: "Acordar com guia local (taxa variável)",
        bestSeason: "Maio a Setembro (nível das águas ideal e chuva reduzida)",
        climate: "Tropical húmido, 20-32°C. Época chuvosa intensa de Nov-Abr.",
      },
    },
    rating: 4.2,
    reviewCount: 43,
    tags: ["lagos", "hipopótamos", "birdwatching", "ecoturismo"],
    featured: false,
    createdAt: "2024-06-01",
  },
  {
    id: "16",
    slug: "mercado-kinaxixi",
    title: "Mercado do Kinaxixi",
    province: "luanda",
    provinceName: "Luanda",
    municipality: "Luanda",
    category: "Gastronomia",
    description:
      "O mercado mais histórico e pulsante de Luanda, onde a moamba de galinha, o calulu de peixe e o quizaca enchem o ar com aromas que contam histórias de gerações angolanas.",
    image: IMG.ritmos,
    gallery: [IMG.ritmos, IMG.artesanato, IMG.marginalLuanda, IMG.benguela],
    coordinates: { lat: -8.8147, lng: 13.2413 },
    details: {
      history:
        "O Mercado do Kinaxixi é o centro gastronómico e comercial mais emblemático de Luanda, funcionando há mais de um século como ponto de encontro entre a cidade colonial e as comunidades angolanas. O nome 'Kinaxixi' deriva do idioma Kimbundu e o mercado é um espelho vivo da diversidade culinária e cultural de Angola.",
      activities: [
        {
          icon: "restaurant",
          name: "Gastronomia Angolana",
          description:
            "Provar moamba de galinha, calulu, muamba de ginguba, quizaca e outros pratos tradicionais.",
        },
        {
          icon: "shopping_bag",
          name: "Compras",
          description:
            "Especiarias, frutas tropicais, produtos locais e artesanato a preços locais autênticos.",
        },
        {
          icon: "photo_camera",
          name: "Fotografia Cultural",
          description:
            "Um dos lugares mais coloridos e animados de Luanda — cenário perfeito para fotografia documental.",
        },
      ],
      howToGet:
        "No centro de Luanda, facilmente acessível de táxi ou a pé a partir da Baixa. O mercado mais movimentado é de manhã cedo (7h-12h).",
      usefulInfo: {
        hours: "Segunda a Sábado: 6h00-18h00",
        entry: "Gratuito",
        bestSeason: "Todo o ano. Manhãs mais animadas.",
        climate: "Tropical, 24-32°C. Interior do mercado com sombra.",
      },
    },
    rating: 3.8,
    reviewCount: 445,
    tags: ["mercado", "gastronomia", "cultura", "local"],
    featured: false,
    createdAt: "2024-06-10",
  },
  {
    id: "17",
    slug: "fortaleza-sao-miguel",
    title: "Fortaleza de São Miguel",
    province: "luanda",
    provinceName: "Luanda",
    municipality: "Luanda",
    category: "Histórico",
    description:
      "Construída em 1576, esta fortaleza portuguesa domina a baía de Luanda e alberga o Museu das Forças Armadas Angolanas. Testemunho em pedra de cinco séculos de história.",
    image: IMG.ritmos,
    gallery: [IMG.ritmos, IMG.artesanato, IMG.marginalLuanda, IMG.kissama],
    coordinates: { lat: -8.8347, lng: 13.2323 },
    details: {
      history:
        "A Fortaleza de São Miguel foi construída em 1576 pelos portugueses como baluarte defensivo da recém-fundada cidade de Luanda. Durante mais de quatro séculos permaneceu como o ponto estratégico mais importante da costa ocidental africana. Hoje alberga o Museu das Forças Armadas de Angola, com uma coleção que abrange desde a resistência colonial até à guerra civil e independência.",
      activities: [
        {
          icon: "account_balance",
          name: "Visita à Fortaleza",
          description:
            "Exploração das muralhas, canhões, calabouços e estruturas originais do século XVI.",
        },
        {
          icon: "museum",
          name: "Museu das Forças Armadas",
          description:
            "Coleção de artefactos militares, documentos e fotografias da história de Angola.",
        },
        {
          icon: "landscape",
          name: "Vista sobre a Baía",
          description:
            "Das muralhas da fortaleza, vista panorâmica sobre toda a Baía de Luanda e a Ilha.",
        },
      ],
      howToGet:
        "No centro histórico de Luanda, na Cidade Alta. A 15 min a pé da Marginal de Luanda ou accessible de táxi. Entrada pela Rua Rei Katyavala.",
      usefulInfo: {
        hours: "Terça a Domingo: 9h00-17h00",
        entry: "Adultos: 500 AOA",
        bestSeason: "Todo o ano.",
        climate: "Tropical, 24-32°C.",
      },
    },
    rating: 4.5,
    reviewCount: 192,
    tags: ["fortaleza", "colonial", "museu", "baía"],
    featured: false,
    createdAt: "2024-06-20",
  },
  {
    id: "18",
    slug: "praia-palmeirinhas",
    title: "Praia de Palmeirinhas",
    province: "luanda",
    provinceName: "Luanda",
    municipality: "Luanda",
    category: "Praia",
    description:
      "Uma praia paradisíaca a sul de Luanda, com coqueiros que se inclinam sobre a areia branca e águas mornas do Atlântico. Ideal para mergulho e descanso longe da cidade.",
    image: IMG.benguela,
    gallery: [IMG.benguela, IMG.marginalLuanda, IMG.kissama, IMG.namibe],
    coordinates: { lat: -9.325, lng: 13.1417 },
    details: {
      history:
        "As Palmeirinhas são uma das praias mais tranquilas e pitorescas próximas de Luanda, caracterizadas pelos coqueiros tropicais que se inclinam sobre a areia branca. Menos frequentada que a Ilha de Luanda, mantém um carácter mais natural e relaxante, sendo o refúgio preferido dos luandenses que buscam descanso e natureza.",
      activities: [
        {
          icon: "beach_access",
          name: "Praia e Banhos",
          description:
            "Areias brancas, coqueiros e águas mornas do Atlântico para descanso e mergulho.",
        },
        {
          icon: "scuba_diving",
          name: "Mergulho",
          description:
            "Águas claras com fundo de areia e recifes rochosos com vida marinha variada.",
        },
        {
          icon: "restaurant",
          name: "Peixe Fresco",
          description:
            "Peixe e marisco fresco preparado pelos pescadores locais nas barracas junto à praia.",
        },
      ],
      howToGet:
        "A 55 km a sul de Luanda pela EN-100. Acessível de carro próprio ou táxi (1h). A estrada está em bom estado até à entrada da praia.",
      usefulInfo: {
        hours: "Acesso livre",
        entry: "Gratuito",
        bestSeason: "Todo o ano. Menos afluência durante a semana.",
        climate: "Tropical costeiro, 22-28°C. Águas do mar: 23-26°C.",
      },
    },
    rating: 4.1,
    reviewCount: 234,
    tags: ["praia", "mergulho", "coqueiros", "descanso"],
    featured: false,
    createdAt: "2024-07-01",
  },
  {
    id: "19",
    slug: "morro-do-moco",
    title: "Morro do Moco",
    province: "huambo",
    provinceName: "Huambo",
    municipality: "Londuimbali",
    category: "Aventura",
    description:
      "O ponto mais alto de Angola com 2.620 metros, no planalto central de Huambo. Uma escalada exigente recompensada por vistas que abrangem metade do país e uma flora única de altitude.",
    image: IMG.tundavala,
    gallery: [IMG.tundavala, IMG.huila, IMG.namibe, IMG.kalandula],
    coordinates: { lat: -11.9667, lng: 15.15 },
    details: {
      history:
        "O Morro do Moco, com 2.620 metros, é o ponto culminante de Angola e está localizado na Serra do Moco, no planalto central de Huambo. Esta montanha sagrada para as comunidades Ovimbundu locais é rodeada por floresta de montanha única, com espécies endémicas de fauna e flora que não existem em mais nenhum lugar do mundo.",
      activities: [
        {
          icon: "hiking",
          name: "Escalada ao Cume",
          description:
            "Trilho de montanha com 3-5 horas de subida até ao ponto mais alto de Angola — vistas de 360°.",
        },
        {
          icon: "forest",
          name: "Flora de Altitude",
          description:
            "Observação de espécies endémicas de flora de montanha — proteas, lobélias gigantes e orquídeas.",
        },
        {
          icon: "camping",
          name: "Campismo",
          description:
            "Acampamento na Serra do Moco com céu estrelado de altitude extraordinário.",
        },
      ],
      howToGet:
        "Voo Luanda–Huambo (TAAG, 1h). De Huambo, seguir para Londuimbali (90 km) e depois para a Serra do Moco. Contratar guia local em Londuimbali — o trilho não está marcado.",
      usefulInfo: {
        hours: "Início de subida recomendado: 6h00",
        entry: "Gratuito (guia recomendado: taxa acordada localmente)",
        bestSeason: "Maio a Outubro (visibilidade máxima e menos chuva)",
        climate: "Temperado frio de altitude, 8-22°C. Noites muito frias (0-5°C). Chuva frequente.",
      },
    },
    rating: 4.4,
    reviewCount: 67,
    tags: ["montanha", "trekking", "altitude", "flora-endémica"],
    featured: false,
    createdAt: "2024-07-10",
  },
  {
    id: "20",
    slug: "cachoeiras-balombo",
    title: "Cachoeiras do Balombo",
    province: "benguela",
    provinceName: "Benguela",
    municipality: "Balombo",
    category: "Natureza",
    description:
      "Uma série de cascatas escondidas na floresta tropical da região do Balombo, com piscinas naturais de água cristalina onde se pode nadar rodeado de uma natureza intacta.",
    image: IMG.kalandula,
    gallery: [IMG.kalandula, IMG.kissama, IMG.huila, IMG.benguela],
    coordinates: { lat: -12.35, lng: 14.7833 },
    details: {
      history:
        "As Cachoeiras do Balombo são uma série de quedas de água escondidas nas montanhas da região interior de Benguela, a cerca de 120 km da costa. Formadas pelo Rio Balombo, estas cascatas foram descobertas pelo turismo apenas nas últimas décadas e mantêm um carácter genuinamente selvagem, com piscinas naturais de água cristalina rodeadas de floresta tropical.",
      activities: [
        {
          icon: "water",
          name: "Piscinas Naturais",
          description:
            "Banho nas piscinas naturais de água cristalina formadas na base das cascatas.",
        },
        {
          icon: "hiking",
          name: "Trekking",
          description:
            "Trilhos pela floresta tropical para descobrir as diferentes quedas de água espalhadas pelo vale.",
        },
        {
          icon: "photo_camera",
          name: "Fotografia de Natureza",
          description:
            "Vegetação tropical exuberante e quedas de água — cenário de fotografia único e intocado.",
        },
      ],
      howToGet:
        "De Benguela, seguir para o interior em direção a Balombo (120 km, aprox. 2h). Recomenda-se veículo 4x4 e guia local. Caminho para as cachoeiras requer caminhada de 30-45 min.",
      usefulInfo: {
        hours: "Luz do dia: 7h-18h",
        entry: "Gratuito",
        bestSeason: "Outubro a Abril (cachoeiras com maior volume de água)",
        climate: "Tropical de altitude, 18-28°C. Mais fresco que a costa.",
      },
    },
    rating: 4.5,
    reviewCount: 88,
    tags: ["cascatas", "piscinas-naturais", "trekking", "natureza"],
    featured: false,
    createdAt: "2024-07-20",
  },
  {
    id: "21",
    slug: "parque-cangandala",
    title: "Parque Nacional da Cangandala",
    province: "malanje",
    provinceName: "Malanje",
    municipality: "Malanje",
    category: "Natureza",
    description:
      "O mais pequeno parque nacional de Angola e o único refúgio mundial do palanca-negra-gigante (Hippotragus niger variani), o símbolo nacional angolano em estado crítico de extinção.",
    image: IMG.kissama,
    gallery: [IMG.kissama, IMG.kalandula, IMG.huila, IMG.namibe],
    coordinates: { lat: -9.6667, lng: 16.0167 },
    details: {
      history:
        "O Parque Nacional da Cangandala, com apenas 630 km², é o mais pequeno parque nacional de Angola mas talvez o mais importante do ponto de vista da conservação. É o único lugar do mundo onde vive o palanca-negra-gigante (Hippotragus niger variani), o antílope mais raro da Terra e símbolo nacional de Angola, com apenas algumas dezenas de indivíduos restantes.",
      activities: [
        {
          icon: "forest",
          name: "Avistamento da Palanca-Negra",
          description:
            "Excursão guiada ao único habitat do palanca-negra-gigante — o antílope mais raro do mundo.",
        },
        {
          icon: "photo_camera",
          name: "Fotografia de Vida Selvagem",
          description:
            "Para além da palanca, o parque tem buffalos, hipopótamos e grande variedade de aves.",
        },
        {
          icon: "school",
          name: "Ecoturismo Educativo",
          description:
            "Visitas com rangers do parque que explicam os esforços de conservação desta espécie única.",
        },
      ],
      howToGet:
        "A partir de Malanje (30 km para sul). Voo de Luanda para Malanje (TAAG, 45 min) e depois carro ou táxi até ao parque. Entrada controlada pelos rangers — reserva antecipada recomendada.",
      usefulInfo: {
        hours: "6h00-17h00",
        entry: "Taxa de entrada: contactar gestão do parque",
        bestSeason: "Junho a Outubro (avistamentos mais fáceis na vegetação seca)",
        climate: "Tropical de savana, 22-32°C. Época chuvosa de Novembro a Abril.",
      },
    },
    rating: 4.7,
    reviewCount: 54,
    tags: ["palanca-negra", "fauna-rara", "conservação", "parque-nacional"],
    featured: true,
    createdAt: "2024-08-01",
  },
  {
    id: "22",
    slug: "complexo-lagoas-luanda",
    title: "Complexo Turístico das Lagoas",
    province: "luanda",
    provinceName: "Luanda",
    municipality: "Luanda",
    category: "Gastronomia",
    description:
      "O epicentro gastronómico e cultural da classe média luandense, com restaurantes de cozinha angolana, brasileira e europeia, bares de cocktails e espaços de arte contemporânea.",
    image: IMG.ritmos,
    gallery: [IMG.ritmos, IMG.marginalLuanda, IMG.artesanato, IMG.benguela],
    coordinates: { lat: -8.838, lng: 13.249 },
    details: {
      history:
        "O Complexo das Lagoas é o espaço de lazer e gastronomia mais moderno e frequentado de Luanda, desenvolvido nos anos 2010 num bairro residencial de classe média. As lagoas artificiais dão nome ao complexo e criam um ambiente único de entretenimento ao ar livre, com restaurantes, bares, lojas de arte e espaços de eventos que refletem a vitalidade cultural da Luanda contemporânea.",
      activities: [
        {
          icon: "restaurant",
          name: "Gastronomia Diversificada",
          description:
            "Dezenas de restaurantes com cozinha angolana, portuguesa, brasileira, italiana e asiática.",
        },
        {
          icon: "nightlife",
          name: "Vida Noturna",
          description:
            "Bares de cocktails, música ao vivo e clubes — o melhor da vida noturna de Luanda num só lugar.",
        },
        {
          icon: "palette",
          name: "Arte e Cultura",
          description:
            "Galerias de arte contemporânea angolana, lojas de design e espaços culturais.",
        },
      ],
      howToGet:
        "No bairro das Lagoas, Luanda — acessível de táxi ou uber a partir de qualquer ponto da cidade (15-25 min do centro). Estacionamento disponível no complexo.",
      usefulInfo: {
        hours: "Restaurantes: 12h-24h. Bares: 18h-3h",
        entry: "Gratuito (consumo nos estabelecimentos)",
        bestSeason: "Todo o ano. Fins de semana mais animados.",
        climate: "Tropical, 24-30°C. Esplanadas cobertas para época das chuvas.",
      },
    },
    rating: 4.0,
    reviewCount: 612,
    tags: ["restaurantes", "gastronomia", "arte", "vida-noturna"],
    featured: false,
    createdAt: "2024-08-10",
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getFeaturedDestinations(): Destination[] {
  return destinations.filter((d) => d.featured);
}
