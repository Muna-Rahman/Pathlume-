"use client";

import { useMutation } from "@tanstack/react-query";
import { submitContactMessage } from "@/lib/api/contact.js";

export function useContactMutation() {
  return useMutation({
    mutationFn: submitContactMessage,
  });
}
