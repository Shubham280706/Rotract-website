# 📁 gallery/ — General Photo Gallery

These photos appear in the lightbox gallery section on the website.

## How to Add Photos

1. Drop any photo here — `photo1.jpg`, `bharuch-event.jpg`, whatever name you like
2. Update `src/content/events.ts` to reference them:

```ts
export const gallery: GalleryItem[] = [
  { caption: "Spice of Bharuch 2025", src: "/gallery/sob-2025.jpg" },
  { caption: "Blood Drive August 2025", src: "/gallery/blood-drive.jpg" },
  { caption: "Tree Plantation Drive", src: "/gallery/tree-plantation.jpg" },
  { caption: "Fellowship Night", src: "/gallery/fellowship-night.jpg" },
  { caption: "Community Service Day", src: "/gallery/community-day.jpg" },
  { caption: "Skill-Up Workshop", src: "/gallery/workshop.jpg" },
];
```

3. Push to Git → photos appear in gallery

## Tips
- Any orientation works (portrait or landscape)
- Recommended minimum: 800×600 px
- Compress to < 500 KB per image
- Formats: `.jpg` `.jpeg` `.png` `.webp`
