import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { site } from "@/lib/site";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — Luxe Nail Studio · Ikeja, Lagos" },
      { name: "description", content: "Reserve your appointment at Luxe Nail Studio in Ikeja, Lagos. Instant confirmation, easy rescheduling, and a calm, luxury studio experience." },
      { property: "og:title", content: "Book — Luxe Nail Studio" },
      { property: "og:description", content: "Reserve your appointment at Luxe Nail Studio in Ikeja, Lagos." },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

function BookPage() {
  const widgetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Load Calendly script once
    const existing = document.querySelector<HTMLScriptElement>('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (!existing) {
      const s = document.createElement("script");
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-10 md:pt-20 pb-12">
        <div className="fade-up max-w-3xl">
          <span className="eyebrow">Reservation</span>
          <span className="gold-rule mt-4 mb-7 block" aria-hidden="true" />
          <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.25rem)] leading-[1.02] text-ink">
            Book your appointment.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Choose a service and time below — you'll receive an instant confirmation with a rescheduling link and studio directions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24 md:pb-32">
        <div className="grid gap-10 md:gap-16 md:grid-cols-12">
          <aside className="md:col-span-4 space-y-10">
            {[
              { t: "1 · Reserve", b: "Select the service, date and time that suit you. It takes under a minute." },
              { t: "2 · Confirm", b: "You'll receive an instant email confirmation with directions to the studio." },
              { t: "3 · Arrive", b: "Please arrive five minutes before your appointment so we can start on time." },
            ].map((step) => (
              <div key={step.t}>
                <p className="font-display text-2xl text-ink">{step.t}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.b}</p>
              </div>
            ))}

            <div className="hairline" aria-hidden="true" />

            <div>
              <p className="eyebrow">Cancellation Policy</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Reschedule or cancel at no charge up to 12 hours before your appointment. Late cancellations incur a 50% fee to protect our technician's time.
              </p>
            </div>
            <div>
              <p className="eyebrow">Punctuality</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Arrivals more than 15 minutes late may be shortened or rescheduled so our next guest is not affected.
              </p>
            </div>
          </aside>

          <div className="md:col-span-8">
            <div className="rounded-lg border border-border/60 bg-card overflow-hidden">
              <div
                ref={widgetRef}
                className="calendly-inline-widget"
                data-url={site.calendlyUrl}
                style={{ minWidth: 320, height: 780 }}
              />
            </div>
            <p className="mt-4 text-xs text-muted-foreground text-center">
              Booking secured by Calendly · Confirmation sent instantly
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}