import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { site } from "@/lib/site";

export const Route = createFileRoute("/booked")({
  head: () => ({
    meta: [
      { title: "Appointment Reserved — Nailedby_Ruu" },
      { name: "description", content: "Your appointment has been reserved. Continue on WhatsApp to share your inspiration and complete your booking deposit." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: BookedPage,
});

function BookedPage() {
  const waHref = `${site.whatsappUrl}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <SiteLayout>
      <section className="relative overflow-hidden grad-bloom min-h-[calc(100vh-6rem)] flex items-center">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.3] mix-blend-multiply"
          aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.7 0.15 320 / 0.35) 1px, transparent 0)", backgroundSize: "22px 22px" }}
        />
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-lavender/50 blur-[130px]" aria-hidden="true" />
        <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-champagne/40 blur-[140px]" aria-hidden="true" />

        <div className="relative mx-auto w-full max-w-2xl px-6 py-20 md:py-28 text-center">
          {/* Success mark */}
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[0_30px_60px_-30px_oklch(0.5_0.15_320/0.5)] ring-1 ring-champagne/40">
            <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden="true">
              <circle cx="24" cy="24" r="22" fill="none" stroke="oklch(0.75 0.11 340)" strokeWidth="1.5" opacity="0.4" />
              <path d="M14 25l7 7 14-16" fill="none" stroke="oklch(0.45 0.14 320)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-champagne/40 bg-white/70 backdrop-blur px-4 py-1.5 text-[0.68rem] tracking-[0.22em] uppercase text-espresso">
            <span className="h-1.5 w-1.5 rounded-full bg-lavender-deep" aria-hidden="true" />
            Appointment reserved
          </span>

          <h1 className="mt-6 font-display text-[clamp(2.25rem,6vw,4rem)] leading-[1.02] tracking-[-0.01em] text-ink">
            <span aria-hidden="true">🎉</span> Your Appointment<br />
            <em className="not-italic text-gradient">Has Been Reserved!</em>
          </h1>

          <p className="mt-8 text-base md:text-lg leading-relaxed text-espresso/80">
            Thank you for booking with <span className="font-medium text-ink">Nailedby_ruu</span>.
            Your appointment has been successfully scheduled.
          </p>

          <p className="mt-4 text-base md:text-lg leading-relaxed text-espresso/80">
            The final step is to continue on WhatsApp, where we'll:
          </p>

          <ul className="mx-auto mt-6 max-w-md space-y-3 text-left text-sm md:text-base text-espresso/85">
            {[
              "Receive your nail inspiration photos",
              "Discuss your preferred nail design",
              "Provide payment instructions for your booking deposit",
              "Confirm your appointment once payment has been received",
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lavender-deep" aria-hidden="true" />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-espresso/70">Please click the button below to continue.</p>

          <div className="mt-8">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 md:px-10 md:py-5 text-sm md:text-base font-medium text-white shadow-[0_20px_50px_-15px_rgba(37,211,102,0.55)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_25px_60px_-15px_rgba(37,211,102,0.7)]"
            >
              <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.82.74 5.57 2.15 8L.5 31.5l7.71-2.02A15.44 15.44 0 0 0 16 31.5c8.56 0 15.5-6.94 15.5-15.5S24.56.5 16 .5Zm0 28.19c-2.5 0-4.94-.67-7.08-1.94l-.51-.3-4.58 1.2 1.22-4.46-.33-.53A12.6 12.6 0 0 1 3.31 16C3.31 9 9 3.31 16 3.31S28.69 9 28.69 16 23 28.69 16 28.69Zm7.24-9.5c-.4-.2-2.35-1.16-2.71-1.29-.36-.13-.63-.2-.89.2s-1.02 1.29-1.25 1.55c-.23.27-.46.3-.85.1-.4-.2-1.68-.62-3.2-1.98-1.18-1.05-1.98-2.35-2.21-2.75-.23-.4-.02-.62.17-.82.18-.18.4-.46.6-.7.2-.23.27-.4.4-.66.13-.27.07-.5-.03-.7-.1-.2-.89-2.15-1.22-2.94-.32-.77-.65-.66-.89-.67h-.76c-.27 0-.7.1-1.06.5-.37.4-1.4 1.37-1.4 3.33s1.43 3.86 1.63 4.13c.2.27 2.82 4.3 6.83 6.03.95.41 1.7.66 2.28.84.96.3 1.84.26 2.53.16.77-.12 2.35-.96 2.68-1.89.33-.93.33-1.73.23-1.89-.1-.16-.36-.27-.75-.46Z" />
              </svg>
              Continue on WhatsApp
            </a>
          </div>

          <p className="mt-6 text-xs md:text-sm text-espresso/60 italic max-w-md mx-auto">
            Your appointment will only be confirmed after your booking deposit has been received.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
