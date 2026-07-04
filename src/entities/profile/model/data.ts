import type { Profile } from "./types";

export const profile: Profile = {
  name: "Ahmad Alghalban",
  role: "Full Stack Engineer",
  headline: "I build scalable web, mobile, and backend products across the stack.",
  summary:
    "Versatile Full Stack Engineer with a strong focus on front-end and mobile development. Backed by a Computer Information Systems degree and hands-on experience with React, Next.js, Vue, React Native, and Node.js/NestJS — currently building high-performance financial platforms in Doha.",
  bio: [
    "I'm a full stack engineer with 5+ years of professional experience shipping products across web, mobile, and backend. My work spans financial trading platforms, telecom and government-adjacent client platforms in Saudi Arabia, and production mobile apps taken from inception to deployment.",
    "On the front end I work primarily with React, Next.js, and Vue, with a strong eye for performance and UX. On the back end I build services with Node.js, Express, and NestJS — including microservices architectures with Redis caching and Dockerized deployments. I'm also deep in the Strapi ecosystem: I authored a Strapi v5 plugin published on npm and the official Strapi Marketplace.",
    "I care about clean, maintainable code, honest documentation, and building things that hold up under real-world load and real users.",
  ],
  location: "Doha, Qatar",
  nationality: "Jordanian",
  careerStart: "2021-09",
  languages: [
    { name: "Arabic", level: "Native / Bilingual" },
    { name: "English", level: "Fluent" },
  ],
  values: [
    {
      title: "Clean, maintainable code",
      description:
        "Code is read far more often than it is written. I optimize for clarity, small focused modules, and honest naming.",
    },
    {
      title: "Scalability by design",
      description:
        "From Redis-cached microservices to SSR, I design systems that stay fast as usage grows — not after it breaks.",
    },
    {
      title: "User experience first",
      description:
        "Performance, accessibility, and polish are product features. I work closely with UX/UI teams to ship interfaces people enjoy.",
    },
    {
      title: "Documentation & testing culture",
      description:
        "I write test cases, plans, and documentation so the next engineer — often future me — moves faster.",
    },
    {
      title: "Continuous learning",
      description:
        "Currently going deeper into advanced microservices and cloud architecture, one repo at a time.",
    },
  ],
  interests: [
    "Open-source (Strapi plugin ecosystem)",
    "Microservices & cloud architecture",
    "Cross-platform React Native (TV, Windows)",
    "Codewars katas",
  ],
  education: [
    {
      degree: "B.S. in Computer Information Systems",
      institution: "University of Jordan",
      location: "Amman, Jordan",
      start: "2018-02",
      end: "2022-02",
      gpa: "3.09 / 4.0",
    },
  ],
};
