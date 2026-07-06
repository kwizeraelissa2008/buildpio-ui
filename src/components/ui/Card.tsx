import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: boolean;
}

function Card({ children, className, hover = true, padding = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-800 bg-slate-900",
        padding && "p-6",
        hover && "transition-all duration-300 hover:border-slate-700 hover:shadow-lg hover:shadow-blue-500/5",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Card;
