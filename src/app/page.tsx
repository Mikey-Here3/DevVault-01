import Link from "next/link";
import { ArrowRight, Sparkles, Code2, Bot, MessageSquare, Palette, TrendingUp, Users, Database, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { VaultCard } from "@/components/ui/VaultCard";
import { Tag } from "@/components/ui/Tag";
import { SearchBar } from "@/components/ui/SearchBar";

const categories = [
  { icon: Palette, label: "Icons", count: "2,400+", color: "from-pink-500 to-rose-500" },
  { icon: Code2, label: "Snippets", count: "1,800+", color: "from-blue-500 to-cyan-500" },
  { icon: Bot, label: "AI Tools", count: "650+", color: "from-purple-500 to-violet-500" },
  { icon: MessageSquare, label: "Prompts", count: "3,200+", color: "from-amber-500 to-orange-500" },
];

const trendingResources = [
  { title: "React Hook Form", description: "Performant, flexible and extensible forms with easy-to-use validation.", category: "Snippets", tags: ["React", "Forms", "TypeScript"], saves: 1247, rating: 4.9, imageUrl: "/placeholder" },
  { title: "Lucide Icons", description: "Beautiful & consistent icon toolkit made by the community.", category: "Icons", tags: ["SVG", "React", "Open Source"], saves: 2103, rating: 4.8, imageUrl: "/placeholder" },
  { title: "ChatGPT Code Assistant", description: "50+ optimized prompts for debugging, refactoring, and code review.", category: "Prompts", tags: ["ChatGPT", "Coding", "Productivity"], saves: 3456, rating: 4.9, imageUrl: "/placeholder" },
  { title: "v0 by Vercel", description: "AI-powered UI generation tool. Describe your component and get working code.", category: "AI Tools", tags: ["AI", "UI", "Vercel"], saves: 1890, rating: 4.7, imageUrl: "/placeholder" },
  { title: "Tailwind UI Components", description: "Premium component library built with Tailwind CSS for rapid development.", category: "Snippets", tags: ["Tailwind", "CSS", "Components"], saves: 982, rating: 4.6, imageUrl: "/placeholder" },
  { title: "Cursor AI", description: "The AI-first code editor. Write, edit, and refactor with AI assistance.", category: "AI Tools", tags: ["Editor", "AI", "Productivity"], saves: 2341, rating: 4.8, imageUrl: "/placeholder" },
];

const stats = [
  { label: "Resources", value: "8,000+", icon: Database },
  { label: "Developers", value: "12,000+", icon: Users },
  { label: "Categories", value: "4", icon: Sparkles },
  { label: "Avg. Rating", value: "4.8", icon: Star },
];

import { prisma } from "@/lib/db";

export default async function LandingPage() {
  let resources: any[] = [];
  try {
    resources = await prisma.resource.findMany({
      where: { status: 'PUBLISHED' },
      include: {
        category: true,
      },
      orderBy: { saveCount: 'desc' },
      take: 6
    });
  } catch (error) {
    console.error("Failed to fetch trending resources", error);
  }

  return (
    <div className="pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[128px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span>Trusted by 12,000+ developers</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-on-surface mb-6 leading-tight tracking-tight animate-fade-in-up">
              Discover the Best{" "}
              <span className="gradient-text animate-gradient bg-[length:200%_200%]">
                Developer Resources
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up stagger-1 opacity-0">
              A curated hub to find, save, and share the best icons, coding
              snippets, AI tools, and ChatGPT prompts — all in one place.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-8 animate-fade-in-up stagger-2 opacity-0">
              <SearchBar
                size="lg"
                placeholder="Search 8,000+ developer resources..."
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-6 animate-fade-in-up stagger-3 opacity-0">
              {["Icons", "Snippets", "AI Tools", "Prompts", "React", "Python", "TypeScript"].map(
                (tag) => (
                  <Tag key={tag} label={tag} />
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-on-surface mb-3">
            Browse by Category
          </h2>
          <p className="text-on-surface-variant">
            Explore our curated collection of developer resources
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={`/${cat.label.toLowerCase().replace(" ", "-")}`}
              className="group relative bg-surface-low rounded-2xl p-6 text-center transition-all duration-300 card-glow overflow-hidden"
            >
              <div
                className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${cat.color} mb-4 transition-transform duration-300 group-hover:scale-110`}
              >
                <cat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-semibold text-on-surface mb-1">
                {cat.label}
              </h3>
              <p className="text-sm text-on-surface-variant">{cat.count}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-on-surface mb-2 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              Trending Resources
            </h2>
            <p className="text-on-surface-variant">
              Most popular this week
            </p>
          </div>
          <Link href="/explore">
            <Button variant="secondary" size="sm">
              View all
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resources.length > 0 ? (
            resources.map((resource) => (
              <Link key={resource.id} href={`/resource/${resource.slug}`} className="block">
                <VaultCard 
                  title={resource.title}
                  description={resource.description}
                  category={resource.category.name}
                  rating={resource.rating}
                  saves={resource.saveCount}
                />
              </Link>
            ))
          ) : (
            <>
              {trendingResources.map((resource) => (
                <VaultCard key={resource.title} {...resource} />
              ))}
            </>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-surface-low rounded-3xl p-8 md:p-12 ghost-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-on-surface mb-1 gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-on-surface-variant">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-8 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          <h2 className="relative text-3xl sm:text-4xl font-bold text-on-surface mb-4">
            Ready to Level Up?
          </h2>
          <p className="relative text-lg text-on-surface-variant mb-8 max-w-xl mx-auto">
            Join 12,000+ developers who use DevVault to stay ahead of the curve.
          </p>
          <div className="relative flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/signup">
              <Button size="lg">
                Get Started — It&apos;s Free
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/explore">
              <Button variant="secondary" size="lg">
                Explore Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
