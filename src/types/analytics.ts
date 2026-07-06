export interface RevenueDataPoint {
  month: string;
  revenue: number;
}

export interface DailyActivityPoint {
  day: string;
  tasks: number;
  leads: number;
}

export interface WeeklyActivityPoint {
  week: string;
  completed: number;
  generated: number;
}

export interface TopPerformer {
  name: string;
  role: string;
  revenue: number;
  tasks: number;
  avatar: string;
}

export interface AnalyticsData {
  revenue: RevenueDataPoint[];
  dailyActivity: DailyActivityPoint[];
  weeklyActivity: WeeklyActivityPoint[];
  monthlyComparison: { metric: string; current: number; previous: number }[];
  topPerformers: TopPerformer[];
  growthRate: number;
  tasksCompleted: number;
  aiProductivity: number;
  leadsGenerated: number;
  conversionRate: number;
}
