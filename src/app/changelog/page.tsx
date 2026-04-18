import type { Metadata } from "next";
import { Tag } from "@/components/ui/Tag";
import { Rss } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Stay up to date with what's new on DevVault. We ship updates weekly.",
};

const entries = [
  {
    date: "April 15, 2026",
    version: "v2.4.0",
    title: "🤖 AI-Powered Search",
    description: "We've launched our new AI search assistant. Ask DevVault AI to find the perfect tool, compare resources, or get personalized recommendations.",
    tags: ["New Feature", "AI"],
  },
  {
    date: "April 8, 2026",
    version: "v2.3.2",
    title: "📊 Improved Comparison Pages",
    description: "Compare pages now include community ratings, pricing breakdowns, and integration compatibility scores.",
    changes: ["Added side-by-side pricing comparison", "New \"Integration Score\" metric", "Community vote system"],
    tags: ["Enhancement"],
  },
  {
    date: "April 1, 2026",
    version: "v2.3.0",
    title: "📌 Collections 2.0",
    description: "Curate and share your favorite resources with our redesigned Collections feature.",
    changes: ["Drag-and-drop reordering", "Collaborative collections", "Public/private toggle"],
    tags: ["New Feature"],
  },
  {
    date: "March 25, 2026",
    version: "v2.2.1",
    title: "🐛 Bug Fixes & Performance",
    description: "Various improvements and fixes across the platform.",
    changes: ["Fixed search indexing for code snippets", "40% faster page load times", "Improved mobile navigation"],
    tags: ["Bug Fix", "Performance"],
  },
  {
    date: "March 18, 2026",
    version: "v2.2.0",
    title: "🔑 API Access for Pro Users",
    description: "Pro users can now access the DevVault API to programmatically search and retrieve resources.",
    changes: ["RESTful API with full documentation", "10,000 requests/month for Pro", "API playground for testing"],
    tags: ["New Feature", "API"],
  },
  {
    date: "March 10, 2026",
    version: "v2.1.0",
    title: "📱 Mobile Experience Overhaul",
    description: "Completely redesigned mobile navigation with bottom tab bar and touch-optimized interactions.",
    tags: ["Enhancement", "Mobile"],
  },
];

export default function ChangelogPage() {
  return (
    <div className="pb-20 md:pb-0">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-on-surface mb-3">
              Changelog
            </h1>
            <p className="text-on-surface-variant">
              Stay up to date with what&apos;s new. We ship updates weekly.
            </p>
          </div>
          <Button variant="secondary" size="sm">
            <Rss className="w-4 h-4" />
            RSS
          </Button>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[7px] top-2 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/30 to-transparent" />

          <div className="space-y-12">
            {entries.map((entry, i) => (
              <div key={entry.version} className="relative pl-10">
                {/* Dot */}
                <div className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-4 border-surface-dim ${i === 0 ? "bg-primary" : "bg-surface-highest"}`} />

                {/* Content */}
                <div className="bg-surface-low rounded-2xl p-6 ghost-border">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="text-xs text-on-surface-variant">
                      {entry.date}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/15 text-primary-light text-xs font-semibold">
                      {entry.version}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-on-surface mb-2">
                    {entry.title}
                  </h3>

                  <p className="text-sm text-on-surface-variant leading-relaxed mb-3">
                    {entry.description}
                  </p>

                  {entry.changes && (
                    <ul className="space-y-1.5 mb-4">
                      {entry.changes.map((change) => (
                        <li
                          key={change}
                          className="text-sm text-on-surface-variant flex items-start gap-2"
                        >
                          <span className="text-primary mt-0.5">•</span>
                          {change}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex gap-2">
                    {entry.tags.map((tag) => (
                      <Tag key={tag} label={tag} size="sm" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
