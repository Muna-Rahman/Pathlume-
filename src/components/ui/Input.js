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
          "rounded-xl border bg-void-soft/60 px-4 py-2.5 text-ink placeholder:text-ink-faint",
          "border-white/10 outline-none transition-colors focus:border-path/60",
          error && "border-danger/60",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-danger">{error}</p>}
    </div>
  );
});
