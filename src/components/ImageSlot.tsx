import Image from "next/image";

type Aspect = "4/5" | "16/9" | "1/1" | "3/2" | "5/4" | "2/3";

const aspectClass: Record<Aspect, string> = {
  "4/5": "aspect-[4/5]",
  "16/9": "aspect-[16/9]",
  "1/1": "aspect-square",
  "3/2": "aspect-[3/2]",
  "5/4": "aspect-[5/4]",
  "2/3": "aspect-[2/3]",
};

/**
 * The single image gateway for the whole site.
 *
 * - `src` set  → renders the real photo via next/image with proper alt.
 * - `src` null → renders an intentional, on-brand empty frame with a
 *   mono label (e.g. "PRESIDENT · 4:5"). Never a stock photo, never a
 *   broken/gray box.
 */
export function ImageSlot({
  src,
  label,
  aspect = "4/5",
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 33vw",
}: {
  src?: string | null;
  label: string;
  aspect?: Aspect;
  alt?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const ratioLabel = aspect.replace("/", ":");

  if (src && src.trim() !== "" && !src.includes("{{")) {
    return (
      <div
        className={`relative overflow-hidden bg-royal-050 ${aspectClass[aspect]} ${className}`}
      >
        <Image
          src={src}
          alt={alt ?? label}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-500 ease-out-soft group-hover:scale-105"
        />
      </div>
    );
  }

  // Empty slot — designed, deliberate, on-brand.
  return (
    <div
      className={`relative overflow-hidden border border-neutral bg-royal-050 ${aspectClass[aspect]} ${className}`}
      role="img"
      aria-label={`${label} — photo coming soon`}
    >
      {/* faint blueprint texture */}
      <div className="blueprint absolute inset-0 opacity-70" aria-hidden />
      {/* corner ticks */}
      <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-royal/40" aria-hidden />
      <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-royal/40" aria-hidden />
      <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-royal/40" aria-hidden />
      <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-royal/40" aria-hidden />
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <span className="mono-label text-center text-royal/70">
          {label} · {ratioLabel}
        </span>
      </div>
    </div>
  );
}
