import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { positions } from "@/entities/experience";
import { formatPeriod } from "@/shared/utils";
import { Button, Container, Reveal, Section, SectionHeading } from "@/shared/ui";

export function ExperienceHighlightsSection() {
  return (
    <Section aria-labelledby="experience-heading" className="bg-muted/40">
      <Container>
        <SectionHeading
          eyebrow="Career"
          title="Experience highlights"
          description="Fintech in Doha today; four Saudi client platforms and production mobile apps before that."
          id="experience-heading"
        />
        <div className="flex flex-col gap-4">
          {positions.map((position, index) => (
            <Reveal key={position.id} delay={index * 0.08}>
              <div className="flex flex-col gap-2 rounded-xl border bg-card p-6 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium">{position.role}</h3>
                  <p className="text-sm text-muted-foreground">
                    {position.company} · {position.location}
                  </p>
                  <p className="mt-1 max-w-xl text-sm text-pretty text-muted-foreground">
                    {position.summary}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {formatPeriod(position.start, position.end)}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild variant="outline">
            <Link href="/experience" className="group">
              Full experience
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
