import { experiences } from "@/data/experiencias";
import ExperiencesBrowser from "@/components/experiencias/ExperiencesBrowser";

const IMG_BG = "https://lh3.googleusercontent.com/aida-public/AB6AXuALvscUa-xXKkkLq3kceqvHAOTbZ_MAd00FAxDGdgkRzcYz4NprBi6pWKhQx3mCbS6w-eJ8YE4N5zbF6paagzKEOLgWjJT8YOceSShk70c4GoSH1CCsoAeoYqynSoEYDETiQ3U0s3KxMG8vjr7JQaIrpqP8LWKym5Qok0LyU5xY0RJS9E0KSmcnH9PUYXBFWnfeeh1NBAlN3Zc1F9v9VCtdg-5hWNBZlaP8GLb9lqrVV2LwIC1TfhxmtELFluRFeRFyaoO7KYGPaikF";

export function generateMetadata() {
  return {
    title: "Experiências em Angola | Toura",
    description: "Safari, mergulho, trekking, cultura e muito mais — descubra as experiências únicas que Angola tem para oferecer.",
  };
}

export default function ExperienciasPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: 420 }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMG_BG})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/85 via-brand-navy/60 to-transparent" />
        <div className="relative z-10 px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-24 flex items-center min-h-[420px]">
          <div className="max-w-2xl">
            <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-5">AVENTURA · NATUREZA · CULTURA</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white leading-tight mb-6">
              Experiências Únicas em Angola
            </h1>
            <p className="font-body-lg text-body-lg text-white/80 max-w-xl">
              Do safari no Kissama ao mergulho no Namibe, do trekking na Serra da Leba à imersão cultural nos reinos históricos — Angola oferece experiências que ficam para sempre.
            </p>
          </div>
        </div>
      </section>

      {/* Browser */}
      <section className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-14 pb-section-gap">
        <div className="mb-10">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">Explorar</span>
          <h2 className="font-headline-sm text-headline-sm">Todas as Experiências</h2>
        </div>
        <ExperiencesBrowser experiences={experiences} />
      </section>
    </main>
  );
}
