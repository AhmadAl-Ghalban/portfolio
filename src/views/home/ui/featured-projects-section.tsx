import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { featuredProjects, ProjectCard } from "@/entities/project";
import { Button, Container, Section, SectionHeading, StaggerGroup, StaggerItem } from "@/shared/ui";

export function FeaturedProjectsSection() {
  return (
    <Section aria-labelledby="featured-projects-heading">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects"
          description="A published Strapi plugin, live trading platforms, and a Redis-backed microservices architecture."
          id="featured-projects-heading"
        />
        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerGroup>
        <div className="mt-10">
          <Button asChild variant="outline">
            <Link href="/projects" className="group">
              All projects
              <ArrowRight
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
