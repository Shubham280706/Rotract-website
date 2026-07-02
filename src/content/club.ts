/**
 * Club-wide facts. Edit these values to update the whole site.
 * Tokens like {{FILL: ...}} mark facts to confirm before launch.
 */
export const club = {
  name: "Rotaract Club of Bharuch",
  shortName: "Rotaract Bharuch",
  tagline: "Fellowship Through Service",

  sponsorClub: "Rotary Club of Bharuch",
  riDistrict: "3060", // {{FILL: verify RI District — Bharuch is likely 3060}}
  clubId: "5993",
  charterYear: "1984",
  charterDate: "March 19, 1984",
  rotaryYear: "2026–27",

  // Weekly / regular meeting
  meeting: {
    day: "{{FILL: meeting day, e.g. Every Sunday}}",
    time: "{{FILL: meeting time, e.g. 7:00 PM}}",
    venue: "{{FILL: venue name, Bharuch}}",
  },

  email: "{{FILL: club email}}",
  phone: "{{FILL: contact number}}",

  socials: {
    instagram: "https://www.instagram.com/rotaractclubbharuch",
    facebook: "{{FILL: Facebook page URL}}",
  },

  location: {
    city: "Bharuch",
    state: "Gujarat",
    country: "India",
    // Approximate Bharuch coordinates — refine to your venue.
    lat: 21.7051,
    lng: 72.9959,
    // Embeddable map query
    mapQuery: "Bharuch, Gujarat, India",
  },
} as const;
