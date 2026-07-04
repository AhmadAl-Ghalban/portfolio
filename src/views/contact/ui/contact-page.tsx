import { Download, Mail, MapPin, Package } from "lucide-react";

import { ContactForm } from "@/features/contact-form";
import { siteConfig } from "@/shared/config";
import {
  Card,
  CardContent,
  Container,
  GithubIcon,
  LinkedinIcon,
  Reveal,
  Section,
  SectionHeading,
} from "@/shared/ui";

const CONTACT_CHANNELS = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "GitHub",
    value: `@${siteConfig.githubUsername}`,
    href: siteConfig.links.github,
    icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "ahmad-alghalban",
    href: siteConfig.links.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: "npm",
    value: "~ahmad-alghalban",
    href: siteConfig.links.npm,
    icon: Package,
    external: true,
  },
] as const;

export function ContactPage() {
  const emailEnabled = Boolean(process.env.RESEND_API_KEY);
  return (
    <Section aria-labelledby="contact-page-heading">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          description="Roles, projects, or a Strapi question — my inbox is open."
          id="contact-page-heading"
        />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <Reveal>
            <div className="flex flex-col gap-4">
              {CONTACT_CHANNELS.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  className="group"
                >
                  <Card className="transition-colors group-hover:border-primary/40">
                    <CardContent className="flex items-center gap-4 p-5">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-muted text-muted-foreground">
                        <channel.icon className="size-4" aria-hidden />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-sm font-medium">{channel.label}</span>
                        <span className="text-sm text-muted-foreground">{channel.value}</span>
                      </span>
                    </CardContent>
                  </Card>
                </a>
              ))}

              <Card>
                <CardContent className="flex items-center gap-4 p-5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-muted text-muted-foreground">
                    <MapPin className="size-4" aria-hidden />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium">Location</span>
                    <span className="text-sm text-muted-foreground">
                      {siteConfig.location} · {siteConfig.nationality}
                    </span>
                  </span>
                </CardContent>
              </Card>

              <a href={siteConfig.resumePath} download className="group">
                <Card className="transition-colors group-hover:border-primary/40">
                  <CardContent className="flex items-center gap-4 p-5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-primary/10 text-primary">
                      <Download className="size-4" aria-hidden />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-medium">Resume</span>
                      <span className="text-sm text-muted-foreground">Download as PDF</span>
                    </span>
                  </CardContent>
                </Card>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Card>
              <CardContent className="p-6 sm:p-8">
                <ContactForm emailEnabled={emailEnabled} />
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
