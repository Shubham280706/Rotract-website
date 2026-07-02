"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scroll reveal: subtle opacity + small translateY. Under reduced
 * motion, movement is dropped and only opacity fades in.
 * `index` staggers grouped items (30–80ms feel).
 */
export function Reveal({
  children,
  index = 0,
  as = "div",
  className,
  y = 14,
}: {
  children: ReactNode;
  index?: number;
  as?: "div" | "li" | "section" | "article" | "span";
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
        delay: Math.min(index * 0.05, 0.4),
      }}
    >
      {children}
    </MotionTag>
  );
}
