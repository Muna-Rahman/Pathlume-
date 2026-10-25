import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn.js";

export const Input = forwardRef(function Input({ label, error, className, id, ...props }, ref) {
  const inputId = id || props.name;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="font-mono text-xs uppercase tracking-wide text-ink-muted">
          {label}
        </label>
      )}
      <input
        id={inputId}
        ref={ref}
        className={cn(
          "rounded-xl border-2 bg-void-deep/70 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] px-4 py-2.5 text-ink placeholder:text-ink-faint",
          "border-lume-dim/50 outline-none transition-colors focus:border-lume",
          error && "border-danger",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-danger">{error}</p>}
    </div>
  );
});
