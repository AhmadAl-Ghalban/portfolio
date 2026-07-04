import type { Metadata } from "next";

import { ProjectsPage } from "@/views/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Open-source Strapi plugin, trading platforms, microservices architecture, and cross-platform React Native work — filterable and searchable.",
  alternates: { canonical: "/projects" },
};

export default function Page() {
  return <ProjectsPage />;
}
