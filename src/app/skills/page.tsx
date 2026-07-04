import type { Metadata } from "next";

import { SkillsPage } from "@/views/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Frontend, backend, mobile, databases, cloud & DevOps, testing, and tools — with honest proficiency tiers.",
  alternates: { canonical: "/skills" },
};

export default function Page() {
  return <SkillsPage />;
}
