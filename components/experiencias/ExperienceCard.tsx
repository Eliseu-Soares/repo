import type { Experience } from "@/types";
import FavoriteButton from "@/components/ui/FavoriteButton";
import AddToPlanButton from "@/components/ui/AddToPlanButton";

const CATEGORY_COLORS: Record<string, string> = {
  Aventura: "bg-[#ea580c]/15 text-[#ea580c]",
  Ecoturismo: "bg-[#16a34a]/15 text-[#16a34a]",
  Mergulho: "bg-[#2563EB]/15 text-[#2563EB]",
  Safari: "bg-[#d97706]/15 text-[#d97706]",
  Caminhadas: "bg-secondary/15 text-secondary",
  Cultural: "bg-primary/15 text-primary",
};

const DIFFICULTY_ICONS: Record<string, { color: string }> = {
  Fácil: { color: "text-[#16a34a]" },
  Moderado: { color: "text-[#d97706]" },
  Difícil: { color: "text-error" },
};

interface Props {
  experience: Experience;
}

export default function ExperienceCard({ experience: exp }: Props) {
  const diff = DIFFICULTY_ICONS[exp.difficulty];

  return (
    <a
      href={`/experiencias/${exp.slug}`}
      className="group flex flex-col overflow-hidden border border-savanna-sand hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-background"
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/2" }}>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${exp.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className={`font-label-caps text-label-caps px-2.5 py-1 text-[10px] tracking-widest backdrop-blur-sm ${CATEGORY_COLORS[exp.category] ?? "bg-surface/80 text-on-surface"}`}>
            {exp.category.toUpperCase()}
          </span>
        </div>

        {/* Top-right: featured badge + action buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
          {exp.featured && (
            <span className="font-label-caps text-label-caps px-2.5 py-1 text-[10px] tracking-widest bg-secondary text-white">DESTAQUE</span>
          )}
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <AddToPlanButton
              item={{
                id: `destino-${exp.slug}`,
                slug: exp.slug,
                title: exp.title,
                image: exp.image,
                provinceName: exp.provinceName,
                days: 1,
              }}
              variant="icon"
            />
            <FavoriteButton
              item={{
                id: `experiencia-${exp.slug}`,
                type: "experiencia",
                slug: exp.slug,
                title: exp.title,
                image: exp.image,
                subtitle: exp.category,
              }}
            />
          </div>
        </div>

        <div className="absolute bottom-3 left-3 flex items-center gap-3">
          <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2.5 py-1">
            <span className="material-symbols-outlined text-white text-[13px]">schedule</span>
            <span className="font-label-caps text-label-caps text-white text-[10px] tracking-widest">{exp.duration.toUpperCase()}</span>
          </div>
          <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2.5 py-1">
            <span className={`material-symbols-outlined text-[13px] ${diff.color}`}>local_fire_department</span>
            <span className="font-label-caps text-label-caps text-white text-[10px] tracking-widest">{exp.difficulty.toUpperCase()}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 p-5 flex flex-col gap-3">
        <h3 className="font-headline-sm text-[16px] font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
          {exp.title}
        </h3>
        <p className="font-body-md text-sm text-on-surface-variant line-clamp-2 flex-1">
          {exp.description}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-savanna-sand">
          <div>
            <p className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest mb-0.5">{exp.operator}</p>
            {exp.price && <p className="font-body-md text-sm font-semibold text-primary">{exp.price}</p>}
          </div>
          <span className="flex items-center gap-1 text-primary font-label-caps text-label-caps text-[11px] border-b border-primary pb-0.5 group-hover:text-secondary group-hover:border-secondary transition-colors">
            Ver
            <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
          </span>
        </div>
      </div>
    </a>
  );
}
