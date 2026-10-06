# Piraisudan R — Portfolio

Personal portfolio for a full stack engineer: selected projects with case-study write-ups, an experience timeline, and a skills overview.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Deployed on Vercel.

## Highlights

- Statically generated project pages (`/portfolio/[slug]`) with per-project Open Graph images, JSON-LD (`Person`, `WebSite`, `ItemList`, `CreativeWork`, `BreadcrumbList`), sitemap, and robots.
- All content lives in one typed file: [`app/data/data.ts`](app/data/data.ts) (skills, experience, projects). No CMS.
- Lightweight motion: CSS keyframes for the hero, an `IntersectionObserver`-based `<Reveal>` for scroll-in, and `prefers-reduced-motion` respected globally.
- No UI library; every component is in [`app/component`](app/component).

## Running locally

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

## Editing content

| What               | Where                                            |
| ------------------ | ------------------------------------------------ |
| Name, email, links | `app/lib/site.ts`                                |
| Résumé page        | `/resume` — print-friendly; recruiters can Save as PDF             |
| Résumé PDF         | Optional: set `RESUME_URL` in `app/lib/site.ts` and put the file in `public/` |
| Experience         | `experience_list` in `app/data/data.ts`          |
| Skills             | `skill_gridList` in `app/data/data.ts`           |
| Projects           | `portfolio_gridList` in `app/data/data.ts` (add `links.live` / `links.source` to show buttons) |

Demo videos are re-encoded to 720p H.264 and stored in `public/`; poster frames sit alongside them as `*-poster.jpg`.

## Scripts

```bash
pnpm dev     # start dev server
pnpm build   # production build
pnpm start   # serve the production build
pnpm lint    # eslint
```
