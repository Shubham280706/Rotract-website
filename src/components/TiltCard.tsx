"use client";

import { useRef, useSyncExternalStore, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const MAX_TILT = 8;
const HOVER_QUERY = "(hover: hover) and (pointer: fine)";

function subscribeHoverCapable(callback: () => void) {
  const mq = window.matchMedia(HOVER_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getHoverCapableSnapshot() {
  return window.matchMedia(HOVER_QUERY).matches;
}

function getHoverCapableServerSnapshot() {
  return false;
}

function useHoverCapable() {
  return useSyncExternalStore(subscribeHoverCapable, getHoverCapableSnapshot, getHoverCapableServerSnapshot);
}

/**
 * Wraps a card and tilts it in 3D toward the cursor on mouse move, spring
 * back to flat on leave. Perspective/rotate live on this outer wrapper only,
 * so the card's own hover classes (lift, shadow, border) keep working
 * untouched underneath. No-ops on touch devices and under reduced motion.
 */
export function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const canTilt = useHoverCapable();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 300, damping: 22, mass: 0.6 });
  const springY = useSpring(rotateY, { stiffness: 300, damping: 22, mass: 0.6 });

  const active = canTilt && !reduce;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!active || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 2 * MAX_TILT);
    rotateX.set(-(py - 0.5) * 2 * MAX_TILT);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: active ? springX : 0,
        rotateY: active ? springY : 0,
        transformPerspective: 800,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
