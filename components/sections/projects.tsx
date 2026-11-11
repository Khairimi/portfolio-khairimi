"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Award, BookOpen, Gamepad2, GitMerge, Network, Smartphone } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/ui/brand-icons";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

type Filter = "all" | Project["category"];
const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "mobile-ai", label: "Mobile & AI" },
  { value: "web-systems", label: "Web & Systems" },
];

const accentText = { emerald: "text-emerald-soft", cyber: "text-cyber-soft", gold: "text-gold-soft" };
const accentBorder = { emerald: "border-emerald/30 bg-emerald/10", cyber: "border-cyber/30 bg-cyber/10", gold: "border-gold/35 bg-gold/10" };

/* ── Tiny bespoke visuals per project ─────────────────────── */

function PriorityViz() {
  const tasks = [
    { t: "CSC661 report", s: 92 },
    { t: "Lab 4 quiz", s: 71 },
    { t: "FYP proposal", s: 58 },
    { t: "Read ch. 7", s: 24 },
  ];
  return (
    <div className="space-y-2.5 font-mono text-[11px]">
      {tasks.map((x, i) => (
        <div key={x.t} className="flex items-center gap-3">
          <span className="w-24 truncate text-sand-muted sm:w-28">{x.t}</span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${x.s}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              className={cn("h-full rounded-full", x.s > 80 ? "bg-emerald" : x.s > 50 ? "bg-gold" : "bg-sand-dim")}
            />
          </div>
          <span className="w-7 text-right tabular-nums text-white">{x.s}</span>
        </div>
      ))}
      <p className="pt-1 text-[10px] text-sand-dim">↳ sample view · every score comes with its reasons</p>
    </div>
  );
}

function PantunViz() {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-4">
      <div>
        <p className="font-mono text-3xl font-semibold tabular-nums text-gold-soft">19,137</p>
        <p className="text-[11px] text-sand-dim">pantun · 15 books</p>
      </div>
      <div className="flex h-12 items-end gap-1">
        {[40, 65, 30, 80, 55, 90, 45, 70, 35, 60, 85, 50, 75, 42, 66].map((h, i) => (
          <motion.span
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.03 }}
            className="flex-1 rounded-sm bg-gradient-to-t from-gold/30 to-gold-soft/80"
          />
        ))}
      </div>
    </div>
  );
}

function MatchViz() {
  const L = [18, 46, 74];
  const R = [18, 46, 74];
  const pairs: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 0],
  ];
  return (
    <svg viewBox="0 0 220 92" className="h-20 w-full">
      {pairs.map(([a, b], i) => (
        <motion.path
          key={i}
          d={`M40 ${L[a]} C 110 ${L[a]}, 110 ${R[b]}, 180 ${R[b]}`}
          fill="none"
          stroke="#60A5FA"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25 * i }}
        />
      ))}
      {L.map((y, i) => (
        <g key={`l${i}`}>
          <circle cx="34" cy={y} r="6" fill="#0B0F17" stroke="#10B981" strokeWidth="1.5" />
          <text x="20" y={y + 3} fontSize="8" fill="#8A8270" textAnchor="end" fontFamily="monospace">
            {["UI", "Py", "Vid"][i]}
          </text>
        </g>
      ))}
      {R.map((y, i) => (
        <g key={`r${i}`}>
          <circle cx="186" cy={y} r="6" fill="#0B0F17" stroke="#D97706" strokeWidth="1.5" />
          <text x="200" y={y + 3} fontSize="8" fill="#8A8270" fontFamily="monospace">
            {["Gtr", "Eng", "Mth"][i]}
          </text>
        </g>
      ))}
    </svg>
  );
}

const icons: Record<string, React.ElementType> = {
  studypilot: Smartphone,
  "khazanah-pantun": BookOpen,
  "skill-exchange": GitMerge,
  "benteng-siber": Gamepad2,
  itt400: Network,
};

function Visual({ slug }: { slug: string }) {
  if (slug === "studypilot") return <PriorityViz />;
  if (slug === "khazanah-pantun") return <PantunViz />;
  if (slug === "skill-exchange") return <MatchViz />;
  return null;
}

function ProjectCard({ p, wide }: { p: Project; wide: boolean }) {
  const Icon = icons[p.slug] ?? Smartphone;
  const hasViz = ["studypilot", "khazanah-pantun", "skill-exchange"].includes(p.slug);

  return (
    <SpotlightCard as="article" glow={p.accent} className="flex h-full flex-col p-6 sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <span className={cn("grid h-10 w-10 place-items-center rounded-xl border", accentBorder[p.accent], accentText[p.accent])}>
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-mono text-[11px] text-sand-dim">
          {p.category === "mobile-ai" ? "mobile · ai" : "web · systems"}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">{p.title}</h3>
      <p className={cn("font-mono text-xs", accentText[p.accent])}>{p.subtitle}</p>

      {p.badge && (
        <div className="mt-4 flex items-start gap-2 rounded-lg border border-gold/30 bg-gold/[0.08] px-3 py-2 text-xs text-gold-soft">
          <Award className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {p.badge}
        </div>
      )}

      <div className={cn("mt-4 grid gap-6", wide && hasViz && "md:grid-cols-[1.1fr_1fr]")}>
        <div>
          <p className="text-sm leading-relaxed text-sand-muted">{p.description}</p>
          <ul className="mt-4 space-y-1.5 text-sm">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sand">
                <span className={cn("mt-[3px] font-mono text-[10px]", accentText[p.accent])}>▸</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
        {hasViz && (
          <div className="rounded-xl border border-sand/[0.07] bg-ink/60 p-4">
            <Visual slug={p.slug} />
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {p.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      {p.links && p.links.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {p.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "group/link inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs transition duration-300",
                l.kind === "live"
                  ? "border-emerald/40 bg-emerald/10 text-emerald-soft hover:border-emerald/70 hover:bg-emerald/20 hover:shadow-[0_0_18px_-2px_rgba(16,185,129,0.55)]"
                  : "border-sand/15 text-sand-muted hover:border-sand/40 hover:text-white hover:shadow-[0_0_18px_-4px_rgba(231,220,200,0.45)]"
              )}
            >
              {l.kind === "github" ? <GithubIcon className="h-3.5 w-3.5" /> : null}
              {l.label}
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>
          ))}
        </div>
      )}
    </SpotlightCard>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sand/15 to-transparent" />
      <div className="container">
        <SectionHeading
          index="02"
          label="Technical Projects"
          title={
            <>
              Systems I&apos;ve <span className="text-cyber-soft">designed</span>, shipped &amp; defended.
            </>
          }
          description="From explainable scoring in a study app to stable-matching algorithms and AI for Malay heritage — each project solves a problem real people raised."
        />

        <Tabs value={filter} onValueChange={(v) => setFilter(v as Filter)} className="mb-8">
          <TabsList aria-label="Filter projects">
            {filters.map((f) => (
              <TabsTrigger key={f.value} value={f.value}>
                {filter === f.value && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 -z-0 rounded-lg bg-emerald"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
                <span className="relative z-10 ml-1.5 opacity-60">
                  {f.value === "all" ? projects.length : projects.filter((p) => p.category === f.value).length}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <motion.div layout className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => {
              const wide = p.slug === "studypilot";
              return (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(wide && "md:col-span-2")}
                >
                  <ProjectCard p={p} wide={wide} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
