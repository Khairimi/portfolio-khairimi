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
Everything lives in **`lib/data.ts`**: profile, Dobi Sutera numbers, projects, gallery captions, roadmap, skills.

- **LinkedIn:** replace `profile.linkedin` with your real profile URL.
- **Photos:** see `public/gallery/README.md`.
- **New project:** add an object to `projects`. The `category` decides which tab it appears under.

## Structure
```
app/            layout, page, global styles, favicon
components/ui   button, badge, dialog, tabs, spotlight-card, counters
components/sections   nav, hero + terminal, leadership bento, projects, gallery, roadmap, footer
lib/data.ts     all content
```

## Terminal commands
`help`, `cat bio.txt`, `fetch mpp-stats`, `list tech-stack`, `whoami`, `clear`. Also supports ↑/↓ history, Tab completion and Ctrl+L.
