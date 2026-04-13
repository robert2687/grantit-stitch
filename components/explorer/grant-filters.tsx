"use client";

import { useState } from "react";

const initialFilters = ["AI Ethics", "Cloud Infra"];

export function GrantFilters() {
  const [filters, setFilters] = useState(initialFilters);

  const removeFilter = (filter: string) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  const clearAll = () => {
    setFilters([]);
  };

  return (
    <section className="px-8 py-6">
      <div className="flex flex-wrap items-center gap-3">
        <button className="flex items-center gap-2 rounded-lg bg-primary-container px-4 py-2 text-sm font-semibold text-on-primary">
          <span className="material-symbols-outlined text-sm">tune</span>
          Refine Search
        </button>
        <div className="mx-2 h-6 w-[1px] bg-outline-variant/30"></div>
        {filters.map((filter) => (
          <span
            key={filter}
            className="flex items-center gap-2 rounded-full bg-surface-container-highest px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-on-primary-fixed-variant"
          >
            {filter}
            <button onClick={() => removeFilter(filter)}>
              <span className="material-symbols-outlined cursor-pointer text-xs">
                close
              </span>
            </button>
          </span>
        ))}
        <span className="flex items-center gap-2 rounded-full border border-primary/10 bg-surface-container-highest px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-on-primary-fixed-variant">
          Fit Score &gt; 80%
        </span>
        <button
          onClick={clearAll}
          className="ml-auto text-xs font-bold uppercase tracking-widest text-secondary hover:underline"
        >
          Clear All Filters
        </button>
      </div>
    </section>
  );
}
