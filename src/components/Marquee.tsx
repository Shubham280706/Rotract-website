"use client";

import { motion } from "framer-motion";

export function Marquee() {
  const items = [
    "Fellowship",
    "Service above self",
    "Leadership",
    "People of Action",
    "Rotary Youth",
    "RI District 3060",
    "Rotaract Bharuch",
  ];

  // Join items into a single string separated by bullets
  const textContent = items.join("   ·   ") + "   ·   ";

  return (
    <div className="relative w-full overflow-hidden bg-royal py-5 border-y border-white/10 select-none">
      {/* Side gradient overlays to create soft fade bounds */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#c2185b] to-transparent z-10 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#c2185b] to-transparent z-10 pointer-events-none" aria-hidden="true" />

      <div className="flex whitespace-nowrap min-w-full">
        {/* Animated text tracks running side-by-side to form a seamless loop */}
        <motion.div
          animate={{ x: [0, "-33.33%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex shrink-0 gap-8 pr-8 text-sm md:text-base font-bold tracking-wider text-gold-light uppercase font-display"
        >
          <span>{textContent}</span>
          <span>{textContent}</span>
          <span>{textContent}</span>
        </motion.div>
      </div>
    </div>
  );
}
