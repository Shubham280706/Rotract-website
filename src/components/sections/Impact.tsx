import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { stats } from "@/content/stats";
import { club } from "@/content/club";

/**
 * Impact — count-up stats. Presented as an engineered ledger (mono
 * index + big display number) rather than the generic gradient-number row.
 */
export function Impact() {
  return (
    <section
      id="impact"
      className="relative bg-royal text-paper"
      style={{ ["--gear-bg" as string]: "var(--color-royal)" }}
    >
      <div className="shell py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rotate-45 bg-gold" aria-hidden />
            <span className="mono-label text-gold">
              Impact · Rotary Year {club.rotaryYear}
            </span>
          </div>
          <h2 className="display mt-4 text-[clamp(2.8rem,6vw,4.2rem)] leading-tight">
            Service, measured.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-paper/75">
            The work adds up. Here is what the club has put on the ground —
            confirm the figures before launch.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              index={i}
              className="group bg-royal p-7"
            >
              <div className="h-px w-8 bg-gold transition-all duration-300 group-hover:w-14" aria-hidden />
              <div className="display mt-5 text-[clamp(2.6rem,6vw,4rem)] leading-none">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm font-medium text-paper/85">
                {s.label}
              </div>
              {s.note && (
                <div className="mono-label mt-1 text-paper/40">{s.note}</div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
