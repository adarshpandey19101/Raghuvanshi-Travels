import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery — Beautiful Destinations & Memorable Journeys",
  description:
    "Explore our travel gallery — stunning destinations, happy travelers, and memorable journeys captured by Raghuvanshi Travels across India.",
};

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Kashmir Valley",
    title: "Kashmir Valley",
    category: "Kashmir",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1609766418204-94de31e7a5a1?w=600&q=80",
    alt: "Manali Snow",
    title: "Manali",
    category: "Himachal",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1616788494672-ec7ca25fdda9?w=600&q=80",
    alt: "Rajasthan Fort",
    title: "Jaisalmer Fort",
    category: "Rajasthan",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80",
    alt: "Kedarnath Temple",
    title: "Kedarnath",
    category: "Uttarakhand",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
    alt: "Goa Beach",
    title: "Goa Beach",
    category: "Goa",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=700&q=80",
    alt: "Taj Mahal",
    title: "Taj Mahal",
    category: "Uttar Pradesh",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=700&q=80",
    alt: "Leh Ladakh",
    title: "Leh Ladakh",
    category: "Ladakh",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=600&q=80",
    alt: "Shimla Hills",
    title: "Shimla",
    category: "Himachal",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1585136917228-d50b1795e1ac?w=600&q=80",
    alt: "Ayodhya Temple",
    title: "Ayodhya",
    category: "Religious",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=700&q=80",
    alt: "Varanasi Ghat",
    title: "Varanasi",
    category: "Religious",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1600100397608-d64bae17c52a?w=600&q=80",
    alt: "Jaipur Palace",
    title: "Hawa Mahal",
    category: "Rajasthan",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=600&q=80",
    alt: "Nainital Lake",
    title: "Nainital",
    category: "Uttarakhand",
    span: "",
  },
];

const categories = ["All", "Kashmir", "Himachal", "Uttarakhand", "Rajasthan", "Goa", "Religious", "Ladakh"];

export default function GalleryPage() {
  return (
    <div style={{ background: "#f8f7f4", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ background: "#0D1B2A", padding: "5.5rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=70"
            alt="Gallery hero"
            fill
            className="object-cover"
            style={{ opacity: 0.18 }}
            sizes="100vw"
          />
        </div>
        <div className="section-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <nav style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", fontSize: "0.8rem", color: "rgba(212,184,150,0.5)", marginBottom: "1.25rem" }}>
            <Link href="/" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(212,184,150,0.5)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "#C9A96E" }}>Gallery</span>
          </nav>
          <span className="trust-badge" style={{ display: "inline-flex", marginBottom: "1rem" }}>📸 Photo Gallery</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem" }}>
            Travel <span className="gradient-text-gold">Gallery</span>
          </h1>
          <p style={{ color: "rgba(212,184,150,0.7)", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto" }}>
            Stunning destinations across India — from snowy peaks to golden deserts.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section style={{ padding: "2rem 0", background: "#ffffff", borderBottom: "1px solid rgba(201,169,110,0.15)" }}>
        <div className="section-container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                style={{
                  padding: "0.4rem 1rem", borderRadius: "9999px", fontSize: "0.85rem",
                  fontWeight: 500, border: "1px solid rgba(201,169,110,0.3)",
                  background: cat === "All" ? "#C9A96E" : "transparent",
                  color: cat === "All" ? "#ffffff" : "#1A2B4A",
                  cursor: "pointer", transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ padding: "3.5rem 0" }}>
        <div className="section-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridAutoRows: "240px",
              gap: "1rem",
            }}
          >
            {galleryItems.map((item, i) => (
              <div
                key={i}
                style={{
                  position: "relative", borderRadius: "0.875rem", overflow: "hidden",
                  gridColumn: item.span.includes("col-span-2") ? "span 2" : "span 1",
                  gridRow: item.span.includes("row-span-2") ? "span 2" : "span 1",
                  cursor: "pointer",
                }}
                className="group"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(13,27,42,0.7) 0%, transparent 60%)",
                    transition: "opacity 0.3s",
                  }}
                />
                <div style={{ position: "absolute", bottom: "1rem", left: "1rem" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#C9A96E", textTransform: "uppercase", letterSpacing: "0.08em", display: "block" }}>
                    {item.category}
                  </span>
                  <span style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile grid fallback */}
          <style>{`
            @media (max-width: 640px) {
              .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
              .gallery-grid > div[style*="span 2"] { grid-column: span 1 !important; }
              .gallery-grid > div[style*="row-span-2"] { grid-row: span 1 !important; }
            }
          `}</style>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 0" }}>
        <div className="section-container" style={{ textAlign: "center" }}>
          <div className="glass-card" style={{ padding: "3rem 2rem" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.875rem", fontWeight: 700, color: "#0D1B2A", marginBottom: "0.75rem" }}>
              Want to Create Your Own <span className="gradient-text-gold">Memories?</span>
            </h2>
            <p style={{ color: "#4a5568", marginBottom: "2rem" }}>Book a tour package with us and explore India&apos;s most beautiful destinations.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/packages" target="_blank" rel="noopener noreferrer" className="btn-gold">Browse Packages</Link>
              <a href="tel:+918700418360" target="_blank" rel="noopener noreferrer" className="btn-navy">Call +91 87004 18360</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
