"use client";

import { ProtectedRoute } from "@/components/auth/ProtectedRoute.js";
import { useMyOpportunities } from "@/lib/hooks/useOpportunities.js";
import { ManageOpportunityRow } from "@/components/manage/ManageOpportunityRow.js";
import { EmptyState } from "@/components/ui/EmptyState.js";
import { Button } from "@/components/ui/Button.js";
import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { SkeletonLine } from "@/components/ui/Skeleton.js";
import { ROLES } from "@/lib/constants/roles.js";

function ManageContent() {
  const { data, isLoading, isError } = useMyOpportunities({});
  const opportunities = data?.opportunities || [];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <span className="eyebrow">Manage</span>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink">Your opportunities</h1>
        </div>
        <Button href="/manage/new">+ Add opportunity</Button>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        {isLoading &&
          Array.from({ length: 3 }).map((_, i) => (
            <GlassPanel key={i} className="flex items-center justify-between p-5">
              <SkeletonLine className="w-1/3" />
              <SkeletonLine className="w-24" />
            </GlassPanel>
          ))}

        {!isLoading && isError && (
          <EmptyState title="Couldn't load your opportunities" description="Try refreshing the page." />
        )}

        {!isLoading && !isError && opportunities.length === 0 && (
          <EmptyState
            title="You haven't posted anything yet"
            description="Create your first listing to start reaching students."
            action={<Button href="/manage/new" size="sm">+ Add opportunity</Button>}
          />
        )}

        {!isLoading &&
          !isError &&
          opportunities.map((opportunity) => <ManageOpportunityRow key={opportunity._id} opportunity={opportunity} />)}
      </div>
    </div>
  );
}

export function ManagePageContent() {
  return (
    <ProtectedRoute allowedRoles={[ROLES.EMPLOYER]}>
      <ManageContent />
    </ProtectedRoute>
  );
}
