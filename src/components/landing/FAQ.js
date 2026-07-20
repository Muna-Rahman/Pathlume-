"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel.js";

const FAQS = [
  {
    q: "Is Pathlume free for students?",
    a: "Yes. Creating a profile, searching opportunities, and applying is completely free for students, always.",
  },
  {
    q: "How are opportunities matched to my profile?",
    a: "We score every active listing against your skills, interests, preferred location, and preferred type, then rank them so the best fits show up first.",
  },
  {
    q: "Can I post an opportunity as an employer?",
    a: "Yes — create an employer account, and you'll get access to a management dashboard for posting, editing, and closing listings.",
  },
  {
    q: "Can I remove a review I left?",
    a: "You can delete your own reviews at any time from the opportunity page. Reviews from other students can't be edited or removed by you.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <GlassPanel className="overflow-hidden">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-sm font-medium text-ink md:text-base">{item.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-lume"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 text-sm leading-relaxed text-ink-muted">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassPanel>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative px-4 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="eyebrow">Questions</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
            Frequently asked
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
