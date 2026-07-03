# 📁 events/ — Event Photos

Each event has its own sub-folder. Drop photos in and push.

## Folder Structure

```
events/
├── charter-installation-ceremony/
│   ├── 1.jpg
│   └── 2.jpg
├── community-service-day/
│   └── 1.jpg
├── fellowship-night/
│   └── 1.jpg
└── my-new-event/           ← create new folders as needed
    └── 1.jpg
```

## How to Add Photos

1. Drop photos into the matching sub-folder
2. Name them `1.jpg`, `2.jpg`, etc.
3. Push to Git → live on website

## How to Update `src/content/events.ts`

```ts
export const past: EventItem[] = [
  {
    title: "Installation Ceremony 2026–27",
    date: "15 Jul 2026",
    location: "Bharuch",
    blurb: "Welcoming the new board for the Rotary year.",
    images: [
      "/events/charter-installation-ceremony/1.jpg",
      "/events/charter-installation-ceremony/2.jpg",
    ],
  },
];
```

## Adding an Upcoming Event

```ts
export const upcoming: EventItem[] = [
  {
    title: "Blood Donation Camp",
    date: "20 Aug 2026",
    location: "Civil Hospital, Bharuch",
    blurb: "Join us to donate blood and save lives.",
    images: [],   // add photos after the event
  },
];
```

## Tips
- Any format works: `.jpg` `.jpeg` `.png` `.webp`
- Compress to < 500 KB per image
