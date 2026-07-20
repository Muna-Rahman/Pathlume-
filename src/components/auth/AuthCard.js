import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { ConstellationBackground } from "@/components/ui/ConstellationBackground.js";

export function AuthCard({ eyebrow, title, subtitle, children, footer }) {
  return (
    <div className="relative flex min-h-[calc(100vh-140px)] items-center justify-center overflow-hidden px-4 py-16">
      <ConstellationBackground density={0.00005} className="absolute inset-0 h-full w-full opacity-40" />
      <GlassPanel className="relative w-full max-w-md p-8">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-2 font-display text-2xl font-semibold text-ink">{title}</h1>
        {subtitle && <p className="mt-1.5 text-sm text-ink-muted">{subtitle}</p>}

        <div className="mt-6">{children}</div>

        {footer && <div className="mt-6 border-t border-white/[0.06] pt-5 text-center text-sm text-ink-muted">{footer}</div>}
      </GlassPanel>
    </div>
  );
}
