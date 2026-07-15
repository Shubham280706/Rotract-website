"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Word-by-word mask reveal, played once on mount (load only — not
 * scroll-triggered). Each word sits in an overflow-hidden box so it rises
 * up from behind a hard edge rather than just fading in place. A trailing
 * space (outside the mask) keeps normal text wrapping between words.
 *
 * `startIndex` lets a headline split across multiple <WordReveal> calls
 * (e.g. around a <br />) keep one continuous stagger sequence.
 */
export function WordReveal({
  words,
  wordClassName,
  startIndex = 0,
  staggerSeconds = 0.04,
}: {
  words: string[];
  wordClassName?: (word: string, i: number) => string | undefined;
  startIndex?: number;
  staggerSeconds?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <>
      {words.map((word, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <motion.span
              className={`inline-block ${wordClassName?.(word, i) ?? ""}`}
              initial={{ opacity: 0, y: reduce ? 0 : "115%" }}
              animate={{ opacity: 1, y: "0%" }}
              transition={{
                duration: reduce ? 0.4 : 0.6,
                ease: [0.2, 0.7, 0.2, 1],
                delay: (startIndex + i) * staggerSeconds,
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}
