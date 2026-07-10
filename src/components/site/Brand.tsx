import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import icon from "@/assets/logo-icon.png";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, { circle: string; icon: string; brand: string; sub: string }> = {
  sm: { circle: "h-9 w-9", icon: "h-6 w-6", brand: "text-lg", sub: "text-[0.55rem]" },
  md: { circle: "h-11 w-11 md:h-12 md:w-12", icon: "h-7 w-7 md:h-8 md:w-8", brand: "text-xl md:text-2xl", sub: "text-[0.58rem] md:text-[0.6rem]" },
  lg: { circle: "h-14 w-14", icon: "h-9 w-9", brand: "text-2xl", sub: "text-[0.62rem]" },
};

export function Brand({
  size = "md",
  linkTo = "/",
  className,
  showTagline = false,
}: {
  size?: Size;
  linkTo?: string | null;
  className?: string;
  showTagline?: boolean;
}) {
  const s = sizes[size];
  const inner = (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "relative inline-flex items-center justify-center rounded-full bg-gradient-to-br from-blush via-white to-lavender/40 ring-1 ring-champagne/40 shadow-[0_6px_18px_-8px_oklch(0.55_0.15_340/0.4)]",
          s.circle,
        )}
        aria-hidden="true"
      >
        <img src={icon} alt="" className={cn("object-contain", s.icon)} width={64} height={64} />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display tracking-tight text-ink", s.brand)}>{site.brand}</span>
        {showTagline && (
          <span className={cn("mt-1 uppercase tracking-[0.24em] text-lavender-deep", s.sub)}>
            Ikeja · Lagos
          </span>
        )}
      </span>
    </span>
  );
  if (!linkTo) return inner;
  return (
    <Link to={linkTo} aria-label={`${site.brand} — home`} className="inline-flex items-center hover:opacity-85 transition-opacity">
      {inner}
    </Link>
  );
}