import { ArrowRight, Download, MapPin } from "lucide-react";
import Link from "next/link";

import { profile } from "@/entities/profile";
import { siteConfig } from "@/shared/config";
import {
  AnimatedBackground,
  Badge,
  Button,
  Container,
  GithubIcon,
  LinkedinIcon,
  Reveal,
} from "@/shared/ui";

export function HeroSection() {
  return (
    <section aria-label="Introduction" className="relative overflow-hidden py-24 sm:py-32">
      <AnimatedBackground />
      <Container className="flex max-w-4xl flex-col items-start gap-6">
        <Reveal>
          <Badge variant="accent" className="gap-1.5 px-3 py-1">
            <MapPin className="size-3" aria-hidden />
            {profile.location} · {profile.nationality}
          </Badge>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            <span className="text-shimmer">{profile.name}</span>
            <span className="mt-3 block text-2xl font-normal text-muted-foreground sm:text-3xl">
              {profile.headline}
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="max-w-2xl text-base text-pretty text-muted-foreground sm:text-lg">
            {profile.summary}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/projects" className="group">
                View projects
                <ArrowRight
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get in touch</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href={siteConfig.resumePath} download>
                <Download aria-hidden />
                Resume
              </a>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.32}>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-4" aria-hidden />
              GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="size-4" aria-hidden />
              LinkedIn
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
