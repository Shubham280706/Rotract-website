# 📁 intro/ — "Who We Are" Background Collage

These images appear in the background collage of the Intro section (the "Who We Are" area).

## How it Works

Any image you drop in this folder can be added to the collage grid.
To add it to the website, update the `collageImages` array in:
`src/components/sections/Intro.tsx`

## Current Images

| File | Description |
|---|---|
| `community.png` | Community cleanup drive |
| `workshop.png` | Career workshop |
| `charity.png` | Charity distribution |
| `festival.png` | Food festival |
| `team.png` | Team group photo |
| `environment.png` | Tree plantation |

## How to Add More

1. Drop your photo here (e.g. `new-event.jpg`)
2. Open `src/components/sections/Intro.tsx`
3. Add to the `collageImages` array:
```ts
const collageImages = [
  { src: "/intro/community.png", alt: "Community service", span: 1 },
  { src: "/intro/new-event.jpg", alt: "New event", span: 1 },
  // ...
];
```

## Tips
- Mix portrait and landscape photos for a nice grid
- At least 800px wide for quality
- Formats: `.jpg` `.jpeg` `.png` `.webp`
