"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useCurrentUser, useAuthMutations } from "@/lib/hooks/useAuth.js";
import { Button } from "@/components/ui/Button.js";

// Always-visible real routes (not anchors) - Explore/About/Contact give logged-out
// visitors 3 distinct pages, and combined with role links below, logged-in users
// see 5+ distinct pages as required.
const NAV_LINKS = [
  { href: "/explore", label: "Explore" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/#faq", label: "FAQ" },
];

const getRoleLinks = (user) => {
  if (!user) return [];
  if (user.role === "employer") {
    return [
      { href: "/manage", label: "Manage" },
      { href: "/manage/new", label: "Post opportunity" },
      { href: "/profile", label: "Profile" },
    ];
  }
  return [
    { href: "/recommendations", label: "For you" },
    { href: "/resume-analyzer", label: "Resume" },
    { href: "/profile", label: "Profile" },
  ];
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { data: user, isLoading } = useCurrentUser();
  const { logout } = useAuthMutations();
  const roleLinks = getRoleLinks(user);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-xl2 border border-white/[0.08] bg-void/70 px-5 py-3 shadow-panel backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lume-path text-void">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 13 L7 4 L10 9 L14 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="14" cy="2" r="1.4" fill="currentColor" />
            </svg>
          </span>
          Pathlume
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm text-ink-muted transition-colors hover:text-path ${
                pathname === link.href ? "text-path" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          {roleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm text-ink-muted transition-colors hover:text-path ${
                pathname === link.href ? "text-path" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {isLoading ? (
            <div className="h-9 w-24 animate-pulse rounded-lg bg-panel-light" />
          ) : user ? (
            <>
              <span className="font-mono text-xs text-ink-muted">
                {user.role === "employer" ? "Employer" : "Student"} · {user.name || user.email}
              </span>
              <Button variant="ghost" size="sm" onClick={() => logout.mutate()}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" href="/login">
                Log in
              </Button>
              <Button variant="primary" size="sm" href="/register">
                Get started
              </Button>
            </>
          )}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-ink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            {open ? (
              <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M2 5H16M2 9H16M2 13H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-xl2 border border-white/[0.08] bg-void/90 p-4 backdrop-blur-xl md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-ink-muted hover:bg-white/5 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            {roleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-ink-muted hover:bg-white/5 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-3">
              {user ? (
                <Button variant="secondary" onClick={() => logout.mutate()}>
                  Log out
                </Button>
              ) : (
                <>
                  <Button variant="secondary" href="/login">
                    Log in
                  </Button>
                  <Button variant="primary" href="/register">
                    Get started
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}