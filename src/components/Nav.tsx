"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Gear } from "./Gear";
import { Magnetic } from "./Magnetic";

const links = [
  { href: "#about", label: "About" },
  { href: "#impact", label: "Impact" },
  { href: "#projects", label: "Projects" },
  { href: "#team", label: "Team" },
  { href: "#events", label: "Events" },
  { href: "#join", label: "Join" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-sm border-b border-neutral"
          : "bg-transparent"
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <Gear className="h-7 w-7 text-royal" spinClass="gear-spin" />
          <span className="display text-[1.05rem] leading-none text-ink">
            Rotaract Bharuch
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="mono-label text-ink/70 transition-colors hover:text-azure"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <Magnetic>
          <a href="#join" className="btn btn-primary hidden md:inline-flex">
            Join us
          </a>
        </Magnetic>

        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-neutral bg-paper md:hidden">
          <ul className="shell flex flex-col py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#join"
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full justify-center"
              >
                Join us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
