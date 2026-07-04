import type { Position } from "./types";

export const positions: Position[] = [
  {
    id: "the-group-securities",
    company: "The Group Securities",
    role: "Full Stack Web Developer",
    location: "Doha, Qatar",
    start: "2026-01",
    end: null,
    summary:
      "Building high-performance financial web and mobile applications for trading platforms at one of Qatar's leading brokerage firms.",
    responsibilities: [
      "Develop trading and financial platform interfaces with React.js, Next.js, and React Native.",
      "Build scalable, responsive UIs for high-frequency financial data.",
      "Integrate RESTful APIs across web and mobile clients.",
      "Optimize performance and improve the frontend architecture.",
    ],
    technologies: ["React.js", "Next.js", "React Native", "TypeScript", "REST APIs"],
    achievements: [
      "Contributed across the full stack of live trading and financial platforms serving real investors.",
    ],
  },
  {
    id: "sitech",
    company: "Sitech",
    role: "Full Stack Web Developer",
    location: "Amman, Jordan",
    start: "2023-02",
    end: "2025-12",
    summary:
      "Delivered multiple client platforms for the Saudi market — Lebara KSA, Rekab KSA, Sekaya KSA, and Nafith KSA — across the full stack.",
    responsibilities: [
      "Built scalable web applications with React.js and Vue.js, using Redux and Vuex for state management.",
      "Developed backend services and RESTful APIs with Node.js, Express.js, and NestJS over MongoDB, PostgreSQL, and MySQL.",
      "Integrated Strapi CMS so non-technical teams could manage content independently.",
      "Containerized backend services with Docker for consistent dev/prod environments.",
      "Collaborated closely with UX/UI teams on responsive, user-friendly interfaces.",
    ],
    technologies: [
      "React.js",
      "Vue.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Strapi CMS",
      "Docker",
    ],
    achievements: [
      "Implemented a microservices architecture for Nafith KSA with Redis caching, improving scalability and performance.",
      "Introduced server-side rendering with Next.js, improving SEO visibility and page performance.",
      "Shipped and maintained four production client platforms in parallel.",
    ],
  },
  {
    id: "shopyard",
    company: "Shopyard",
    role: "Frontend Developer — React & React Native",
    location: "Amman, Jordan",
    start: "2021-09",
    end: "2023-01",
    summary:
      "Took multiple mobile applications from inception to deployment and built React websites and multi-site control panels from scratch.",
    responsibilities: [
      "Developed React Native applications end-to-end, from first commit to store deployment.",
      "Implemented polished UI/UX designs for seamless user experiences.",
      "Integrated apps with backend systems through RESTful APIs and GraphQL.",
      "Built React websites from scratch, plus control panels serving multiple sites via APIs.",
    ],
    technologies: ["React Native", "React.js", "JavaScript", "GraphQL", "REST APIs"],
    achievements: [
      "Optimized application performance, conducted code reviews, and established best practices.",
    ],
  },
];
