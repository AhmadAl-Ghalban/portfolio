export const PROJECT_CATEGORIES = ["frontend", "backend", "fullstack", "opensource"] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  fullstack: "Full Stack",
  opensource: "Open Source",
};

export type ProjectKind = "professional" | "open-source";

export type ProjectLinks = {
  repo?: string;
  live?: string;
  npm?: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  kind: ProjectKind;
  categories: ProjectCategory[];
  stack: string[];
  links: ProjectLinks;
  features: string[];
  architecture?: string;
  challenges?: string;
  lessons?: string;
  year: string;
  featured: boolean;
  /** Hue used for the generated placeholder artwork. */
  accentHue: number;
};
