import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn.js";

export const Select = forwardRef(function Select(
  { label, error, className, id, children, ...props },
  ref
) {
  const selectId = id || props.name;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={selectId} className="font-mono text-xs uppercase tracking-wide text-ink-muted">
          {label}
        </label>
      )}
      <select
        id={selectId}
        ref={ref}
        className={cn(
          "rounded-xl border-2 bg-void-deep/70 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] px-4 py-2.5 text-ink outline-none transition-colors",
          "border-lume-dim/50 focus:border-lume",
          error && "border-danger",
          className
        )}
        {...props}
      >
        {children}
      </select>
      {error && <p className="text-xs text-danger">{error}</p>}
    </div>
  );
});

export const Textarea = forwardRef(function Textarea(
  { label, error, className, id, ...props },
  ref
) {
  const textareaId = id || props.name;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={textareaId} className="font-mono text-xs uppercase tracking-wide text-ink-muted">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        ref={ref}
        className={cn(
          "min-h-[120px] rounded-xl border-2 bg-void-deep/70 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] px-4 py-2.5 text-ink placeholder:text-ink-faint",
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
