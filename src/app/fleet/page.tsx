import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Users, Star, Wifi, Wind, Shield, Phone, ArrowRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Fleet — Premium Vehicles for Every Journey",
  description:
    "Explore Raghuvanshi Travels' premium fleet — Sedans, SUVs, Tempo Travellers, Luxury Cars & more. All vehicles are well-maintained, GPS-enabled, and driven by verified professionals.",
};

const vehicles = [
  {
    id: "sedan",
    name: "Swift Dzire / Etios",
    category: "Sedan",
    emoji: "🚗",
    pax: "4 Passengers",
    luggage: "2 Bags",
    ac: true,
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=700&q=80",
    desc: "Perfect for solo travelers, couples, or small families. Comfortable, fuel-efficient, and ideal for city transfers and short outstation trips.",
    idealFor: ["Airport Transfer", "City Transfer", "Outstation (1-2 Pax)"],
    features: ["AC", "GPS", "Charging Port", "Bottled Water"],
  },
  {
    id: "suv",
    name: "Innova / Ertiga",
    category: "SUV / MUV",
    emoji: "🚙",
    pax: "6–7 Passengers",
    luggage: "4 Bags",
    ac: true,
    image: "https://images.unsplash.com/photo-1591293835940-934a7c4f2d9b?w=700&q=80",
    desc: "Our most popular choice for families and small groups. Spacious, reliable, and perfectly suited for hill station and pilgrimage tours.",
    idealFor: ["Family Tours", "Himachal / Uttarakhand", "Corporate Travel"],
    features: ["AC", "GPS", "Music System", "Extra Legroom"],
  },
  {
    id: "crysta",
    name: "Toyota Innova Crysta",
    category: "Premium SUV",
    emoji: "✨",
    pax: "6–7 Passengers",
    luggage: "4 Bags",
    ac: true,
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=700&q=80",
    desc: "Upgraded comfort with premium interiors, captain seats, and a smoother ride. The ideal choice for business executives and premium family travel.",
    idealFor: ["Corporate Travel", "Wedding", "Premium Family Tours"],
    features: ["AC", "GPS", "Captain Seats", "Leather Interior"],
  },
  {
    id: "tempo",
    name: "Tempo Traveller 12–17 Seater",
    category: "Tempo Traveller",
    emoji: "🚌",
    pax: "12–17 Passengers",
    luggage: "Large Luggage Boot",
    ac: true,
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=700&q=80",
    desc: "The best option for group tours, pilgrimages, and corporate outings. Push-back seats, large windows, and a spacious luggage compartment.",
    idealFor: ["Group Tours", "Pilgrimages", "Corporate Outings"],
    features: ["AC", "GPS", "Push-back Seats", "Music System", "Curtains"],
  },
  {
    id: "luxury",
    name: "Mercedes / BMW Class",
    category: "Luxury Car",
    emoji: "👑",
    pax: "4 Passengers",
    luggage: "3 Bags",
    ac: true,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&q=80",
    desc: "Arrive in absolute style. Our luxury fleet includes premium German sedans for weddings, VIP transfers, and high-end corporate events.",
    idealFor: ["Weddings", "VIP Transfer", "Airport Luxury"],
    features: ["AC", "GPS", "Premium Audio", "Leather Seats", "Wi-Fi"],
  },
  {
    id: "minibus",
    name: "Mini Bus (21–27 Seater)",
    category: "Mini Bus",
    emoji: "🚍",
    pax: "21–27 Passengers",
    luggage: "Undercarriage Storage",
    ac: true,
    image: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=700&q=80",
    desc: "Ideal for large corporate events, school trips, and big group pilgrimages. Comfortable reclining seats and ample storage space.",
    idealFor: ["Large Groups", "Corporate Events", "School Tours"],
    features: ["AC", "GPS", "Reclining Seats", "Undercarriage Storage"],
  },
];

const featureIcons: Record<string, React.ReactNode> = {
  AC: <Wind size={13} />,
  GPS: <Shield size={13} />,
  "Wi-Fi": <Wifi size={13} />,
};

export default function FleetPage() {
  return (
    <div style={{ background: "#f8f7f4", minHeight: "100vh" }} className="dark:[background:#0D1B2A]">
      {/* Add pure CSS hover effect for cards to avoid client component issues */}
      <style>{`
        .vehicle-card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .vehicle-card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(13,27,42,0.12); }
        .dark .vehicle-card-hover:hover { box-shadow: 0 20px 50px rgba(201,169,110,0.08); }
      `}</style>
      
      {/* Hero */}
      <section style={{ background: "#0D1B2A", padding: "6rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=75"
            alt="Our Fleet"
            fill
            className="object-cover"
            style={{ opacity: 0.15 }}
            sizes="100vw"
          />
        </div>
        <div className="section-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <nav style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", fontSize: "0.8rem", color: "rgba(212,184,150,0.5)", marginBottom: "1.5rem" }}>
            <Link href="/" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(212,184,150,0.5)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "#C9A96E" }}>Our Fleet</span>
          </nav>
          <span className="trust-badge" style={{ display: "inline-flex", marginBottom: "1rem" }}>🚗 Premium Vehicles</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
            Our <span className="gradient-text-gold">Fleet</span>
          </h1>
          <p style={{ color: "rgba(212,184,150,0.7)", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto" }}>
            Well-maintained, GPS-enabled vehicles driven by verified professionals — for every group size and budget.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "3rem 0", background: "#1A2B4A" }}>
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1.5rem", textAlign: "center" }}>
            {[
              { num: "50+", label: "Vehicles" },
              { num: "100%", label: "AC Fleet" },
              { num: "GPS", label: "All Vehicles" },
              { num: "24/7", label: "Available" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#C9A96E" }}>{s.num}</div>
                <div style={{ color: "rgba(212,184,150,0.6)", fontSize: "0.85rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section style={{ padding: "5rem 0" }}>
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2rem" }}>
            {vehicles.map((v) => (
              <article
                key={v.id}
                className="glass-card vehicle-card-hover"
                style={{ overflow: "hidden" }}
              >
                {/* Vehicle Image */}
                <div style={{ position: "relative", height: "220px" }}>
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,27,42,0.5) 0%, transparent 60%)" }} />
                  <span
                    style={{
                      position: "absolute", top: "1rem", left: "1rem",
                      background: "rgba(201,169,110,0.9)", color: "#fff",
                      fontSize: "0.7rem", fontWeight: 700, padding: "0.25rem 0.75rem",
                      borderRadius: "9999px", letterSpacing: "0.05em", textTransform: "uppercase",
                    }}
                  >
                    {v.category}
                  </span>
                </div>

                <div style={{ padding: "1.5rem" }}>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.4rem" }}>
                    {v.emoji} {v.name}
                  </h2>

                  <div style={{ display: "flex", gap: "1rem", marginBottom: "0.75rem" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                      <Users size={13} /> {v.pax}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>🧳 {v.luggage}</span>
                  </div>

                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1rem" }}>{v.desc}</p>

                  {/* Features */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
                    {v.features.map((f) => (
                      <span
                        key={f}
                        style={{
                          display: "inline-flex", alignItems: "center", gap: "0.3rem",
                          padding: "0.25rem 0.6rem", borderRadius: "9999px", fontSize: "0.75rem",
                          background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.2)",
                          color: "#C9A96E",
                        }}
                      >
                        {featureIcons[f] || <Star size={13} />} {f}
                      </span>
                    ))}
                  </div>

                  {/* Ideal for */}
                  <div style={{ marginBottom: "1.25rem" }}>
                    <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#C9A96E", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Ideal For</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                      {v.idealFor.map((i) => (
                        <span key={i} style={{ fontSize: "0.78rem", color: "var(--text-secondary)", background: "rgba(13,27,42,0.05)", padding: "0.2rem 0.55rem", borderRadius: "0.4rem", border: "1px solid rgba(201,169,110,0.1)" }}>
                          {i}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Inquiry CTA */}
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <a
                      href={`https://wa.me/918700418360?text=Hi%2C%20I%20want%20to%20know%20the%20pricing%20for%20${encodeURIComponent(v.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem",
                        background: "#25D366", color: "#fff", padding: "0.75rem", borderRadius: "0.5rem",
                        fontSize: "0.85rem", fontWeight: 600, textDecoration: "none",
                        transition: "background 0.3s"
                      }}
                    >
                      <MessageCircle size={15} /> Get Price
                    </a>
                    <a
                      href="tel:+918700418360"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold"
                      style={{ flex: 1, justifyContent: "center", padding: "0.75rem", borderRadius: "0.5rem", fontSize: "0.85rem" }}
                    >
                      <Phone size={15} /> Call Now
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 0" }}>
        <div className="section-container">
          <div className="glass-card" style={{ padding: "3rem 2rem", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
              Looking for <span className="gradient-text-gold">Pricing?</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
              Prices depend on distance, duration, and season. Call us or send a message for an instant, transparent quote with no hidden charges.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+918700418360" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}>
                <Phone size={18} />
                +91 87004 18360
              </a>
              <a 
                href="https://wa.me/918700418360" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.9rem 2rem", borderRadius: "0.75rem",
                  fontWeight: 600, color: "white", background: "#25D366",
                  textDecoration: "none", fontSize: "1rem"
                }}
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
