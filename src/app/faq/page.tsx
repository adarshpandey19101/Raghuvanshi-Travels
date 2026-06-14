import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions | Raghuvanshi Travels",
  description:
    "Got questions? Find answers to the most common questions about Raghuvanshi Travels' tour packages, taxi services, booking process, cancellations, and more.",
};

const faqs = [
  {
    category: "Booking & Payment",
    emoji: "💳",
    items: [
      {
        q: "How do I book a tour package or taxi service?",
        a: "Booking is simple! Just call us at +91 87004 18360 or send us a WhatsApp message. You can also fill out the contact form on our Contact page and we'll get back to you within 30 minutes.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major payment modes — UPI (GPay, PhonePe, Paytm), NEFT/RTGS bank transfer, credit/debit cards, and cash. A partial advance is required to confirm the booking.",
      },
      {
        q: "How much advance payment is required to confirm a booking?",
        a: "For tour packages, we typically require 25–50% advance to confirm. For taxi services, a token amount may be required for long outstation trips. Balance is paid before or after the trip as agreed.",
      },
      {
        q: "Do I get a booking confirmation?",
        a: "Yes! After your booking is confirmed and advance paid, we send a detailed confirmation on WhatsApp including driver name, vehicle number, pickup time, and full itinerary.",
      },
    ],
  },
  {
    category: "Tour Packages",
    emoji: "🗺️",
    items: [
      {
        q: "What is included in a tour package?",
        a: "Our packages typically include: AC vehicle throughout, driver allowances, fuel, toll taxes, and parking. Hotels, meals, and activity costs are separate unless specifically mentioned in the package details.",
      },
      {
        q: "Can I customize my tour package?",
        a: "Absolutely! All our packages are 100% customizable. Tell us your destinations, number of days, group size, budget, and preferred hotels — we'll design a custom itinerary for you.",
      },
      {
        q: "Do you offer packages for religious/pilgrimage tours?",
        a: "Yes! We specialize in Char Dham Yatra, Kedarnath, Ayodhya, Varanasi, Vrindavan, and other pilgrimage destinations. Our drivers are experienced on mountain routes and pilgrimage roads.",
      },
      {
        q: "What is the minimum and maximum group size for a tour?",
        a: "We can accommodate groups of any size — from solo travelers to groups of 50+. We have Sedans (1–4), SUVs (5–7), Tempo Travellers (8–17), and Mini Buses (18–27) available.",
      },
    ],
  },
  {
    category: "Taxi Services",
    emoji: "🚗",
    items: [
      {
        q: "What types of taxi services do you offer?",
        a: "We offer: Airport Transfers (pick & drop), One Way Taxi, Round Trip Taxi, Outstation Trips, Corporate Travel, Local Sightseeing, Wedding Vehicle Rentals, and Tempo Traveller for groups.",
      },
      {
        q: "Is the fare fixed or metered?",
        a: "All fares are pre-decided and transparent — no hidden charges! We provide a full fare breakup before you book, including base fare, tolls, driver allowance, and any extra km charges.",
      },
      {
        q: "Are your drivers verified and experienced?",
        a: "Yes! All our drivers are background-verified, hold a valid commercial driving license, and have 5+ years of experience. They are trained to handle mountain terrains, highways, and city traffic.",
      },
      {
        q: "Do you provide vehicles for outstation trips from Delhi?",
        a: "Yes, we operate pan-India outstation trips from Delhi NCR to all major destinations including Himachal Pradesh, Uttarakhand, Rajasthan, Uttar Pradesh, Chandigarh, and more.",
      },
    ],
  },
  {
    category: "Cancellations & Refunds",
    emoji: "🔄",
    items: [
      {
        q: "What is your cancellation policy?",
        a: "Cancellations made 72+ hours before departure: Full refund of advance. 24–72 hours before: 50% refund. Less than 24 hours: No refund. However, we are flexible in genuine emergency situations — just give us a call.",
      },
      {
        q: "Can I reschedule my booking?",
        a: "Yes, you can reschedule up to 24 hours before your trip at no extra cost, subject to vehicle availability. For last-minute changes, please call us directly on +91 87004 18360.",
      },
    ],
  },
  {
    category: "Vehicle & Safety",
    emoji: "🛡️",
    items: [
      {
        q: "Are the vehicles insured and well-maintained?",
        a: "All vehicles are fully insured with commercial vehicle insurance, regularly serviced, and sanitized before every trip. Emergency kits (first aid, fire extinguisher, spare tyre) are always onboard.",
      },
      {
        q: "Do vehicles have GPS tracking?",
        a: "Yes, all our vehicles are equipped with real-time GPS tracking. Family members can track the vehicle during the journey for peace of mind.",
      },
      {
        q: "Is there a night travel charge?",
        a: "Yes, trips requiring the driver to stay overnight incur a driver night allowance, which is communicated upfront and included in the total quote.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div style={{ background: "#f8f7f4", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ background: "#0D1B2A", padding: "5.5rem 0" }}>
        <div className="section-container" style={{ textAlign: "center" }}>
          <nav style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", fontSize: "0.8rem", color: "rgba(212,184,150,0.5)", marginBottom: "1.25rem" }}>
            <Link href="/" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(212,184,150,0.5)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "#C9A96E" }}>FAQ</span>
          </nav>
          <span className="trust-badge" style={{ display: "inline-flex", marginBottom: "1rem" }}>❓ Common Questions</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem" }}>
            Frequently Asked <span className="gradient-text-gold">Questions</span>
          </h1>
          <p style={{ color: "rgba(212,184,150,0.7)", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto" }}>
            Everything you need to know about booking with Raghuvanshi Travels.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section style={{ padding: "5rem 0" }}>
        <div className="section-container" style={{ maxWidth: "860px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {faqs.map((section) => (
              <div key={section.category}>
                {/* Category Header */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>{section.emoji}</span>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "#0D1B2A" }}>
                    {section.category}
                  </h2>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {section.items.map((item, i) => (
                    <details
                      key={i}
                      className="glass-card"
                      style={{ padding: "0" }}
                    >
                      <summary
                        style={{
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          padding: "1.25rem 1.5rem", cursor: "pointer", listStyle: "none",
                          fontWeight: 600, color: "#0D1B2A", fontSize: "0.95rem",
                          userSelect: "none",
                        }}
                      >
                        <span>{item.q}</span>
                        <ChevronDown size={18} style={{ color: "#C9A96E", flexShrink: 0, marginLeft: "1rem" }} />
                      </summary>
                      <div style={{ padding: "0 1.5rem 1.25rem", color: "#4a5568", lineHeight: 1.7, fontSize: "0.9rem", borderTop: "1px solid rgba(201,169,110,0.15)" }}>
                        <p style={{ margin: "1rem 0 0" }}>{item.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="glass-card" style={{ marginTop: "3.5rem", padding: "2.5rem", textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "#0D1B2A", marginBottom: "0.5rem" }}>
              Still Have Questions?
            </h3>
            <p style={{ color: "#4a5568", marginBottom: "2rem" }}>
              Our team is available 24/7 — just give us a call or drop a WhatsApp message.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+918700418360" target="_blank" rel="noopener noreferrer" className="btn-gold">
                <Phone size={16} />
                +91 87004 18360
              </a>
              <a
                href="https://wa.me/918700418360?text=Hi%2C%20I%20have%20a%20question%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.75rem 1.5rem", borderRadius: "0.75rem",
                  fontWeight: 600, color: "white", background: "#25D366",
                  textDecoration: "none", fontSize: "0.875rem",
                }}
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
