import type { NewsArticle } from "@/types";
import { NEWS_CATEGORY_COLORS, NEWS_CATEGORY_ICONS } from "@/data/noticias";

interface Props {
  article: NewsArticle;
  variant?: "default" | "horizontal";
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-AO", { day: "numeric", month: "long", year: "numeric" });
}

export default function NewsCard({ article, variant = "default" }: Props) {
  if (variant === "horizontal") {
    return (
      <a href={`/noticias/${article.slug}`} className="flex gap-4 group hover:bg-surface-container-low transition-colors p-2 -mx-2">
        <div className="w-20 h-20 shrink-0 overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        </div>
        <div className="min-w-0">
          <span className="font-label-caps text-label-caps text-[9px] tracking-widest text-on-surface-variant block mb-1">
            {article.category.toUpperCase()} · {formatDate(article.publishedAt)}
          </span>
          <p className="font-body-md text-sm text-on-surface font-medium leading-snug line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </p>
        </div>
      </a>
    );
  }

  return (
    <a href={`/noticias/${article.slug}`} className="group flex flex-col border border-savanna-sand hover:border-primary/40 transition-colors">
      <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className={`font-label-caps text-label-caps text-[9px] tracking-widest px-2 py-1 ${NEWS_CATEGORY_COLORS[article.category]}`}>
            <span className="material-symbols-outlined text-[10px] mr-1 align-middle">{NEWS_CATEGORY_ICONS[article.category]}</span>
            {article.category.toUpperCase()}
          </span>
          <span className="font-label-caps text-label-caps text-[9px] tracking-widest text-on-surface-variant">
            {article.readTime} MIN
          </span>
        </div>
        <h3 className="font-headline-sm text-[16px] font-semibold text-on-surface leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        <p className="font-body-md text-sm text-on-surface-variant leading-relaxed line-clamp-3 flex-1 mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-savanna-sand">
          <span className="font-label-caps text-label-caps text-[9px] tracking-widest text-on-surface-variant">
            {formatDate(article.publishedAt)}
          </span>
          <span className="font-label-caps text-label-caps text-[9px] tracking-widest text-primary flex items-center gap-1">
            LER
            <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
          </span>
        </div>
      </div>
    </a>
  );
}
