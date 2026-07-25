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
    slug: "helping-in-rain",
    title: "Helping in Rain",
    avenue: "Community",
    date: "July 2026",
    summary:
      "When our community needed support the most, the members of Rotaract Club of Bharuch stepped forward to make a difference.\n\nThrough a food distribution drive, we reached out to families affected by the heavy rainfall, sharing not just meals but also hope and care.\n\nSmall acts of kindness can make the biggest impact.",
    impact: "Food Distribution Drive for Rain-Affected Families",
    images: [
      "/projects/Helping-In-Rain/WhatsApp Image 2026-07-24 at 12.19.42.jpeg",
      "/projects/Helping-In-Rain/WhatsApp Image 2026-07-24 at 12.19.42 (1).jpeg",
      "/projects/Helping-In-Rain/WhatsApp Image 2026-07-24 at 12.19.43.jpeg",
      "/projects/Helping-In-Rain/WhatsApp Image 2026-07-24 at 12.19.43 (1).jpeg",
      "/projects/Helping-In-Rain/WhatsApp Image 2026-07-24 at 12.19.44.jpeg",
      "/projects/Helping-In-Rain/WhatsApp Image 2026-07-24 at 12.19.44 (1).jpeg",
      "/projects/Helping-In-Rain/WhatsApp Image 2026-07-24 at 12.19.45.jpeg",
      "/projects/Helping-In-Rain/WhatsApp Image 2026-07-24 at 12.19.45 (1).jpeg",
      "/projects/Helping-In-Rain/WhatsApp Image 2026-07-24 at 12.19.45 (2).jpeg",
    ],
  },
  {
    slug: "general-meeting",
    title: "First General Meeting",
    avenue: "Club Service",
    date: "July 2026",
    summary:
      "✨ A wonderful beginning to Rotary Year 2026–27!\n\nThe First General Meeting of the Rotary Club of Bharuch for Rotary Year 2026–27 commenced with an inspiring address by the President and Secretary, who shared their vision and expectations for the year ahead, setting the tone for an exciting journey of service and fellowship.\n\nTo help everyone connect, a fun-filled introduction activity was conducted, giving both new and existing members an opportunity to interact and get to know one another.\n\nThe RCC team also conducted an informative session on TRF (The Rotary Foundation), highlighting its importance and the incredible impact it creates through Rotary across the world.\n\nThe evening concluded with engaging fun activities, making it a perfect blend of learning, bonding, and fellowship.\n\nHere’s to a memorable year ahead of service above self! 💙",
    impact: "TRF Session & Club Board Vision Shared",
    images: [
      "/projects/general-meeting/IMG-20260707-WA0008.jpg",
      "/projects/general-meeting/IMG-20260707-WA0009.jpg",
      "/projects/general-meeting/IMG-20260707-WA0010.jpg",
    ],
  },
  {
    slug: "sip-seminar",
    title: "SIP Seminar: Financial Awareness",
    avenue: "Professional Development",
    date: "July 2026",
    summary:
      "An evening dedicated to learning, awareness, and smarter financial decisions.\n\nThe Rotaract Club of Bharuch was delighted to attend an insightful Financial Awareness Seminar by Sanskruti Investment, where Shri Indrajit Padhiyar shared valuable perspectives on smart investing, financial planning, and wealth creation.\n\nThank you to the organizers for an engaging session that empowered young minds with practical financial knowledge.",
    impact: "Empowering Young Minds with Investment Insights",
    images: [
      "/projects/sip-seminar/WhatsApp Image 2026-07-09 at 14.09.25.jpeg",
      "/projects/sip-seminar/WhatsApp Image 2026-07-09 at 14.09.26 (1).jpeg",
      "/projects/sip-seminar/WhatsApp Image 2026-07-09 at 14.09.26 (2).jpeg",
      "/projects/sip-seminar/WhatsApp Image 2026-07-09 at 14.09.26.jpeg",
      "/projects/sip-seminar/WhatsApp Image 2026-07-09 at 14.09.27 (1).jpeg",
      "/projects/sip-seminar/WhatsApp Image 2026-07-09 at 14.09.27 (2).jpeg",
      "/projects/sip-seminar/WhatsApp Image 2026-07-09 at 14.09.27.jpeg",
      "/projects/sip-seminar/WhatsApp Image 2026-07-09 at 14.09.28 (1).jpeg",
      "/projects/sip-seminar/WhatsApp Image 2026-07-09 at 14.09.28 (2).jpeg",
      "/projects/sip-seminar/WhatsApp Image 2026-07-09 at 14.09.28 (3).jpeg",
      "/projects/sip-seminar/WhatsApp Image 2026-07-09 at 14.09.28.jpeg",
      "/projects/sip-seminar/WhatsApp Image 2026-07-09 at 14.09.29 (1).jpeg",
      "/projects/sip-seminar/WhatsApp Image 2026-07-09 at 14.09.29 (2).jpeg",
      "/projects/sip-seminar/WhatsApp Image 2026-07-09 at 14.09.29 (3).jpeg",
      "/projects/sip-seminar/WhatsApp Image 2026-07-09 at 14.09.29.jpeg",
      "/projects/sip-seminar/WhatsApp Image 2026-07-09 at 14.09.30 (1).jpeg",
      "/projects/sip-seminar/WhatsApp Image 2026-07-09 at 14.09.30.jpeg",
    ],
    video: "/projects/sip-seminar/WhatsApp Video 2026-07-09 at 14.09.25.mp4",
  },
  {
    slug: "rotaracts-got-latent",
    title: "Rotaract's Got Latent",
    avenue: "Club Service",
    date: "July 2026",
    summary:
      "✨ Breaking the ice with a twist!\n\nDuring the First General Meeting of Rotary Year 2026–27, the Rotaract Club of Bharuch organized a special introduction session for both new and existing members. To make it more engaging and interactive, a fun “Rotaract’s Got Latent” activity was conducted, where members introduced themselves in a unique and entertaining way.\n\nThe session was filled with laughter, conversations, and new connections—setting the perfect tone for a year of fellowship and service.",
    impact: "Fun Icebreaking & Member Introductions",
    images: [
      "/projects/rotaracts-got-latent/IMG-20260707-WA0018.jpg",
      "/projects/rotaracts-got-latent/IMG-20260707-WA0019.jpg",
      "/projects/rotaracts-got-latent/IMG-20260707-WA0021.jpg",
      "/projects/rotaracts-got-latent/IMG-20260707-WA0023.jpg",
      "/projects/rotaracts-got-latent/IMG-20260707-WA0033.jpg",
      "/projects/rotaracts-got-latent/IMG-20260707-WA0035.jpg",
      "/projects/rotaracts-got-latent/IMG-20260707-WA0038.jpg",
      "/projects/rotaracts-got-latent/IMG-20260707-WA0040.jpg",
      "/projects/rotaracts-got-latent/IMG-20260707-WA0042.jpg",
      "/projects/rotaracts-got-latent/IMG-20260707-WA0046.jpg",
      "/projects/rotaracts-got-latent/IMG-20260707-WA0054.jpg",
      "/projects/rotaracts-got-latent/IMG-20260707-WA0056.jpg",
      "/projects/rotaracts-got-latent/IMG-20260707-WA0058.jpg",
      "/projects/rotaracts-got-latent/IMG-20260707-WA0059.jpg",
      "/projects/rotaracts-got-latent/IMG-20260707-WA0060.jpg",
      "/projects/rotaracts-got-latent/IMG-20260707-WA0061.jpg",
    ],
  },
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
