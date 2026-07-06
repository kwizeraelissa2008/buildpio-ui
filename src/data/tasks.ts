import type { Task, TaskPriority } from "../types/task";

const titles = [
  "Approve Sales Proposal", "Review AI Marketing Campaign", "Pay AWS Invoice",
  "Publish Weekly Report", "Follow up with TechNova", "Update pricing page",
  "Review Q2 financials", "Schedule team sync", "Approve ad spend",
  "Respond to support escalation", "Update CRM records", "Prepare investor update",
  "Review contract terms", "Optimize landing page", "Send onboarding emails",
  "Audit security settings", "Review competitor analysis", "Update product roadmap",
  "Prepare demo for GrowthLab", "Review churn report", "Approve content calendar",
  "Check API usage limits", "Review hiring pipeline", "Update knowledge base",
  "Prepare monthly newsletter", "Review tax documents", "Update integration docs",
  "Schedule customer interviews", "Review feature requests", "Approve refund request",
];

const priorities: TaskPriority[] = ["High", "Medium", "Low"];
const assignees = ["Sarah Johnson", "David Kim", "Emma Wilson", "Michael Brown", "Elissa"];

function createTask(id: number): Task {
  return {
    id,
    title: titles[id - 1],
    priority: priorities[id % priorities.length],
    completed: id % 5 === 0,
    assignee: assignees[id % assignees.length],
    dueDate: id % 3 === 0 ? "Today" : id % 3 === 1 ? "Tomorrow" : "This week",
  };
}

export const tasks: Task[] = Array.from({ length: 30 }, (_, i) => createTask(i + 1));

export const todayTasks = tasks.slice(0, 8);
