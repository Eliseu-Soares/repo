import type { Dish, Restaurant } from "@/types";

const C = "https://lh3.googleusercontent.com/aida-public/AB6AXuCj6ljP_P1Em8sDC6O-4-t60actSiab2sQ4nHjgrP8WplSbSS4Dkho7RDs8YGdNViR5cUAywTKzdrCe6bsty9wf9Y132aeDAqperWYA_DM8OmZ0r6ejl1pH87l2OQEbKBQ59O_4HgO9CD7ijCj4E3xHvn_PJsFvt_l61FFAHX9fVNWm5cysGm1JZROHX06xrpNEJdkKucxPdOJe70qAaJSD8vcl5mRc4KJbm6QhtBtRYFyaUfA_2BICew_5BDp0zObUdhgJajLumaoZ";
const H = "https://lh3.googleusercontent.com/aida-public/AB6AXuALvscUa-xXKkkLq3kceqvHAOTbZ_MAd00FAxDGdgkRzcYz4NprBi6pWKhQx3mCbS6w-eJ8YE4N5zbF6paagzKEOLgWjJT8YOceSShk70c4GoSH1CCsoAeoYqynSoEYDETiQ3U0s3KxMG8vjr7JQaIrpqP8LWKym5Qok0LyU5xY0RJS9E0KSmcnH9PUYXBFWnfeeh1NBAlN3Zc1F9v9VCtdg-5hWNBZlaP8GLb9lqrVV2LwIC1TfhxmtELFluRFeRFyaoO7KYGPaikF";
const N = "https://lh3.googleusercontent.com/aida-public/AB6AXuAyEU5BhywqtacvyDrn--XuSeTd4wj5ZhGCvXiFDvanh0-ZmoCKRRBpHaGyDRCz0L9la7_OvaYR_-DMmeCgj7Ve4jkj3OTmdyfTPF_HnD6UW6gzTuICKokwh7f5jPW5J9ZgRiHSiDxKriIXedKKfZWMgpkhAoxfW5lZtHA8hgyW6W8K8iIS6rRuZG2IPAhcS5-Tg8ML6hiGHvnXGPxMlMI7UGR1-swQL4h4a327rUuWyoPnremdmEHHslKj5Ea7N3Z0l-WEUI2iX";
const M = "https://lh3.googleusercontent.com/aida-public/AB6AXuAmC8tR-ZAo-zEmHl8-qzlcrdMGnseQuV6jcy_HRDNS5QTuxwwgE_lYaStxT74Rus67H18uXoQ1BshoDNisDQUY1uua-78vGI7HDyOb8_HgpWZuZuhj3FibSbeL3LSDHjpgS5XrwARjiT38BKCj75aWPNkzbfxGQfuSHRXMtyt11eh5FMVxNmbGsfw7fqGktBPwH2v6lv9-YzWaYJHryVrTDC7KEQHBFFvs4-nxR2bC5Kglj0fG31C8Q7KMbIN6mPd-IDzMcRNC38Fv";
const L = "https://lh3.googleusercontent.com/aida-public/AB6AXuAfvKAQE6xlKq__y9GCqTH6lelj14rbRO7agyGmAfHgJ5STdxktH8vGu2cYgnMYd_eNNODKGQLioRR7sR6_6dj-vpCjWvmkXEN1aWGOwZI6kRkFzXbYN1_9u2GrPea_-NX7j9rJMLAd3rBL077FzXlJ5kXZPlA1_vuGY3Q7fPxmkfNsOgzIynGlTSYMVTKyc-0cAo4CLdSpYTHjIvE6L0ku0ZWoHwGyM41-IXyPuy4X-FyZl8DAwbSiwyKYEfFKLUiem6R5zI974u6b";
const HU = "https://lh3.googleusercontent.com/aida-public/AB6AXuA85B915LEeSeR_KbUTM_Y52q80h0xc1f2E1VOvrvVEvYCjyte5kyFCwHA9-CYZMPEUuj1uBq_q8n732cjLzuu-mLGe6fI33_mbh5lUnOuLOjsxSiVkIGnD5Xsge-OPZPNY2xcHetDiIa6-T8rfdUFiBdpyUBclcymEME64tAJh-sMH5ROSyn7eS0G51bQwEwLdh4-psHMiQeXpfmsj66SGDt5ZUfvWvqI9U5FjFDLwey5xI1XmNi57aTj28eukLxmsp74gMMO0Jwix";

export const dishes: Dish[] = [
  {
    id: "1", slug: "muamba-galinha", name: "Muamba de Galinha",
    type: "Prato Principal", province: "luanda", provinceName: "Luanda", image: H, featured: true,
    description: "O prato mais emblemático de Angola — frango estufado em óleo de palma com quiabos e pimenta.",
    longDescription: "A Muamba de Galinha é considerada o prato nacional de Angola. O frango é marinado com alho, limão e pimenta malagueta antes de ser lentamente cozinhado em óleo de palma (azeite-de-dendê) com quiabos, beringela e pimenta-de-cheiro. O resultado é um molho espesso, profundamente aromático e de cor dourada intensa. Serve-se invariavelmente com funge de bombó e banana da terra cozida.",
    ingredients: ["Frango", "Óleo de palma", "Quiabos", "Beringela", "Pimenta malagueta", "Alho", "Cebola"],
  },
  {
    id: "2", slug: "calulu-peixe", name: "Calulu de Peixe",
    type: "Prato Principal", province: "luanda", provinceName: "Luanda", image: C,
    description: "Guisado de peixe seco e fresco com quiabos, folhas de batata-doce e azeite de palma.",
    longDescription: "O Calulu é uma das receitas mais antigas da cozinha angolana, com raízes nas comunidades costeiras de pescadores. Combina peixe seco (preferentemente cação ou carapau) com peixe fresco, quiabos, espinafres, folhas de batata-doce e muito óleo de palma. O prato cozinha lentamente até tudo se fundir num molho denso e perfumado. Pode também ser feito com carne de porco.",
    ingredients: ["Peixe seco", "Peixe fresco", "Quiabos", "Folhas de batata-doce", "Óleo de palma", "Tomate", "Cebola"],
  },
  {
    id: "3", slug: "funge-bombo", name: "Funge de Bombó",
    type: "Acompanhamento", province: "luanda", provinceName: "Luanda", image: M,
    description: "Papa de farinha de mandioca — acompanhamento obrigatório de quase todas as refeições angolanas.",
    longDescription: "O Funge (ou Fungye) é a base da alimentação angolana, equivalente ao arroz noutras culturas. Preparado com farinha de mandioca (bombó) ou milho, é cozido em água quente e mexido continuamente com uma colher de pau até atingir uma consistência elástica e homogénea. Serve-se em forma de bola ou montículo, sempre acompanhando carnes, peixes ou vegetais guisados.",
    ingredients: ["Farinha de mandioca", "Água", "Sal"],
  },
  {
    id: "4", slug: "mufete", name: "Mufete de Benguela",
    type: "Prato Principal", province: "benguela", provinceName: "Benguela", image: C, featured: true,
    description: "Peixe grelhado com feijão-macunde, banana da terra e azeite de palma — ex-líbris de Benguela.",
    longDescription: "O Mufete é a imagem da gastronomia costeira angolana. Peixe fresco — normalmente garoupa, cherne ou linguado — é grelhado directamente na brasa e servido acompanhado de feijão-macunde cozido, banana da terra assada e um fio generoso de óleo de palma. Em Benguela, come-se à beira-mar ao pôr-do-sol — uma experiência gastronómica e sensorial única.",
    ingredients: ["Peixe fresco", "Feijão-macunde", "Banana da terra", "Óleo de palma", "Limão", "Sal grosso"],
  },
  {
    id: "5", slug: "moamba-ginguba", name: "Moamba de Ginguba",
    type: "Prato Principal", province: "malanje", provinceName: "Malanje", image: M,
    description: "Estufado de carne com molho cremoso de amendoim torrado, pimenta e pimentão.",
    longDescription: "A Moamba de Ginguba é um prato do interior angolano que combina carne de frango ou de porco com um molho rico de amendoim torrado e moído (ginguba em Kimbundu). O molho é temperado com pimenta malagueta, cebola, tomate e pimentão, criando uma base densa e profundamente saborosa. É um dos pratos mais preparados nas cerimónias familiares e celebrações do planalto.",
    ingredients: ["Frango ou porco", "Amendoim torrado", "Pimenta malagueta", "Tomate", "Cebola", "Óleo de palma"],
  },
  {
    id: "6", slug: "quizaca", name: "Quizaca com Peixe Seco",
    type: "Prato Principal", province: "uige", provinceName: "Uíge", image: L,
    description: "Folhas de mandioca maceradas e guisadas com peixe seco, amendoim e óleo de palma.",
    longDescription: "A Quizaca (ou Kissaca) é preparada com folhas jovens de mandioca que são maceradas até ficarem tenras, depois cozidas lentamente com peixe seco, amendoim pilado e óleo de palma. É um prato rico em proteínas e de preparação morosa, tipicamente associado às regiões Norte e Centro de Angola. O sabor é terroso, levemente amargo e profundamente satisfatório.",
    ingredients: ["Folhas de mandioca", "Peixe seco", "Amendoim", "Óleo de palma", "Cebola", "Alho"],
  },
  {
    id: "7", slug: "pirao-peixe", name: "Pirão de Peixe do Atlântico",
    type: "Entrada", province: "namibe", provinceName: "Namibe", image: N,
    description: "Papa cremosa de farinha de milho cozida no caldo de peixe fresco do Atlântico Sul.",
    longDescription: "O Pirão de Peixe é típico das comunidades piscatórias do litoral angolano, especialmente no Namibe. O caldo rico do peixe cozido é engrossado com farinha de milho até atingir uma consistência cremosa. Serve-se como entrada ou prato principal com o peixe desfiado por cima, temperado com limão e coentros. É simultaneamente reconfortante e intensamente saboroso.",
    ingredients: ["Peixe fresco", "Farinha de milho", "Coentros", "Limão", "Alho", "Sal"],
  },
  {
    id: "8", slug: "oshifima", name: "Oshifima com Peixe Seco",
    type: "Acompanhamento", province: "cunene", provinceName: "Cunene", image: H,
    description: "Papa de milho branco muito espessa, base da dieta Ovambo, servida com peixe seco.",
    longDescription: "O Oshifima é o alimento central da cultura Ovambo no Sul de Angola. Feito com farinha de sorgo ou milho branco, é cozido até ficar extremamente espesso — quase sólido — e servido em bolinhas. Come-se com as mãos, mergulhando pedaços no peixe seco desfiado ou no caldo de carne de cabrito. É o símbolo da resistência e da identidade do povo do Cunene.",
    ingredients: ["Farinha de sorgo", "Água", "Sal", "Peixe seco"],
  },
  {
    id: "9", slug: "caldo-mancarra", name: "Caldo de Mancarra",
    type: "Prato Principal", province: "kwanza-norte", provinceName: "Kwanza Norte", image: M,
    description: "Sopa cremosa de amendoim com frango, pimento e especiarias do interior angolano.",
    longDescription: "O Caldo de Mancarra (amendoim em Kimbundu) é uma sopa rica e nutritiva muito apreciada no centro e norte de Angola. O frango é cozido com cebola, alho, tomate e pimento, depois engrossado com amendoim moído até criar um caldo cremoso de cor âmbar. Serve-se com arroz ou funge e é considerado prato de festa em muitas comunidades.",
    ingredients: ["Frango", "Amendoim moído", "Tomate", "Pimento", "Cebola", "Coentros", "Azeite"],
  },
  {
    id: "10", slug: "lagosta-namibe", name: "Lagosta Grelhada do Namibe",
    type: "Prato Principal", province: "namibe", provinceName: "Namibe", image: N, featured: true,
    description: "Lagosta do Atlântico Sul grelhada com manteiga, alho e limão — o tesouro gastronómico do Namibe.",
    longDescription: "As águas frias do Atlântico Sul ao largo do Namibe são um dos melhores habitats do mundo para a lagosta. Apanhada pelos pescadores da costa e grelhada na brasa com manteiga, alho e limão, é servida inteira acompanhada de arroz de tomate ou batata frita. A sua carne é firme, doce e extraordinariamente saborosa — uma experiência gastronómica que justifica por si só a viagem ao Namibe.",
    ingredients: ["Lagosta", "Manteiga", "Alho", "Limão", "Sal grosso", "Coentros"],
  },
];

export const restaurants: Restaurant[] = [
  { id: "1", name: "Sagrada Esperança", province: "luanda", provinceName: "Luanda", description: "Cozinha angolana contemporânea num ambiente sofisticado com vista para a Baía de Luanda.", specialty: "Muamba de Galinha de autor", priceRange: "€€€", image: L },
  { id: "2", name: "Casa dos Frescos", province: "benguela", provinceName: "Benguela", description: "O melhor Mufete da cidade, servido à beira-mar com peixe apanhado diariamente.", specialty: "Mufete tradicional", priceRange: "€€", image: C },
  { id: "3", name: "Tasca do Namibe", province: "namibe", provinceName: "Namibe", description: "Lagosta e peixe do Atlântico Sul numa tasca familiar com décadas de história.", specialty: "Lagosta grelhada", priceRange: "€€", image: N },
  { id: "4", name: "O Petisco", province: "luanda", provinceName: "Luanda", description: "Restaurante popular nos musseques de Luanda com as receitas mais autênticas da cidade.", specialty: "Calulu de peixe", priceRange: "€", image: L },
  { id: "5", name: "Cantina do Planalto", province: "huambo", provinceName: "Huambo", description: "Sabores do planalto central numa cantina familiar com ingredientes da época.", specialty: "Caldo de ginguba", priceRange: "€", image: HU },
  { id: "6", name: "Solar do Malanje", province: "malanje", provinceName: "Malanje", description: "Referência gastronómica do interior angolano, especialista em pratos com amendoim.", specialty: "Moamba de ginguba", priceRange: "€", image: M },
];

export interface GastronomicRouteStep {
  step: number;
  province: string;
  provinceName: string;
  dish: string;
  description: string;
}

export const gastronomicRoute: GastronomicRouteStep[] = [
  { step: 1, province: "zaire", provinceName: "Zaire", dish: "Kwanga com Pondu", description: "Comece no Norte com Kwanga — pão de mandioca fermentada — acompanhada de Pondu, folhas de mandioca com peixe seco. A cozinha do antigo Reino do Kongo." },
  { step: 2, province: "luanda", provinceName: "Luanda", dish: "Muamba de Galinha", description: "Na capital, a Muamba de Galinha é obrigatória. Experimente também o Calulu de peixe e o Funge de Bombó nos restaurantes tradicionais dos musseques." },
  { step: 3, province: "benguela", provinceName: "Benguela", dish: "Mufete", description: "Na costa de Benguela, o Mufete aguarda: peixe grelhado na brasa, feijão-macunde e banana da terra com óleo de palma. Coma com os pés na areia." },
  { step: 4, province: "huila", provinceName: "Huíla", dish: "Caldo de Cabrito", description: "No planalto da Huíla, o clima mais fresco pede um reconfortante Caldo de Cabrito com legumes da época e funge de milho. A cozinha do sul tem sabor próprio." },
  { step: 5, province: "namibe", provinceName: "Namibe", dish: "Lagosta Grelhada", description: "Termine no Namibe com a Lagosta Grelhada do Atlântico Sul — o culminar perfeito de uma rota gastronómica de norte a sul de Angola." },
];

export function getDishBySlug(slug: string): Dish | undefined {
  return dishes.find((d) => d.slug === slug);
}

export function getFeaturedDishes(): Dish[] {
  return dishes.filter((d) => d.featured);
}
