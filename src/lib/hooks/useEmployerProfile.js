"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchMyEmployerProfile, updateMyEmployerProfile } from "@/lib/api/employerProfile.js";

export function useMyEmployerProfile() {
  return useQuery({ queryKey: ["employerProfile", "me"], queryFn: fetchMyEmployerProfile });
}

export function useUpdateEmployerProfile() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateMyEmployerProfile,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["employerProfile", "me"] }),
  });
}
