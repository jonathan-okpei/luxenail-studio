import type { ReactNode, ComponentProps } from "react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[0.74rem] tracking-[0.2em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-ivory hover:bg-espresso hover:shadow-[0_14px_36px_-14px_rgba(60,40,20,0.5)] hover:-translate-y-[1px]",
  outline: "border border-ink text-ink hover:bg-ink hover:text-ivory",
  ghost: "text-ink hover:text-espresso underline-offset-8 hover:underline",
};

export function openCalendly() {
  const w = window as unknown as { Calendly?: { initPopupWidget: (o: { url: string }) => void } };
  if (w.Calendly) {
    w.Calendly.initPopupWidget({
      url: `${site.calendlyUrl}?hide_event_type_details=1&background_color=fffefe&text_color=571a5f&primary_color=571a5f`,
    });
  } else {
    window.open(site.calendlyUrl, "_blank", "noopener,noreferrer");
  }
}

type Props = {
  variant?: Variant;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentProps<"button">, "children">;

export function BookButton({ variant = "primary", className, children = "Book Appointment", onClick, ...rest }: Props) {
  return (
    <button
      type="button"
      onClick={(e) => {
        onClick?.(e);
        openCalendly();
      }}
      className={cn(base, variants[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}