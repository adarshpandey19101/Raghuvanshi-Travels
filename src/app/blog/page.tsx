import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Blog — Tips, Guides & India Travel Inspiration",
  description:
    "Explore Raghuvanshi Travels' blog for travel tips, destination guides, itineraries, and insider advice for traveling across India.",
};

const posts = [
  {
    id: "best-time-visit-kashmir",
    title: "Best Time to Visit Kashmir: A Complete Season Guide",
    excerpt:
      "From tulip gardens in spring to snowfall in winter — Kashmir is beautiful year-round, but each season offers a different experience. Here's your ultimate guide to timing your trip.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    category: "Destination Guide",
    date: "June 10, 2025",
    readTime: "7 min read",
    featured: true,
  },
  {
    id: "char-dham-yatra-planning",
    title: "Char Dham Yatra 2025: Complete Planning Guide",
    excerpt:
      "Everything you need to know to plan your Char Dham Yatra — best time, registration process, route, accommodation, and packing list.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=700&q=80",
    category: "Pilgrimage",
    date: "May 28, 2025",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: "manali-budget-tips",
    title: "Manali on a Budget: 7 Days Travel Guide",
    excerpt:
      "Yes, Manali can be affordable! Discover how to experience the best of Himachal — snow points, Rohtang, local food — without burning a hole in your pocket.",
    image: "https://images.unsplash.com/photo-1609766418204-94de31e7a5a1?w=700&q=80",
    category: "Budget Travel",
    date: "May 15, 2025",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: "rajasthan-road-trip",
    title: "Ultimate Rajasthan Road Trip: 10 Days, 5 Cities",
    excerpt:
      "Jaipur → Jodhpur → Jaisalmer → Udaipur → Pushkar. Plan the perfect Rajasthan road trip with our detailed day-by-day itinerary and insider tips.",
    image: "https://images.unsplash.com/photo-1616788494672-ec7ca25fdda9?w=700&q=80",
    category: "Road Trip",
    date: "April 22, 2025",
    readTime: "12 min read",
    featured: false,
  },
  {
    id: "kedarnath-trek-guide",
    title: "Kedarnath Trek Guide: Preparation, Route & Tips",
    excerpt:
      "Planning the Kedarnath trek? Here's everything from fitness preparation and packing list to route difficulty and weather conditions during the Yatra season.",
    image: "https://images.unsplash.com/photo-1543416347-c984d3b82c64?w=700&q=80",
    category: "Trekking",
    date: "April 10, 2025",
    readTime: "9 min read",
    featured: false,
  },
  {
    id: "goa-monsoon-travel",
    title: "Why You Should Visit Goa During Monsoon",
    excerpt:
      "Most tourists skip Goa in July–September. But the monsoon transforms the state into a lush paradise with waterfalls, empty beaches, cheap hotels, and amazing local food.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=700&q=80",
    category: "Hidden Gems",
    date: "March 30, 2025",
    readTime: "6 min read",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  "Destination Guide": "#2563eb",
  "Pilgrimage": "#7c3aed",
  "Budget Travel": "#059669",
  "Road Trip": "#d97706",
  "Trekking": "#dc2626",
  "Hidden Gems": "#db2777",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div style={{ background: "#f8f7f4", minHeight: "100vh" }} className="dark:[background:#0D1B2A]">
      <style>{`
        .blog-card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .blog-card-hover:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(13,27,42,0.1); }
        .dark .blog-card-hover:hover { box-shadow: 0 16px 40px rgba(201,169,110,0.08); }
        
        .featured-card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .featured-card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 50px rgba(13,27,42,0.12); }
        .dark .featured-card-hover:hover { box-shadow: 0 20px 50px rgba(201,169,110,0.08); }
      `}</style>
      
      {/* Hero */}
      <section style={{ background: "#0D1B2A", padding: "5.5rem 0" }}>
        <div className="section-container" style={{ textAlign: "center" }}>
          <nav style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", fontSize: "0.8rem", color: "rgba(212,184,150,0.5)", marginBottom: "1.25rem" }}>
            <Link href="/" style={{ color: "rgba(212,184,150,0.5)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "#C9A96E" }}>Blog</span>
          </nav>
          <span className="trust-badge" style={{ display: "inline-flex", marginBottom: "1rem" }}>✍️ Travel Stories & Tips</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem" }}>
            Travel <span className="gradient-text-gold">Blog</span>
          </h1>
          <p style={{ color: "rgba(212,184,150,0.7)", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto" }}>
            Destination guides, travel tips, and stories to inspire your next India adventure.
          </p>
        </div>
      </section>

      <section style={{ padding: "5rem 0" }}>
        <div className="section-container">
          {/* Featured Post */}
          <Link
            href={`/blog/${featured.id}`}
            style={{ textDecoration: "none", display: "block", marginBottom: "3rem" }}
          >
            <article
              className="glass-card featured-card-hover"
              style={{ overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "380px" }}
            >
              <div style={{ position: "relative" }}>
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div style={{ position: "absolute", top: "1.25rem", left: "1.25rem" }}>
                  <span style={{ background: "#C9A96E", color: "#fff", fontSize: "0.7rem", fontWeight: 700, padding: "0.3rem 0.75rem", borderRadius: "9999px", letterSpacing: "0.05em" }}>
                    ⭐ FEATURED
                  </span>
                </div>
              </div>
              <div style={{ padding: "2.5rem" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: categoryColors[featured.category] || "#C9A96E", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {featured.category}
                </span>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700, color: "var(--text-primary)", margin: "0.75rem 0 1rem", lineHeight: 1.35 }}>
                  {featured.title}
                </h2>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.9rem" }}>{featured.excerpt}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text-muted)", fontSize: "0.8rem" }}>
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      <Clock size={13} /> {featured.readTime}
                    </span>
                  </div>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#C9A96E", fontSize: "0.85rem", fontWeight: 600 }}>
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          </Link>

          {/* Post Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                style={{ textDecoration: "none" }}
              >
                <article
                  className="glass-card blog-card-hover"
                  style={{ overflow: "hidden", height: "100%" }}
                >
                  <div style={{ position: "relative", height: "200px" }}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,27,42,0.4) 0%, transparent 60%)" }} />
                  </div>
                  <div style={{ padding: "1.4rem" }}>
                    <span style={{ fontSize: "0.7rem", fontWeight: 600, color: categoryColors[post.category] || "#C9A96E", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {post.category}
                    </span>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", margin: "0.5rem 0 0.75rem", lineHeight: 1.4 }}>
                      {post.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.65, marginBottom: "1.1rem" }}>
                      {post.excerpt.substring(0, 100)}...
                    </p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(201,169,110,0.15)", paddingTop: "0.85rem" }}>
                      <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{post.date} · {post.readTime}</span>
                      <ArrowRight size={15} style={{ color: "#C9A96E" }} />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 0" }}>
        <div className="section-container" style={{ textAlign: "center" }}>
          <div className="glass-card" style={{ padding: "2.5rem 2rem" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
              Ready to <span className="gradient-text-gold">Explore India?</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1.75rem" }}>Turn your travel inspiration into reality. Call us to plan your trip.</p>
            <a href="tel:+918700418360" className="btn-gold" style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}>
              <Phone size={18} />
              Book Now: +91 87004 18360
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
