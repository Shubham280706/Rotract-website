"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
        <a href="#top" className="flex items-center group h-full relative z-10">
          <img 
            src="/logo.png" 
            alt="Rotaract Bharuch Logo" 
            className={`w-auto object-contain pointer-events-none transition-all duration-300 group-hover:scale-105 ${
              scrolled
                ? "h-[180px] -my-[67px] md:h-[220px] md:-my-[82px]"
                : "h-[220px] -my-[83px] md:h-[280px] md:-my-[106px]"
            }`}
            onError={(e) => {
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

        {/* Desktop Join Button (Hidden on Mobile) */}
        <div className="hidden md:inline-flex items-center">
          <Magnetic>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScdyBV2EqcsHkYlLOlOwfYR2KWfpKIBa55HtzIEPlZLkQj21g/viewform?fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacXMrhXijSbwLbI4RNaACF0QJnGVH2bw0ADAn22m3bXIkkV4YhAG_7UHxr0Rg_aem_SO--CmroTYft_2yJddrSwg" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-6 py-2.5 text-sm"
            >
              Join us
            </a>
          </Magnetic>
        </div>

        {/* Mobile Menu Button with Animated Icon Morphing */}
        <button
          className="md:hidden flex items-center justify-center p-2 text-ink rounded-full active:scale-95 transition-transform"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <motion.div
            key={open ? "close" : "menu"}
            initial={{ rotate: open ? -90 : 90, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: open ? 90 : -90, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {open ? <X className="h-6 w-6 text-royal" /> : <Menu className="h-6 w-6 text-ink" />}
          </motion.div>
        </button>
      </nav>

      {/* Animated Mobile Drawer Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-neutral/60 bg-paper/98 backdrop-blur-xl md:hidden shadow-lg"
          >
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.06, delayChildren: 0.05 }
                },
                closed: {
                  transition: { staggerChildren: 0.04, staggerDirection: -1 }
                }
              }}
              className="shell flex flex-col py-5 gap-1"
            >
              {links.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -10 }
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-lg font-semibold text-ink hover:text-royal transition-colors"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -10 }
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="pt-3"
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScdyBV2EqcsHkYlLOlOwfYR2KWfpKIBa55HtzIEPlZLkQj21g/viewform?fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacXMrhXijSbwLbI4RNaACF0QJnGVH2bw0ADAn22m3bXIkkV4YhAG_7UHxr0Rg_aem_SO--CmroTYft_2yJddrSwg"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary w-full justify-center text-center rounded-full py-3 shadow-md"
                >
                  Join us
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
