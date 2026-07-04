import { ArrowUpRight, GitCommitHorizontal } from "lucide-react";

import { profile } from "@/entities/profile";
import { getGithubStats, getNpmDownloads, getRecentActivity } from "@/shared/api";
import { siteConfig } from "@/shared/config";
import { formatRelativeTime, yearsSince } from "@/shared/utils";
import { Container, Reveal, Section, SectionHeading } from "@/shared/ui";

import { StatTile } from "./stat-tile";

const NPM_PACKAGE = "strapi-plugin-conditional-field-builder";
const CLIENT_PLATFORMS_SHIPPED = 4;

export async function GithubSection() {
  const [stats, activity, npmDownloads] = await Promise.all([
    getGithubStats(),
    getRecentActivity(5),
    getNpmDownloads(NPM_PACKAGE),
  ]);

  return (
    <Section aria-labelledby="github-heading">
      <Container>
        <SectionHeading
          eyebrow="Open source"
          title="GitHub, live"
          description="Real numbers, fetched from the GitHub and npm APIs — not screenshots."
          id="github-heading"
        />
        <Reveal>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <StatTile
              value={yearsSince(profile.careerStart)}
              suffix="+"
              label="Years of professional experience"
            />
            <StatTile value={CLIENT_PLATFORMS_SHIPPED} label="Client platforms shipped at Sitech" />
            <StatTile
              value={stats ? stats.publicRepos : null}
              fallback="20+"
              label="Public GitHub repositories"
            />
            <StatTile
              value={npmDownloads ? npmDownloads.lastMonth : null}
              label="npm downloads last month"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 rounded-xl border bg-card">
            <div className="flex items-center justify-between border-b px-5 py-4">
              <h3 className="text-sm font-medium">Recent activity</h3>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                @{siteConfig.githubUsername}
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            </div>
            {activity && activity.length > 0 ? (
              <ul className="divide-y">
                {activity.map((item) => (
                  <li key={item.id} className="flex items-start gap-3 px-5 py-3.5">
                    <GitCommitHorizontal
                      className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                      aria-hidden
                    />
                    <div className="flex min-w-0 flex-col gap-0.5">
                      <p className="truncate text-sm">{item.detail}</p>
                      <p className="text-xs text-muted-foreground">
                        <a
                          href={item.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono transition-colors hover:text-foreground"
                        >
                          {item.repo}
                        </a>{" "}
                        · {formatRelativeTime(item.date)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="px-5 py-6 text-sm text-muted-foreground">
                Activity is loading slowly or GitHub is rate-limiting — see it live on{" "}
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4"
                >
                  GitHub
                </a>
                .
              </p>
            )}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
