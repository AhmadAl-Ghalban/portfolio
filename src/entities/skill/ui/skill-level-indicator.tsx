import { cn } from "@/shared/lib";

import { SKILL_LEVEL_LABELS, SKILL_LEVELS, type SkillLevel } from "../model/types";

const LEVEL_STRENGTH: Record<SkillLevel, number> = {
  expert: 3,
  proficient: 2,
  familiar: 1,
};

type SkillLevelIndicatorProps = {
  level: SkillLevel;
};

/** Three-dot proficiency indicator with an accessible text label. */
export function SkillLevelIndicator({ level }: SkillLevelIndicatorProps) {
  const strength = LEVEL_STRENGTH[level];
  return (
    <span className="flex items-center gap-2">
      <span className="sr-only">{SKILL_LEVEL_LABELS[level]}</span>
      <span aria-hidden className="flex items-center gap-1">
        {SKILL_LEVELS.map((_, index) => (
          <span
            key={index}
            className={cn("size-1.5 rounded-full", index < strength ? "bg-primary" : "bg-border")}
          />
        ))}
      </span>
    </span>
  );
}
