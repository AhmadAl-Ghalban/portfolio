"use client";

import { SearchX } from "lucide-react";

import { ProjectCard, projects } from "@/entities/project";
import { ProjectFilterBar, useProjectFilter } from "@/features/project-filter";
import { Button } from "@/shared/ui";

export function ProjectsExplorer() {
  const { category, setCategory, query, setQuery, filtered } = useProjectFilter([...projects]);

  return (
    <div>
      <ProjectFilterBar
        category={category}
        onCategoryChange={setCategory}
        query={query}
        onQueryChange={setQuery}
      />

      <p aria-live="polite" className="sr-only">
        {filtered.length} projects shown
      </p>

      {filtered.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              detailHref={`/projects/${project.slug}`}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 rounded-xl border border-dashed py-20 text-center">
          <SearchX className="size-8 text-muted-foreground" aria-hidden />
          <div>
            <p className="font-medium">No projects match</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try a different search term or category.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
          >
            Reset filters
          </Button>
        </div>
      )}
    </div>
  );
}
