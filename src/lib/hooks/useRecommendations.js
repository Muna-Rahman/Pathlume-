"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchRecommendations } from "@/lib/api/recommendations.js";

export function useRecommendations(limit = 10) {
  return useQuery({
    queryKey: ["recommendations", limit],
    queryFn: () => fetchRecommendations(limit),
  });
}
