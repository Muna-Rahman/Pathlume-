import { cn } from "@/lib/utils/cn.js";

export function GradientText({ children, className }) {
  return <span className={cn("gradient-text", className)}>{children}</span>;
}

/** Blurred, slowly drifting color orbs used behind section content for ambient depth. */
export function AuroraOrbs({ className }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-lume/20 blur-[100px] animate-drift" />
      <div className="absolute -right-16 top-1/3 h-64 w-64 rounded-full bg-path/20 blur-[100px] animate-drift-slow" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-nebula/15 blur-[110px] animate-drift" />
    </div>
  );
}
