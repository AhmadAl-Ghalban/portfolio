export const siteConfig = {
  name: "Ahmad Alghalban",
  role: "Full Stack Engineer",
  title: "Ahmad Alghalban — Full Stack Engineer",
  description:
    "Full Stack Engineer specializing in React, Next.js, Vue, React Native, and Node.js/NestJS. Author of strapi-plugin-conditional-field-builder. Based in Doha, Qatar.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ahmadalghalban.vercel.app",
  email: "ahmadalghalban05@gmail.com",
  location: "Doha, Qatar",
  nationality: "Jordanian",
  githubUsername: "AhmadAl-Ghalban",
  resumePath: "/Ahmad_Alghalban_Resume.pdf",
  links: {
    github: "https://github.com/AhmadAl-Ghalban",
    linkedin: "https://www.linkedin.com/in/ahmad-alghalban-454382219",
    npm: "https://www.npmjs.com/~ahmad-alghalban",
    codewars: "https://www.codewars.com/users/AhmadAl-Ghalban",
  },
} as const;

export type SiteConfig = typeof siteConfig;
