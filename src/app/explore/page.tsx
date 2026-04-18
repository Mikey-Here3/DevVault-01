import { prisma } from "@/lib/db";
import { VaultCard } from "@/components/ui/VaultCard";
import { Badge } from "@/components/ui/Badge";
import { Search } from "lucide-react";
import Link from "next/link";
import { EmptyState } from "@/components/ui/EmptyState";

export const metadata = {
  title: "Explore",
  description: "Browse the best developer resources.",
};

export default async function ExplorePage() {
  // Fetch real data from DB
  let resources: any[] = [];
  let categories: any[] = [];
  
  try {
    resources = await prisma.resource.findMany({
      include: {
        category: true,
        submitter: { select: { name: true, image: true } }
      },
      orderBy: { createdAt: 'desc' },
      take: 20
    });
    
    categories = await prisma.category.findMany({
      orderBy: { name: 'asc' }
    });
  } catch (error) {
    console.error("Database connection failed. Ensure .env is set.", error);
  }

  return (
    <div className="pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-on-surface mb-2">Explore Resources</h1>
            <p className="text-on-surface-variant">Discover the best tools curated by the community.</p>
          </div>
          
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search tools, libraries..." 
              className="w-full md:w-80 pl-10 pr-4 py-2 bg-surface-low border border-outline-variant/20 rounded-xl text-sm focus:outline-none focus:border-primary/50 transition-all text-on-surface"
            />
          </div>
        </div>

        {/* Layout Grid */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="w-full md:w-48 xl:w-56 shrink-0">
            <h3 className="font-semibold text-on-surface mb-4">Categories</h3>
            <ul className="space-y-1">
              <li>
                <button className="w-full text-left px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium text-sm transition-colors">
                  All Resources
                </button>
              </li>
              {categories.map((category) => (
                <li key={category.id}>
                  <button className="w-full text-left px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-low hover:text-on-surface text-sm transition-colors">
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {resources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource) => (
                  <Link key={resource.id} href={`/resource/${resource.slug}`} className="block">
                    <VaultCard
                      title={resource.title}
                      description={resource.description}
                      category={resource.category.name}
                      rating={resource.rating}
                    />
                  </Link>
                ))}
              </div>
            ) : (
              <EmptyState 
                title="No resources found" 
                description="It looks like the vault is empty for this category. Be the first to share a tool!" 
                actionLabel="Submit a Resource"
                actionHref="/submit"
              />
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}
