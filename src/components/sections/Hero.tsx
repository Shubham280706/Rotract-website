"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Gear } from "@/components/Gear";
import { club } from "@/content/club";
import { Magnetic } from "@/components/Magnetic";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient blueprint field */}
      <div className="blueprint absolute inset-0" aria-hidden />

      {/* Signature: large ambient gear, quietly rotating behind the type */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-[22%] top-[8%] w-[70vw] max-w-[820px] text-royal/[0.07] sm:-right-[10%]"
        style={{ ["--gear-bg" as string]: "transparent" }}
        aria-hidden
      >
        <Gear className="w-full" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -left-[18%] bottom-[-14%] w-[46vw] max-w-[520px] text-gold/[0.10]"
        style={{ ["--gear-bg" as string]: "transparent" }}
        aria-hidden
      >
        <Gear className="w-full" teeth={20} />
      </motion.div>

      <div className="shell relative flex min-h-[100svh] flex-col justify-center pt-28 pb-20">
        <p className="mono-label max-w-2xl text-royal">
          Sponsored by {club.sponsorClub} · RI District {club.riDistrict} · Rotary
          Year {club.rotaryYear} · Club ID {club.clubId} · Chartered{" "}
          {club.charterDate}
        </p>

        <h1 className="display mt-6 max-w-4xl text-[clamp(2.9rem,9vw,6.6rem)] text-ink">
          Rotaract Club
          <br />
          of <span className="text-royal">Bharuch</span>
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/75 sm:text-xl">
          <span className="font-semibold text-ink">Fellowship Through Service.</span>{" "}
          A youth service club for people aged 18–30 — turning friendship into
          action across Bharuch, Gujarat.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
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
        </div>

        <div className="absolute bottom-8 left-0 right-0">
          <div className="shell flex items-center gap-3">
            <span className="h-px flex-1 bg-neutral" aria-hidden />
            <span className="mono-label text-ink/50">Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
}
