"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Coffee,
  Droplets,
  Landmark,
  Megaphone,
  Palette,
  Store,
  Trophy,
  Users,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { dobiSutera, leadershipBadges, profile } from "@/lib/data";

function IconChip({ children, tone }: { children: React.ReactNode; tone: "emerald" | "cyber" | "gold" }) {
  const map = {
    emerald: "border-emerald/30 bg-emerald/10 text-emerald-soft",
    cyber: "border-cyber/30 bg-cyber/10 text-cyber-soft",
    gold: "border-gold/35 bg-gold/10 text-gold-soft",
  };
  return <span className={`grid h-10 w-10 place-items-center rounded-xl border ${map[tone]}`}>{children}</span>;
}

export function Leadership() {
  const pct = (dobiSutera.responses / dobiSutera.target) * 100;

  return (
    <section id="leadership" className="relative py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          index="01"
          label="Leadership & Advocacy · MPP 2025/2026"
          title={
            <>
              Advocacy that starts with <span className="text-emerald">data</span>, not complaints.
            </>
          }
          description="As an elected MPP representative, I treat student issues like a product problem: gather evidence, quantify the pain, then bring a clear case to the people who can act."
        />

        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto]">
          {/* A — Featured data story */}
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <SpotlightCard glow="emerald" className="flex h-full flex-col overflow-hidden p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <IconChip tone="emerald">
                    <Droplets className="h-5 w-5" />
                  </IconChip>
                  <div>
                    <p className="eyebrow">Featured Data Story</p>
                    <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">{dobiSutera.title}</h3>
                  </div>
                </div>
                <Badge tone="emerald">
                  <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-emerald" /> live report
                </Badge>
              </div>

              <p className="mt-5 max-w-2xl text-sand-muted">
                Students raised concerns about laundry hygiene. I ran a structured, anonymous survey and turned the
                responses into a public evidence report for campus management and the laundry operator.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                {[
                  {
                    to: dobiSutera.responses,
                    suffix: "+",
                    label: "Responses gathered",
                    tone: "text-emerald",
                    bar: "bg-emerald",
                    fill: pct,
                    note: `${pct.toFixed(0)}% of ${dobiSutera.target} target`,
                  },
                  {
                    to: dobiSutera.hygieneFlagged,
                    suffix: "%",
                    label: "Flagged hygiene issues",
                    tone: "text-gold-soft",
                    bar: "bg-gold-soft",
                    fill: dobiSutera.hygieneFlagged,
                    note: "of respondents",
                  },
                  {
                    to: dobiSutera.siswiShare,
                    suffix: "%",
                    decimals: 1,
                    label: "Siswi representation",
                    tone: "text-cyber-soft",
                    bar: "bg-cyber-soft",
                    fill: dobiSutera.siswiShare,
                    marker: dobiSutera.parityBenchmark,
                    note: `${dobiSutera.parityBenchmark}% parity mark`,
                  },
                ].map((s, i) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-sand/[0.07] bg-ink/50 p-3 transition duration-300 hover:border-sand/20 hover:bg-ink/70 sm:p-5"
                  >
                    <AnimatedCounter
                      to={s.to}
                      suffix={s.suffix}
                      decimals={s.decimals ?? 0}
                      className={`block font-mono text-2xl font-semibold tabular-nums tracking-tight sm:text-4xl ${s.tone}`}
                    />
                    <span className="mt-1.5 block text-[11px] leading-snug text-sand-dim sm:text-xs">{s.label}</span>
                    <div className="relative mt-3 h-1.5 overflow-hidden rounded-full bg-ink">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.fill}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.12 }}
                        className={`h-full rounded-full shadow-[0_0_10px_currentColor] ${s.bar} ${s.tone}`}
                      />
                      {s.marker !== undefined && (
                        <span className="absolute top-0 h-full w-px bg-sand/60" style={{ left: `${s.marker}%` }} />
                      )}
                    </div>
                    <span className="mt-1.5 block font-mono text-[10px] text-sand-dim">{s.note}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <div className="mb-2 flex items-baseline justify-between font-mono text-xs">
                  <span className="text-sand-muted">Response target</span>
                  <span className="text-sand">
                    <span className="text-emerald">{dobiSutera.responses}</span> / {dobiSutera.target}
                    <span className="ml-2 text-sand-dim">({pct.toFixed(1)}%)</span>
                  </span>
                </div>
                <div className="relative h-3 overflow-hidden rounded-full border border-sand/10 bg-ink">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="relative h-full rounded-full bg-gradient-to-r from-emerald-deep via-emerald to-emerald-soft shadow-[0_0_16px_rgba(16,185,129,0.55)]"
                  >
                    <span className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent_0_6px,rgba(255,255,255,.12)_6px_12px)]" />
                  </motion.div>
                  {/* 200 target tick marks */}
                  {[25, 50, 75].map((t) => (
                    <span key={t} className="absolute top-0 h-full w-px bg-sand/15" style={{ left: `${t}%` }} />
                  ))}
                </div>
                <div className="mt-1.5 flex justify-between font-mono text-[10px] text-sand-dim">
                  <span>0</span>
                  <span>50</span>
                  <span>100</span>
                  <span>150</span>
                  <span>200</span>
                </div>
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
                <Button asChild>
                  <a href={dobiSutera.reportUrl} target="_blank" rel="noreferrer">
                    Open live report
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </Button>
                <span className="font-mono text-xs text-sand-dim">dobi-sutera-mpp.vercel.app</span>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* B — Welfare & Entrepreneurship */}
          <Reveal delay={0.1} className="lg:row-span-2">
            <SpotlightCard glow="gold" className="flex h-full flex-col p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <IconChip tone="gold">
                  <Coffee className="h-5 w-5" />
                </IconChip>
                <p className="eyebrow">Welfare & Entrepreneurship</p>
              </div>

              <div className="mt-6 rounded-xl border border-gold/20 bg-gradient-to-br from-gold/10 to-transparent p-5">
                <p className="font-mono text-xs text-gold-soft">MPP Care</p>
                <h3 className="mt-1 text-lg font-semibold text-white">Breakfast Boost</h3>
                <div className="mt-3 flex items-end gap-2">
                  <AnimatedCounter to={100} className="font-mono text-5xl font-semibold tabular-nums text-gold-soft" />
                  <span className="mb-1.5 text-sm text-sand-muted">free breakfast packs</span>
                </div>
                <p className="mt-3 text-sm text-sand-muted">
                  Distributed at Dataran Lestari with sponsorship from <span className="text-sand">Terengganu Inc</span>.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {leadershipBadges.breakfast.map((b) => (
                    <Badge key={b.label} tone={b.tone} glow>
                      <span className="h-1.5 w-1.5 rounded-full bg-current" /> {b.label}
                    </Badge>
                  ))}
                </div>
              </div>

              <ul className="mt-5 space-y-4">
                <li className="flex gap-3">
                  <Store className="mt-0.5 h-4 w-4 shrink-0 text-emerald-soft" />
                  <div>
                    <p className="font-medium text-white">Kerawang Town 2.0</p>
                    <p className="text-sm text-sand-muted">Vendor coordination for the programme.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Megaphone className="mt-0.5 h-4 w-4 shrink-0 text-cyber-soft" />
                  <div>
                    <p className="font-medium text-white">MASMED Eastern Region</p>
                    <p className="text-sm text-sand-muted">Event leadership for the Digital Marketing programme.</p>
                  </div>
                </li>
              </ul>
            </SpotlightCard>
          </Reveal>

          {/* C — Culture & events */}
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
                    <Badge tone="gold">Director / Coordinator</Badge>
                    {leadershipBadges.warna.map((b) => (
                      <Badge key={b.label} tone={b.tone} glow>
                        <span className="h-1.5 w-1.5 rounded-full bg-current" /> {b.label}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">Warna-Warni Warisan Terengganu</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-sand-muted">
                    {["Pantai Timur forum", "Traditional cultural games", "Malam Tokoh Warisan"].map((x) => (
                      <li key={x} className="flex items-center gap-2">
                        <span className="text-gold/70">◆</span> {x}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Badge tone="cyber">Official Coordinator</Badge>
                  <h3 className="mt-3 text-lg font-semibold text-white">AKRM 2026 Submission</h3>
                  <p className="mt-3 text-sm text-sand-muted">
                    Anugerah Kecemerlangan Residensi Mahasiswa — coordinated the campus submission.
                  </p>
                  <Trophy className="mt-4 h-5 w-5 text-gold-soft" />
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* D — Role card */}
          <Reveal delay={0.12}>
            <SpotlightCard glow="emerald" className="flex h-full flex-col justify-between p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <IconChip tone="emerald">
                  <Landmark className="h-5 w-5" />
                </IconChip>
                <p className="eyebrow">Mandate</p>
              </div>
              <div className="mt-6">
                <p className="text-sm text-sand-muted">Elected MPP · Sesi 2025/2026</p>
                <div className="mt-3 flex flex-col gap-2">
                  {profile.portfolios.map((p) => (
                    <span
                      key={p}
                      className="flex items-center gap-2 rounded-lg border border-sand/10 bg-ink/50 px-3 py-2 text-sm text-white"
                    >
                      <Users className="h-4 w-4 text-emerald-soft" /> {p}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
