"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge.js";
import { cn } from "@/lib/utils/cn.js";

/**
 * Free-text tag entry: type + Enter/comma to add, click × to remove.
 * Controlled component - `value` is always an array of strings.
 */
export function TagInput({ label, value = [], onChange, placeholder = "Type and press Enter...", tone = "path", error }) {
  const [draft, setDraft] = useState("");

  const commit = () => {
    const cleaned = draft.trim().toLowerCase();
    if (cleaned && !value.includes(cleaned)) onChange([...value, cleaned]);
    setDraft("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      commit();
    } else if (e.key === "Backspace" && !draft && value.length > 0) {
      onChange(value.slice(0, -1));
    }
  };

  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="font-mono text-xs uppercase tracking-wide text-ink-muted">{label}</label>}
      <div
        className={cn(
          "flex flex-wrap items-center gap-2 rounded-xl border bg-void-soft/60 px-3 py-2.5",
          "border-white/10 focus-within:border-path/60",
          error && "border-danger/60"
        )}
      >
        {value.map((tag) => (
          <Badge key={tag} tone={tone} className="gap-1.5">
            {tag}
            <button
              type="button"
              onClick={() => onChange(value.filter((t) => t !== tag))}
              aria-label={`Remove ${tag}`}
              className="text-current opacity-70 hover:opacity-100"
            >
              ×
            </button>
          </Badge>
        ))}
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={commit}
          placeholder={value.length === 0 ? placeholder : ""}
          className="min-w-[120px] flex-1 bg-transparent py-1 text-sm text-ink outline-none placeholder:text-ink-faint"
        />
      </div>
      {error && <p className="text-xs text-danger">{error}</p>}
    </div>
  );
}
