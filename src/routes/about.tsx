import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { LinkButton } from "@/components/site/Button";
import { BookButton } from "@/components/site/BookButton";
import { site, photos, owner } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Luxe Nail Studio · Ikeja, Lagos" },
      { name: "description", content: "The story behind Luxe Nail Studio — a considered atelier in Ikeja, Lagos built around craft, hygiene and calm." },
      { property: "og:title", content: "About — Luxe Nail Studio" },
      { property: "og:description", content: "A considered nail atelier in Ikeja, Lagos built around craft, hygiene and calm." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-10 md:pt-20 pb-24 md:pb-32">
        <div className="fade-up max-w-3xl">
          <span className="eyebrow">About the Studio</span>
          <span className="gold-rule mt-4 mb-7 block" aria-hidden="true" />
          <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.25rem)] leading-[1.02] text-ink">
            Nail care, elevated to a<br /><em className="not-italic font-light text-espresso">quiet ritual.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {site.brand} is a small, appointment-only studio in {site.city}. Everything about the space —
            from the lighting to the tools to the pace — was built to make a nail appointment feel like an hour
            of considered calm.
          </p>
        </div>

        <Reveal className="mt-16 md:mt-24 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 aspect-[4/3] overflow-hidden rounded-[2rem] ring-1 ring-champagne/20">
            <img src={photos.salon4} alt="Inside the Luxe Nail Studio lounge" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="overflow-hidden rounded-[1.5rem] ring-1 ring-champagne/20">
              <img src={photos.salon1} alt="Manicure station with warm ambient lighting" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-[1.5rem] ring-1 ring-champagne/20">
              <img src={photos.salon3} alt="Pedicure platform in blush and gold" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </Reveal>

        <div className="mt-24 grid gap-12 md:grid-cols-12 md:gap-16 items-center">
          <Reveal className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-champagne/20">
              <img src={owner.image} alt={owner.name} className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-7">
            <span className="eyebrow">The Founder</span>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight text-ink">{owner.name}</h2>
            <p className="mt-2 text-sm tracking-[0.18em] uppercase text-lavender-deep">{owner.role}</p>
            <p className="mt-6 text-lg leading-relaxed text-espresso/80">{owner.bio}</p>
            <p className="mt-6 font-display italic text-2xl text-lavender-deep">{owner.signature}</p>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-14 md:grid-cols-2 md:gap-24">
          {[
            { t: "Craft", b: "Every set is placed by a trained specialist with a discerning eye for shape, proportion and finish. We work slowly on purpose." },
            { t: "Hygiene", b: "Hospital-grade sterilisation, single-use consumables and fresh, sealed implements for every guest — without exception." },
            { t: "Product", b: "We source only globally trusted gels, builders and finishes. No compromises on the brands we bring to your fingers." },
            { t: "Comfort", b: "Private stations, calm music and a slow, unhurried pace. You leave feeling looked after — not just polished." },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 80}>
              <div>
                <span className="eyebrow">Principle 0{i + 1}</span>
                <h3 className="mt-4 font-display text-3xl text-ink">{v.t}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{v.b}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="hairline mt-24" aria-hidden="true" />

        <Reveal className="mt-24 text-center max-w-2xl mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight text-ink">Ready when you are.</h2>
          <p className="mt-5 text-muted-foreground">Reserve your seat in a few taps.</p>
          <div className="mt-8 flex justify-center gap-4">
            <BookButton>Book Appointment</BookButton>
            <LinkButton to="/services" variant="outline">View Services</LinkButton>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}