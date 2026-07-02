"use client";

import { useState } from "react";
import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { club } from "@/content/club";

// If you have a form backend, set its endpoint here. Otherwise the form
// falls back to opening the visitor's email client (mailto).
const FORM_ENDPOINT = "{{FILL: form endpoint (Formspree, etc.) — else uses mailto}}";

export function Join() {
  const [sent, setSent] = useState(false);

  const usesEndpoint = FORM_ENDPOINT && !FORM_ENDPOINT.includes("{{");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (usesEndpoint) return; // let it POST normally
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const to = club.email.includes("{{") ? "" : club.email;
    const subject = encodeURIComponent(`Interest in joining — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setSent(true);
  };

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
          <h2 className="display mt-4 text-[clamp(2rem,5vw,3.4rem)]">
            Bring your energy.
            <br />
            Leave your mark.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-paper/75">
            If you&apos;re between 18 and 30 and want to serve, lead, and make
            friends for life — there&apos;s a seat for you. Come to a meeting or
            send us a note.
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

        {/* Right: interest form */}
        <div className="border border-white/15 bg-white/[0.03] p-6 sm:p-8">
          <p className="mono-label text-paper/60">Register interest</p>
          {sent ? (
            <div className="mt-6">
              <p className="display text-2xl">Thanks — your email is ready.</p>
              <p className="mt-2 text-paper/70">
                We&apos;ll be in touch soon. See you at a meeting!
              </p>
            </div>
          ) : (
            <form
              className="mt-6 space-y-4"
              onSubmit={onSubmit}
              action={usesEndpoint ? FORM_ENDPOINT : undefined}
              method={usesEndpoint ? "POST" : undefined}
            >
              <Field label="Name" name="name" type="text" />
              <Field label="Email" name="email" type="email" />
              <div>
                <label htmlFor="message" className="mono-label text-paper/60">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us a little about yourself"
                  className="mt-2 w-full resize-none rounded-[2px] border border-white/20 bg-transparent px-4 py-3 text-paper placeholder:text-paper/40"
                />
              </div>
              <button type="submit" className="btn btn-primary w-full justify-center">
                Send interest
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mono-label text-paper/40">
                {usesEndpoint
                  ? "Submits securely to the club."
                  : "Opens your email app addressed to the club."}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
}: {
  label: string;
  name: string;
  type: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mono-label text-paper/60">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-[2px] border border-white/20 bg-transparent px-4 py-3 text-paper placeholder:text-paper/40"
      />
    </div>
  );
}
