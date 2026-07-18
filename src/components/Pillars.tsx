"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
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
  const reduce = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="mt-16">
      {/* Section sub-heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <span className="mono-label text-azure text-sm tracking-widest">Our Foundation</span>
        <h3 className="display mt-3 text-4xl md:text-5xl text-ink leading-tight">Three Pillars of Rotaract</h3>
        <p className="mt-4 text-lg text-ink/60 max-w-lg mx-auto">
          Every Rotaract club stands on three core values that guide our mission and shape our community impact.
        </p>
      </motion.div>

      {reduce ? (
        // Reduced motion: skip the scroll-pin entirely, show a plain grid.
        <div className="grid gap-12 md:grid-cols-3 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <StaticPillarCard key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>
      ) : (
        <div ref={wrapperRef} className="relative" style={{ height: "250vh" }}>
          <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
            <div className="w-full max-w-2xl px-6">
              {/* Step dots */}
              <div className="mb-10 flex items-center justify-center gap-3">
                {pillars.map((pillar, i) => (
                  <StepDot key={pillar.id} pillar={pillar} index={i} total={pillars.length} progress={scrollYProgress} />
                ))}
              </div>

              <div className="relative h-[440px] sm:h-[400px]">
                {pillars.map((pillar, index) => (
                  <PinnedPillarState
                    key={pillar.id}
                    pillar={pillar}
                    index={index}
                    total={pillars.length}
                    progress={scrollYProgress}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/** Per-pillar 0→1 "how active is this state right now" value, derived from
 * overall scroll progress through the pinned wrapper. Boundary pillars don't
 * fade at the very start/end so the first and last states are fully visible
 * the instant the section locks in or right before it releases. */
function useActiveness(progress: MotionValue<number>, index: number, total: number) {
  const seg = 1 / total;
  const start = index * seg;
  const end = (index + 1) * seg;
  const fade = seg * 0.3;

  let inputRange: number[];
  let outputRange: number[];

  if (total === 1) {
    inputRange = [0, 1];
    outputRange = [1, 1];
  } else if (index === 0) {
    inputRange = [0, end - fade, end, 1];
    outputRange = [1, 1, 0, 0];
  } else if (index === total - 1) {
    inputRange = [0, start, start + fade, 1];
    outputRange = [0, 0, 1, 1];
  } else {
    inputRange = [0, start, start + fade, end - fade, end, 1];
    outputRange = [0, 0, 1, 1, 0, 0];
  }

  return useTransform(progress, inputRange, outputRange, { clamp: true });
}

function StepDot({
  pillar,
  index,
  total,
  progress,
}: {
  pillar: (typeof pillars)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const activeness = useActiveness(progress, index, total);
  const scale = useTransform(activeness, [0, 1], [1, 1.4]);

  return (
    <motion.span
      className="h-2 w-2 rounded-full"
      style={{ backgroundColor: pillar.ringColor, opacity: useTransform(activeness, [0, 1], [0.25, 1]), scale }}
    />
  );
}

function PinnedPillarState({
  pillar,
  index,
  total,
  progress,
}: {
  pillar: (typeof pillars)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const Icon = pillar.icon;
  const activeness = useActiveness(progress, index, total);
  const opacity = activeness;
  const y = useTransform(activeness, [0, 1], [16, 0]);
  const visibility = useTransform(activeness, (v) => (v > 0 ? "visible" : "hidden"));
  const dashOffset = useTransform(activeness, [0, 1], [
    CIRCUMFERENCE,
    CIRCUMFERENCE - (CIRCUMFERENCE * pillar.percent) / 100,
  ]);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center text-center"
      style={{ opacity, y, visibility, pointerEvents: "none" }}
    >
      <span className="mono-label text-ink/40 text-xs tracking-widest">
        Step {pillar.number} / 0{total}
      </span>

      <div className="relative mt-4 h-[200px] w-[200px]">
        <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} className="-rotate-90">
          <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke={pillar.ringTrack} strokeWidth="6" />
          <motion.circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            stroke={pillar.ringColor}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            style={{ strokeDashoffset: dashOffset }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div
            className="flex items-center justify-center w-14 h-14 rounded-full mb-2"
            style={{ background: pillar.ringTrack }}
          >
            <Icon className="w-6 h-6" style={{ color: pillar.ringColor }} />
          </div>
          <span className="mono-label text-[10px] tracking-widest font-bold" style={{ color: pillar.ringColor }}>
            Pillar {pillar.number}
          </span>
        </div>
      </div>

      <div className="mt-6 px-2 max-w-md">
        <h3 className="display text-2xl text-ink leading-tight font-bold">{pillar.label}</h3>
        <p className="text-xs text-ink/40 mono-label tracking-wider mt-1 uppercase font-semibold">
          {pillar.subtitle}
        </p>
        <p className="mt-4 text-base leading-relaxed text-ink/70">{pillar.description}</p>
      </div>
    </motion.div>
  );
}

function StaticPillarCard({
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
      className="group flex flex-col items-center text-center h-full justify-between bg-paper p-6 rounded-xl border border-neutral/60 shadow-[0_4px_20px_rgba(10,22,40,0.02)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex flex-col items-center">
        <div className="relative w-[200px] h-[200px]">
          <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} className="-rotate-90">
            <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke={pillar.ringTrack} strokeWidth="6" />
            <circle
              cx={CENTER}
              cy={CENTER}
              r={RADIUS}
              fill="none"
              stroke={pillar.ringColor}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={dashOffset}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div
              className="flex items-center justify-center w-14 h-14 rounded-full mb-2"
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
        <div className="mt-6 px-2">
          <h3 className="display text-2xl text-ink leading-tight font-bold">{pillar.label}</h3>
          <p className="text-xs text-ink/40 mono-label tracking-wider mt-1 uppercase font-semibold">
            {pillar.subtitle}
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/70">{pillar.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
