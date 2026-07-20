import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { SkeletonLine } from "@/components/ui/Skeleton.js";

export function OpportunityCardSkeleton() {
  return (
    <GlassPanel className="flex h-full flex-col gap-4 p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 space-y-2">
          <SkeletonLine className="w-3/4" />
          <SkeletonLine className="w-1/2" />
        </div>
        <SkeletonLine className="h-6 w-16 rounded-full" />
      </div>
      <div className="flex gap-1.5">
        <SkeletonLine className="h-6 w-14 rounded-full" />
        <SkeletonLine className="h-6 w-14 rounded-full" />
      </div>
      <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] pt-3">
        <SkeletonLine className="w-20" />
        <SkeletonLine className="w-14" />
      </div>
    </GlassPanel>
  );
}
