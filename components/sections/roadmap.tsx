"use client";

import { motion } from "framer-motion";
import { BarChart3, Check, Cpu, Smartphone, Target, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Reveal } from "@/components/ui/reveal";
import { roadmap, skills, type Milestone } from "@/lib/data";
import { cn } from "@/lib/utils";

const skillIcons = { mobile: Smartphone, data: BarChart3, leadership: Users, systems: Cpu };
const skillGlow = { mobile: "emerald", data: "cyber", leadership: "gold", systems: "emerald" } as const;
const skillText = { mobile: "text-emerald-soft", data: "text-cyber-soft", leadership: "text-gold-soft", systems: "text-emerald-soft" };

function Node({ status }: { status: Milestone["status"] }) {
  if (status === "done")
    return (
      <span className="grid h-9 w-9 place-items-center rounded-full border border-emerald/50 bg-emerald text-ink">
        <Check className="h-4 w-4" strokeWidth={3} />
      </span>
    );
  if (status === "current")
    return (
      <span className="relative grid h-9 w-9 place-items-center rounded-full border border-emerald bg-ink">
        <span className="absolute inset-0 animate-ping rounded-full border border-emerald/50" />
        <span className="h-3 w-3 rounded-full bg-emerald" />
      </span>
    );
  if (status === "goal")
    return (
      <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/60 bg-gold/15 text-gold-soft">
        <Target className="h-4 w-4" />
      </span>
    );
  return <span className="block h-9 w-9 rounded-full border border-dashed border-sand/30 bg-ink" />;
}

export function Roadmap() {
  const doneShare = 1.5 / (roadmap.length - 1); // progress line reaches mid-way to the next node

  return (
    <section id="roadmap" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sand/15 to-transparent" />
      <div className="container">
        <SectionHeading
          index="04"
          label="Skills & Career Roadmap"
          title={
            <>
              The route to <span className="text-gold-soft">Technology Consultant</span>.
            </>
          }
          description="A deliberate path: strong technical foundations, real leadership reps, then industry — so I can speak both to engineers and to the people they build for."
        />

        {/* Timeline: horizontal on desktop, vertical on mobile */}
        <Reveal>
          <div className="relative">
            {/* desktop rail */}
            <div className="absolute left-[10%] right-[10%] top-[18px] hidden h-px bg-sand/15 lg:block">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: doneShare }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                className="h-px origin-left bg-gradient-to-r from-emerald to-emerald-soft shadow-[0_0_12px_rgba(16,185,129,.8)]"
              />
            </div>
            {/* mobile rail */}
            <div className="absolute bottom-6 left-[17px] top-6 w-px bg-sand/15 lg:hidden" />

            <ol className="grid gap-8 lg:grid-cols-5 lg:gap-4">
              {roadmap.map((m, i) => (
                <motion.li
                  key={m.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.12 * i }}
                  className="relative flex gap-5 lg:flex-col lg:items-center lg:gap-4 lg:text-center"
                >
                  <div className="relative z-10 shrink-0">
                    <Node status={m.status} />
                  </div>
                  <div>
                    <p
                      className={cn(
                        "font-mono text-[11px] uppercase tracking-[0.16em]",
                        m.status === "current" ? "text-emerald" : m.status === "goal" ? "text-gold-soft" : "text-sand-dim"
                      )}
                    >
                      {m.period}
                    </p>
                    <p className="mt-1.5 font-semibold leading-snug text-white">{m.title}</p>
                    <p className="text-sm text-sand-muted">{m.place}</p>
                    <p className="mt-1 text-xs text-sand-dim">{m.note}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* Skills */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => {
            const Icon = skillIcons[s.icon];
            return (
              <Reveal key={s.group} delay={i * 0.06}>
                <SpotlightCard glow={skillGlow[s.icon]} className="h-full p-6">
                  <Icon className={cn("h-5 w-5", skillText[s.icon])} />
                  <p className="mt-4 font-semibold text-white">{s.group}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {s.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-md border border-sand/10 bg-ink/60 px-2 py-1 font-mono text-[11px] text-sand-muted transition duration-300 hover:border-emerald/50 hover:text-emerald-soft hover:shadow-[0_0_14px_-3px_rgba(16,185,129,0.7)]"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
