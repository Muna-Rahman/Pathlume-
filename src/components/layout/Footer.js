import Link from "next/link";

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
    icon: (
      <path d="M4.98 3.5a2 2 0 11-.02 4 2 2 0 01.02-4zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.2 8.65 22 11 22 14.1V21h-4v-6.1c0-1.46-.03-3.35-2.05-3.35-2.06 0-2.38 1.6-2.38 3.25V21h-4V9z" />
    ),
  },
  {
    href: "https://twitter.com/",
    label: "X / Twitter",
    icon: (
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.9L4.8 22H1.7l8.2-9.4L1 2h7l4.9 6.3L18.9 2zm-1.2 18h1.9L7.4 4h-2l12.3 16z" />
    ),
  },
  {
    href: "https://www.instagram.com/",
    label: "Instagram",
    icon: (
      <path d="M12 2.2c2.7 0 3 0 4.1.06 1 .05 1.6.2 2 .35.5.2.9.44 1.3.83.4.4.63.8.83 1.3.16.4.3 1 .35 2C20.75 8 20.75 8.3 20.75 12s0 3-.06 4.1c-.05 1-.2 1.6-.35 2a3.5 3.5 0 01-.83 1.3c-.4.4-.8.63-1.3.83-.4.16-1 .3-2 .35-1.1.06-1.4.06-4.1.06s-3 0-4.1-.06c-1-.05-1.6-.2-2-.35a3.5 3.5 0 01-1.3-.83 3.5 3.5 0 01-.83-1.3c-.16-.4-.3-1-.35-2C3.25 15.3 3.25 15 3.25 12s0-3 .06-4.1c.05-1 .2-1.6.35-2 .2-.5.44-.9.83-1.3.4-.4.8-.63 1.3-.83.4-.16 1-.3 2-.35C9 2.25 9.3 2.2 12 2.2zm0 1.8c-2.65 0-2.96 0-4 .06-.87.04-1.34.18-1.66.3-.42.16-.72.36-1.03.68-.32.31-.52.61-.68 1.03-.12.32-.26.79-.3 1.66-.06 1.04-.06 1.35-.06 4s0 2.96.06 4c.04.87.18 1.34.3 1.66.16.42.36.72.68 1.03.31.32.61.52 1.03.68.32.12.79.26 1.66.3 1.04.06 1.35.06 4 .06s2.96 0 4-.06c.87-.04 1.34-.18 1.66-.3.42-.16.72-.36 1.03-.68.32-.31.52-.61.68-1.03.12-.32.26-.79.3-1.66.06-1.04.06-1.35.06-4s0-2.96-.06-4c-.04-.87-.18-1.34-.3-1.66a2.7 2.7 0 00-.68-1.03 2.7 2.7 0 00-1.03-.68c-.32-.12-.79-.26-1.66-.3-1.04-.06-1.35-.06-4-.06zm0 3.6a4.4 4.4 0 110 8.8 4.4 4.4 0 010-8.8zm0 1.8a2.6 2.6 0 100 5.2 2.6 2.6 0 000-5.2zm4.6-1.98a1.03 1.03 0 110 2.06 1.03 1.03 0 010-2.06z" />
    ),
  },
];

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

            <div className="mt-4 flex flex-col gap-1.5 text-sm text-ink-muted">
              <a href="mailto:hello@pathlume.dev" className="transition-colors hover:text-path">
                hello@pathlume.dev
              </a>
              <a href="tel:+8801700000000" className="transition-colors hover:text-path">
                +880 1700-000000
              </a>
            </div>

            <div className="mt-4 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-ink-muted transition-colors hover:border-path/50 hover:text-path"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
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