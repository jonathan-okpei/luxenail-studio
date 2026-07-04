import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { Reveal } from "@/components/site/Reveal";
import { LinkButton } from "@/components/site/Button";
import { services, reasons, testimonials, faqs, site } from "@/lib/site";
import { ArrowUpRight, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 pb-16 pt-8 md:grid-cols-[1.05fr_1fr] md:gap-16 md:px-10 md:pb-28 md:pt-14">
          <div className="fade-up">
            <span className="eyebrow">Nail Salon · Ikeja, Lagos</span>
            <span className="gold-rule mt-4 mb-7 block" aria-hidden="true" />
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.98] tracking-[-0.015em] text-ink">
              Luxury Nail Care,<br />
              <em className="not-italic font-light text-espresso">Designed Around You.</em>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground">
              Premium manicures, pedicures and nail artistry in Ikeja, Lagos. Experience flawless beauty in a calm, elegant studio.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <LinkButton to="/book">Book Appointment</LinkButton>
              <LinkButton to="/gallery" variant="outline">View Gallery</LinkButton>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "5.0", l: "Guest rating" },
                { k: "3 wk+", l: "Wear time" },
                { k: "100%", l: "Sterilised" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-3xl text-ink">{s.k}</p>
                  <p className="mt-1 text-[0.7rem] tracking-[0.18em] uppercase text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <Reveal delay={200}>
            <div className="relative">
              <ImagePlaceholder
                alt="Signature manicure at Luxe Nail Studio"
                label="Hero Photograph · 3:4"
                aspect="hero"
                eager
                className="rounded-md"
              />
              <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-4 rounded-md border border-border/70 bg-ivory/90 backdrop-blur-md px-5 py-4 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]">
                <div className="h-10 w-[1px] bg-champagne" aria-hidden="true" />
                <div>
                  <p className="font-display text-lg text-ink leading-tight">Book in under a minute</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Confirmed instantly. Reminders included.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section className="border-t border-border/60">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:grid-cols-12 md:gap-16 md:px-10 md:py-32">
          <Reveal className="md:col-span-5">
            <ImagePlaceholder alt="Interior of Luxe Nail Studio" label="Studio Interior · 4:5" aspect="hero" />
          </Reveal>
          <Reveal delay={120} className="md:col-span-7 md:pl-8">
            <SectionHeading
              eyebrow="Our Studio"
              title={<>A quiet space, considered<br />in every detail.</>}
              body={
                <>
                  Luxe Nail Studio is a small, appointment-only atelier in the heart of Ikeja.
                  We built it around the things that matter — meticulous hygiene, globally trusted products,
                  and the kind of attention that turns a nail appointment into an hour of calm.
                </>
              }
            />
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 max-w-lg">
              {[
                ["Attention", "Every set placed with intention."],
                ["Hygiene", "Hospital-grade sterilisation."],
                ["Products", "Premium gels & builders only."],
                ["Comfort", "Calm, private, unhurried."],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="eyebrow">{k}</dt>
                  <dd className="mt-2 text-sm text-espresso/80 leading-relaxed">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <Link to="/about" className="inline-flex items-center gap-2 text-[0.78rem] tracking-[0.2em] uppercase text-ink hover:opacity-70 transition-opacity">
                Read our story <ArrowUpRight size={16} strokeWidth={1.25} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────── */}
      <section id="services" className="border-t border-border/60 bg-porcelain/40">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <SectionHeading
              eyebrow="Services"
              title={<>The full menu, without<br />the noise.</>}
            />
            <Link to="/services" className="inline-flex items-center gap-2 text-[0.78rem] tracking-[0.2em] uppercase text-ink hover:opacity-70 transition-opacity self-start md:self-end">
              View full menu <ArrowUpRight size={16} strokeWidth={1.25} />
            </Link>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {services.slice(0, 8).map((s, i) => (
              <Reveal key={s.name} delay={i * 40}>
                <article className="group grid grid-cols-[1fr_auto] items-baseline gap-6 border-b border-border/60 py-6">
                  <div>
                    <h3 className="font-display text-2xl text-ink group-hover:text-espresso transition-colors">{s.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md">{s.description}</p>
                    <p className="mt-3 text-[0.7rem] tracking-[0.2em] uppercase text-muted-foreground">{s.duration}</p>
                  </div>
                  <p className="font-display text-xl text-ink whitespace-nowrap">
                    <span className="text-[0.62rem] tracking-[0.2em] uppercase text-muted-foreground mr-2 align-middle">From</span>
                    {s.from}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ──────────────────────────────────────── */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <SectionHeading
            eyebrow="Why Guests Choose Us"
            title={<>Six reasons this feels different.</>}
            align="center"
          />
          <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 60}>
                <div>
                  <p className="font-display text-5xl text-champagne/70 leading-none">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-6 font-display text-2xl text-ink">{r.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY TEASER ──────────────────────────────── */}
      <section className="border-t border-border/60 bg-porcelain/40">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <SectionHeading eyebrow="Portfolio" title={<>Recent work from<br />the studio.</>} />
            <Link to="/gallery" className="inline-flex items-center gap-2 text-[0.78rem] tracking-[0.2em] uppercase text-ink hover:opacity-70 transition-opacity self-start md:self-end">
              Open gallery <ArrowUpRight size={16} strokeWidth={1.25} />
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { a: "tall" as const, l: "Acrylic" },
              { a: "portrait" as const, l: "Gel" },
              { a: "portrait" as const, l: "Nail Art" },
              { a: "tall" as const, l: "French Tips" },
            ].map((g, i) => (
              <Reveal key={i} delay={i * 60}>
                <ImagePlaceholder alt={`${g.l} portfolio photograph`} label={g.l} aspect={g.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────── */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <SectionHeading eyebrow="Words From Guests" title="A studio built on trust." align="center" />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="h-full rounded-md border border-border/60 bg-card p-8 flex flex-col">
                  <div className="flex items-center gap-1 text-champagne" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, k) => (
                      <Star key={k} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="mt-6 font-display text-xl leading-snug text-ink">
                    “{t.review}”
                  </blockquote>
                  <figcaption className="mt-8 pt-6 border-t border-border/60 flex items-center gap-4">
                    <div className="h-11 w-11 rounded-full placeholder-frame" aria-hidden="true" />
                    <div>
                      <p className="font-medium text-ink text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Verified guest</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section className="border-t border-border/60 bg-porcelain/40">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:grid-cols-12 md:gap-16 md:px-10 md:py-32">
          <div className="md:col-span-5">
            <SectionHeading
              eyebrow="Frequently Asked"
              title={<>Everything you might<br />want to know.</>}
              body="A few practicalities before your visit. If your question isn't here, our team is happy to help."
            />
          </div>
          <div className="md:col-span-7">
            {faqs.map((f, i) => (
              <details key={f.q} className="group border-b border-border/60 py-6 [&_summary::-webkit-details-marker]:hidden" open={i === 0}>
                <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                  <span className="font-display text-lg md:text-xl text-ink">{f.q}</span>
                  <span className="mt-1 shrink-0 h-6 w-6 flex items-center justify-center rounded-full border border-ink/40 text-ink transition-transform duration-500 group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1100px] px-6 py-24 md:px-10 md:py-32 text-center">
          <span className="eyebrow">Reserve Your Seat</span>
          <span className="gold-rule mx-auto mt-4 mb-6 block" aria-hidden="true" />
          <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] text-ink">
            Your next appointment,<br /><em className="not-italic font-light text-espresso">flawlessly finished.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
            Select a service, choose a time, and receive instant confirmation. We look forward to hosting you at the studio.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <LinkButton to="/book">Book Appointment</LinkButton>
            <LinkButton to="/contact" variant="outline">Contact Studio</LinkButton>
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            {site.address} · {site.phone}
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
