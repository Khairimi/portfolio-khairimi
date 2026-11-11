"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const glows = {
  emerald: ["rgba(16,185,129,.8)", "rgba(16,185,129,.08)"],
  cyber: ["rgba(59,130,246,.85)", "rgba(59,130,246,.09)"],
  gold: ["rgba(217,119,6,.85)", "rgba(217,119,6,.08)"],
} as const;

type Props = React.HTMLAttributes<HTMLDivElement> & {
  glow?: keyof typeof glows;
  as?: "div" | "article" | "li";
};

/** Glass card with a cursor-tracking glow border. */
export function SpotlightCard({ className, glow = "emerald", as = "div", style, children, ...props }: Props) {
  const ref = React.useRef<HTMLElement>(null);

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const Comp = as as React.ElementType;
  return (
    <Comp
      ref={ref}
      onPointerMove={onMove}
      className={cn("glass spotlight rounded-2xl", className)}
      style={{ "--glow": glows[glow][0], "--glow-fill": glows[glow][1], ...style } as React.CSSProperties}
      {...props}
    >
      {children}
    </Comp>
  );
}
