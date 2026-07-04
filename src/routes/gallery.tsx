import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { Reveal } from "@/components/site/Reveal";
import { galleryItems, galleryCategories, type GalleryItem } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Luxe Nail Studio · Ikeja, Lagos" },
      { name: "description", content: "A portfolio of recent work — acrylic, gel, nail art, French tips and pedicures — from Luxe Nail Studio in Ikeja, Lagos." },
      { property: "og:title", content: "Gallery — Luxe Nail Studio" },
      { property: "og:description", content: "Acrylic, gel, nail art, French tips and pedicures from our studio in Ikeja, Lagos." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = filter === "All" ? galleryItems : galleryItems.filter((i) => i.category === filter);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((v) => (v === null ? null : Math.min(items.length - 1, v + 1)));
      if (e.key === "ArrowLeft")  setLightbox((v) => (v === null ? null : Math.max(0, v - 1)));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, items.length]);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-10 md:pt-20 pb-12">
        <div className="fade-up max-w-3xl">
          <span className="eyebrow">Portfolio</span>
          <span className="gold-rule mt-4 mb-7 block" aria-hidden="true" />
          <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.25rem)] leading-[1.02] text-ink">Gallery.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A living portfolio of recent work from the studio — filter by technique to explore.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-2 md:gap-3">
          {galleryCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-[0.72rem] tracking-[0.2em] uppercase transition-all",
                filter === c
                  ? "bg-ink text-ivory border-ink"
                  : "border-border text-espresso/80 hover:border-ink hover:text-ink",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24 md:pb-32">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 [column-fill:_balance]">
          {items.map((item, i) => (
            <Reveal key={item.id} delay={(i % 6) * 40} className="mb-4 md:mb-6 break-inside-avoid">
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="group block w-full text-left overflow-hidden rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={`Open ${item.alt}`}
              >
                <div className="relative overflow-hidden rounded-md">
                  <ImagePlaceholder
                    src={item.src}
                    alt={item.alt}
                    label={item.category}
                    aspect={item.ratio}
                    rounded={false}
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-end justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-ink/40 to-transparent">
                    <span className="text-[0.65rem] tracking-[0.2em] uppercase text-ivory">{item.category}</span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {items.length === 0 && (
          <p className="text-center text-muted-foreground py-24">No items in this category yet.</p>
        )}
      </section>

      {/* ── Lightbox ─────────────────────────────────────── */}
      {lightbox !== null && (
        <Lightbox
          items={items}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onPrev={() => setLightbox((v) => (v === null ? null : Math.max(0, v - 1)))}
          onNext={() => setLightbox((v) => (v === null ? null : Math.min(items.length - 1, v + 1)))}
        />
      )}
    </SiteLayout>
  );
}

function Lightbox({
  items, index, onClose, onPrev, onNext,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index];
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/92 backdrop-blur-sm p-4 md:p-10"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 h-11 w-11 inline-flex items-center justify-center rounded-full border border-ivory/30 text-ivory hover:bg-ivory/10 transition-colors"
        aria-label="Close"
      >
        <X size={20} strokeWidth={1.25} />
      </button>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-3 md:left-8 h-12 w-12 inline-flex items-center justify-center rounded-full border border-ivory/30 text-ivory hover:bg-ivory/10 transition-colors disabled:opacity-30"
        disabled={index === 0}
        aria-label="Previous"
      >
        <ChevronLeft size={22} strokeWidth={1.25} />
      </button>

      <div className="relative max-h-[85vh] max-w-[1100px] w-full" onClick={(e) => e.stopPropagation()}>
        <div className="mx-auto max-h-[80vh] max-w-[900px]">
          <div className="rounded-md overflow-hidden bg-porcelain/20">
            <div className="aspect-[3/4] max-h-[80vh] w-full placeholder-frame flex items-center justify-center">
              {item.src ? (
                <img src={item.src} alt={item.alt} className="h-full w-full object-contain" />
              ) : (
                <div className="text-center">
                  <p className="eyebrow text-ivory/70">{item.category}</p>
                  <p className="mt-3 text-ivory/50 text-sm">Photograph placeholder</p>
                </div>
              )}
            </div>
          </div>
          <p className="mt-5 text-center text-xs tracking-[0.2em] uppercase text-ivory/70">
            {item.category} · {index + 1} / {items.length}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-3 md:right-8 h-12 w-12 inline-flex items-center justify-center rounded-full border border-ivory/30 text-ivory hover:bg-ivory/10 transition-colors disabled:opacity-30"
        disabled={index === items.length - 1}
        aria-label="Next"
      >
        <ChevronRight size={22} strokeWidth={1.25} />
      </button>
    </div>
  );
}