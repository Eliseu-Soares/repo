"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/motion";

export default function PatternDivider() {
  return (
    <div className="w-full h-px bg-savanna-sand relative overflow-visible">
      {/* Line expands from center */}
      <motion.div
        className="absolute inset-0 bg-primary/30 origin-center"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-8">
        <motion.div
          className="w-12 h-12 pattern-overlay border border-savanna-sand rotate-45"
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 45 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        />
      </div>
    </div>
  );
}
