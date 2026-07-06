import { cn } from "../../utils/cn";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-14 w-14",
};

function Avatar({ src, alt, size = "md", className }: AvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("rounded-full border-2 border-slate-700 object-cover", sizes[size], className)}
    />
  );
}

export default Avatar;
