"use client";

import { motion } from "framer-motion";
import { Hourglass } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { cn } from "@/lib/utils";
import type { Metric } from "@/lib/data";

const tones = {
  emerald: { text: "text-emerald", bar: "bg-emerald" },
  cyber: { text: "text-cyber-soft", bar: "bg-cyber-soft" },
  gold: { text: "text-gold-soft", bar: "bg-gold-soft" },
};

export type MetricTone = keyof typeof tones;

/** Number of decimals needed to display the value as given (0.45 → 2, 79 → 0). */
function decimalsOf(n: number) {
  const s = String(n);
  return s.includes(".") ? s.split(".")[1].length : 0;
}

/**
 * Renders one verified metric. `value === null` means "not available", so it is shown
 * as "Pending Verification" with an indeterminate bar — never as 0.
 */
export function MetricTile({
  metric,
  tone = "emerald",
  className,
}: {
  metric: Metric;
  tone?: MetricTone;
  className?: string;
}) {
  const t = tones[tone];
  const pending = metric.value === null;
  const isPercent = metric.unit === "%";

  return (
    <div
      title={metric.description}
      className={cn(
        "rounded-xl border border-sand/[0.07] bg-ink/50 p-3 transition duration-300 hover:border-sand/20 hover:bg-ink/70 sm:p-5",
        className
      )}
    >
      {pending ? (
        <span className="flex items-center gap-2 font-mono text-sm font-semibold text-gold-soft sm:text-base">
          <Hourglass className="h-4 w-4 shrink-0" /> Pending Verification
        </span>
      ) : (
        <span className={cn("block font-mono text-2xl font-semibold tabular-nums tracking-tight sm:text-4xl", t.text)}>
          <AnimatedCounter to={metric.value as number} decimals={decimalsOf(metric.value as number)} />
          {isPercent && "%"}
        </span>
      )}
      <span className="mt-1.5 block text-[11px] leading-snug text-sand-muted sm:text-xs">{metric.title}</span>

      <div className="relative mt-3 h-1.5 overflow-hidden rounded-full bg-ink">
        {pending ? (
          <motion.span
            className="absolute inset-y-0 w-1/3 rounded-full bg-gold-soft/70"
            animate={{ left: ["-33%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        ) : isPercent ? (
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${metric.value}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className={cn("h-full rounded-full shadow-[0_0_10px_currentColor]", t.bar, t.text)}
          />
        ) : (
          <span className={cn("block h-full w-full rounded-full opacity-40", t.bar)} />
        )}
      </div>
      <span className="mt-1.5 block font-mono text-[10px] text-sand-dim">
        {pending ? "in progress" : metric.unit}
      </span>
    </div>
  );
}
