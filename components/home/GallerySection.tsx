"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, slideLeft, viewportOnce, EASE } from "@/lib/motion";

const GALLERY_IMAGES = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfvKAQE6xlKq__y9GCqTH6lelj14rbRO7agyGmAfHgJ5STdxktH8vGu2cYgnMYd_eNNODKGQLioRR7sR6_6dj-vpCjWvmkXEN1aWGOwZI6kRkFzXbYN1_9u2GrPea_-NX7j9rJMLAd3rBL077FzXlJ5kXZPlA1_vuGY3Q7fPxmkfNsOgzIynGlTSYMVTKyc-0cAo4CLdSpYTHjIvE6L0ku0ZWoHwGyM41-IXyPuy4X-FyZl8DAwbSiwyKYEfFKLUiem6R5zI974u6b",
    label: "Marginal de Luanda",
    tall: false,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuALvscUa-xXKkkLq3kceqvHAOTbZ_MAd00FAxDGdgkRzcYz4NprBi6pWKhQx3mCbS6w-eJ8YE4N5zbF6paagzKEOLgWjJT8YOceSShk70c4GoSH1CCsoAeoYqynSoEYDETiQ3U0s3KxMG8vjr7JQaIrpqP8LWKym5Qok0LyU5xY0RJS9E0KSmcnH9PUYXBFWnfeeh1NBAlN3Zc1F9v9VCtdg-5hWNBZlaP8GLb9lqrVV2LwIC1TfhxmtELFluRFeRFyaoO7KYGPaikF",
    label: "Serra da Tundavala, Huíla",
    tall: true,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyEU5BhywqtacvyDrn--XuSeTd4wj5ZhGCvXiFDvanh0-ZmoCKRJHRRBpHaGyDRCz0L9la7_OvaYR_-DMmeCgj7Ve4jkj3OTmdyfTPF_HnD6UW6gzTuICKokwh7f5jPW5J9ZgRiHSiDxKriIXedKKfZWMgpkhAoxfW5lZtHA8hgyW6W8K8iIS6rRuZG2IPAhcS5-Tg8ML6hiGHvnXGPxMlMI7UGR1-swQL4h4a327rUuWyoPnremdmEHHslKj5Ea7N3Z0l-WEUI2iX",
    label: "Deserto do Namibe",
    tall: false,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj6ljP_P1Em8sDC6O-4-t60actSiab2sQ4nHjgrP8WplSbSS4Dkho7RDs8YGdNViR5cUAywTKzdrCe6bsty9wf9Y132aeDAqperWYA_DM8OmZ0r6ejl1pH87l2OQEbKBQ59O_4HgO9CD7ijCj4E3xHvn_PJsFvt_l61FFAHX9fVNWm5cysGm1JZROHX06xrpNEJdkKucxPdOJe70qAaJSD8vcl5mRc4KJbm6QhtBtRYFyaUfA_2BICew_5BDp0zObUdhgJajLumaoZ",
    label: "Praia de Benguela",
    tall: true,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDFVzkjAF5MjyB-UKCmkh9hM8xyUV9iX7EOZM2-apfjPVsTGxxV7jQ4MptF779tUuaJ3V4Y24cEjL0hfwRJKDc7pcXHoY9yc3ToMOYKXj9HWzKR2iIXBktqf1llkVz5XyA8ef_CiNMgWs-m_bXG1Fv_LyhMg06ycb85ZSvjSDa0-E-VUOBrq0D_2Gm50H9IXTWeK8YB7PdA17IGdvAWLd7whoNloRoYQc9pI30mgZJHu76OLCWKHL4UAMchgbAIGGPqjIcvGo9_Rex",
    label: "Ritmos de Luanda",
    tall: false,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4eE_8DAIC7ItzrF2bj0T17TSo-gTzLO95Qsik-Te-1iMCZqlUdE73l_2VGYc2eDgO0Oll9JEpLON5wp8e08jW966JiPrTVzGJdCGqiAJwh1QTqmu1y28RDna8_tnYmpMqSmU1J795guT3y5kKC4v6DntLBT5wHBK3DJnOiklE5myLRD2nhL6P-IAcnW7Pqil6Sdn9BDs1MXrmj3b7RkTQBfWqwnztw4dpBysN0HsflfBx0LitJT-ux97cPgpXrmx5hCCJU3E15dxE",
    label: "Artesanato Angolano",
    tall: true,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQhauavbRiDVyMMahtiFlHBJrLRaJ1rNULw0EFt16VYsYCn440j_x50dfW--5jLZqz3-i_-Mpv4uIFk06Ni-KSWhaxSFfrpXCbOMVjYxru4hSnY7MoJK61ChbG85-MVhQiz39GYf451sBzhVYMaDDjjGe8qAAmhnlgM4f5ejFXaAm8sKbcEQ91H3j-ifMo77Mc1TlNrx9KhMnmh517TvSle4_T1baOFYIpMIU8R1HuAs_g19csyJptfVTc3KmuDy4jFU7nmqm5Hke4",
    label: "Parque Nacional da Kissama",
    tall: false,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA85B915LEeSeR_KbUTM_Y52q80h0xc1f2E1VOvrvVEvYCjyte5kyFCwHA9-CYZMPEUuj1uBq_q8n732cjLzuu-mLGe6fI33_mbh5lUnOuLOjsxSiVkIGnD5Xsge-OPZPNY2xcHetDiIa6-T8rfdUFiBdpyUBclcymEME64tAJh-sMH5ROSyn7eS0G51bQwEwLdh4-psHMiQeXpfmsj66SGDt5ZUfvWvqI9U5FjFDLwey5xI1XmNi57aTj28eukLxmsp74gMMO0Jwix",
    label: "Panorâmica da Huíla",
    tall: false,
  },
];

export default function GallerySection() {
  return (
    <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
      {/* Header */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-end gap-6 mb-14"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.div variants={slideLeft}>
          <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-4 uppercase">
            Galeria Inspiracional
          </span>
          <h2 className="font-headline-md text-headline-md">
            Angola em Imagens
          </h2>
        </motion.div>
        <motion.a
          href="/destinos"
          className="font-label-caps text-label-caps text-primary border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-all shrink-0"
          variants={fadeUp}
        >
          VER TODOS OS DESTINOS
        </motion.a>
      </motion.div>

      {/* Masonry grid — CSS columns */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
        {GALLERY_IMAGES.map((img, i) => (
          <motion.div
            key={img.label}
            className="break-inside-avoid mb-4 group relative overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, delay: (i % 4) * 0.1, ease: EASE }}
          >
            <img
              src={img.src}
              alt={img.label}
              className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                img.tall ? "h-72 md:h-96" : "h-48 md:h-56"
              }`}
              loading="lazy"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
              <motion.span
                className="text-white font-label-caps text-label-caps tracking-widest"
                initial={false}
              >
                {img.label}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
