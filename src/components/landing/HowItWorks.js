"use client";

import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel.js";

const STEPS = [
  {
    n: "01",
    title: "Map your path",
    description:
      "Tell us your skills, interests, and the kind of role and location you're after. Takes about two minutes.",
  },
  {
    n: "02",
    title: "Follow the light",
    description:
      "We surface opportunities scored against your profile — ranked by how well they actually fit, not how recently they were posted.",
  },
  {
    n: "03",
    title: "Apply with confidence",
    description:
      "Read verified reviews from past applicants, check the fine print, and apply directly — all from one place.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
            Three steps between you and your next opportunity
          </h2>
        </div>

        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassPanel hover className="h-full p-6">
                <span className="font-mono text-sm text-path">{step.n}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
