"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, ChevronDown, Search, MapPin, Calendar, Users, ArrowRight, Star } from "lucide-react";

const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
    title: "Discover the Magic of",
    highlight: "Kashmir",
    subtitle: "Experience heaven on Earth with our curated Kashmir tour packages",
    badge: "🏔️ Most Popular",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80",
    title: "Sacred Journey to",
    highlight: "Char Dham Yatra",
    subtitle: "Embark on a spiritual journey to the four sacred abodes of India",
    badge: "🙏 Religious Tour",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1920&q=80",
    title: "Explore the Colors of",
    highlight: "Rajasthan",
    subtitle: "Royal palaces, golden deserts, and vibrant culture await you",
    badge: "👑 Heritage Tour",
  },
];

const popularDestinations = [
  {
    name: "Manali",
    state: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    packages: "12 Packages",
    tag: "🏔️ Adventure",
    href: "/packages/himachal",
  },
  {
    name: "Kashmir",
    state: "Jammu & Kashmir",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    packages: "15 Packages",
    tag: "❄️ Paradise",
    href: "/packages/kashmir",
  },
  {
    name: "Kedarnath",
    state: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    packages: "8 Packages",
    tag: "🙏 Spiritual",
    href: "/packages/kedarnath",
  },
  {
    name: "Jaipur",
    state: "Rajasthan",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80",
    packages: "10 Packages",
    tag: "👑 Heritage",
    href: "/packages/rajasthan",
  },
  {
    name: "Goa",
    state: "Goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
    packages: "9 Packages",
    tag: "🌊 Beach",
    href: "/packages/goa",
  },
  {
    name: "Ayodhya",
    state: "Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
    packages: "6 Packages",
    tag: "🛕 Divine",
    href: "/packages/ayodhya",
  },
];

const stats = [
  { number: "5000+", label: "Happy Travelers", icon: "😊" },
  { number: "200+", label: "Tour Packages", icon: "🗺️" },
  { number: "10+", label: "Years Experience", icon: "⭐" },
  { number: "4.9", label: "Google Rating", icon: "🏆" },
];

const featuredPackages = [
  {
    id: 1,
    name: "Kashmir Honeymoon Special",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    duration: "6 Nights / 7 Days",
    rating: 4.9,
    reviews: 124,
    highlights: ["Gulmarg", "Pahalgam", "Dal Lake", "Sonmarg"],
    category: "Honeymoon",
    badge: "🔥 Best Seller",
    href: "/packages/kashmir/honeymoon",
  },
  {
    id: 2,
    name: "Char Dham Yatra Package",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    duration: "11 Nights / 12 Days",
    rating: 4.8,
    reviews: 89,
    highlights: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    category: "Religious",
    badge: "🙏 Spiritual",
    href: "/packages/char-dham",
  },
  {
    id: 3,
    name: "Shimla Manali Explorer",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    duration: "6 Nights / 7 Days",
    rating: 4.7,
    reviews: 156,
    highlights: ["Shimla", "Kufri", "Manali", "Rohtang"],
    category: "Adventure",
    badge: "⛰️ Adventure",
    href: "/packages/himachal/shimla-manali",
  },
  {
    id: 4,
    name: "Rajasthan Royal Heritage",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80",
    duration: "7 Nights / 8 Days",
    rating: 4.8,
    reviews: 98,
    highlights: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
    category: "Heritage",
    badge: "👑 Premium",
    href: "/packages/rajasthan/royal-heritage",
  },
];

const taxiServices = [
  { icon: "✈️", name: "Airport Transfer", desc: "Timely pickups & drops from all major airports", href: "/taxi-services#airport" },
  { icon: "🚗", name: "One Way Taxi", desc: "Affordable one-way cabs to any destination", href: "/taxi-services#one-way" },
  { icon: "🔄", name: "Round Trip", desc: "Flexible return journey packages", href: "/taxi-services#round-trip" },
  { icon: "💼", name: "Corporate Travel", desc: "Executive cab services for business travelers", href: "/taxi-services#corporate" },
  { icon: "🚐", name: "Tempo Traveller", desc: "Comfortable group travel for 12-17 passengers", href: "/taxi-services#tempo" },
  { icon: "💒", name: "Wedding Vehicles", desc: "Decorated cars & coaches for special occasions", href: "/taxi-services#wedding" },
  { icon: "🏎️", name: "Luxury Cars", desc: "Premium sedan & SUV rentals", href: "/taxi-services#luxury" },
  { icon: "🗺️", name: "Local Sightseeing", desc: "Guided city tour packages", href: "/taxi-services#local" },
];

const whyChooseUs = [
  {
    icon: "🛡️",
    title: "Safe & Reliable",
    desc: "All vehicles regularly serviced with trained, verified drivers. Your safety is our top priority.",
  },
  {
    icon: "💰",
    title: "Best Price Guarantee",
    desc: "Transparent pricing with no hidden charges. We match the best rates in the market.",
  },
  {
    icon: "⏰",
    title: "24/7 Available",
    desc: "Round-the-clock support for bookings, queries, and emergencies.",
  },
  {
    icon: "🌟",
    title: "Expert Guides",
    desc: "Experienced local guides who bring destinations to life with stories and insights.",
  },
  {
    icon: "🎯",
    title: "Customized Packages",
    desc: "Tailor-made itineraries designed around your preferences, budget, and travel style.",
  },
  {
    icon: "📱",
    title: "Instant Booking",
    desc: "Quick WhatsApp booking confirmation. No long waits, no complex processes.",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    text: "Raghuvanshi Travels made our Kashmir trip absolutely magical! The service was exceptional, hotels were premium and the driver was very professional. Highly recommended!",
    tour: "Kashmir Tour",
    avatar: "PS",
    color: "from-purple-400 to-pink-400",
  },
  {
    name: "Rajesh Kumar",
    location: "Noida",
    rating: 5,
    text: "Booked Char Dham Yatra package — best decision ever! Everything was perfectly arranged. The team was responsive and made sure we had a comfortable spiritual journey.",
    tour: "Char Dham Yatra",
    avatar: "RK",
    color: "from-blue-400 to-cyan-400",
  },
  {
    name: "Anjali Verma",
    location: "Gurgaon",
    rating: 5,
    text: "Used their airport transfer service multiple times. Always on time, clean vehicles, and professional drivers. The best taxi service I've used in Delhi NCR!",
    tour: "Airport Transfer",
    avatar: "AV",
    color: "from-green-400 to-emerald-400",
  },
  {
    name: "Suresh Patel",
    location: "Faridabad",
    rating: 5,
    text: "Our family trip to Manali was handled brilliantly. Kids loved it! The Innova Crysta was super comfortable and the driver knew all the best spots.",
    tour: "Himachal Package",
    avatar: "SP",
    color: "from-orange-400 to-amber-400",
  },
  {
    name: "Meera Gupta",
    location: "Ghaziabad",
    rating: 5,
    text: "Corporate travel made easy! Raghuvanshi handles all our office travel needs. Punctual, professional, and great value for money.",
    tour: "Corporate Travel",
    avatar: "MG",
    color: "from-rose-400 to-red-400",
  },
];

const faqs = [
  {
    q: "How do I book a tour package?",
    a: "Booking is simple! You can call us at +91 87004 18360, WhatsApp us, or fill out the inquiry form on our website. We'll get back to you within minutes with a customized quote.",
  },
  {
    q: "Do you offer customized tour packages?",
    a: "Absolutely! We specialize in creating personalized itineraries based on your budget, duration, and preferences. Just share your requirements and we'll craft the perfect trip.",
  },
  {
    q: "What vehicles are available for outstation trips?",
    a: "We offer Sedan (Dzire, Etios), SUV (Ertiga), Innova Crysta, Innova Hycross, Tempo Traveller, and Luxury vehicles. All are AC, well-maintained, and driven by experienced drivers.",
  },
  {
    q: "Is airport pickup available 24/7?",
    a: "Yes! Our airport transfer service operates 24/7, 365 days a year. We track your flight in real-time and adjust pickup timing accordingly.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We have a flexible cancellation policy. Cancellations made 48+ hours before departure receive a full refund. Last-minute cancellations may have nominal charges.",
  },
  {
    q: "Do you provide services outside Delhi NCR?",
    a: "Yes! We serve all major cities across India. Our outstation taxi services cover routes throughout North India, and tour packages cover all popular destinations across the country.",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<"packages" | "taxi">("packages");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <>
      {/* ─── HERO SECTION ─── */}
      <section ref={heroRef} className="hero-section" aria-label="Hero Banner">
        {/* Parallax Background */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title + " " + heroSlides[currentSlide].highlight}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/40 to-transparent" />
        </motion.div>

        {/* Animated floating elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gold-500/10 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-navy-500/20 blur-3xl"
          />
        </div>

        {/* Hero Content */}
        <div className="section-container relative z-10 w-full py-32 md:py-0 min-h-screen flex items-center">
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              key={currentSlide + "-badge"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="trust-badge inline-flex mb-6"
            >
              <span>{heroSlides[currentSlide].badge}</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              key={currentSlide + "-title"}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-5xl md:text-7xl font-bold text-white text-shadow-lg leading-tight mb-4"
            >
              {heroSlides[currentSlide].title}
              <br />
              <span className="gradient-text-gold">{heroSlides[currentSlide].highlight}</span>
            </motion.h1>

            <motion.p
              key={currentSlide + "-sub"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-cream-200 text-lg md:text-xl mb-8 leading-relaxed max-w-lg text-shadow"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/packages" target="_blank" rel="noopener noreferrer" className="btn-gold text-base px-8 py-4">
                Explore Packages
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+918700418360"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold text-base px-8 py-4 border-white/40 text-white hover:bg-white/10 hover:border-white"
              >
                <Phone size={18} />
                Call Now
              </a>
            </motion.div>

            {/* Slide Indicators */}
            <div className="flex gap-2 mt-10">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === currentSlide ? "w-8 bg-gold-400" : "w-2 bg-white/40"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60"
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* ─── QUICK SEARCH BAR ─── */}
      <section className="relative z-20 -mt-8 section-container pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-8 shadow-gold"
        >
          <div className="flex gap-2 mb-6 border-b border-gold-200/30 dark:border-gold-500/20 pb-4">
            {(["packages", "taxi"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 capitalize ${
                  activeTab === tab
                    ? "bg-gold-500 text-white shadow-gold"
                    : "text-navy-700 dark:text-cream-200 hover:bg-gold-50 dark:hover:bg-gold-500/10"
                }`}
              >
                {tab === "packages" ? "🗺️ Tour Packages" : "🚗 Taxi Booking"}
              </button>
            ))}
          </div>

          {activeTab === "packages" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-500" />
                <select className="w-full pl-9 pr-4 py-3 rounded-xl border border-gold-200/40 dark:border-gold-500/20 bg-white/50 dark:bg-navy-800/50 text-navy-800 dark:text-cream-100 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400">
                  <option value="">Select Destination</option>
                  <option>Kashmir</option>
                  <option>Himachal Pradesh</option>
                  <option>Uttarakhand</option>
                  <option>Rajasthan</option>
                  <option>Goa</option>
                  <option>Char Dham</option>
                </select>
              </div>
              <div className="relative">
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-500" />
                <input
                  type="date"
                  className="w-full pl-9 pr-4 py-3 rounded-xl border border-gold-200/40 dark:border-gold-500/20 bg-white/50 dark:bg-navy-800/50 text-navy-800 dark:text-cream-100 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                />
              </div>
              <div className="relative">
                <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-500" />
                <select className="w-full pl-9 pr-4 py-3 rounded-xl border border-gold-200/40 dark:border-gold-500/20 bg-white/50 dark:bg-navy-800/50 text-navy-800 dark:text-cream-100 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400">
                  <option>1 Person</option>
                  <option>2 Persons</option>
                  <option>4 Persons</option>
                  <option>6 Persons</option>
                  <option>10+ Persons</option>
                </select>
              </div>
              <Link href="/packages" target="_blank" rel="noopener noreferrer" className="btn-gold justify-center py-3">
                <Search size={16} />
                Search Packages
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-500" />
                <input
                  type="text"
                  placeholder="Pickup Location"
                  className="w-full pl-9 pr-4 py-3 rounded-xl border border-gold-200/40 dark:border-gold-500/20 bg-white/50 dark:bg-navy-800/50 text-navy-800 dark:text-cream-100 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 placeholder-gray-400"
                />
              </div>
              <div className="relative">
                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-500" />
                <input
                  type="text"
                  placeholder="Drop Location"
                  className="w-full pl-9 pr-4 py-3 rounded-xl border border-gold-200/40 dark:border-gold-500/20 bg-white/50 dark:bg-navy-800/50 text-navy-800 dark:text-cream-100 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 placeholder-gray-400"
                />
              </div>
              <div className="relative">
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-500" />
                <input
                  type="datetime-local"
                  className="w-full pl-9 pr-4 py-3 rounded-xl border border-gold-200/40 dark:border-gold-500/20 bg-white/50 dark:bg-navy-800/50 text-navy-800 dark:text-cream-100 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                />
              </div>
              <a href="tel:+918700418360" target="_blank" rel="noopener noreferrer" className="btn-gold justify-center py-3">
                <Phone size={16} />
                Book Now
              </a>
            </div>
          )}
        </motion.div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-8 bg-navy-800 dark:bg-navy-950">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="stat-number text-4xl md:text-5xl mb-1">{stat.number}</div>
                <div className="text-cream-300/70 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── POPULAR DESTINATIONS ─── */}
      <section className="py-20 bg-cream-50 dark:bg-navy-900" aria-label="Popular Destinations">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="trust-badge inline-flex mb-4">🗺️ Destinations</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-800 dark:text-cream-50 mb-4">
              Popular <span className="gradient-text-gold">Destinations</span>
            </h2>
            <p className="text-navy-600 dark:text-cream-300/80 max-w-xl mx-auto">
              From snow-capped Himalayas to royal Rajasthan — explore India&apos;s most breathtaking destinations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDestinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={dest.href} target="_blank" rel="noopener noreferrer" className="block group package-card">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={dest.image}
                      alt={dest.name + " tour packages"}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-xs px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white font-medium">
                        {dest.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="font-serif text-2xl font-bold text-white">{dest.name}</h3>
                      <p className="text-cream-200/80 text-sm flex items-center gap-1">
                        <MapPin size={12} />
                        {dest.state}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between bg-white dark:bg-navy-800">
                    <div>
                      <p className="text-sm font-semibold text-navy-700 dark:text-cream-200">{dest.packages}</p>
                      <p className="text-xs text-gold-600 dark:text-gold-400">
                        Customized Quotes Available
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gold-50 dark:bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-300">
                      <ArrowRight size={14} className="text-gold-600 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/packages" target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
              View All Packages
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PACKAGES ─── */}
      <section className="py-20 bg-white dark:bg-navy-950" aria-label="Featured Tour Packages">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="trust-badge inline-flex mb-4">⭐ Featured</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-800 dark:text-cream-50 mb-4">
              Handpicked <span className="gradient-text-gold">Tour Packages</span>
            </h2>
            <p className="text-navy-600 dark:text-cream-300/80 max-w-xl mx-auto">
              Carefully curated experiences that combine comfort, adventure, and value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPackages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="package-card group"
              >
                <div className="relative h-60 md:h-72">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-gold-500/90 backdrop-blur-sm text-white font-semibold">
                      {pkg.badge}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-cream-200">
                      {pkg.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          size={12}
                          className={j < Math.floor(pkg.rating) ? "text-gold-400 fill-gold-400" : "text-gray-400"}
                        />
                      ))}
                      <span className="text-cream-200 text-xs ml-1">({pkg.reviews} reviews)</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white">{pkg.name}</h3>
                    <p className="text-cream-300/80 text-sm">{pkg.duration}</p>
                  </div>
                </div>
                <div className="p-5 bg-white dark:bg-navy-800">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs px-2.5 py-1 rounded-full bg-gold-50 dark:bg-gold-500/10 text-gold-700 dark:text-gold-400 border border-gold-200/50 dark:border-gold-500/20"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-navy-500 dark:text-cream-400/60">Pricing</p>
                      <p className="text-lg font-bold text-gold-600 dark:text-gold-400 font-serif">
                        On Request
                      </p>
                    </div>
                    <Link
                      href={pkg.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold text-sm px-5 py-2.5"
                    >
                      View Details
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/packages" target="_blank" rel="noopener noreferrer" className="btn-navy">
              View All Packages
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TAXI SERVICES ─── */}
      <section className="py-20 bg-cream-50 dark:bg-navy-900" aria-label="Taxi Services">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="trust-badge inline-flex mb-4">🚗 Services</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-800 dark:text-cream-50 mb-4">
              Our Taxi <span className="gradient-text-gold">Services</span>
            </h2>
            <p className="text-navy-600 dark:text-cream-300/80 max-w-xl mx-auto">
              Professional taxi and cab services for every need — from airport transfers to luxury rides
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {taxiServices.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 md:p-6 flex flex-col items-center text-center gap-3 hover:shadow-gold-lg hover:-translate-y-2 transition-all duration-300 group block"
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-navy-800 dark:text-cream-100 text-sm md:text-base">
                    {service.name}
                  </h3>
                  <p className="text-navy-500 dark:text-cream-400/70 text-xs leading-relaxed hidden md:block">
                    {service.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/taxi-services" target="_blank" rel="noopener noreferrer" className="btn-gold">
              Book a Cab Now
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20 bg-navy-800 dark:bg-navy-950 relative overflow-hidden" aria-label="Why Choose Raghuvanshi Travels">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, #C9A96E 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="trust-badge inline-flex mb-4">🏆 Excellence</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="gradient-text-gold">Us?</span>
            </h2>
            <p className="text-cream-300/80 max-w-xl mx-auto">
              We go beyond just travel — we craft experiences that stay with you forever
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 md:p-8 group hover:shadow-gold-lg hover:-translate-y-2 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(201,169,110,0.15)" }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-cream-300/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 bg-cream-50 dark:bg-navy-900" aria-label="Customer Testimonials">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="trust-badge inline-flex mb-4">❤️ Reviews</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-800 dark:text-cream-50 mb-4">
              What Travelers <span className="gradient-text-gold">Say</span>
            </h2>
            <p className="text-navy-600 dark:text-cream-300/80 max-w-xl mx-auto">
              Real experiences from our valued customers who trusted us with their journeys
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} className="text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <p className="text-navy-700 dark:text-cream-300/90 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gold-200/30 dark:border-gold-500/10">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-navy-800 dark:text-cream-100 text-sm">{t.name}</p>
                    <p className="text-navy-500 dark:text-cream-400/60 text-xs">
                      {t.location} · {t.tour}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/testimonials" target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
              Read All Reviews
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 bg-white dark:bg-navy-950" aria-label="Frequently Asked Questions">
        <div className="section-container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="trust-badge inline-flex mb-4">❓ FAQ</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-800 dark:text-cream-50 mb-4">
              Frequently Asked <span className="gradient-text-gold">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
                >
                  <span className="font-semibold text-navy-800 dark:text-cream-100 text-sm md:text-base">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <ChevronDown size={18} className="text-gold-500" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 md:px-6 pb-5 border-t border-gold-200/30 dark:border-gold-500/10 pt-3">
                        <p className="text-navy-600 dark:text-cream-300/80 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA ─── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80"
            alt="Travel background"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-800/90" />
        </div>

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="trust-badge inline-flex mb-6 mx-auto">📞 Ready to Travel?</span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
              Start Your{" "}
              <span className="gradient-text-gold">Dream Journey</span>
              {" "}Today
            </h2>
            <p className="text-cream-200/80 text-lg mb-10">
              Get a free customized tour plan within minutes. Our travel experts are ready to craft the perfect itinerary for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918700418360" target="_blank" rel="noopener noreferrer" className="btn-gold text-base px-8 py-4">
                <Phone size={18} />
                Call: +91 87004 18360
              </a>
              <a
                href="https://wa.me/918700418360?text=Hello%20Raghuvanshi%20Travels,%20I%20would%20like%20to%20know%20more%20about%20your%20tour%20packages%20and%20travel%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all duration-300 hover:-translate-y-1"
                style={{ background: "#25D366", boxShadow: "0 4px 15px rgba(37,211,102,0.3)" }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
              <Link href="/contact" target="_blank" rel="noopener noreferrer" className="btn-outline-gold border-white/40 text-white hover:bg-white/10 text-base px-8 py-4">
                Inquiry Form
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
