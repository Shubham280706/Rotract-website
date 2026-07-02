"use client";

import { Gear } from "@/components/Gear";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Pillars } from "@/components/Pillars";
import { club } from "@/content/club";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const meetingDay = club.meeting.day.includes("{{") ? "Every Sunday" : club.meeting.day;
  const meetingTime = club.meeting.time.includes("{{") ? "7:00 PM" : club.meeting.time;
  const meetingVenue = club.meeting.venue.includes("{{") ? "Bharuch, Gujarat" : club.meeting.venue;

  return (
    <section id="about" className="relative border-t border-neutral py-24 md:py-32">
      <div className="shell">
        <SectionHeader
          eyebrow="What is Rotaract"
          title={<>Young people, real action.</>}
          lede={`Rotaract is Rotary's programme for adults aged 18–30. ${club.name} is a self-led club of students and young professionals, chartered and mentored by the ${club.sponsorClub}.`}
        />

        {/* Interactive Pillars */}
        <Pillars />

        {/* Bottom row: Meetings + Gear + Sponsor */}
        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {/* Card: Weekly Meetings — spans 2 columns */}
          <Reveal
            index={0}
            className="lg:col-span-2"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="group relative flex flex-col justify-between overflow-hidden bg-royal text-paper p-8 hover:shadow-[0_12px_40px_rgba(23,69,143,0.18)] transition-shadow duration-300 ease-out rounded-[6px] h-full glass-shine"
            >
              {/* Ambient rotating gear background */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -right-16 -bottom-16 w-48 h-48 text-white/[0.04]"
                style={{ ["--gear-bg" as string]: "transparent" }}
                aria-hidden
              >
                <Gear className="w-full h-full" teeth={20} />
              </motion.div>

              <div className="relative z-10">
                <div className="flex items-center gap-2">
                  <span className="mono-label text-gold">Regular Gatherings</span>
                  <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden />
                </div>
                <h3 className="display mt-4 text-2xl text-paper">Join our meetings</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/75 max-w-xl">
                  We meet regularly to plan upcoming initiatives, host expert speaker sessions, and share ideas. Visitors and prospective members are always welcome to drop by.
                </p>
              </div>

              <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-3 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-gold shrink-0" />
                  <div>
                    <p className="mono-label text-[0.62rem] text-white/50">When</p>
                    <p className="text-sm font-semibold">{meetingDay}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gold shrink-0" />
                  <div>
                    <p className="mono-label text-[0.62rem] text-white/50">Time</p>
                    <p className="text-sm font-semibold">{meetingTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gold shrink-0" />
                  <div>
                    <p className="mono-label text-[0.62rem] text-white/50">Venue</p>
                    <p className="text-sm font-semibold truncate max-w-[150px]">{meetingVenue}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Card: Sponsor / Lineage */}
          <Reveal
            index={1}
            className="lg:col-span-1"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="group relative flex flex-col justify-between overflow-hidden bg-gold text-ink p-8 hover:shadow-[0_12px_40px_rgba(247,168,27,0.18)] transition-shadow duration-300 ease-out rounded-[6px] h-full glass-shine"
            >
              {/* Ambient rotating gear background */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -right-16 -bottom-16 w-48 h-48 text-ink/[0.04]"
                style={{ ["--gear-bg" as string]: "transparent" }}
                aria-hidden
              >
                <Gear className="w-full h-full" teeth={24} />
              </motion.div>

              <div className="relative z-10">
                <span className="mono-label text-ink/65">Lineage</span>
                <h3 className="display mt-4 text-2xl text-ink">Mentored by Rotary</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  Chartered and mentored by the {club.sponsorClub}, we are supported by the worldwide Rotary network to enable community growth.
                </p>
              </div>
              <div className="relative z-10 mt-6 pt-4 border-t border-ink/10">
                <p className="mono-label text-[0.62rem] text-ink/50">District</p>
                <p className="text-sm font-bold text-ink">RI District {club.riDistrict}</p>
              </div>
            </motion.div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
