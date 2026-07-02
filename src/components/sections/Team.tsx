"use client";

import { Instagram } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ImageSlot } from "@/components/ImageSlot";
import { team, type TeamMember } from "@/content/team";
import { club } from "@/content/club";
import { Magnetic } from "@/components/Magnetic";

function MemberCard({ m, index, isLarge = false }: { m: TeamMember; index: number; isLarge?: boolean }) {
  return (
    <Reveal index={index} as="li" className="group">
      <ImageSlot src={m.photo} label={m.role} aspect={isLarge ? "2/3" : "4/5"} alt={m.name} />
      <div className="mt-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className={`display leading-tight text-ink ${isLarge ? "text-xl md:text-2xl font-bold" : "text-lg"}`}>{m.name}</h3>
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
        <p className={`mono-label mt-1 text-azure ${isLarge ? "text-xs font-semibold" : "text-[10px]"}`}>{m.role}</p>
      </div>
    </Reveal>
  );
}

export function Team() {
  const topLeadership = team
    .filter((m) => m.isBoard && (
      m.role.toLowerCase() === "president" || 
      m.role.toLowerCase() === "secretary" || 
      m.role.toLowerCase().includes("drr") || 
      m.role.toLowerCase().includes("representative")
    ))
    .sort((a, b) => a.order - b.order);

  const restOfBoard = team
    .filter((m) => m.isBoard && 
      m.role.toLowerCase() !== "president" && 
      m.role.toLowerCase() !== "secretary" && 
      !m.role.toLowerCase().includes("drr") && 
      !m.role.toLowerCase().includes("representative")
    )
    .sort((a, b) => a.order - b.order);

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

        {/* Top Core Leadership (DRR, President & Secretary) */}
        {topLeadership.length > 0 && (
          <div className="mt-12 border-b border-neutral/50 pb-16">
            <p className="mono-label text-ink/50 text-center mb-8">Core Leadership</p>
            <ul className="grid grid-cols-1 gap-12 md:gap-16 sm:grid-cols-3 max-w-6xl mx-auto px-4">
              {topLeadership.map((m, i) => (
                <MemberCard key={`${m.role}-${m.name}`} m={m} index={i} isLarge={true} />
              ))}
            </ul>
          </div>
        )}

        {/* Office bearers / Board Directors */}
        {restOfBoard.length > 0 && (
          <div className="mt-16">
            <p className="mono-label text-ink/50">Board Directors & Officers</p>
            <ul className="mt-5 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {restOfBoard.map((m, i) => (
                <MemberCard key={`${m.role}-${m.name}`} m={m} index={i} />
              ))}
            </ul>
          </div>
        )}

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
