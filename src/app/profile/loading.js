import { SkeletonBlock, SkeletonLine } from "@/components/ui/Skeleton.js";

export default function Loading() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <SkeletonLine className="h-3 w-24" />
      <div className="mt-3 h-8 w-56 skeleton-shimmer rounded-xl" />
      <div className="mt-8 space-y-4">
        <SkeletonBlock className="h-12 w-full" />
        <SkeletonBlock className="h-12 w-full" />
        <SkeletonBlock className="h-32 w-full" />
      </div>
    </div>
  );
}
