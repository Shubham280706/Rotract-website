"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Section-level scroll-reveal container: triggers whileInView once for the
 * group (once: false, so it replays on re-scroll) and staggers direct
 * <Reveal inherit> children by 60ms via Framer's staggerChildren.
 */
export function RevealGroup({
  children,
  as = "div",
  className,
  amount = 0.3,
}: {
  children: ReactNode;
  as?: "div" | "ul" | "section";
  className?: string;
  amount?: number;
}) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.06 } },
      }}
    >
      {children}
    </MotionTag>
  );
}
