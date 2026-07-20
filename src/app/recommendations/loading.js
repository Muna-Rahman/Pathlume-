import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { SkeletonLine } from "@/components/ui/Skeleton.js";

export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <SkeletonLine className="h-3 w-16" />
      <div className="mt-3 h-8 w-72 skeleton-shimmer rounded-xl" />
      <div className="mt-8 flex flex-col gap-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <GlassPanel key={i} className="flex items-center gap-5 p-5">
            <div className="h-[88px] w-[88px] shrink-0 animate-pulse rounded-full bg-panel-light" />
            <div className="flex-1 space-y-2">
              <SkeletonLine className="w-1/2" />
              <SkeletonLine className="w-1/3" />
              <SkeletonLine className="w-full" />
            </div>
          </GlassPanel>
        ))}
      </div>
    </div>
  );
}
