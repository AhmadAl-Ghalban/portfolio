import "server-only";

import { siteConfig } from "@/shared/config";

const GITHUB_API = "https://api.github.com";
const REVALIDATE_SECONDS = 3600;

export type GithubStats = {
  followers: number;
  publicRepos: number;
};

export type GithubRepo = {
  name: string;
  description: string | null;
  url: string;
  stars: number;
  language: string | null;
  topics: string[];
  pushedAt: string;
};

export type GithubActivityItem = {
  id: string;
  type: string;
  repo: string;
  repoUrl: string;
  detail: string;
  date: string;
};

function githubHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

async function githubFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${GITHUB_API}${path}`, {
      headers: githubHeaders(),
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

type RawUser = { followers: number; public_repos: number };

export async function getGithubStats(): Promise<GithubStats | null> {
  const user = await githubFetch<RawUser>(`/users/${siteConfig.githubUsername}`);
  if (!user) return null;
  return { followers: user.followers, publicRepos: user.public_repos };
}

type RawRepo = {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  topics?: string[];
  pushed_at: string;
  fork: boolean;
};

export async function getTopRepos(limit = 6): Promise<GithubRepo[] | null> {
  const repos = await githubFetch<RawRepo[]>(
    `/users/${siteConfig.githubUsername}/repos?per_page=100&sort=pushed`,
  );
  if (!repos) return null;
  return repos
    .filter((repo) => !repo.fork && repo.name !== siteConfig.githubUsername)
    .sort(
      (a, b) =>
        b.stargazers_count - a.stargazers_count ||
        Date.parse(b.pushed_at) - Date.parse(a.pushed_at),
    )
    .slice(0, limit)
    .map((repo) => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
      language: repo.language,
      topics: repo.topics ?? [],
      pushedAt: repo.pushed_at,
    }));
}

type RawEvent = {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
  payload: {
    commits?: { message: string }[];
    ref_type?: string;
    action?: string;
  };
};

function describeEvent(event: RawEvent): string | null {
  switch (event.type) {
    case "PushEvent": {
      const commits = event.payload.commits ?? [];
      const first = commits[0]?.message.split("\n")[0];
      const count = commits.length;
      if (!first) return null;
      return count > 1 ? `Pushed ${count} commits — "${first}"` : `Pushed — "${first}"`;
    }
    case "CreateEvent":
      return `Created ${event.payload.ref_type ?? "ref"}`;
    case "WatchEvent":
      return "Starred the repository";
    case "PullRequestEvent":
      return `${event.payload.action === "opened" ? "Opened" : "Updated"} a pull request`;
    case "IssuesEvent":
      return `${event.payload.action === "opened" ? "Opened" : "Updated"} an issue`;
    case "ReleaseEvent":
      return "Published a release";
    default:
      return null;
  }
}

export async function getRecentActivity(limit = 5): Promise<GithubActivityItem[] | null> {
  const events = await githubFetch<RawEvent[]>(
    `/users/${siteConfig.githubUsername}/events/public?per_page=30`,
  );
  if (!events) return null;
  const items: GithubActivityItem[] = [];
  for (const event of events) {
    const detail = describeEvent(event);
    if (!detail) continue;
    items.push({
      id: event.id,
      type: event.type,
      repo: event.repo.name.replace(`${siteConfig.githubUsername}/`, ""),
      repoUrl: `https://github.com/${event.repo.name}`,
      detail,
      date: event.created_at,
    });
    if (items.length >= limit) break;
  }
  return items;
}
