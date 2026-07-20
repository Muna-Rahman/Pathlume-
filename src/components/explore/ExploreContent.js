"use client";

import { useCallback, useMemo } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useOpportunities } from "@/lib/hooks/useOpportunities.js";
import { SearchBar } from "@/components/explore/SearchBar.js";
import { OpportunityFilters } from "@/components/explore/OpportunityFilters.js";
import { SortDropdown } from "@/components/explore/SortDropdown.js";
import { OpportunityGrid } from "@/components/explore/OpportunityGrid.js";
import { Pagination } from "@/components/ui/Pagination.js";

const DEFAULT_SORT = "createdAt:desc";

export function ExploreContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filters = useMemo(() => {
    const [sortBy, sortOrder] = (searchParams.get("sort") || DEFAULT_SORT).split(":");
    return {
      q: searchParams.get("q") || "",
      type: searchParams.get("type") || undefined,
      location: searchParams.get("location") || undefined,
      remote: searchParams.get("remote") || undefined,
      page: Number(searchParams.get("page")) || 1,
      limit: 9,
      sortBy,
      sortOrder,
    };
  }, [searchParams]);

  const updateParams = useCallback(
    (patch, { resetPage = true } = {}) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(patch).forEach(([key, value]) => {
        if (value === undefined || value === "") params.delete(key);
        else params.set(key, value);
      });

      if (resetPage) params.delete("page");

      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams]
  );

  const { data, isLoading, isError } = useOpportunities(filters);

  const handleReset = () => router.push(pathname);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="eyebrow">Explore</span>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink md:text-4xl">
          Find your next opportunity
        </h1>
        <p className="mt-2 text-sm text-ink-muted">
          {data?.meta ? `${data.meta.total} opportunities match your search` : "Search internships, jobs, and more"}
        </p>
      </motion.div>

      <div className="mt-8 flex flex-col gap-3 md:flex-row">
        <SearchBar value={filters.q} onChange={(q) => updateParams({ q })} />
        <SortDropdown
          value={`${filters.sortBy}:${filters.sortOrder}`}
          onChange={(sort) => updateParams({ sort }, { resetPage: false })}
        />
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-[240px_1fr]">
        <aside className="md:sticky md:top-24 md:self-start">
          <OpportunityFilters filters={filters} onChange={updateParams} onReset={handleReset} />
        </aside>

        <div className="flex flex-col gap-8">
          <OpportunityGrid
            opportunities={data?.opportunities}
            isLoading={isLoading}
            isError={isError}
            onReset={handleReset}
          />
          <Pagination meta={data?.meta} onPageChange={(page) => updateParams({ page }, { resetPage: false })} />
        </div>
      </div>
    </div>
  );
}
