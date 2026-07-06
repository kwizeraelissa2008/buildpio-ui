export type EmployeeStatus = "Working" | "Waiting" | "Idle" | "Paused";

export interface ConversationEntry {
  id: number;
  role: "user" | "assistant";
  message: string;
  timestamp: string;
}

export interface TimelineEntry {
  id: number;
  action: string;
  timestamp: string;
}

export interface Employee {
  id: number;
  name: string;
  role: string;
  avatar: string;
  status: EmployeeStatus;
  progress: number;
  currentTask: string;
  memory: string[];
  goals: string[];
  performance: number;
  skills: string[];
  tools: string[];
  workflow: string;
  cpuUsage: number;
  tokensUsed: number;
  lastActive: string;
  completedTasks: number;
  revenueGenerated: number;
  conversationHistory: ConversationEntry[];
  timeline: TimelineEntry[];
}
