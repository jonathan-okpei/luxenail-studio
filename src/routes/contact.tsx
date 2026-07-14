import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ActionButton } from "@/components/site/Button";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nailedby_Ruu · Somolu, Lagos" },
      { name: "description", content: "Visit or reach Nailedby_Ruu in Somolu, Lagos. Phone, WhatsApp, Instagram and studio hours." },
      { property: "og:title", content: "Contact — Nailedby_Ruu" },
      { property: "og:description", content: "Visit or reach Nailedby_Ruu in Somolu, Lagos." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder: wire this to your preferred email/webhook handler.
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-10 md:pt-20 pb-12">
        <div className="fade-up max-w-3xl">
          <span className="eyebrow">Contact</span>
          <span className="gold-rule mt-4 mb-7 block" aria-hidden="true" />
          <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.25rem)] leading-[1.02] text-ink">
            Say hello.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Questions about services, group bookings or bridal packages? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24 md:pb-32">
        <div className="grid gap-12 md:gap-16 md:grid-cols-12">
          <aside className="md:col-span-5 space-y-10">
            <div>
              <p className="eyebrow">Studio</p>
              <address className="mt-4 not-italic font-display text-2xl leading-snug text-ink">
                {site.address}
              </address>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <p className="eyebrow">Phone</p>
                <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="mt-3 block text-lg text-ink hover:text-espresso transition-colors">{site.phone}</a>
              </div>
              <div>
                <p className="eyebrow">WhatsApp</p>
                <a href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`} className="mt-3 block text-lg text-ink hover:text-espresso transition-colors">{site.whatsapp}</a>
              </div>
              <div>
                <p className="eyebrow">Email</p>
                <a href={`mailto:${site.email}`} className="mt-3 block text-lg text-ink hover:text-espresso transition-colors">{site.email}</a>
              </div>
              <div>
                <p className="eyebrow">Instagram</p>
                <a href={site.instagramUrl} target="_blank" rel="noreferrer noopener" className="mt-3 block text-lg text-ink hover:text-espresso transition-colors">{site.instagram}</a>
              </div>
            </div>

            <div className="hairline" aria-hidden="true" />

            <div>
              <p className="eyebrow">Hours</p>
              <ul className="mt-4 space-y-2 text-sm text-espresso/80">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4 max-w-sm">
                    <span>{h.day}</span>
                    <span className="text-muted-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="md:col-span-7">
            <div className="rounded-lg border border-border/60 bg-card p-6 md:p-10">
              <h2 className="font-display text-3xl text-ink">Send a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">We reply within one business day.</p>

              {sent ? (
                <div className="mt-10 rounded-md border border-champagne/60 bg-porcelain/40 p-6">
                  <p className="font-display text-2xl text-ink">Thank you.</p>
                  <p className="mt-2 text-sm text-muted-foreground">Your message has been received. We'll be in touch shortly.</p>
                </div>
              ) : (
                <form className="mt-8 grid gap-5" onSubmit={onSubmit}>
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <Field label="Phone (optional)" name="phone" type="tel" />
                  <Field label="Subject" name="subject" />
                  <label className="block">
                    <span className="eyebrow">Message</span>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="mt-2 w-full rounded-md border border-input bg-transparent px-4 py-3 text-sm text-ink placeholder:text-muted-foreground focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink transition-colors resize-none"
                    />
                  </label>
                  <div className="pt-2">
                    <ActionButton type="submit">Send Message</ActionButton>
                  </div>
                </form>
              )}
            </div>

            <div className="mt-8 rounded-lg overflow-hidden border border-border/60 bg-porcelain/40 aspect-[16/10] relative">
              <iframe
                title="Nailedby_Ruu location on Google Maps"
                src="https://www.google.com/maps?q=Somolu+Lagos+Nigeria&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full grayscale-[35%] contrast-[0.95]"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label, name, type = "text", required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md border border-input bg-transparent px-4 py-3 text-sm text-ink placeholder:text-muted-foreground focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink transition-colors"
      />
    </label>
  );
}