import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-[11px] leading-5 transition-colors",
  {
    variants: {
      tone: {
        neutral: "border-sand/10 bg-sand/[0.04] text-sand-muted hover:border-sand/25 hover:text-sand",
        emerald: "border-emerald/30 bg-emerald/10 text-emerald-soft",
        cyber: "border-cyber/30 bg-cyber/10 text-cyber-soft",
        gold: "border-gold/35 bg-gold/10 text-gold-soft",
      },
    },
    defaultVariants: { tone: "neutral" },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}
