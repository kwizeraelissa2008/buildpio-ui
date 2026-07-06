import { Server, Database, Cpu, ShieldCheck } from "lucide-react";
import type { ElementType } from "react";
import Badge from "./ui/Badge";
import Card from "./ui/Card";

interface SystemItem {
  name: string;
  icon: ElementType;
  status: "Online" | "Degraded" | "Offline";
}

const systems: SystemItem[] = [
  { name: "API Server", icon: Server, status: "Online" },
  { name: "Database", icon: Database, status: "Online" },
  { name: "AI Engine", icon: Cpu, status: "Online" },
  { name: "Security", icon: ShieldCheck, status: "Online" },
];

const statusVariant: Record<SystemItem["status"], "success" | "warning" | "error"> = {
  Online: "success",
  Degraded: "warning",
  Offline: "error",
};

function SystemHealth() {
  return (
    <Card>
      <h2 className="mb-6 text-lg font-bold text-white">System Health</h2>

      <ul className="space-y-3" aria-label="System status">
        {systems.map((system) => {
          const Icon = system.icon;
          return (
            <li
              key={system.name}
              className="flex items-center justify-between rounded-xl bg-slate-800 p-4"
            >
              <div className="flex items-center gap-3">
                <Icon size={18} className="shrink-0 text-slate-400" aria-hidden="true" />
                <span className="text-sm font-medium text-white">{system.name}</span>
              </div>
              <Badge variant={statusVariant[system.status]}>{system.status}</Badge>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default SystemHealth;
