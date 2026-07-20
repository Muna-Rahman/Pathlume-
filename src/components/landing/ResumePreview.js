"use client";

import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { Badge } from "@/components/ui/Badge.js";
import { Button } from "@/components/ui/Button.js";

const HIGHLIGHTS = ["React", "Python", "SQL", "Figma", "Public Speaking"];

export function ResumePreview() {
  return (
    <section className="relative px-4 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Coming to your profile</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
            Upload your resume, we'll highlight what stands out
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
            Pathlume reads your resume alongside your profile and flags the skills that
            match what employers are actually looking for right now — so you know exactly
            what to lead with.
          </p>
          <Button href="/register" className="mt-6">
            Build your profile
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GlassPanel className="relative mx-auto max-w-sm p-6">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <div>
                <p className="font-display text-sm font-semibold text-ink">Nusrat Jahan</p>
                <p className="text-xs text-ink-faint">resume.pdf · scanned</p>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-path/15 text-path">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>

            <div className="mt-4 space-y-2">
              <div className="h-2 w-full rounded-full bg-white/[0.06]" />
              <div className="h-2 w-5/6 rounded-full bg-white/[0.06]" />
              <div className="h-2 w-4/6 rounded-full bg-white/[0.06]" />
            </div>

            <div className="mt-5">
              <p className="font-mono text-[11px] uppercase tracking-wide text-ink-muted">
                Matched skills
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {HIGHLIGHTS.map((skill) => (
                  <Badge key={skill} tone="path">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-xl border border-lume/20 bg-lume/[0.06] px-3 py-2.5">
              <span className="text-xs text-ink-muted">Match strength</span>
              <span className="font-mono text-sm font-semibold text-lume">87%</span>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}
