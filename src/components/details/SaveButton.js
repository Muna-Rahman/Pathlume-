"use client";

import { useState } from "react";
import { useCurrentUser } from "@/lib/hooks/useAuth.js";
import { useRecordInteraction } from "@/lib/hooks/useInteractions.js";
import { Button } from "@/components/ui/Button.js";
import { useToast } from "@/components/ui/Toast.js";

export function SaveButton({ opportunityId }) {
  const { data: user } = useCurrentUser();
  const record = useRecordInteraction();
  const { toast } = useToast();
  const [saved, setSaved] = useState(false);

  if (!user || user.role !== "student") return null;

  return (
    <Button
      variant={saved ? "primary" : "outline"}
      size="sm"
      loading={record.isPending}
      onClick={() => {
        record.mutate(
          { opportunityId, type: "saved" },
          {
            onSuccess: () => {
              setSaved(true);
              toast({ title: "Saved for later", description: "Find it anytime from your saved list.", variant: "success" });
            },
            onError: (err) => {
              toast({ title: "Couldn't save this", description: err.message || "Please try again.", variant: "error" });
            },
          }
        );
      }}
    >
      {saved ? "Saved" : "Save for later"}
    </Button>
  );
}
