import { Select } from "@/components/ui/Select.js";
import { SORT_OPTIONS } from "@/lib/constants/opportunityTypes.js";

export function SortDropdown({ value, onChange }) {
  return (
    <Select
      aria-label="Sort opportunities"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-auto"
    >
      {SORT_OPTIONS.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </Select>
  );
}
