/**
 * Events & gallery.
 * - `past`: completed events (each with image slots).
 * - `upcoming`: optional forward strip; leave empty [] to hide it.
 * - `gallery`: standalone photo slots for the lightbox grid.
 */
export type EventItem = {
  title: string;
  date: string; // e.g. "12 Feb 2026"
  location?: string;
  blurb?: string;
  images: string[];
};

export const upcoming: EventItem[] = [
  {
    title: "{{FILL: upcoming event name}}",
    date: "{{FILL: date}}",
    location: "{{FILL: venue}}",
    blurb: "{{FILL: one line about the event}}",
    images: [],
  },
];

export const past: EventItem[] = [
  {
    title: "Installation Ceremony 2026–27",
    date: "{{FILL: date}}",
    location: "Bharuch",
    blurb: "Welcoming the new board for the Rotary year.",
    images: [],
  },
  {
    title: "Community Service Day",
    date: "{{FILL: date}}",
    location: "Bharuch",
    blurb: "A full day of on-ground service across the city.",
    images: [],
  },
  {
    title: "Fellowship Night",
    date: "{{FILL: date}}",
    location: "Bharuch",
    blurb: "Members and guests gathering for food, games, and friendship.",
    images: [],
  },
];

/** Gallery slots — each entry becomes a lightbox image once a path is added. */
export type GalleryItem = { caption: string; src: string | null };

export const gallery: GalleryItem[] = [
  { caption: "{{FILL: caption}}", src: null },
  { caption: "{{FILL: caption}}", src: null },
  { caption: "{{FILL: caption}}", src: null },
  { caption: "{{FILL: caption}}", src: null },
  { caption: "{{FILL: caption}}", src: null },
  { caption: "{{FILL: caption}}", src: null },
];
