"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchMyProfile, updateMyProfile } from "@/lib/api/profile.js";

export function useMyProfile() {
  return useQuery({ queryKey: ["profile", "me"], queryFn: fetchMyProfile });
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateMyProfile,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["profile", "me"] }),
  });
}
