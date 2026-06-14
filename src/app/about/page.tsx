import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, Target, Eye, Heart, Award, Users, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Raghuvanshi Travels Story & Mission",
  description:
    "Learn about Raghuvanshi Travels — your trusted travel partner for 10+ years. Our story, vision, mission, and commitment to delivering unforgettable journeys.",
};

const milestones = [
  { year: "2014", title: "Founded", desc: "Started with a vision to make premium travel accessible to all Indians" },
  { year: "2016", title: "100+ Customers", desc: "Reached our first milestone of 100 happy travelers" },
  { year: "2018", title: "Fleet Expansion", desc: "Expanded our fleet to 50+ vehicles across all categories" },
  { year: "2020", title: "Pan India", desc: "Extended operations to serve customers across all major cities in India" },
  { year: "2022", title: "5★ Rating", desc: "Consistently maintained 4.9/5 rating across all platforms" },
  { year: "2024", title: "5000+ Trips", desc: "Proudly served 5000+ travelers and counting!" },
];

const values = [
  {
    icon: Heart,
    title: "Passion for Travel",
    desc: "We don't just book trips — we craft memories that last a lifetime. Every journey is personal to us.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "From vehicle maintenance to guide training — we hold ourselves to the highest standards.",
  },
  {
    icon: Users,
    title: "Customer First",
    desc: "Your comfort, safety, and satisfaction are at the center of every decision we make.",
  },
  {
    icon: Clock,
    title: "Reliability",
    desc: "Punctual pickups, on-time departures, and 24/7 support. We're always there when you need us.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-50 dark:bg-navy-950">
      {/* Hero */}
      <section className="relative py-28 bg-navy-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
            alt="About Raghuvanshi Travels"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="section-container relative z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-cream-300/60 mb-6">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold-400">About Us</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
            Our <span className="gradient-text-gold">Story</span>
          </h1>
          <p className="text-cream-300/80 text-lg max-w-2xl mx-auto">
            10+ years of turning travel dreams into unforgettable realities. Here&apos;s who we are.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="trust-badge inline-flex mb-4">🏢 Our Story</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-800 dark:text-cream-50 mb-5">
              Born from a <span className="gradient-text-gold">Passion</span> for Travel
            </h2>
            <div className="space-y-4 text-navy-600 dark:text-cream-300/80 leading-relaxed">
              <p>
                Raghuvanshi Travels was founded with a simple yet powerful belief: that every Indian deserves to experience the breathtaking beauty of our country in comfort and style — without breaking the bank.
              </p>
              <p>
                What started as a small taxi service has grown into a full-service travel agency, offering curated tour packages to the most iconic destinations in India — from the snow-capped peaks of Kashmir to the golden sands of Rajasthan.
              </p>
              <p>
                Today, we proudly serve thousands of happy travelers every year, maintaining a 4.9★ Google rating through our unwavering commitment to quality, safety, and personalized service.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { number: "10+", label: "Years" },
                { number: "5000+", label: "Travelers" },
                { number: "4.9★", label: "Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center glass-card p-4">
                  <div className="font-serif text-2xl font-bold gradient-text-gold">{stat.number}</div>
                  <div className="text-navy-500 dark:text-cream-400/60 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-navy">
              <Image
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
                alt="Raghuvanshi Travels team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 glass-card p-4 shadow-gold">
              <p className="text-2xl font-bold text-gold-600 dark:text-gold-400 font-serif">200+</p>
              <p className="text-xs text-navy-600 dark:text-cream-300/70">Tour Packages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 border-l-4 border-gold-500">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-5">
                <Eye size={24} className="text-gold-500" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-800 dark:text-cream-100 mb-4">Our Vision</h3>
              <p className="text-navy-600 dark:text-cream-300/80 leading-relaxed">
                To be India&apos;s most trusted and beloved travel brand — where every traveler feels valued, safe, and inspired to explore the world.
              </p>
            </div>
            <div className="glass-card p-8 border-l-4 border-navy-600">
              <div className="w-12 h-12 rounded-xl bg-navy-500/10 flex items-center justify-center mb-5">
                <Target size={24} className="text-navy-600 dark:text-cream-400" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-800 dark:text-cream-100 mb-4">Our Mission</h3>
              <p className="text-navy-600 dark:text-cream-300/80 leading-relaxed">
                To deliver exceptional travel experiences through personalized service, reliable transportation, and meticulously planned itineraries that exceed expectations every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 section-container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-800 dark:text-cream-50 mb-3">
            Our <span className="gradient-text-gold">Core Values</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div key={value.title} className="glass-card p-6 text-center hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500/20 transition-colors">
                <value.icon size={24} className="text-gold-500" />
              </div>
              <h3 className="font-semibold text-navy-800 dark:text-cream-100 mb-2">{value.title}</h3>
              <p className="text-navy-500 dark:text-cream-400/70 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-800 dark:text-cream-50 mb-3">
              Our <span className="gradient-text-gold">Journey</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-px bg-gold-200 dark:bg-gold-500/20 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <div key={milestone.year} className={`flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="glass-card p-5 inline-block">
                      <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">{milestone.year}</span>
                      <h3 className="font-serif font-bold text-navy-800 dark:text-cream-100 text-lg mt-1">{milestone.title}</h3>
                      <p className="text-navy-500 dark:text-cream-400/70 text-sm mt-1">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-gold-500 border-4 border-white dark:border-navy-900 shadow-gold z-10 shrink-0" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-container">
        <div className="glass-card p-10 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy-800 dark:text-cream-50 mb-3">
            Let&apos;s Plan Your Next <span className="gradient-text-gold">Adventure</span>
          </h2>
          <p className="text-navy-600 dark:text-cream-300/80 mb-8">
            Ready to create memories? Our team is just a call away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918700418360" className="btn-gold">
              <Phone size={16} />
              +91 87004 18360
            </a>
            <Link href="/packages" className="btn-navy">
              Browse Packages
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
