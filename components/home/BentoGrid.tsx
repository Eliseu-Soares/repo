"use client";

import { motion } from "framer-motion";
import { clipReveal, viewportOnce } from "@/lib/motion";

const PROVINCES = [
  {
    name: "Luanda",
    tagline: "A metrópole vibrante à beira do Atlântico.",
    cta: "VER DESTINO",
    span: "md:col-span-8",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfvKAQE6xlKq__y9GCqTH6lelj14rbRO7agyGmAfHgJ5STdxktH8vGu2cYgnMYd_eNNODKGQLioRR7sR6_6dj-vpCjWvmkXEN1aWGOwZI6kRkFzXbYN1_9u2GrPea_-NX7j9rJMLAd3rBL077FzXlJ5kXZPlA1_vuGY3Q7fPxmkfNsOgzIynGlTSYMVTKyc-0cAo4CLdSpYTHjIvE6L0ku0ZWoHwGyM41-IXyPuy4X-FyZl8DAwbSiwyKYEfFKLUiem6R5zI974u6b",
  },
  {
    name: "Huíla",
    tagline: "Tradição e planaltos majestosos.",
    cta: "EXPLORAR",
    span: "md:col-span-4",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALvscUa-xXKkkLq3kceqvHAOTbZ_MAd00FAxDGdgkRzcYz4NprBi6pWKhQx3mCbS6w-eJ8YE4N5zbF6paagzKEOLgWjJT8YOceSShk70c4GoSH1CCsoAeoYqynSoEYDETiQ3U0s3KxMG8vjr7JQaIrpqP8LWKym5Qok0LyU5xY0RJS9E0KSmcnH9PUYXBFWnfeeh1NBAlN3Zc1F9v9VCtdg-5hWNBZlaP8GLb9lqrVV2LwIC1TfhxmtELFluRFeRFyaoO7KYGPaikF",
  },
  {
    name: "Namibe",
    tagline: "Onde o deserto beija o mar.",
    cta: "DESCOBRIR",
    span: "md:col-span-4",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyEU5BhywqtacvyDrn--XuSeTd4wj5ZhGCvXiFDvanh0-ZmoCKRJHRRBpHaGyDRCz0L9la7_OvaYR_-DMmeCgj7Ve4jkj3OTmdyfTPF_HnD6UW6gzTuICKokwh7f5jPW5J9ZgRiHSiDxKriIXedKKfZWMgpkhAoxfW5lZtHA8hgyW6W8K8iIS6rRuZG2IPAhcS5-Tg8ML6hiGHvnXGPxMlMI7UGR1-swQL4h4a327rUuWyoPnremdmEHHslKj5Ea7N3Z0l-WEUI2iX",
  },
  {
    name: "Benguela",
    tagline: "Praias infinitas e história colonial.",
    cta: "VISITAR",
    span: "md:col-span-8",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCj6ljP_P1Em8sDC6O-4-t60actSiab2sQ4nHjgrP8WplSbSS4Dkho7RDs8YGdNViR5cUAywTKzdrCe6bsty9wf9Y132aeDAqperWYA_DM8OmZ0r6ejl1pH87l2OQEbKBQ59O_4HgO9CD7ijCj4E3xHvn_PJsFvt_l61FFAHX9fVNWm5cysGm1JZROHX06xrpNEJdkKucxPdOJe70qAaJSD8vcl5mRc4KJbm6QhtBtRYFyaUfA_2BICew_5BDp0zObUdhgJajLumaoZ",
  },
];

export default function BentoGrid() {
  return (
    <section className="pb-section-gap px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px]">
        {PROVINCES.map((province, i) => (
          <motion.div
            key={province.name}
            className={`${province.span} relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300`}
            variants={clipReveal}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ duration: 1.1, delay: i * 0.18, ease: [0.77, 0, 0.175, 1] }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${province.image}')` }}
              role="img"
              aria-label={`${province.name} — ${province.tagline}`}
            />
            <div className="absolute inset-0 scrim-gradient" />
            <motion.div
              className="absolute bottom-0 left-0 p-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.18 }}
            >
              <h3 className="font-headline-sm text-headline-sm mb-2">
                {province.name}
              </h3>
              <p className="font-body-md opacity-80 mb-4">{province.tagline}</p>
              <a
                href={`/provincias/${province.name.toLowerCase().replace("í", "i")}`}
                className="font-label-caps text-label-caps border-b border-white pb-1 hover:text-secondary transition-colors"
              >
                {province.cta}
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
