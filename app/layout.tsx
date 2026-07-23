import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipLink from "@/components/ui/SkipLink";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope-var",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-var",
  display: "swap",
});

const BASE = "https://toura.ao";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Toura | Experiências Inesquecíveis em Angola",
    template: "%s | Toura Angola",
  },
  description:
    "A plataforma oficial de turismo de Angola. Descubra destinos, culturas, experiências e eventos únicos no coração de África.",
  keywords: ["Angola", "turismo", "destinos", "viagem", "África", "Luanda", "tourism", "travel"],
  authors: [{ name: "Toura Angola", url: BASE }],
  creator: "Zyeta Technologies",
  openGraph: {
    title: "Toura | Angola's Official Tourism Platform",
    description: "Discover Angola. Live unforgettable experiences.",
    type: "website",
    locale: "pt_AO",
    url: BASE,
    siteName: "Toura Angola",
    images: [{ url: "/cover.png", width: 1200, height: 630, alt: "Toura Angola" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toura Angola",
    description: "Discover Angola. Live unforgettable experiences.",
    images: ["/cover.png"],
  },
  alternates: {
    canonical: BASE,
    languages: { "pt": BASE, "en": BASE },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${manrope.variable} ${inter.variable} antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
        <link rel="alternate" type="application/rss+xml" title="Toura Angola — Notícias" href="/feed.xml" />
        <link rel="alternate" hrefLang="pt" href={BASE} />
        <link rel="alternate" hrefLang="en" href={BASE} />
        <link rel="alternate" hrefLang="x-default" href={BASE} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }} />
      </head>
      <body className="bg-background text-on-background font-body-md">
        <SkipLink />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <div id="main-content" tabIndex={-1}>
            {children}
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
