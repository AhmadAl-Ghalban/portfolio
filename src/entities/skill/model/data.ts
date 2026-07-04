import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React.js", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "JavaScript", level: "expert" },
      { name: "Redux / Redux Toolkit", level: "expert" },
      { name: "HTML & CSS", level: "expert" },
      { name: "Vue.js", level: "proficient" },
      { name: "Vuex", level: "proficient" },
      { name: "Tailwind CSS", level: "proficient" },
      { name: "Bootstrap", level: "proficient" },
      { name: "Nuxt.js", level: "familiar" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", level: "expert" },
      { name: "Express.js", level: "expert" },
      { name: "Strapi CMS", level: "expert" },
      { name: "REST APIs", level: "expert" },
      { name: "NestJS", level: "proficient" },
      { name: "GraphQL", level: "proficient" },
      { name: "Microservices", level: "proficient" },
      { name: "SOAP APIs", level: "familiar" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    skills: [{ name: "React Native", level: "expert" }],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: "proficient" },
      { name: "MongoDB", level: "proficient" },
      { name: "MySQL", level: "proficient" },
      { name: "Redis", level: "proficient" },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker", level: "proficient" },
      { name: "Firebase", level: "familiar" },
      { name: "CI/CD", level: "familiar" },
    ],
  },
  {
    id: "testing",
    title: "Testing",
    skills: [
      { name: "Manual Testing", level: "proficient" },
      { name: "Test Cases, Scenarios & Plans", level: "proficient" },
      { name: "Vitest", level: "familiar" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "Git", level: "expert" },
      { name: "Bitbucket", level: "proficient" },
      { name: "Jira", level: "proficient" },
      { name: "Stripe & Payment Gateways", level: "proficient" },
    ],
  },
];

export const softSkills: string[] = [
  "Communication",
  "Team Work",
  "Fast Learning",
  "Pressure Handling",
  "Creating Documentation",
];
