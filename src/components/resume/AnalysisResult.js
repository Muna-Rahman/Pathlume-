"use client";

import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { Badge } from "@/components/ui/Badge.js";
import { Button } from "@/components/ui/Button.js";
import { MatchGauge } from "@/components/charts/MatchGauge.js";
import { SkillBarChart } from "@/components/charts/SkillBarChart.js";
import { buildReportDownloadUrl } from "@/lib/api/resumeAnalysis.js";

export function AnalysisResult({ analysis }) {
  const { extractedSkills = [], suggestions = [], gapAnalysis, sections = [], wordCount } = analysis;

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <GlassPanel className="flex flex-col gap-6 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-semibold text-ink">Analysis result</h3>
            <p className="mt-1 text-xs text-ink-muted">
              {wordCount} words · {sections.length} sections detected
            </p>
          </div>
          <a href={buildReportDownloadUrl(analysis._id)} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">Download report</Button>
          </a>
        </div>

        {gapAnalysis?.coverage !== null && gapAnalysis?.coverage !== undefined && (
          <div className="flex items-center gap-5 rounded-xl border border-white/[0.06] p-4">
            <MatchGauge percentage={gapAnalysis.coverage} label="coverage" />
            <div>
              <p className="text-sm text-ink">
                Compared against <span className="font-medium">{gapAnalysis.targetLabel}</span>
              </p>
              <p className="mt-1 text-xs text-ink-muted">
                {gapAnalysis.matchedSkills.length} matched, {gapAnalysis.missingSkills.length} missing
              </p>
            </div>
          </div>
        )}

        {gapAnalysis && (gapAnalysis.matchedSkills.length > 0 || gapAnalysis.missingSkills.length > 0) && (
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wide text-ink-muted">Skill gap</h4>
            <div className="mt-2">
              <SkillBarChart matched={gapAnalysis.matchedSkills} missing={gapAnalysis.missingSkills} />
            </div>
          </div>
        )}

        <div>
          <h4 className="font-mono text-xs uppercase tracking-wide text-ink-muted">All detected skills</h4>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {extractedSkills.length > 0 ? (
              extractedSkills.map((skill) => <Badge key={skill} tone="path">{skill}</Badge>)
            ) : (
              <p className="text-sm text-ink-faint">No recognized skills found.</p>
            )}
          </div>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-wide text-ink-muted">Suggestions</h4>
          <ul className="mt-2 flex flex-col gap-1.5">
            {suggestions.map((suggestion) => (
              <li key={suggestion} className="flex items-start gap-1.5 text-sm text-ink-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-lume" />
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      </GlassPanel>
    </motion.div>
  );
}
