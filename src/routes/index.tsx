import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { LinkButton } from "@/components/site/Button";
import { InspoUpload } from "@/components/site/InspoUpload";
import { services, reasons, testimonials, faqs, site, owner, photos } from "@/lib/site";

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
      <section className="relative overflow-hidden grad-bloom">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply"
          aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.7 0.15 320 / 0.35) 1px, transparent 0)", backgroundSize: "22px 22px" }}
        />
        <div className="relative mx-auto max-w-[1400px] px-6 pt-10 pb-24 md:px-10 md:pt-16 md:pb-36">
          <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10">
            <div className="fade-up md:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-champagne/40 bg-white/60 backdrop-blur px-4 py-1.5 text-[0.68rem] tracking-[0.22em] uppercase text-espresso">
                <span className="h-1.5 w-1.5 rounded-full bg-lavender-deep" aria-hidden="true" />
                Now booking · Ikeja, Lagos
              </span>
              <h1 className="mt-7 font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-[-0.02em]">
                <span className="text-ink">A quiet luxury</span><br />
                <span className="text-gradient italic">for the hands</span><br />
                <span className="text-ink">you show the world.</span>
              </h1>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-espresso/75">
                An appointment-only nail atelier in Ikeja, composed for the woman who
                notices detail. Precise artistry, sealed sterile tools, and an hour
                of unhurried care — softly, always.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <LinkButton to="/gallery" variant="outline">View the Gallery</LinkButton>
                <Link to="/services" className="text-[0.72rem] tracking-[0.22em] uppercase text-ink border-b border-ink/40 pb-1 hover:opacity-70 transition-opacity">
                  Explore Treatments →
                </Link>
              </div>

              <div className="mt-14 flex items-center gap-8">
                <div className="flex -space-x-3">
                  {[photos.img1, photos.img4, photos.img5].map((s, i) => (
                    <div key={i} className="h-11 w-11 rounded-full ring-2 ring-ivory overflow-hidden bg-porcelain">
                      <img src={s} alt="" className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-2 text-champagne">
                    <span className="font-display text-lg leading-none text-ink">5.0</span>
                    <span className="text-xs text-espresso/70">· 200+ happy guests</span>
                  </div>
                  <p className="mt-1 text-xs text-espresso/60">Rated the softest chair in Ikeja.</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 relative min-h-[520px] md:min-h-[640px]">
              {/* Main image */}
              <div className="absolute right-0 top-0 w-[78%] aspect-[3/4] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_oklch(0.5_0.15_320/0.35)] rotate-[2deg]">
                <img src={photos.img1} alt="Signature glossy gel manicure" className="h-full w-full object-cover" />
              </div>
              {/* Overlapping image */}
              <div className="absolute left-0 bottom-6 w-[58%] aspect-[3/4] overflow-hidden rounded-[2rem] ring-8 ring-ivory shadow-[0_30px_60px_-25px_oklch(0.55_0.14_300/0.4)] floaty">
                <img src={photos.img3} alt="Chrome accent luxury acrylic set" className="h-full w-full object-cover" />
              </div>
              {/* Sticker card */}
              <div className="absolute -right-2 bottom-8 md:right-6 md:bottom-2 rounded-2xl border border-champagne/30 bg-white/85 backdrop-blur-md px-4 py-3 shadow-[0_20px_50px_-25px_oklch(0.5_0.15_320/0.4)]">
                <p className="text-[0.62rem] tracking-[0.22em] uppercase text-lavender-deep">Guest favourite</p>
                <p className="font-display text-lg text-ink leading-tight mt-0.5">BIAB · from ₦18k</p>
              </div>
              {/* Blob */}
              <div className="absolute -left-6 top-4 h-24 w-24 rounded-full bg-lavender/60 blur-2xl" aria-hidden="true" />
              <div className="absolute right-10 -bottom-4 h-32 w-32 rounded-full bg-champagne/40 blur-3xl" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Marquee ribbon */}
        <div className="relative border-y border-border/60 bg-white/50 backdrop-blur-sm overflow-hidden">
          <div className="flex marquee whitespace-nowrap py-4">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-10 pr-10 shrink-0">
                {["Gel Manicures", "Acrylic Extensions", "BIAB Overlay", "Bridal Nails", "Custom Nail Art", "Spa Pedicures", "French Tips", "Chrome Finish"].map((t) => (
                  <span key={t} className="flex items-center gap-10 font-display text-2xl md:text-3xl text-ink/70 italic">
                    {t}
                    <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section className="relative border-t border-border/60 bg-ink text-ivory overflow-hidden">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-lavender-deep/30 blur-[130px]" aria-hidden="true" />
        <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-champagne/20 blur-[140px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-center">
            <Reveal className="md:col-span-6">
              <span className="inline-block text-[0.66rem] tracking-[0.28em] uppercase text-champagne">The Studio</span>
              <span className="block mt-3 h-px w-14 bg-champagne/60" aria-hidden="true" />
              <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] text-ivory">
                An atelier built for
                <em className="not-italic italic text-champagne"> the quiet moments </em>
                between appointments.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ivory/80 max-w-lg">
                Tucked into Ikeja, our appointment-only space was designed like a private
                lounge — warm lighting, sealed tools, considered scent — so every visit
                feels less like an errand and more like an hour returned to you.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                {[
                  ["10+", "years of craft"],
                  ["3wk", "average wear"],
                  ["200+", "happy guests"],
                ].map(([n, l]) => (
                  <div key={l as string}>
                    <p className="font-display text-3xl md:text-4xl text-champagne">{n}</p>
                    <p className="mt-2 text-[0.62rem] tracking-[0.22em] uppercase text-ivory/60">{l}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link to="/about" className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.22em] uppercase text-ivory border-b border-champagne/60 pb-1 hover:text-champagne transition-colors">
                  Inside the studio →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={120} className="md:col-span-6">
              <div className="relative grid grid-cols-6 grid-rows-6 gap-3 h-[420px] md:h-[540px]">
                <div className="col-span-4 row-span-4 overflow-hidden rounded-[1.5rem] ring-1 ring-champagne/20">
                  <img src={photos.img5} alt="Modern French tip manicure" className="h-full w-full object-cover" />
                </div>
                <div className="col-span-2 row-span-3 col-start-5 row-start-1 overflow-hidden rounded-[1.25rem] ring-1 ring-champagne/20">
                  <img src={photos.img7} alt="Long-wear gel colour" className="h-full w-full object-cover" />
                </div>
                <div className="col-span-3 row-span-3 col-start-4 row-start-4 overflow-hidden rounded-[1.25rem] ring-1 ring-champagne/20">
                  <img src={photos.img4} alt="Custom nail artistry" className="h-full w-full object-cover" />
                </div>
                <div className="col-span-3 row-span-2 col-start-1 row-start-5 overflow-hidden rounded-[1.25rem] ring-1 ring-champagne/20">
                  <img src={photos.img2} alt="Signature pedicure" className="h-full w-full object-cover" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TREATMENTS ───────────────────────────────────── */}
      <section id="treatments" className="relative border-t border-border/60 bg-porcelain/60 overflow-hidden">
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-lavender/40 blur-[100px]" aria-hidden="true" />
        <div className="absolute bottom-10 left-0 h-72 w-72 rounded-full bg-champagne/30 blur-[100px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <SectionHeading
              eyebrow="The Treatments"
              title={<>Signature rituals,<br />crafted for you.</>}
            />
            <Link to="/services" className="inline-flex items-center gap-2 text-[0.78rem] tracking-[0.2em] uppercase text-ink hover:opacity-70 transition-opacity self-start md:self-end border-b border-ink/40 pb-1">
              Explore all treatments →
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => {
              const imgs = [photos.img1, photos.img3, photos.img5, photos.img6, photos.img4, photos.img2];
              return (
                <Reveal key={s.name} delay={i * 60}>
                  <article className="group relative h-full flex flex-col overflow-hidden rounded-[1.75rem] border border-border/60 bg-white/70 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_oklch(0.5_0.15_320/0.4)] hover:border-champagne/50">
                    <div className="relative aspect-[5/4] overflow-hidden">
                      <img src={imgs[i]} alt={s.name} className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
                      <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[0.6rem] tracking-[0.22em] uppercase text-lavender-deep">{s.category}</span>
                    </div>
                    <div className="flex-1 flex flex-col p-6">
                      <h3 className="font-display text-2xl text-ink">{s.name}</h3>
                      <p className="mt-2 text-sm text-espresso/70 leading-relaxed flex-1">{s.description}</p>
                      <div className="mt-5 flex items-baseline justify-between border-t border-border/60 pt-4">
                        <span className="text-[0.65rem] tracking-[0.22em] uppercase text-espresso/60">{s.duration}</span>
                        <span className="font-display text-lg text-ink">
                          <span className="text-[0.6rem] tracking-[0.22em] uppercase text-espresso/60 mr-1.5">From</span>
                          {s.from}
                        </span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OWNER / FOUNDER ──────────────────────────────── */}
      <section className="border-t border-border/60 overflow-hidden">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:grid-cols-12 md:gap-16 md:px-10 md:py-32">
          <Reveal className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-champagne/30 via-lavender/30 to-transparent blur-2xl" aria-hidden="true" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-champagne/20 shadow-[0_40px_80px_-30px_oklch(0.5_0.15_320/0.4)]">
                <img src={owner.image} alt={`${owner.name}, founder of ${site.brand}`} className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-ink text-ivory px-5 py-4 shadow-xl max-w-[200px]">
                <p className="text-[0.6rem] tracking-[0.22em] uppercase text-champagne">Founder</p>
                <p className="font-display text-xl mt-1 leading-tight">{owner.name}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-7 md:pl-10 flex flex-col justify-center">
            <span className="eyebrow">Meet the Founder</span>
            <span className="gold-rule mt-4 mb-6 block" aria-hidden="true" />
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-ink">
              A studio built by a woman <em className="not-italic text-gradient">who gets it.</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-espresso/80 max-w-xl">{owner.bio}</p>
            <p className="mt-6 max-w-xl leading-relaxed text-espresso/70">
              I built Luxe Nail Studio as the salon I always wished existed — clean, calm, and unapologetically feminine.
              Whether you're prepping for your wedding day or simply need an hour to yourself, my team and I are here
              to make it feel like a treat.
            </p>
            <p className="mt-8 font-display italic text-2xl text-lavender-deep">{owner.signature}</p>
          </Reveal>
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
            <Link to="/gallery" className="inline-flex items-center gap-2 text-[0.78rem] tracking-[0.2em] uppercase text-ink hover:opacity-70 transition-opacity self-start md:self-end border-b border-ink/40 pb-1">
              Open gallery →
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { src: photos.img6, l: "Acrylic" },
              { src: photos.img4, l: "Nail Art" },
              { src: photos.img7, l: "Gel" },
              { src: photos.img2, l: "Pedicure" },
            ].map((g, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <img src={g.src} alt={`${g.l} portfolio photograph`} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute bottom-4 left-4 text-[0.65rem] tracking-[0.22em] uppercase text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-500">{g.l}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSPIRATION UPLOAD ──────────────────────────── */}
      <section id="inspiration" className="border-t border-border/60 grad-bloom">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:grid-cols-12 md:gap-16 md:px-10 md:py-32">
          <div className="md:col-span-5">
            <SectionHeading
              eyebrow="Nail Inspo"
              title={<>Send us the look,<br />we'll practise it first.</>}
              body="Drop your inspiration photos before your appointment. Your technician will study, sketch and rehearse the design so your session runs like a dream."
            />
            <ul className="mt-8 space-y-3 text-sm text-espresso/75">
              <li className="flex gap-3"><span className="text-lavender-deep font-display text-xl leading-none">·</span> Upload one or several reference images</li>
              <li className="flex gap-3"><span className="text-lavender-deep font-display text-xl leading-none">·</span> Leave notes on colour, shape and length</li>
              <li className="flex gap-3"><span className="text-lavender-deep font-display text-xl leading-none">·</span> Book your slot — we'll match it to your inspo</li>
            </ul>
          </div>
          <div className="md:col-span-7">
            <InspoUpload />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────── */}
      <section className="relative border-t border-border/60 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[500px] rounded-full bg-lavender/30 blur-[120px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow">Real Guests · Real Words</span>
            <span className="gold-rule mx-auto mt-4 mb-6 block" aria-hidden="true" />
            <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] text-ink">
              What they say <em className="not-italic text-gradient">after</em>.
            </h2>
          </div>

          {/* Featured quote */}
          <Reveal className="mt-16 mx-auto max-w-4xl">
            <figure className="relative rounded-[2rem] bg-white/80 backdrop-blur-sm border border-champagne/30 p-10 md:p-16 shadow-[0_40px_80px_-40px_oklch(0.5_0.15_320/0.4)]">
              <span aria-hidden="true" className="absolute -top-8 left-8 font-display text-[8rem] leading-none text-lavender-deep/25 select-none">“</span>
              <blockquote className="relative font-display text-2xl md:text-4xl leading-[1.25] text-ink italic">
                {testimonials[0].review}
              </blockquote>
              <figcaption className="mt-10 flex items-center justify-between gap-6 border-t border-border/60 pt-6">
                <div>
                  <p className="font-display text-xl text-ink">{testimonials[0].name}</p>
                  <p className="text-xs tracking-[0.2em] uppercase text-lavender-deep mt-1">{testimonials[0].handle}</p>
                </div>
                <div className="hidden md:flex items-center gap-1 text-champagne font-display text-lg">
                  ★ ★ ★ ★ ★
                </div>
              </figcaption>
            </figure>
          </Reveal>

          {/* Grid of shorter cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.slice(1, 4).map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="group h-full rounded-2xl border border-border/60 bg-white/60 backdrop-blur-sm p-7 flex flex-col transition-all duration-500 hover:-translate-y-1 hover:border-champagne/60 hover:shadow-[0_30px_60px_-30px_oklch(0.5_0.15_320/0.3)]">
                  <div className="flex items-center justify-between">
                    <span className="text-champagne text-sm tracking-widest">★★★★★</span>
                    <span className="text-[0.6rem] tracking-[0.22em] uppercase text-lavender-deep">Verified</span>
                  </div>
                  <blockquote className="mt-5 text-base leading-relaxed text-espresso/85 flex-1">
                    "{t.review}"
                  </blockquote>
                  <figcaption className="mt-6 pt-5 border-t border-border/60">
                    <p className="font-display text-lg text-ink leading-tight">{t.name}</p>
                    <p className="text-[0.65rem] tracking-[0.2em] uppercase text-espresso/50 mt-1">{t.handle}</p>
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
            <BookButton>Book Appointment</BookButton>
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
