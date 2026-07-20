"use client";

import { ProtectedRoute } from "@/components/auth/ProtectedRoute.js";
import { useRecommendations } from "@/lib/hooks/useRecommendations.js";
import { RecommendationCard } from "@/components/recommendations/RecommendationCard.js";
import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { SkeletonLine } from "@/components/ui/Skeleton.js";
import { EmptyState } from "@/components/ui/EmptyState.js";
import { Button } from "@/components/ui/Button.js";
import { ROLES } from "@/lib/constants/roles.js";

function RecommendationsContent() {
  const { data: recommendations, isLoading, isError } = useRecommendations(12);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <span className="eyebrow">For you</span>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink">Your recommended opportunities</h1>
      <p className="mt-2 text-sm text-ink-muted">
        Ranked by skill fit, location, preferred type, and what you've engaged with before.
      </p>

      <div className="mt-8 flex flex-col gap-5">
        {isLoading &&
          Array.from({ length: 4 }).map((_, i) => (
            <GlassPanel key={i} className="flex items-center gap-5 p-5">
              <div className="h-[88px] w-[88px] shrink-0 animate-pulse rounded-full bg-panel-light" />
              <div className="flex-1 space-y-2">
                <SkeletonLine className="w-1/2" />
                <SkeletonLine className="w-1/3" />
                <SkeletonLine className="w-full" />
              </div>
            </GlassPanel>
          ))}

        {!isLoading && isError && (
          <EmptyState title="Couldn't load recommendations" description="Try refreshing the page." />
        )}

        {!isLoading && !isError && recommendations?.length === 0 && (
          <EmptyState
            title="No recommendations yet"
            description="Complete your profile so we can find opportunities that fit."
            action={<Button href="/profile" size="sm">Complete profile</Button>}
          />
        )}

        {!isLoading &&
          !isError &&
          recommendations?.map((rec, i) => (
            <RecommendationCard key={rec.opportunity._id} recommendation={rec} index={i} />
          ))}
      </div>
    </div>
  );
}

export function RecommendationsPageContent() {
  return (
    <ProtectedRoute allowedRoles={[ROLES.STUDENT]}>
      <RecommendationsContent />
    </ProtectedRoute>
  );
}
