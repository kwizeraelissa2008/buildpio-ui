import { CheckCircle2, Circle } from "lucide-react";
import { todayTasks } from "../data/tasks";
import type { TaskPriority } from "../types/task";
import Badge from "./ui/Badge";
import Card from "./ui/Card";

const priorityVariant: Record<TaskPriority, "error" | "warning" | "default"> = {
  High: "error",
  Medium: "warning",
  Low: "default",
};

function TaskSection() {
  return (
    <Card>
      <h2 className="mb-6 text-lg font-bold text-white">Today's Tasks</h2>

      <ul className="space-y-3" aria-label="Today's tasks">
        {todayTasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between gap-4 rounded-xl bg-slate-800 p-4"
          >
            <div className="flex items-center gap-3">
              {task.completed ? (
                <CheckCircle2
                  size={18}
                  className="shrink-0 text-green-500"
                  aria-label="Completed"
                />
              ) : (
                <Circle size={18} className="shrink-0 text-slate-500" aria-label="Pending" />
              )}
              <div className="min-w-0">
                <p
                  className={`truncate text-sm font-medium ${
                    task.completed ? "text-slate-500 line-through" : "text-white"
                  }`}
                >
                  {task.title}
                </p>
                {task.dueDate && (
                  <p className="mt-0.5 text-xs text-slate-500">Due {task.dueDate}</p>
                )}
              </div>
            </div>

            <Badge variant={priorityVariant[task.priority]}>{task.priority}</Badge>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default TaskSection;
