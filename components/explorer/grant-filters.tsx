"use client";

import { useState } from "react";

interface GrantFiltersProps {
  onSearch?: (query: string) => void;
  onRegionChange?: (region: string) => void;
}

const regions = ["EU", "US", "UK", "Asia"];

export function GrantFilters({ onSearch, onRegionChange }: GrantFiltersProps) {
  const [filters, setFilters] = useState<string[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const removeFilter = (filter: string) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  const handleSearch = (value: string) => {
    setSearchInput(value);
    onSearch?.(value);
  };

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region === selectedRegion ? "" : region);
    onRegionChange?.(region === selectedRegion ? "" : region);
  };

  const clearAll = () => {
    setFilters([]);
    setSearchInput("");
    setSelectedRegion("");
    onSearch?.("");
    onRegionChange?.("");
  };

  return (
    <section className="px-8 py-6 border-b border-outline-variant/20">
      {/* Search Input */}
      <div className="mb-4 flex gap-3">
        <input
          type="text"
          placeholder="Search grants by name or theme..."
          value={searchInput}
          onChange={(e) => handleSearch(e.target.value)}
          className="flex-1 rounded-lg bg-surface-container px-4 py-2 text-sm outline-none border border-outline-variant/20 focus:border-primary"
        />
        <button className="flex items-center gap-2 rounded-lg bg-primary-container px-4 py-2 text-sm font-semibold text-on-primary">
          <span className="material-symbols-outlined text-sm">tune</span>
          Refine
        </button>
      </div>

      {/* Region Filter */}
      <div className="mb-4">
        <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Regions</p>
        <div className="flex flex-wrap gap-2">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => handleRegionChange(region)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-colors ${
                selectedRegion === region
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-highest text-on-primary-fixed-variant border border-outline-variant/20 hover:bg-surface-container-highest/80"
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Applied Filters */}
      {(filters.length > 0 || searchInput || selectedRegion) && (
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-outline-variant/20">
          {selectedRegion && (
            <span className="flex items-center gap-2 rounded-full bg-surface-container-highest px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-on-primary-fixed-variant">
              Region: {selectedRegion}
              <button onClick={() => handleRegionChange(selectedRegion)}>
                <span className="material-symbols-outlined cursor-pointer text-xs">close</span>
              </button>
            </span>
          )}
          {filters.map((filter) => (
            <span
              key={filter}
              className="flex items-center gap-2 rounded-full bg-surface-container-highest px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-on-primary-fixed-variant"
            >
              {filter}
              <button onClick={() => removeFilter(filter)}>
                <span className="material-symbols-outlined cursor-pointer text-xs">close</span>
              </button>
            </span>
          ))}
          <button
            onClick={clearAll}
            className="ml-auto text-xs font-bold uppercase tracking-widest text-secondary hover:underline"
          >
            Clear All
          </button>
        </div>
      )}
    </section>
  );
}
