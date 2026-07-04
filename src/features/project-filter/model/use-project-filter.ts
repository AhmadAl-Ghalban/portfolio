"use client";

import { useMemo, useState } from "react";

import type { Project, ProjectCategory } from "@/entities/project";

export type CategoryFilter = ProjectCategory | "all";

function matchesQuery(project: Project, normalizedQuery: string): boolean {
  if (!normalizedQuery) return true;
  const haystack = [project.title, project.tagline, project.description, ...project.stack]
    .join(" ")
    .toLowerCase();
  return haystack.includes(normalizedQuery);
}

export function useProjectFilter(projects: Project[]) {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return projects.filter(
      (project) =>
        (category === "all" || project.categories.includes(category)) &&
        matchesQuery(project, normalizedQuery),
    );
  }, [projects, category, query]);

  return { category, setCategory, query, setQuery, filtered };
}
