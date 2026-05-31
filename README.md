# Mradul Jain — Portfolio

A calm, editorial portfolio for a senior product designer focused on enterprise systems, AI-assisted workflows, and complex product experiences.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **next-themes** (light / dark / system)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> If `npm install` fails due to a corporate registry, use the public registry:
> `npm install --registry https://registry.npmjs.org`

## Build & deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com) — connect the repo and deploy with default settings.

## Project structure

```
src/
├── app/              # Pages (App Router)
├── components/       # UI, layout, home, projects, case-study
├── data/             # Content (projects, case studies, etc.)
├── lib/              # Utilities & motion presets
└── types/            # TypeScript types
```

## Customization

| What | Where |
|------|--------|
| Projects & case studies | `src/data/projects.ts`, `src/data/case-studies.ts` |
| Playground items | `src/data/playground.ts` |
| About / interests | `src/data/about.ts` |
| Writing placeholders | `src/data/writing.ts` |
| Footer links | `src/data/navigation.ts` |
| Resume PDF | `public/resume/mradul-jain-resume.pdf` |
| Colors | `src/app/globals.css` + `tailwind.config.ts` |

## Pages

- `/` — Home (hero, featured work, philosophy, personality)
- `/work` — Project archive
- `/work/[slug]` — Case study template
- `/about` — Bio & interests
- `/playground` — Creative / experimental work
- `/resume` — Resume viewer & download
- `/writing` — Writing placeholder

## Design notes

- Typography: Geist (display) + Inter (body) via `next/font`
- Theme: system detection + manual toggle
- Motion: subtle fades and reveals; respects `prefers-reduced-motion`
- Case studies prioritize reasoning, constraints, and workflows over UI galleries
