"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Pins `base` full-screen while `top` rises up from below and slides over it,
 * like one page settling on top of another. `revealVh` controls how much
 * extra scroll distance the rise takes (bigger = slower reveal).
 */
export function StackReveal({
  base,
  top,
  revealVh = 50,
}: {
  base: ReactNode;
  top: ReactNode;
  revealVh?: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`${revealVh}vh`, "0vh"]);

  return (
    <div className="relative">
      <div ref={wrapperRef} style={{ height: `calc(100vh + ${revealVh}vh)` }}>
        <div className="sticky top-0 h-screen overflow-hidden">{base}</div>
      </div>

      <motion.div
        style={{ y, marginTop: `-${revealVh}vh` }}
        className="relative z-10 rounded-t-[2.5rem] md:rounded-t-[3rem] overflow-hidden bg-paper shadow-[0_-30px_70px_rgba(10,22,40,0.22)]"
      >
        {top}
      </motion.div>
    </div>
  );
}
