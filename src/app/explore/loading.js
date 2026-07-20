import { OpportunityCardSkeleton } from "@/components/explore/OpportunityCardSkeleton.js";

export default function Loading() {
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
