import { Variants } from "framer-motion";

export const SPRING = { type: "spring", stiffness: 260, damping: 22 } as const;
export const EASE_SPRING = [0.22, 1, 0.36, 1] as const;

/* ── Shared container that staggers children ── */
export const staggerContainer = (staggerChildren = 0.08): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren: 0.05 } },
});

/* ── Individual item variants ── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.55, ease: EASE_SPRING } },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.55, ease: EASE_SPRING } },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.55, ease: EASE_SPRING } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.45, ease: EASE_SPRING } },
};

/* ── Card 3-D tilt (use with whileHover) ── */
export const cardTilt = {
  rest: { rotateX: 0, rotateY: 0, scale: 1 },
  hover: { scale: 1.015, transition: { duration: 0.3, ease: EASE_SPRING } },
};

/* ── Button press ── */
export const btnTap = { scale: 0.96 };
export const btnHover = { scale: 1.015, transition: { duration: 0.2, ease: EASE_SPRING } };
