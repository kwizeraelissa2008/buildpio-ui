import { cn } from "../../utils/cn";

interface ProgressProps {
  value: number;
  className?: string;
  showLabel?: boolean;
}

function Progress({ value, className, showLabel = false }: ProgressProps) {
  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-slate-400">Progress</span>
          <span className="text-white">{value}%</span>
        </div>
      )}
      <div className="h-2 overflow-hidden rounded-full bg-slate-700">
        <div
          className="h-full rounded-full bg-blue-500 transition-all duration-500"
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    </div>
  );
}

export default Progress;
