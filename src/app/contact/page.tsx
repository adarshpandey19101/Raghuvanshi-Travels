import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — Book Tours & Taxi Services",
  description:
    "Contact Raghuvanshi Travels for tour package bookings, taxi services, and travel inquiries. Call +91 8700418360 or WhatsApp for instant response.",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Call / WhatsApp",
    value: "+91 87004 18360",
    href: "tel:+918700418360",
    desc: "Available 24/7 for bookings",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/918700418360",
    desc: "Instant response guaranteed",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "24/7 — Always Open",
    href: "#",
    desc: "We never close for travelers",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream-50 dark:bg-navy-950">
      {/* Hero */}
      <section className="relative py-24 bg-navy-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80"
            alt="Contact us"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="section-container relative z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-cream-300/60 mb-6">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold-400">Contact</span>
          </nav>
          <span className="trust-badge inline-flex mb-4 mx-auto">📞 Get in Touch</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
            Contact <span className="gradient-text-gold">Us</span>
          </h1>
          <p className="text-cream-300/80 text-lg max-w-xl mx-auto">
            Plan your dream journey today. Our travel experts are ready to help you craft the perfect itinerary.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 section-container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info) => (
            <a
              key={info.title}
              href={info.href}
              target={info.href.startsWith("http") ? "_blank" : undefined}
              rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass-card p-6 text-center hover:-translate-y-2 hover:shadow-gold-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500/20 transition-colors">
                <info.icon size={24} className="text-gold-500" />
              </div>
              <h3 className="font-semibold text-navy-800 dark:text-cream-100 mb-1">{info.title}</h3>
              <p className="text-gold-600 dark:text-gold-400 font-bold mb-1">{info.value}</p>
              <p className="text-navy-500 dark:text-cream-400/60 text-sm">{info.desc}</p>
            </a>
          ))}
        </div>

        {/* Contact Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="glass-card p-8">
            <h2 className="font-serif text-2xl font-bold text-navy-800 dark:text-cream-50 mb-2">
              Send an <span className="gradient-text-gold">Inquiry</span>
            </h2>
            <p className="text-navy-500 dark:text-cream-400/70 text-sm mb-6">
              Fill out the form and we&apos;ll get back to you within 30 minutes.
            </p>

            <form className="space-y-4" action="#" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-navy-700 dark:text-cream-200 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gold-200/40 dark:border-gold-500/20 bg-white/50 dark:bg-navy-800/50 text-navy-800 dark:text-cream-100 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 placeholder-gray-400 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-navy-700 dark:text-cream-200 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-gold-200/40 dark:border-gold-500/20 bg-white/50 dark:bg-navy-800/50 text-navy-800 dark:text-cream-100 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 placeholder-gray-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-navy-700 dark:text-cream-200 mb-1.5">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gold-200/40 dark:border-gold-500/20 bg-white/50 dark:bg-navy-800/50 text-navy-800 dark:text-cream-100 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 placeholder-gray-400 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-service" className="block text-sm font-medium text-navy-700 dark:text-cream-200 mb-1.5">
                  Service Required *
                </label>
                <select
                  id="contact-service"
                  name="service"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gold-200/40 dark:border-gold-500/20 bg-white/50 dark:bg-navy-800/50 text-navy-800 dark:text-cream-100 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option>Tour Package</option>
                  <option>Airport Transfer</option>
                  <option>One Way Taxi</option>
                  <option>Round Trip Taxi</option>
                  <option>Corporate Travel</option>
                  <option>Tempo Traveller</option>
                  <option>Wedding Vehicles</option>
                  <option>Luxury Car Rental</option>
                  <option>Custom Tour Package</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-travel-date" className="block text-sm font-medium text-navy-700 dark:text-cream-200 mb-1.5">
                  Travel Date
                </label>
                <input
                  id="contact-travel-date"
                  type="date"
                  name="travelDate"
                  className="w-full px-4 py-3 rounded-xl border border-gold-200/40 dark:border-gold-500/20 bg-white/50 dark:bg-navy-800/50 text-navy-800 dark:text-cream-100 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-navy-700 dark:text-cream-200 mb-1.5">
                  Your Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us your travel plans, destination, group size, budget, and any special requirements..."
                  className="w-full px-4 py-3 rounded-xl border border-gold-200/40 dark:border-gold-500/20 bg-white/50 dark:bg-navy-800/50 text-navy-800 dark:text-cream-100 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 placeholder-gray-400 transition-colors resize-none"
                />
              </div>

              <button type="submit" className="btn-gold w-full justify-center py-4 text-base">
                <Send size={18} />
                Send Inquiry
              </button>

              <p className="text-xs text-center text-navy-500 dark:text-cream-400/60">
                Or call us directly at{" "}
                <a href="tel:+918700418360" className="text-gold-600 dark:text-gold-400 font-semibold">
                  +91 87004 18360
                </a>{" "}
                for immediate assistance
              </p>
            </form>
          </div>

          {/* Map + Quick Actions */}
          <div className="space-y-6">
            {/* Google Map */}
            <div className="glass-card overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192954!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Raghuvanshi Travels Location"
                className="rounded-2xl"
              />
            </div>

            {/* Quick Contact */}
            <div className="glass-card p-6">
              <h3 className="font-serif text-xl font-bold text-navy-800 dark:text-cream-100 mb-4">
                Quick Contact
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+918700418360"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gold-50 dark:bg-gold-500/10 border border-gold-200/50 dark:border-gold-500/20 hover:shadow-gold transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-navy-500 dark:text-cream-400/60 font-medium">Call for instant booking</p>
                    <p className="font-bold text-navy-800 dark:text-cream-100">+91 87004 18360</p>
                  </div>
                  <ArrowRight size={16} className="ml-auto text-gold-500" />
                </a>

                <a
                  href="https://wa.me/918700418360?text=Hello%20Raghuvanshi%20Travels,%20I%20would%20like%20to%20know%20more%20about%20your%20tour%20packages%20and%20travel%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-green-200/50 dark:border-green-500/20 hover:shadow-lg transition-all duration-300 group"
                  style={{ background: "rgba(37,211,102,0.05)" }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" style={{ background: "#25D366" }}>
                    <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-navy-500 dark:text-cream-400/60 font-medium">WhatsApp for quick reply</p>
                    <p className="font-bold text-navy-800 dark:text-cream-100">Chat on WhatsApp</p>
                  </div>
                  <ArrowRight size={16} className="ml-auto text-green-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
