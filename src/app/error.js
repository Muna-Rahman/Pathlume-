"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button.js";
import { ConstellationBackground } from "@/components/ui/ConstellationBackground.js";

export default function Error({ error, reset }) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error("Pathlume route error:", error);
  }, [error]);

  return (
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
      <ConstellationBackground density={0.00005} className="absolute inset-0 h-full w-full opacity-40" />
      <div className="relative">
        <p className="font-mono text-sm text-danger">Something went wrong</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
          This path hit a snag
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm text-ink-muted">
          An unexpected error interrupted this page. You can try again, or head back to safer
          ground.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button onClick={() => reset()}>Try again</Button>
          <Button href="/" variant="secondary">
            Back home
          </Button>
        </div>
      </div>
    </div>
  );
}
