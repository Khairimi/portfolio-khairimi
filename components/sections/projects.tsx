"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Gamepad2,
  GitMerge,
  Network,
  Smartphone,
  UtensilsCrossed,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/ui/brand-icons";
import { MetricTile } from "@/components/ui/metric";
import { achievementsData, projectsData, type PortfolioEntry } from "@/lib/data";
import { cn } from "@/lib/utils";

type Category = "mobile-ai" | "web-systems";
type Accent = "emerald" | "cyber" | "gold";
type Filter = "all" | Category;
const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "mobile-ai", label: "Mobile & AI" },
  { value: "web-systems", label: "Web & Systems" },
];

/** Presentation-only metadata, keyed by project id (content itself lives in lib/data.ts). */
const meta: Record<string, { category: Category; accent: Accent; icon: React.ElementType }> = {
  studypilot: { category: "mobile-ai", accent: "emerald", icon: Smartphone },
  "khazanah-pantun": { category: "mobile-ai", accent: "gold", icon: BookOpen },
  "community-skill-exchange": { category: "mobile-ai", accent: "cyber", icon: GitMerge },
  "benteng-siber": { category: "web-systems", accent: "cyber", icon: Gamepad2 },
  "food-ordering-system": { category: "web-systems", accent: "gold", icon: UtensilsCrossed },
  "packet-tracer-lan": { category: "web-systems", accent: "emerald", icon: Network },
};
const fallbackMeta = { category: "web-systems" as Category, accent: "emerald" as Accent, icon: Smartphone };

const accentText = { emerald: "text-emerald-soft", cyber: "text-cyber-soft", gold: "text-gold-soft" };
const accentBorder = { emerald: "border-emerald/30 bg-emerald/10", cyber: "border-cyber/30 bg-cyber/10", gold: "border-gold/35 bg-gold/10" };

/* ── Tiny bespoke visuals per project ─────────────────────── */

function PantunViz({ metrics }: { metrics: PortfolioEntry["metrics"] }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {metrics.slice(0, 4).map((m) => (
        <MetricTile key={m.id} metric={m} tone="gold" className="sm:p-3" />
      ))}
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
    <svg viewBox="0 0 220 92" className="h-20 w-full" role="img" aria-label="Illustration of stable matching between two sets of skills">
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

function Visual({ p }: { p: PortfolioEntry }) {
  if (p.id === "khazanah-pantun") return <PantunViz metrics={p.metrics} />;
  if (p.id === "community-skill-exchange") return <MatchViz />;
  return null;
}

const hasViz = (p: PortfolioEntry) =>
  ["khazanah-pantun", "community-skill-exchange"].includes(p.id);

function ProjectCard({ p }: { p: PortfolioEntry }) {
  const { category, accent, icon: Icon } = meta[p.id] ?? fallbackMeta;
  const viz = hasViz(p);
  const award = p.id === "khazanah-pantun" ? achievementsData[0] : undefined;

  return (
    <SpotlightCard as="article" glow={accent} className="flex h-full flex-col p-6 sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <span className={cn("grid h-10 w-10 place-items-center rounded-xl border", accentBorder[accent], accentText[accent])}>
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-mono text-[11px] text-sand-dim">
          {category === "mobile-ai" ? "mobile · ai" : "web · systems"}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">{p.title}</h3>
      <p className={cn("font-mono text-xs", accentText[accent])}>{p.role}</p>
      {p.period && <p className="mt-0.5 font-mono text-[11px] text-sand-dim">{p.period}</p>}

      {award && (
        <div className="mt-4 flex items-start gap-2 rounded-lg border border-gold/30 bg-gold/[0.08] px-3 py-2 text-xs text-gold-soft">
          <Award className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {award.title}
        </div>
      )}

      <div className={cn("mt-4 grid gap-6", viz && "md:grid-cols-[1.1fr_1fr] lg:grid-cols-1")}>
        <div>
          <p className="text-sm leading-relaxed text-sand-muted">{p.description}</p>
          {p.initiatives && (
            <ul className="mt-4 space-y-1.5 text-sm">
              {p.initiatives.map((h) => (
                <li key={h} className="flex gap-2 text-sand">
                  <span className={cn("mt-[3px] font-mono text-[10px]", accentText[accent])}>▸</span>
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>
        {viz && (
          <div className="rounded-xl border border-sand/[0.07] bg-ink/60 p-4">
            <Visual p={p} />
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {(p.technologies ?? []).map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
        {p.badges.map((b) => (
          <Badge key={b} tone={accent}>
            {b}
          </Badge>
        ))}
      </div>

      {p.links && p.links.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {p.links.map((l) => {
            const isGithub = l.href.includes("github.com");
            return (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "group/link inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs transition duration-300",
                  isGithub
                    ? "border-sand/15 text-sand-muted hover:border-sand/40 hover:text-white hover:shadow-[0_0_18px_-4px_rgba(231,220,200,0.45)]"
                    : "border-emerald/40 bg-emerald/10 text-emerald-soft hover:border-emerald/70 hover:bg-emerald/20 hover:shadow-[0_0_18px_-2px_rgba(16,185,129,0.55)]"
                )}
              >
                {isGithub ? <GithubIcon className="h-3.5 w-3.5" /> : null}
                {l.title}
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            );
          })}
        </div>
      )}
    </SpotlightCard>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const categoryOf = (p: PortfolioEntry) => (meta[p.id] ?? fallbackMeta).category;
  const visible = projectsData.filter((p) => filter === "all" || categoryOf(p) === filter);

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
          description="From a study planner with explainable priorities to stable-matching algorithms and responsible AI for Malay heritage — each project starts from a problem real people raised."
        />

        <Tabs value={filter} onValueChange={(v) => setFilter(v as Filter)} className="mb-8">
          <TabsList aria-label="Filter projects">
            {filters.map((f) => (
              <TabsTrigger key={f.value} value={f.value}>
                {filter === f.value && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-emerald to-emerald-soft shadow-[0_0_20px_rgba(16,185,129,0.65)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
                <span className="relative z-10 ml-1.5 opacity-60">
                  {f.value === "all" ? projectsData.length : projectsData.filter((p) => categoryOf(p) === f.value).length}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <motion.div layout className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => {
              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard p={p} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
