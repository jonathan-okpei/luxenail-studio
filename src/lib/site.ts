// Central brand + content configuration. Edit here to rebrand the site.
import img1 from "@/assets/gallery/107d63847895b36e06d0c571483f7e00.jpg";
import img2 from "@/assets/gallery/13640c71d17eddeffe693802847f0349.jpg";
import img3 from "@/assets/gallery/1e05ca1209d43c00a8cc6e34e4259b90.jpg";
import img4 from "@/assets/gallery/25155b5b96e958bef1e3284577418859.jpg";
import img5 from "@/assets/gallery/3601cb8b91b7a2e0bbc25f0d403eef43.jpg";
import img6 from "@/assets/gallery/39d1db8962791c38a6ba364ed739d208.jpg";
import img7 from "@/assets/gallery/51f8ed77bd09cef3c34545d338250fd4.jpg";
import img8 from "@/assets/gallery/74243338fb71b9908eaeec6377932277.jpg";
import ownerImg from "@/assets/owner.jpg";
import salon1 from "@/assets/salon-1.jpg";
import salon2 from "@/assets/salon-2.jpg";
import salon3 from "@/assets/salon-3.jpg";
import salon4 from "@/assets/salon-4.jpg";

export const photos = { img1, img2, img3, img4, img5, img6, img7, img8, owner: ownerImg, salon1, salon2, salon3, salon4 };

export const owner = {
  name: "Ruu",
  role: "Founder & Lead Nail Artist",
  image: ownerImg,
  bio: "I started Nailedby_Ruu because of my deep love for nail artistry and the quiet calm that comes from creating beautiful, considered designs. My mission is to elevate the perception of nail technicians across Nigeria — from people simply providing a service to respected professionals delivering premium care and an exceptional experience.",
  signature: "— Ruu",
};
export const site = {
  brand: "Nailedby_Ruu",
  short: "Ruu",
  tagline: "Luxury Nails, Crafted with Precision.",
  city: "Somolu, Lagos",
  address: "Somolu, Lagos, Nigeria",
  phone: "+234 816 026 7472",
  whatsapp: "+234 816 026 7472",
  email: "hello@nailedbyruu.com",
  instagram: "@nailedby_ruu",
  instagramUrl: "https://www.instagram.com/nailedby_ruu/",
  tiktok: "@nailedby_ruu",
  tiktokUrl: "https://www.tiktok.com/@nailedby_ruu",
  whatsappNumber: "2348160267472",
  whatsappUrl: "https://wa.me/2348160267472",
  whatsappMessage: "Hi Nailedby_Ruu! 👋\n\nI've just booked an appointment through your website. I'd like to share my nail inspiration and complete my booking.",
  hours: [
    { day: "Monday", time: "Closed" },
    { day: "Tuesday – Saturday", time: "9:00 AM – 5:00 PM" },
    { day: "Sunday", time: "10:00 AM – 4:00 PM" },
  ],
  calendlyUrl: "https://calendly.com/jonathanokpei1/30min",
  pricingNote:
    "Pricing varies depending on your preferred nail design and requirements. Final pricing will be discussed during your consultation on WhatsApp.",
  depositAmount: "₦10,000",
} as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Treatments" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export type Service = {
  name: string;
  description: string;
  duration?: string;
};

export const services: Service[] = [
  { name: "BIAB Nails", description: "Builder-in-a-bottle overlay that strengthens your natural nail with a flawless, long-wearing finish." },
  { name: "Acrylic Nails", description: "Sculpted acrylic extensions tailored to your preferred length and shape — bold, precise and made to last." },
  { name: "Gel-X Extensions", description: "Lightweight, soft-gel tip extensions that feel natural, look glossy and stay pristine for weeks." },
  { name: "Refills & Repairs", description: "Refresh your existing set — infills, single-nail repairs and colour changes to keep your nails looking new." },
  { name: "Custom Nail Art", description: "Bespoke hand-painted art, chrome, encapsulated details and design work built around your inspiration." },
];

export const reasons = [
  { title: "Exceptional Attention to Detail", body: "Every stroke, curve and finish is considered. We work slowly on purpose — precision is the whole point." },
  { title: "Premium Nail Products", body: "We work only with globally trusted gels, builders and finishes so your set lasts, wears beautifully and stays kind to your natural nail." },
  { title: "Comfortable Studio Experience", body: "A calm, private space designed to feel less like a salon appointment and more like an hour returned to you." },
  { title: "Studio & Home Appointments", body: "Visit the Somolu studio or book a home appointment where available — the same premium care, wherever suits you." },
  { title: "Personalized Nail Designs", body: "Every set is custom. Share your inspiration and we'll craft a design built around your style, hands and lifestyle." },
  { title: "Professional Nail Care", body: "Sealed sterile tools, hospital-grade hygiene and trained artistry — the standard nail care in Nigeria deserves." },
];

export const testimonials = [
  { name: "Simi A.", handle: "@simi.a", rating: 5, review: "The attention to detail is unmatched. Ruu took her time to understand exactly what I wanted and the finish was flawless. Easily the calmest, most professional nail appointment I've had in Lagos." },
  { name: "Ngozi O.", handle: "@ngozi.ok", rating: 5, review: "Three weeks in and my BIAB set still looks the day I got them done. No lifting, no chips. Premium products and premium hands — you can tell." },
  { name: "Halima B.", handle: "@halima_b", rating: 5, review: "So welcoming from the first message on WhatsApp all the way to leaving the studio. The space is beautiful, the service is thoughtful and my nails are perfect." },
  { name: "Yewande C.", handle: "@yewandecole", rating: 5, review: "I'm particular about hygiene and everything at Nailedby_Ruu felt clean, sealed and professional. That plus the artistry — I'm not going anywhere else." },
  { name: "Priscilla N.", handle: "@priss.n", rating: 5, review: "Comfortable is the word. From the chair to the conversation, the whole appointment felt calm. And the nails? Exactly the vibe I sent as inspiration." },
  { name: "Kemi S.", handle: "@kemi.sof", rating: 5, review: "Ruu recreated my inspo down to the last little detail. Long-lasting, comfortable to wear and beautifully shaped. Booking again already." },
];

export const faqs = [
  { q: "How do I book?", a: "Tap any 'Book Appointment' button, choose a time that works, and you'll be redirected to WhatsApp to finalise your design and deposit." },
  { q: "How much is the booking deposit?", a: "A ₦10,000 deposit is required to fully secure your appointment. It's paid via WhatsApp after your quote is confirmed and it goes towards your final service fee." },
  { q: "Can I send my nail inspiration?", a: "Absolutely — inspiration is welcomed and encouraged. Share your reference photos on WhatsApp after booking and we'll craft the design around them." },
  { q: "How are prices determined?", a: "Pricing depends on your preferred design, length, complexity and finish. You'll receive a personalised quote on WhatsApp once we've seen your inspiration." },
  { q: "Do you offer home service?", a: "Yes — home appointments are available in select areas. Mention it when you book and we'll confirm availability on WhatsApp." },
  { q: "How long do appointments take?", a: "Most sets take 90 minutes to 2.5 hours depending on design and technique. We'll give you a time estimate with your quote." },
  { q: "How should I prepare for my appointment?", a: "Arrive with clean, dry hands. If you're wearing a previous set, mention it when booking so we can add a removal service." },
  { q: "Can I reschedule my appointment?", a: "Yes — please give us at least 24 hours' notice on WhatsApp and we'll happily move you to the next available slot." },
];

export type GalleryItem = {
  id: number;
  category: "Acrylic" | "Gel" | "Nail Art" | "Pedicure" | "French Tips";
  ratio: "portrait" | "square" | "landscape" | "tall";
  alt: string;
  src?: string; // Replace placeholder by adding a src (imported image or URL).
};

export const galleryItems: GalleryItem[] = [
  { id: 1,  category: "Gel",         ratio: "portrait",  alt: "Glossy burgundy almond gel manicure by Nailedby_Ruu", src: img1 },
  { id: 2,  category: "Pedicure",    ratio: "portrait",  alt: "Luxury red pedicure with delicate floral nail art", src: img2 },
  { id: 3,  category: "Acrylic",     ratio: "tall",      alt: "Chrome copper and tortoise acrylic nail set", src: img3 },
  { id: 4,  category: "Nail Art",    ratio: "portrait",  alt: "Custom hand-painted swirl nail art", src: img4 },
  { id: 5,  category: "French Tips", ratio: "portrait",  alt: "Modern French tip manicure with gold detail", src: img5 },
  { id: 6,  category: "Acrylic",     ratio: "portrait",  alt: "Sculpted almond acrylic set in nude tones", src: img6 },
  { id: 7,  category: "Gel",         ratio: "tall",      alt: "Long-wear teal gel with 3D water droplets", src: img7 },
  { id: 8,  category: "Nail Art",    ratio: "portrait",  alt: "Bespoke luxury nail artistry", src: img8 },
  { id: 9,  category: "Gel",         ratio: "portrait",  alt: "Signature glossy gel manicure", src: img1 },
  { id: 10, category: "Pedicure",    ratio: "portrait",  alt: "Luxury pedicure detail", src: img2 },
  { id: 11, category: "Acrylic",     ratio: "portrait",  alt: "Chrome accent luxury nail set", src: img3 },
  { id: 12, category: "French Tips", ratio: "portrait",  alt: "Sheer French tips with soft nude base", src: img5 },
];

export const bookingSteps = [
  { n: "01", t: "Book your preferred appointment", b: "Choose a date and time that works for you through our online booking." },
  { n: "02", t: "Chat with us on WhatsApp", b: "You'll be redirected to WhatsApp so we can continue your booking personally." },
  { n: "03", t: "Send your nail inspiration", b: "Share your reference photos and any specific ideas for the design you have in mind." },
  { n: "04", t: "Receive your personalised quote", b: "We'll price your set based on your chosen design, length and finish." },
  { n: "05", t: "Pay a ₦10,000 deposit", b: "Secure your slot with a deposit — the balance is settled on the day of your appointment." },
] as const;

export const galleryCategories = ["All", "Acrylic", "Gel", "Nail Art", "Pedicure", "French Tips"] as const;