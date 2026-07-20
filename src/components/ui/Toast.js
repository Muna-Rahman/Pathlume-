"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils/cn.js";

const ToastContext = createContext(null);

let toastId = 0;

const ICONS = {
  success: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  error: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  info: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 7.2V11.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="5" r="0.9" fill="currentColor" />
    </svg>
  ),
};

const TONE_CLASSES = {
  success: "text-path",
  error: "text-danger",
  info: "text-nebula",
};

/**
 * App-wide toast notifications. Built in-house (Framer Motion + Context)
 * rather than adding a dependency, matching the platform's approved stack.
 * Mounted once in Providers so any client component can call useToast().
 */
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const dismiss = useCallback((id) => {
    setToasts((current) => current.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    ({ title, description, variant = "info", duration = 5000 } = {}) => {
      const id = ++toastId;
      setToasts((current) => [...current, { id, title, description, variant }]);
      if (duration > 0) {
        setTimeout(() => dismiss(id), duration);
      }
      return id;
    },
    [dismiss]
  );

  const value = useMemo(() => ({ toast, dismiss }), [toast, dismiss]);

  return (
    <ToastContext.Provider value={value}>
      {children}

      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex flex-col items-center gap-2 px-4 pb-6 sm:inset-x-auto sm:right-6 sm:items-end"
        aria-live="polite"
        aria-atomic="true"
      >
        <AnimatePresence initial={false}>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              role="status"
              layout
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96, transition: { duration: 0.15 } }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="glass-panel pointer-events-auto flex w-full max-w-sm items-start gap-3 px-4 py-3.5 shadow-glow"
            >
              <span className={cn("mt-0.5 shrink-0", TONE_CLASSES[t.variant] || TONE_CLASSES.info)}>
                {ICONS[t.variant] || ICONS.info}
              </span>
              <div className="min-w-0 flex-1">
                {t.title && <p className="font-display text-sm font-semibold text-ink">{t.title}</p>}
                {t.description && <p className="mt-0.5 text-xs text-ink-muted">{t.description}</p>}
              </div>
              <button
                type="button"
                onClick={() => dismiss(t.id)}
                aria-label="Dismiss notification"
                className="shrink-0 rounded-md p-1 text-ink-faint transition-colors hover:bg-white/5 hover:text-ink"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 2L10 10M10 2L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

/** Returns `{ toast, dismiss }`. Call `toast({ title, description, variant })` from any client component. */
export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within <ToastProvider>");
  }
  return ctx;
}
