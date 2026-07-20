import Link from "next/link";
import { Button } from "@/components/ui/Button.js";
import { ConstellationBackground } from "@/components/ui/ConstellationBackground.js";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
      <ConstellationBackground density={0.00005} className="absolute inset-0 h-full w-full opacity-40" />
      <div className="relative">
        <p className="font-mono text-sm text-path">404</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
          This path doesn't lead anywhere
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm text-ink-muted">
          The page you're looking for moved, closed, or never existed.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button href="/">Back home</Button>
          <Button href="/explore" variant="secondary">
            Explore opportunities
          </Button>
        </div>
      </div>
    </div>
  );
}
