# Khairi Rahimi — Developer & Student Leader Portfolio

Next.js 15 (App Router) · Tailwind CSS · Framer Motion · Lucide · shadcn-style Radix components.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (verified clean)
```

## Deploy to Vercel (one click)
1. Push this folder to a new GitHub repo, e.g. `Khairimi/portfolio`.
2. In Vercel → **Add New → Project** → import the repo → **Deploy**. No settings or env vars needed.

## Edit content
Everything lives in **`lib/data.ts`**: `profileData`, `projectMetrics`, `leadershipData`, `projectsData`, `achievementsData`, plus gallery captions, roadmap and skills.

- **Metrics:** `null` means unavailable and is shown as "Pending Verification", never as 0. Participation counts are per activity, not unique students.
- **LinkedIn / GitHub:** `profileData.linkedin` and `profileData.github`.
- **Photos:** see `public/gallery/README.md`.
- **New project:** add an entry to `projectsData`, and its tab/accent/icon to the `meta` map in `components/sections/projects.tsx`.

## Structure
```
app/            layout, page, global styles, favicon
components/ui   button, badge, dialog, tabs, spotlight-card, counters
components/sections   nav, hero + terminal, leadership bento, projects, gallery, roadmap, footer
lib/data.ts     all content
```

## Terminal commands
`help`, `cat bio.txt`, `fetch mpp-stats`, `list tech-stack`, `whoami`, `clear`. Also supports ↑/↓ history, Tab completion and Ctrl+L.
