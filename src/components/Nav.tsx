"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Gear } from "./Gear";
import { Magnetic } from "./Magnetic";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#team", label: "Team" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/95 backdrop-blur-md border-b border-neutral shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`shell relative flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
        }`}
      >
        <a href="#top" className="flex items-center group h-full">
          {/* We point this to /logo.png. Please drop your original logo image into the public/ folder as logo.png! */}
          <img 
            src="/logo.png" 
            alt="Rotaract Bharuch Logo" 
            className={`w-auto object-contain pointer-events-none transition-all duration-300 group-hover:scale-105 ${
              scrolled
                ? "h-[180px] -my-[67px] md:h-[220px] md:-my-[82px]"
                : "h-[220px] -my-[83px] md:h-[280px] md:-my-[106px]"
            }`}
            onError={(e) => {
              // Fallback text if the image is missing from the public folder
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.insertAdjacentHTML(
                'beforeend', 
                `<span class="display text-lg md:text-xl font-bold text-ink">Please add logo.png to public/</span>`
              );
            }}
          />
        </a>

        <ul className="absolute left-1/2 -translate-x-1/2 hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="mono-label text-ink font-semibold text-xs tracking-wider transition-colors hover:text-azure"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <Magnetic>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScdyBV2EqcsHkYlLOlOwfYR2KWfpKIBa55HtzIEPlZLkQj21g/viewform?fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacXMrhXijSbwLbI4RNaACF0QJnGVH2bw0ADAn22m3bXIkkV4YhAG_7UHxr0Rg_aem_SO--CmroTYft_2yJddrSwg" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hidden md:inline-flex px-6 py-2.5 text-sm"
          >
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
