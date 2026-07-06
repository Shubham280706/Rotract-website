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
  video?: string;
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
 *
 * Other initiatives are removed for now — add them back one at a time.
 */
export const projects: Project[] = [
  {
    slug: "varsha-vandan",
    title: "Varsha Vandan",
    avenue: "Community",
    date: "June 2026",
    summary:
      "As the first monsoon rains arrived, club members stepped out after dark to greet Bharuch's underserved communities with roses and small care kits — a Rotaract tradition of welcoming the rains with warmth and gratitude toward the people who need it most.",
    impact: "Roses and Care Kits Shared to Welcome the Monsoon",
    images: [
      "/projects/varsha-vandan/5.jpg",
      "/projects/varsha-vandan/2.jpg",
      "/projects/varsha-vandan/3.jpg",
      "/projects/varsha-vandan/4.jpg",
      "/projects/varsha-vandan/1.jpg",
    ],
    video: "/projects/varsha-vandan/video.mp4",
  },
  {
    slug: "beyond-books",
    title: "Beyond Books",
    avenue: "Community",
    date: "July 2026",
    summary:
      "Club members visited a Anand Niketan school for a Beyond Books session, sitting down with students for an open conversation on real-world skills and ideas that go past the textbook — capped off with a warm thank-you from the school.",
    impact: "An Interactive Session Taking Learning Beyond the Classroom",
    images: [
      "/projects/beyond-books/4.jpg",
      "/projects/beyond-books/2.jpg",
      "/projects/beyond-books/3.jpg",
      "/projects/beyond-books/1.jpg",
      "/projects/beyond-books/5.jpg",
      "/projects/beyond-books/6.jpg",
      "/projects/beyond-books/7.jpg",
    ],
  },
  {
    slug: "go-green-tree-plantation",
    title: "Go Green: Tree Plantation Drive",
    avenue: "Community",
    date: "July 2026",
    summary:
      "Club members rolled up their sleeves for a hands-on tree plantation drive, digging in saplings along community grounds to expand green cover and encourage a lasting habit of environmental stewardship in Bharuch.",
    impact: "Saplings Planted for a Greener Bharuch",
    images: [
      "/projects/go-green-tree-plantation/2.jpg",
      "/projects/go-green-tree-plantation/1.jpg",
      "/projects/go-green-tree-plantation/3.jpg",
      "/projects/go-green-tree-plantation/4.jpg",
      "/projects/go-green-tree-plantation/5.jpg",
    ],
  },
  {
    slug: "blood-donation-drive",
    title: "Blood Donation Drive",
    avenue: "Community",
    date: "July 2026",
    summary:
      "Club members organized a blood donation camp in partnership with Dr. Kiran C. Patel Medical College & Research Institute, welcoming donors to register, get screened, and give blood to help replenish the local blood bank.",
    impact: "Blood Donated to Support Local Patients",
    images: [
      "/projects/blood-donation-drive/4.jpg",
      "/projects/blood-donation-drive/2.jpg",
      "/projects/blood-donation-drive/3.jpg",
      "/projects/blood-donation-drive/1.jpg",
      "/projects/blood-donation-drive/5.jpg",
    ],
  },
  {
    slug: "healthy-habits-happy-hearts",
    title: "Healthy Habits, Happy Hearts",
    avenue: "Community",
    date: "June 2026",
    summary:
      "Club members visited the Children's Home for Girls at Nandelav to lead a healthy habits awareness session, talking with residents about hygiene, nutrition, and simple daily routines that support long-term wellbeing.",
    impact: "Healthy Habits Shared with Children's Home Residents",
    images: [
      "/projects/healthy-habits-happy-hearts/1.jpg",
      "/projects/healthy-habits-happy-hearts/2.jpg",
      "/projects/healthy-habits-happy-hearts/3.jpg",
      "/projects/healthy-habits-happy-hearts/4.jpg",
      "/projects/healthy-habits-happy-hearts/5.jpg",
      "/projects/healthy-habits-happy-hearts/6.jpg",
      "/projects/healthy-habits-happy-hearts/7.jpg",
    ],
  },
];
