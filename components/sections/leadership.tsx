"use client";

import { ArrowUpRight, Award, Droplets, GraduationCap, Landmark, Palette, Store, Users } from "lucide-react";
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
          <span className={`mt-[1px] ${tone}`}>◆</span> {x}
        </li>
      ))}
    </ul>
  );
}

export function Leadership() {
  const dobi = byId("dobi-sutera");
  const mpp = byId("mpp-2025-2026");
  const warna = byId("warna-warni-warisan");
  const kerawang = byId("kerawang-town");
  const jpk = byId("jpk");
  const kelas = byId("class-representative");
  const dobiLink = dobi.links?.[0];

  return (
    <section id="leadership" className="relative py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          index="01"
          label="Leadership & Advocacy · MPP 2025/2026"
          title={
            <>
              Advocacy that starts with <span className="text-emerald">evidence</span>, not complaints.
            </>
          }
          description="As an elected MPP representative, I treat student issues like a product problem: gather the evidence, report it clearly, then bring it to the people who can act."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {/* A — Dobi Sutera */}
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

          {/* B — MPP mandate */}
          <Reveal delay={0.1}>
            <SpotlightCard glow="gold" className="flex h-full flex-col p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <IconChip tone="gold">
                  <Store className="h-5 w-5" />
                </IconChip>
                <p className="eyebrow">Entrepreneurship · MPP</p>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{mpp.role}</h3>
              <p className="font-mono text-xs text-gold-soft">{mpp.title}</p>
              <p className="mt-3 text-sm text-sand-muted">{mpp.description}</p>
              <Bullets items={mpp.initiatives ?? []} />
              <div className="mt-auto pt-5">
                <MetricTile metric={projectMetrics.fundraising} tone="gold" />
              </div>
            </SpotlightCard>
          </Reveal>

          {/* C — Warna-Warni Warisan + Kerawang Town */}
          <Reveal delay={0.05} className="lg:col-span-2">
            <SpotlightCard glow="cyber" className="relative h-full overflow-hidden p-6 sm:p-7">
              <div className="kerawang pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-60 [mask-image:linear-gradient(90deg,transparent,black)]" />
              <div className="relative flex items-center gap-3">
                <IconChip tone="cyber">
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
                  <Bullets items={warna.initiatives ?? []} />
                </div>
                <div className="space-y-4">
                  <MetricTile metric={projectMetrics.culturalEventAttendance} tone="cyber" />
                  <div className="rounded-xl border border-sand/[0.07] bg-ink/50 p-4">
                    <p className="font-semibold text-white">{kerawang.title}</p>
                    <p className="font-mono text-[11px] text-cyber-soft">{kerawang.role}</p>
                    <p className="mt-2 text-sm text-sand-muted">{kerawang.description}</p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* D — Foundations */}
          <Reveal delay={0.12}>
            <SpotlightCard glow="emerald" className="flex h-full flex-col p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <IconChip tone="emerald">
                  <Landmark className="h-5 w-5" />
                </IconChip>
                <p className="eyebrow">Representation roots</p>
              </div>
              <div className="mt-5 flex flex-col gap-3">
                {[jpk, kelas].map((e) => (
                  <div key={e.id} className="rounded-xl border border-sand/10 bg-ink/50 px-4 py-3">
                    <p className="flex items-center gap-2 text-sm font-medium text-white">
                      <Users className="h-4 w-4 text-emerald-soft" /> {e.title}
                    </p>
                    <p className="mt-1 text-xs text-sand-muted">{e.description}</p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        </div>

        {/* Recognition */}
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {achievementsData.map((a, i) => (
            <Reveal key={a.id} delay={i * 0.06}>
              <SpotlightCard glow="gold" className="h-full p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <IconChip tone="gold">{a.id === "deans-list-2025" ? <GraduationCap className="h-5 w-5" /> : <Award className="h-5 w-5" />}</IconChip>
                  <p className="eyebrow">{a.period}</p>
                </div>
                <h3 className="mt-4 font-semibold text-white">{a.title}</h3>
                <p className="mt-1 text-sm text-sand-muted">{a.description}</p>
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
