import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/site";
import { cn } from "@/lib/utils";
import { BookButton } from "./BookButton";
import { openBookingFlow } from "./BookingProvider";
import { Brand } from "./Brand";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-md bg-[color-mix(in_oklch,var(--ivory)_82%,transparent)] border-b border-border/60"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <Brand size="md" />

        <nav aria-label="Primary" className="hidden md:flex items-center gap-9">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.78rem] tracking-[0.18em] uppercase text-espresso/75 hover:text-ink transition-colors"
              activeProps={{ className: "text-ink" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <BookButton variant="outline" className="hidden md:inline-flex px-5 py-2.5 text-[0.72rem]">
          Book
        </BookButton>

        <button
          type="button"
          className="md:hidden inline-flex h-11 w-11 items-center justify-center text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} strokeWidth={1.25} /> : <Menu size={22} strokeWidth={1.25} />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden fixed inset-0 top-[68px] bg-ivory transition-opacity duration-500",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className="flex flex-col px-6 py-10">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-ink py-4 border-b border-border/60"
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => { setOpen(false); openBookingFlow(); }}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-ink px-6 py-4 text-[0.78rem] tracking-[0.18em] uppercase text-ivory"
          >
            Book Appointment
          </button>
        </nav>
      </div>
    </header>
  );
}