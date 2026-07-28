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
  { name: "Rtr. Bhavya Samirkumar Shah", role: "District Rotaract Representative (DRR)", order: 0, isBoard: true, photo: "/team/DRR.jpg" },
  { name: "Rtr. Dixil Waghela", role: "President", order: 1, isBoard: true, photo: "/team/21.jpg" },
  { name: "Rtr. Het Parikh", role: "Secretary", order: 2, isBoard: true, photo: "/team/20.jpg" },
  { name: "Rtr. Harsh Thakkar", role: "Vice President", order: 3, isBoard: true, photo: "/team/16.jpg" },
  { name: "Rtr. Priyanka Motiyani", role: "Treasurer", order: 4, isBoard: true, photo: "/team/15.jpg" },
  { name: "Rtr. Meet Mehta", role: "Sergeant-at-Arms", order: 5, isBoard: true, photo: "/team/14.jpg" },
  { name: "Rtr. Purvendrasinh Rana", role: "Immediate Past President", order: 6, isBoard: true, photo: "/team/17.jpg" },
  { name: "Rtr. Zeel Bhatt", role: "Club Learning Facilitator", order: 7, isBoard: true, photo: "/team/18.jpg" },
  { name: "Rtr. Jeet Shah", role: "Club Advisor", order: 8, isBoard: true, photo: "/team/19.jpg" },

  // ---- Committee chairs (also board directors) ----
  { name: "Rtr. Vidhi Rana", role: "Social Media Chair", order: 20, isBoard: true, photo: "/team/1.jpg" },
  { name: "Rtr. Priya Paul", role: "Literacy Chair", order: 21, isBoard: true, photo: "/team/2.jpg" },
  { name: "Rtr. Prachi Patel", role: "Rotaract Week Chair", order: 22, isBoard: true, photo: "/team/3.jpg" },
  { name: "Rtr. Nandita Chauhan", role: "Greetings Chair", order: 23, isBoard: true, photo: "/team/4.jpg" },
  { name: "Rtr. Dhruv Chaddarwala", role: "Membership Chair", order: 24, isBoard: true, photo: "/team/5.jpg" },
  { name: "Rtr. Prexa Mahant", role: "Editor", order: 25, isBoard: true, photo: "/team/6.jpg" },
  { name: "Rtr. Janvi Bhojwani", role: "Public Image Chair", order: 26, isBoard: true, photo: "/team/7.jpg" },
  { name: "Rtr. Dhruv Shah", role: "TRF Promotion Chair", order: 27, isBoard: true, photo: "/team/8.jpg" },
  { name: "Rtr. Karamrajsinhji Raulji", role: "Youth Service Chair / RYLC", order: 28, isBoard: true, photo: "/team/9.jpg" },
  { name: "Rtr. Grishma Shah", role: "Service Project Chair", order: 29, isBoard: true, photo: "/team/10.jpg" },
  { name: "Rtr. Deval Mehta", role: "Professional Service Chair", order: 30, isBoard: true, photo: "/team/11.jpg" },
  { name: "Rtr. Harmandeep Singh Bunet", role: "International Service Chair", order: 31, isBoard: true, photo: "/team/12.jpg" },
  { name: "Rtr. Krushang Prajapati", role: "Club Service Chair", order: 32, isBoard: true, photo: "/team/13.jpg" },
];
