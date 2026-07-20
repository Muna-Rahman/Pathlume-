"use client";

import { useState } from "react";
import Link from "next/link";
import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { Badge } from "@/components/ui/Badge.js";
import { Button } from "@/components/ui/Button.js";
import { DeleteConfirmModal } from "@/components/manage/DeleteConfirmModal.js";
import { useOpportunityMutations } from "@/lib/hooks/useOpportunities.js";
import { formatStipend, formatRelativeTime, titleCase } from "@/lib/utils/format.js";
import { useToast } from "@/components/ui/Toast.js";

const STATUS_TONE = { active: "path", draft: "neutral", closed: "nebula" };

export function ManageOpportunityRow({ opportunity }) {
  const { remove } = useOpportunityMutations();
  const { toast } = useToast();
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <>
      <GlassPanel className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Link href={`/opportunities/${opportunity._id}`} className="font-display text-base font-semibold text-ink hover:text-path">
              {opportunity.title}
            </Link>
            <Badge tone={STATUS_TONE[opportunity.status] || "neutral"}>{titleCase(opportunity.status)}</Badge>
            <Badge tone="lume">{titleCase(opportunity.type)}</Badge>
          </div>
          <p className="mt-1 text-xs text-ink-muted">
            {opportunity.location} · {formatStipend(opportunity.stipend)} · Posted {formatRelativeTime(opportunity.createdAt)}
          </p>
        </div>

        <div className="flex shrink-0 gap-2">
          <Button variant="secondary" size="sm" href={`/manage/${opportunity._id}/edit`}>
            Edit
          </Button>
          <Button variant="danger" size="sm" onClick={() => setConfirmOpen(true)}>
            Delete
          </Button>
        </div>
      </GlassPanel>

      <DeleteConfirmModal
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        isDeleting={remove.isPending}
        title={opportunity.title}
        onConfirm={() =>
          remove.mutate(opportunity._id, {
            onSuccess: () => {
              setConfirmOpen(false);
              toast({
                title: "Opportunity deleted",
                description: `"${opportunity.title}" was removed from your listings.`,
                variant: "success",
              });
            },
            onError: (err) => {
              toast({
                title: "Couldn't delete this listing",
                description: err.message || "Please try again.",
                variant: "error",
              });
            },
          })
        }
      />
    </>
  );
}
