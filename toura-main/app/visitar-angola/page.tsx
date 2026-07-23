import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const locale = await getLocale();
  return locale === "en"
    ? {
        title: "Visit Angola — Travel Guide | Toura",
        description: "Everything you need to know before travelling to Angola: visas, climate, currency, health, transport and practical tips.",
      }
    : {
        title: "Visitar Angola — Guia Prático | Toura",
        description: "Tudo o que precisa de saber antes de viajar para Angola: vistos, clima, moeda, saúde, transporte e dicas práticas.",
      };
}

const CONTENT = {
  pt: {
    sections: [
      {
        id: "vistos",
        icon: "travel_explore",
        title: "Vistos e Entrada",
        body: `A maioria dos cidadãos estrangeiros precisa de visto para entrar em Angola. Os vistos podem ser obtidos nas embaixadas e consulados angolanos no exterior, ou através do portal online do Serviço de Migração e Estrangeiros (SME).

**Visto Turístico:** Válido para estadas até 30 dias, renovável uma vez. Requer passaporte com validade mínima de 6 meses, bilhete de ida e volta, reserva de hotel e prova de fundos suficientes.

**Visto Múltiplas Entradas:** Disponível para viajantes frequentes. Válido por 12 meses com estadas de até 30 dias por visita.

**E-Visa:** Angola dispõe de um sistema de e-visa para cidadãos de mais de 60 países. O pedido é feito online e o visto é emitido por email em 5 dias úteis.

**Países isentos de visto:** Cidadãos da CPLP (Brasil, Portugal, Cabo Verde, São Tomé e Príncipe, Guiné-Bissau, Moçambique, Timor-Leste) beneficiam de entrada facilitada. Confirme sempre a situação actual com a embaixada.`,
        tip: "Solicite o visto com pelo menos 3 semanas de antecedência. Tenha sempre o visto original em papel — cópias não são aceites na entrada.",
      },
      {
        id: "clima",
        icon: "wb_sunny",
        title: "Clima e Melhor Época para Visitar",
        body: `Angola tem dois grandes períodos climáticos:

**Época Chuvosa (Outubro a Abril):** Temperaturas altas (28–34°C no litoral), humidade elevada e chuvas frequentes, especialmente no Norte e Centro. A natureza está luxuriante e as quedas de água (como Kalandula) estão no seu máximo.

**Época Seca (Maio a Setembro):** Temperaturas mais amenas (18–25°C), céu limpo e sem chuva. Ideal para safari, trekking e turismo de praia. O Cacimbo (neblina matinal característica de Luanda e arredores) ocorre neste período.

**Regiões e clima:**
- **Luanda e Litoral:** Tropical, com menos variação. Melhor de Junho a Setembro.
- **Planalto Central (Huambo, Bié):** Clima temperado e agradável todo o ano.
- **Sul e Namibe:** Semiárido. Visitar de Maio a Outubro para o deserto.
- **Nordeste (Lunda):** Quente e húmido. Época seca preferível para viagem.`,
        tip: "A melhor época geral é Junho a Setembro — céu limpo, temperaturas amenas e estradas praticáveis para safari.",
      },
      {
        id: "moeda",
        icon: "payments",
        title: "Moeda e Finanças",
        body: `A moeda de Angola é o **Kwanza (AOA)**.

**Câmbio:** O câmbio oficial é gerido pelo Banco Nacional de Angola (BNA). Câmbio disponível em bancos, aeroportos e casas de câmbio licenciadas. Evite câmbio informal.

**Cartões de Crédito:** Aceites nos hotéis de 4-5 estrelas, restaurantes de topo e grandes centros comerciais em Luanda. Fora da capital, prefira dinheiro. Visa e Mastercard são os mais aceites.

**Multibanco:** Há caixas ATM nas cidades principais. Levantamentos limitados por transacção (habitualmente 50.000–100.000 AOA). Avise o seu banco antes de viajar.

**Custos médios:**
- Refeição num restaurante local: 1.500–5.000 AOA
- Refeição num restaurante de topo: 15.000–40.000 AOA
- Hotel económico: 15.000–30.000 AOA/noite
- Hotel de 4 estrelas: 80.000–200.000 AOA/noite
- Táxi em Luanda (10km): 3.000–8.000 AOA`,
        tip: "Leve uma quantidade razoável de kwanzas em dinheiro, especialmente se visitar o interior. O USD é também aceite em muitos estabelecimentos turísticos.",
      },
      {
        id: "saude",
        icon: "health_and_safety",
        title: "Saúde e Segurança",
        body: `**Vacinas obrigatórias:** Febre Amarela — vacinação obrigatória para todos os visitantes. O certificado de vacina deve ser apresentado na chegada.

**Vacinas recomendadas:** Hepatite A e B, Tétano, Febre Tifóide, Meningite.

**Malária:** Angola é país endémico de malária. Consulte o seu médico sobre profilaxia adequada antes de viajar. Use repelente, manga comprida ao anoitecer e redes mosquiteiras.

**Água:** Beba apenas água engarrafada ou filtrada. Evite gelo em locais sem condições de higiene verificadas.

**Serviços de saúde:** Em Luanda há hospitais privados de qualidade (Clínica Girassol, Hospital do Bairro Azul, CLIGEST). No interior, os recursos são mais limitados. Seguro de saúde com cobertura de evacuação aérea é fortemente recomendado.

**Segurança geral:** Luanda é uma cidade segura para turistas em geral. Evite mostrar objectos de valor (câmara fotográfica, telemóvel topo de gama) em locais movimentados. Em viagem pelo interior, informe-se sobre as condições de segurança locais.`,
        tip: "Contrate seguro de viagem com cobertura médica e evacuação aérea. É um investimento essencial para Angola.",
      },
      {
        id: "transporte",
        icon: "directions_car",
        title: "Como Chegar e Mover-se",
        body: `**Por Avião:** O Aeroporto Internacional 4 de Fevereiro em Luanda (LAD) é a principal porta de entrada. Voos directos de Lisboa (TAAG, TAP), Dubai (Emirates), Addis Abeba (Ethiopian), Joanesburgo (South African) e outras cidades africanas.

**Táxi e Ride-hailing:** Em Luanda, use o Yango (aplicação de ride-hailing popular e segura). Táxis convencionais existem mas negocie sempre o preço antes.

**Voos internos:** TAAG e Fly Angola operam rotas regulares para as principais cidades (Lubango, Benguela, Huambo, Malanje, Cabinda). Recomendamos reservar com antecedência.

**Estrada:** A rede rodoviária principal está em bom estado. Para o interior, prefira veículo 4x4, especialmente em época chuvosa. Informe-se sobre o estado das estradas no destino específico.

**Aluguer de carro:** Disponível em Luanda através de Avis, Europcar e operadores locais. Carta de condução internacional recomendada.`,
        tip: "O trânsito em Luanda pode ser muito intenso, especialmente nas horas de ponta (7h–9h e 17h–19h). Planeie as deslocações com antecedência.",
      },
      {
        id: "cultura",
        icon: "diversity_3",
        title: "Cultura e Etiqueta",
        body: `Angola é um país de grande diversidade cultural com mais de 10 grupos étnicos principais. Conhecer alguns aspectos culturais facilitará a sua experiência:

**Cumprimentos:** Os angolanos são hospitaleiros e calorosos. O aperto de mão é o cumprimento formal mais comum. Em ambientes informais, amigos próximos saúdam-se com dois beijos (costume de influência portuguesa).

**Vestuário:** Veste-se de forma conservadora em visitas a igrejas, aldeias rurais e cerimónias tradicionais. Em Luanda, o vestuário é moderno e ocidental.

**Fotografia:** Peça sempre autorização antes de fotografar pessoas. Evite fotografar instalações militares, governamentais ou o aeroporto.

**Religião:** A maioria da população é cristã (Católica e Protestante). Há também práticas de religiões tradicionais africanas. Respeite os locais de culto.

**Língua:** O Português é a língua oficial. São faladas também o Kimbundu, Kikongo, Umbundu e outras línguas bantu. Aprender algumas palavras em Kimbundu (obrigado: "nzêtu"; bom dia: "mualende") é sempre bem recebido.`,
        tip: "Os angolanos apreciam muito quando os visitantes mostram interesse na sua cultura e história. Faça perguntas, demonstre curiosidade — será bem recebido.",
      },
    ],
    faq: [
      { q: "Preciso de visto para Angola?", a: "A maioria dos estrangeiros precisa de visto. Cidadãos da CPLP têm condições facilitadas. Verifique sempre na embaixada angolana do seu país." },
      { q: "É seguro viajar para Angola?", a: "Angola é genericamente segura para turistas. Luanda exige as mesmas precauções de qualquer grande cidade africana. Evite mostrar objectos de valor e utilize transportes de confiança." },
      { q: "Que moeda devo levar?", a: "O Kwanza angolano (AOA). USD e EUR são também aceites em muitos hotéis e estabelecimentos turísticos. Troque moeda em bancos ou casas de câmbio oficiais." },
      { q: "É necessária a vacina contra a febre amarela?", a: "Sim, é obrigatória. O certificado de vacinação internacional deve ser apresentado na chegada a Angola." },
      { q: "Que língua se fala em Angola?", a: "Português é a língua oficial. Inglês tem penetração crescente no sector turístico e empresarial de Luanda. No interior, línguas bantu como Kimbundu, Umbundu e Kikongo são amplamente faladas." },
      { q: "Posso beber água da torneira?", a: "Não é recomendado. Beba sempre água engarrafada ou use purificador. Água engarrafada está disponível em todo o país a preços acessíveis." },
      { q: "Qual é a diferença horária em Angola?", a: "Angola segue o WAT (West Africa Time), UTC+1. Não há horário de verão." },
      { q: "Como funciona a internet e telemóvel?", a: "Angola tem cobertura 4G nas principais cidades. Compre um cartão SIM local (Unitel ou Movicel) no aeroporto ou em lojas autorizadas — é mais económico que o roaming." },
    ],
  },
  en: {
    sections: [
      {
        id: "vistos",
        icon: "travel_explore",
        title: "Visas & Entry Requirements",
        body: `Most foreign nationals require a visa to enter Angola. Visas can be obtained at Angolan embassies and consulates abroad, or through the online portal of the Migration and Foreigners Service (SME).

**Tourist Visa:** Valid for stays up to 30 days, renewable once. Requires a passport valid for at least 6 months, return ticket, hotel reservation and proof of sufficient funds.

**Multiple Entry Visa:** Available for frequent travellers. Valid for 12 months with stays of up to 30 days per visit.

**E-Visa:** Angola has an e-visa system for citizens of over 60 countries. Applications are made online and the visa is issued by email within 5 working days.

**Visa-free entry:** Citizens of CPLP countries (Brazil, Portugal, Cape Verde, São Tomé and Príncipe, Guinea-Bissau, Mozambique, East Timor) benefit from facilitated entry. Always confirm the current situation with the embassy.`,
        tip: "Apply for your visa at least 3 weeks in advance. Always carry the original paper visa — copies are not accepted at entry.",
      },
      {
        id: "clima",
        icon: "wb_sunny",
        title: "Climate & Best Time to Visit",
        body: `Angola has two main climatic periods:

**Rainy Season (October to April):** High temperatures (28–34°C on the coast), high humidity and frequent rain, especially in the North and Centre. Nature is lush and waterfalls (like Kalandula) are at their best.

**Dry Season (May to September):** Milder temperatures (18–25°C), clear skies and no rain. Ideal for safari, trekking and beach tourism. The Cacimbo (characteristic morning mist around Luanda) occurs during this period.

**Regions and climate:**
- **Luanda & Coast:** Tropical, with less variation. Best from June to September.
- **Central Plateau (Huambo, Bié):** Temperate and pleasant year-round.
- **South & Namibe:** Semi-arid. Visit May to October for the desert.
- **Northeast (Lunda):** Hot and humid. Dry season preferred for travel.`,
        tip: "The best general season is June to September — clear skies, mild temperatures and passable roads for safari.",
      },
      {
        id: "moeda",
        icon: "payments",
        title: "Currency & Finances",
        body: `Angola's currency is the **Kwanza (AOA)**.

**Exchange:** The official rate is managed by the National Bank of Angola (BNA). Exchange available at banks, airports and licensed exchange offices. Avoid informal currency exchange.

**Credit Cards:** Accepted at 4–5 star hotels, top restaurants and major shopping centres in Luanda. Outside the capital, prefer cash. Visa and Mastercard are most widely accepted.

**ATMs:** Available in major cities. Withdrawals are limited per transaction (typically 50,000–100,000 AOA). Notify your bank before travelling.

**Average costs:**
- Meal at a local restaurant: 1,500–5,000 AOA
- Meal at a top restaurant: 15,000–40,000 AOA
- Budget hotel: 15,000–30,000 AOA/night
- 4-star hotel: 80,000–200,000 AOA/night
- Taxi in Luanda (10km): 3,000–8,000 AOA`,
        tip: "Carry a reasonable amount of kwanzas in cash, especially if visiting the interior. USD is also accepted at many tourist establishments.",
      },
      {
        id: "saude",
        icon: "health_and_safety",
        title: "Health & Safety",
        body: `**Mandatory vaccines:** Yellow Fever — vaccination is mandatory for all visitors. The vaccination certificate must be presented on arrival.

**Recommended vaccines:** Hepatitis A and B, Tetanus, Typhoid Fever, Meningitis.

**Malaria:** Angola is an endemic malaria country. Consult your doctor about appropriate prophylaxis before travelling. Use repellent, long sleeves at dusk and mosquito nets.

**Water:** Drink only bottled or filtered water. Avoid ice in places without verified hygiene standards.

**Healthcare:** Luanda has quality private hospitals (Clínica Girassol, Hospital do Bairro Azul, CLIGEST). In the interior, resources are more limited. Health insurance with air evacuation cover is strongly recommended.

**General safety:** Luanda is generally safe for tourists. Avoid displaying valuables (camera, high-end mobile phone) in busy areas. When travelling inland, check local security conditions.`,
        tip: "Take out travel insurance with medical cover and air evacuation. It is an essential investment for Angola.",
      },
      {
        id: "transporte",
        icon: "directions_car",
        title: "Getting There & Getting Around",
        body: `**By Air:** Luanda's 4 de Fevereiro International Airport (LAD) is the main gateway. Direct flights from Lisbon (TAAG, TAP), Dubai (Emirates), Addis Ababa (Ethiopian), Johannesburg (South African) and other African cities.

**Taxi & Ride-hailing:** In Luanda, use Yango (a popular and safe ride-hailing app). Conventional taxis exist but always negotiate the price beforehand.

**Domestic flights:** TAAG and Fly Angola operate regular routes to major cities (Lubango, Benguela, Huambo, Malanje, Cabinda). We recommend booking in advance.

**Road:** The main road network is in good condition. For the interior, prefer a 4x4 vehicle, especially during the rainy season. Check road conditions for your specific destination.

**Car rental:** Available in Luanda through Avis, Europcar and local operators. International driving licence recommended.`,
        tip: "Traffic in Luanda can be very heavy, especially at rush hour (7am–9am and 5pm–7pm). Plan journeys well in advance.",
      },
      {
        id: "cultura",
        icon: "diversity_3",
        title: "Culture & Etiquette",
        body: `Angola is a country of great cultural diversity with more than 10 main ethnic groups. Knowing a few cultural aspects will make your experience smoother:

**Greetings:** Angolans are hospitable and warm. The handshake is the most common formal greeting. In informal settings, close friends greet each other with two kisses (a custom of Portuguese influence).

**Clothing:** Dress conservatively when visiting churches, rural villages and traditional ceremonies. In Luanda, clothing is modern and Western.

**Photography:** Always ask permission before photographing people. Avoid photographing military installations, government buildings or the airport.

**Religion:** Most of the population is Christian (Catholic and Protestant). Traditional African religious practices also exist. Respect places of worship.

**Language:** Portuguese is the official language. Kimbundu, Kikongo, Umbundu and other Bantu languages are also spoken. Learning a few words in Kimbundu (thank you: "nzêtu"; good morning: "mualende") is always well received.`,
        tip: "Angolans greatly appreciate when visitors show interest in their culture and history. Ask questions, show curiosity — you will be warmly welcomed.",
      },
    ],
    faq: [
      { q: "Do I need a visa for Angola?", a: "Most foreigners need a visa. CPLP country citizens have facilitated conditions. Always check with the Angolan embassy in your country." },
      { q: "Is it safe to travel to Angola?", a: "Angola is generally safe for tourists. Luanda requires the same precautions as any large African city. Avoid displaying valuables and use trusted transport." },
      { q: "What currency should I bring?", a: "The Angolan Kwanza (AOA). USD and EUR are also accepted at many hotels and tourist establishments. Exchange currency at banks or official exchange offices." },
      { q: "Is the Yellow Fever vaccine required?", a: "Yes, it is mandatory. The international vaccination certificate must be presented on arrival in Angola." },
      { q: "What language is spoken in Angola?", a: "Portuguese is the official language. English has growing penetration in Luanda's tourism and business sectors. In the interior, Bantu languages such as Kimbundu, Umbundu and Kikongo are widely spoken." },
      { q: "Can I drink tap water?", a: "Not recommended. Always drink bottled or purified water. Bottled water is available throughout the country at affordable prices." },
      { q: "What is the time zone in Angola?", a: "Angola follows WAT (West Africa Time), UTC+1. There is no daylight saving time." },
      { q: "How does mobile and internet work?", a: "Angola has 4G coverage in major cities. Buy a local SIM card (Unitel or Movicel) at the airport or authorised stores — it is more economical than roaming." },
    ],
  },
};

const IMG_HERO = "https://lh3.googleusercontent.com/aida-public/AB6AXuCj6ljP_P1Em8sDC6O-4-t60actSiab2sQ4nHjgrP8WplSbSS4Dkho7RDs8YGdNViR5cUAywTKzdrCe6bsty9wf9Y132aeDAqperWYA_DM8OmZ0r6ejl1pH87l2OQEbKBQ59O_4HgO9CD7ijCj4E3xHvn_PJsFvt_l61FFAHX9fVNWm5cysGm1JZROHX06xrpNEJdkKucxPdOJe70qAaJSD8vcl5mRc4KJbm6QhtBtRYFyaUfA_2BICew_5BDp0zObUdhgJajLumaoZ";

function renderBody(text: string) {
  return text.split("\n\n").map((para, i) => {
    if (!para.trim()) return null;
    const parts = para.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="font-body-lg text-body-lg text-on-surface-variant leading-[1.8] mb-4">
        {parts.map((part, j) =>
          part.startsWith("**") && part.endsWith("**")
            ? <strong key={j} className="font-semibold text-on-surface">{part.slice(2, -2)}</strong>
            : part
        )}
      </p>
    );
  });
}

export default async function VisitarAngolaPage() {
  const locale = await getLocale();
  const t = await getTranslations("VisitAngola");
  const content = CONTENT[locale as keyof typeof CONTENT] ?? CONTENT.pt;

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: 420 }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMG_HERO})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/65 to-transparent" />
        <div className="relative z-10 px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-28 flex items-center min-h-[420px]">
          <div className="max-w-2xl">
            <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-5">TOURA ANGOLA</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white leading-tight mb-5">
              {t("title")}
            </h1>
            <p className="font-body-lg text-body-lg text-white/80 max-w-xl">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <div className="border-b border-savanna-sand bg-surface-container-low sticky top-20 z-30">
        <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto">
          <nav className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
            {content.sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 flex items-center gap-1.5 px-3 py-2 font-label-caps text-label-caps text-[9px] tracking-widest text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-colors"
              >
                <span className="material-symbols-outlined text-[14px]">{s.icon}</span>
                {s.title.split(" ")[0]}
              </a>
            ))}
            <a
              href="#faq"
              className="shrink-0 flex items-center gap-1.5 px-3 py-2 font-label-caps text-label-caps text-[9px] tracking-widest text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-colors"
            >
              <span className="material-symbols-outlined text-[14px]">help</span>
              FAQ
            </a>
          </nav>
        </div>
      </div>

      {/* Sections */}
      <div className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-14">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12">
          {/* Main content */}
          <div className="space-y-16">
            {content.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-40">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[22px] text-primary">{section.icon}</span>
                  </div>
                  <h2 className="font-headline-sm text-[22px] font-bold text-on-surface">{section.title}</h2>
                </div>

                <div className="border-l-2 border-savanna-sand pl-6 ml-5">
                  {renderBody(section.body)}
                </div>

                {section.tip && (
                  <div className="mt-4 ml-5 flex gap-3 bg-primary/5 border border-primary/20 p-4">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">lightbulb</span>
                    <p className="font-body-md text-sm text-on-surface leading-relaxed">{section.tip}</p>
                  </div>
                )}
              </section>
            ))}

            {/* FAQ */}
            <section id="faq" className="scroll-mt-40">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px] text-secondary">help</span>
                </div>
                <h2 className="font-headline-sm text-[22px] font-bold text-on-surface">{t("faq")}</h2>
              </div>

              <div className="space-y-4">
                {content.faq.map((item, i) => (
                  <details key={i} className="group border border-savanna-sand">
                    <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none hover:bg-surface-container-low transition-colors">
                      <span className="font-headline-sm text-[15px] font-semibold text-on-surface pr-4">{item.q}</span>
                      <span className="material-symbols-outlined text-[20px] text-on-surface-variant shrink-0 transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Quick facts */}
            <div className="border border-savanna-sand p-6 sticky top-40">
              <h3 className="font-headline-sm text-[15px] font-semibold mb-5 pb-4 border-b border-savanna-sand">
                {locale === "en" ? "Quick Facts" : "Factos Rápidos"}
              </h3>
              <dl className="flex flex-col gap-4">
                {[
                  { icon: "public", label: locale === "en" ? "Capital" : "Capital", value: "Luanda" },
                  { icon: "language", label: locale === "en" ? "Language" : "Língua", value: "Português" },
                  { icon: "payments", label: locale === "en" ? "Currency" : "Moeda", value: "Kwanza (AOA)" },
                  { icon: "schedule", label: locale === "en" ? "Time Zone" : "Fuso Horário", value: "UTC+1 (WAT)" },
                  { icon: "power", label: locale === "en" ? "Electricity" : "Electricidade", value: "220V / 50Hz" },
                  { icon: "phone", label: locale === "en" ? "Emergency" : "Emergência", value: "112" },
                  { icon: "flight", label: locale === "en" ? "Main Airport" : "Aeroporto", value: "LAD (Luanda)" },
                  { icon: "local_hospital", label: locale === "en" ? "Yellow Fever Vaccine" : "Vacina Febre Amarela", value: locale === "en" ? "Mandatory" : "Obrigatória" },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[16px] text-primary mt-0.5 shrink-0">{icon}</span>
                    <div>
                      <dt className="font-label-caps text-label-caps text-[9px] tracking-widest text-on-surface-variant">{label.toUpperCase()}</dt>
                      <dd className="font-body-md text-sm text-on-surface font-medium">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            {/* CTA */}
            <a href="/destinos" className="flex items-center justify-center gap-2 bg-primary text-white font-label-caps text-label-caps text-[11px] tracking-widest px-6 py-4 hover:bg-primary-container transition-colors w-full">
              <span className="material-symbols-outlined text-[18px]">explore</span>
              {locale === "en" ? "EXPLORE DESTINATIONS" : "EXPLORAR DESTINOS"}
            </a>
            <a href="/contacto" className="flex items-center justify-center gap-2 border border-savanna-sand font-label-caps text-label-caps text-[11px] tracking-widest px-6 py-3.5 text-on-surface-variant hover:border-primary hover:text-primary transition-colors w-full">
              <span className="material-symbols-outlined text-[16px]">support_agent</span>
              {locale === "en" ? "CONTACT A SPECIALIST" : "CONTACTAR ESPECIALISTA"}
            </a>
          </aside>
        </div>
      </div>
    </main>
  );
}
