"use client";

import { Send } from "lucide-react";
import { FormEvent } from "react";

export default function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const service = formData.get("service") as string;
    const travelDate = formData.get("travelDate") as string;
    const message = formData.get("message") as string;

    // Build the WhatsApp message
    let waMessage = `*New Inquiry from Website*%0A%0A`;
    waMessage += `*Name:* ${name}%0A`;
    waMessage += `*Phone:* ${phone}%0A`;
    if (email) waMessage += `*Email:* ${email}%0A`;
    waMessage += `*Service Required:* ${service}%0A`;
    if (travelDate) waMessage += `*Travel Date:* ${travelDate}%0A`;
    waMessage += `*Message:* ${message}`;

    // Replace with your actual WhatsApp number
    const waNumber = "918700418360";
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/${waNumber}?text=${waMessage}`, "_blank");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
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
        Send via WhatsApp
      </button>

      <p className="text-xs text-center text-navy-500 dark:text-cream-400/60">
        Or call us directly at{" "}
        <a href="tel:+918700418360" target="_blank" rel="noopener noreferrer" className="text-gold-600 dark:text-gold-400 font-semibold">
          +91 87004 18360
        </a>{" "}
        for immediate assistance
      </p>
    </form>
  );
}
