import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { formatDate, formatStipend, titleCase } from "@/lib/utils/format.js";

export function CompanyPanel({ opportunity }) {
  const { companyName, type, location, remote, stipend, deadline, applicationUrl } = opportunity;

  const rows = [
    ["Company", companyName || "Confidential"],
    ["Type", titleCase(type)],
    ["Location", remote ? `Remote (${location})` : location],
    ["Stipend", formatStipend(stipend)],
    ["Deadline", formatDate(deadline)],
  ];

  return (
    <GlassPanel className="flex flex-col gap-4 p-5">
      <h3 className="font-mono text-xs uppercase tracking-wide text-ink-muted">Details</h3>
      <dl className="flex flex-col gap-3">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-3 text-sm">
            <dt className="text-ink-muted">{label}</dt>
            <dd className="text-right font-medium text-ink">{value}</dd>
          </div>
        ))}
      </dl>

      {applicationUrl && (
        <a
          href={applicationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center justify-center rounded-xl bg-lume-path px-5 py-3 text-sm font-semibold text-void shadow-glow transition-transform hover:scale-[1.01]"
        >
          Apply now
        </a>
      )}
    </GlassPanel>
  );
}
