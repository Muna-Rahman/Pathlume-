"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/components/ui/Toast.js";

const MESSAGES = {
  state_mismatch: "That Google sign-in link expired or was already used. Please try again.",
  please_restart_the_process: "Something interrupted sign-in. Please try again.",
  oauth_failed: "Google sign-in didn't go through. Please try again.",
};

/**
 * Better Auth redirects OAuth failures back to this page as
 * `/login?error=<code>` (see onAPIError.errorURL in the backend config).
 * This picks that up, shows it as a toast, and strips the param so a
 * refresh doesn't re-trigger the message.
 */
export function OAuthErrorNotice() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const error = searchParams.get("error");
    if (!error) return;

    toast({
      title: "Sign-in failed",
      description: MESSAGES[error] || "Please try signing in again.",
      variant: "error",
    });

    router.replace("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return null;
}