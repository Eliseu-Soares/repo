const BASE = "https://toura.ao";

export function makeCanonical(path: string) {
  return `${BASE}${path}`;
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE}${item.path}`,
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Toura Angola",
    url: BASE,
    logo: { "@type": "ImageObject", url: `${BASE}/logo.png` },
    description: "A plataforma oficial de promoção do turismo de Angola.",
    foundingLocation: { "@type": "Place", name: "Luanda, Angola" },
    areaServed: { "@type": "Country", name: "Angola" },
    sameAs: [
      "https://facebook.com/touraangola",
      "https://instagram.com/touraangola",
      "https://youtube.com/touraangola",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    name: "Toura Angola",
    url: BASE,
    publisher: { "@id": `${BASE}/#organization` },
    inLanguage: ["pt", "en"],
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${BASE}/pesquisa?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

export function itemListJsonLd(
  name: string,
  path: string,
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: `${BASE}${path}`,
    numberOfItems: items.length,
    itemListElement: items.slice(0, 10).map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url.startsWith("http") ? item.url : `${BASE}${item.url}`,
    })),
  };
}
