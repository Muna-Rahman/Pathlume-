import { Suspense } from "react";
import { ExploreContent } from "@/components/explore/ExploreContent.js";
import { OpportunityCardSkeleton } from "@/components/explore/OpportunityCardSkeleton.js";

export const metadata = { title: "Explore opportunities - Pathlume" };

function ExploreFallback() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <OpportunityCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

export default function ExplorePage() {
  return (
    <Suspense fallback={<ExploreFallback />}>
      <ExploreContent />
    </Suspense>
  );
}
