import { Skeleton, SkeletonText } from "@/components/ui/Skeleton";

export default function ResourceLoading() {
  return (
    <div className="min-h-screen bg-surface-dim pt-24 pb-12">
      {/* Hero Skeleton */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-surface-low border border-outline-variant/10 p-8 md:p-12 rounded-3xl shadow-xl">
          <div className="flex gap-2 mb-6">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-6 w-16" />
          </div>
          
          <Skeleton className="h-10 sm:h-14 w-3/4 mb-6" />
          <SkeletonText lines={3} />
          
          <div className="mt-8">
            <Skeleton className="h-12 w-40" />
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Content (Left) */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-surface-low border border-outline-variant/10 rounded-2xl p-6 sm:p-8">
              <Skeleton className="h-6 w-40 mb-6" />
              <div className="space-y-6">
                <SkeletonText lines={4} />
                <SkeletonText lines={5} />
              </div>
            </div>
            
            <div className="bg-surface-low border border-outline-variant/10 rounded-2xl p-6 sm:p-8">
              <Skeleton className="h-6 w-48 mb-6" />
              <div className="flex gap-4">
                <Skeleton className="h-12 w-12 rounded-lg" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar (Right) */}
          <div className="space-y-6">
            <div className="bg-surface-low border border-outline-variant/10 rounded-2xl p-6">
              <Skeleton className="h-4 w-20 mb-4" />
              <div className="flex flex-wrap gap-2">
                <Skeleton className="h-8 w-16" />
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-8 w-16" />
              </div>
            </div>

            <div className="bg-surface-low border border-outline-variant/10 rounded-2xl p-6">
              <Skeleton className="h-4 w-24 mb-4" />
              <div className="flex gap-3 items-center">
                <Skeleton className="w-10 h-10 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
