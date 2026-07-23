import type { NewsArticle } from "@/types";
import { NEWS_CATEGORY_COLORS } from "@/data/noticias";

interface Props {
  article: NewsArticle;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-AO", { day: "numeric", month: "long", year: "numeric" });
}

export default function FeaturedArticleBanner({ article }: Props) {
  return (
    <a href={`/noticias/${article.slug}`} className="group relative flex items-end overflow-hidden" style={{ minHeight: 480 }}>
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${article.image})` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

      <div className="relative z-10 p-8 lg:p-12 max-w-3xl">
        <div className="flex items-center gap-3 mb-5">
          <span className="font-label-caps text-label-caps text-[9px] tracking-widest bg-primary text-white px-3 py-1.5">
            EM DESTAQUE
          </span>
          <span className={`font-label-caps text-label-caps text-[9px] tracking-widest px-3 py-1.5 ${NEWS_CATEGORY_COLORS[article.category]}`}>
            {article.category.toUpperCase()}
          </span>
        </div>

        <h2 className="font-display-lg text-display-lg-mobile md:text-[40px] font-bold text-white leading-tight mb-4 group-hover:text-secondary transition-colors">
          {article.title}
        </h2>

        <p className="font-body-lg text-body-lg text-white/80 leading-relaxed mb-6 max-w-2xl line-clamp-2">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-4">
          <span className="font-label-caps text-label-caps text-[10px] tracking-widest text-white/60">
            {article.author.name}
          </span>
          <span className="text-white/30">·</span>
          <span className="font-label-caps text-label-caps text-[10px] tracking-widest text-white/60">
            {formatDate(article.publishedAt)}
          </span>
          <span className="text-white/30">·</span>
          <span className="font-label-caps text-label-caps text-[10px] tracking-widest text-white/60">
            {article.readTime} min de leitura
          </span>
        </div>

        <div className="mt-6 flex items-center gap-2 font-label-caps text-label-caps text-[11px] tracking-widest text-secondary">
          LER ARTIGO
          <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </div>
      </div>
    </a>
  );
}
