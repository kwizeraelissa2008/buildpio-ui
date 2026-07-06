import { cn } from "../../utils/cn";

const sizes = {
  sm: "h-5 w-5",
  md: "h-8 w-8",
  lg: "h-12 w-12",
};

function Loader({ size = "md" }: { size?: keyof typeof sizes }) {
  return (
    <div className="flex items-center justify-center" role="status" aria-label="Loading">
      <div
        className={cn(
          "animate-spin rounded-full border-2 border-slate-700 border-t-blue-500",
          sizes[size],
        )}
      />
    </div>
  );
}

function Skeleton({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("animate-pulse rounded-lg bg-slate-800", className ?? "h-4 w-full")}
    />
  );
}

export { Loader, Skeleton };
