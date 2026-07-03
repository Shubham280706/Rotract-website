# 📁 projects/ — Project Photos

Each project has its own sub-folder. Just drop photos inside and the website picks them up automatically.

## Folder Structure

```
projects/
├── spice-of-bharuch/           ← Spice of Bharuch (SOB)
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
├── local-for-vocal/            ← Local For Vocal
├── community-blood-donation-drive/
├── skill-up-career-workshop/
├── charter-installation-ceremony/
│   ├── 1.png  ✅ already here
│   └── 2.png  ✅ already here
├── clean-narmada-riverfront/
├── international-fellowship-exchange/
└── winter-warmth-distribution/
```

## How to Add Photos (Zero Code Required)

1. Put photos into the matching folder
2. Name them `1.jpg`, `2.jpg`, `3.jpg` ... (order = display order)
3. Push to Git → website updates automatically

## How to Update `src/content/projects.ts` (One-Time Setup per Project)

Replace the `{{FILL: photo N}}` placeholders with actual paths:
```ts
images: [
  "/projects/spice-of-bharuch/1.jpg",
  "/projects/spice-of-bharuch/2.jpg",
  "/projects/spice-of-bharuch/3.jpg",
]
```

> Or leave `images: []` — the project card will show an elegant "no photo yet" placeholder.

## Adding a New Project

1. Create a new sub-folder: `projects/my-new-project/`
2. Drop photos inside: `1.jpg`, `2.jpg`, ...
3. Add the project in `src/content/projects.ts` with slug matching folder name

## Tips
- Landscape photos (16:9 or 4:3) look best in the gallery
- Compress to < 500 KB each
- Formats: `.jpg` `.jpeg` `.png` `.webp`
