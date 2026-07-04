"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import type { Position } from "@/entities/experience";
import { Badge, Card, CardContent, CardHeader, EASE } from "@/shared/ui";
import { formatDuration, formatPeriod } from "@/shared/utils";

type PositionItemProps = {
  position: Position;
  index: number;
};

export function PositionItem({ position, index }: PositionItemProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.li
      initial={{ opacity: 0, y: reducedMotion ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE, delay: index === 0 ? 0.1 : 0 }}
      className="relative pb-12 pl-8 last:pb-0 sm:pl-10"
    >
      <motion.span
        aria-hidden
        initial={{ scale: reducedMotion ? 1 : 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 320, damping: 18, delay: 0.15 }}
        className="absolute top-1.5 left-0 size-[11px] rounded-full border-2 border-primary bg-background"
      />
      <Card className="transition-all hover:-translate-y-0.5 hover:shadow-md">
        <CardHeader>
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
            <h3 className="text-lg font-semibold tracking-tight">{position.role}</h3>
            <span className="shrink-0 font-mono text-xs text-muted-foreground">
              {formatPeriod(position.start, position.end)} ·{" "}
              {formatDuration(position.start, position.end)}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            {position.company} · {position.location}
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <p className="text-sm text-pretty text-muted-foreground">{position.summary}</p>

          <div>
            <h4 className="mb-2 text-sm font-medium">Responsibilities</h4>
            <ul className="flex list-disc flex-col gap-1.5 pl-5 text-sm text-muted-foreground">
              {position.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-medium">Achievements</h4>
            <ul className="flex flex-col gap-1.5">
              {position.achievements.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {position.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.li>
  );
}
