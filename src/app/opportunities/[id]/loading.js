import { SkeletonBlock, SkeletonLine } from "@/components/ui/Skeleton.js";

export default function Loading() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <SkeletonBlock className="h-52 w-full md:h-72" />
      <SkeletonLine className="mt-6 h-8 w-2/3" />
      <SkeletonLine className="mt-3 h-4 w-1/3" />
    </div>
  );
}
