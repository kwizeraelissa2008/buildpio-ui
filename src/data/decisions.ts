import type { Decision } from "../types/decision";

export const decisions: Decision[] = [
  { id: 1, title: "Approve $2,400 ad spend", description: "David Kim recommends increasing LinkedIn ad budget.", agent: "David Kim", timestamp: "10 mins ago", status: "Pending" },
  { id: 2, title: "Enterprise pricing for TechNova", description: "Sarah Johnson suggests custom pricing tier.", agent: "Sarah Johnson", timestamp: "45 mins ago", status: "Pending" },
  { id: 3, title: "Refund request #8821", description: "Michael Brown processed partial refund.", agent: "Michael Brown", timestamp: "2 hours ago", status: "Approved" },
  { id: 4, title: "Content calendar Q3", description: "David Kim submitted 12-week content plan.", agent: "David Kim", timestamp: "Yesterday", status: "Approved" },
];
