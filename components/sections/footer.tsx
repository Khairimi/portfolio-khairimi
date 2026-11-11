"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/lib/data";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — mailto still works */
    }
  };

  return (
    <footer id="contact" className="relative overflow-hidden pt-12 sm:pt-16">
      <div className="kerawang pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_bottom,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-emerald/10 blur-[120px]" />

      <div className="container relative">
        <Reveal className="glass rounded-3xl p-8 sm:p-12 lg:p-16">
          <p className="eyebrow flex items-center gap-3">
            <span className="text-emerald">05</span>
            <span className="h-px w-8 bg-sand/20" />
            Contact
          </p>
          <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Have a project to coordinate or a system to scope?{" "}
            <span className="text-sand-dim">Let&apos;s talk.</span>
          </h2>
          <p className="mt-5 max-w-xl text-sand-muted">
            Open to internship placements, IT consulting and project coordination roles, and student-led
            collaborations.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button asChild size="lg">
              <a href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" />
                Email me
              </a>
            </Button>
            <button
              onClick={copy}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-sand/15 bg-ink-800/60 px-4 font-mono text-[13px] text-sand-muted transition hover:border-sand/30 hover:text-white"
            >
              {copied ? <Check className="h-4 w-4 text-emerald" /> : <Copy className="h-4 w-4" />}
              {copied ? "copied!" : profile.email}
            </button>
            <Button asChild size="lg" variant="outline">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <LinkedinIcon className="h-4 w-4 text-cyber-soft" />
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <GithubIcon className="h-4 w-4" />
                Khairimi
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
              </a>
            </Button>
          </div>
        </Reveal>

        <div className="py-14 text-center">
          <p className="bg-gradient-to-r from-gold-soft via-sand to-emerald-soft bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-4xl">
            “{profile.motto}”
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-sand/[0.07] py-8 font-mono text-xs text-sand-dim sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.fullName}
          </p>
          <p>
            {profile.institutionShort} · MPP Sesi 2025/2026 · built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
