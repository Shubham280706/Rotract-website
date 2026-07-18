"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Users, Globe, Lightbulb, Sparkles } from "lucide-react";
import { club } from "@/content/club";

const pillars = [
  {
    icon: Heart,
    label: "Service",
    description: "Hands-on projects for blood drives, health camp distributions, and winter relief.",
    colorClass: "text-royal",
    bgColorClass: "bg-royal/5",
    borderColorClass: "hover:border-royal/30",
  },
  {
    icon: Users,
    label: "Leadership",
    description: "Run projects, hold executive positions, and develop teamwork & public speaking.",
    colorClass: "text-azure",
    bgColorClass: "bg-azure/5",
    borderColorClass: "hover:border-azure/30",
  },
  {
    icon: Globe,
    label: "Community",
    description: "Connect with a global fellowship and build local change networks.",
    colorClass: "text-gold",
    bgColorClass: "bg-gold/5",
    borderColorClass: "hover:border-gold/30",
  },
  {
    icon: Lightbulb,
    label: "Empowerment",
    description: "Empower youth through skill workshops, mentorship, and career readiness.",
    colorClass: "text-royal",
    bgColorClass: "bg-royal/5",
    borderColorClass: "hover:border-royal/30",
  },
];

const stackImages = [
  {
    src: "/intro/charity.png",
    alt: "Charter installation ceremony",
    className: "absolute top-0 left-0 w-[68%] aspect-[4/3] rounded-xl shadow-md border-4 border-white z-10",
    rotate: -6,
  },
  {
    src: "/intro/community.png",
    alt: "Community cleanup drive",
    className: "absolute top-6 right-0 w-[64%] aspect-[4/3] rounded-xl shadow-md border-4 border-white z-0",
    rotate: 8,
  },
  {
    src: "/intro/workshop.png",
    alt: "Professional development workshop",
    className: "absolute bottom-0 left-[12%] w-[72%] aspect-[4/3] rounded-xl shadow-lg border-4 border-white z-20",
    rotate: -2,
  },
];

export function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#fbf8f9] py-16 md:py-28 overflow-hidden border-y border-neutral/60"
    >
      {/* Subtle blueprint grid overlay for styling cohesion */}
      <div className="blueprint absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true" />

      {/* Decorative ambient radial glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-royal/5 blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-azure/5 blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* ─── LEFT COLUMN: CONTENT & PILLARS ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 md:space-y-8"
          >
            {/* Tag / Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-royal animate-pulse" />
              <span className="mono-label text-royal font-bold text-xs tracking-[0.2em]">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-3 md:space-y-4">
              <h2 className="display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05]">
                A Community <br />
                <span className="text-royal">of Action.</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-ink/80 leading-relaxed font-light">
                <span className="font-semibold text-royal">Rotaract Club of Bharuch</span> is a dynamic community of young leaders, changemakers, and volunteers committed to creating positive social impact.
              </p>
            </div>

            {/* Paragraph Description */}
            <p className="text-base sm:text-lg text-ink/75 leading-relaxed font-light">
              Sponsored by {club.sponsorClub} (RI District {club.riDistrict}), we bring together passionate individuals to lead, learn, and serve. Through impactful community development projects, youth empowerment drives, and professional workshops, we strive to build stronger fellowship and leave a lasting mark on Bharuch and beyond.
            </p>

            {/* MOBILE ONLY: Asymmetrical Editorial Photo Grid Collage */}
            <div className="lg:hidden w-full space-y-3 py-2">
              {/* Primary Image: 16/9 Aspect Ratio */}
              <div className="w-full aspect-[16/9] rounded-xl overflow-hidden border border-neutral/60 shadow-sm bg-white p-1">
                <img
                  src={stackImages[0].src}
                  alt={stackImages[0].alt}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              {/* Secondary & Tertiary Images: 4/3 Aspect Ratio Side-by-Side */}
              <div className="grid grid-cols-2 gap-3">
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-neutral/60 shadow-sm bg-white p-1">
                  <img
                    src={stackImages[1].src}
                    alt={stackImages[1].alt}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-neutral/60 shadow-sm bg-white p-1">
                  <img
                    src={stackImages[2].src}
                    alt={stackImages[2].alt}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Pillars Grid (2x2 on all viewports for compactness on mobile) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 md:pt-4">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className={`group flex items-start gap-2.5 sm:gap-4 p-3 sm:p-4 rounded-xl border border-neutral/50 bg-white/70 backdrop-blur-sm shadow-[0_4px_16px_rgba(26,26,46,0.02)] transition-all duration-300 ${pillar.borderColorClass}`}
                  >
                    <div className="flex shrink-0 items-center justify-center w-10 h-10 rounded-xl bg-royal/5 border border-neutral/30 group-hover:bg-royal group-hover:text-white transition-all duration-300">
                      <Icon className={`h-5 w-5 ${pillar.colorClass} group-hover:text-white transition-colors duration-300`} />
                    </div>
                    <div className="space-y-0.5 sm:space-y-1 min-w-0">
                      <h4 className="font-bold sm:font-semibold text-ink text-sm sm:text-base group-hover:text-royal transition-colors duration-300 truncate">
                        {pillar.label}
                      </h4>
                      <p className="text-xs sm:text-sm text-ink/65 leading-normal font-light">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ─── DESKTOP ONLY: STAGGERED PHOTO COLLAGE ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="hidden lg:flex lg:col-span-5 relative justify-center items-center lg:h-[500px]"
          >
            {/* Outer dotted accent circle framing the photos */}
            <div className="absolute w-[80%] aspect-square border border-dashed border-neutral/60 rounded-full scale-110 opacity-60 animate-gear-spin pointer-events-none" />

            {/* Photo stack wrapper */}
            <div className="relative w-full max-w-[420px] aspect-[4/3]">
              {stackImages.map((img, i) => {
                const isHovered = hoveredIdx === i;
                const defaultZIndex = i === 2 ? 20 : i === 0 ? 10 : 0;
                
                return (
                  <motion.div
                    key={i}
                    className={img.className}
                    style={{
                      transformOrigin: "center center",
                    }}
                    animate={{
                      scale: isHovered ? 1.08 : 1,
                      rotate: isHovered ? 0 : img.rotate,
                      zIndex: isHovered ? 40 : defaultZIndex,
                      boxShadow: isHovered 
                        ? "0 20px 40px rgba(194, 24, 91, 0.15)" 
                        : "0 10px 25px rgba(26, 26, 46, 0.08)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 22,
                    }}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-lg">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover select-none"
                        draggable="false"
                      />
                      {/* Smooth gradient hover overlay to match the theme color */}
                      <div className="absolute inset-0 bg-gradient-to-t from-royal/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Decorative Sparkle icon floats */}
            <div className="absolute -top-4 right-10 text-royal/20 animate-pulse pointer-events-none" style={{ animationDuration: "3s" }}>
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="absolute bottom-10 -left-4 text-azure/20 animate-pulse pointer-events-none" style={{ animationDuration: "4s", animationDelay: "1s" }}>
              <Sparkles className="h-4 w-4" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
