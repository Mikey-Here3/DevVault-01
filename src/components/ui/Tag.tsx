import { clsx } from "clsx";

interface TagProps {
  label: string;
  active?: boolean;
  size?: "sm" | "md";
  onClick?: () => void;
  className?: string;
}

export function Tag({
  label,
  active = false,
  size = "md",
  onClick,
  className,
}: TagProps) {
  const Component = onClick ? "button" : "span";

  return (
    <Component
      onClick={onClick}
      className={clsx(
        "inline-flex items-center font-medium transition-all duration-200",
        size === "sm" ? "px-2.5 py-1 text-xs rounded-lg" : "px-3.5 py-1.5 text-sm rounded-xl",
        active
          ? "bg-primary text-on-primary shadow-md shadow-primary/20"
          : "bg-surface-high text-on-surface-variant hover:text-on-surface hover:bg-surface-highest",
        onClick && "cursor-pointer",
        className
      )}
    >
      {label}
    </Component>
  );
}
