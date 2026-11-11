import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-[11px] leading-5 transition duration-300 hover:shadow-[0_0_14px_-3px_currentColor]",
  {
    variants: {
      tone: {
        neutral: "border-sand/10 bg-sand/[0.04] text-sand-muted hover:border-sand/25 hover:text-sand",
        emerald: "border-emerald/30 bg-emerald/10 text-emerald-soft hover:border-emerald/60",
        cyber: "border-cyber/30 bg-cyber/10 text-cyber-soft hover:border-cyber/60",
        gold: "border-gold/35 bg-gold/10 text-gold-soft hover:border-gold/65",
      },
      /** Continuously pulsing halo — for status badges. */
      glow: { true: "glow-pulse", false: "" },
    },
    defaultVariants: { tone: "neutral", glow: false },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, tone, glow, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone, glow }), className)} {...props} />;
}
