import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { site } from "@/lib/site";

const OPEN_EVENT = "luxe:open-booking";

export function openBookingFlow() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(OPEN_EVENT));
}

function openCalendlyPopup() {
  const w = window as unknown as { Calendly?: { initPopupWidget: (o: { url: string }) => void } };
  const url = `${site.calendlyUrl}?hide_event_type_details=1&background_color=fffefe&text_color=571a5f&primary_color=571a5f`;
  if (w.Calendly) w.Calendly.initPopupWidget({ url });
  else window.open(site.calendlyUrl, "_blank", "noopener,noreferrer");
}

const instructions = [
  { t: "Give us 24 hours", b: "Please book at least 24 hours in advance so we can prepare your set and any custom art." },
  { t: "Arrive with clean nails", b: "Come with clean, dry hands. If you're wearing polish or a previous set, add a Removal service." },
  { t: "Continue on WhatsApp", b: "After booking you'll be sent to a confirmation page with a WhatsApp button. That's where you'll share your inspo, discuss design and receive deposit details." },
  { t: "Late arrivals", b: "A 10-minute grace period applies. Beyond that we may need to shorten or reschedule your service." },
  { t: "Cancellations", b: "Reschedule for free up to 12 hours before your appointment via the link in your confirmation email." },
  { t: "Deposit", b: "Your appointment is only fully confirmed once your booking deposit has been received via WhatsApp." },
];

export function BookingProvider() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, handler);
    return () => window.removeEventListener(OPEN_EVENT, handler);
  }, []);

  // Listen for Calendly's postMessage when the guest completes booking, then
  // send them to our custom confirmation page.
  useEffect(() => {
    function isCalendlyEvent(e: MessageEvent) {
      return typeof e.data === "object" && e.data !== null && typeof (e.data as { event?: string }).event === "string" && (e.data as { event: string }).event.indexOf("calendly.") === 0;
    }
    function onMessage(e: MessageEvent) {
      if (!isCalendlyEvent(e)) return;
      const ev = (e.data as { event: string }).event;
      if (ev === "calendly.event_scheduled") {
        if (window.location.pathname !== "/booked") {
          window.location.href = "/booked";
        }
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <>
      {/* Floating book button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 inline-flex items-center gap-2 rounded-full bg-ink text-ivory px-5 py-3.5 text-[0.72rem] tracking-[0.2em] uppercase shadow-[0_18px_40px_-14px_oklch(0.35_0.15_320/0.55)] hover:-translate-y-[2px] hover:bg-espresso transition-all duration-300"
        aria-label="Book an appointment"
      >
        <span className="h-2 w-2 rounded-full bg-champagne animate-pulse" aria-hidden="true" />
        Book appointment
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl bg-ivory border-champagne/40">
          <DialogHeader className="text-left">
            <span className="eyebrow">Before you book</span>
            <DialogTitle className="font-display text-3xl md:text-4xl leading-tight text-ink mt-2">
              A few notes to make your visit effortless.
            </DialogTitle>
            <DialogDescription className="text-espresso/70 text-base leading-relaxed">
              Please read these quickly — it helps us give you the calmest, cleanest appointment possible.
            </DialogDescription>
          </DialogHeader>

          <ol className="mt-2 space-y-4 max-h-[45vh] overflow-y-auto pr-1">
            {instructions.map((i, idx) => (
              <li key={i.t} className="flex gap-4">
                <span className="shrink-0 h-8 w-8 rounded-full bg-blush text-lavender-deep font-display flex items-center justify-center text-sm">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-lg text-ink leading-tight">{i.t}</p>
                  <p className="mt-1 text-sm text-espresso/75 leading-relaxed">{i.b}</p>
                </div>
              </li>
            ))}
          </ol>

          <DialogFooter className="mt-4 gap-3 sm:gap-3">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full border border-ink/30 px-5 py-2.5 text-[0.7rem] tracking-[0.2em] uppercase text-ink hover:bg-ink/5 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => { setOpen(false); openCalendlyPopup(); }}
              className="inline-flex items-center justify-center rounded-full bg-ink text-ivory px-6 py-2.5 text-[0.7rem] tracking-[0.2em] uppercase hover:bg-espresso transition-colors"
            >
              Continue to booking
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}