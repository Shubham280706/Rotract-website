"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { ImageSlot } from "@/components/ImageSlot";
import { Reveal } from "@/components/Reveal";
import { past, upcoming, gallery } from "@/content/events";

function hasUpcoming() {
  return upcoming.some((e) => !e.title.includes("{{"));
}

export function Events() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const realImages = gallery.filter((g) => g.src && !g.src.includes("{{"));

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section id="events" className="border-t border-neutral py-24 md:py-32">
      <div className="shell">
        <SectionHeader
          eyebrow="Events & gallery"
          title={<>Moments from the year.</>}
          lede="Where the club has gathered, served, and celebrated. Photos are added as events happen."
        />

        {/* Upcoming strip (optional) */}
        {hasUpcoming() && (
          <div className="mt-10">
            <p className="mono-label text-ink/50">Upcoming</p>
            <div className="no-scrollbar mt-4 flex gap-4 overflow-x-auto pb-1">
              {upcoming.map((e, i) => (
                <div
                  key={i}
                  className="min-w-[260px] shrink-0 border border-royal/30 bg-royal-050 p-5"
                >
                  <span className="mono-label text-royal">{e.date}</span>
                  <h3 className="display mt-2 text-lg text-ink">{e.title}</h3>
                  {e.blurb && (
                    <p className="mt-1 text-sm text-ink/70">{e.blurb}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Past events */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {past.map((e, i) => (
            <Reveal key={e.title} index={i} className="group border border-neutral bg-paper hover:border-azure/40 hover:-translate-y-1.5 hover:shadow-[0_12px_36px_rgba(10,22,40,0.06)] transition-all duration-300 ease-out">
              <ImageSlot src={e.images[0]} label={e.title} aspect="16/9" alt={e.title} />
              <div className="p-5">
                <h3 className="display text-lg text-ink">{e.title}</h3>
                {e.blurb && (
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/70">
                    {e.blurb}
                  </p>
                )}
                <div className="mono-label mt-4 flex flex-wrap gap-x-4 gap-y-1 text-ink/50">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" /> {e.date}
                  </span>
                  {e.location && (
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" /> {e.location}
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Gallery */}
        <div className="mt-16">
          <p className="mono-label text-ink/50">Gallery</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {gallery.map((g, i) => {
              const isReal = g.src && !g.src.includes("{{");
              if (!isReal) {
                return (
                  <ImageSlot key={i} src={null} label="Photo" aspect="1/1" />
                );
              }
              const realIndex = realImages.findIndex((r) => r.src === g.src);
              return (
                <button
                  key={i}
                  onClick={() => setLightbox(realIndex)}
                  className="group relative aspect-square overflow-hidden"
                  aria-label={`Open photo: ${g.caption}`}
                >
                  <Image
                    src={g.src as string}
                    alt={g.caption}
                    fill
                    sizes="(max-width:768px) 33vw, 16vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && realImages[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
          >
            <button
              className="absolute right-5 top-5 text-paper"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X className="h-7 w-7" />
            </button>
            <div
              className="relative max-h-[85vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={realImages[lightbox].src as string}
                  alt={realImages[lightbox].caption}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mono-label mt-3 text-center text-paper/70">
                {realImages[lightbox].caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
