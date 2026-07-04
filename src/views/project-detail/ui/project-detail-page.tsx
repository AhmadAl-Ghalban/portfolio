import {
  ArrowLeft,
  ExternalLink,
  Layers,
  Lightbulb,
  ListChecks,
  Package,
  Puzzle,
} from "lucide-react";
import Link from "next/link";

import { PROJECT_CATEGORY_LABELS, ProjectArt, type Project } from "@/entities/project";
import { Badge, Button, Container, GithubIcon, Reveal, Section } from "@/shared/ui";

type ProjectDetailPageProps = {
  project: Project;
};

type DetailBlock = {
  id: string;
  title: string;
  icon: typeof Layers;
  body: string;
};

function buildDetailBlocks(project: Project): DetailBlock[] {
  const blocks: DetailBlock[] = [];
  if (project.architecture) {
    blocks.push({
      id: "architecture",
      title: "Architecture",
      icon: Layers,
      body: project.architecture,
    });
  }
  if (project.challenges) {
    blocks.push({
      id: "challenges",
      title: "Challenges solved",
      icon: Puzzle,
      body: project.challenges,
    });
  }
  if (project.lessons) {
    blocks.push({
      id: "lessons",
      title: "Lessons learned",
      icon: Lightbulb,
      body: project.lessons,
    });
  }
  return blocks;
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const detailBlocks = buildDetailBlocks(project);

  return (
    <Section aria-labelledby="project-title">
      <Container className="max-w-4xl">
        <Reveal>
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden />
            All projects
          </Link>

          <ProjectArt title={project.title} hue={project.accentHue} className="h-56" />

          <div className="mt-8 flex flex-wrap items-center gap-2">
            {project.categories.map((category) => (
              <Badge key={category} variant="accent">
                {PROJECT_CATEGORY_LABELS[category]}
              </Badge>
            ))}
            <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
          </div>

          <h1 id="project-title" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-pretty text-muted-foreground">
            {project.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.repo ? (
              <Button asChild variant="outline">
                <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="size-4" aria-hidden />
                  Source code
                </a>
              </Button>
            ) : null}
            {project.links.npm ? (
              <Button asChild variant="outline">
                <a href={project.links.npm} target="_blank" rel="noopener noreferrer">
                  <Package aria-hidden />
                  npm package
                </a>
              </Button>
            ) : null}
            {project.links.live ? (
              <Button asChild>
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink aria-hidden />
                  View live
                </a>
              </Button>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col gap-10">
            <div>
              <h2 className="mb-3 text-xl font-semibold tracking-tight">Overview</h2>
              <p className="text-pretty text-muted-foreground">{project.description}</p>
            </div>

            <div>
              <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold tracking-tight">
                <ListChecks className="size-5 text-primary" aria-hidden />
                Key features
              </h2>
              <ul className="flex list-disc flex-col gap-2 pl-5 text-muted-foreground">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            {detailBlocks.map((block) => (
              <div key={block.id}>
                <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold tracking-tight">
                  <block.icon className="size-5 text-primary" aria-hidden />
                  {block.title}
                </h2>
                <p className="text-pretty text-muted-foreground">{block.body}</p>
              </div>
            ))}

            <div>
              <h2 className="mb-3 text-xl font-semibold tracking-tight">Technology stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
