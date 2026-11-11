"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("inline-flex items-center gap-1 rounded-full border border-emerald/20 bg-ink-800/60 p-1 shadow-[0_0_28px_-10px_rgba(16,185,129,0.5)] backdrop-blur-md", className)}
    {...props}
  />
));
TabsList.displayName = "TabsList";

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "relative rounded-full px-3 py-1.5 font-mono text-xs text-sand-muted transition duration-300 hover:text-emerald-soft data-[state=active]:text-ink sm:px-4 sm:text-[13px]",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = "TabsTrigger";
