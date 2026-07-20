"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn.js";

function Star({ filled, half, size, onMouseEnter, onClick, interactive }) {
  return (
    <svg
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      className={cn(interactive && "cursor-pointer")}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="half-star-gradient">
          <stop offset="50%" stopColor="#F5B860" />
          <stop offset="50%" stopColor="#2A2F4A" />
        </linearGradient>
      </defs>
      <path
        d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9L10 14.9l-5.2 2.9 1-5.9L1.5 7.7l5.9-.8L10 1.5z"
        fill={half ? "url(#half-star-gradient)" : filled ? "#F5B860" : "#2A2F4A"}
      />
    </svg>
  );
}

export function StarRating({ value = 0, count, size = 16, interactive = false, onChange }) {
  const [hovered, setHovered] = useState(null);
  const display = hovered ?? value;

  return (
    <div className="flex items-center gap-1.5">
      <div
        className="flex items-center gap-0.5"
        onMouseLeave={() => interactive && setHovered(null)}
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={size}
            interactive={interactive}
            filled={display >= i}
            half={!interactive && display >= i - 0.5 && display < i}
            onMouseEnter={() => interactive && setHovered(i)}
            onClick={() => interactive && onChange?.(i)}
          />
        ))}
      </div>
      {typeof count === "number" && (
        <span className="font-mono text-xs text-ink-muted">
          {value.toFixed(1)} ({count})
        </span>
      )}
    </div>
  );
}
