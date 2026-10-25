"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils/cn.js";

// Chunky "carved button" look: bevelled highlight on top, solid lip underneath.
const VARIANTS = {
  primary:
    "bg-lume-path text-void font-bold border-2 border-[#5A3A14] shadow-glow hover:brightness-110",
  secondary:
    "bg-gradient-to-b from-panel-light to-panel text-ink font-semibold border-2 border-lume-dim shadow-[inset_0_1px_0_rgba(255,222,160,0.18),0_3px_0_rgba(0,0,0,0.5)] hover:border-lume hover:text-lume-soft",
  ghost: "text-ink-muted font-semibold hover:text-lume-soft hover:bg-ink/5",
  outline:
    "border-2 border-lume-dim text-lume-soft font-semibold hover:border-lume hover:bg-lume/10",
  danger:
    "bg-gradient-to-b from-[#D9644F] to-[#A13E2F] text-ink font-semibold border-2 border-[#5A1F17] shadow-[inset_0_1px_0_rgba(255,200,180,0.4),0_3px_0_#5A1F17] hover:brightness-110",
};

const SIZES = {
  sm: "text-sm px-3.5 py-1.5 rounded-lg gap-1.5",
  md: "text-sm px-5 py-2.5 rounded-xl gap-2",
  lg: "text-base px-7 py-3.5 rounded-xl gap-2.5",
};

/**
 * Shared button used across the whole app. Renders a Next <Link> when
 * `href` is passed, otherwise a real <button>, so it works for both
 * navigation and actions without callers needing two components.
 */
export const Button = forwardRef(function Button(
  { children, variant = "primary", size = "md", className, href, disabled, loading, type = "button", ...props },
  ref
) {
  const classes = cn(
    "inline-flex items-center justify-center whitespace-nowrap font-display tracking-wide transition-[filter,background-color,border-color,color] duration-150 disabled:opacity-50 disabled:pointer-events-none",
    VARIANTS[variant],
    SIZES[size],
    className
  );

  const content = (
    <>
      {loading && (
        <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} ref={ref} className={cn(classes, "active:translate-y-0.5")} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      whileTap={{ y: 2 }}
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </motion.button>
  );
});
