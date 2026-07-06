import type { Notification } from "../types/notification";

export const notifications: Notification[] = [
  { id: 1, title: "New lead captured", message: "TechNova signed up for a demo from your website.", time: "5 mins ago", read: false, type: "success" },
  { id: 2, title: "Task completed", message: "Sarah Johnson completed lead generation batch.", time: "12 mins ago", read: false, type: "info" },
  { id: 3, title: "Approval needed", message: "Emma Wilson needs approval for Q2 expense report.", time: "25 mins ago", read: false, type: "warning" },
  { id: 4, title: "Meeting reminder", message: "Demo with TechNova starts in 30 minutes.", time: "30 mins ago", read: true, type: "info" },
  { id: 5, title: "Revenue milestone", message: "Monthly revenue crossed $15,000.", time: "1 hour ago", read: true, type: "success" },
  { id: 6, title: "System alert", message: "AI Engine CPU usage peaked at 78%.", time: "2 hours ago", read: true, type: "warning" },
];
