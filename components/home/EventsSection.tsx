"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, slideLeft, fadeIn, stagger, viewportOnce } from "@/lib/motion";

const EVENTS = [
  {
    month: "FEV",
    day: "24",
    title: "Carnaval de Luanda",
    location: "Marginal de Luanda",
    description:
      "A maior manifestação cultural do país, onde o folclore e a cor tomam conta da baía.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfvKAQE6xlKq__y9GCqTH6lelj14rbRO7agyGmAfHgJ5STdxktH8vGu2cYgnMYd_eNNODKGQLioRR7sR6_6dj-vpCjWvmkXEN1aWGOwZI6kRkFzXbYN1_9u2GrPea_-NX7j9rJMLAd3rBL077FzXlJ5kXZPlA1_vuGY3Q7fPxmkfNsOgzIynGlTSYMVTKyc-0cAo4CLdSpYTHjIvE6L0ku0ZWoHwGyM41-IXyPuy4X-FyZl8DAwbSiwyKYEfFKLUiem6R5zI974u6b",
  },
  {
    month: "MAI",
    day: "12",
    title: "Festival da Kizomba",
    location: "Cabo Ledo, Luanda",
    description:
      "Um encontro internacional de dança à beira-mar com os melhores mestres do mundo.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCj6ljP_P1Em8sDC6O-4-t60actSiab2sQ4nHjgrP8WplSbSS4Dkho7RDs8YGdNViR5cUAywTKzdrCe6bsty9wf9Y132aeDAqperWYA_DM8OmZ0r6ejl1pH87l2OQEbKBQ59O_4HgO9CD7ijCj4E3xHvn_PJsFvt_l61FFAHX9fVNWm5cysGm1JZROHX06xrpNEJdkKucxPdOJe70qAaJSD8vcl5mRc4KJbm6QhtBtRYFyaUfA_2BICew_5BDp0zObUdhgJajLumaoZ",
  },
  {
    month: "JUN",
    day: "15",
    title: "Festival Gastronómico de Benguela",
    location: "Centro Cultural, Benguela",
    description:
      "Uma celebração dos sabores da costa angolana — do peixe fresco ao muamba de galinha — com chefs de todo o país.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALvscUa-xXKkkLq3kceqvHAOTbZ_MAd00FAxDGdgkRzcYz4NprBi6pWKhQx3mCbS6w-eJ8YE4N5zbF6paagzKEOLgWjJT8YOceSShk70c4GoSH1CCsoAeoYqynSoEYDETiQ3U0s3KxMG8vjr7JQaIrpqP8LWKym5Qok0LyU5xY0RJS9E0KSmcnH9PUYXBFWnfeeh1NBAlN3Zc1F9v9VCtdg-5hWNBZlaP8GLb9lqrVV2LwIC1TfhxmtELFluRFeRFyaoO7KYGPaikF",
  },
  {
    month: "AGO",
    day: "05",
    title: "Festas da Nossa Senhora do Monte",
    location: "Lubango, Huíla",
    description:
      "Celebrações religiosas e culturais que unem tradição e modernidade no Sul de Angola.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALvscUa-xXKkkLq3kceqvHAOTbZ_MAd00FAxDGdgkRzcYz4NprBi6pWKhQx3mCbS6w-eJ8YE4N5zbF6paagzKEOLgWjJT8YOceSShk70c4GoSH1CCsoAeoYqynSoEYDETiQ3U0s3KxMG8vjr7JQaIrpqP8LWKym5Qok0LyU5xY0RJS9E0KSmcnH9PUYXBFWnfeeh1NBAlN3Zc1F9v9VCtdg-5hWNBZlaP8GLb9lqrVV2LwIC1TfhxmtELFluRFeRFyaoO7KYGPaikF",
  },
  {
    month: "AGO",
    day: "22",
    title: "Regata de Canoas do Rio Kwanza",
    location: "Rio Kwanza, Dondo",
    description:
      "Uma competição ancestral de piroga que celebra a relação histórica do povo angolano com o maior rio do país.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDFVzkjAF5MjyB-UKCmkh9hM8xyUV9iX7EOZM2-apfjPVsTGxxV7jQ4MptF779tUuaJ3V4Y24cEjL0hfwRJKDc7pcXHoY9yc3ToMOYKXj9HWzKR2iIXBktqf1llkVz5XyA8ef_CiNMgWs-m_bXG1Fv_LyhMg06ycb85ZSvjSDa0-E-VUOBrq0D_2Gm50H9IXTWeK8YB7PdA17IGdvAWLd7whoNloRoYQc9pI30mgZJHu76OLCWKHL4UAMchgbAIGGPqjIcvGo9_Rex",
  },
  {
    month: "SET",
    day: "08",
    title: "Festival Nacional de Música Angolana",
    location: "Estádio da Cidadela, Luanda",
    description:
      "Uma celebração dos ritmos que definem Angola — do Semba ao Kuduro — com os maiores nomes da música nacional.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDFVzkjAF5MjyB-UKCmkh9hM8xyUV9iX7EOZM2-apfjPVsTGxxV7jQ4MptF779tUuaJ3V4Y24cEjL0hfwRJKDc7pcXHoY9yc3ToMOYKXj9HWzKR2iIXBktqf1llkVz5XyA8ef_CiNMgWs-m_bXG1Fv_LyhMg06ycb85ZSvjSDa0-E-VUOBrq0D_2Gm50H9IXTWeK8YB7PdA17IGdvAWLd7whoNloRoYQc9pI30mgZJHu76OLCWKHL4UAMchgbAIGGPqjIcvGo9_Rex",
  },
  {
    month: "OUT",
    day: "18",
    title: "Festival de Cinema de Luanda",
    location: "Cinemateca Nacional, Luanda",
    description:
      "Uma semana de cinema africano e internacional, com estreias, masterclasses e debates com realizadores angolanos.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyEU5BhywqtacvyDrn--XuSeTd4wj5ZhGCvXiFDvanh0-ZmoCKRJHRRBpHaGyDRCz0L9la7_OvaYR_-DMmeCgj7Ve4jkj3OTmdyfTPF_HnD6UW6gzTuICKokwh7f5jPW5J9ZgRiHSiDxKriIXedKKfZWMgpkhAoxfW5lZtHA8hgyW6W8K8iIS6rRuZG2IPAhcS5-Tg8ML6hiGHvnXGPxMlMI7UGR1-swQL4h4a327rUuWyoPnremdmEHHslKj5Ea7N3Z0l-WEUI2iX",
  },
  {
    month: "NOV",
    day: "11",
    title: "Dia da Independência de Angola",
    location: "Praça da República, Luanda",
    description:
      "Comemorações oficiais do aniversário da independência com desfiles militares, cultura e fogo de artifício sobre a baía.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyEU5BhywqtacvyDrn--XuSeTd4wj5ZhGCvXiFDvanh0-ZmoCKRJHRRBpHaGyDRCz0L9la7_OvaYR_-DMmeCgj7Ve4jkj3OTmdyfTPF_HnD6UW6gzTuICKokwh7f5jPW5J9ZgRiHSiDxKriIXedKKfZWMgpkhAoxfW5lZtHA8hgyW6W8K8iIS6rRuZG2IPAhcS5-Tg8ML6hiGHvnXGPxMlMI7UGR1-swQL4h4a327rUuWyoPnremdmEHHslKj5Ea7N3Z0l-WEUI2iX",
  },
  {
    month: "DEZ",
    day: "20",
    title: "Festival de Verão em Benguela",
    location: "Praia da Baia Azul, Benguela",
    description:
      "O maior festival de praia do país, com música ao vivo, gastronomia local e actividades aquáticas nas águas cristalinas de Benguela.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCj6ljP_P1Em8sDC6O-4-t60actSiab2sQ4nHjgrP8WplSbSS4Dkho7RDs8YGdNViR5cUAywTKzdrCe6bsty9wf9Y132aeDAqperWYA_DM8OmZ0r6ejl1pH87l2OQEbKBQ59O_4HgO9CD7ijCj4E3xHvn_PJsFvt_l61FFAHX9fVNWm5cysGm1JZROHX06xrpNEJdkKucxPdOJe70qAaJSD8vcl5mRc4KJbm6QhtBtRYFyaUfA_2BICew_5BDp0zObUdhgJajLumaoZ",
  },
];

const CARD_WIDTH = 320;
const CARD_GAP = 32;

export default function EventsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const index = Math.round(scrollRef.current.scrollLeft / (CARD_WIDTH + CARD_GAP));
    setCurrentIndex(Math.max(0, Math.min(EVENTS.length - 1, index)));
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const clamped = Math.max(0, Math.min(EVENTS.length - 1, index));
    scrollRef.current.scrollTo({
      left: clamped * (CARD_WIDTH + CARD_GAP),
      behavior: "smooth",
    });
    setCurrentIndex(clamped);
  };

  return (
    <section className="py-section-gap border-t border-savanna-sand">
      <div className="px-margin-desktop max-w-container-max mx-auto">
        {/* Header */}
        <motion.div
          className="flex justify-between items-end mb-12"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={slideLeft}>
            <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-4 uppercase">
              Calendário 2024
            </span>
            <h2 className="font-headline-md text-headline-md">
              Eventos e Festivais
            </h2>
          </motion.div>

          <motion.div className="flex gap-3" variants={fadeIn}>
            <button
              aria-label="Evento anterior"
              onClick={() => scrollToIndex(currentIndex - 1)}
              disabled={currentIndex === 0}
              suppressHydrationWarning
              className="w-12 h-12 rounded-full border border-savanna-sand flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 text-on-surface-variant group disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
                chevron_left
              </span>
            </button>
            <button
              aria-label="Próximo evento"
              onClick={() => scrollToIndex(currentIndex + 1)}
              disabled={currentIndex >= EVENTS.length - 1}
              suppressHydrationWarning
              className="w-12 h-12 rounded-full border border-savanna-sand flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 text-on-surface-variant group disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
                chevron_right
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-8 overflow-x-auto hide-scrollbar pb-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {EVENTS.map((event) => (
            <div
              key={event.title}
              className="min-w-[320px] bg-white border border-savanna-sand hover:shadow-lg transition-all group hover:-translate-y-1 duration-300 shrink-0"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="h-56 relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 text-center min-w-[56px]">
                  <p className="font-headline-sm text-xs m-0 leading-none tracking-widest">
                    {event.month}
                  </p>
                  <p className="font-bold text-xl m-0 leading-tight">{event.day}</p>
                </div>
              </div>
              <div className="p-8">
                <h4 className="font-headline-sm text-lg mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h4>
                <div className="flex items-center gap-2 text-on-surface-variant font-body-md mb-4">
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    location_on
                  </span>
                  <span>{event.location}</span>
                </div>
                <p className="text-on-surface-variant font-body-md text-sm mb-6 line-clamp-2">
                  {event.description}
                </p>
                <a
                  href="#"
                  className="font-label-caps text-label-caps text-primary hover:underline flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  VER DETALHES
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
