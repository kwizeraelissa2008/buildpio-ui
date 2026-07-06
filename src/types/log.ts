export interface AILog {
  id: number;
  agent: string;
  event: string;
  level: "info" | "warn" | "error";
  timestamp: string;
}
