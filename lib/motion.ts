// Shared Framer Motion variants — use across all sections
import type { Variants } from "framer-motion";

export const EASE = [0.25, 0.1, 0.25, 1] as const;
export const EASE_REVEAL = [0.77, 0, 0.175, 1] as const;
export const EASE_SPRING = [0.34, 1.56, 0.64, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -64 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 64 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE } },
};

// Image wipe: reveals from left to right (cinematic)
export const clipReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  show: { clipPath: "inset(0 0% 0 0)", transition: { duration: 1.1, ease: EASE_REVEAL } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const staggerFast: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const staggerSlow: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};

export const viewportOnce = { once: true, margin: "-80px" } as const;
