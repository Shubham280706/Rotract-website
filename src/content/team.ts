/**
 * Leadership & team.
 *
 * Rotary leadership rotates every July — to swap the board for a new
 * Rotary year, just edit this one file. `order` controls display order.
 * `photo: null` renders an on-brand empty slot (no dummy images).
 */
export type TeamMember = {
  name: string;
  role: string;
  order: number;
  isBoard: boolean; // true = office bearer / director, shown first
  instagram?: string;
  photo?: string | null;
};

export const team: TeamMember[] = [
  // ---- Office bearers ----
  { name: "{{FILL: name}}", role: "President", order: 1, isBoard: true, photo: null },
  { name: "{{FILL: name}}", role: "Vice President", order: 2, isBoard: true, photo: null },
  { name: "{{FILL: name}}", role: "Secretary", order: 3, isBoard: true, photo: null },
  { name: "{{FILL: name}}", role: "Treasurer", order: 4, isBoard: true, photo: null },
  { name: "{{FILL: name}}", role: "Sergeant-at-Arms", order: 5, isBoard: true, photo: null },
  { name: "{{FILL: name}}", role: "Director — Community Service", order: 6, isBoard: true, photo: null },
  { name: "{{FILL: name}}", role: "Director — Club Service", order: 7, isBoard: true, photo: null },
  { name: "{{FILL: name}}", role: "Director — Professional Development", order: 8, isBoard: true, photo: null },

  // ---- General members (add as many as needed) ----
  { name: "{{FILL: name}}", role: "Member", order: 20, isBoard: false, photo: null },
  { name: "{{FILL: name}}", role: "Member", order: 21, isBoard: false, photo: null },
  { name: "{{FILL: name}}", role: "Member", order: 22, isBoard: false, photo: null },
  { name: "{{FILL: name}}", role: "Member", order: 23, isBoard: false, photo: null },
];
