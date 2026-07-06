import { recentActivities } from "../data/activities";
import type { ActivityType } from "../types/activity";
import Badge from "./ui/Badge";
import Card from "./ui/Card";

const typeVariant: Record<ActivityType, "success" | "info" | "warning" | "default" | "error"> = {
  Sales: "success",
  Marketing: "info",
  Finance: "warning",
  Support: "error",
  Operations: "default",
  Research: "info",
};

function ActivityFeed() {
  return (
    <Card>
      <h2 className="mb-6 text-lg font-bold text-white">Live AI Activity</h2>

      <ul className="space-y-3" aria-label="Recent AI activities">
        {recentActivities.map((activity) => (
          <li
            key={activity.id}
            className="rounded-xl bg-slate-800 p-4 transition-colors hover:bg-slate-700/80"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate font-medium text-white">{activity.agent}</p>
                <p className="mt-1 text-sm text-slate-400">{activity.action}</p>
              </div>
              <time className="shrink-0 text-xs text-slate-500">{activity.time}</time>
            </div>
            <div className="mt-3">
              <Badge variant={typeVariant[activity.type]}>{activity.type}</Badge>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default ActivityFeed;
