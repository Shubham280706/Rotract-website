/**
 * The signature element: a hand-built Rotary cogwheel in SVG.
 * 24 cogs, 6 spokes, a central hub with a keyway — rendered from
 * geometry (not clipart). Rotation is applied by the caller via a
 * CSS class so it runs off the main thread and pauses under
 * prefers-reduced-motion.
 */

type GearProps = {
  className?: string;
  /** Extra class applied to the rotating group (e.g. gear-spin). */
  spinClass?: string;
  teeth?: number;
  title?: string;
};

function buildTeeth(count: number, rOuter: number, rInner: number, toothWidthDeg: number) {
  const paths: string[] = [];
  const step = 360 / count;
  const half = toothWidthDeg / 2;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const pt = (r: number, deg: number) =>
    `${(50 + r * Math.cos(toRad(deg))).toFixed(3)} ${(50 + r * Math.sin(toRad(deg))).toFixed(3)}`;

  for (let i = 0; i < count; i++) {
    const c = i * step;
    // Trapezoid tooth: narrower at the tip than at the base.
    const baseA = c - half;
    const baseB = c + half;
    const tipA = c - half * 0.55;
    const tipB = c + half * 0.55;
    paths.push(
      `M ${pt(rInner, baseA)} L ${pt(rOuter, tipA)} L ${pt(rOuter, tipB)} L ${pt(rInner, baseB)} Z`
    );
  }
  return paths.join(" ");
}

export function Gear({ className, spinClass, teeth = 24, title }: GearProps) {
  const rimOuter = 40;
  const rimInner = 30;
  const teethPath = buildTeeth(teeth, 46, rimOuter, 360 / teeth * 0.62);

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill="none"
    >
      {title ? <title>{title}</title> : null}
      <g className={spinClass}>
        {/* Teeth */}
        <path d={teethPath} fill="currentColor" />
        {/* Rim */}
        <circle cx="50" cy="50" r={rimOuter} fill="currentColor" />
        <circle cx="50" cy="50" r={rimInner} fill="var(--gear-bg, #faf9f6)" />
        {/* Spokes (6) */}
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i * 60 * Math.PI) / 180;
          const x2 = 50 + rimInner * Math.cos(a);
          const y2 = 50 + rimInner * Math.sin(a);
          return (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={x2.toFixed(3)}
              y2={y2.toFixed(3)}
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
            />
          );
        })}
        {/* Hub + keyway */}
        <circle cx="50" cy="50" r="12" fill="currentColor" />
        <circle cx="50" cy="50" r="6" fill="var(--gear-bg, #faf9f6)" />
        <rect x="48.5" y="38" width="3" height="7" fill="var(--gear-bg, #faf9f6)" />
      </g>
    </svg>
  );
}
