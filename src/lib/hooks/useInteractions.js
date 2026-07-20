"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { recordInteraction } from "@/lib/api/interactions.js";

export function useRecordInteraction() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ opportunityId, type }) => recordInteraction(opportunityId, type),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["interactions"] }),
  });
}
