import { Container, Section, SectionHeading } from "@/shared/ui";

import { ProjectsExplorer } from "./projects-explorer";

export function ProjectsPage() {
  return (
    <Section aria-labelledby="projects-page-heading">
      <Container>
        <SectionHeading
          eyebrow="Work"
          title="Projects"
          description="Published open source, professional client platforms, and cross-platform experiments — filter by area or search the stack."
          id="projects-page-heading"
        />
        <ProjectsExplorer />
      </Container>
    </Section>
  );
}
