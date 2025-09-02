export default function BlogPostLoading() {
  return (
    <main className="min-h-screen bg-[#1e1e1f]">
      {/* Hero Section Skeleton */}
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 animate-pulse"></div>

        {/* Back Button Skeleton */}
        <div className="absolute top-8 left-8 z-20">
          <div className="w-32 h-10 bg-black/40 rounded-lg animate-pulse"></div>
        </div>

        {/* Hero Content Skeleton */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
          <div className="container mx-auto max-w-4xl">
            {/* Category Badge Skeleton */}
            <div className="w-32 h-8 bg-[#FF6B35]/20 rounded-full mb-4 animate-pulse"></div>

            {/* Title Skeleton */}
            <div className="space-y-3 mb-4">
              <div className="w-full h-8 lg:h-12 bg-gray-700/50 rounded-lg animate-pulse"></div>
              <div className="w-4/5 h-8 lg:h-12 bg-gray-700/50 rounded-lg animate-pulse"></div>
            </div>

            {/* Meta Info Skeleton */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="w-24 h-5 bg-gray-700/30 rounded animate-pulse"></div>
              <div className="w-20 h-5 bg-gray-700/30 rounded animate-pulse"></div>
              <div className="w-32 h-5 bg-gray-700/30 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section Skeleton */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content Skeleton */}
              <div className="lg:col-span-3">
                {/* description Skeleton */}
                <div className="p-6 bg-gradient-to-r from-[#FF6B35]/10 to-[#E55A2B]/10 rounded-xl border border-[#FF6B35]/20 mb-8">
                  <div className="space-y-3">
                    <div className="w-full h-5 bg-gray-700/30 rounded animate-pulse"></div>
                    <div className="w-4/5 h-5 bg-gray-700/30 rounded animate-pulse"></div>
                    <div className="w-3/4 h-5 bg-gray-700/30 rounded animate-pulse"></div>
                  </div>
                </div>

                {/* Content Skeleton */}
                <div className="space-y-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="space-y-3">
                      <div className="w-2/3 h-8 bg-[#FF6B35]/20 rounded-lg animate-pulse"></div>
                      <div className="space-y-2">
                        <div className="w-full h-4 bg-gray-700/30 rounded animate-pulse"></div>
                        <div className="w-full h-4 bg-gray-700/30 rounded animate-pulse"></div>
                        <div className="w-3/4 h-4 bg-gray-700/30 rounded animate-pulse"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar Skeleton */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Share Section Skeleton */}
                  <div className="bg-gradient-to-br from-[#2a2a2b]/50 to-[#1e1e1f]/50 rounded-xl p-6 border border-[#FF6B35]/10">
                    <div className="w-20 h-6 bg-gray-700/50 rounded mb-4 animate-pulse"></div>
                    <div className="w-full h-10 bg-[#FF6B35]/20 rounded-lg animate-pulse"></div>
                  </div>

                  {/* Tags Section Skeleton */}
                  <div className="bg-gradient-to-br from-[#2a2a2b]/50 to-[#1e1e1f]/50 rounded-xl p-6 border border-[#FF6B35]/10">
                    <div className="w-24 h-6 bg-gray-700/50 rounded mb-4 animate-pulse"></div>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-16 h-6 bg-[#FF6B35]/20 rounded-full animate-pulse"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
