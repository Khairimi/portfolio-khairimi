"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BarChart3,
  Building2,
  Crown,
  Droplets,
  GraduationCap,
  Landmark,
  Palette,
  Users,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { MetricTile } from "@/components/ui/metric";
import { achievementsData, leadershipData, projectMetrics, type PortfolioEntry } from "@/lib/data";

function IconChip({ children, tone }: { children: React.ReactNode; tone: "emerald" | "cyber" | "gold" }) {
  const map = {
    emerald: "border-emerald/30 bg-emerald/10 text-emerald-soft",
    cyber: "border-cyber/30 bg-cyber/10 text-cyber-soft",
    gold: "border-gold/35 bg-gold/10 text-gold-soft",
  };
  return <span className={`grid h-10 w-10 place-items-center rounded-xl border ${map[tone]}`}>{children}</span>;
}

const byId = (id: string) => leadershipData.find((e) => e.id === id) as PortfolioEntry;

/** Initiatives that have already taken place (by event date). */
const COMPLETED = new Set(["warna-warni-warisan"]);

function Bullets({ items, tone = "text-gold/70" }: { items: string[]; tone?: string }) {
  return (
    <ul className="mt-3 space-y-1.5 text-sm text-sand-muted">
      {items.map((x) => (
        <li key={x} className="flex gap-2">
          <span className={`mt-[1px] shrink-0 ${tone}`}>◆</span> {x}
        </li>
      ))}
    </ul>
  );
}

export function Leadership() {
  const dobi = byId("dobi-sutera");
  const mpp = byId("mpp-2025-2026");
  const jpk = byId("jpk-exco-korporat");
  const pmds = byId("pmds");
  const warna = byId("warna-warni-warisan");
  const kerawang = byId("kerawang-town");
  const kelas = byId("class-representative");
  const dobiLink = dobi.links?.[0];

  return (
    <section id="leadership" className="relative py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          index="01"
          label="Leadership & Advocacy · JPK → MPP"
          title={
            <>
              From college committee to campus council — advocacy that starts with{" "}
              <span className="text-emerald">evidence</span>.
            </>
          }
          description="Two years of student leadership: corporate and cultural coordination at Kolej Kerawang (JPK), now carried into the campus-wide MPP as Exco Keusahawanan."
        />

        {/* 1 — Featured primary role: MPP Exco Keusahawanan */}
        <Reveal>
          <div className="neon-border relative overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-emerald/10 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1.25fr_1fr]">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="emerald" glow>
                    <Crown className="h-3 w-3" /> Primary role
                  </Badge>
                  <Badge tone="cyber">{mpp.period}</Badge>
                </div>
                <h3 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {mpp.role}{" "}
                  <span className="bg-gradient-to-r from-emerald-soft to-cyan-300 bg-clip-text text-transparent">
                    MPP Sesi 2025/2026
                  </span>
                </h3>
                <p className="mt-3 max-w-2xl text-sand-muted">{mpp.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {mpp.badges.map((b) => (
                    <Badge key={b} tone="emerald">
                      {b}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <ul className="grid gap-2 text-sm text-sand">
                  {(mpp.initiatives ?? []).map((x) => (
                    <li
                      key={x}
                      className="flex gap-2 rounded-lg border border-sand/[0.07] bg-ink/50 px-3 py-2 transition duration-300 hover:border-emerald/40 hover:shadow-[0_0_18px_-6px_rgba(16,185,129,0.6)]"
                    >
                      <span className="mt-[2px] text-emerald-soft">▸</span> {x}
                    </li>
                  ))}
                </ul>
                <MetricTile metric={projectMetrics.fundraising} tone="emerald" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* progression connector */}
        <div className="flex items-center justify-center gap-3 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-sand-dim">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-emerald/50" />
          <ArrowDown className="h-3.5 w-3.5 text-emerald-soft" />
          built on · JPK Kolej Kerawang
          <ArrowDown className="h-3.5 w-3.5 text-emerald-soft" />
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-emerald/50" />
        </div>

        {/* 2 — JPK Exco Korporat */}
        <Reveal>
          <SpotlightCard glow="cyber" className="relative overflow-hidden p-6 sm:p-8">
            <div className="kerawang pointer-events-none absolute inset-y-0 right-0 w-1/3 opacity-50 [mask-image:linear-gradient(90deg,transparent,black)]" />
            <div className="relative flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <IconChip tone="cyber">
                  <Building2 className="h-5 w-5" />
                </IconChip>
                <div>
                  <p className="eyebrow">College leadership · {jpk.period}</p>
                  <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">{jpk.title}</h3>
                  <p className="mt-0.5 font-mono text-xs text-cyber-soft">{jpk.role}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {jpk.badges.map((b) => (
                  <Badge key={b} tone="cyber">
                    {b}
                  </Badge>
                ))}
              </div>
            </div>

            <p className="relative mt-5 max-w-3xl text-sand-muted">{jpk.description}</p>

            <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
              <MetricTile metric={projectMetrics.culturalEventAttendance} tone="emerald" glow />
              <MetricTile metric={projectMetrics.participantSatisfaction} tone="gold" glow />
              <MetricTile metric={projectMetrics.externalCollaborators} tone="cyber" glow />
            </div>

            <Bullets items={jpk.initiatives ?? []} tone="text-cyber-soft" />
          </SpotlightCard>
        </Reveal>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {/* Dobi Sutera */}
          <Reveal className="lg:col-span-2">
            <SpotlightCard glow="emerald" className="flex h-full flex-col overflow-hidden p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <IconChip tone="emerald">
                    <Droplets className="h-5 w-5" />
                  </IconChip>
                  <div>
                    <p className="eyebrow">Student Welfare · {dobi.period}</p>
                    <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">{dobi.title}</h3>
                  </div>
                </div>
                <Badge tone="emerald" glow>
                  <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-emerald" /> live report
                </Badge>
              </div>

              <p className="mt-2 font-mono text-xs text-emerald-soft">{dobi.role}</p>
              <p className="mt-4 max-w-2xl text-sand-muted">{dobi.description}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <MetricTile metric={projectMetrics.surveyResponseRate} tone="emerald" />
                <div className="rounded-xl border border-sand/[0.07] bg-ink/50 p-3 sm:p-5">
                  <p className="eyebrow">Method note</p>
                  <p className="mt-2 text-sm text-sand-muted">
                    A response rate needs both the number of responses and the number of people invited. Until both
                    are confirmed, the figure is withheld rather than estimated.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {dobi.badges.map((b) => (
                  <Badge key={b}>{b}</Badge>
                ))}
              </div>

              {dobiLink && (
                <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
                  <Button asChild>
                    <a href={dobiLink.href} target="_blank" rel="noreferrer">
                      Open live report
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                  <span className="font-mono text-xs text-sand-dim">{dobiLink.href.replace(/^https?:\/\//, "")}</span>
                </div>
              )}
            </SpotlightCard>
          </Reveal>

          {/* PMDS + class rep */}
          <Reveal delay={0.12}>
            <SpotlightCard glow="gold" className="flex h-full flex-col p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <IconChip tone="gold">
                  <Landmark className="h-5 w-5" />
                </IconChip>
                <p className="eyebrow">Leadership development</p>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{pmds.title}</h3>
              <p className="font-mono text-xs text-gold-soft">{pmds.role}</p>
              <p className="mt-3 text-sm text-sand-muted">{pmds.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {pmds.badges.map((b) => (
                  <Badge key={b} tone="gold">
                    {b}
                  </Badge>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <div className="rounded-xl border border-sand/10 bg-ink/50 px-4 py-3">
                  <p className="flex items-center gap-2 text-sm font-medium text-white">
                    <Users className="h-4 w-4 text-gold-soft" /> {kelas.title}
                  </p>
                  <p className="mt-1 text-xs text-sand-muted">{kelas.description}</p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Warna-Warni Warisan + Kerawang Town */}
          <Reveal delay={0.05} className="lg:col-span-3">
            <SpotlightCard glow="gold" className="relative h-full overflow-hidden p-6 sm:p-7">
              <div className="relative flex items-center gap-3">
                <IconChip tone="gold">
                  <Palette className="h-5 w-5" />
                </IconChip>
                <p className="eyebrow">Cultural & Event Coordination</p>
              </div>
              <div className="relative mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="flex flex-wrap gap-2">
                    {COMPLETED.has(warna.id) && (
                      <Badge tone="emerald" glow>
                        <span className="h-1.5 w-1.5 rounded-full bg-current" /> Completed Inisiatif
                      </Badge>
                    )}
                    {warna.badges.map((b) => (
                      <Badge key={b} tone="gold">
                        {b}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">{warna.title}</h3>
                  <p className="font-mono text-xs text-sand-dim">
                    {warna.period} · {warna.role}
                  </p>
                  <p className="mt-2 text-sm text-sand-muted">{warna.description}</p>
                  <Bullets items={warna.initiatives ?? []} />
                </div>
                <div className="rounded-xl border border-sand/[0.07] bg-ink/50 p-4 sm:p-5">
                  <p className="font-semibold text-white">{kerawang.title}</p>
                  <p className="font-mono text-[11px] text-gold-soft">{kerawang.role}</p>
                  <p className="mt-2 text-sm text-sand-muted">{kerawang.description}</p>
                  <Bullets items={kerawang.initiatives ?? []} />
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>

        {/* Recognition */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievementsData.map((a, i) => (
            <Reveal key={a.id} delay={(i % 3) * 0.06}>
              <SpotlightCard glow="gold" className="h-full p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <IconChip tone="gold">
                    {a.id === "deans-list-2025" ? (
                      <GraduationCap className="h-5 w-5" />
                    ) : a.id === "power-bi-simplilearn-2026" ? (
                      <BarChart3 className="h-5 w-5" />
                    ) : (
                      <Award className="h-5 w-5" />
                    )}
                  </IconChip>
                  <p className="eyebrow">{a.period}</p>
                </div>
                <h3 className="mt-4 font-semibold text-white">{a.title}</h3>
                <p className="font-mono text-[11px] text-gold-soft">{a.role}</p>
                <p className="mt-1 text-sm text-sand-muted">{a.description}</p>
                {a.notes
                  ?.filter((n) => n.startsWith("Certificate Code"))
                  .map((n) => (
                    <p key={n} className="mt-2 font-mono text-[11px] text-sand-dim">
                      {n}
                    </p>
                  ))}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {a.badges.map((b) => (
                    <Badge key={b} tone="gold">
                      {b}
                    </Badge>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
