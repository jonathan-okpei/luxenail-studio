// Central brand + content configuration. Edit here to rebrand the site.
export const site = {
  brand: "Luxe Nail Studio",
  short: "Luxe",
  tagline: "Luxury Nail Care, Designed Around You.",
  city: "Ikeja, Lagos",
  address: "Ikeja, Lagos Mainland, Nigeria",
  phone: "+234 000 000 0000",
  whatsapp: "+234 000 000 0000",
  email: "hello@luxenailstudio.com",
  instagram: "@luxenailstudio",
  instagramUrl: "https://instagram.com/",
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 8:00 PM" },
    { day: "Saturday", time: "9:00 AM – 9:00 PM" },
    { day: "Sunday", time: "11:00 AM – 6:00 PM" },
  ],
  calendlyUrl: "https://calendly.com/jonathanokpei1/30min",
} as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/book", label: "Book" },
  { to: "/contact", label: "Contact" },
] as const;

export type Service = {
  name: string;
  description: string;
  duration: string;
  from: string;
  category: "Manicure" | "Pedicure" | "Extensions" | "Art" | "Signature";
};

export const services: Service[] = [
  { name: "Classic Manicure", description: "Shaping, cuticle care and a flawless polish finish.", duration: "45 min", from: "₦8,000", category: "Manicure" },
  { name: "Gel Manicure", description: "Long-wearing high-gloss gel colour that lasts up to three weeks.", duration: "60 min", from: "₦12,000", category: "Manicure" },
  { name: "BIAB Nails", description: "Builder-in-a-bottle overlay for strength on your natural nail.", duration: "75 min", from: "₦18,000", category: "Manicure" },
  { name: "Acrylic Nails", description: "Sculpted acrylic extensions tailored to your desired length and shape.", duration: "90 min", from: "₦22,000", category: "Extensions" },
  { name: "Gel Extensions", description: "Lightweight, natural-feeling extensions with a glass-clear finish.", duration: "90 min", from: "₦24,000", category: "Extensions" },
  { name: "French Tips", description: "The timeless silhouette — hand-painted with a modern edge.", duration: "75 min", from: "₦15,000", category: "Art" },
  { name: "Nail Art", description: "Custom artwork, chrome, encapsulated details and hand-drawn design.", duration: "from 30 min", from: "₦3,000", category: "Art" },
  { name: "Classic Pedicure", description: "A restorative pedicure with exfoliation, massage and polish.", duration: "60 min", from: "₦12,000", category: "Pedicure" },
  { name: "Spa Pedicure", description: "An extended ritual — warm soak, scrub, mask and lower-leg massage.", duration: "90 min", from: "₦20,000", category: "Pedicure" },
  { name: "Nail Refill", description: "Refresh your existing set with a new colour and finish.", duration: "60 min", from: "₦14,000", category: "Extensions" },
  { name: "Nail Repair", description: "Discreet single-nail repair to restore your set between visits.", duration: "20 min", from: "₦2,500", category: "Manicure" },
  { name: "Safe Nail Removal", description: "Gentle removal of gel, acrylic or extensions with cuticle care.", duration: "30 min", from: "₦5,000", category: "Manicure" },
  { name: "Bridal Nail Package", description: "A private consultation with trial and wedding-day appointment.", duration: "By consultation", from: "₦60,000", category: "Signature" },
  { name: "Luxury Nail Treatment", description: "Our signature ritual — paraffin, hydration therapy and finish.", duration: "90 min", from: "₦28,000", category: "Signature" },
];

export const reasons = [
  { title: "Experienced Technicians", body: "Every set is placed by a trained specialist with a discerning eye for shape and proportion." },
  { title: "Sterilised Tools", body: "Hospital-grade sterilisation. Fresh, sealed implements for every guest." },
  { title: "Premium Products", body: "We source globally trusted gels, builders and finishes — never compromise brands." },
  { title: "Luxury Studio", body: "A calm, considered space designed for privacy, quiet and slow moments." },
  { title: "Long-Lasting Results", body: "Application methodology built for wear — up to three weeks without lifting." },
  { title: "Effortless Booking", body: "Reserve in under a minute. Confirmations and reminders sent to your phone." },
];

export const testimonials = [
  { name: "Adaeze", rating: 5, review: "The most refined nail experience in Lagos. Every detail feels intentional — the space, the products, the finish. I wouldn't go anywhere else." },
  { name: "Chidera", rating: 5, review: "Three weeks in and my set still looks fresh. The technician listened, sketched, and delivered exactly what I wanted." },
  { name: "Fola", rating: 5, review: "A rare kind of quiet luxury. Impeccable hygiene, beautiful work, and genuinely warm service." },
  { name: "Zainab", rating: 5, review: "I booked for my wedding and every step — from the trial to the day-of — was flawless. Truly bridal-grade attention." },
  { name: "Ifeoma", rating: 5, review: "I have sensitive nails and they took the time to prep and protect. My natural nails have never looked better." },
  { name: "Temi", rating: 5, review: "It's more than a manicure — it's an hour of calm. I leave feeling looked after every single time." },
];

export const faqs = [
  { q: "How do I book an appointment?", a: "Reservations are made through our online booking page. Choose your service and preferred time — you'll receive a confirmation by email within moments." },
  { q: "How long do appointments take?", a: "Most manicures run 45–75 minutes; pedicures 60–90 minutes; extensions and bridal work 90 minutes and above. Exact durations are shown at booking." },
  { q: "Can I reschedule my appointment?", a: "Yes — you may reschedule at no cost up to 12 hours before your appointment. A rescheduling link is included in your confirmation email." },
  { q: "Do you accept walk-ins?", a: "We prioritise reservations to protect the calm of the studio. Walk-ins are welcomed only when we have availability — please call ahead." },
  { q: "How should I prepare for my appointment?", a: "Arrive with clean, dry hands and remove any nail polish if possible. For extensions or bridal work, bring references — we love to see them." },
  { q: "Where are you located?", a: "Our studio is in Ikeja, Lagos Mainland. Full address and directions are on the Contact page." },
];

export const galleryItems = [
  { id: 1, category: "Acrylic",     src: "user-uploads://1e05ca1209d43c00a8cc6e34e4259b90.jpg", ratio: "portrait" as const, alt: "Chrome and tortoiseshell acrylic set" },
  { id: 2, category: "Nail Art",    src: "user-uploads://39d1db8962791c38a6ba364ed739d208.jpg", ratio: "portrait" as const, alt: "Almond nails with abstract line art" },
  { id: 3, category: "Acrylic",     src: "user-uploads://51f8ed77bd09cef3c34545d338250fd4.jpg", ratio: "portrait" as const, alt: "Matte mauve acrylics with 3D droplet detail" },
  { id: 4, category: "Pedicure",    src: "user-uploads://13640c71d17eddeffe693802847f0349.jpg", ratio: "portrait" as const, alt: "Red pedicure with floral nail art" },
  { id: 5, category: "Gel",         src: "user-uploads://25155b5b96e958bef1e3284577418859.jpg", ratio: "portrait" as const, alt: "Matte teal gel with 3D droplet detail" },
  { id: 6, category: "French Tips", src: "user-uploads://74243338fb71b9908eaeec6377932277.jpg", ratio: "portrait" as const, alt: "Sheer French tip manicure and pedicure" },
  { id: 7, category: "Pedicure",    src: "user-uploads://3601cb8b91b7a2e0bbc25f0d403eef43.jpg", ratio: "portrait" as const, alt: "French pedicure with Hermès-style sandals" },
  { id: 8, category: "Gel",         src: "user-uploads://107d63847895b36e06d0c571483f7e00.jpg", ratio: "portrait" as const, alt: "Deep burgundy almond gel manicure" },
];

export const galleryCategories = ["All", "Acrylic", "Gel", "Nail Art", "Pedicure", "French Tips"] as const;