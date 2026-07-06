import type { ReactNode } from "react";
import { cn } from "../utils/cn";

interface StatCardProps {
  title: string;
  value: string;
  delta?: string;
  deltaPositive?: boolean;
  icon?: ReactNode;
}

function StatCard({ title, value, delta, deltaPositive = true, icon }: StatCardProps) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5">
      <div className="flex items-start justify-between">
        <p className="text-sm text-slate-400">{title}</p>
        {icon && (
          <span aria-hidden="true" className="rounded-xl bg-slate-800 p-2 text-slate-400">
            {icon}
          </span>
        )}
      </div>

      <p className="mt-3 text-4xl font-bold tracking-tight text-white">{value}</p>

      {delta && (
        <p
          className={cn(
            "mt-3 text-sm font-medium",
            deltaPositive ? "text-green-400" : "text-red-400",
          )}
        >
          {deltaPositive ? "▲" : "▼"} {delta}
        </p>
      )}
    </article>
  );
}

export default StatCard;
