import { ArrowUpRight } from "lucide-react";
import { Gear } from "@/components/Gear";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ImageSlot } from "@/components/ImageSlot";
import { parentClub, localSponsors } from "@/content/sponsors";

export function Sponsors() {
  const parentUrl = parentClub.url && !parentClub.url.includes("{{") ? parentClub.url : null;

  return (
    <section className="border-t border-neutral py-24 md:py-32">
      <div className="shell">
        <SectionHeader
          eyebrow="Sponsor & lineage"
          title={<>Rooted in Rotary.</>}
        />

        {/* Parent club feature */}
        <Reveal>
          <div className="mt-10 grid gap-8 border border-royal/25 bg-royal-050 p-7 sm:grid-cols-[auto_1fr] sm:items-center sm:p-9">
            <div
              className="mx-auto h-28 w-28 text-royal sm:mx-0"
              style={{ ["--gear-bg" as string]: "var(--color-royal-050)" }}
            >
              <Gear className="h-full w-full" spinClass="gear-spin" />
            </div>
            <div>
              <span className="mono-label text-royal">Sponsor club</span>
              <h3 className="display mt-2 text-2xl text-ink sm:text-3xl">
                {parentClub.name}
              </h3>
              <p className="mt-3 max-w-xl leading-relaxed text-ink/75">
                {parentClub.blurb}
              </p>
              {parentUrl && (
                <a
                  href={parentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono-label mt-4 inline-flex items-center gap-1.5 text-azure hover:underline"
                >
                  Visit the Rotary club <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </Reveal>

        {/* Local sponsors */}
        <div className="mt-12">
          <p className="mono-label text-ink/50">With support from</p>
          <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {localSponsors.map((s, i) => (
              <Reveal key={i} index={i} as="li" className="group hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(10,22,40,0.04)] transition-all duration-300 ease-out">
                <ImageSlot src={s.logo} label={s.name.includes("{{") ? "Sponsor logo" : s.name} aspect="3/2" />
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
