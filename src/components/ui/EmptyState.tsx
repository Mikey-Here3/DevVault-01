import Link from "next/link";
import { PlusCircle, SearchX } from "lucide-react";
import { Button } from "./Button";
import { clsx } from "clsx";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
  icon,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center p-12 text-center rounded-3xl border border-dashed border-outline-variant/20 bg-surface-low/30 backdrop-blur-sm",
        className
      )}
    >
      <div className="w-16 h-16 rounded-2xl bg-surface-high flex items-center justify-center mb-6 text-on-surface-variant ring-8 ring-surface-container">
        {icon || <SearchX className="w-8 h-8" />}
      </div>
      <h3 className="text-xl font-bold text-on-surface mb-2">{title}</h3>
      <p className="text-sm text-on-surface-variant max-w-sm mb-8 leading-relaxed">
        {description}
      </p>
      
      {actionLabel && actionHref && (
        <Link href={actionHref}>
          <Button variant="secondary">
            <PlusCircle className="w-4 h-4 mr-2" />
            {actionLabel}
          </Button>
        </Link>
      )}
    </div>
  );
}
