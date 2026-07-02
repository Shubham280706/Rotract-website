"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Instagram, Facebook } from "@/components/Icons";
import { Gear } from "@/components/Gear";
import { club } from "@/content/club";
import { Magnetic } from "@/components/Magnetic";

function clean(v: string) {
  return v && !v.includes("{{") ? v : null;
}

export function Footer() {
  const ig = clean(club.socials.instagram);
  const fb = clean(club.socials.facebook);
  const email = clean(club.email);
  const phone = clean(club.phone);
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    club.location.mapQuery
  )}&output=embed`;

  return (
    <footer className="border-t border-neutral bg-paper">
      {/* Map + contact */}
      <div className="shell grid gap-10 py-16 lg:grid-cols-[1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Gear className="h-8 w-8 text-royal" spinClass="gear-spin" />
            <span className="display text-xl text-ink">{club.name}</span>
          </div>
          <p className="mt-4 max-w-sm leading-relaxed text-ink/70">
            Fellowship Through Service. Sponsored by the {club.sponsorClub},
            part of Rotary International District {club.riDistrict}.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-3 text-ink/75">
              <MapPin className="h-4 w-4 text-royal" />
              {club.location.city}, {club.location.state}, {club.location.country}
            </li>
            {email && (
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 text-ink/75 hover:text-azure"
                >
                  <Mail className="h-4 w-4 text-royal" />
                  {email}
                </a>
              </li>
            )}
            {phone && (
              <li>
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-3 text-ink/75 hover:text-azure"
                >
                  <Phone className="h-4 w-4 text-royal" />
                  {phone}
                </a>
              </li>
            )}
          </ul>

          <div className="mt-6 flex gap-3">
            {ig && (
              <Magnetic>
                <a
                  href={ig}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="grid h-10 w-10 place-items-center border border-neutral text-ink/70 transition-colors hover:border-azure hover:text-azure bg-paper rounded-full"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </Magnetic>
            )}
            <Magnetic>
              <a
                href={fb ?? "#"}
                target={fb ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={fb ? "Facebook" : "Facebook (link coming soon)"}
                aria-disabled={!fb}
                className={`grid h-10 w-10 place-items-center border border-neutral transition-colors bg-paper rounded-full ${
                  fb
                    ? "text-ink/70 hover:border-azure hover:text-azure"
                    : "cursor-not-allowed text-ink/30"
                }`}
              >
                <Facebook className="h-5 w-5" />
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Map */}
        <div className="min-h-[260px] overflow-hidden border border-neutral">
          <iframe
            title={`Map of ${club.location.city}`}
            src={mapSrc}
            className="h-full min-h-[260px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral">
        <div className="shell flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono-label text-ink/50">
            © {new Date().getFullYear()} {club.name}
          </p>
          <p className="mono-label text-ink/40">
            Rotary Year {club.rotaryYear} · District {club.riDistrict}
          </p>
        </div>
      </div>
    </footer>
  );
}
