"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { club } from "@/content/club";
import { Magnetic } from "@/components/Magnetic";
import { Reveal } from "@/components/Reveal";
import { WordReveal } from "@/components/WordReveal";

export function Hero() {
  const { scrollY } = useScroll();
  const illustrationY = useTransform(scrollY, [0, 400], [0, 40]);

  return (
    <section id="top" className="relative overflow-hidden">
      {/* ============================================================
          MOBILE HERO VIEW (< sm / < 640px)
          - Background image covers full mobile screen (absolute inset-0)
          - Main heading "Rotaract Club of Bharuch" is placed in exact optical center of page
          - Uses EXACT same laptop fonts (display, text-ink, text-royal, mono-label, btn)
         ============================================================ */}
      <div className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-paper sm:hidden">
        {/* Subtle Ambient Background Tint */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,color-mix(in_srgb,var(--color-royal)_6%,transparent),transparent_75%)] pointer-events-none z-0" />

        {/* FULL-SCREEN BACKGROUND IMAGE (Covers whole mobile screen) */}
        <motion.div
          style={{ y: illustrationY }}
          className="pointer-events-none absolute inset-0 w-full h-full z-0 overflow-hidden"
        >
          <div
            className="relative w-full h-full opacity-20 mix-blend-multiply"
            style={{
              maskImage:
                "radial-gradient(ellipse 95% 85% at 50% 50%, black 40%, transparent 98%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 95% 85% at 50% 50%, black 40%, transparent 98%)",
            }}
          >
            <Image
              src="/bharuch-illustration.png"
              alt=""
              fill
              priority
              className="object-cover object-center sepia-[0.2] saturate-[1.2]"
            />
          </div>
        </motion.div>

        {/* Mobile Content Container — Centered Vertically in Page Viewport */}
        <div className="shell relative z-10 flex-1 flex flex-col justify-center items-center pt-16 pb-12 min-h-[100svh]">
          <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center text-center my-auto">
            {/* 1. Main Title (Placed in Optical Center) */}
            <h1 className="display text-[clamp(3.1rem,10.5vw,5.2rem)] text-ink text-center leading-[0.98]">
              <WordReveal words={["Rotaract", "Club"]} />
              <br />
              <WordReveal
                words={["of", "Bharuch"]}
                startIndex={2}
                wordClassName={(w) => (w === "Bharuch" ? "text-royal" : undefined)}
              />
            </h1>

            {/* 2. Accent Line + Dot (Centered) */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="w-10 h-[3px] bg-royal rounded-full" />
              <div className="w-2 h-2 rounded-full bg-royal shadow-[0_0_8px_var(--color-royal)]" />
            </div>

            {/* 3. Subtitle Tagline (Centered) */}
            <p className="mono-label text-royal mt-2.5 tracking-widest text-center">
              Service Above Self
            </p>

            {/* 4. Description Paragraph (Centered) */}
            <Reveal as="div" index={1}>
              <p className="mt-4 text-base leading-relaxed text-ink/75 text-center max-w-[92%] mx-auto">
                Sponsored by {club.sponsorClub} · RI District {club.riDistrict} · Rotary Year {club.rotaryYear} · Club ID {club.clubId}
              </p>
            </Reveal>

            {/* 5. Action Buttons */}
            <Reveal as="div" index={2} className="mt-7 flex flex-row items-center justify-center gap-3.5 w-full">
              <Magnetic>
                <a
                  href="#projects"
                  className="btn btn-primary px-5 py-2.5 text-xs font-semibold rounded-full shadow-sm text-center"
                >
                  See our work
                  <ArrowDown className="h-3.5 w-3.5" />
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScdyBV2EqcsHkYlLOlOwfYR2KWfpKIBa55HtzIEPlZLkQj21g/viewform?fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacXMrhXijSbwLbI4RNaACF0QJnGVH2bw0ADAn22m3bXIkkV4YhAG_7UHxr0Rg_aem_SO--CmroTYft_2yJddrSwg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary px-5 py-2.5 text-xs font-semibold rounded-full text-center"
                >
                  Join us
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-75" />
                </a>
              </Magnetic>
            </Reveal>
          </div>

          {/* Scroll Indicator (Pinned to bottom so it doesn't offset the optical center) */}
          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 pointer-events-none z-10">
            <div className="w-1.5 h-1.5 rounded-full bg-royal animate-ping" />
            <span className="mono-label text-ink/50 text-[10px] tracking-[6px]">
              Scroll to explore
            </span>
          </div>
        </div>
      </div>

      {/* ============================================================
          DESKTOP / TABLET / LAPTOP HERO VIEW (>= sm / >= 640px)
          Original Unchanged Desktop Layout
         ============================================================ */}
      <div className="hidden sm:block relative min-h-[100svh]">
        {/* Ambient blueprint field */}
        <div className="blueprint absolute inset-0" aria-hidden />

        {/* Signature: Bharuch landmark illustration, faded into the paper backdrop */}
        <div
          className="pointer-events-none absolute -right-[2%] top-0 h-full w-[68vw] max-w-[880px]"
          style={{
            maskImage:
              "radial-gradient(ellipse 70% 70% at 65% 50%, black 20%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 65% 50%, black 20%, transparent 80%)",
          }}
          aria-hidden
        >
          <Image
            src="/bharuch-illustration.png"
            alt=""
            fill
            priority
            className="object-contain object-center opacity-80 sepia-[0.15] saturate-[0.85] transition-opacity duration-300"
          />
        </div>

        <div className="shell relative flex min-h-[100svh] flex-col justify-center pt-28 pb-20">
          <h1 className="display max-w-4xl text-[clamp(2.9rem,9vw,6.6rem)] text-ink">
            <WordReveal words={["Rotaract", "Club"]} />
            <br />
            <WordReveal
              words={["of", "Bharuch"]}
              startIndex={2}
              wordClassName={(w) => (w === "Bharuch" ? "text-royal" : undefined)}
            />
          </h1>

          <Reveal as="div" index={1}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/75 sm:text-xl">
              Sponsored by {club.sponsorClub} · RI District {club.riDistrict} · Rotary
              Year {club.rotaryYear} · Club ID {club.clubId} · Chartered{" "}
              {club.charterDate}
            </p>
          </Reveal>

          <Reveal as="div" index={2} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a href="#projects" className="btn btn-primary">
                See our work
                <ArrowDown className="h-4 w-4" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScdyBV2EqcsHkYlLOlOwfYR2KWfpKIBa55HtzIEPlZLkQj21g/viewform?fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacXMrhXijSbwLbI4RNaACF0QJnGVH2bw0ADAn22m3bXIkkV4YhAG_7UHxr0Rg_aem_SO--CmroTYft_2yJddrSwg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Join us
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Magnetic>
          </Reveal>

          <div className="absolute bottom-8 left-0 right-0">
            <div className="shell flex items-center gap-3">
              <span className="h-px flex-1 bg-neutral" aria-hidden />
              <span className="mono-label text-ink/50">Scroll to explore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
