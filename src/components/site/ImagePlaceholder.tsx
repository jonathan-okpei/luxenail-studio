import { cn } from "@/lib/utils";

type Props = {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  aspect?: "portrait" | "square" | "landscape" | "tall" | "hero";
  rounded?: boolean;
  eager?: boolean;
};

const aspectMap = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  tall: "aspect-[2/3]",
  hero: "aspect-[4/5] md:aspect-[3/4]",
};

/**
 * Editable image slot.
 *  – Pass `src` when the photograph is ready.
 *  – Leave it out to display a refined placeholder frame that clearly signals
 *    where a hero / lifestyle / service / gallery photo should sit.
 */
export function ImagePlaceholder({
  src,
  alt,
  label,
  className,
  aspect = "portrait",
  rounded = true,
  eager,
}: Props) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        aspectMap[aspect],
        rounded && "rounded-lg",
        !src && "placeholder-frame",
        className,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-espresso/60">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="opacity-40">
            <rect x="3" y="4" width="18" height="16" rx="1.5" stroke="currentColor" strokeWidth="1" />
            <path d="M3 16l4.5-4.5a1 1 0 011.4 0L14 17M14 12l2.6-2.6a1 1 0 011.4 0L21 13" stroke="currentColor" strokeWidth="1" />
            <circle cx="9" cy="9" r="1.4" stroke="currentColor" strokeWidth="1" />
          </svg>
          <span className="eyebrow text-[0.62rem]">{label ?? "Photograph"}</span>
        </div>
      )}
    </div>
  );
}