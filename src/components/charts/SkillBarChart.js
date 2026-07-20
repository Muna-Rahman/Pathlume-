"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge.js";

export function SkillBarChart({ matched = [], missing = [] }) {
  const total = matched.length + missing.length;
  if (total === 0) return null;

  const matchedPct = Math.round((matched.length / total) * 100);

  return (
    <div className="flex flex-col gap-3">
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          className="h-full rounded-full bg-lume-path"
          initial={{ width: 0 }}
          animate={{ width: `${matchedPct}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      <div className="flex flex-wrap gap-1.5">
        {matched.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.03 }}
          >
            <Badge tone="path">✓ {skill}</Badge>
          </motion.div>
        ))}
        {missing.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: (matched.length + i) * 0.03 }}
          >
            <Badge tone="neutral">+ {skill}</Badge>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
