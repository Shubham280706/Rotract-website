/**
 * The signature element: a faithful rendering of the official Rotary wheel.
 * The mark adopted in 1924 is a gearwheel with 24 cogs, 6 spokes, and a
 * keyway cut into the central hub — the 1923 addition that made it a
 * "worker's wheel" rather than an idle cog. Rendered from geometry (not
 * clipart) so it scales cleanly. Rotation is applied by the caller via a
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
    // Trapezoid tooth: narrower at the tip than at the base — the squared,
    // slightly tapered profile of the official Rotary cog.
    const baseA = c - half;
    const baseB = c + half;
    const tipA = c - half * 0.62;
    const tipB = c + half * 0.62;
    paths.push(
      `M ${pt(rInner, baseA)} L ${pt(rOuter, tipA)} L ${pt(rOuter, tipB)} L ${pt(rInner, baseB)} Z`
    );
  }
  return paths.join(" ");
}

export function Gear({ className, spinClass, teeth = 24, title }: GearProps) {
  const bg = "var(--gear-bg, #faf9f6)";

  // Official Rotary wheel proportions (viewBox 0 0 100 100, centre 50,50).
  const toothTip = 47; // outer edge of the cogs
  const rimOuter = 39; // base of the cogs / outer edge of the toothed ring
  const rimInner = 31; // inner edge of the toothed ring
  const spokeCount = 6;
  const spokeWidth = 4.5;
  const hubOuter = 13; // central hub
  const hubBore = 6.5; // the central hole
  const teethPath = buildTeeth(teeth, toothTip, rimOuter, (360 / teeth) * 0.6);

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
        {/* Cogs */}
        <path d={teethPath} fill="currentColor" />
        {/* Toothed ring */}
        <circle cx="50" cy="50" r={rimOuter} fill="currentColor" />
        <circle cx="50" cy="50" r={rimInner} fill={bg} />
        {/* Six spokes */}
        {Array.from({ length: spokeCount }).map((_, i) => {
          const a = ((i * 360) / spokeCount) * (Math.PI / 180);
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
              strokeWidth={spokeWidth}
              strokeLinecap="butt"
            />
          );
        })}
        {/* Central hub */}
        <circle cx="50" cy="50" r={hubOuter} fill="currentColor" />
        {/* Bore */}
        <circle cx="50" cy="50" r={hubBore} fill={bg} />
        {/* Keyway — the notch that makes it a "worker's wheel" */}
        <rect x="48.4" y={50 - hubOuter - 0.5} width="3.2" height={hubOuter - hubBore + 3} fill={bg} />
      </g>
    </svg>
  );
}
