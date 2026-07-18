"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { ImageSlot } from "@/components/ImageSlot";
import { Reveal } from "@/components/Reveal";
import { RevealGroup } from "@/components/RevealGroup";
import { TiltCard } from "@/components/TiltCard";
import { projects, type Project } from "@/content/projects";
import { ArrowRight, Sparkles } from "lucide-react";

export function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Separate signature projects from regular projects
  const signatureProjects = projects.filter((p) => p.isSignature);
  const regularProjects = projects.filter((p) => !p.isSignature);

  return (
    <section id="projects" className="relative border-t border-neutral py-24 md:py-32">
      <div className="shell">
        {signatureProjects.length > 0 && (
          <>
            <SectionHeader
              eyebrow="Our Centerpieces"
              title={<>Signature Initiatives</>}
              lede="Rotaract Club of Bharuch is driven by action. Click any signature project to explore its full case study."
            />

            {/* 1. Signature Spotlight Section (Shown Big, 2-Column Cards) */}
            <RevealGroup as="div" className="mt-14 grid gap-8 md:grid-cols-2">
              {signatureProjects.map((p) => (
                <Reveal key={p.slug} inherit>
                  <TiltCard>
                    <SignatureCard p={p} />
                  </TiltCard>
                </Reveal>
              ))}
            </RevealGroup>

            {/* Separator Line */}
            <div className="h-px bg-neutral my-20 opacity-60" aria-hidden="true" />
          </>
        )}

        {/* 2. Regular Projects Section */}
        <div>
          <Reveal as="div" className="max-w-2xl">
            <span className="mono-label text-azure text-xs tracking-widest">Avenues of Service</span>
            <h3 className="display mt-2 text-[clamp(2.6rem,6vw,4.4rem)] text-ink leading-tight">
              {signatureProjects.length > 0 ? "Other Initiatives" : "Our Initiatives"}
            </h3>
            <p className="mt-3 text-base text-ink/65">
              Explore our diverse campaigns run across Community Service, Professional Development, International Exchange, and Club Fellowship.
            </p>
          </Reveal>

          {/* Regular Projects Grid */}
          <motion.ul
            layout
            className="mt-8 grid gap-8 sm:grid-cols-2"
          >
            <AnimatePresence mode="popLayout">
              {regularProjects.map((p, index) => (
                <Link
                  href={`/projects/${p.slug}`}
                  key={p.title}
                  className={`flex flex-col h-full focus:outline-none ${
                    index >= 3 && !isExpanded ? "hidden sm:flex" : "flex"
                  }`}
                >
                  <TiltCard className="flex h-full flex-col">
                    <motion.li
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="group flex flex-col h-full border border-neutral bg-paper hover:border-azure/40 hover:-translate-y-1.5 hover:shadow-[0_12px_36px_rgba(10,22,40,0.06)] transition-all duration-300 ease-out outline-none rounded-[4px] overflow-hidden glass-shine"
                    >
                      <ImageSlot
                        src={p.images[0]}
                        label={p.avenue}
                        aspect="16/9"
                        alt={p.title}
                      />
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex items-center justify-between gap-3">
                          <span className="mono-label text-azure text-xs">
                            {p.avenue}
                          </span>
                          <span className="mono-label text-ink/45 text-xs">
                            {p.date}
                          </span>
                        </div>
                        <h4 className="display mt-3 text-2xl leading-tight text-ink group-hover:text-azure transition-colors duration-300">
                          {p.title}
                        </h4>
                        <p className="mt-2 flex-1 text-base leading-relaxed text-ink/70 line-clamp-3">
                          {p.summary}
                        </p>
                        {p.impact && (
                          <p className="mono-label mt-4 border-t border-neutral pt-3 text-royal text-xs">
                            Impact · {p.impact}
                          </p>
                        )}
                      </div>
                    </motion.li>
                  </TiltCard>
                </Link>
              ))}
            </AnimatePresence>
          </motion.ul>

          {/* Show More / Show Less Button for Mobile Viewports */}
          {regularProjects.length > 3 && (
            <div className="mt-10 flex justify-center sm:hidden">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="btn btn-secondary w-full max-w-[240px] justify-center text-xs tracking-widest uppercase font-bold py-3.5 px-6 hover:shadow-sm"
              >
                {isExpanded ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


function SignatureCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group relative w-full rounded-[6px] border border-gold/20 bg-paper overflow-hidden flex flex-col justify-between shadow-sm hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out"
    >
      <div>
        {/* Signature Badge */}
        <div className="absolute top-4 left-4 bg-gold text-paper px-3 py-1.5 text-[10px] font-black tracking-widest uppercase rounded-[2px] z-20 flex items-center gap-1.5 shadow-[0_4px_12px_rgba(198,131,0,0.3)]">
          <Sparkles className="h-3.5 w-3.5 animate-pulse" />
          Signature Project
        </div>

        <ImageSlot
          src={p.images[0]}
          label={p.avenue}
          aspect="16/9"
          alt={p.title}
        />

        <div className="p-6">
          <div className="flex items-center justify-between gap-3">
            <span className="mono-label text-gold font-bold text-xs tracking-wider">
              {p.avenue}
            </span>
            <span className="mono-label text-ink/45 text-xs">
              {p.date}
            </span>
          </div>

          <h3 className="display mt-4 text-2xl md:text-3xl leading-tight text-ink">
            {p.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-ink/70">
            {p.summary}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0 border-t border-neutral/60 flex items-center justify-between gap-4 mt-auto">
        {p.impact && (
          <span className="mono-label text-gold font-bold text-xs tracking-wide">
            Impact · {p.impact}
          </span>
        )}
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gold uppercase tracking-widest mono-label">
          View Case Study
          <ArrowRight className="h-3.5 w-3.5 -rotate-45 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
