export const SKILL_LEVELS = ["expert", "proficient", "familiar"] as const;

export type SkillLevel = (typeof SKILL_LEVELS)[number];

export const SKILL_LEVEL_LABELS: Record<SkillLevel, string> = {
  expert: "Expert",
  proficient: "Proficient",
  familiar: "Familiar",
};

export type Skill = {
  name: string;
  level: SkillLevel;
};

export type SkillGroup = {
  id: string;
  title: string;
  skills: Skill[];
};
