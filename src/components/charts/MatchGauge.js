"use client";

import { motion } from "framer-motion";

const COLOR_STOPS = [
  { min: 0, color: "#C9B48F" },
  { min: 40, color: "#8FCB6A" },
  { min: 70, color: "#E2A547" },
];

const colorFor = (percentage) => {
  let color = COLOR_STOPS[0].color;
  for (const stop of COLOR_STOPS) {
    if (percentage >= stop.min) color = stop.color;
  }
  return color;
};

export function MatchGauge({ percentage = 0, size = 88, strokeWidth = 8, label = "match" }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.min(percentage, 100) / 100) * circumference;
  const color = colorFor(percentage);

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="rgba(246,232,204,0.12)" strokeWidth={strokeWidth} fill="none" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-display text-lg font-semibold text-ink">{Math.round(percentage)}%</span>
        <span className="font-mono text-[9px] uppercase tracking-wide text-ink-faint">{label}</span>
      </div>
    </div>
  );
}
