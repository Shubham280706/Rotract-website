/**
 * Projects — the centerpiece. Filterable by Rotary's Avenues of Service.
 * `images: []` renders on-brand empty slots until you add real paths
 * (drop files in /public and reference e.g. "/projects/blood-drive.jpg").
 */
export const avenues = [
  "Community",
  "Professional Development",
  "Club Service",
  "International",
] as const;

export type Avenue = (typeof avenues)[number];

export type Project = {
  slug: string;
  title: string;
  avenue: Avenue;
  date: string; // human-readable, e.g. "Feb 2026"
  summary: string;
  impact?: string;
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "community-blood-donation-drive",
    title: "Community Blood Donation Drive",
    avenue: "Community",
    date: "{{FILL: month/year}}",
    summary:
      "A single-day donation camp run with local hospitals to shore up the district blood bank ahead of peak demand.",
    impact: "{{FILL: e.g. 120 units collected}}",
    images: [
      "{{FILL: photo 1}}", "{{FILL: photo 2}}", "{{FILL: photo 3}}", "{{FILL: photo 4}}",
      "{{FILL: photo 5}}", "{{FILL: photo 6}}", "{{FILL: photo 7}}", "{{FILL: photo 8}}",
      "{{FILL: photo 9}}", "{{FILL: photo 10}}", "{{FILL: photo 11}}", "{{FILL: photo 12}}"
    ],
  },
  {
    slug: "skill-up-career-workshop",
    title: "Skill-Up Career Workshop",
    avenue: "Professional Development",
    date: "{{FILL: month/year}}",
    summary:
      "Résumé, interview, and communication sessions for final-year students, led by working professionals from the club's network.",
    impact: "{{FILL: e.g. 80 students trained}}",
    images: [
      "{{FILL: photo 1}}", "{{FILL: photo 2}}", "{{FILL: photo 3}}", "{{FILL: photo 4}}",
      "{{FILL: photo 5}}", "{{FILL: photo 6}}", "{{FILL: photo 7}}", "{{FILL: photo 8}}"
    ],
  },
  {
    slug: "charter-installation-ceremony",
    title: "Charter & Installation Ceremony",
    avenue: "Club Service",
    date: "{{FILL: month/year}}",
    summary:
      "The annual installation marking the new Rotary year, welcoming incoming office bearers and members.",
    impact: "{{FILL: e.g. new board installed}}",
    images: [
      "{{FILL: photo 1}}", "{{FILL: photo 2}}", "{{FILL: photo 3}}", "{{FILL: photo 4}}",
      "{{FILL: photo 5}}", "{{FILL: photo 6}}", "{{FILL: photo 7}}", "{{FILL: photo 8}}",
      "{{FILL: photo 9}}", "{{FILL: photo 10}}", "{{FILL: photo 11}}", "{{FILL: photo 12}}",
      "{{FILL: photo 13}}", "{{FILL: photo 14}}", "{{FILL: photo 15}}"
    ],
  },
  {
    slug: "clean-narmada-riverfront",
    title: "Clean Narmada Riverfront",
    avenue: "Community",
    date: "{{FILL: month/year}}",
    summary:
      "A morning cleanup along the Narmada riverfront, pairing waste collection with an awareness walk on plastic use.",
    impact: "{{FILL: e.g. 300 kg waste removed}}",
    images: [
      "{{FILL: photo 1}}", "{{FILL: photo 2}}", "{{FILL: photo 3}}", "{{FILL: photo 4}}",
      "{{FILL: photo 5}}", "{{FILL: photo 6}}", "{{FILL: photo 7}}", "{{FILL: photo 8}}",
      "{{FILL: photo 9}}", "{{FILL: photo 10}}"
    ],
  },
  {
    slug: "international-fellowship-exchange",
    title: "International Fellowship Exchange",
    avenue: "International",
    date: "{{FILL: month/year}}",
    summary:
      "A joint virtual meet with a partner Rotaract club abroad to share project ideas and build lasting friendships across borders.",
    impact: "{{FILL: e.g. partner club paired}}",
    images: [
      "{{FILL: photo 1}}", "{{FILL: photo 2}}", "{{FILL: photo 3}}", "{{FILL: photo 4}}",
      "{{FILL: photo 5}}", "{{FILL: photo 6}}"
    ],
  },
  {
    slug: "winter-warmth-distribution",
    title: "Winter Warmth Distribution",
    avenue: "Community",
    date: "{{FILL: month/year}}",
    summary:
      "Blankets and warm clothing distributed to families and street communities across Bharuch during the cold season.",
    impact: "{{FILL: e.g. 250 blankets given}}",
    images: [
      "{{FILL: photo 1}}", "{{FILL: photo 2}}", "{{FILL: photo 3}}", "{{FILL: photo 4}}",
      "{{FILL: photo 5}}", "{{FILL: photo 6}}", "{{FILL: photo 7}}", "{{FILL: photo 8}}",
      "{{FILL: photo 9}}", "{{FILL: photo 10}}", "{{FILL: photo 11}}", "{{FILL: photo 12}}",
      "{{FILL: photo 13}}", "{{FILL: photo 14}}"
    ],
  },
];
