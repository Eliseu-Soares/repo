"use client";
import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

export default function SobreTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      <div className="hidden lg:block absolute left-[108px] top-2 bottom-2 w-px bg-savanna-sand" />
      <div className="flex flex-col gap-10">
        {items.map((item, i) => (
          <motion.div
            key={item.year}
            className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-start"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
          >
            <div className="lg:w-[108px] shrink-0 flex items-center gap-4 lg:justify-end lg:pr-4">
              <span className="font-display-lg text-[28px] font-bold text-primary leading-none">{item.year}</span>
            </div>
            <div className="hidden lg:flex items-center justify-center w-6 shrink-0 relative z-10">
              <div className="w-3 h-3 bg-primary border-2 border-background rounded-full" />
            </div>
            <div className="lg:pl-6 pb-8 border-b border-savanna-sand lg:border-0 last:border-0 last:pb-0 flex-1">
              <h3 className="font-headline-sm text-[18px] font-semibold text-on-surface mb-2">{item.title}</h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
