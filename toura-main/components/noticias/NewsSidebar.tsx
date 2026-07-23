import type { NewsArticle } from "@/types";
import { NEWS_CATEGORIES } from "@/types";
import { NEWS_CATEGORY_ICONS } from "@/data/noticias";
import NewsCard from "./NewsCard";

interface Props {
  recentArticles: NewsArticle[];
  activeCategory?: string;
}

export default function NewsSidebar({ recentArticles, activeCategory }: Props) {
  return (
    <aside className="space-y-10">
      {/* Recent articles */}
      <div>
        <h3 className="font-headline-sm text-[15px] font-semibold mb-5 pb-4 border-b border-savanna-sand">
          Artigos Recentes
        </h3>
        <div className="flex flex-col gap-4">
          {recentArticles.map((article) => (
            <NewsCard key={article.id} article={article} variant="horizontal" />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-headline-sm text-[15px] font-semibold mb-5 pb-4 border-b border-savanna-sand">
          Categorias
        </h3>
        <nav className="flex flex-col gap-1">
          <a
            href="/noticias"
            className={`flex items-center gap-3 px-3 py-2.5 font-label-caps text-label-caps text-[10px] tracking-widest transition-colors hover:text-primary ${!activeCategory ? "text-primary bg-primary/5" : "text-on-surface-variant"}`}
          >
            <span className="material-symbols-outlined text-[16px]">article</span>
            TODAS AS NOTÍCIAS
          </a>
          {NEWS_CATEGORIES.map((cat) => (
            <a
              key={cat}
              href={`/noticias?categoria=${cat.toLowerCase()}`}
              className={`flex items-center gap-3 px-3 py-2.5 font-label-caps text-label-caps text-[10px] tracking-widest transition-colors hover:text-primary ${activeCategory === cat ? "text-primary bg-primary/5" : "text-on-surface-variant"}`}
            >
              <span className="material-symbols-outlined text-[16px]">{NEWS_CATEGORY_ICONS[cat]}</span>
              {cat.toUpperCase()}
            </a>
          ))}
        </nav>
      </div>

      {/* Newsletter */}
      <div className="border border-savanna-sand p-6">
        <h3 className="font-headline-sm text-[15px] font-semibold mb-2">Newsletter Toura</h3>
        <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-4">
          Receba as últimas notícias e destinos em Angola diretamente no seu email.
        </p>
        <div className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="o-seu@email.com"
            className="w-full border border-savanna-sand px-3 py-2.5 font-body-md text-sm bg-background focus:outline-none focus:border-primary transition-colors"
          />
          <button className="w-full bg-primary text-white font-label-caps text-label-caps text-[11px] tracking-widest px-4 py-3 hover:bg-primary-container transition-colors">
            SUBSCREVER
          </button>
        </div>
      </div>
    </aside>
  );
}
