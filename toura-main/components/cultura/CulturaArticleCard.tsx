import type { CulturalArticle } from "@/types";
import { CULTURA_META } from "@/data/cultura";

interface Props {
  article: CulturalArticle;
}

const CATEGORY_COLORS: Record<string, string> = {
  musica: "bg-primary/15 text-primary",
  danca: "bg-secondary/15 text-secondary",
  artesanato: "bg-[#7c3aed]/15 text-[#7c3aed]",
  linguas: "bg-[#d97706]/15 text-[#d97706]",
  tradicoes: "bg-error/15 text-error",
  arte: "bg-[#16a34a]/15 text-[#16a34a]",
};

export default function CulturaArticleCard({ article }: Props) {
  const meta = CULTURA_META.find((m) => m.slug === article.catSlug);

  return (
    <a
      href={`/cultura/${article.catSlug}/${article.slug}`}
      className="group flex flex-col overflow-hidden border border-savanna-sand hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-background"
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${article.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className={`font-label-caps text-label-caps px-2.5 py-1 text-[10px] tracking-widest backdrop-blur-sm ${CATEGORY_COLORS[article.catSlug] ?? "bg-surface/80 text-on-surface"}`}>
            {article.category.toUpperCase()}
          </span>
        </div>
        {(article.region || article.ethnicity) && (
          <div className="absolute bottom-3 left-3">
            <span className="font-label-caps text-label-caps text-[10px] text-white/80 tracking-widest">
              {article.ethnicity ?? article.region}
            </span>
          </div>
        )}
      </div>

      <div className="flex-1 p-5 flex flex-col gap-3">
        <h3 className="font-headline-sm text-[17px] font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="font-body-md text-sm text-on-surface-variant line-clamp-2 flex-1">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-savanna-sand">
          {meta && (
            <div className="flex items-center gap-1.5 text-on-surface-variant">
              <span className="material-symbols-outlined text-[14px]">{meta.icon}</span>
              <span className="font-label-caps text-label-caps text-[10px] tracking-widest">{meta.label.toUpperCase()}</span>
            </div>
          )}
          <span className="flex items-center gap-1 text-primary font-label-caps text-label-caps text-[11px] border-b border-primary pb-0.5 group-hover:text-secondary group-hover:border-secondary transition-colors ml-auto">
            Ler mais
            <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
          </span>
        </div>
      </div>
    </a>
  );
}
