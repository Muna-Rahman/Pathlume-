"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { Badge } from "@/components/ui/Badge.js";
import { formatStipend, formatRelativeTime, titleCase } from "@/lib/utils/format.js";

/** Deterministic fallback gradient so cards without an imageUrl still look intentional, not broken. */
const FALLBACK_PALETTES = [
  ["#F5B860", "#4FD8C4"],
  ["#4FD8C4", "#B892F5"],
  ["#B892F5", "#F5B860"],
];

const hashString = (value) => {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

export function OpportunityCard({ opportunity, index = 0 }) {
  const {
    _id,
    title,
    companyName,
    type,
    location,
    remote,
    skillsRequired = [],
    stipend,
    createdAt,
    imageUrl,
    description,
  } = opportunity;

  const palette = FALLBACK_PALETTES[hashString(title + companyName) % FALLBACK_PALETTES.length];
  const shortDescription = description ? description.slice(0, 90).trim() + (description.length > 90 ? "…" : "") : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
    >
      <Link href={`/opportunities/${_id}`} className="group block h-full">
        <GlassPanel hover className="flex h-full flex-col gap-4 p-5">
          <div className="relative -mx-5 -mt-5 h-32 w-[calc(100%+2.5rem)] overflow-hidden rounded-t-xl2">
            {imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imageUrl}
                alt={title}
                className="h-full w-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ) : (
              <div
                className="h-full w-full"
                style={{
                  background: `linear-gradient(135deg, ${palette[0]}33 0%, ${palette[1]}33 100%)`,
                }}
              />
            )}
          </div>

          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-base font-semibold text-ink transition-colors group-hover:text-path">
                {title}
              </h3>
              <p className="mt-1 text-sm text-ink-muted">{companyName || "Confidential company"}</p>
            </div>
            <Badge tone="lume">{titleCase(type)}</Badge>
          </div>

          {shortDescription && <p className="text-sm text-ink-muted">{shortDescription}</p>}

          <div className="flex flex-wrap gap-1.5">
            {skillsRequired.slice(0, 3).map((skill) => (
              <Badge key={skill} tone="path">
                {skill}
              </Badge>
            ))}
            {skillsRequired.length > 3 && <Badge tone="neutral">+{skillsRequired.length - 3}</Badge>}
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] pt-3 text-xs text-ink-muted">
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
                <path
                  d="M6 11S10 7.5 10 4.7A4 4 0 002 4.7C2 7.5 6 11 6 11z"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <circle cx="6" cy="4.7" r="1.3" stroke="currentColor" strokeWidth="1" />
              </svg>
              {remote ? "Remote" : location}
            </span>
            <span className="font-mono">{formatStipend(stipend)}</span>
          </div>

          <p className="text-[11px] text-ink-faint">Posted {formatRelativeTime(createdAt)}</p>
        </GlassPanel>
      </Link>
    </motion.div>
  );
}