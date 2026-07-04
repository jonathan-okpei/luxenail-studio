import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[0.74rem] tracking-[0.2em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-ivory hover:bg-espresso hover:shadow-[0_14px_36px_-14px_rgba(60,40,20,0.5)] hover:-translate-y-[1px]",
  outline: "border border-ink text-ink hover:bg-ink hover:text-ivory",
  ghost:   "text-ink hover:text-espresso underline-offset-8 hover:underline",
};

type CommonProps = { variant?: Variant; className?: string; children: ReactNode };

export function LinkButton({
  to,
  variant = "primary",
  className,
  children,
}: CommonProps & { to: string }) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}

export function AnchorButton({
  variant = "primary",
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<"a">) {
  return (
    <a className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </a>
  );
}

export function ActionButton({
  variant = "primary",
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}