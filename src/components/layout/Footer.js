import Link from "next/link";

const COLUMNS = [
  {
    title: "Platform",
    links: [
      { href: "/explore", label: "Explore opportunities" },
      { href: "/#how-it-works", label: "How it works" },
      { href: "/#categories", label: "Categories" },
    ],
  },
  {
    title: "Account",
    links: [
      { href: "/login", label: "Log in" },
      { href: "/register", label: "Create account" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/#faq", label: "FAQ" },
      { href: "/contact", label: "Contact us" },
      { href: "/#newsletter", label: "Newsletter" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/privacy", label: "Privacy policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <div className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lume-path text-void">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 13 L7 4 L10 9 L14 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="14" cy="2" r="1.4" fill="currentColor" />
                </svg>
              </span>
              Pathlume
            </div>
            <p className="mt-3 max-w-xs text-sm text-ink-muted">
              Lighting the path between students and the internships and careers that actually
              fit them.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h4 className="font-mono text-xs uppercase tracking-wide text-ink-muted">{column.title}</h4>
              <ul className="mt-3 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-ink-muted transition-colors hover:text-path">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-ink-faint md:flex-row">
          <p>© {new Date().getFullYear()} Pathlume. All paths lead somewhere.</p>
          <p className="font-mono">Built for students, by students.</p>
        </div>
      </div>
    </footer>
  );
}
