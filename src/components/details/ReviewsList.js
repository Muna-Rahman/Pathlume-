"use client";

import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { StarRating } from "@/components/ui/StarRating.js";
import { EmptyState } from "@/components/ui/EmptyState.js";
import { SkeletonLine } from "@/components/ui/Skeleton.js";
import { formatRelativeTime } from "@/lib/utils/format.js";
import { useCurrentUser } from "@/lib/hooks/useAuth.js";
import { useReviewMutations, useReviews } from "@/lib/hooks/useReviews.js";
import { ReviewForm } from "@/components/details/ReviewForm.js";

export function ReviewsList({ opportunityId }) {
  const { data: user } = useCurrentUser();
  const { data, isLoading } = useReviews(opportunityId);
  const { remove } = useReviewMutations(opportunityId);

  const reviews = data?.reviews || [];
  const rating = data?.rating || { average: 0, count: 0 };

  return (
    <GlassPanel className="p-5 md:p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-semibold text-ink">Reviews</h3>
        <StarRating value={rating.average} count={rating.count} size={16} />
      </div>

      {user && (
        <div className="mt-5 border-b border-white/[0.06] pb-6">
          <ReviewForm opportunityId={opportunityId} />
        </div>
      )}

      <div className="mt-6 flex flex-col gap-5">
        {isLoading &&
          Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <SkeletonLine className="w-32" />
              <SkeletonLine className="w-full" />
            </div>
          ))}

        {!isLoading && reviews.length === 0 && (
          <EmptyState
            title="No reviews yet"
            description="Be the first to share what applying here was really like."
          />
        )}

        {!isLoading &&
          reviews.map((review) => (
            <div key={review._id} className="border-b border-white/[0.04] pb-5 last:border-0 last:pb-0">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-ink">{review.userName}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <StarRating value={review.rating} size={13} />
                    <span className="text-xs text-ink-faint">{formatRelativeTime(review.createdAt)}</span>
                  </div>
                </div>
                {user?.id === review.userId && (
                  <button
                    onClick={() => remove.mutate(review._id)}
                    className="text-xs text-ink-faint transition-colors hover:text-danger"
                  >
                    Delete
                  </button>
                )}
              </div>
              {review.comment && <p className="mt-2 text-sm leading-relaxed text-ink-muted">{review.comment}</p>}
            </div>
          ))}
      </div>
    </GlassPanel>
  );
}
