"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button.js";
import { GradientText } from "@/components/ui/AnimatedGradientText.js";
import { ConstellationBackground } from "@/components/ui/ConstellationBackground.js";
import { GlassPanel } from "@/components/ui/GlassPanel.js";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-14 md:pb-28 md:pt-20">
      <ConstellationBackground className="absolute inset-0 h-full w-full opacity-70" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow inline-flex items-center gap-2 rounded-full border border-white/10 bg-void/60 px-3 py-1 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-path animate-pulse-node" />
          Now matching students in Bangladesh &amp; beyond
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-display text-4xl font-semibold leading-tight text-ink md:text-6xl"
        >
          Every career starts as <GradientText>a path someone lit</GradientText> for you
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-base text-ink-muted md:text-lg"
        >
          Pathlume connects your skills, interests, and goals to internships and
          early-career roles that are actually worth your time — no more scrolling
          through hundreds of irrelevant listings.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button href="/explore" size="lg">
            Explore opportunities
          </Button>
          <Button href="/register" size="lg" variant="secondary">
            Create your profile
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14"
        >
          <GlassPanel className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-8 py-5">
            {[
              ["1,200+", "active listings"],
              ["340+", "partner companies"],
              ["92%", "match satisfaction"],
            ].map(([value, label]) => (
              <div key={label} className="text-center">
                <p className="font-display text-2xl font-semibold text-ink">{value}</p>
                <p className="font-mono text-xs uppercase tracking-wide text-ink-muted">{label}</p>
              </div>
            ))}
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}
