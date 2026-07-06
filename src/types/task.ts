export type TaskPriority = "High" | "Medium" | "Low";

export interface Task {
  id: number;
  title: string;
  priority: TaskPriority;
  completed: boolean;
  assignee?: string;
  dueDate?: string;
}
