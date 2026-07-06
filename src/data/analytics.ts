import type { AnalyticsData } from "../types/analytics";
import { employees } from "./employees";

export const analyticsData: AnalyticsData = {
  revenue: [
    { month: "Jan", revenue: 4200 },
    { month: "Feb", revenue: 6800 },
    { month: "Mar", revenue: 7100 },
    { month: "Apr", revenue: 9400 },
    { month: "May", revenue: 11200 },
    { month: "Jun", revenue: 12430 },
    { month: "Jul", revenue: 15800 },
  ],
  dailyActivity: [
    { day: "Mon", tasks: 24, leads: 12 },
    { day: "Tue", tasks: 31, leads: 18 },
    { day: "Wed", tasks: 28, leads: 15 },
    { day: "Thu", tasks: 35, leads: 22 },
    { day: "Fri", tasks: 29, leads: 19 },
    { day: "Sat", tasks: 12, leads: 6 },
    { day: "Sun", tasks: 8, leads: 4 },
  ],
  weeklyActivity: [
    { week: "W1", completed: 142, generated: 68 },
    { week: "W2", completed: 156, generated: 74 },
    { week: "W3", completed: 168, generated: 82 },
    { week: "W4", completed: 174, generated: 91 },
  ],
  monthlyComparison: [
    { metric: "Revenue", current: 15800, previous: 12430 },
    { metric: "Leads", current: 312, previous: 248 },
    { metric: "Tasks", current: 640, previous: 520 },
    { metric: "Customers", current: 30, previous: 24 },
  ],
  topPerformers: employees.slice(0, 5).map((e) => ({
    name: e.name,
    role: e.role,
    revenue: e.revenueGenerated,
    tasks: e.completedTasks,
    avatar: e.avatar,
  })),
  growthRate: 18,
  tasksCompleted: 640,
  aiProductivity: 94,
  leadsGenerated: 312,
  conversionRate: 12.4,
};

export const monthlyRevenue = analyticsData.revenue;
