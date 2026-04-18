import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest articles on developer tools, AI, coding tips, and productivity.",
};

const featuredPost = {
  title: "The Ultimate Guide to AI-Powered Development in 2026",
  excerpt: "How AI tools are reshaping the way developers write, test, and deploy code. A deep dive into the most impactful tools and workflows.",
  author: "Alex Chen",
  authorAvatar: "AC",
  date: "Apr 15, 2026",
  readTime: "12 min read",
  category: "AI Tools",
  slug: "ai-powered-development-2026",
};

const posts = [
  { title: "10 Must-Have VS Code Extensions for 2026", excerpt: "Supercharge your editor with these essential extensions that will boost your productivity.", author: "Sarah Kim", authorAvatar: "SK", date: "Apr 12, 2026", readTime: "6 min read", category: "Productivity", slug: "vscode-extensions-2026" },
  { title: "ChatGPT Prompts That Actually Work for Debugging", excerpt: "Stop wasting tokens on bad prompts. Here are the patterns that consistently produce useful debugging help.", author: "Marcus Johnson", authorAvatar: "MJ", date: "Apr 10, 2026", readTime: "8 min read", category: "Prompts", slug: "chatgpt-debugging-prompts" },
  { title: "Building a Design System from Scratch with Tailwind", excerpt: "A step-by-step guide to creating a scalable design system using Tailwind CSS and CSS custom properties.", author: "Elena Rodriguez", authorAvatar: "ER", date: "Apr 8, 2026", readTime: "10 min read", category: "Tutorial", slug: "design-system-tailwind" },
  { title: "React Server Components: What You Need to Know", excerpt: "Understanding the mental model shift from client to server-first React development.", author: "Alex Chen", authorAvatar: "AC", date: "Apr 5, 2026", readTime: "7 min read", category: "React", slug: "react-server-components" },
  { title: "Free AI Tools Every Developer Should Be Using", excerpt: "A curated list of free AI-powered tools that will save you hours of development time.", author: "Sarah Kim", authorAvatar: "SK", date: "Apr 3, 2026", readTime: "5 min read", category: "AI Tools", slug: "free-ai-tools-devs" },
  { title: "Icon Libraries Compared: Lucide vs Heroicons vs Phosphor", excerpt: "A detailed comparison of the most popular icon libraries for React projects.", author: "Marcus Johnson", authorAvatar: "MJ", date: "Apr 1, 2026", readTime: "9 min read", category: "Icons", slug: "icon-libraries-compared" },
];

export default function BlogPage() {
  return (
    <div className="pb-20 md:pb-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-on-surface mb-4">
            The DevVault <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg text-on-surface-variant">
            Articles, guides, and insights for modern developers.
          </p>
        </div>

        {/* Featured Post */}
        <Link
          href={`/blog/${featuredPost.slug}`}
          className="group block bg-surface-low rounded-2xl overflow-hidden mb-12 ghost-border card-glow"
        >
          <div className="md:flex">
            <div className="md:w-2/5 aspect-video md:aspect-auto bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 flex items-center justify-center">
              <span className="text-6xl opacity-30">📝</span>
            </div>
            <div className="p-8 md:w-3/5 flex flex-col justify-center">
              <Badge label={featuredPost.category} variant="new" className="w-fit mb-4" />
              <h2 className="text-2xl font-bold text-on-surface mb-3 group-hover:text-primary-light transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-on-surface-variant mb-4 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{featuredPost.authorAvatar}</span>
                  </div>
                  <span className="text-sm text-on-surface">{featuredPost.author}</span>
                </div>
                <span className="text-sm text-on-surface-variant flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredPost.readTime}
                </span>
                <span className="text-sm text-on-surface-variant">{featuredPost.date}</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-surface-low rounded-2xl overflow-hidden ghost-border card-glow flex flex-col"
            >
              <div className="aspect-video bg-gradient-to-br from-surface-high to-surface-container flex items-center justify-center">
                <span className="text-3xl opacity-30">📄</span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <Badge label={post.category} variant="default" className="w-fit mb-3" />
                <h3 className="text-base font-semibold text-on-surface mb-2 group-hover:text-primary-light transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-on-surface-variant line-clamp-2 mb-4 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-outline-variant/10">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">{post.authorAvatar}</span>
                    </div>
                    <span className="text-xs text-on-surface-variant">{post.author}</span>
                  </div>
                  <span className="text-xs text-outline">{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
