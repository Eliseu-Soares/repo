"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { NewsArticle, NewsCategory } from "@/types";
import { NEWS_CATEGORIES } from "@/types";
import { NEWS_CATEGORY_ICONS } from "@/data/noticias";
import NewsCard from "./NewsCard";

const PAGE_SIZE = 6;

interface Props {
  articles: NewsArticle[];
  initialCategory?: NewsCategory | null;
}

export default function NewsBrowser({ articles, initialCategory = null }: Props) {
  const [activeCategory, setActiveCategory] = useState<NewsCategory | null>(initialCategory);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const base = activeCategory ? articles.filter((a) => a.category === activeCategory) : articles;
    return base.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  }, [articles, activeCategory]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = paged.length < filtered.length;

  function selectCategory(cat: NewsCategory | null) {
    setActiveCategory(cat);
    setPage(1);
  }

  return (
    <div>
      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => selectCategory(null)}
          className={`font-label-caps text-label-caps text-[10px] tracking-widest px-4 py-2 border transition-colors ${!activeCategory ? "bg-primary text-white border-primary" : "border-savanna-sand text-on-surface-variant hover:border-primary hover:text-primary"}`}
        >
          TODAS
        </button>
        {NEWS_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => selectCategory(cat)}
            className={`flex items-center gap-1.5 font-label-caps text-label-caps text-[10px] tracking-widest px-4 py-2 border transition-colors ${activeCategory === cat ? "bg-primary text-white border-primary" : "border-savanna-sand text-on-surface-variant hover:border-primary hover:text-primary"}`}
          >
            <span className="material-symbols-outlined text-[12px]">{NEWS_CATEGORY_ICONS[cat]}</span>
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="font-label-caps text-label-caps text-[10px] tracking-widest text-on-surface-variant mb-6">
        {filtered.length} ARTIGO{filtered.length !== 1 ? "S" : ""}
        {activeCategory ? ` EM ${activeCategory.toUpperCase()}` : ""}
      </p>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory ?? "all"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {paged.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Load more */}
      {hasMore && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="font-label-caps text-label-caps text-[11px] tracking-widest px-8 py-4 border border-savanna-sand text-on-surface-variant hover:border-primary hover:text-primary transition-colors"
          >
            CARREGAR MAIS ({filtered.length - paged.length} RESTANTES)
          </button>
        </div>
      )}

      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <span className="material-symbols-outlined text-[56px] text-on-surface-variant/20 block mb-4">article</span>
          <p className="font-body-md text-on-surface-variant">Nenhum artigo nesta categoria.</p>
        </div>
      )}
    </div>
  );
}
