"use client";

import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { StarRating } from "@/components/ui/StarRating.js";

const TESTIMONIALS = [
  {
    quote:
      "I applied to a dozen internships through Pathlume's recommendations instead of two hundred random ones. The one I took fit better than I expected.",
    name: "Nusrat J.",
    role: "CSE undergraduate, Sylhet",
    rating: 5,
  },
  {
    quote:
      "The reviews from past interns told me more about the actual work than the job post did. That's what made me apply.",
    name: "Rafiul A.",
    role: "BBA student, Dhaka",
    rating: 5,
  },
  {
    quote:
      "Posting a listing took minutes, and the candidates who applied were noticeably more relevant than on other boards.",
    name: "Farah Textiles HR",
    role: "Employer partner",
    rating: 4,
  },
];

export function Testimonials() {
  return (
    <section className="relative px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow">From the community</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
            People who found their footing here
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <GlassPanel className="flex h-full flex-col gap-4 p-6">
                <StarRating value={t.rating} size={14} />
                <p className="flex-1 text-sm leading-relaxed text-ink-muted">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-sm font-medium text-ink">{t.name}</p>
                  <p className="text-xs text-ink-faint">{t.role}</p>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
