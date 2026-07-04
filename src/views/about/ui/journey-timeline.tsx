import { Briefcase, GraduationCap } from "lucide-react";

import { positions } from "@/entities/experience";
import { profile } from "@/entities/profile";
import { formatPeriod } from "@/shared/utils";

type JourneyEntry = {
  id: string;
  icon: typeof Briefcase;
  title: string;
  subtitle: string;
  period: string;
  /** Sort key: start month, descending. */
  start: string;
};

function buildJourney(): JourneyEntry[] {
  const work: JourneyEntry[] = positions.map((position) => ({
    id: position.id,
    icon: Briefcase,
    title: position.role,
    subtitle: `${position.company} · ${position.location}`,
    period: formatPeriod(position.start, position.end),
    start: position.start,
  }));
  const education: JourneyEntry[] = profile.education.map((entry) => ({
    id: entry.institution,
    icon: GraduationCap,
    title: entry.degree,
    subtitle: `${entry.institution} · ${entry.location}`,
    period: formatPeriod(entry.start, entry.end),
    start: entry.start,
  }));
  return [...work, ...education].sort((a, b) => b.start.localeCompare(a.start));
}

export function JourneyTimeline() {
  const journey = buildJourney();

  return (
    <ol className="flex flex-col">
      {journey.map((entry, index) => (
        <li key={entry.id} className="relative flex gap-4 pb-8 last:pb-0">
          {index < journey.length - 1 ? (
            <span aria-hidden className="absolute top-9 left-[15px] h-full w-px bg-border" />
          ) : null}
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border bg-muted text-muted-foreground">
            <entry.icon className="size-4" aria-hidden />
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-xs text-muted-foreground">{entry.period}</span>
            <h3 className="text-sm font-medium">{entry.title}</h3>
            <p className="text-sm text-muted-foreground">{entry.subtitle}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
