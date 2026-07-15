"use client";

import { motion } from "framer-motion";
import { club } from "@/content/club";

const IMAGE_URL = "url('/projects/charter-installation-ceremony/1.png')";

export function ImageTextShowcase() {
  return (
    <section
      className="relative bg-[#2d0a1e] py-24 md:py-32 overflow-hidden border-t border-white/[0.04]"
    >
      {/* Blueprint lines watermark in background */}
      <div className="blueprint absolute inset-0 opacity-[0.02] pointer-events-none" aria-hidden="true" />

      {/* Dynamic ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-royal/10 blur-[130px]" />
      </div>

      <div className="shell relative z-10 flex flex-col items-center justify-center">
        {/* Giant Image-Masked Typography */}
        <motion.div
          className="w-full flex flex-col items-center select-none"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
        >
          {/* ROTARACT Line */}
          <h2
            className="display text-6xl sm:text-7xl md:text-[11vw] font-black uppercase tracking-tighter leading-none animate-text-bg-scroll"
            style={{
              backgroundImage: IMAGE_URL,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              backgroundSize: "130% 130%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            ROTARACT
          </h2>

          {/* BHARUCH Line */}
          <h2
            className="display text-6xl sm:text-7xl md:text-[11vw] font-black uppercase tracking-tighter leading-none animate-text-bg-scroll -mt-2 md:-mt-4"
            style={{
              backgroundImage: IMAGE_URL,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              backgroundSize: "130% 130%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              animationDelay: "-5s",
            }}
          >
            BHARUCH
          </h2>
        </motion.div>

        {/* Small subtitle indicator */}
        <div className="mt-8 flex items-center gap-3">
          <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden="true" />
          <span className="mono-label text-[10px] tracking-widest text-white/40">
            Fellowship Through Service · Established {club.charterYear}
          </span>
          <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
