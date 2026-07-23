"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import type { Review } from "@/types";

interface Props {
  reviews: Review[];
  rating: number;
  reviewCount: number;
}

function RatingBar({ label, count, total }: { label: string; count: number; total: number }) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="font-label-caps text-label-caps text-on-surface-variant shrink-0 w-12">
        {label}
      </span>
      <div className="flex-1 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
      <span className="font-label-caps text-label-caps text-on-surface-variant shrink-0 w-8 text-right">
        {count}
      </span>
    </div>
  );
}

function StarDisplay({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className="material-symbols-outlined text-[16px] text-primary"
          style={{
            fontVariationSettings: n <= rating ? '"FILL" 1' : '"FILL" 0',
          }}
        >
          star
        </span>
      ))}
    </div>
  );
}

export default function ReviewsSection({ reviews, rating, reviewCount }: Props) {
  const breakdown = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
  }));

  return (
    <section className="px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto py-16 border-t border-savanna-sand">
      {/* Header */}
      <div className="mb-12">
        <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-3 uppercase">
          Avaliações
        </span>
        <h2 className="font-headline-sm text-headline-sm">
          O que dizem os viajantes
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
        {/* Average score */}
        <div className="flex flex-col items-center justify-center text-center bg-surface-container-low p-8 border border-savanna-sand">
          <span className="font-display-lg text-[72px] leading-none font-bold text-on-surface mb-2">
            {rating.toFixed(1)}
          </span>
          <StarDisplay rating={Math.round(rating)} />
          <span className="font-body-md text-sm text-on-surface-variant mt-3">
            {reviewCount.toLocaleString("pt-AO")} avaliações
          </span>
        </div>

        {/* Breakdown bars */}
        <div className="md:col-span-2 flex flex-col justify-center gap-4">
          {breakdown.map(({ star, count }) => (
            <RatingBar
              key={star}
              label={`${star} ★`}
              count={count}
              total={reviews.length}
            />
          ))}
        </div>
      </div>

      {/* Review cards */}
      {reviews.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {reviews.map((review) => (
            <motion.article
              key={review.id}
              variants={fadeUp}
              className="border border-savanna-sand p-6 flex flex-col gap-4"
            >
              <StarDisplay rating={review.rating} />
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed line-clamp-5">
                &ldquo;{review.comment}&rdquo;
              </p>
              <div className="mt-auto pt-4 border-t border-savanna-sand flex items-center gap-3">
                <div className="w-9 h-9 bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    person
                  </span>
                </div>
                <div>
                  <span className="font-label-caps text-label-caps text-on-surface block">
                    {review.author}
                  </span>
                  <span className="font-label-caps text-label-caps text-on-surface-variant">
                    {new Date(review.date).toLocaleDateString("pt-AO", {
                      year: "numeric",
                      month: "long",
                    })}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      ) : null}

      {/* CTA */}
      <div className="border border-dashed border-savanna-sand p-8 text-center">
        <span className="material-symbols-outlined text-[40px] text-on-surface-variant/30 block mb-4">
          rate_review
        </span>
        <h3 className="font-headline-sm text-headline-sm mb-2">
          Partilhe a sua experiência
        </h3>
        <p className="font-body-md text-sm text-on-surface-variant mb-6 max-w-sm mx-auto">
          Já visitou este destino? Ajude outros viajantes com a sua opinião.
        </p>
        <button className="bg-primary text-white font-label-caps text-label-caps px-8 py-3 tracking-widest hover:bg-primary-container transition-colors">
          ESCREVER AVALIAÇÃO
        </button>
      </div>
    </section>
  );
}
