import { Mail, Package } from "lucide-react";
import Link from "next/link";

import { NAV_LINKS, siteConfig } from "@/shared/config";
import { Container, GithubIcon, LinkedinIcon, Separator } from "@/shared/ui";

const SOCIAL_LINKS = [
  { href: siteConfig.links.github, label: "GitHub", icon: GithubIcon },
  { href: siteConfig.links.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: siteConfig.links.npm, label: "npm", icon: Package },
  { href: `mailto:${siteConfig.email}`, label: "Email", icon: Mail },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-10">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-sm font-semibold">
              <span className="text-primary">~/</span>
              {siteConfig.name.toLowerCase().replace(" ", "-")}
            </span>
            <p className="text-sm text-muted-foreground">
              {siteConfig.role} · {siteConfig.location}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <social.icon className="size-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Separator />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. Built from scratch with Next.js,
          TypeScript, and Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}
