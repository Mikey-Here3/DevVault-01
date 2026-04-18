import { SkeletonCard } from "@/components/ui/Skeleton";

export default function ExploreLoading() {
  return (
    <div className="min-h-screen bg-surface-dim pt-20 pb-12">
      {/* Header Skeleton */}
      <div className="bg-surface-low border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="h-10 sm:h-14 w-3/4 bg-surface-high rounded-xl animate-pulse mb-4" />
            <div className="h-5 sm:h-6 w-full max-w-xl bg-surface-high rounded-lg animate-pulse mb-8" />
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
              <div className="h-12 flex-1 bg-surface-high rounded-xl animate-pulse" />
              <div className="h-12 w-full sm:w-40 bg-surface-high rounded-xl animate-pulse" />
            </div>
            
            <div className="flex gap-2 mt-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-8 w-20 bg-surface-high rounded-xl animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="h-6 w-40 bg-surface-high rounded-lg animate-pulse" />
          <div className="h-10 w-32 bg-surface-high rounded-xl animate-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
