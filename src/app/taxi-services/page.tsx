import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle, Car, Users, Fuel, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Services — Airport Transfer, Outstation, Corporate, Tempo Traveller",
  description:
    "Premium taxi services including airport transfer, one-way taxi, round trip, corporate travel, tempo traveller, wedding vehicles, and luxury car rentals. 24/7 available.",
};

const services = [
  {
    id: "airport",
    icon: "✈️",
    title: "Airport Transfer",
    desc: "Reliable, punctual airport pickup and drop service with real-time flight tracking. AC cabs available at all major airports.",
    features: ["Flight tracking", "24/7 available", "Meet & greet", "Fixed pricing"],
    popular: true,
  },
  {
    id: "one-way",
    icon: "🚗",
    title: "One Way Taxi",
    desc: "Affordable one-way cab service to any destination. Pay only for one direction — no return fare charges.",
    features: ["No return charge", "AC vehicles", "Experienced drivers", "All India coverage"],
    popular: false,
  },
  {
    id: "round-trip",
    icon: "🔄",
    title: "Round Trip",
    desc: "Comfortable round trip cab service with the same driver throughout. Best rates for longer journeys.",
    features: ["Same driver", "Waiting charges", "Multi-city stops", "Flexible schedule"],
    popular: false,
  },
  {
    id: "local",
    icon: "🗺️",
    title: "Local Sightseeing",
    desc: "Explore your city with our knowledgeable local drivers. 8-hour or 12-hour packages available.",
    features: ["8 & 12 hr packages", "Local expert driver", "Fixed km limit", "Multiple stops"],
    popular: false,
  },
  {
    id: "corporate",
    icon: "💼",
    title: "Corporate Travel",
    desc: "Professional corporate cab services for businesses. Monthly packages, employee pickup/drop, and executive vehicles.",
    features: ["Monthly packages", "Invoice billing", "Executive cars", "Priority booking"],
    popular: false,
  },
  {
    id: "wedding",
    icon: "💒",
    title: "Wedding Vehicles",
    desc: "Make your special day even more memorable with our decorated wedding car and coach hire service.",
    features: ["Decorated cars", "Luxury options", "Guest coaches", "DJ vehicles"],
    popular: false,
  },
  {
    id: "tempo",
    icon: "🚐",
    title: "Tempo Traveller",
    desc: "Spacious Tempo Traveller for group travel. 12, 14, and 17-seater options for picnics, pilgrimages, and tours.",
    features: ["12/14/17 seater", "AC & Non-AC", "Group tours", "Pan India"],
    popular: true,
  },
  {
    id: "luxury",
    icon: "🏎️",
    title: "Luxury Cars",
    desc: "Travel in style with our premium luxury vehicles. Innova Hycross, Fortuner, and premium sedan options.",
    features: ["Innova Hycross", "Fortuner", "Mercedes", "Chauffeur driven"],
    popular: false,
  },
];

const fleet = [
  {
    name: "Sedan (Dzire/Etios)",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80",
    capacity: "4 Passengers",
    fuel: "CNG/Petrol",
    ac: true,
    tag: "Economy",
  },
  {
    name: "Ertiga / Maruti Van",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80",
    capacity: "6 Passengers",
    fuel: "CNG/Petrol",
    ac: true,
    tag: "Family",
  },
  {
    name: "Innova Crysta",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80",
    capacity: "6-7 Passengers",
    fuel: "Diesel",
    ac: true,
    tag: "Premium",
  },
  {
    name: "Innova Hycross",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80",
    capacity: "7 Passengers",
    fuel: "Hybrid",
    ac: true,
    tag: "Luxury",
  },
];

export default function TaxiServicesPage() {
  return (
    <div className="min-h-screen bg-cream-50 dark:bg-navy-950">
      {/* Page Hero */}
      <section className="relative py-24 bg-navy-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80"
            alt="Taxi Services"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="section-container relative z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-cream-300/60 mb-6">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold-400">Taxi Services</span>
          </nav>
          <span className="trust-badge inline-flex mb-4 mx-auto">🚗 24/7 Available</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
            Premium <span className="gradient-text-gold">Taxi Services</span>
          </h1>
          <p className="text-cream-300/80 text-lg max-w-2xl mx-auto mb-8">
            Safe, comfortable, and affordable cab services across India. Airport transfers, outstation, corporate, and more.
          </p>
          <a href="tel:+918700418360" className="btn-gold text-lg px-8 py-4 inline-flex">
            <Phone size={20} />
            Book Now: +91 87004 18360
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 section-container">
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl font-bold text-navy-800 dark:text-cream-50 mb-3">
            Our <span className="gradient-text-gold">Services</span>
          </h2>
          <p className="text-navy-600 dark:text-cream-300/80">Professional cab services for every need</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="glass-card p-6 hover:-translate-y-2 hover:shadow-gold-lg transition-all duration-300 group scroll-mt-36 relative"
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-xs px-3 py-1 rounded-full bg-gold-500 text-white font-semibold shadow-gold whitespace-nowrap">
                    ⭐ Popular
                  </span>
                </div>
              )}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h2 className="font-serif text-lg font-bold text-navy-800 dark:text-cream-100 mb-2">
                {service.title}
              </h2>
              <p className="text-navy-600 dark:text-cream-300/70 text-sm mb-4 leading-relaxed">
                {service.desc}
              </p>
              <ul className="space-y-1.5 mb-5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-navy-600 dark:text-cream-300/70">
                    <CheckCircle size={12} className="text-green-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4 border-t border-gold-200/30 dark:border-gold-500/10">
                <div>
                  <p className="text-xs text-navy-500 dark:text-cream-400/60">Pricing</p>
                  <p className="font-bold text-gold-600 dark:text-gold-400">On Request</p>
                </div>
                <a href="tel:+918700418360" className="btn-gold text-xs px-3 py-2">
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet Preview */}
      <section className="py-20 bg-white dark:bg-navy-900 section-container">
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl font-bold text-navy-800 dark:text-cream-50 mb-3">
            Our <span className="gradient-text-gold">Fleet</span>
          </h2>
          <p className="text-navy-600 dark:text-cream-300/80">Modern, well-maintained vehicles for your comfort</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleet.map((car) => (
            <div key={car.name} className="package-card group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-gold-500 text-white font-semibold">
                    {car.tag}
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-navy-800">
                <h3 className="font-semibold text-navy-800 dark:text-cream-100 mb-3">{car.name}</h3>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-navy-600 dark:text-cream-300/70">
                    <Users size={12} className="text-gold-500" />
                    {car.capacity}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-navy-600 dark:text-cream-300/70">
                    <Fuel size={12} className="text-gold-500" />
                    {car.fuel}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-navy-600 dark:text-cream-300/70">
                    <CheckCircle size={12} className="text-green-500" />
                    AC Available
                  </div>
                  <div className="text-xs font-bold text-gold-600 dark:text-gold-400">
                    Call for Price
                  </div>
                </div>
                <a href="tel:+918700418360" className="btn-gold w-full justify-center text-sm py-2">
                  Book This Vehicle
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/fleet" className="btn-outline-gold">
            View Full Fleet
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 section-container">
        <div className="glass-card p-8 md:p-12 text-center border-gold-200/50 dark:border-gold-500/20">
          <div className="text-5xl mb-4">🚗</div>
          <h2 className="font-serif text-3xl font-bold text-navy-800 dark:text-cream-50 mb-3">
            Ready to <span className="gradient-text-gold">Book a Cab?</span>
          </h2>
          <p className="text-navy-600 dark:text-cream-300/80 mb-8 max-w-lg mx-auto">
            Get instant booking confirmation. Call or WhatsApp us 24/7 for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918700418360" className="btn-gold text-lg px-8 py-4">
              <Phone size={20} />
              +91 87004 18360
            </a>
            <a
              href="https://wa.me/918700418360?text=Hello,%20I%20need%20a%20cab%20booking."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg"
              style={{ background: "#25D366" }}
            >
              WhatsApp Booking
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
