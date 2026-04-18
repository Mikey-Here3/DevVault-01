import { clsx } from "clsx";
import { Bookmark, ExternalLink } from "lucide-react";
import { Tag } from "./Tag";

interface VaultCardProps {
  title: string;
  description: string;
  category: string;
  tags?: string[];
  saves?: number;
  rating?: number;
  imageUrl?: string;
  url?: string;
  isSaved?: boolean;
  className?: string;
}

export function VaultCard({
  title,
  description,
  category,
  tags = [],
  saves = 0,
  rating,
  imageUrl,
  url,
  isSaved = false,
  className,
}: VaultCardProps) {
  return (
    <div
      className={clsx(
        "group relative bg-surface-low rounded-2xl overflow-hidden transition-all duration-300 card-glow hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5",
        className
      )}
    >
      {/* Image/Preview Area */}
      {imageUrl && (
        <div className="aspect-video bg-surface-container overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
            <span className="text-4xl opacity-40">
              {category === "Icons"
                ? "🎨"
                : category === "Snippets"
                  ? "💻"
                  : category === "AI Tools"
                    ? "🤖"
                    : "💬"}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        {/* Category Tag */}
        <div className="flex items-center justify-between mb-3">
          <Tag label={category} size="sm" />
          {rating && (
            <span className="text-xs text-on-surface-variant flex items-center gap-1">
              ⭐ {rating}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-on-surface mb-1.5 line-clamp-1 group-hover:text-primary-light transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-on-surface-variant line-clamp-2 mb-3 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-outline-variant/10">
          <span className="text-xs text-outline flex items-center gap-1">
            <Bookmark className="w-3 h-3" />
            {saves.toLocaleString()} saves
          </span>
          <div className="flex items-center gap-2">
            <button
              className={clsx(
                "p-1.5 rounded-lg transition-all",
                isSaved
                  ? "text-primary bg-primary/10"
                  : "text-on-surface-variant hover:text-primary hover:bg-primary/5"
              )}
              aria-label="Save resource"
            >
              <Bookmark
                className="w-4 h-4"
                fill={isSaved ? "currentColor" : "none"}
              />
            </button>
            {url && (
              <button
                className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-high transition-all"
                aria-label="Open resource"
              >
                <ExternalLink className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
