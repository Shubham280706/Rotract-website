import { Reveal } from "./Reveal";

/**
 * Shared section header: a mono eyebrow (encodes a real fact/label)
 * plus a display heading and optional lede.
 */
export function SectionHeader({
  eyebrow,
  title,
  lede,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden />
          <span className={`mono-label ${dark ? "text-gold-light" : "text-royal"}`}>
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal index={1}>
        <h2 className={`display mt-4 text-[clamp(2.8rem,6vw,4.2rem)] leading-tight ${dark ? "text-white" : "text-ink"}`}>
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal index={2}>
          <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/70" : "text-ink/70"}`}>
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
