"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode, useSyncExternalStore } from "react";

/**
 * Singleton scroll-direction tracker. One listener for the whole page no
 * matter how many <Reveal> instances mount, so grids of dozens of cards
 * don't each attach their own scroll handler.
 */
type Direction = "up" | "down";
let direction: Direction = "down";
let lastY = 0;
let ticking = false;
let started = false;
const listeners = new Set<() => void>();

function handleScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const y = window.scrollY;
    if (Math.abs(y - lastY) > 2) {
      direction = y > lastY ? "down" : "up";
      lastY = y;
      listeners.forEach((l) => l());
    }
    ticking = false;
  });
}

function subscribe(listener: () => void) {
  if (!started && typeof window !== "undefined") {
    started = true;
    lastY = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
  }
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return direction;
}

function getServerSnapshot(): Direction {
  return "down";
}

function useScrollDirection() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

const EASE = [0.2, 0.7, 0.2, 1] as const;

/**
 * Scroll reveal: fades + rises in on the way down, and drifts out in the
 * opposite direction (rather than a mirror replay) when scrolled back past.
 * Under reduced motion, movement is dropped and only opacity fades.
 *
 * Pass `inherit` when nesting inside a <RevealGroup> so this item takes its
 * visibility state from the group's staggerChildren instead of triggering
 * its own viewport observer.
 */
export function Reveal({
  children,
  index = 0,
  as = "div",
  className,
  y = 24,
  once = false,
  inherit = false,
}: {
  children: ReactNode;
  index?: number;
  as?: "div" | "li" | "section" | "article" | "span" | "ul";
  className?: string;
  y?: number;
  once?: boolean;
  inherit?: boolean;
}) {
  const reduce = useReducedMotion();
  const dir = useScrollDirection();
  const MotionTag = motion[as];
  const travel = reduce ? 0 : y;
  const enterFrom = travel;
  const exitTo = dir === "up" ? -travel : travel;

  const variants: Variants = {
    hidden: { opacity: 0, y: enterFrom },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: EASE, delay: Math.min(index * 0.06, 0.4) },
    },
  };

  if (inherit) {
    return (
      <MotionTag className={className} variants={variants}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      viewport={{ once, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: exitTo },
        visible: variants.visible,
      }}
    >
      {children}
    </MotionTag>
  );
}
