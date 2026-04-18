"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, PlusCircle, Bookmark, User } from "lucide-react";
import { clsx } from "clsx";

const tabs = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Search, label: "Search", href: "/explore" },
  { icon: PlusCircle, label: "Submit", href: "/submit" },
  { icon: Bookmark, label: "Saved", href: "/bookmarks" },
  { icon: User, label: "Profile", href: "/login" },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface-dim/90 backdrop-blur-xl border-t border-outline-variant/10 safe-area-pb">
      <div className="flex items-center justify-around h-16 px-2">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          const isSubmit = tab.label === "Submit";

          return (
            <Link
              key={tab.label}
              href={tab.href}
              className={clsx(
                "flex flex-col items-center justify-center gap-0.5 min-w-[56px] py-1 transition-all",
                isSubmit
                  ? "text-on-primary"
                  : isActive
                    ? "text-primary"
                    : "text-outline hover:text-on-surface-variant"
              )}
            >
              {isSubmit ? (
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center -mt-4 shadow-lg shadow-primary/20">
                  <tab.icon className="w-5 h-5" />
                </div>
              ) : (
                <tab.icon
                  className="w-5 h-5"
                  fill={isActive ? "currentColor" : "none"}
                  strokeWidth={isActive ? 2.5 : 2}
                />
              )}
              <span
                className={clsx(
                  "text-[10px]",
                  isSubmit && "mt-1",
                  isActive && "font-medium"
                )}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
