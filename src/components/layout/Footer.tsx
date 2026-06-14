import Link from "next/link";
import { Phone } from "lucide-react";

const footerLinks = {
  packages: [
    { name: "Himachal Pradesh", href: "/packages/himachal" },
    { name: "Kashmir Tour", href: "/packages/kashmir" },
    { name: "Uttarakhand", href: "/packages/uttarakhand" },
    { name: "Rajasthan", href: "/packages/rajasthan" },
    { name: "Goa Packages", href: "/packages/goa" },
    { name: "Char Dham Yatra", href: "/packages/char-dham" },
    { name: "Kedarnath", href: "/packages/kedarnath" },
    { name: "Ayodhya", href: "/packages/ayodhya" },
  ],
  services: [
    { name: "Airport Transfer", href: "/taxi-services#airport" },
    { name: "One Way Taxi", href: "/taxi-services#one-way" },
    { name: "Outstation Taxi", href: "/taxi-services#outstation" },
    { name: "Corporate Travel", href: "/taxi-services#corporate" },
    { name: "Tempo Traveller", href: "/taxi-services#tempo" },
    { name: "Wedding Vehicles", href: "/taxi-services#wedding" },
    { name: "Luxury Cars", href: "/taxi-services#luxury" },
    { name: "Local Sightseeing", href: "/taxi-services#local" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Fleet", href: "/fleet" },
    { name: "Gallery", href: "/gallery" },
    { name: "Travel Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
  ],
};

const linkStyle = {
  color: "rgba(212, 184, 150, 0.7)",
  fontSize: "0.875rem",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  transition: "color 0.2s",
  padding: "0.2rem 0",
};

export default function Footer() {
  return (
    <footer style={{ background: "#07111e", color: "#E8D5B0" }}>
      {/* Main Content */}
      <div className="section-container" style={{ paddingTop: "4rem", paddingBottom: "3.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {/* ── Brand Column ── */}
          <div style={{ gridColumn: "span 1" }}>
            <Link href="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: "1rem" }}>
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "#ffffff",
                  display: "block",
                  lineHeight: 1.2,
                }}
              >
                Raghuvanshi
              </span>
              <span
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#C9A96E",
                  fontWeight: 600,
                }}
              >
                Travels
              </span>
            </Link>

            <p style={{ color: "rgba(212,184,150,0.65)", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: "260px", marginBottom: "1.25rem" }}>
              Your trusted travel partner for premium tour packages, taxi services, and unforgettable journeys across India. Available 24/7.
            </p>

            {/* Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <a
                href="tel:+918700418360"
                style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#C9A96E", textDecoration: "none", fontSize: "0.875rem" }}
              >
                <div style={{ width: "2rem", height: "2rem", borderRadius: "0.5rem", background: "rgba(201,169,110,0.12)", border: "1px solid rgba(201,169,110,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Phone size={13} color="#C9A96E" />
                </div>
                +91 87004 18360
              </a>
              <a
                href="https://wa.me/918700418360"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#4ade80", textDecoration: "none", fontSize: "0.875rem" }}
              >
                <div style={{ width: "2rem", height: "2rem", borderRadius: "0.5rem", background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" fill="#25D366" style={{ width: "13px", height: "13px" }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                WhatsApp Us
              </a>
            </div>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "0.6rem", marginTop: "1.25rem" }}>
              {[
                { label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", href: "#" },
                { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z", href: "#" },
                { label: "YouTube", path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: "2.1rem", height: "2.1rem", borderRadius: "0.5rem",
                    background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.18)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#C9A96E", transition: "all 0.2s",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "14px", height: "14px" }}>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── Tour Packages ── */}
          <div>
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 600, fontSize: "1rem", color: "#ffffff",
                marginBottom: "1.25rem", paddingBottom: "0.6rem",
                borderBottom: "2px solid #C9A96E", display: "inline-block",
              }}
            >
              Tour Packages
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              {footerLinks.packages.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} style={linkStyle}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#C9A96E", flexShrink: 0 }} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Taxi Services ── */}
          <div>
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 600, fontSize: "1rem", color: "#ffffff",
                marginBottom: "1.25rem", paddingBottom: "0.6rem",
                borderBottom: "2px solid #C9A96E", display: "inline-block",
              }}
            >
              Taxi Services
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} style={linkStyle}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#C9A96E", flexShrink: 0 }} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company ── */}
          <div>
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 600, fontSize: "1rem", color: "#ffffff",
                marginBottom: "1.25rem", paddingBottom: "0.6rem",
                borderBottom: "2px solid #C9A96E", display: "inline-block",
              }}
            >
              Company
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} style={linkStyle}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#C9A96E", flexShrink: 0 }} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Quick Book CTA */}
            <div style={{ marginTop: "1.5rem", padding: "1rem", borderRadius: "0.75rem", background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.18)" }}>
              <p style={{ color: "#C9A96E", fontSize: "0.75rem", fontWeight: 600, marginBottom: "0.5rem" }}>📞 INSTANT BOOKING</p>
              <a href="tel:+918700418360" style={{ color: "#ffffff", fontWeight: 700, fontSize: "1rem", textDecoration: "none", display: "block" }}>
                +91 87004 18360
              </a>
              <p style={{ color: "rgba(212,184,150,0.55)", fontSize: "0.75rem", marginTop: "0.2rem" }}>Call or WhatsApp anytime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid rgba(201,169,110,0.12)", padding: "1.1rem 0" }}>
        <div className="section-container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
            <p style={{ color: "rgba(212,184,150,0.4)", fontSize: "0.8rem", margin: 0 }}>
              © {new Date().getFullYear()} Raghuvanshi Travels. All rights reserved.
            </p>
            <p style={{ color: "rgba(212,184,150,0.4)", fontSize: "0.75rem", margin: 0 }}>
              Made by <a href="tel:+918810220691" style={{ color: "#C9A96E", textDecoration: "none", fontWeight: 600 }}>Adarsh Kumar Pandey (+91 88102 20691)</a>
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {[
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Terms of Service", href: "/terms" },
            ].map((l) => (
              <Link
                key={l.name}
                href={l.href}
                style={{ color: "rgba(212,184,150,0.4)", fontSize: "0.8rem", textDecoration: "none" }}
              >
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
