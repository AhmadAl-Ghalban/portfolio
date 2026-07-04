import { Globe2, GraduationCap, Heart, Sparkles } from "lucide-react";

import { profile } from "@/entities/profile";
import { formatPeriod } from "@/shared/utils";
import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Container,
  Reveal,
  Section,
  SectionHeading,
  StaggerGroup,
  StaggerItem,
} from "@/shared/ui";

import { JourneyTimeline } from "./journey-timeline";

export function AboutPage() {
  return (
    <>
      <Section aria-labelledby="about-heading" className="pb-8 sm:pb-10">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="About"
            title="A full stack engineer who ships"
            description={profile.summary}
            id="about-heading"
          />
          <Reveal>
            <div className="flex max-w-3xl flex-col gap-4 text-pretty text-muted-foreground">
              {profile.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section aria-labelledby="journey-heading" className="py-10 sm:py-12">
        <Container className="max-w-4xl">
          <h2 id="journey-heading" className="mb-8 text-2xl font-semibold tracking-tight">
            Journey
          </h2>
          <Reveal>
            <JourneyTimeline />
          </Reveal>
        </Container>
      </Section>

      <Section aria-labelledby="education-heading" className="py-10 sm:py-12">
        <Container className="max-w-4xl">
          <h2 id="education-heading" className="mb-8 text-2xl font-semibold tracking-tight">
            Education
          </h2>
          <StaggerGroup className="grid gap-5">
            {profile.education.map((entry) => (
              <StaggerItem key={entry.institution}>
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-muted text-muted-foreground">
                        <GraduationCap className="size-5" aria-hidden />
                      </span>
                      <div className="flex flex-col gap-1">
                        <CardTitle>{entry.degree}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {entry.institution} · {entry.location}
                        </p>
                        <p className="font-mono text-xs text-muted-foreground">
                          {formatPeriod(entry.start, entry.end)}
                          {entry.gpa ? ` · GPA ${entry.gpa}` : null}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <Section aria-labelledby="values-heading" className="py-10 sm:py-12">
        <Container className="max-w-4xl">
          <h2 id="values-heading" className="mb-8 text-2xl font-semibold tracking-tight">
            Core values
          </h2>
          <StaggerGroup className="grid gap-5 sm:grid-cols-2">
            {profile.values.map((value) => (
              <StaggerItem key={value.title}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2.5">
                      <Heart className="size-4 text-primary" aria-hidden />
                      <CardTitle className="text-base">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-pretty text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <Section aria-labelledby="languages-heading" className="py-10 pb-24 sm:py-12">
        <Container className="grid max-w-4xl gap-10 sm:grid-cols-2">
          <div>
            <h2
              id="languages-heading"
              className="mb-6 flex items-center gap-2 text-2xl font-semibold tracking-tight"
            >
              <Globe2 className="size-5 text-primary" aria-hidden />
              Languages
            </h2>
            <ul className="flex flex-col gap-3">
              {profile.languages.map((language) => (
                <li
                  key={language.name}
                  className="flex items-center justify-between rounded-lg border bg-card px-4 py-3"
                >
                  <span className="text-sm font-medium">{language.name}</span>
                  <span className="text-sm text-muted-foreground">{language.level}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold tracking-tight">
              <Sparkles className="size-5 text-primary" aria-hidden />
              Interests
            </h2>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <Badge key={interest} variant="outline" className="px-3 py-1.5">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
