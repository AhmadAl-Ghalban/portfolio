"use client";

import { Search } from "lucide-react";

import { PROJECT_CATEGORIES, PROJECT_CATEGORY_LABELS } from "@/entities/project";
import { cn } from "@/shared/lib";
import { Input } from "@/shared/ui";

import type { CategoryFilter } from "../model/use-project-filter";

type ProjectFilterBarProps = {
  category: CategoryFilter;
  onCategoryChange: (category: CategoryFilter) => void;
  query: string;
  onQueryChange: (query: string) => void;
};

const FILTERS: { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "All" },
  ...PROJECT_CATEGORIES.map((category) => ({
    value: category,
    label: PROJECT_CATEGORY_LABELS[category],
  })),
];

export function ProjectFilterBar({
  category,
  onCategoryChange,
  query,
  onQueryChange,
}: ProjectFilterBarProps) {
  return (
    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-1.5">
        {FILTERS.map((filter) => (
          <button
            key={filter.value}
            type="button"
            aria-pressed={category === filter.value}
            onClick={() => onCategoryChange(filter.value)}
            className={cn(
              "cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors",
              category === filter.value
                ? "border-transparent bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="relative sm:w-64">
        <Search
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search projects…"
          aria-label="Search projects"
          className="pl-9"
        />
      </div>
    </div>
  );
}
