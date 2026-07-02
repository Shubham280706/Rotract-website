"use client";

import { Instagram } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ImageSlot } from "@/components/ImageSlot";
import { team, type TeamMember } from "@/content/team";
import { club } from "@/content/club";
import { Magnetic } from "@/components/Magnetic";

function MemberCard({ m, index }: { m: TeamMember; index: number }) {
  return (
    <Reveal index={index} as="li" className="group">
      <ImageSlot src={m.photo} label={m.role} aspect="4/5" alt={m.name} />
      <div className="mt-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="display text-lg leading-tight text-ink">{m.name}</h3>
          {m.instagram && (
            <Magnetic>
              <a
                href={m.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${m.name} on Instagram`}
                className="mt-0.5 text-ink/50 transition-colors hover:text-azure block"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </Magnetic>
          )}
        </div>
        <p className="mono-label mt-1 text-azure">{m.role}</p>
      </div>
    </Reveal>
  );
}

export function Team() {
  const board = team.filter((m) => m.isBoard).sort((a, b) => a.order - b.order);
  const members = team
    .filter((m) => !m.isBoard)
    .sort((a, b) => a.order - b.order);

  return (
    <section id="team" className="border-t border-neutral py-24 md:py-32">
      <div className="shell">
        <SectionHeader
          eyebrow={`Leadership · Rotary Year ${club.rotaryYear}`}
          title={<>The board & the club.</>}
          lede="Rotaract leadership rotates every July. Meet the office bearers steering this year's work, and the members who make it happen."
        />

        {/* Office bearers */}
        <div className="mt-12">
          <p className="mono-label text-ink/50">Office bearers</p>
          <ul className="mt-5 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {board.map((m, i) => (
              <MemberCard key={`${m.role}-${m.name}`} m={m} index={i} />
            ))}
          </ul>
        </div>

        {/* General members */}
        {members.length > 0 && (
          <div className="mt-16">
            <p className="mono-label text-ink/50">Members</p>
            <ul className="mt-5 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {members.map((m, i) => (
                <MemberCard key={`${m.role}-${m.name}-${i}`} m={m} index={i} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
