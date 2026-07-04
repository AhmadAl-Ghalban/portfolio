import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "strapi-plugin-conditional-field-builder",
    title: "Conditional Field Builder",
    tagline: "Strapi v5 custom field — one dropdown becomes a schema-less, per-option form.",
    description:
      "A published Strapi v5 plugin, live on npm and the official Strapi Marketplace. Strapi's native conditional fields can only toggle visibility of fields already declared in the schema; this plugin lets a single field morph into a different shape per dropdown option — 13 sub-field types, validation, and i18n — stored as one JSON value, with no schema changes.",
    kind: "open-source",
    categories: ["fullstack", "opensource"],
    stack: ["TypeScript", "React", "Strapi v5", "Strapi Design System", "Vitest"],
    links: {
      repo: "https://github.com/AhmadAl-Ghalban/strapi-plugin-conditional-field-builder",
      npm: "https://www.npmjs.com/package/strapi-plugin-conditional-field-builder",
      live: "https://market.strapi.io/plugins/strapi-plugin-conditional-field-builder",
    },
    features: [
      "13 sub-field types (text, select, date, range, boolean, and more) inside a single custom field",
      "JSON-driven configuration directly in the Content-Type Builder",
      "Built-in validation: required, min/max, step, choices",
      "i18n out of the box — English, French, and Arabic",
      "Plugin settings page with reusable default templates",
    ],
    architecture:
      "Built on Strapi's official Custom Field API (type: json): a server package registers the field, while a React admin app renders the builder UI with @strapi/design-system so it feels native. Pure validation utilities are extracted and unit-tested with Vitest.",
    challenges:
      "Strapi v5.17's native conditional fields only show or hide fields that already exist in the schema. Modeling a discriminator plus dynamic per-option data as one JSON value — while keeping admin UX, validation, and API output coherent — was the core design problem.",
    lessons:
      "Deep dive into Strapi plugin architecture, npm packaging and semantic releases, and designing a configuration DX that non-developers can operate.",
    year: "2026",
    featured: true,
    accentHue: 275,
  },
  {
    slug: "trading-platforms",
    title: "Trading & Financial Platforms",
    tagline: "High-performance web and mobile interfaces for a Qatari brokerage.",
    description:
      "At The Group Securities, I build web and mobile applications for trading and financial platforms — scalable, responsive interfaces where performance directly affects how investors act on market data. Full-stack contributions include RESTful API integration, performance optimization, and frontend architecture improvements.",
    kind: "professional",
    categories: ["fullstack", "frontend"],
    stack: ["React.js", "Next.js", "React Native", "TypeScript", "REST APIs"],
    links: {},
    features: [
      "Trading platform UIs across web and mobile",
      "Responsive interfaces for dense financial data",
      "RESTful API integrations",
      "Frontend architecture and performance improvements",
    ],
    challenges:
      "Financial interfaces demand fast rendering under continuously updating data, with zero tolerance for incorrect states.",
    year: "2026 — present",
    featured: true,
    accentHue: 155,
  },
  {
    slug: "nafith-ksa",
    title: "Nafith KSA — Microservices Platform",
    tagline: "Microservices architecture with Redis caching for a Saudi client platform.",
    description:
      "As part of multi-client delivery at Sitech, I implemented a microservices architecture for the Nafith KSA platform, introducing Redis caching to improve scalability and performance, with backend services built on Node.js/NestJS and containerized with Docker.",
    kind: "professional",
    categories: ["backend", "fullstack"],
    stack: ["NestJS", "Node.js", "Redis", "PostgreSQL", "Docker", "REST APIs"],
    links: {},
    features: [
      "Service decomposition into independently deployable microservices",
      "Redis caching layer for hot-path performance",
      "Dockerized services for consistent dev/prod parity",
    ],
    architecture:
      "Independent Node.js/NestJS services communicating over REST, fronted by a Redis caching layer, each containerized with Docker.",
    challenges:
      "Splitting a growing platform into services without breaking existing flows, while proving the change with measurable scalability gains.",
    year: "2023 – 2025",
    featured: true,
    accentHue: 15,
  },
  {
    slug: "lebara-ksa",
    title: "Lebara KSA — Telecom Platform",
    tagline: "Scalable customer-facing web platform for a major telecom brand.",
    description:
      "Contributed to the Lebara KSA web platform at Sitech: scalable interfaces built with React.js and Vue.js, server-side rendering with Next.js for SEO and performance, and Strapi CMS integration so non-technical teams could manage content without engineering support.",
    kind: "professional",
    categories: ["fullstack", "frontend"],
    stack: ["React.js", "Vue.js", "Next.js", "Redux", "Strapi CMS", "Node.js"],
    links: {},
    features: [
      "Server-side rendering for SEO-critical pages",
      "Redux/Vuex state management across complex flows",
      "CMS-driven content workflows via Strapi",
    ],
    year: "2023 – 2025",
    featured: false,
    accentHue: 210,
  },
  {
    slug: "sekaya-rekab-ksa",
    title: "Sekaya & Rekab KSA — Client Platforms",
    tagline: "Full-stack delivery for two Saudi client platforms in parallel.",
    description:
      "Built and maintained the Sekaya KSA and Rekab KSA platforms at Sitech: React.js/Vue.js frontends with disciplined state management, backend services and RESTful APIs on Node.js and Express over MongoDB, PostgreSQL, and MySQL, in close collaboration with UX/UI teams.",
    kind: "professional",
    categories: ["fullstack"],
    stack: ["React.js", "Vue.js", "Node.js", "Express.js", "MongoDB", "MySQL"],
    links: {},
    features: [
      "Two production platforms delivered and maintained in parallel",
      "RESTful backend services over three database engines",
      "Responsive UI built hand-in-hand with UX/UI designers",
    ],
    year: "2023 – 2025",
    featured: false,
    accentHue: 45,
  },
  {
    slug: "shopyard-mobile-apps",
    title: "React Native Apps — Inception to Deployment",
    tagline: "Multiple production mobile apps shipped end-to-end at Shopyard.",
    description:
      "Developed multiple React Native applications from first commit to store deployment: implementing UI/UX designs, integrating REST and GraphQL backends, optimizing performance, and establishing code-review practices — alongside React websites and multi-site control panels.",
    kind: "professional",
    categories: ["frontend"],
    stack: ["React Native", "React.js", "GraphQL", "REST APIs", "JavaScript"],
    links: {},
    features: [
      "Full app lifecycle: inception → design → integration → deployment",
      "REST and GraphQL backend integrations",
      "Control panels serving multiple websites through shared APIs",
    ],
    year: "2021 – 2023",
    featured: false,
    accentHue: 320,
  },
  {
    slug: "nestjs-microservices",
    title: "NestJS Microservices Playground",
    tagline: "Hands-on exploration of microservices patterns in NestJS.",
    description:
      "Public repositories exploring microservices structure and communication patterns with NestJS — the same patterns applied professionally on Nafith KSA, distilled into open reference code.",
    kind: "open-source",
    categories: ["backend", "opensource"],
    stack: ["NestJS", "TypeScript", "Node.js", "Microservices"],
    links: {
      repo: "https://github.com/AhmadAl-Ghalban/nestJS-microservices",
    },
    features: [
      "Service-to-service communication patterns",
      "Project structure for multi-service NestJS codebases",
    ],
    year: "2025",
    featured: false,
    accentHue: 0,
  },
  {
    slug: "react-native-tv-demo",
    title: "React Native TV Demo",
    tagline: "React Native running on TV platforms — focus-based navigation and 10-foot UI.",
    description:
      "A demo exploring React Native beyond phones: TV targets with focus-driven navigation and interfaces designed for the living room. Part of ongoing cross-platform work that also includes React Native for Windows.",
    kind: "open-source",
    categories: ["frontend", "opensource"],
    stack: ["React Native", "TypeScript"],
    links: {
      repo: "https://github.com/AhmadAl-Ghalban/react-native-tv-demo",
    },
    features: ["TV-target React Native setup", "Focus-based (D-pad) navigation patterns"],
    year: "2025",
    featured: false,
    accentHue: 260,
  },
  {
    slug: "react-native-windows-demo",
    title: "React Native Windows Demo",
    tagline: "Taking React Native to the desktop with react-native-windows.",
    description:
      "A working demo of React Native on Windows — one of the less-traveled React Native targets, involving native C++ tooling and desktop interaction patterns.",
    kind: "open-source",
    categories: ["frontend", "opensource"],
    stack: ["React Native", "react-native-windows", "C++", "TypeScript"],
    links: {
      repo: "https://github.com/AhmadAl-Ghalban/react-native-windows-demo",
    },
    features: ["React Native Windows target setup", "Desktop-class UI patterns"],
    year: "2025",
    featured: false,
    accentHue: 200,
  },
  {
    slug: "translation-key-comparison",
    title: "Translation Key Comparison",
    tagline: "A utility that diffs i18n translation files to catch missing keys.",
    description:
      "A small JavaScript tool for comparing translation key sets across locale files — the kind of utility that saves multilingual projects from shipping untranslated strings.",
    kind: "open-source",
    categories: ["backend", "opensource"],
    stack: ["JavaScript", "Node.js"],
    links: {
      repo: "https://github.com/AhmadAl-Ghalban/translation-key-comparison",
    },
    features: ["Detects missing and mismatched i18n keys across locales"],
    year: "2025",
    featured: false,
    accentHue: 90,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
