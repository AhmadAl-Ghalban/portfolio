import { ExternalLink, Package, Star } from "lucide-react";
import Link from "next/link";

import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  GithubIcon,
} from "@/shared/ui";

import type { Project } from "../model/types";
import { ProjectArt } from "./project-art";

const MAX_STACK_BADGES = 5;

type ProjectCardProps = {
  project: Project;
  /** When set, the card title links to the project's detail page. */
  detailHref?: string;
};

function ProjectCard({ project, detailHref }: ProjectCardProps) {
  return (
    <Card className="group relative flex h-full flex-col transition-all hover:-translate-y-0.5 hover:shadow-md">
      <CardHeader>
        <ProjectArt title={project.title} hue={project.accentHue} className="mb-4" />
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-lg">
            {detailHref ? (
              <Link
                href={detailHref}
                className="after:absolute after:inset-0 after:rounded-xl focus-visible:after:ring-2"
              >
                {project.title}
              </Link>
            ) : (
              project.title
            )}
          </CardTitle>
          <span className="shrink-0 font-mono text-xs text-muted-foreground">{project.year}</span>
        </div>
        <CardDescription>{project.tagline}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, MAX_STACK_BADGES).map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
          {project.stack.length > MAX_STACK_BADGES ? (
            <Badge variant="outline">+{project.stack.length - MAX_STACK_BADGES}</Badge>
          ) : null}
        </div>
        <div className="relative z-10 flex items-center gap-4">
          {project.links.repo ? (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-4" aria-hidden />
              Code
            </a>
          ) : null}
          {project.links.npm ? (
            <a
              href={project.links.npm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Package className="size-4" aria-hidden />
              npm
            </a>
          ) : null}
          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ExternalLink className="size-4" aria-hidden />
              Live
            </a>
          ) : null}
          {project.kind === "professional" && !project.links.repo ? (
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <Star className="size-4" aria-hidden />
              Client work
            </span>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

export { ProjectCard };
