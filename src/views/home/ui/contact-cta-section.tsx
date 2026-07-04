import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/shared/config";
import { Button, Container, Reveal, Section } from "@/shared/ui";

export function ContactCtaSection() {
  return (
    <Section aria-labelledby="contact-cta-heading" className="pb-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/10 via-accent/40 to-background p-10 text-center sm:p-16">
            <h2
              id="contact-cta-heading"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Let&apos;s build something solid.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              Have a product to ship, a platform to scale, or a Strapi problem to untangle? I&apos;m
              always open to interesting conversations.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/contact" className="group">
                  Contact me
                  <ArrowRight
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail aria-hidden />
                  {siteConfig.email}
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
