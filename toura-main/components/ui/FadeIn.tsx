"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "none";
}

export default function FadeIn({ children, delay = 0, className, direction = "up" }: FadeInProps) {
  const initial =
    direction === "up" ? { opacity: 0, y: 20 }
    : direction === "left" ? { opacity: 0, x: -20 }
    : { opacity: 0 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
