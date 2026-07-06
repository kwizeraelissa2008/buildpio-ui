export interface Decision {
  id: number;
  title: string;
  description: string;
  agent: string;
  timestamp: string;
  status: "Approved" | "Pending" | "Rejected";
}
