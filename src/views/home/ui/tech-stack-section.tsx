import { Badge, Container } from "@/shared/ui";

const CORE_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Vue.js",
  "React Native",
  "Node.js",
  "NestJS",
  "Express",
  "Strapi CMS",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
] as const;

function StackBadges({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul aria-hidden={ariaHidden || undefined} className="flex shrink-0 items-center gap-2 pr-2">
      {CORE_STACK.map((tech) => (
        <li key={tech}>
          <Badge variant="outline" className="px-3 py-1 font-mono text-xs">
            {tech}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

export function TechStackSection() {
  return (
    <section aria-label="Core technology stack" className="border-y py-8">
      <Container>
        <div
          className="group flex overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          {/* Two copies scroll together for a seamless loop; freezes under reduced motion. */}
          <div className="flex w-max animate-[marquee_45s_linear_infinite] group-hover:[animation-play-state:paused]">
            <StackBadges />
            <StackBadges ariaHidden />
          </div>
        </div>
      </Container>
    </section>
  );
}
