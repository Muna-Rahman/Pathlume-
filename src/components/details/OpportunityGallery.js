"use client";

import { useMemo } from "react";

const PALETTES = [
  ["#F5B860", "#4FD8C4"],
  ["#4FD8C4", "#B892F5"],
  ["#B892F5", "#F5B860"],
];

/** Deterministic hash so the same opportunity always renders the same pattern. */
const hashString = (value) => {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

export function OpportunityGallery({ opportunity }) {
  const { title = "", companyName = "", imageUrl = "" } = opportunity || {};

  const { palette, nodes } = useMemo(() => {
    const seed = hashString(title + companyName);
    const palette = PALETTES[seed % PALETTES.length];
    const nodes = Array.from({ length: 7 }, (_, i) => ({
      x: ((seed * (i + 3)) % 100),
      y: ((seed * (i + 7)) % 100),
      r: 3 + ((seed >> i) % 5),
    }));
    return { palette, nodes };
  }, [title, companyName]);

  const initials = (companyName || title || "P?")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  if (imageUrl) {
    return (
      <div className="relative h-52 w-full overflow-hidden rounded-xl2 border border-white/[0.08] md:h-72">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className="relative h-52 w-full overflow-hidden rounded-xl2 border border-white/[0.08] md:h-72"
      style={{
        background: `radial-gradient(120% 100% at 0% 0%, ${palette[0]}22 0%, transparent 55%), radial-gradient(120% 100% at 100% 100%, ${palette[1]}22 0%, transparent 55%), #0F1220`,
      }}
    >
      <svg className="absolute inset-0 h-full w-full opacity-60" preserveAspectRatio="none">
        {nodes.map((node, i) =>
          nodes.slice(i + 1).map((other, j) => (
            <line
              key={`${i}-${j}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${other.x}%`}
              y2={`${other.y}%`}
              stroke="white"
              strokeOpacity="0.06"
            />
          ))
        )}
        {nodes.map((node, i) => (
          <circle
            key={i}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={node.r}
            fill={i % 2 === 0 ? palette[0] : palette[1]}
            opacity="0.5"
          />
        ))}
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-void/70 font-display text-2xl font-semibold text-ink backdrop-blur-md md:h-24 md:w-24 md:text-3xl">
          {initials}
        </span>
      </div>
    </div>
  );
}