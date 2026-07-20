"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createReview, deleteReview, fetchReviews } from "@/lib/api/reviews.js";

export function useReviews(opportunityId, params) {
  return useQuery({
    queryKey: ["reviews", opportunityId, params],
    queryFn: () => fetchReviews(opportunityId, params),
    enabled: Boolean(opportunityId),
  });
}

export function useReviewMutations(opportunityId) {
  const queryClient = useQueryClient();
  const invalidate = () => queryClient.invalidateQueries({ queryKey: ["reviews", opportunityId] });

  const create = useMutation({
    mutationFn: (payload) => createReview(opportunityId, payload),
    onSuccess: invalidate,
  });

  const remove = useMutation({
    mutationFn: (reviewId) => deleteReview(reviewId),
    onSuccess: invalidate,
  });

  return { create, remove };
}
