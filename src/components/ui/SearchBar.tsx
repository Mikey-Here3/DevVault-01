"use client";

import { Search } from "lucide-react";
import { clsx } from "clsx";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  onSearch?: (query: string) => void;
}

export function SearchBar({
  placeholder = "Search resources...",
  className,
  size = "md",
  onSearch,
}: SearchBarProps) {
  return (
    <div className={clsx("relative group", className)}>
      <Search
        className={clsx(
          "absolute left-4 top-1/2 -translate-y-1/2 text-outline transition-colors group-focus-within:text-primary",
          size === "lg" ? "w-5 h-5" : "w-4 h-4"
        )}
      />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch?.(e.target.value)}
        className={clsx(
          "w-full bg-surface-container-lowest border border-outline-variant/15 text-on-surface placeholder:text-outline",
          "focus:outline-none focus:border-primary/30 focus:bg-surface-low focus:ring-1 focus:ring-primary/20",
          "transition-all duration-200",
          size === "sm" && "pl-10 pr-4 py-2 text-sm rounded-xl",
          size === "md" && "pl-11 pr-4 py-3 text-sm rounded-xl",
          size === "lg" && "pl-12 pr-20 py-4 text-base rounded-2xl"
        )}
      />
      {size === "lg" && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 px-2 py-1 rounded-lg bg-surface-high text-xs text-outline">
          <kbd>⌘</kbd>
          <kbd>K</kbd>
        </div>
      )}
    </div>
  );
}
