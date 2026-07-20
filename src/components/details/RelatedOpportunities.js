"use client";

import { useRelatedOpportunities } from "@/lib/hooks/useOpportunities.js";
import { OpportunityCard } from "@/components/explore/OpportunityCard.js";
import { OpportunityCardSkeleton } from "@/components/explore/OpportunityCardSkeleton.js";

export function RelatedOpportunities({ opportunityId }) {
  const { data, isLoading } = useRelatedOpportunities(opportunityId, 3);
  const related = data?.opportunities || [];

  if (!isLoading && related.length === 0) return null;

  return (
    <section className="mt-14">
      <h2 className="font-display text-xl font-semibold text-ink">Related opportunities</h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => <OpportunityCardSkeleton key={i} />)
          : related.map((opportunity, i) => (
              <OpportunityCard key={opportunity._id} opportunity={opportunity} index={i} />
            ))}
      </div>
    </section>
  );
}
