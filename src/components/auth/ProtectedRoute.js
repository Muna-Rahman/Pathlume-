"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/lib/hooks/useAuth.js";
import { NodeLoader } from "@/components/ui/Skeleton.js";

/**
 * Resolves auth state for the current route. Returns `status` as
 * "loading" | "unauthenticated" | "unauthorized" | "authorized" so
 * callers (or <ProtectedRoute>) can render the right thing without
 * duplicating the useCurrentUser + role-check logic everywhere.
 */
export function useRequireAuth({ allowedRoles } = {}) {
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) return { status: "loading", user: null };
  if (!user) return { status: "unauthenticated", user: null };
  if (allowedRoles && !allowedRoles.includes(user.role)) return { status: "unauthorized", user };
  return { status: "authorized", user };
}

/**
 * Wrap any page/section that requires a signed-in user (optionally of
 * a specific role). Redirects instead of rendering protected content;
 * used by future student/employer dashboard pages.
 */
export function ProtectedRoute({ children, allowedRoles, redirectTo = "/login" }) {
  const { status } = useRequireAuth({ allowedRoles });
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.replace(redirectTo);
    if (status === "unauthorized") router.replace("/explore");
  }, [status, router, redirectTo]);

  if (status === "loading" || status === "unauthenticated" || status === "unauthorized") {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <NodeLoader />
      </div>
    );
  }

  return children;
}
