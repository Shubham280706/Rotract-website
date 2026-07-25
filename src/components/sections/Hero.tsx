"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { club } from "@/content/club";
import { Magnetic } from "@/components/Magnetic";

const PARTICLES = [
  { top: "12%", left: "15%", size: "w-1.5 h-1.5", duration: 7, delay: 0 },
  { top: "28%", left: "80%", size: "w-2 h-2", duration: 9, delay: 1.2 },
  { top: "42%", left: "10%", size: "w-1 h-1", duration: 6, delay: 2.1 },
  { top: "65%", left: "88%", size: "w-2 h-2", duration: 8.5, delay: 0.5 },
  { top: "78%", left: "25%", size: "w-1.5 h-1.5", duration: 7.5, delay: 1.8 },
  { top: "35%", left: "55%", size: "w-1 h-1", duration: 6.8, delay: 2.8 },
];

export function Hero() {
  const { scrollY } = useScroll();
  const illustrationY = useTransform(scrollY, [0, 500], [0, 60]);

  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-white">
      {/* 1. Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#FFF8FB] to-[#FCE6F1] pointer-events-none" />

      {/* Subtle radial glow behind hero content */}
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-[700px] h-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,20,90,0.14)_0%,rgba(252,230,241,0.5)_50%,transparent_75%)] blur-3xl z-0"
      />

      {/* Top-left light dotted pattern */}
      <div className="pointer-events-none absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-[radial-gradient(#D4145A_1.2px,transparent_1.2px)] [background-size:16px_16px] opacity-15 [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_75%)] z-0" />

      {/* Floating light particles */}
      {PARTICLES.map((particle, idx) => (
        <motion.div
          key={idx}
          style={{ top: particle.top, left: particle.left }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          className={`pointer-events-none absolute rounded-full bg-[#D4145A] shadow-[0_0_8px_rgba(212,20,90,0.6)] ${particle.size} z-0`}
        />
      ))}

      {/* 2. Main Hero Content Container */}
      <div className="shell relative z-10 flex-1 flex flex-col justify-center pt-24 sm:pt-28 pb-16">
        <div className="max-w-3xl mx-auto sm:mx-0 text-left">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            className="font-black text-[#0D1329] text-[clamp(2.7rem,8.5vw,5.5rem)] leading-[1.02] tracking-tight"
          >
            Rotaract Club <br />
            of <span className="text-[#D4145A]">Bharuch</span>
          </motion.h1>

          {/* Accent Line + Glowing Pink Dot */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            className="origin-left mt-5 flex items-center gap-2.5"
          >
            <div className="w-12 h-[3.5px] bg-[#D4145A] rounded-full" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#D4145A] shadow-[0_0_10px_#D4145A]" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="mt-3 text-[18px] sm:text-xl font-medium text-[#64748B]"
          >
            Service Above Self
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="mt-5 max-w-[90%] sm:max-w-xl text-[16px] leading-[1.7] text-[#475569]"
          >
            Sponsored by {club.sponsorClub} · RI District {club.riDistrict} · Rotary Year {club.rotaryYear} · Club ID {club.clubId} · Chartered {club.charterDate}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Magnetic>
              <a
                href="#projects"
                className="w-full sm:w-auto min-h-[50px] px-7 py-3.5 flex items-center justify-center gap-2.5 rounded-[16px] bg-[#D4145A] hover:bg-[#B80F4D] text-white font-semibold text-[15px] shadow-[0_8px_25px_rgba(212,20,90,0.25)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                See our work
                <ArrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScdyBV2EqcsHkYlLOlOwfYR2KWfpKIBa55HtzIEPlZLkQj21g/viewform?fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacXMrhXijSbwLbI4RNaACF0QJnGVH2bw0ADAn22m3bXIkkV4YhAG_7UHxr0Rg_aem_SO--CmroTYft_2yJddrSwg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[50px] px-7 py-3.5 flex items-center justify-center gap-2.5 rounded-[16px] bg-white border border-[#D4145A] text-[#0D1329] hover:bg-[#D4145A] hover:text-white font-semibold text-[15px] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                Join us
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      {/* 3. Bharuch Landmark Illustration Watermark */}
      <motion.div
        style={{ y: illustrationY }}
        className="pointer-events-none absolute bottom-12 sm:bottom-6 left-1/2 -translate-x-1/2 w-[120vw] sm:w-[85vw] max-w-[1100px] h-[200px] sm:h-[300px] z-0 overflow-hidden"
      >
        <div
          className="relative w-full h-full opacity-[0.14]"
          style={{
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 60%, transparent 100%), linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 60%, transparent 100%), linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <Image
            src="/bharuch-illustration.png"
            alt=""
            fill
            priority
            className="object-contain object-bottom filter sepia-[0.3] hue-rotate-[315deg] saturate-[2.5] brightness-[0.9] blur-[1px]"
          />
        </div>
      </motion.div>

      {/* 4. Scroll Indicator */}
      <div className="relative z-20 pb-8 pt-2 flex flex-col items-center justify-center gap-2 pointer-events-none">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-[#0D1329]/40 flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-[#D4145A]"
          />
        </motion.div>
        <span className="mono-label text-[10px] tracking-[8px] text-[#0D1329]/60 font-semibold pl-[8px]">
          SCROLL TO EXPLORE
        </span>
      </div>

      {/* 5. Bottom Wave Transition */}
      <div className="relative w-full overflow-hidden leading-none z-20 pointer-events-none -mb-px">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8 sm:h-12 text-white fill-current"
        >
          <path d="M0,0 C150,60 350,-30 500,40 C650,110 900,20 1200,35 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
