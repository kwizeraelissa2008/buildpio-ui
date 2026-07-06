import type { Employee } from "../types/employee";
import Badge from "./ui/Badge";
import Progress from "./ui/Progress";

interface EmployeeCardProps {
  employee: Employee;
  selected: boolean;
  onClick: () => void;
}

const statusVariant: Record<Employee["status"], "success" | "warning" | "default" | "error"> = {
  Working: "success",
  Waiting: "warning",
  Idle: "default",
  Paused: "error",
};

function EmployeeCard({ employee, selected, onClick }: EmployeeCardProps) {
  return (
    <article
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      aria-label={`${employee.name}, ${employee.role}, ${employee.status}`}
      className={`cursor-pointer rounded-xl border p-5 outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-blue-500 ${
        selected
          ? "border-blue-500 bg-slate-800"
          : "border-slate-800 bg-slate-900 hover:border-slate-600"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={employee.avatar}
            alt={employee.name}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-white">{employee.name}</h3>
            <p className="text-sm text-slate-400">{employee.role}</p>
          </div>
        </div>
        <Badge variant={statusVariant[employee.status]}>{employee.status}</Badge>
      </div>

      <div className="mt-5">
        <Progress value={employee.progress} showLabel />
        <p className="mt-2 truncate text-sm text-slate-400">{employee.currentTask}</p>
      </div>
    </article>
  );
}

export default EmployeeCard;
