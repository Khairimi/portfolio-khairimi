"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileBarChart, Mail, MapPin, Award, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Terminal } from "./terminal";
import { leadershipData, profileData } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;
const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease } },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      {/* backdrop */}
      <div className="grid-lines pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-emerald/10 blur-[120px]" />

      <div className="container relative grid grid-cols-[minmax(0,1fr)] items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-12">
        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.09 }} className="min-w-0">
          <motion.div
            variants={item}
            className="neon-border mb-4 inline-flex max-w-full items-center gap-3 rounded-full py-2 pl-2.5 pr-5"
          >
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald/15 text-emerald-soft shadow-[0_0_14px_rgba(16,185,129,0.6)]">
              <Crown className="h-3.5 w-3.5" />
            </span>
            <span className="truncate font-mono text-[12px] sm:text-[13px]">
              <span className="font-semibold text-white">{leadershipData[0].role}</span>{" "}
              <span className="bg-gradient-to-r from-emerald-soft to-cyan-300 bg-clip-text text-transparent">
                MPP Sesi 2025/2026
              </span>
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mb-4 ml-2 flex max-w-full flex-wrap items-center gap-x-2 font-mono text-[11px] text-sand-dim sm:text-xs"
          >
            <span className="text-cyber-soft">JPK Kolej Kerawang</span>
            <span>Exco Korporat</span>
            <span className="text-emerald-soft">→</span>
            <span className="text-emerald-soft">MPP</span>
            <span>Exco Keusahawanan</span>
          </motion.p>

          <motion.div
            variants={item}
            className="mb-7 flex w-fit max-w-full items-center gap-2.5 rounded-full border border-emerald/25 bg-emerald/[0.07] py-1.5 pl-2 pr-4 text-[12px] text-sand sm:text-[13px]"
          >
            <span className="relative grid h-5 w-5 shrink-0 place-items-center">
              <span className="h-2 w-2 animate-pulseDot rounded-full bg-emerald" />
            </span>
            <span className="truncate">
              Open for IT Consulting & Project Coordination
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance text-[2.15rem] font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-[4.1rem]"
          >
            Khairi Rahimi
            <span className="text-sand-dim"> — </span>
            <span className="block text-sand/90 sm:inline">
              Bridging{" "}
              <span className="bg-gradient-to-r from-emerald via-emerald-soft to-cyber-soft bg-clip-text text-transparent">
                Mobile Computing
              </span>{" "}
              &amp;{" "}
              <span className="relative text-gold-soft sm:whitespace-nowrap">
                Campus Leadership.
                <svg
                  aria-hidden
                  viewBox="0 0 300 12"
                  className="absolute -bottom-2 left-0 hidden h-2.5 w-full text-gold/60 sm:block"
                  preserveAspectRatio="none"
                >
                  <path d="M2 9 C 80 2, 200 2, 298 7" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-xl text-pretty text-[17px] leading-relaxed text-sand-muted">
            Information Systems student specialising in{" "}
            <span className="text-sand">Mobile Computing</span>,{" "}
            <span className="text-sand">Flutter app development</span> and{" "}
            <span className="text-sand">Responsible AI</span> — and an elected MPP voice for student
            entrepreneurship and welfare. I turn campus problems into evidence, and evidence into working systems.
          </motion.p>

          <motion.div variants={item} className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-sand-dim">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-cyber-soft" /> {profileData.institutionShort}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5 text-gold-soft" /> {profileData.badges[2]}
            </span>
            <span>{profileData.programmeCode}</span>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg">
              <a href="#projects">
                Explore Technical Projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#leadership">
                <FileBarChart className="h-4 w-4 text-cyber-soft" />
                View MPP Advocacy Report
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.35, ease }}
          style={{ transformPerspective: 1200 }}
          className="min-w-0"
        >
          <Terminal />
        </motion.div>
      </div>

      {/* marquee strip */}
      <div className="relative mt-16 border-y sm:mt-20 border-sand/[0.07] bg-ink-800/40 py-3.5 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-sand-dim">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-10" aria-hidden={k === 1}>
              {[
                "Flutter",
                "Next.js",
                "Firebase",
                "Student Advocacy",
                "Gale–Shapley",
                "Project Coordination",
                "Responsible AI",
                "Cisco Networking",
                "Exco Keusahawanan",
              ].map((t) => (
                <span key={t} className="flex items-center gap-10">
                  {t}
                  <span className="text-gold/60">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
