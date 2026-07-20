import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { SkeletonLine } from "@/components/ui/Skeleton.js";

export default function Loading() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <SkeletonLine className="h-3 w-24" />
      <div className="mt-3 h-8 w-64 skeleton-shimmer rounded-xl" />
      <div className="mt-8 flex flex-col gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <GlassPanel key={i} className="flex items-center justify-between p-5">
            <SkeletonLine className="w-1/3" />
            <SkeletonLine className="w-24" />
          </GlassPanel>
        ))}
      </div>
    </div>
  );
}
