import { cn } from "@/lib/utils/cn.js";

export function EmptyState({ icon, title, description, action, className }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 rounded-xl2 border border-dashed border-white/10 px-6 py-16 text-center",
        className
      )}
    >
      {icon && <div className="text-3xl text-ink-faint">{icon}</div>}
      <h3 className="font-display text-lg text-ink">{title}</h3>
      {description && <p className="max-w-sm text-sm text-ink-muted">{description}</p>}
      {action}
    </div>
  );
}
