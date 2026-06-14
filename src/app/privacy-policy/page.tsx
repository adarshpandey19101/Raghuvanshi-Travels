import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Raghuvanshi Travels",
  description: "Privacy Policy for Raghuvanshi Travels. Learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ background: "#f8f7f4", minHeight: "100vh" }} className="dark:[background:#0D1B2A]">
      <section style={{ background: "#0D1B2A", padding: "5rem 0" }}>
        <div className="section-container" style={{ textAlign: "center" }}>
          <nav style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", fontSize: "0.8rem", color: "rgba(212,184,150,0.5)", marginBottom: "1.25rem" }}>
            <Link href="/" style={{ color: "rgba(212,184,150,0.5)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "#C9A96E" }}>Privacy Policy</span>
          </nav>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem" }}>
            Privacy <span className="gradient-text-gold">Policy</span>
          </h1>
          <p style={{ color: "rgba(212,184,150,0.7)", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto" }}>
            Last updated: June 2025
          </p>
        </div>
      </section>

      <section style={{ padding: "4rem 0" }}>
        <div className="section-container" style={{ maxWidth: "800px" }}>
          <div className="glass-card" style={{ padding: "2.5rem 3rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem" }}>
              
              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>1. Information We Collect</h2>
                <p>We collect information that you provide directly to us when you book a tour, request a taxi service, or contact us. This may include:</p>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  <li>Name, email address, and phone number</li>
                  <li>Pickup and drop-off locations, travel itineraries</li>
                  <li>Billing information and payment details</li>
                  <li>Government-issued ID proofs (if required for hotel/tour bookings)</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  <li>Process and confirm your travel bookings</li>
                  <li>Communicate with you regarding your trip details, driver information, and updates</li>
                  <li>Respond to your inquiries and customer support requests</li>
                  <li>Send you promotional offers (only if you have opted in)</li>
                  <li>Improve our services and website user experience</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>3. Data Sharing and Security</h2>
                <p>We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners. We may share necessary details with our trusted service partners (like hotels or drivers) strictly for fulfilling your travel requirements.</p>
                <p style={{ marginTop: "0.5rem" }}>We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.</p>
              </div>

              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>4. Cookies</h2>
                <p>Our website may use "cookies" to enhance user experience. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent. If you do so, note that some parts of the site may not function properly.</p>
              </div>

              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>5. Contacting Us</h2>
                <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:</p>
                <div style={{ marginTop: "1rem", padding: "1rem", background: "rgba(201,169,110,0.05)", borderRadius: "0.5rem", border: "1px solid rgba(201,169,110,0.2)" }}>
                  <p style={{ margin: 0, color: "var(--text-primary)", fontWeight: 600 }}>Raghuvanshi Travels</p>
                  <p style={{ margin: "0.2rem 0" }}>Phone: +91 87004 18360</p>
                  <p style={{ margin: 0 }}>Website: www.raghuvanshitravels.com</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
