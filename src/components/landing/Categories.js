"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { CATEGORY_TAGS } from "@/lib/constants/opportunityTypes.js";

const ICONS = {
  code: "M4 5l-3 6 3 6M13 5l3 6-3 6M9 4l-2 15",
  palette: "M9 2a7 7 0 100 14c1 0 1.5-.5 1.5-1.2 0-.6-.5-1-.5-1.6 0-.7.6-1.2 1.3-1.2h1.4A3.3 3.3 0 0016 8.7 6.8 6.8 0 009 2z",
  megaphone: "M2 8v2l2 .3v3.4L2 14v2l5-1 7 3V6L7 9 2 8z",
  chart: "M2 15h14M4 15V9M8 15V4M12 15v-7",
  compass: "M9 2a7 7 0 100 14A7 7 0 009 2zM11 6l-3 3-1.5 4.5L11 10l1.5-4.5z",
  gear: "M9 6a3 3 0 100 6 3 3 0 000-6zM9 1v2M9 15v2M3 9H1M17 9h-2M4.2 4.2l1.4 1.4M12.4 12.4l1.4 1.4M4.2 13.8l1.4-1.4M12.4 5.6l1.4-1.4",
};

export function Categories() {
  return (
    <section id="categories" className="relative px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow">Browse by field</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
            Find the category that fits where you're headed
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {CATEGORY_TAGS.map((category, i) => (
            <motion.div
              key={category.value}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link href={`/explore?category=${category.value}`}>
                <GlassPanel hover className="flex flex-col items-center gap-2.5 px-3 py-6 text-center">
                  <svg width="22" height="22" viewBox="0 0 18 18" fill="none" className="text-path">
                    <path d={ICONS[category.icon]} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-xs font-medium text-ink-muted">{category.label}</span>
                </GlassPanel>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
