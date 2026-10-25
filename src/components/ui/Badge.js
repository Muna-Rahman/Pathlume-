import { cn } from "@/lib/utils/cn.js";

const TONES = {
  lume: "bg-lume/15 text-lume-soft border-lume/40",
  path: "bg-path/15 text-path-soft border-path/40",
  nebula: "bg-nebula/15 text-nebula-soft border-nebula/40",
  neutral: "bg-ink/5 text-ink-muted border-ink/15",
};

export function Badge({ children, tone = "neutral", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-xs font-medium uppercase tracking-wide",
        TONES[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
