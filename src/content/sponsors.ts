/**
 * Sponsor & lineage.
 * The parent club is featured prominently; local sponsors get logo slots.
 * `logo: null` renders an on-brand empty logo frame.
 */
export type Sponsor = {
  name: string;
  kind: "parent" | "local";
  url?: string;
  logo?: string | null;
  blurb?: string;
};

export const parentClub: Sponsor = {
  name: "Rotary Club of Bharuch",
  kind: "parent",
  url: "{{FILL: Rotary Club of Bharuch website/social}}",
  logo: "/sponsors/rotary-gear.png",
  blurb:
    "Our sponsor club. Rotaract Club of Bharuch was chartered and is mentored by the Rotary Club of Bharuch, part of the worldwide Rotary movement.",
};

export const localSponsors: Sponsor[] = [
  { name: "{{FILL: sponsor}}", kind: "local", logo: null },
  { name: "{{FILL: sponsor}}", kind: "local", logo: null },
  { name: "{{FILL: sponsor}}", kind: "local", logo: null },
  { name: "{{FILL: sponsor}}", kind: "local", logo: null },
];
