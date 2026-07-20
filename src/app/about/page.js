import { ConstellationBackground } from "@/components/ui/ConstellationBackground.js";
import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { Button } from "@/components/ui/Button.js";

export const metadata = {
  title: "About - Pathlume",
  description:
    "Pathlume matches students with internships and early-career opportunities worth applying to. Here's why we built it and how it works.",
};

const VALUES = [
  {
    title: "Signal over noise",
    body: "Instead of another endless job board, Pathlume ranks opportunities by how well they actually fit your skills, interests, and history - not just keywords.",
  },
  {
    title: "Honest about what's automated",
    body: "Our recommendation and resume-analysis tools are transparent, rule-based systems. We tell you exactly why something was matched, not just that it was.",
  },
  {
    title: "Built for the early career",
    body: "Internships, entry-level roles, and first jobs are a different search problem than senior hiring. We designed around that from day one.",
  },
];

const STEPS = [
  { step: "01", title: "Tell us about you", body: "Skills, interests, and the kind of role you're after." },
  { step: "02", title: "See your matches", body: "Ranked recommendations with a plain-language explanation for each one." },
  { step: "03", title: "Sharpen your resume", body: "Upload it and get a gap analysis against your profile or a specific listing." },
  { step: "04", title: "Apply with confidence", body: "Go in knowing exactly where you stand and what to highlight." },
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <ConstellationBackground density={0.00004} className="absolute inset-0 h-full w-full opacity-30" />

      <div className="relative mx-auto max-w-4xl px-4 py-12 md:py-16">
        <span className="eyebrow">About Pathlume</span>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink md:text-4xl">
          Lighting the path between students and the work that fits them
        </h1>
        <p className="mt-3 max-w-xl text-sm text-ink-muted md:text-base">
          Pathlume is a career and internship matchmaking platform built for students who are tired
          of scrolling through hundreds of listings that don't fit. We rank opportunities the way a
          good mentor would: by what actually matches your skills and goals.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {VALUES.map((value) => (
            <GlassPanel key={value.title} className="p-5">
              <h3 className="font-display text-base font-semibold text-ink">{value.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{value.body}</p>
            </GlassPanel>
          ))}
        </div>

        <div className="mt-14">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ink">From profile to offer</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {STEPS.map((item) => (
              <GlassPanel key={item.step} className="flex gap-4 p-5">
                <span className="font-mono text-xl text-path/70">{item.step}</span>
                <div>
                  <h3 className="font-display text-sm font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{item.body}</p>
                </div>
              </GlassPanel>
            ))}
          </div>
        </div>

        <GlassPanel className="relative mt-14 overflow-hidden p-8 text-center md:p-12">
          <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
            Ready to find your next step?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink-muted">
            Create a free account and see your first recommendations in minutes.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/register">Get started</Button>
            <Button href="/explore" variant="secondary">
              Explore opportunities
            </Button>
          </div>
        </GlassPanel>
      </div>
    </div>
  );
}
