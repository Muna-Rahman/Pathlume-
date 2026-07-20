"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createOpportunity,
  deleteOpportunity,
  fetchMyOpportunities,
  fetchOpportunities,
  fetchOpportunityById,
  fetchRelatedOpportunities,
  updateOpportunity,
} from "@/lib/api/opportunities.js";

export function useOpportunities(filters) {
  return useQuery({
    queryKey: ["opportunities", "list", filters],
    queryFn: () => fetchOpportunities(filters),
    placeholderData: (previous) => previous,
  });
}

export function useOpportunity(id) {
  return useQuery({
    queryKey: ["opportunities", "detail", id],
    queryFn: () => fetchOpportunityById(id),
    enabled: Boolean(id),
  });
}

export function useRelatedOpportunities(id, limit = 4) {
  return useQuery({
    queryKey: ["opportunities", "related", id, limit],
    queryFn: () => fetchRelatedOpportunities(id, limit),
    enabled: Boolean(id),
  });
}

export function useMyOpportunities(filters) {
  return useQuery({
    queryKey: ["opportunities", "mine", filters],
    queryFn: () => fetchMyOpportunities(filters),
  });
}

export function useOpportunityMutations() {
  const queryClient = useQueryClient();
  const invalidateLists = () => queryClient.invalidateQueries({ queryKey: ["opportunities"] });

  const create = useMutation({ mutationFn: createOpportunity, onSuccess: invalidateLists });
  const update = useMutation({
    mutationFn: ({ id, payload }) => updateOpportunity(id, payload),
    onSuccess: invalidateLists,
  });
  const remove = useMutation({ mutationFn: deleteOpportunity, onSuccess: invalidateLists });

  return { create, update, remove };
}
