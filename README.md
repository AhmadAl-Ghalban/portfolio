# Ahmad Alghalban — Portfolio

Personal portfolio of **Ahmad Alghalban**, Full Stack Engineer (React · Next.js · Vue · React Native · Node.js/NestJS · Strapi), built completely from scratch — no template.

**Live data, not screenshots:** the home page fetches GitHub stats/activity and npm download counts server-side with hourly revalidation.

## Tech stack

| Area            | Choice                                                          |
| --------------- | --------------------------------------------------------------- |
| Framework       | Next.js 16 (App Router, Turbopack), React 19                    |
| Language        | TypeScript (strict, `noUncheckedIndexedAccess`)                 |
| Styling         | Tailwind CSS v4 (CSS-variable design tokens, OKLCH palette)     |
| UI              | Hand-built shadcn-style primitives, lucide-react, Framer Motion |
| Theming         | next-themes — dark / light / system, persisted                  |
| Forms           | React Hook Form + Zod v4                                        |
| Quality         | ESLint (incl. FSD boundary rules), Prettier, Husky, lint-staged |
| Package manager | pnpm                                                            |

## Architecture — Feature-Sliced Design

```
src/
├── app/          # Next.js App Router only: routes, layouts, metadata, sitemap, robots, OG image
├── views/        # FSD "pages" layer (renamed: src/pages would trigger the Pages Router)
├── widgets/      # Self-sufficient page blocks: site-header, site-footer, github-activity
├── features/     # User interactions: theme-toggle, project-filter, contact-form
├── entities/     # Domain data + presentation: profile, experience, project, skill
└── shared/       # Zero-domain foundation
    ├── api/      # GitHub + npm API clients (server-only, ISR-cached, null on failure)
    ├── config/   # site config, nav links
    ├── hooks/    # useMounted, …
    ├── lib/      # cn() class merger
    ├── styles/   # globals.css — design tokens for both themes
    ├── ui/       # Button, Card, Badge, Input, motion primitives, …
    └── utils/    # date/period formatting
```

**Layer rule:** a layer may import only from layers strictly below it (`app → views → widgets → features → entities → shared`). This is enforced by ESLint (`no-restricted-imports` per layer) — a violation fails the build. Every slice exposes a barrel `index.ts`; deep imports are the exception, not the rule.

**Content lives in data, not components.** Everything shown on the site (experience, projects, skills, bio) is typed data in `entities/*/model/data.ts`. To update the portfolio, edit those files — no component changes needed.

## Getting started

```bash
pnpm install
cp .env.example .env.local   # then edit values
pnpm dev
```

## Scripts

| Script                              | Purpose                      |
| ----------------------------------- | ---------------------------- |
| `pnpm dev`                          | Development server           |
| `pnpm build`                        | Production build             |
| `pnpm start`                        | Serve the production build   |
| `pnpm lint` / `pnpm lint:fix`       | ESLint (zero-warning policy) |
| `pnpm typecheck`                    | `tsc --noEmit`               |
| `pnpm format` / `pnpm format:check` | Prettier                     |

A Husky pre-commit hook runs lint-staged (ESLint + Prettier on staged files).

## Environment variables

See [.env.example](./.env.example):

- `NEXT_PUBLIC_SITE_URL` — canonical URL used in metadata, sitemap, robots, JSON-LD.
- `GITHUB_TOKEN` _(optional)_ — raises the GitHub API rate limit for the live activity section. The site degrades gracefully without it.
- `RESEND_API_KEY` _(optional)_ — enables real email delivery from the contact form via a server action ([Resend](https://resend.com), free tier). Without it, the form falls back to opening the visitor's email app pre-filled. A hidden honeypot field filters bot submissions.
- `RESEND_FROM` _(optional)_ — custom verified sender; defaults to Resend's sandbox sender.

## Deployment (Vercel)

1. Push the repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — Next.js is detected automatically, zero config.
3. Set `NEXT_PUBLIC_SITE_URL` (and optionally `GITHUB_TOKEN`) in Project → Settings → Environment Variables.
4. Deploy. All pages are static/SSG; GitHub/npm data revalidates hourly via ISR.

## SEO

Metadata API with per-page titles/descriptions and canonicals, Open Graph + Twitter cards, a generated OG image (`next/og`), JSON-LD (`Person`, `WebSite`), `sitemap.xml`, and `robots.txt`.

## Accessibility

Semantic landmarks, keyboard-navigable menus and filters, visible focus rings, `aria-live` for filter results and form status, form errors wired via `aria-describedby`/`role="alert"`, and all animation suppressed under `prefers-reduced-motion`.

## Customization guide

| To change…                        | Edit                                    |
| --------------------------------- | --------------------------------------- |
| Name, links, email, resume path   | `src/shared/config/site.ts`             |
| Bio, values, education, languages | `src/entities/profile/model/data.ts`    |
| Work experience                   | `src/entities/experience/model/data.ts` |
| Projects                          | `src/entities/project/model/data.ts`    |
| Skills & proficiency              | `src/entities/skill/model/data.ts`      |
| Colors / design tokens            | `src/shared/styles/globals.css`         |
| Resume PDF                        | `public/Ahmad_Alghalban_Resume.pdf`     |
