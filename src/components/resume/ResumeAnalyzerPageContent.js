"use client";

import { useState } from "react";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute.js";
import { ResumeUploadForm } from "@/components/resume/ResumeUploadForm.js";
import { AnalysisResult } from "@/components/resume/AnalysisResult.js";
import { AnalysisHistory } from "@/components/resume/AnalysisHistory.js";
import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { ROLES } from "@/lib/constants/roles.js";

function ResumeAnalyzerContent() {
  const [activeAnalysis, setActiveAnalysis] = useState(null);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <span className="eyebrow">Resume analyzer</span>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink">See how your resume stacks up</h1>
      <p className="mt-2 max-w-xl text-sm text-ink-muted">
        Upload a PDF and we'll pull out your skills, flag gaps against your profile, and suggest what to improve.
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_280px]">
        <div className="flex flex-col gap-6">
          <GlassPanel className="p-5">
            <ResumeUploadForm onAnalyzed={setActiveAnalysis} />
          </GlassPanel>

          {activeAnalysis && <AnalysisResult analysis={activeAnalysis} />}
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wide text-ink-muted">History</h3>
          <div className="mt-3">
            <AnalysisHistory onSelect={setActiveAnalysis} activeId={activeAnalysis?._id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ResumeAnalyzerPageContent() {
  return (
    <ProtectedRoute allowedRoles={[ROLES.STUDENT]}>
      <ResumeAnalyzerContent />
    </ProtectedRoute>
  );
}
