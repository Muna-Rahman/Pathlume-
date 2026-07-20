"use client";

import { useOpportunities } from "@/lib/hooks/useOpportunities.js";
import { OpportunityCard } from "@/components/explore/OpportunityCard.js";
import { OpportunityCardSkeleton } from "@/components/explore/OpportunityCardSkeleton.js";
import { EmptyState } from "@/components/ui/EmptyState.js";
import { Button } from "@/components/ui/Button.js";

export function FeaturedOpportunities() {
  const { data, isLoading, isError } = useOpportunities({ limit: 6, sortBy: "createdAt", sortOrder: "desc" });
  const opportunities = data?.opportunities || [];

  return (
    <section className="relative px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Fresh off the board</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
              Featured opportunities
            </h2>
          </div>
          <Button href="/explore" variant="outline" size="sm">
            View all opportunities
          </Button>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {isLoading &&
            Array.from({ length: 6 }).map((_, i) => <OpportunityCardSkeleton key={i} />)}

          {!isLoading && isError && (
            <div className="col-span-full">
              <EmptyState
                title="Couldn't load opportunities"
                description="The board is being lit up right now — check back in a moment."
              />
            </div>
          )}

          {!isLoading && !isError && opportunities.length === 0 && (
            <div className="col-span-full">
              <EmptyState
                title="No opportunities yet"
                description="Be the first employer to post a listing on Pathlume."
              />
            </div>
          )}

          {!isLoading &&
            !isError &&
            opportunities.map((opportunity, i) => (
              <OpportunityCard key={opportunity._id} opportunity={opportunity} index={i} />
            ))}
        </div>
      </div>
    </section>
  );
}
