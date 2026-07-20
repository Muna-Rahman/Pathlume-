"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { Badge } from "@/components/ui/Badge.js";
import { MatchGauge } from "@/components/charts/MatchGauge.js";
import { SkillBarChart } from "@/components/charts/SkillBarChart.js";
import { formatStipend, titleCase } from "@/lib/utils/format.js";

export function RecommendationCard({ recommendation, index = 0 }) {
  const { opportunity, matchPercentage, matchedSkills, missingSkills, reasons } = recommendation;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.3) }}
    >
      <GlassPanel hover className="flex flex-col gap-5 p-5 sm:flex-row sm:items-start">
        <MatchGauge percentage={matchPercentage} />

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <Link href={`/opportunities/${opportunity._id}`} className="font-display text-base font-semibold text-ink hover:text-path">
              {opportunity.title}
            </Link>
            <Badge tone="lume">{titleCase(opportunity.type)}</Badge>
          </div>
          <p className="mt-0.5 text-xs text-ink-muted">
            {opportunity.companyName} · {opportunity.remote ? "Remote" : opportunity.location} · {formatStipend(opportunity.stipend)}
          </p>

          <ul className="mt-3 flex flex-col gap-1">
            {reasons.slice(0, 3).map((reason) => (
              <li key={reason} className="flex items-start gap-1.5 text-xs text-ink-muted">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-path" />
                {reason}
              </li>
            ))}
          </ul>

          {(matchedSkills.length > 0 || missingSkills.length > 0) && (
            <div className="mt-4">
              <SkillBarChart matched={matchedSkills} missing={missingSkills} />
            </div>
          )}
        </div>
      </GlassPanel>
    </motion.div>
  );
}
