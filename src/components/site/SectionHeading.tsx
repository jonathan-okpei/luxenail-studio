import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <>
          <span className="eyebrow">{eyebrow}</span>
          <span className={cn("gold-rule mt-4 mb-6 block", align === "center" && "mx-auto")} aria-hidden="true" />
        </>
      )}
      <Tag className="font-display text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.1] text-ink">
        {title}
      </Tag>
      {body && (
        <p className="mt-5 text-[0.98rem] leading-relaxed text-muted-foreground">
          {body}
        </p>
      )}
    </div>
  );
}