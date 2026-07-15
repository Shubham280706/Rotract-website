"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { club } from "@/content/club";
import { Magnetic } from "@/components/Magnetic";
import { Reveal } from "@/components/Reveal";
import { WordReveal } from "@/components/WordReveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient blueprint field */}
      <div className="blueprint absolute inset-0" aria-hidden />

      {/* Signature: Bharuch landmark illustration, faded into the paper backdrop */}
      <div
        className="pointer-events-none absolute -right-[6%] top-0 h-full w-[68vw] max-w-[880px] sm:-right-[2%]"
        style={{
          maskImage:
            "radial-gradient(ellipse 62% 60% at 58% 46%, black 30%, transparent 76%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 62% 60% at 58% 46%, black 30%, transparent 76%)",
        }}
        aria-hidden
      >
        <Image
          src="/bharuch-illustration.png"
          alt=""
          fill
          priority
          className="object-contain object-center opacity-80 sepia-[0.15] saturate-[0.85]"
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
    </section>
  );
}
