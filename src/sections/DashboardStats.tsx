import { DollarSign, Users, UserCheck, TrendingUp } from "lucide-react";
import StatCard from "../components/StatCard";
import { analyticsData } from "../data/analytics";
import { formatCurrency } from "../utils/format";

function DashboardStats() {
  const { growthRate, leadsGenerated, tasksCompleted } = analyticsData;
  const currentRevenue = analyticsData.revenue[analyticsData.revenue.length - 1].revenue;

  const stats = [
    {
      title: "Revenue",
      value: formatCurrency(currentRevenue),
      delta: `+${growthRate}% this month`,
      deltaPositive: true,
      icon: <DollarSign size={18} />,
    },
    {
      title: "AI Employees",
      value: "20",
      delta: "4 active right now",
      deltaPositive: true,
      icon: <Users size={18} />,
    },
    {
      title: "Leads Generated",
      value: String(leadsGenerated),
      delta: "+26% vs last month",
      deltaPositive: true,
      icon: <UserCheck size={18} />,
    },
    {
      title: "Tasks Completed",
      value: String(tasksCompleted),
      delta: `+${growthRate}% this month`,
      deltaPositive: true,
      icon: <TrendingUp size={18} />,
    },
  ];

  return (
    <section aria-label="Dashboard statistics">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
    </section>
  );
}

export default DashboardStats;
