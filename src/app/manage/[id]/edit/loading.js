import { SkeletonBlock } from "@/components/ui/Skeleton.js";

export default function Loading() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <SkeletonBlock className="h-12 w-full" />
      <SkeletonBlock className="mt-4 h-40 w-full" />
    </div>
  );
}
