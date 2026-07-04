import { positions } from "@/entities/experience";
import { Container, Section, SectionHeading } from "@/shared/ui";

import { ExperienceTimeline } from "./experience-timeline";

export function ExperiencePage() {
  return (
    <Section aria-labelledby="experience-page-heading">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Career"
          title="Experience"
          description="From shipping React Native apps end-to-end, through four Saudi client platforms, to financial trading interfaces in Doha."
          id="experience-page-heading"
        />
        <ExperienceTimeline positions={[...positions]} />
      </Container>
    </Section>
  );
}
