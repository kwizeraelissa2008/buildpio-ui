import type { Employee, EmployeeStatus } from "../types/employee";

const names = [
  "Sarah Johnson", "David Kim", "Emma Wilson", "Michael Brown",
  "Olivia Chen", "James Rodriguez", "Sophia Martinez", "Liam Thompson",
  "Ava Patel", "Noah Williams", "Isabella Garcia", "Ethan Davis",
  "Mia Anderson", "Lucas Taylor", "Charlotte Moore", "Benjamin Lee",
  "Amelia White", "Henry Clark", "Harper Lewis", "Alexander Walker",
];

const roles = [
  "Sales AI", "Marketing AI", "Finance AI", "Support AI",
  "Research AI", "Operations AI", "Content AI", "Outreach AI",
  "Analytics AI", "Legal AI",
];

const tasks = [
  "Generating Leads", "Publishing LinkedIn Content", "Waiting for Approval",
  "No Active Task", "Drafting Email Sequence", "Analyzing Market Data",
  "Processing Invoices", "Responding to Tickets", "Building Reports",
  "Scheduling Meetings", "Optimizing Ad Campaigns", "Reviewing Contracts",
];

const skills = ["Lead Gen", "Copywriting", "Data Analysis", "CRM", "SEO", "Email", "Negotiation", "Research"];
const tools = ["HubSpot", "Notion", "Slack", "Gmail", "LinkedIn", "Stripe", "Zapier", "OpenAI"];
const statuses: EmployeeStatus[] = ["Working", "Working", "Waiting", "Idle", "Paused"];

function createEmployee(id: number): Employee {
  const name = names[id - 1];
  const role = roles[(id - 1) % roles.length];
  const status = statuses[id % statuses.length];

  return {
    id,
    name,
    role,
    avatar: `https://i.pravatar.cc/150?img=${(id % 70) + 1}`,
    status,
    progress: 15 + (id * 4) % 85,
    currentTask: tasks[id % tasks.length],
    memory: [
      `Prefers ${id % 2 === 0 ? "formal" : "casual"} tone with clients`,
      `Top industry focus: ${["SaaS", "FinTech", "HealthTech", "E-commerce"][id % 4]}`,
      `Best performing channel: ${["LinkedIn", "Email", "Cold Call", "Referral"][id % 4]}`,
    ],
    goals: [
      `Generate ${10 + id * 2} qualified leads this week`,
      `Maintain ${85 + id % 10}% response rate`,
      `Complete ${3 + id % 5} tasks daily`,
    ],
    performance: 72 + (id * 3) % 28,
    skills: skills.slice(0, 3 + (id % 3)),
    tools: tools.slice(0, 4 + (id % 3)),
    workflow: `${role.split(" ")[0]} Pipeline v${1 + (id % 3)}.0`,
    cpuUsage: 20 + (id * 7) % 60,
    tokensUsed: 12000 + id * 3400,
    lastActive: id % 3 === 0 ? "Just now" : id % 3 === 1 ? "5 mins ago" : "12 mins ago",
    completedTasks: 45 + id * 8,
    revenueGenerated: 2400 + id * 890,
    conversationHistory: [
      { id: 1, role: "user", message: "Focus on enterprise leads today", timestamp: "9:00 AM" },
      { id: 2, role: "assistant", message: "Understood. Prioritizing companies with 50+ employees.", timestamp: "9:01 AM" },
      { id: 3, role: "assistant", message: `Found ${5 + id} new prospects matching criteria.`, timestamp: "9:15 AM" },
    ],
    timeline: [
      { id: 1, action: "Started daily workflow", timestamp: "8:30 AM" },
      { id: 2, action: "Completed lead research batch", timestamp: "9:45 AM" },
      { id: 3, action: "Sent outreach to 12 prospects", timestamp: "10:30 AM" },
    ],
  };
}

export const employees: Employee[] = Array.from({ length: 20 }, (_, i) => createEmployee(i + 1));

export const dashboardEmployees = employees.slice(0, 4);
