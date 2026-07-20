"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel.js";

const STATS = [
  { value: 1200, suffix: "+", label: "Active opportunities" },
  { value: 340, suffix: "+", label: "Partner companies" },
  { value: 18500, suffix: "+", label: "Students matched" },
  { value: 92, suffix: "%", label: "Would recommend" },
];

function CountUp({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Statistics() {
  return (
    <section className="relative px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <GlassPanel className="grid grid-cols-2 gap-8 p-8 md:grid-cols-4 md:p-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-display text-3xl font-semibold text-ink md:text-4xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink-muted">{stat.label}</p>
            </motion.div>
          ))}
        </GlassPanel>
      </div>
    </section>
  );
}
