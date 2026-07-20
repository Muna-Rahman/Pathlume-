import { ContactForm } from "@/components/contact/ContactForm.js";
import { ConstellationBackground } from "@/components/ui/ConstellationBackground.js";
import { GlassPanel } from "@/components/ui/GlassPanel.js";

export const metadata = {
  title: "Contact - Pathlume",
  description:
    "Get in touch with the Pathlume team - questions, feedback, and partnership requests all welcome.",
};

const CHANNELS = [
  {
    label: "General questions",
    detail: "Use the form and we'll route it to the right person.",
  },
  {
    label: "For employers",
    detail: "Ask about posting opportunities or bulk listings.",
  },
  {
    label: "Bug reports",
    detail: "Tell us what broke and what you expected instead.",
  },
];

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <ConstellationBackground density={0.00004} className="absolute inset-0 h-full w-full opacity-30" />
      <div className="relative mx-auto max-w-4xl px-4 py-12 md:py-16">
        <span className="eyebrow">Contact</span>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink md:text-4xl">
          Talk to the Pathlume team
        </h1>
        <p className="mt-2 max-w-lg text-sm text-ink-muted">
          Question about a listing, feedback on the platform, or something else entirely - send it
          over and we'll get back to you.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_260px]">
          <ContactForm />

          <div className="flex flex-col gap-3">
            {CHANNELS.map((channel) => (
              <GlassPanel key={channel.label} className="p-4">
                <h3 className="font-display text-sm font-semibold text-ink">{channel.label}</h3>
                <p className="mt-1 text-xs text-ink-muted">{channel.detail}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
