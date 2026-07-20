"use client";

import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { Select } from "@/components/ui/Select.js";
import { Input } from "@/components/ui/Input.js";
import { Button } from "@/components/ui/Button.js";
import { OPPORTUNITY_TYPES } from "@/lib/constants/opportunityTypes.js";

export function OpportunityFilters({ filters, onChange, onReset }) {
  const hasActiveFilters = Boolean(filters.type || filters.location || filters.remote);

  return (
    <GlassPanel className="flex flex-col gap-4 p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-mono text-xs uppercase tracking-wide text-ink-muted">Filters</h3>
        {hasActiveFilters && (
          <button onClick={onReset} className="text-xs text-path hover:underline">
            Reset
          </button>
        )}
      </div>

      <Select
        label="Type"
        value={filters.type || ""}
        onChange={(e) => onChange({ type: e.target.value || undefined })}
      >
        <option value="">All types</option>
        {OPPORTUNITY_TYPES.map((t) => (
          <option key={t.value} value={t.value}>
            {t.label}
          </option>
        ))}
      </Select>

      <Input
        label="Location"
        placeholder="e.g. Dhaka, Sylhet"
        value={filters.location || ""}
        onChange={(e) => onChange({ location: e.target.value || undefined })}
      />

      <label className="flex items-center gap-2.5 text-sm text-ink-muted">
        <input
          type="checkbox"
          checked={filters.remote === "true"}
          onChange={(e) => onChange({ remote: e.target.checked ? "true" : undefined })}
          className="h-4 w-4 rounded border-white/20 bg-void-soft accent-path"
        />
        Remote only
      </label>

      <Button variant="secondary" size="sm" className="mt-1 md:hidden" onClick={onReset}>
        Clear filters
      </Button>
    </GlassPanel>
  );
}
