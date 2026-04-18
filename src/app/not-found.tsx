import Link from "next/link";
import { ArrowLeft, Search, ArrowRight, Compass, TrendingUp, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

const quickLinks = [
  { icon: Compass, label: "Explore Resources", href: "/explore", description: "Browse all developer tools and resources" },
  { icon: TrendingUp, label: "Trending", href: "/explore", description: "See what's popular this week" },
  { icon: BookOpen, label: "Blog", href: "/blog", description: "Read our latest articles" },
  { icon: Sparkles, label: "AI Tools", href: "/ai-tools", description: "Discover the best AI tools" },
];

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-20">
      {/* Gradient 404 */}
      <div className="relative mb-8">
        <h1 className="text-[120px] sm:text-[180px] font-black gradient-text animate-gradient bg-[length:200%_200%] leading-none tracking-tighter opacity-80">
          404
        </h1>
        <div className="absolute inset-0 blur-3xl bg-primary/10 rounded-full pointer-events-none" />
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-on-surface mb-3 text-center">
        Page not found
      </h2>
      <p className="text-on-surface-variant text-center max-w-md mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-14">
        <Link href="/">
          <Button size="lg">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>
        <Link href="/explore">
          <Button variant="secondary" size="lg">
            <Search className="w-4 h-4" />
            Search Resources
          </Button>
        </Link>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl w-full">
        {quickLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="group bg-surface-low rounded-2xl p-5 transition-all duration-300 card-glow flex items-start gap-4"
          >
            <div className="p-2.5 rounded-xl bg-surface-high group-hover:bg-primary/10 transition-colors">
              <link.icon className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-on-surface mb-0.5 flex items-center gap-2">
                {link.label}
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs text-on-surface-variant">{link.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
