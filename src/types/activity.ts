export type ActivityType =
  | "Sales"
  | "Marketing"
  | "Finance"
  | "Support"
  | "Operations"
  | "Research";

export interface Activity {
  id: number;
  agent: string;
  action: string;
  time: string;
  type: ActivityType;
}
