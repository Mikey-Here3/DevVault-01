import { clsx } from "clsx";

type BadgeVariant = "default" | "new" | "popular" | "free" | "pro";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-surface-high text-on-surface-variant",
  new: "bg-primary/15 text-primary-light",
  popular: "bg-warning/15 text-warning",
  free: "bg-success/15 text-success",
  pro: "bg-gradient-to-r from-primary to-secondary text-on-primary",
};

export function Badge({ label, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-2.5 py-0.5 text-xs font-semibold rounded-full",
        variantStyles[variant],
        className
      )}
    >
      {label}
    </span>
  );
}
