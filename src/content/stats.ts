/**
 * Impact counters. `value` is the number the counter animates up to.
 * Replace {{FILL}} numbers with real figures before launch.
 */
export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  note?: string;
};

export const stats: Stat[] = [
  { label: "Active members", value: 40, suffix: "+", note: "{{FILL: verify count}}" },
  { label: "Projects completed", value: 25, suffix: "+", note: "{{FILL: verify count}}" },
  { label: "Service hours logged", value: 1200, suffix: "+", note: "{{FILL: verify count}}" },
  { label: "Funds raised", value: 3, prefix: "₹", suffix: "L+", note: "{{FILL: verify figure}}" },
  { label: "Beneficiaries reached", value: 2000, suffix: "+", note: "{{FILL: verify count}}" },
];
