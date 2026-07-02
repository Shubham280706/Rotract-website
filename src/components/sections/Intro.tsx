"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Heart, Users, Globe, Lightbulb } from "lucide-react";

const collageImages = [
  { src: "/intro/community.png", alt: "Community cleanup drive", row: 1 },
  { src: "/intro/workshop.png", alt: "Professional development workshop", row: 1 },
  { src: "/intro/team.png", alt: "Team volunteers", row: 1 },
  { src: "/intro/charity.png", alt: "Charity distribution", row: 2 },
  { src: "/intro/festival.png", alt: "Food festival event", row: 2 },
  { src: "/intro/environment.png", alt: "Tree planting initiative", row: 2 },
  { src: "/projects/charter-installation-ceremony-1.png", alt: "Charter ceremony", row: 3 },
  { src: "/projects/charter-installation-ceremony-2.png", alt: "Installation ceremony", row: 3 },
];

const pillars = [
  { icon: Heart, label: "Service", color: "text-royal" },
  { icon: Users, label: "Leadership", color: "text-azure" },
  { icon: Globe, label: "Community", color: "text-gold" },
  { icon: Lightbulb, label: "Empowerment", color: "text-royal" },
];

export function Intro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax: rows move at different speeds
  const row1Y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const row2Y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const row3Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const rowTransforms = [row1Y, row2Y, row3Y];

  const row1 = collageImages.filter((img) => img.row === 1);
  const row2 = collageImages.filter((img) => img.row === 2);
  const row3 = collageImages.filter((img) => img.row === 3);
  const rows = [row1, row2, row3];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-neutral"
      style={{ minHeight: "85vh" }}
    >
      {/* ─── PHOTO COLLAGE WALL (Background) ─── */}
      <div className="absolute inset-0 z-0">
        {rows.map((row, rowIdx) => (
          <motion.div
            key={rowIdx}
            style={{ y: rowTransforms[rowIdx] }}
            className="flex gap-2 md:gap-3 mb-2 md:mb-3"
          >
            {/* Duplicate images for seamless fill */}
            {[...row, ...row, ...row].map((img, imgIdx) => (
              <div
                key={imgIdx}
                className="shrink-0 overflow-hidden rounded-[4px]"
                style={{
                  width: rowIdx === 2 ? "50%" : "33.33%",
                  aspectRatio: rowIdx === 2 ? "16/9" : "4/3",
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        ))}

        {/* Dark overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/70 to-ink/60" />

        {/* Diagonal pattern overlay for texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.1) 10px,
              rgba(255,255,255,0.1) 11px
            )`,
          }}
        />
      </div>

      {/* ─── FLOATING GLASSMORPHISM CARD (Foreground) ─── */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-16 md:py-20">
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="relative max-w-4xl w-full"
        >
          {/* Glass Card */}
          <div className="relative backdrop-blur-xl bg-white/[0.12] border border-white/[0.18] rounded-xl px-5 py-8 sm:p-10 md:p-12 lg:p-14 shadow-[0_32px_80px_rgba(0,0,0,0.35)]">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/[0.08] via-transparent to-royal/[0.06] pointer-events-none" />

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative z-10 flex items-center gap-2 mb-4"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-light/50 to-transparent" />
              <span className="mono-label text-gold-light text-[10px] tracking-[0.2em] font-bold">
                Who We Are
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-light/50 to-transparent" />
            </motion.div>

            {/* Quote Text */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative z-10"
            >
              <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/90 font-light text-center">
                <span className="text-gold-light font-semibold">Rotaract Club of Bharuch</span>{" "}
                is a dynamic community of young leaders, changemakers, and volunteers committed to creating a positive impact through{" "}
                <span className="text-gold-light font-medium">service, leadership, and fellowship</span>.{" "}
                Guided by the values of Rotary Club of Bharuch, our club brings together passionate individuals who believe in making a meaningful difference in society through impactful community projects, professional development, environmental initiatives, and youth empowerment.{" "}
                With every project, we strive to{" "}
                <span className="text-gold-light font-medium">inspire action</span>,{" "}
                build stronger communities, and create opportunities that leave a lasting impact on Bharuch and beyond.
              </p>
            </motion.blockquote>

            {/* Pillar Icons Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="relative z-10 flex items-center justify-center gap-1 sm:gap-6 md:gap-10 mt-6 pt-6 border-t border-white/[0.1]"
            >
              {pillars.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center group-hover:bg-white/[0.15] group-hover:border-gold-light/30 transition-all duration-300">
                    <p.icon className="h-4 w-4 md:h-5 md:w-5 text-gold-light" />
                  </div>
                  <span className="mono-label text-[8px] md:text-[10px] text-white/50 tracking-normal md:tracking-widest font-bold">
                    {p.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Decorative floating dots */}
          <div className="absolute -top-4 -left-4 w-3 h-3 rounded-full bg-gold-light/40 animate-pulse" />
          <div className="absolute -bottom-3 -right-3 w-2 h-2 rounded-full bg-azure/40 animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 -right-6 w-1.5 h-1.5 rounded-full bg-gold-light/30 animate-pulse" style={{ animationDelay: "0.5s" }} />
        </motion.div>
      </div>
    </section>
  );
}
