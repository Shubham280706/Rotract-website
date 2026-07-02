"use client";

import { ArrowRight, CalendarDays, Clock, MapPin, ExternalLink } from "lucide-react";
import { club } from "@/content/club";
import { Magnetic } from "@/components/Magnetic";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScdyBV2EqcsHkYlLOlOwfYR2KWfpKIBa55HtzIEPlZLkQj21g/viewform?fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacXMrhXijSbwLbI4RNaACF0QJnGVH2bw0ADAn22m3bXIkkV4YhAG_7UHxr0Rg_aem_SO--CmroTYft_2yJddrSwg";

export function Join() {
  return (
    <section
      id="join"
      className="relative overflow-hidden border-t border-neutral bg-ink text-paper"
    >
      <div className="blueprint absolute inset-0 opacity-[0.06]" aria-hidden />
      <div className="shell relative grid gap-14 py-24 md:py-32 lg:grid-cols-2 lg:gap-20">
        
        {/* Left: pitch + meeting details */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rotate-45 bg-gold" aria-hidden />
            <span className="mono-label text-gold">Get involved</span>
          </div>
          <h2 className="display mt-4 text-[clamp(2rem,5vw,3.4rem)] text-paper">
            Bring your energy.
            <br />
            Leave your mark.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-paper/75">
            If you&apos;re between 18 and 30 and want to serve, lead, and make
            friends for life — there&apos;s a seat for you. Come to a meeting or
            fill out our membership form online.
          </p>

          <dl className="mt-10 space-y-4">
            <div className="flex items-center gap-3">
              <CalendarDays className="h-5 w-5 text-gold" />
              <dt className="sr-only">Meeting day</dt>
              <dd className="text-paper/85">{club.meeting.day}</dd>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-gold" />
              <dt className="sr-only">Meeting time</dt>
              <dd className="text-paper/85">{club.meeting.time}</dd>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gold" />
              <dt className="sr-only">Venue</dt>
              <dd className="text-paper/85">{club.meeting.venue}</dd>
            </div>
          </dl>
        </div>

        {/* Right: call-to-action to Google Form */}
        <div className="flex flex-col justify-center border border-white/15 bg-white/[0.03] p-8 sm:p-10 rounded-[4px] relative z-10">
          <span className="mono-label text-gold text-xs tracking-wider">Membership</span>
          <h3 className="display mt-4 text-3xl md:text-4xl text-paper">Ready to Join?</h3>
          <p className="mt-4 text-base leading-relaxed text-paper/70">
            We collect membership applications online through our official Google Form. Click the button below to register your details, tell us about your interests, and join Rotaract Club of Bharuch!
          </p>

          <div className="mt-8">
            <Magnetic>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold shadow-[0_4px_20px_rgba(194,24,91,0.15)] hover:shadow-[0_4px_30px_rgba(194,24,91,0.25)] transition-shadow duration-300"
              >
                Fill Membership Form
                <ExternalLink className="h-5 w-5" />
              </a>
            </Magnetic>
          </div>

          <p className="mono-label text-[10px] text-paper/40 mt-6 tracking-wide">
            * Opens Google Forms in a secure new tab.
          </p>
        </div>

      </div>
    </section>
  );
}
