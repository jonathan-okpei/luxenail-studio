import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { LinkButton } from "@/components/site/Button";
import { services } from "@/lib/site";

const groups = [
  { key: "Manicure",   title: "Manicures",   body: "Care for the natural nail — shaping, cuticle work, colour and long-wear finishes." },
  { key: "Extensions", title: "Extensions",  body: "Sculpted extensions in acrylic, gel and BIAB, tailored to your desired length and shape." },
  { key: "Pedicure",   title: "Pedicures",   body: "Restorative pedicures with exfoliation, massage and considered finishing." },
  { key: "Art",        title: "Nail Art",    body: "Custom artwork, chrome, encapsulated details and hand-drawn design." },
  { key: "Signature",  title: "Signature",   body: "Our most requested treatments — bridal, luxury rituals and full-day experiences." },
] as const;

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — Luxe Nail Studio · Ikeja, Lagos" },
      { name: "description", content: "Full menu of manicures, pedicures, acrylic, BIAB, gel extensions, nail art, French tips, bridal and luxury nail treatments at Luxe Nail Studio, Ikeja." },
      { property: "og:title", content: "Services & Pricing — Luxe Nail Studio" },
      { property: "og:description", content: "Manicures, pedicures, acrylic, BIAB, gel extensions, nail art, bridal and luxury treatments." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((s, i) => ({
            "@type": "Service",
            position: i + 1,
            name: s.name,
            description: s.description,
            provider: { "@type": "NailSalon", name: "Luxe Nail Studio" },
            areaServed: "Ikeja, Lagos",
          })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-10 md:pt-20 pb-16 md:pb-24">
        <div className="fade-up max-w-3xl">
          <span className="eyebrow">The Treatments</span>
          <span className="gold-rule mt-4 mb-7 block" aria-hidden="true" />
          <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.25rem)] leading-[1.02] text-ink">
            Treatments &amp; pricing.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A considered menu of manicures, pedicures, extensions and nail artistry. All prices are starting rates — final pricing depends on length, complexity and finish.
          </p>
        </div>
      </section>

      {groups.map((group, gi) => {
        const items = services.filter((s) => s.category === group.key);
        if (items.length === 0) return null;
        return (
          <section key={group.key} className="border-t border-border/60">
            <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-16 md:grid-cols-12 md:gap-16 md:px-10 md:py-24">
              <Reveal className="md:col-span-4">
                <span className="eyebrow">0{gi + 1}</span>
                <h2 className="mt-4 font-display text-4xl text-ink">{group.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed max-w-sm">{group.body}</p>
              </Reveal>
              <div className="md:col-span-8">
                {items.map((s, i) => (
                  <Reveal key={s.name} delay={i * 40}>
                    <article className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-b border-border/60 py-6">
                      <div>
                        <h3 className="font-display text-2xl text-ink">{s.name}</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xl">{s.description}</p>
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
        );
      })}

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 py-24 md:py-32 text-center">
          <SectionHeading eyebrow="Ready?" title="Reserve your seat." align="center" body="Instant confirmation. Rescheduling available up to 12 hours before your visit." />
          <div className="mt-10 flex justify-center gap-4">
            <LinkButton to="/book">Book Appointment</LinkButton>
            <LinkButton to="/contact" variant="outline">Ask a Question</LinkButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}