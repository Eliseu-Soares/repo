import type { Event } from "@/types";

export const events: Event[] = [
  {
    id: "1",
    slug: "carnaval-luanda",
    title: "Carnaval de Luanda",
    description:
      "A maior manifestação cultural do país, onde o folclore e a cor tomam conta da baía de Luanda num desfile épico.",
    province: "luanda",
    provinceName: "Luanda",
    municipality: "Luanda",
    location: "Avenida Marginal de Luanda",
    category: "Cultural",
    startDate: "2026-02-24",
    endDate: "2026-02-26",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfvKAQE6xlKq__y9GCqTH6lelj14rbRO7agyGmAfHgJ5STdxktH8vGu2cYgnMYd_eNNODKGQLioRR7sR6_6dj-vpCjWvmkXEN1aWGOwZI6kRkFzXbYN1_9u2GrPea_-NX7j9rJMLAd3rBL077FzXlJ5kXZPlA1_vuGY3Q7fPxmkfNsOgzIynGlTSYMVTKyc-0cAo4CLdSpYTHjIvE6L0ku0ZWoHwGyM41-IXyPuy4X-FyZl8DAwbSiwyKYEfFKLUiem6R5zI974u6b",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfvKAQE6xlKq__y9GCqTH6lelj14rbRO7agyGmAfHgJ5STdxktH8vGu2cYgnMYd_eNNODKGQLioRR7sR6_6dj-vpCjWvmkXEN1aWGOwZI6kRkFzXbYN1_9u2GrPea_-NX7j9rJMLAd3rBL077FzXlJ5kXZPlA1_vuGY3Q7fPxmkfNsOgzIynGlTSYMVTKyc-0cAo4CLdSpYTHjIvE6L0ku0ZWoHwGyM41-IXyPuy4X-FyZl8DAwbSiwyKYEfFKLUiem6R5zI974u6b",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCj6ljP_P1Em8sDC6O-4-t60actSiab2sQ4nHjgrP8WplSbSS4Dkho7RDs8YGdNViR5cUAywTKzdrCe6bsty9wf9Y132aeDAqperWYA_DM8OmZ0r6ejl1pH87l2OQEbKBQ59O_4HgO9CD7ijCj4E3xHvn_PJsFvt_l61FFAHX9fVNWm5cysGm1JZROHX06xrpNEJdkKucxPdOJe70qAaJSD8vcl5mRc4KJbm6QhtBtRYFyaUfA_2BICew_5BDp0zObUdhgJajLumaoZ",
    ],
    coordinates: { lat: -8.84, lng: 13.23 },
    schedule: "09:00–23:00",
    free: true,
    featured: true,
  },
  {
    id: "2",
    slug: "festival-kizomba",
    title: "Festival da Kizomba",
    description:
      "Um encontro internacional de dança à beira-mar com os melhores mestres do mundo.",
    province: "luanda",
    provinceName: "Luanda",
    municipality: "Cabo Ledo",
    location: "Praia do Cabo Ledo",
    category: "Musical",
    startDate: "2026-05-12",
    endDate: "2026-05-15",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCj6ljP_P1Em8sDC6O-4-t60actSiab2sQ4nHjgrP8WplSbSS4Dkho7RDs8YGdNViR5cUAywTKzdrCe6bsty9wf9Y132aeDAqperWYA_DM8OmZ0r6ejl1pH87l2OQEbKBQ59O_4HgO9CD7ijCj4E3xHvn_PJsFvt_l61FFAHX9fVNWm5cysGm1JZROHX06xrpNEJdkKucxPdOJe70qAaJSD8vcl5mRc4KJbm6QhtBtRYFyaUfA_2BICew_5BDp0zObUdhgJajLumaoZ",
    coordinates: { lat: -9.65, lng: 13.18 },
    schedule: "18:00–04:00",
    entry: "Bilhete a partir de 3.000 AOA",
    free: false,
    featured: true,
  },
  {
    id: "3",
    slug: "festival-gastronomico-benguela",
    title: "Festival Gastronómico de Benguela",
    description:
      "Uma celebração dos sabores da costa angolana com chefs de todo o país.",
    province: "benguela",
    provinceName: "Benguela",
    municipality: "Benguela",
    location: "Praça do Município de Benguela",
    category: "Gastronómico",
    startDate: "2026-06-15",
    endDate: "2026-06-18",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALvscUa-xXKkkLq3kceqvHAOTbZ_MAd00FAxDGdgkRzcYz4NprBi6pWKhQx3mCbS6w-eJ8YE4N5zbF6paagzKEOLgWjJT8YOceSShk70c4GoSH1CCsoAeoYqynSoEYDETiQ3U0s3KxMG8vjr7JQaIrpqP8LWKym5Qok0LyU5xY0RJS9E0KSmcnH9PUYXBFWnfeeh1NBAlN3Zc1F9v9VCtdg-5hWNBZlaP8GLb9lqrVV2LwIC1TfhxmtELFluRFeRFyaoO7KYGPaikF",
    coordinates: { lat: -12.58, lng: 13.4 },
    schedule: "10:00–22:00",
    entry: "1.000 AOA por dia",
    free: false,
    featured: false,
  },
  {
    id: "10",
    slug: "festival-arte-umbundu",
    title: "Festival de Arte e Cultura Umbundu",
    description:
      "Celebração da mais rica herança cultural do planalto central angolano — música, dança, escultura e gastronomia Umbundu.",
    province: "huambo",
    provinceName: "Huambo",
    municipality: "Huambo",
    location: "Largo da Independência, Huambo",
    category: "Festival",
    startDate: "2026-07-02",
    endDate: "2026-07-05",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA85B915LEeSeR_KbUTM_Y52q80h0xc1f2E1VOvrvVEvYCjyte5kyFCwHA9-CYZMPEUuj1uBq_q8n732cjLzuu-mLGe6fI33_mbh5lUnOuLOjsxSiVkIGnD5Xsge-OPZPNY2xcHetDiIa6-T8rfdUFiBdpyUBclcymEME64tAJh-sMH5ROSyn7eS0G51bQwEwLdh4-psHMiQeXpfmsj66SGDt5ZUfvWvqI9U5FjFDLwey5xI1XmNi57aTj28eukLxmsp74gMMO0Jwix",
    coordinates: { lat: -12.77, lng: 15.73 },
    schedule: "09:00–21:00",
    free: true,
    featured: true,
  },
  {
    id: "11",
    slug: "regata-ilha-luanda",
    title: "Regata da Ilha de Luanda",
    description:
      "Competição de vela e canoagem ao longo da Ilha de Luanda, com prémios para campeões nacionais.",
    province: "luanda",
    provinceName: "Luanda",
    municipality: "Luanda",
    location: "Cais da Ilha de Luanda",
    category: "Desportivo",
    startDate: "2026-07-11",
    endDate: "2026-07-12",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDFVzkjAF5MjyB-UKCmkh9hM8xyUV9iX7EOZM2-apfjPVsTGxxV7jQ4MptF779tUuaJ3V4Y24cEjL0hfwRJKDc7pcXHoY9yc3ToMOYKXj9HWzKR2iIXBktqf1llkVz5XyA8ef_CiNMgWs-m_bXG1Fv_LyhMg06ycb85ZSvjSDa0-E-VUOBrq0D_2Gm50H9IXTWeK8YB7PdA17IGdvAWLd7whoNloRoYQc9pI30mgZJHu76OLCWKHL4UAMchgbAIGGPqjIcvGo9_Rex",
    coordinates: { lat: -8.9, lng: 13.22 },
    schedule: "07:00–18:00",
    free: true,
    featured: false,
  },
  {
    id: "12",
    slug: "feira-artesanato-namibe",
    title: "Feira do Artesanato do Namibe",
    description:
      "Encontro de artesãos do sul de Angola com exposição e venda de cerâmica, madeira esculpida e têxteis tradicionais.",
    province: "namibe",
    provinceName: "Namibe",
    municipality: "Moçâmedes",
    location: "Jardim Municipal de Moçâmedes",
    category: "Cultural",
    startDate: "2026-07-18",
    endDate: "2026-07-20",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyEU5BhywqtacvyDrn--XuSeTd4wj5ZhGCvXiFDvanh0-ZmoCKRRBpHaGyDRCz0L9la7_OvaYR_-DMmeCgj7Ve4jkj3OTmdyfTPF_HnD6UW6gzTuICKokwh7f5jPW5J9ZgRiHSiDxKriIXedKKfZWMgpkhAoxfW5lZtHA8hgyW6W8K8iIS6rRuZG2IPAhcS5-Tg8ML6hiGHvnXGPxMlMI7UGR1-swQL4h4a327rUuWyoPnremdmEHHslKj5Ea7N3Z0l-WEUI2iX",
    coordinates: { lat: -15.2, lng: 12.15 },
    schedule: "08:00–19:00",
    free: true,
    featured: false,
  },
  {
    id: "4",
    slug: "festas-nossa-senhora-monte",
    title: "Festas da Nossa Senhora do Monte",
    description:
      "Celebrações religiosas e culturais que unem tradição e modernidade no Sul de Angola.",
    province: "huila",
    provinceName: "Huíla",
    municipality: "Lubango",
    location: "Monte da Muxima, Lubango",
    category: "Cultural",
    startDate: "2026-08-05",
    endDate: "2026-08-08",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALvscUa-xXKkkLq3kceqvHAOTbZ_MAd00FAxDGdgkRzcYz4NprBi6pWKhQx3mCbS6w-eJ8YE4N5zbF6paagzKEOLgWjJT8YOceSShk70c4GoSH1CCsoAeoYqynSoEYDETiQ3U0s3KxMG8vjr7JQaIrpqP8LWKym5Qok0LyU5xY0RJS9E0KSmcnH9PUYXBFWnfeeh1NBAlN3Zc1F9v9VCtdg-5hWNBZlaP8GLb9lqrVV2LwIC1TfhxmtELFluRFeRFyaoO7KYGPaikF",
    coordinates: { lat: -14.92, lng: 13.5 },
    schedule: "08:00–22:00",
    free: true,
    featured: false,
  },
  {
    id: "5",
    slug: "regata-kwanza",
    title: "Regata de Canoas do Rio Kwanza",
    description:
      "Uma competição ancestral de piroga que celebra a relação histórica do povo angolano com o maior rio do país.",
    province: "kwanza-norte",
    provinceName: "Kwanza Norte",
    municipality: "Dondo",
    location: "Margem do Rio Kwanza, Dondo",
    category: "Desportivo",
    startDate: "2026-08-22",
    endDate: "2026-08-23",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDFVzkjAF5MjyB-UKCmkh9hM8xyUV9iX7EOZM2-apfjPVsTGxxV7jQ4MptF779tUuaJ3V4Y24cEjL0hfwRJKDc7pcXHoY9yc3ToMOYKXj9HWzKR2iIXBktqf1llkVz5XyA8ef_CiNMgWs-m_bXG1Fv_LyhMg06ycb85ZSvjSDa0-E-VUOBrq0D_2Gm50H9IXTWeK8YB7PdA17IGdvAWLd7whoNloRoYQc9pI30mgZJHu76OLCWKHL4UAMchgbAIGGPqjIcvGo9_Rex",
    coordinates: { lat: -9.69, lng: 14.43 },
    schedule: "07:00–18:00",
    free: true,
    featured: false,
  },
  {
    id: "6",
    slug: "festival-musica-angolana",
    title: "Festival Nacional de Música Angolana",
    description:
      "Uma celebração dos ritmos que definem Angola — do Semba ao Kuduro — com os maiores nomes da música nacional.",
    province: "luanda",
    provinceName: "Luanda",
    municipality: "Luanda",
    location: "Anfiteatro da Cidadela, Luanda",
    category: "Musical",
    startDate: "2026-09-08",
    endDate: "2026-09-10",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDFVzkjAF5MjyB-UKCmkh9hM8xyUV9iX7EOZM2-apfjPVsTGxxV7jQ4MptF779tUuaJ3V4Y24cEjL0hfwRJKDc7pcXHoY9yc3ToMOYKXj9HWzKR2iIXBktqf1llkVz5XyA8ef_CiNMgWs-m_bXG1Fv_LyhMg06ycb85ZSvjSDa0-E-VUOBrq0D_2Gm50H9IXTWeK8YB7PdA17IGdvAWLd7whoNloRoYQc9pI30mgZJHu76OLCWKHL4UAMchgbAIGGPqjIcvGo9_Rex",
    coordinates: { lat: -8.81, lng: 13.24 },
    schedule: "17:00–02:00",
    entry: "Bilhete a partir de 5.000 AOA",
    free: false,
    featured: true,
  },
  {
    id: "7",
    slug: "festival-cinema-luanda",
    title: "Festival de Cinema de Luanda",
    description:
      "Uma semana de cinema africano e internacional, com estreias, masterclasses e debates com realizadores angolanos.",
    province: "luanda",
    provinceName: "Luanda",
    municipality: "Luanda",
    location: "Cine Karl Marx, Luanda",
    category: "Cultural",
    startDate: "2026-10-18",
    endDate: "2026-10-25",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyEU5BhywqtacvyDrn--XuSeTd4wj5ZhGCvXiFDvanh0-ZmoCKRJHRRBpHaGyDRCz0L9la7_OvaYR_-DMmeCgj7Ve4jkj3OTmdyfTPF_HnD6UW6gzTuICKokwh7f5jPW5J9ZgRiHSiDxKriIXedKKfZWMgpkhAoxfW5lZtHA8hgyW6W8K8iIS6rRuZG2IPAhcS5-Tg8ML6hiGHvnXGPxMlMI7UGR1-swQL4h4a327rUuWyoPnremdmEHHslKj5Ea7N3Z0l-WEUI2iX",
    coordinates: { lat: -8.82, lng: 13.23 },
    schedule: "10:00–22:00",
    entry: "500 AOA por sessão",
    free: false,
    featured: false,
  },
  {
    id: "8",
    slug: "independencia-angola",
    title: "Dia da Independência de Angola",
    description:
      "Comemorações oficiais do aniversário da independência com desfiles, cultura e fogo de artifício sobre a baía.",
    province: "luanda",
    provinceName: "Luanda",
    municipality: "Luanda",
    location: "Praça da República, Luanda",
    category: "Cultural",
    startDate: "2026-11-11",
    endDate: "2026-11-11",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyEU5BhywqtacvyDrn--XuSeTd4wj5ZhGCvXiFDvanh0-ZmoCKRJHRRBpHaGyDRCz0L9la7_OvaYR_-DMmeCgj7Ve4jkj3OTmdyfTPF_HnD6UW6gzTuICKokwh7f5jPW5J9ZgRiHSiDxKriIXedKKfZWMgpkhAoxfW5lZtHA8hgyW6W8K8iIS6rRuZG2IPAhcS5-Tg8ML6hiGHvnXGPxMlMI7UGR1-swQL4h4a327rUuWyoPnremdmEHHslKj5Ea7N3Z0l-WEUI2iX",
    coordinates: { lat: -8.83, lng: 13.24 },
    schedule: "Todo o dia",
    free: true,
    featured: false,
  },
  {
    id: "9",
    slug: "festival-verao-benguela",
    title: "Festival de Verão em Benguela",
    description:
      "O maior festival de praia do país, com música ao vivo, gastronomia local e actividades aquáticas.",
    province: "benguela",
    provinceName: "Benguela",
    municipality: "Benguela",
    location: "Praia da Caotinha, Benguela",
    category: "Festival",
    startDate: "2026-12-20",
    endDate: "2026-12-22",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCj6ljP_P1Em8sDC6O-4-t60actSiab2sQ4nHjgrP8WplSbSS4Dkho7RDs8YGdNViR5cUAywTKzdrCe6bsty9wf9Y132aeDAqperWYA_DM8OmZ0r6ejl1pH87l2OQEbKBQ59O_4HgO9CD7ijCj4E3xHvn_PJsFvt_l61FFAHX9fVNWm5cysGm1JZROHX06xrpNEJdkKucxPdOJe70qAaJSD8vcl5mRc4KJbm6QhtBtRYFyaUfA_2BICew_5BDp0zObUdhgJajLumaoZ",
    coordinates: { lat: -12.57, lng: 13.38 },
    schedule: "12:00–04:00",
    entry: "2.000 AOA por dia",
    free: false,
    featured: true,
  },
];

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug);
}

export function getFeaturedEvents(): Event[] {
  return events.filter((e) => e.featured);
}

export function getUpcomingEvents(from: Date, days = 30): Event[] {
  const until = new Date(from);
  until.setDate(until.getDate() + days);
  return events
    .filter((e) => {
      const start = new Date(e.startDate);
      return start >= from && start <= until;
    })
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
}
