"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from "@/lib/motion";

type Direction = "up" | "left" | "right";

interface Props {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

const dirMap = { up: fadeUp, left: fadeLeft, right: fadeRight };

export function AnimatedSection({
  children,
  className,
  direction = "up",
  delay = 0,
  stagger = 0.08,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer(stagger)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedItem({
  children,
  className,
  direction = "up",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
}) {
  const variant = dirMap[direction];
  return (
    <motion.div
      variants={variant}
      className={className}
      transition={delay ? { delay: delay / 1000 } : undefined}
    >
      {children}
    </motion.div>
  );
}
