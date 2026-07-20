import { cn } from "@/lib/utils/cn.js";

export function Pagination({ meta, onPageChange }) {
  if (!meta || meta.totalPages <= 1) return null;

  const pages = Array.from({ length: meta.totalPages }, (_, i) => i + 1).filter(
    (p) => p === 1 || p === meta.totalPages || Math.abs(p - meta.page) <= 1
  );

  return (
    <nav className="flex items-center justify-center gap-2 pt-4" aria-label="Pagination">
      <button
        onClick={() => onPageChange(meta.page - 1)}
        disabled={!meta.hasPrevPage}
        className="rounded-lg border border-white/10 px-3 py-2 text-sm text-ink-muted transition-colors hover:border-path/50 hover:text-path disabled:opacity-30"
      >
        Prev
      </button>

      {pages.map((page, idx) => {
        const prevPage = pages[idx - 1];
        const showGap = prevPage && page - prevPage > 1;
        return (
          <span key={page} className="flex items-center gap-2">
            {showGap && <span className="text-ink-faint">...</span>}
            <button
              onClick={() => onPageChange(page)}
              className={cn(
                "h-9 w-9 rounded-lg font-mono text-sm transition-colors",
                page === meta.page
                  ? "bg-lume-path text-void font-semibold"
                  : "text-ink-muted hover:bg-white/5 hover:text-ink"
              )}
            >
              {page}
            </button>
          </span>
        );
      })}

      <button
        onClick={() => onPageChange(meta.page + 1)}
        disabled={!meta.hasNextPage}
        className="rounded-lg border border-white/10 px-3 py-2 text-sm text-ink-muted transition-colors hover:border-path/50 hover:text-path disabled:opacity-30"
      >
        Next
      </button>
    </nav>
  );
}
