"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { ImageSlot } from "@/components/ImageSlot";
import { avenues, projects, type Avenue } from "@/content/projects";

type Filter = "All" | Avenue;
const filters: Filter[] = ["All", ...avenues];

export function Projects() {
  const [active, setActive] = useState<Filter>("All");

  const shown =
    active === "All" ? projects : projects.filter((p) => p.avenue === active);

  return (
    <section id="projects" className="border-t border-neutral py-24 md:py-32">
      <div className="shell">
        <SectionHeader
          eyebrow="Our work · Avenues of Service"
          title={<>Projects that show up.</>}
          lede="Rotary organises service into four Avenues. Click on any project card to view more details, statistics, and impact on a dedicated page."
        />

        {/* Filters */}
        <div className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-1">
          {filters.map((f) => {
            const on = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                aria-pressed={on}
                className={`mono-label shrink-0 rounded-[2px] border px-3.5 py-2 transition-colors duration-200 ${
                  on
                    ? "border-royal bg-royal text-paper"
                    : "border-neutral bg-paper text-ink/70 hover:border-royal hover:text-royal"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.ul
          layout
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <Link href={`/projects/${p.slug}`} key={p.title} className="flex flex-col h-full focus:outline-none">
                <motion.li
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="group flex flex-col h-full border border-neutral bg-paper hover:border-azure/40 hover:-translate-y-1.5 hover:shadow-[0_12px_36px_rgba(10,22,40,0.06)] transition-all duration-300 ease-out outline-none glass-shine"
                >
                  <ImageSlot
                    src={p.images[0]}
                    label={p.avenue}
                    aspect="3/2"
                    alt={p.title}
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="mono-label text-azure">{p.avenue}</span>
                      <span className="mono-label text-ink/45">{p.date}</span>
                    </div>
                    <h3 className="display mt-3 text-xl leading-tight text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">
                      {p.summary}
                    </p>
                    {p.impact && (
                      <p className="mono-label mt-4 border-t border-neutral pt-3 text-royal">
                        Impact · {p.impact}
                      </p>
                    )}
                  </div>
                </motion.li>
              </Link>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
