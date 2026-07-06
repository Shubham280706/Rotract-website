import { ArrowUpRight } from "lucide-react";
import { Gear } from "@/components/Gear";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ImageSlot } from "@/components/ImageSlot";
import { parentClub, localSponsors } from "@/content/sponsors";

export function Sponsors() {
  const parentUrl = parentClub.url && !parentClub.url.includes("{{") ? parentClub.url : null;
  const hasLogo = !!parentClub.logo;

  return (
    <section className="border-t border-neutral py-24 md:py-32">
      <div className="shell">
        <SectionHeader
          eyebrow="Sponsor & lineage"
          title={<>Rooted in Rotary.</>}
        />

        {/* Parent club feature */}
        <Reveal>
          <div className={`mt-10 grid gap-8 border border-royal/25 bg-royal-050 p-7 sm:p-9 ${hasLogo ? "sm:grid-cols-[auto_1fr] sm:items-center" : "grid-cols-1"}`}>
            {hasLogo && (
              <div className="mx-auto h-36 w-36 sm:mx-0 flex items-center justify-center">
                <img
                  src={parentClub.logo!}
                  alt={parentClub.name}
                  className="h-full w-full object-contain"
                />
              </div>
            )}
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
      </div>
    </section>
  );
}

