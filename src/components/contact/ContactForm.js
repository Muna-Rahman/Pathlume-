"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/Input.js";
import { Textarea } from "@/components/ui/Select.js";
import { Button } from "@/components/ui/Button.js";
import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { useToast } from "@/components/ui/Toast.js";
import { useContactMutation } from "@/lib/hooks/useContact.js";

export function ContactForm() {
  const { toast } = useToast();
  const submit = useContactMutation();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ defaultValues: { name: "", email: "", subject: "", message: "" } });

  const onSubmit = async (values) => {
    try {
      await submit.mutateAsync(values);
      toast({
        title: "Message sent",
        description: "Thanks for reaching out - we'll get back to you soon.",
        variant: "success",
      });
      reset();
    } catch (err) {
      const message = err.message || "Could not send your message. Please try again.";
      setError("root", { message });
      toast({ title: "Message not sent", description: message, variant: "error" });
    }
  };

  if (isSubmitSuccessful && !submit.isError) {
    return (
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <GlassPanel className="flex flex-col items-center gap-2 p-8 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-path/15 text-path">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M5 11.5L9.2 15.5L17 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <h3 className="font-display text-lg font-semibold text-ink">Message received</h3>
          <p className="max-w-sm text-sm text-ink-muted">
            Thanks for writing in - we read every message and typically reply within a couple of business days.
          </p>
          <Button variant="secondary" size="sm" className="mt-2" onClick={() => reset({ name: "", email: "", subject: "", message: "" }, { keepIsSubmitSuccessful: false })}>
            Send another message
          </Button>
        </GlassPanel>
      </motion.div>
    );
  }

  return (
    <GlassPanel className="p-6 md:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Your name"
            placeholder="Jordan Rahman"
            error={errors.name?.message}
            {...register("name", {
              required: "Name is required",
              minLength: { value: 2, message: "Name is too short" },
            })}
          />
          <Input
            label="Email"
            type="email"
            placeholder="you@university.edu"
            error={errors.email?.message}
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
            })}
          />
        </div>
        <Input
          label="Subject (optional)"
          placeholder="What's this about?"
          {...register("subject")}
        />
        <Textarea
          label="Message"
          placeholder="Tell us what's on your mind..."
          error={errors.message?.message}
          {...register("message", {
            required: "Message is required",
            minLength: { value: 10, message: "Add a bit more detail (10+ characters)" },
          })}
        />

        {errors.root && <p className="text-sm text-danger">{errors.root.message}</p>}

        <Button type="submit" className="mt-1 self-start" loading={isSubmitting}>
          Send message
        </Button>
      </form>
    </GlassPanel>
  );
}
