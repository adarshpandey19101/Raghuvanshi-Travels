import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Star, MapPin, Clock, Users, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Tour Packages — Kashmir, Himachal, Uttarakhand, Rajasthan, Goa",
  description:
    "Browse 200+ premium tour packages. Himachal Pradesh, Kashmir, Uttarakhand, Rajasthan, Goa, Char Dham Yatra, Kedarnath, Ayodhya. Book your dream vacation with Raghuvanshi Travels.",
};

const categories = [
  { name: "All", href: "/packages", count: 200 },
  { name: "Himachal", href: "/packages/himachal", count: 35 },
  { name: "Kashmir", href: "/packages/kashmir", count: 28 },
  { name: "Uttarakhand", href: "/packages/uttarakhand", count: 22 },
  { name: "Rajasthan", href: "/packages/rajasthan", count: 18 },
  { name: "Goa", href: "/packages/goa", count: 15 },
  { name: "Char Dham", href: "/packages/char-dham", count: 12 },
  { name: "Kedarnath", href: "/packages/kedarnath", count: 10 },
  { name: "Ayodhya", href: "/packages/ayodhya", count: 8 },
  { name: "Custom", href: "/packages/custom", count: 0 },
];

const packages = [
  {
    id: "kashmir-honeymoon",
    name: "Kashmir Honeymoon Special",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    duration: "6N/7D",
    price: "₹24,999",
    rating: 4.9,
    reviews: 124,
    category: "Kashmir",
    badge: "🔥 Best Seller",
    highlights: ["Dal Lake Shikara", "Gulmarg Gondola", "Pahalgam Valley", "Sonmarg Glacier"],
    inclusions: ["Hotel", "Breakfast", "Transport", "Guide"],
  },
  {
    id: "char-dham-yatra",
    name: "Complete Char Dham Yatra",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    duration: "11N/12D",
    price: "₹32,999",
    rating: 4.8,
    reviews: 89,
    category: "Uttarakhand",
    badge: "🙏 Spiritual",
    highlights: ["Yamunotri Dham", "Gangotri Dham", "Kedarnath Dham", "Badrinath Dham"],
    inclusions: ["Hotel", "All Meals", "Transport", "Puja"],
  },
  {
    id: "shimla-manali",
    name: "Shimla Manali Explorer",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    duration: "6N/7D",
    price: "₹16,999",
    rating: 4.7,
    reviews: 156,
    category: "Himachal",
    badge: "⛰️ Adventure",
    highlights: ["Shimla Mall Road", "Kufri Snow", "Manali Old Town", "Rohtang Pass"],
    inclusions: ["Hotel", "Breakfast", "Transport", "Guide"],
  },
  {
    id: "rajasthan-royal",
    name: "Rajasthan Royal Heritage",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80",
    duration: "7N/8D",
    price: "₹19,999",
    rating: 4.8,
    reviews: 98,
    category: "Rajasthan",
    badge: "👑 Premium",
    highlights: ["Jaipur Pink City", "Udaipur Lake Palace", "Jodhpur Blue City", "Jaisalmer Desert"],
    inclusions: ["Hotel", "Breakfast", "Transport", "Guide"],
  },
  {
    id: "goa-beach",
    name: "Goa Beach Holiday",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    duration: "4N/5D",
    price: "₹14,499",
    rating: 4.6,
    reviews: 203,
    category: "Goa",
    badge: "🌊 Beach",
    highlights: ["Calangute Beach", "Dudhsagar Falls", "Old Goa Churches", "Sunset Cruise"],
    inclusions: ["Hotel", "Breakfast", "Transport"],
  },
  {
    id: "kedarnath-package",
    name: "Kedarnath Dham Yatra",
    image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?w=800&q=80",
    duration: "4N/5D",
    price: "₹11,999",
    rating: 4.9,
    reviews: 67,
    category: "Kedarnath",
    badge: "🏔️ Sacred",
    highlights: ["Kedarnath Temple", "Gaurikund", "Chopta Meadows", "Ukhimath"],
    inclusions: ["Hotel", "All Meals", "Transport", "Puja"],
  },
  {
    id: "ayodhya-special",
    name: "Ayodhya Ram Mandir Tour",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    duration: "2N/3D",
    price: "₹6,999",
    rating: 4.9,
    reviews: 142,
    category: "Ayodhya",
    badge: "🛕 Divine",
    highlights: ["Ram Mandir", "Hanuman Garhi", "Kanak Bhavan", "Saryu Aarti"],
    inclusions: ["Hotel", "Breakfast", "Transport"],
  },
  {
    id: "uttarakhand-adventure",
    name: "Uttarakhand Adventure",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&q=80",
    duration: "5N/6D",
    price: "₹13,999",
    rating: 4.7,
    reviews: 81,
    category: "Uttarakhand",
    badge: "🎿 Adventure",
    highlights: ["Rishikesh Rafting", "Mussoorie", "Haridwar Ganga Aarti", "Jim Corbett"],
    inclusions: ["Hotel", "Breakfast", "Transport", "Activities"],
  },
];

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-cream-50 dark:bg-navy-950">
      {/* Page Hero */}
      <section className="relative py-24 bg-navy-800 dark:bg-navy-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1920&q=80"
            alt="Tour packages"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="section-container relative z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-cream-300/60 mb-6">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold-400">Tour Packages</span>
          </nav>
          <span className="trust-badge inline-flex mb-4 mx-auto">🗺️ 200+ Packages</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
            Our <span className="gradient-text-gold">Tour Packages</span>
          </h1>
          <p className="text-cream-300/80 text-lg max-w-2xl mx-auto">
            Curated travel experiences for every budget, style, and dream. From spiritual journeys to adventure trips — we&apos;ve got it all.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 md:top-20 z-30 bg-white/90 dark:bg-navy-900/90 backdrop-blur-md border-b border-gold-200/30 dark:border-gold-500/10 shadow-sm">
        <div className="section-container py-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-gold-50 dark:bg-gold-500/10 text-gold-700 dark:text-gold-400 hover:bg-gold-100 dark:hover:bg-gold-500/20 whitespace-nowrap"
              >
                {cat.name}
                {cat.count > 0 && (
                  <span className="ml-1.5 text-xs opacity-60">({cat.count})</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.id} className="package-card group">
              <div className="relative h-52">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs px-3 py-1 rounded-full bg-gold-500/90 backdrop-blur-sm text-white font-semibold">
                    {pkg.badge}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-cream-200">
                    {pkg.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <Star size={12} className="text-gold-400 fill-gold-400" />
                      <span className="text-white text-xs font-medium">{pkg.rating}</span>
                      <span className="text-cream-300/60 text-xs">({pkg.reviews})</span>
                    </div>
                    <div className="flex items-center gap-3 text-cream-300/80 text-xs">
                      <span className="flex items-center gap-1"><Clock size={10} /> {pkg.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-navy-800">
                <h2 className="font-serif text-lg font-bold text-navy-800 dark:text-cream-100 mb-3">
                  {pkg.name}
                </h2>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {pkg.highlights.slice(0, 3).map((h) => (
                    <span key={h} className="text-xs px-2 py-1 rounded bg-gold-50 dark:bg-gold-500/10 text-gold-700 dark:text-gold-400">
                      {h}
                    </span>
                  ))}
                  {pkg.highlights.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded bg-navy-50 dark:bg-navy-700/50 text-navy-500 dark:text-cream-400/60">
                      +{pkg.highlights.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 flex-wrap mb-4">
                  {pkg.inclusions.map((inc) => (
                    <span key={inc} className="flex items-center gap-1 text-xs text-navy-600 dark:text-cream-300/70">
                      <CheckCircle size={10} className="text-green-500" />
                      {inc}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gold-100 dark:border-gold-500/10">
                  <div>
                    <p className="text-xs text-navy-500 dark:text-cream-400/50">Starting from</p>
                    <p className="text-xl font-bold text-gold-600 dark:text-gold-400 font-serif">
                      {pkg.price}<span className="text-xs font-normal">/person</span>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a href="tel:+918700418360" className="p-2.5 rounded-xl border border-gold-200 dark:border-gold-500/20 text-gold-600 dark:text-gold-400 hover:bg-gold-50 dark:hover:bg-gold-500/10 transition-colors">
                      <Phone size={16} />
                    </a>
                    <Link href={`/packages/${pkg.id}`} className="btn-gold text-sm px-4 py-2.5">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-16 section-container">
        <div className="glass-card p-8 md:p-12 text-center bg-gradient-to-r from-navy-800/5 to-gold-500/5 border-gold-200/50 dark:border-gold-500/20">
          <div className="text-5xl mb-4">✨</div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-800 dark:text-cream-50 mb-3">
            Need a <span className="gradient-text-gold">Custom Package?</span>
          </h2>
          <p className="text-navy-600 dark:text-cream-300/80 mb-8 max-w-lg mx-auto">
            Tell us your dream destination, budget, and dates — we&apos;ll craft the perfect personalized itinerary just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918700418360" className="btn-gold">
              <Phone size={16} />
              Call for Custom Quote
            </a>
            <a
              href="https://wa.me/918700418360?text=Hello%20Raghuvanshi%20Travels,%20I%20would%20like%20a%20custom%20tour%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300"
              style={{ background: "#25D366" }}
            >
              WhatsApp for Custom Trip
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
