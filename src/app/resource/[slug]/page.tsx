import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, Star, Bookmark, Share2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const resource = await prisma.resource.findUnique({
    where: { slug: params.slug },
  });

  if (!resource) return { title: "Not Found" };

  return {
    title: resource.title,
    description: resource.description,
  };
}

export default async function ResourcePage({ params }: { params: { slug: string } }) {
  const resource = await prisma.resource.findUnique({
    where: { slug: params.slug },
    include: {
      category: true,
      submitter: {
        select: { name: true, image: true },
      },
      tags: {
        include: { tag: true },
      },
    },
  });

  if (!resource) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-surface-dim pt-24 pb-12">
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": resource.title,
            "description": resource.description,
            "applicationCategory": resource.category.name,
            "url": resource.url || `https://devvault.io/resource/${resource.slug}`,
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": resource.rating.toString(),
              "reviewCount": resource.reviewCount.toString()
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative bg-surface-low border border-outline-variant/10 p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col items-start gap-6">
          <div className="flex flex-wrap items-center gap-3 w-full">
            <Badge variant="popular" label={resource.category.name} />
            {resource.pricing !== "FREE" && <Badge variant="pro" label={resource.pricing} />}
            {resource.pricing === "FREE" && <Badge variant="new" label="Free" />}
            <div className="ml-auto flex gap-2">
              <Button variant="secondary" size="sm" className="hidden sm:flex" aria-label="Save">
                <Bookmark className="w-4 h-4" /> Save
              </Button>
              <Button variant="secondary" size="sm" aria-label="Share">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-on-surface tracking-tight">
            {resource.title}
          </h1>
          
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl">
            {resource.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full mt-4">
            <Link href={resource.url || "#"} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto group">
                Visit Website 
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Content (Left) */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-surface-low border border-outline-variant/10 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-on-surface mb-4">About {resource.title}</h2>
              <div className="prose prose-invert max-w-none text-on-surface-variant">
                <p>
                  This is a detailed placeholder description for {resource.title}. In a real application, 
                  this content would likely be rendered from a markdown field or an extended description column in the database.
                </p>
                <p>
                  Consider adding detailed outlines of features, compatibility, ease of use, and integration methods here.
                </p>
              </div>
            </div>
            
            <div className="bg-surface-low border border-outline-variant/10 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-on-surface mb-6">Reviews & Ratings</h2>
              <div className="flex items-center gap-4 mb-8">
                <div className="text-4xl font-bold text-on-surface">{resource.rating.toFixed(1)}</div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-on-surface-variant mt-1">{resource.reviewCount} reviews</span>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant italic">Placeholder for actual user reviews.</p>
            </div>
          </div>

          {/* Sidebar (Right) */}
          <div className="space-y-6">
            <div className="bg-surface-low border border-outline-variant/10 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {resource.tags.length > 0 ? (
                  resource.tags.map((rt: any) => (
                    <Tag key={rt.tag.id} active={false} label={rt.tag.name} />
                  ))
                ) : (
                  <span className="text-sm text-on-surface-variant">No tags provided</span>
                )}
              </div>
            </div>

            <div className="bg-surface-low border border-outline-variant/10 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-4">Submitted By</h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-high border border-outline-variant/20 flex items-center justify-center">
                  <span className="text-on-surface font-medium">
                    {resource.submitter?.name?.[0]?.toUpperCase() || "A"}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-on-surface">
                    {resource.submitter?.name || "Anonymous User"}
                  </div>
                  <div className="text-xs text-on-surface-variant">Contributor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
