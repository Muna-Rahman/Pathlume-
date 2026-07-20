"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { Button } from "@/components/ui/Button.js";
import { Input } from "@/components/ui/Input.js";
import { AuroraOrbs } from "@/components/ui/AnimatedGradientText.js";

/**
 * No newsletter endpoint exists on the backend yet (out of scope for
 * this phase), so submission resolves locally and shows a confirmation
 * state. Swapping in a real mutation later is a one-line change.
 */
export function Newsletter() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm();

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    reset();
  };

  return (
    <section id="newsletter" className="relative px-4 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <GlassPanel className="relative overflow-hidden p-8 text-center md:p-14">
          <AuroraOrbs />
          <div className="relative">
            <span className="eyebrow">Stay lit</span>
            <h2 className="mx-auto mt-3 max-w-lg font-display text-3xl font-semibold text-ink md:text-4xl">
              New opportunities, straight to your inbox
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-ink-muted">
              One email a week. No spam, unsubscribe whenever.
            </p>

            {isSubmitSuccessful ? (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 font-mono text-sm text-path"
              >
                You're on the list. Watch your inbox.
              </motion.p>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
                noValidate
              >
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="you@university.edu"
                    aria-label="Email address"
                    error={errors.email?.message}
                    {...register("email", {
                      required: "Enter your email to subscribe",
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                    })}
                  />
                </div>
                <Button type="submit" loading={isSubmitting} className="shrink-0">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
