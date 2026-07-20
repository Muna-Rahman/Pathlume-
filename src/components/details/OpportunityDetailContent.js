"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useOpportunity } from "@/lib/hooks/useOpportunities.js";
import { useRecordInteraction } from "@/lib/hooks/useInteractions.js";
import { useCurrentUser } from "@/lib/hooks/useAuth.js";
import { OpportunityGallery } from "@/components/details/OpportunityGallery.js";
import { SkillsList } from "@/components/details/SkillsList.js";
import { CompanyPanel } from "@/components/details/CompanyPanel.js";
import { ReviewsList } from "@/components/details/ReviewsList.js";
import { RelatedOpportunities } from "@/components/details/RelatedOpportunities.js";
import { SaveButton } from "@/components/details/SaveButton.js";
import { Badge } from "@/components/ui/Badge.js";
import { EmptyState } from "@/components/ui/EmptyState.js";
import { Button } from "@/components/ui/Button.js";
import { SkeletonBlock, SkeletonLine } from "@/components/ui/Skeleton.js";
import { titleCase } from "@/lib/utils/format.js";

export function OpportunityDetailContent({ id }) {
  const { data: opportunity, isLoading, isError } = useOpportunity(id);
  const { data: user } = useCurrentUser();
  const record = useRecordInteraction();

  useEffect(() => {
    if (user && opportunity?._id) {
      record.mutate({ opportunityId: opportunity._id, type: "viewed" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id, opportunity?._id]);

  if (isLoading) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-12">
        <SkeletonBlock className="h-52 w-full md:h-72" />
        <SkeletonLine className="mt-6 h-8 w-2/3" />
        <SkeletonLine className="mt-3 h-4 w-1/3" />
      </div>
    );
  }

  if (isError || !opportunity) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20">
        <EmptyState
          title="This opportunity isn't available"
          description="It may have been closed or removed by the employer."
          action={
            <Button href="/explore" size="sm">
              Back to explore
            </Button>
          }
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <Link href="/explore" className="text-xs text-ink-muted transition-colors hover:text-path">
        ← Back to explore
      </Link>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <div className="mt-4">
          <OpportunityGallery opportunity={opportunity} />
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="font-display text-2xl font-semibold text-ink md:text-3xl">{opportunity.title}</h1>
              <Badge tone="lume">{titleCase(opportunity.type)}</Badge>
            </div>
            <p className="mt-1.5 text-sm text-ink-muted">{opportunity.companyName || "Confidential company"}</p>
          </div>
          <SaveButton opportunityId={opportunity._id} />
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_320px]">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-wide text-ink-muted">About this role</h2>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink-muted">
                {opportunity.description}
              </p>
            </div>

            <SkillsList skills={opportunity.skillsRequired} tags={opportunity.tags} />
            <ReviewsList opportunityId={opportunity._id} />
          </div>

          <div className="md:sticky md:top-24 md:self-start">
            <CompanyPanel opportunity={opportunity} />
          </div>
        </div>

        <RelatedOpportunities opportunityId={opportunity._id} />
      </motion.div>
    </div>
  );
}
