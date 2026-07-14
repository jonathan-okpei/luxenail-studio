import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { LinkButton } from "@/components/site/Button";
import { BookButton } from "@/components/site/BookButton";
import { services, site, photos } from "@/lib/site";

const serviceImages = [photos.img7, photos.img3, photos.img6, photos.img1, photos.img4];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nailedby_Ruu · Luxury Nail Studio in Somolu, Lagos" },
      { name: "description", content: "BIAB, Acrylic, Gel-X extensions, refills and custom nail art at Nailedby_Ruu — a premium nail studio in Somolu, Lagos. Personalised quotes on WhatsApp." },
      { property: "og:title", content: "Services — Nailedby_Ruu" },
      { property: "og:description", content: "BIAB, Acrylic, Gel-X, refills and custom nail art in Somolu, Lagos." },
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
            provider: { "@type": "NailSalon", name: "Nailedby_Ruu" },
            areaServed: "Somolu, Lagos",
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
          <span className="eyebrow">Our Services</span>
          <span className="gold-rule mt-4 mb-7 block" aria-hidden="true" />
          <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.25rem)] leading-[1.02] text-ink">
            Luxury nails,<br /><em className="not-italic text-gradient">crafted for you.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-xl md:text-2xl leading-relaxed text-espresso/80">
            A focused menu of premium nail services. Every set is custom — built around your inspiration, your lifestyle and the finish you're looking for.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 bg-porcelain/40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <article className="group h-full flex flex-col overflow-hidden rounded-[1.75rem] border border-border/60 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-champagne/60 hover:shadow-[0_30px_60px_-30px_oklch(0.5_0.15_320/0.35)]">
                  <div className="aspect-[5/4] overflow-hidden">
                    <img src={serviceImages[i % serviceImages.length]} alt={s.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                  </div>
                  <div className="flex-1 flex flex-col p-8">
                    <h3 className="font-display text-3xl text-ink">{s.name}</h3>
                    <p className="mt-4 text-lg leading-relaxed text-espresso/80 flex-1">{s.description}</p>
                    <div className="mt-6 pt-5 border-t border-border/60">
                      <BookButton className="w-full">Book This Service</BookButton>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 mx-auto max-w-3xl rounded-[1.75rem] bg-white/90 border border-champagne/40 p-8 md:p-10 text-center shadow-[0_20px_60px_-30px_oklch(0.5_0.15_320/0.3)]">
            <span className="eyebrow">A note on pricing</span>
            <p className="mt-4 text-lg md:text-xl leading-relaxed text-espresso/85">
              {site.pricingNote}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 py-24 md:py-32 text-center">
          <SectionHeading eyebrow="Ready?" title="Book your appointment." align="center" body="Choose your time, then continue on WhatsApp to share your inspo and confirm your set." />
          <div className="mt-10 flex justify-center gap-4">
            <BookButton>Book Appointment</BookButton>
            <LinkButton to="/contact" variant="outline">Ask a Question</LinkButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}