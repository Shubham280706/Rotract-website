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
  isSignature?: boolean;
};

/**
 * HOW TO ADD PROJECT PHOTOS:
 * 1. Drop photos into /public/projects/<slug>/ folder
 * 2. Name them 1.jpg, 2.jpg, 3.jpg ... (order = display order)
 * 3. Add the paths here in the images array
 * 4. Push to Git — website updates automatically
 *
 * Example: /public/projects/spice-of-bharuch/1.jpg → "/projects/spice-of-bharuch/1.jpg"
 */
export const projects: Project[] = [
  {
    slug: "spice-of-bharuch",
    title: "Spice of Bharuch (SOB)",
    avenue: "Community",
    date: "Annual Signature Event",
    summary:
      "Our premier food festival and cultural fundraiser showcasing Bharuch's local culinary heritage. It attracts thousands of visitors and raises funds for local community development projects.",
    impact: "Signature Project · 5,000+ Attendees",
    isSignature: true,
    // Drop photos in /public/projects/spice-of-bharuch/ then add paths below
    images: [
      // "/projects/spice-of-bharuch/1.jpg",
    ],
  },
  {
    slug: "local-for-vocal",
    title: "Local For Vocal",
    avenue: "Community",
    date: "Annual Signature Event",
    summary:
      "A marketplace initiative promoting local artisans, small-scale business owners, and cottage industries from Bharuch. We help them expand their reach and digitize their business.",
    impact: "Signature Project · 50+ Local Vendors Supported",
    isSignature: true,
    // Drop photos in /public/projects/local-for-vocal/ then add paths below
    images: [
      // "/projects/local-for-vocal/1.jpg",
    ],
  },
  {
    slug: "community-blood-donation-drive",
    title: "Community Blood Donation Drive",
    avenue: "Community",
    date: "{{FILL: month/year}}",
    summary:
      "A single-day donation camp run with local hospitals to shore up the district blood bank ahead of peak demand.",
    impact: "{{FILL: e.g. 120 units collected}}",
    // Drop photos in /public/projects/community-blood-donation-drive/ then add paths below
    images: [
      // "/projects/community-blood-donation-drive/1.jpg",
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
    // Drop photos in /public/projects/skill-up-career-workshop/ then add paths below
    images: [
      // "/projects/skill-up-career-workshop/1.jpg",
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
    // Drop photos in /public/projects/charter-installation-ceremony/ then add paths below
    images: [
      "/projects/charter-installation-ceremony/1.png",
      "/projects/charter-installation-ceremony/2.png",
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
    // Drop photos in /public/projects/clean-narmada-riverfront/ then add paths below
    images: [
      // "/projects/clean-narmada-riverfront/1.jpg",
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
    // Drop photos in /public/projects/international-fellowship-exchange/ then add paths below
    images: [
      // "/projects/international-fellowship-exchange/1.jpg",
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
    // Drop photos in /public/projects/winter-warmth-distribution/ then add paths below
    images: [
      // "/projects/winter-warmth-distribution/1.jpg",
    ],
  },
];
