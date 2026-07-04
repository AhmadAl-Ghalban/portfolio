import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { skillGroups } from "@/entities/skill";
import {
  Badge,
  Button,
  Container,
  Section,
  SectionHeading,
  StaggerGroup,
  StaggerItem,
} from "@/shared/ui";

const PREVIEW_GROUP_IDS = ["frontend", "backend", "mobile"] as const;
const MAX_SKILLS_PER_GROUP = 6;

export function SkillsPreviewSection() {
  const previewGroups = skillGroups.filter((group) =>
    (PREVIEW_GROUP_IDS as readonly string[]).includes(group.id),
  );

  return (
    <Section aria-labelledby="skills-heading">
      <Container>
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills at a glance"
          description="TypeScript across the whole stack — from React and Vue frontends to NestJS microservices."
          id="skills-heading"
        />
        <StaggerGroup className="grid gap-5 sm:grid-cols-3">
          {previewGroups.map((group) => (
            <StaggerItem key={group.id}>
              <div className="h-full rounded-xl border bg-card p-6">
                <h3 className="mb-4 text-sm font-medium">{group.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.slice(0, MAX_SKILLS_PER_GROUP).map((skill) => (
                    <Badge key={skill.name} variant="secondary">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <div className="mt-10">
          <Button asChild variant="outline">
            <Link href="/skills" className="group">
              All skills
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
