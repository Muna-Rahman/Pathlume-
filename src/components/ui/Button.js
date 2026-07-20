"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils/cn.js";

const VARIANTS = {
  primary:
    "bg-lume-path text-void font-semibold shadow-glow hover:brightness-110 active:brightness-95",
  secondary:
    "bg-panel-light border border-white/10 text-ink hover:border-path/50 hover:text-path",
  ghost: "text-ink-muted hover:text-ink hover:bg-white/5",
  outline: "border border-white/15 text-ink hover:border-lume/60 hover:text-lume",
  danger: "bg-danger/15 text-danger border border-danger/30 hover:bg-danger/25",
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
    "inline-flex items-center justify-center whitespace-nowrap font-display tracking-wide transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none",
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
      <Link href={href} ref={ref} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      whileTap={{ scale: 0.97 }}
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </motion.button>
  );
});
