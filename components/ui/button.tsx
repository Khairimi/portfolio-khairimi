import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-emerald text-ink shadow-[0_0_0_1px_rgba(16,185,129,.4),0_8px_30px_-8px_rgba(16,185,129,.6)] hover:bg-emerald-soft",
        outline:
          "border border-sand/15 bg-ink-800/60 text-sand hover:border-cyber/60 hover:text-white hover:shadow-[0_0_24px_-6px_rgba(59,130,246,.6)]",
        ghost: "text-sand-muted hover:bg-sand/5 hover:text-sand",
        gold: "border border-gold/40 bg-gold/10 text-gold-soft hover:bg-gold/20",
      },
      size: {
        sm: "h-9 px-3.5",
        md: "h-11 px-5",
        lg: "h-12 px-6 text-[15px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
