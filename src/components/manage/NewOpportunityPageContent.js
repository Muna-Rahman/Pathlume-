"use client";

import { ProtectedRoute } from "@/components/auth/ProtectedRoute.js";
import { OpportunityForm } from "@/components/manage/OpportunityForm.js";
import { ROLES } from "@/lib/constants/roles.js";

export function NewOpportunityPageContent() {
  return (
    <ProtectedRoute allowedRoles={[ROLES.EMPLOYER]}>
      <div className="mx-auto max-w-2xl px-4 py-12">
        <span className="eyebrow">New listing</span>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">Post an opportunity</h1>
        <p className="mt-2 text-sm text-ink-muted">Fill in the details students will see on the listing page.</p>
        <div className="mt-8">
          <OpportunityForm />
        </div>
      </div>
    </ProtectedRoute>
  );
}
