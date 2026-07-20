"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchResumeAnalysis, fetchResumeHistory, uploadResume } from "@/lib/api/resumeAnalysis.js";

export function useResumeHistory() {
  return useQuery({ queryKey: ["resumeAnalysis", "history"], queryFn: () => fetchResumeHistory() });
}

export function useResumeAnalysis(id) {
  return useQuery({
    queryKey: ["resumeAnalysis", "detail", id],
    queryFn: () => fetchResumeAnalysis(id),
    enabled: Boolean(id),
  });
}

export function useUploadResume() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ file, opportunityId }) => uploadResume(file, { opportunityId }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["resumeAnalysis", "history"] }),
  });
}
