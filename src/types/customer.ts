export type CustomerStatus =
  | "New Lead"
  | "Contacted"
  | "Meeting Scheduled"
  | "Proposal Sent"
  | "Negotiating"
  | "Active"
  | "Churned";

export interface CustomerMessage {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
}

export interface CustomerNote {
  id: number;
  content: string;
  author: string;
  timestamp: string;
}

export interface CustomerTimelineEntry {
  id: number;
  event: string;
  timestamp: string;
}

export interface Customer {
  id: number;
  company: string;
  contact: string;
  email: string;
  industry: string;
  revenue: number;
  status: CustomerStatus;
  assignedEmployee: string;
  avatar: string;
  lastContact: string;
  meetingHistory: string[];
  notes: CustomerNote[];
  messages: CustomerMessage[];
  timeline: CustomerTimelineEntry[];
}
