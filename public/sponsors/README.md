# 📁 sponsors/ — Sponsor Logos

Drop sponsor and partner logos here.

## File Naming

Use the sponsor's name as the filename (lowercase, hyphens):

| Sponsor | Filename |
|---|---|
| Rotary Club of Bharuch | `rotary-club-bharuch.png` |
| Any local sponsor | `sponsor-name.png` |

## How to Update `src/content/sponsors.ts`

```ts
export const parentClub: Sponsor = {
  name: "Rotary Club of Bharuch",
  kind: "parent",
  url: "https://rotarybharuch.org",
  logo: "/sponsors/rotary-club-bharuch.png",
  blurb: "Our sponsor club...",
};

export const localSponsors: Sponsor[] = [
  { name: "Sponsor Name", kind: "local", logo: "/sponsors/sponsor-name.png" },
];
```

## Tips
- Logos look best on transparent backgrounds (`.png` with alpha)
- Recommended size: at least 300 px wide
- White or dark versions both work — the website handles both dark/light backgrounds
