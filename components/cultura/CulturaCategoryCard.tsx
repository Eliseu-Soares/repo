import type { CulturaMetaItem } from "@/data/cultura";
import { culturalArticles } from "@/data/cultura";

interface Props {
  meta: CulturaMetaItem;
}

export default function CulturaCategoryCard({ meta }: Props) {
  const count = culturalArticles.filter((a) => a.catSlug === meta.slug).length;

  return (
    <a
      href={`/cultura/${meta.slug}`}
      className="group flex flex-col p-8 border border-savanna-sand hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-background"
    >
      <div className={`w-14 h-14 flex items-center justify-center mb-5 transition-all duration-300 ${meta.color}`}>
        <span className="material-symbols-outlined text-[28px]">{meta.icon}</span>
      </div>

      <h3 className="font-headline-sm text-[20px] font-semibold mb-2 group-hover:text-primary transition-colors">
        {meta.label}
      </h3>

      <p className="font-body-md text-sm text-on-surface-variant leading-relaxed flex-1 mb-5">
        {meta.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-savanna-sand">
        <span className="font-label-caps text-label-caps text-on-surface-variant text-[10px] tracking-widest">
          {count} ARTIGO{count !== 1 ? "S" : ""}
        </span>
        <span className="flex items-center gap-1 text-primary font-label-caps text-label-caps text-[11px] border-b border-primary pb-0.5 group-hover:text-secondary group-hover:border-secondary transition-colors">
          Explorar
          <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
        </span>
      </div>
    </a>
  );
}
