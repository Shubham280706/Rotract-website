# 📁 team/ — Board Member Photos

Drop a photo here for each team member.

## File Naming
Name the file using the member's slug (lowercase, hyphens, no spaces):

| Role | Filename |
|---|---|
| President | `president.jpg` (or keep at `/public/president.jpeg`) |
| Vice President | `vice-president.jpg` |
| Secretary | `secretary.jpg` |
| Treasurer | `treasurer.jpg` |
| Sergeant-at-Arms | `sergeant-at-arms.jpg` |
| Director — Community Service | `director-community.jpg` |
| Director — Club Service | `director-club.jpg` |
| Director — Professional Development | `director-professional.jpg` |
| General members | `member-firstname-lastname.jpg` |

## Then update `src/content/team.ts`
Set the `photo` field to the path:
```ts
{ name: "Rtr. Het Parikh", role: "Secretary", photo: "/team/secretary.jpg" }
```

## Tips
- Square crops work best (1:1 ratio)
- Recommended size: 400×400 px minimum
- Formats: `.jpg` `.jpeg` `.png` `.webp`
