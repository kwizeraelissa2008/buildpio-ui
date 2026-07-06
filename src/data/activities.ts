import type { Activity, ActivityType } from "../types/activity";

const agents = [
  "Sarah Johnson", "David Kim", "Emma Wilson", "Michael Brown",
  "Olivia Chen", "James Rodriguez", "Sophia Martinez", "Liam Thompson",
];

const actions = [
  "Generated 18 new leads", "Published LinkedIn post", "Prepared monthly report",
  "Answered 24 customer tickets", "Sent follow-up emails to 15 prospects",
  "Updated CRM with 8 new contacts", "Completed market research report",
  "Optimized ad campaign CTR by 12%", "Processed 6 invoices", "Drafted blog post",
  "Scheduled 3 demo calls", "Resolved support ticket #4821", "Analyzed competitor pricing",
  "Created email sequence for nurture campaign", "Updated product documentation",
  "Generated weekly performance report", "Qualified 9 inbound leads",
  "Published social media content", "Reviewed contract amendments",
  "Completed data enrichment for 22 accounts", "Sent proposal to VisionHub",
  "Updated sales pipeline forecast", "Conducted A/B test analysis",
  "Refreshed landing page copy", "Processed refund request", "Onboarded new customer",
  "Created case study draft", "Updated FAQ knowledge base", "Analyzed churn metrics",
  "Prepared board update slides", "Sent renewal reminder emails",
  "Completed security audit checklist", "Updated integration webhook config",
  "Generated lead scoring report", "Published newsletter to 2,400 subscribers",
  "Reviewed and approved ad creative", "Completed customer satisfaction survey",
  "Updated pricing comparison sheet", "Sent meeting recap to GrowthLab",
  "Processed expense report", "Created product demo video script",
  "Updated hiring job descriptions", "Analyzed website conversion funnel",
  "Completed quarterly tax prep", "Sent partnership outreach to 10 companies",
  "Updated customer success playbook", "Generated SEO keyword report",
  "Completed API documentation update", "Reviewed feature request backlog",
  "Sent win-back campaign to churned accounts",
];

const types: ActivityType[] = ["Sales", "Marketing", "Finance", "Support", "Operations", "Research"];
const times = [
  "Just now", "2 mins ago", "5 mins ago", "8 mins ago", "12 mins ago",
  "15 mins ago", "22 mins ago", "30 mins ago", "45 mins ago", "1 hour ago",
];

function createActivity(id: number): Activity {
  return {
    id,
    agent: agents[id % agents.length],
    action: actions[id - 1],
    time: times[id % times.length],
    type: types[id % types.length],
  };
}

export const activities: Activity[] = Array.from({ length: 50 }, (_, i) => createActivity(i + 1));

export const recentActivities = activities.slice(0, 6);
