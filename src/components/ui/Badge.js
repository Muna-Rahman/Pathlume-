import { cn } from "@/lib/utils/cn.js";

const TONES = {
  lume: "bg-lume/10 text-lume border-lume/25",
  path: "bg-path/10 text-path border-path/25",
  nebula: "bg-nebula/10 text-nebula border-nebula/25",
  neutral: "bg-white/5 text-ink-muted border-white/10",
};

export function Badge({ children, tone = "neutral", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide",
        TONES[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
