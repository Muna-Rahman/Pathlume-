import { cn } from "@/lib/utils/cn.js";

export function GlassPanel({ children, className, hover = false, as: Tag = "div", ...props }) {
  return (
    <Tag className={cn("glass-panel", hover && "glass-panel-hover", className)} {...props}>
      {children}
    </Tag>
  );
}
