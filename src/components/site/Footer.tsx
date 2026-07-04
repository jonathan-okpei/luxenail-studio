import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
        <div className="grid gap-12 md:gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-3xl text-ink">{site.brand}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A quiet studio in {site.city} for guests who value craft, hygiene and calm.
            </p>
            <Link
              to="/book"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink px-5 py-2.5 text-[0.72rem] tracking-[0.2em] uppercase text-ink hover:bg-ink hover:text-ivory transition-colors"
            >
              Book Appointment
            </Link>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">Navigate</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/" className="hover:text-ink text-espresso/80 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-ink text-espresso/80 transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-ink text-espresso/80 transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-ink text-espresso/80 transition-colors">Gallery</Link></li>
              <li><Link to="/book" className="hover:text-ink text-espresso/80 transition-colors">Book</Link></li>
              <li><Link to="/contact" className="hover:text-ink text-espresso/80 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">Studio</p>
            <address className="mt-5 not-italic text-sm leading-relaxed text-espresso/80">
              {site.address}<br />
              {site.phone}<br />
              <a href={`mailto:${site.email}`} className="hover:text-ink transition-colors">{site.email}</a>
            </address>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Hours</p>
            <ul className="mt-5 space-y-2 text-sm text-espresso/80">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="text-muted-foreground">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline mt-16" aria-hidden="true" />

        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {year} {site.brand}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href={site.instagramUrl} target="_blank" rel="noreferrer noopener" className="hover:text-ink transition-colors">Instagram</a>
            <a href="#" className="hover:text-ink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ink transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}