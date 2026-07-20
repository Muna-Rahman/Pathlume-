# Pathlume Client — Phase 3 (Frontend Foundation)

## Run
```bash
npm install
cp .env.local.example .env.local   # point at your pathlume-server instance
npm run dev
```
Requires the Phase 1/2 `pathlume-server` running (default `http://localhost:5000`).

## Design
Dark glass UI with a "constellation path" signature motif — glowing nodes
connected by light (literally *Path* + *Lume*), rendered as an animated
canvas background and echoed in the resume-match panel and gallery
placeholders. Palette: void `#0A0C16`, panel `#12162C`, lume `#F5B860`,
path `#4FD8C4`, nebula `#B892F5`. Type: Space Grotesk (display), Inter
(body), JetBrains Mono (data/labels).

## What's here
- **Landing page** (`/`): Hero, How It Works, Featured Opportunities (live
  data), Categories, Statistics, Resume Preview, Testimonials, FAQ, Newsletter
- **Auth**: `/login`, `/register` — email/password, Google OAuth, demo login,
  all via React Hook Form; `ProtectedRoute`/`useRequireAuth` as reusable
  foundation for future role-gated pages
- **Explore** (`/explore`): URL-driven search, filters, sort, pagination
- **Details** (`/opportunities/[id]`): gallery, skills, company panel,
  reviews (create/delete-own), related opportunities, save button

## Verified
`npm run build` was run end-to-end in a sandboxed environment (fonts
temporarily stubbed to work around a network-egress restriction that
blocks `fonts.googleapis.com` specifically in that sandbox — this does
not affect your real dev environment). All 7 routes compiled and
generated successfully with zero errors.
