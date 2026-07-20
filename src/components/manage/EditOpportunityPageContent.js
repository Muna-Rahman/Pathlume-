"use client";

import { ProtectedRoute, useRequireAuth } from "@/components/auth/ProtectedRoute.js";
import { OpportunityForm } from "@/components/manage/OpportunityForm.js";
import { useOpportunity } from "@/lib/hooks/useOpportunities.js";
import { EmptyState } from "@/components/ui/EmptyState.js";
import { Button } from "@/components/ui/Button.js";
import { SkeletonBlock } from "@/components/ui/Skeleton.js";
import { ROLES } from "@/lib/constants/roles.js";

function EditOpportunityContent({ id }) {
  const { user } = useRequireAuth();
  const { data: opportunity, isLoading, isError } = useOpportunity(id);

  if (isLoading) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        <SkeletonBlock className="h-12 w-full" />
        <SkeletonBlock className="mt-4 h-40 w-full" />
      </div>
    );
  }

  if (isError || !opportunity) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20">
        <EmptyState title="Opportunity not found" action={<Button href="/manage" size="sm">Back to manage</Button>} />
      </div>
    );
  }

  if (opportunity.employerId !== user.id) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20">
        <EmptyState
          title="You can only edit your own listings"
          description="This opportunity belongs to a different employer account."
          action={<Button href="/manage" size="sm">Back to manage</Button>}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <span className="eyebrow">Editing</span>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink">{opportunity.title}</h1>
      <div className="mt-8">
        <OpportunityForm opportunity={opportunity} />
      </div>
    </div>
  );
}

export function EditOpportunityPageContent({ id }) {
  return (
    <ProtectedRoute allowedRoles={[ROLES.EMPLOYER]}>
      <EditOpportunityContent id={id} />
    </ProtectedRoute>
  );
}
