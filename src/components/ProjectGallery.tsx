"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { Gear } from "@/components/Gear";

interface ProjectGalleryProps {
  images: string[];
  avenue: string;
}

export function ProjectGallery({ images, avenue }: ProjectGalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const rawImages = images || [];

  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightbox === null) return;
    setLightbox((prev) => (prev! + 1) % rawImages.length);
  };

  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightbox === null) return;
    setLightbox((prev) => (prev! - 1 + rawImages.length) % rawImages.length);
  };

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox]);

  if (rawImages.length === 0) {
    return null;
  }

  const renderLightboxContent = (img: string, idx: number) => {
    const isPlaceholder = !img || img.trim() === "" || img.includes("{{");

    if (!isPlaceholder) {
      return (
        <div className="relative aspect-[3/2] w-full max-h-[75vh]">
          <Image
            src={img}
            alt={`Project photo ${idx + 1}`}
            fill
            className="object-contain"
            priority
          />
        </div>
      );
    }

    return (
      <div className="relative aspect-[3/2] w-full max-w-3xl bg-royal-050 border border-royal/20 flex flex-col items-center justify-center p-12 text-center overflow-hidden">
        <div className="blueprint absolute inset-0 opacity-80" aria-hidden />
        <span className="absolute left-6 top-6 h-6 w-6 border-l border-t border-royal/30" aria-hidden />
        <span className="absolute right-6 top-6 h-6 w-6 border-r border-t border-royal/30" aria-hidden />
        <span className="absolute bottom-6 left-6 h-6 w-6 border-b border-l border-royal/30" aria-hidden />
        <span className="absolute bottom-6 right-6 h-6 w-6 border-b border-r border-royal/30" aria-hidden />
        
        <div
          className="w-20 h-20 text-royal/15 mb-6 animate-pulse"
          style={{ ["--gear-bg" as string]: "transparent" }}
        >
          <Gear className="w-full h-full" spinClass="gear-spin" teeth={20} />
        </div>
        
        <span className="mono-label text-royal/60 text-sm tracking-widest block font-medium">
          {avenue} · PHOTO {idx + 1}
        </span>
        <span className="mono-label text-ink/40 text-[10px] mt-2 block tracking-wider uppercase">
          [ PLACEHOLDER ]
        </span>
      </div>
    );
  };

  return (
    <div className="relative select-none w-full">
      {/* Horizontal scrolling track */}
      <div className="flex gap-5 overflow-x-auto pb-4 pt-1 px-1 scroll-smooth snap-x snap-mandatory no-scrollbar">
        {rawImages.map((img, idx) => {
          const isPlaceholder = !img || img.trim() === "" || img.includes("{{");

          return (
            <div
              key={idx}
              onClick={() => setLightbox(idx)}
              className="group relative aspect-[3/2] h-[160px] sm:h-[200px] md:h-[240px] shrink-0 overflow-hidden border border-neutral bg-white shadow-sm cursor-pointer snap-start hover:border-azure/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out-soft"
            >
              {!isPlaceholder ? (
                <>
                  <Image
                    src={img}
                    alt={`${avenue} photo ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 ease-out-soft group-hover:scale-103"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 border border-neutral text-ink/80 shadow-md">
                      <ZoomIn className="h-4.5 w-4.5" />
                    </span>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center w-[240px] sm:w-[300px] md:w-[360px] h-full">
                  <div className="blueprint absolute inset-0 opacity-70" aria-hidden />
                  <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-royal/30" aria-hidden />
                  <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-royal/30" aria-hidden />
                  <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-royal/30" aria-hidden />
                  <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-royal/30" aria-hidden />
                  
                  <div
                    className="w-10 h-10 mb-2 text-royal/10"
                    style={{ ["--gear-bg" as string]: "transparent" }}
                  >
                    <Gear
                      className="w-full h-full"
                      spinClass={idx % 2 === 0 ? "gear-spin" : "gear-spin-reverse"}
                      teeth={16}
                    />
                  </div>
                  
                  <span className="mono-label text-royal/60 text-[10px] tracking-widest block font-medium">
                    PHOTO {idx + 1}
                  </span>
                  <span className="mono-label text-ink/30 text-[8px] mt-1 block tracking-wider">
                    [ PLACEHOLDER ]
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Lightbox for browsing all images */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Photo gallery viewer"
          >
            {/* Close button */}
            <button
              className="absolute right-5 top-5 text-paper/80 hover:text-gold transition-colors z-20"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X className="h-7 w-7" />
            </button>

            {/* Previous slide button */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-paper/80 hover:text-gold transition-colors z-20 p-2"
              onClick={prev}
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>

            {/* Next slide button */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-paper/80 hover:text-gold transition-colors z-20 p-2"
              onClick={next}
              aria-label="Next photo"
            >
              <ChevronRight className="h-10 w-10" />
            </button>

            {/* Lightbox content container */}
            <div
              className="relative w-full max-w-4xl flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {renderLightboxContent(rawImages[lightbox], lightbox)}

              {/* Info panel */}
              <div className="mt-6 flex flex-col items-center gap-1.5 text-center">
                <span className="mono-label text-paper/90 text-sm tracking-wider">
                  {avenue} · Image {lightbox + 1} of {rawImages.length}
                </span>
                <span className="text-[10px] text-paper/40 tracking-widest mono-label uppercase">
                  Use Left/Right arrow keys to browse
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
