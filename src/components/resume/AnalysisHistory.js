"use client";

import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { SkeletonLine } from "@/components/ui/Skeleton.js";
import { EmptyState } from "@/components/ui/EmptyState.js";
import { formatRelativeTime } from "@/lib/utils/format.js";
import { useResumeHistory } from "@/lib/hooks/useResumeAnalysis.js";

export function AnalysisHistory({ onSelect, activeId }) {
  const { data: history, isLoading } = useResumeHistory();

  if (isLoading) {
    return (
      <div className="space-y-2">
        <SkeletonLine className="h-14 w-full" />
        <SkeletonLine className="h-14 w-full" />
      </div>
    );
  }

  if (!history || history.length === 0) {
    return <EmptyState title="No past analyses" description="Your analysis history will show up here." />;
  }

  return (
    <div className="flex flex-col gap-2">
      {history.map((item) => (
        <button
          key={item._id}
          onClick={() => onSelect(item)}
          className={`text-left transition-colors ${activeId === item._id ? "opacity-100" : "opacity-80 hover:opacity-100"}`}
        >
          <GlassPanel className={`p-4 ${activeId === item._id ? "border-path/40" : ""}`}>
            <p className="text-sm font-medium text-ink">{item.fileName}</p>
            <p className="mt-1 text-xs text-ink-muted">
              {item.extractedSkills.length} skills detected · {formatRelativeTime(item.createdAt)}
            </p>
          </GlassPanel>
        </button>
      ))}
    </div>
  );
}
