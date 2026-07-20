import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { Badge } from "@/components/ui/Badge.js";

export function SkillsList({ skills = [], tags = [] }) {
  if (skills.length === 0 && tags.length === 0) return null;

  return (
    <GlassPanel className="p-5">
      <h3 className="font-mono text-xs uppercase tracking-wide text-ink-muted">Skills &amp; focus areas</h3>

      {skills.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <Badge key={skill} tone="path">
              {skill}
            </Badge>
          ))}
        </div>
      )}

      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag} tone="nebula">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </GlassPanel>
  );
}
