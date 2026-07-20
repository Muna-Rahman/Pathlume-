import { OpportunityCard } from "@/components/explore/OpportunityCard.js";
import { OpportunityCardSkeleton } from "@/components/explore/OpportunityCardSkeleton.js";
import { EmptyState } from "@/components/ui/EmptyState.js";
import { Button } from "@/components/ui/Button.js";

export function OpportunityGrid({ opportunities, isLoading, isError, onReset }) {
  if (isLoading) {
    return (
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <OpportunityCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <EmptyState
        title="Couldn't load opportunities"
        description="Something went wrong reaching the board. Try again in a moment."
      />
    );
  }

  if (!opportunities || opportunities.length === 0) {
    return (
      <EmptyState
        title="No opportunities match your filters"
        description="Try widening your search or clearing a filter or two."
        action={
          onReset && (
            <Button variant="secondary" size="sm" onClick={onReset}>
              Clear filters
            </Button>
          )
        }
      />
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {opportunities.map((opportunity, i) => (
        <OpportunityCard key={opportunity._id} opportunity={opportunity} index={i} />
      ))}
    </div>
  );
}
