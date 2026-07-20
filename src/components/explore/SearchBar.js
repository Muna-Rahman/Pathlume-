"use client";

import { useEffect, useState } from "react";

export function SearchBar({ value, onChange, placeholder = "Search by title, skill, or company..." }) {
  const [localValue, setLocalValue] = useState(value || "");

  // Keep local input in sync if the URL-driven value changes externally
  // (e.g. a filter reset), without fighting the user's own typing.
  useEffect(() => {
    setLocalValue(value || "");
  }, [value]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (localValue !== value) onChange(localValue);
    }, 350);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localValue]);

  return (
    <div className="relative flex-1">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-faint"
      >
        <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <input
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        placeholder={placeholder}
        aria-label="Search opportunities"
        className="w-full rounded-xl border border-white/10 bg-void-soft/60 py-3 pl-11 pr-4 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-path/60"
      />
    </div>
  );
}
