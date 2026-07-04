import { profile } from "@/entities/profile";
import {
  SKILL_LEVEL_LABELS,
  SKILL_LEVELS,
  SkillLevelIndicator,
  skillGroups,
  softSkills,
} from "@/entities/skill";
import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Container,
  Section,
  SectionHeading,
  StaggerGroup,
  StaggerItem,
} from "@/shared/ui";

export function SkillsPage() {
  return (
    <Section aria-labelledby="skills-page-heading">
      <Container>
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills"
          description="Grouped by discipline, with honest proficiency tiers — no made-up percentages."
          id="skills-page-heading"
        />

        <div
          aria-hidden
          className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground"
        >
          {SKILL_LEVELS.map((level) => (
            <span key={level} className="flex items-center gap-2">
              <SkillLevelIndicator level={level} />
              {SKILL_LEVEL_LABELS[level]}
            </span>
          ))}
        </div>

        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <StaggerItem key={group.id}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-base">{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-2.5">
                    {group.skills.map((skill) => (
                      <li key={skill.name} className="flex items-center justify-between gap-3">
                        <span className="text-sm">{skill.name}</span>
                        <SkillLevelIndicator level={skill.level} />
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}

          <StaggerItem>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-base">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-2.5">
                  {profile.languages.map((language) => (
                    <li key={language.name} className="flex items-center justify-between gap-3">
                      <span className="text-sm">{language.name}</span>
                      <span className="text-xs text-muted-foreground">{language.level}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-base">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {softSkills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        </StaggerGroup>
      </Container>
    </Section>
  );
}
