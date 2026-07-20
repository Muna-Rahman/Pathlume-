import { cn } from "@/lib/utils/cn.js";

export function SkeletonLine({ className }) {
  return <div className={cn("skeleton-shimmer h-3 rounded-full", className)} />;
}

export function SkeletonBlock({ className }) {
  return <div className={cn("skeleton-shimmer rounded-xl", className)} />;
}

/** Three pulsing nodes on a connecting line - echoes the constellation motif while loading. */
export function NodeLoader({ className }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-2 w-2 rounded-full bg-path animate-pulse-node"
          style={{ animationDelay: `${i * 0.25}s` }}
        />
      ))}
    </div>
  );
}
