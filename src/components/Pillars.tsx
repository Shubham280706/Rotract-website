"use client";

import { motion } from "framer-motion";
import { Heart, Users, Globe } from "lucide-react";

const pillars = [
  {
    id: "service",
    number: "01",
    label: "Service",
    subtitle: "above self",
    description:
      "Hands-on projects that meet real needs in Bharuch — blood drives, health checkups, cleanups, and winter warmth distributions.",
    icon: Heart,
    ringColor: "#e11d48",
    ringTrack: "rgba(225, 29, 72, 0.10)",
    percent: 90,
  },
  {
    id: "leadership",
    number: "02",
    label: "Leadership",
    subtitle: "by example",
    description:
      "Run community projects, manage a board and budget, and develop professional public speaking and team management skills.",
    icon: Users,
    ringColor: "#f59e0b",
    ringTrack: "rgba(245, 158, 11, 0.12)",
    percent: 80,
  },
  {
    id: "fellowship",
    number: "03",
    label: "Fellowship",
    subtitle: "worldwide",
    description:
      "Build friendships through working side-by-side. Access a global network of 250,000+ Rotaractors across 180 countries.",
    icon: Globe,
    ringColor: "#0891b2",
    ringTrack: "rgba(8, 145, 178, 0.10)",
    percent: 85,
  },
];

// Ring geometry: radius=80, circumference=2*PI*80≈503
const RADIUS = 80;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const SIZE = 200;
const CENTER = SIZE / 2;

export function Pillars() {
  return (
    <div className="mt-16">
      {/* Section sub-heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="mono-label text-azure text-sm tracking-widest">Our Foundation</span>
        <h3 className="display mt-3 text-4xl md:text-5xl text-ink leading-tight">Three Pillars of Rotaract</h3>
        <p className="mt-4 text-lg text-ink/60 max-w-lg mx-auto">
          Every Rotaract club stands on three core values that guide our mission and shape our community impact.
        </p>
      </motion.div>

      {/* Symmetrical 3-Column Grid */}
      <div className="grid gap-12 md:grid-cols-3 max-w-5xl mx-auto">
        {pillars.map((pillar, index) => (
          <PillarRing key={pillar.id} pillar={pillar} index={index} />
        ))}
      </div>
    </div>
  );
}

function PillarRing({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[number];
  index: number;
}) {
  const Icon = pillar.icon;
  const dashOffset = CIRCUMFERENCE - (CIRCUMFERENCE * pillar.percent) / 100;

  return (
    <motion.div
      className="group flex flex-col items-center text-center h-full justify-between bg-paper p-6 rounded-xl border border-neutral/60 hover:border-royal/30 shadow-[0_4px_20px_rgba(10,22,40,0.02)] hover:shadow-[0_20px_40px_rgba(194,24,91,0.05)] transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="flex flex-col items-center">
        {/* Ring */}
        <div className="relative w-[200px] h-[200px] cursor-pointer">
          <svg
            width={SIZE}
            height={SIZE}
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            className="transform -rotate-90"
          >
            {/* Track */}
            <circle
              cx={CENTER}
              cy={CENTER}
              r={RADIUS}
              fill="none"
              stroke={pillar.ringTrack}
              strokeWidth="6"
            />
            {/* Progress arc */}
            <motion.circle
              cx={CENTER}
              cy={CENTER}
              r={RADIUS}
              fill="none"
              stroke={pillar.ringColor}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              initial={{ strokeDashoffset: CIRCUMFERENCE }}
              whileInView={{ strokeDashoffset: dashOffset }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 + index * 0.15, ease: "easeOut" }}
            />
          </svg>

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div
              className="flex items-center justify-center w-14 h-14 rounded-full mb-2 transition-transform duration-300 group-hover:scale-110"
              style={{ background: pillar.ringTrack }}
            >
              <Icon className="w-6 h-6" style={{ color: pillar.ringColor }} />
            </div>
            <span
              className="mono-label text-[10px] tracking-widest font-bold"
              style={{ color: pillar.ringColor }}
            >
              Pillar {pillar.number}
            </span>
          </div>
        </div>

        {/* Label + description below the ring */}
        <div className="mt-6 px-2">
          <h3 className="display text-2xl text-ink leading-tight font-bold">
            {pillar.label}
          </h3>
          <p className="text-xs text-ink/40 mono-label tracking-wider mt-1 uppercase font-semibold">
            {pillar.subtitle}
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            {pillar.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
