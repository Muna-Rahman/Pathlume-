import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { SkeletonLine, SkeletonBlock } from "@/components/ui/Skeleton.js";

export default function Loading() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <SkeletonLine className="h-3 w-32" />
      <div className="mt-3 h-8 w-96 max-w-full skeleton-shimmer rounded-xl" />
      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_280px]">
        <GlassPanel className="p-5">
          <SkeletonBlock className="h-40 w-full" />
        </GlassPanel>
        <SkeletonBlock className="h-40 w-full" />
      </div>
    </div>
  );
}
