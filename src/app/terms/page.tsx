import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Raghuvanshi Travels",
  description: "Terms and Conditions for booking tour packages and taxi services with Raghuvanshi Travels.",
};

export default function TermsPage() {
  return (
    <div style={{ background: "#f8f7f4", minHeight: "100vh" }} className="dark:[background:#0D1B2A]">
      <section style={{ background: "#0D1B2A", padding: "5rem 0" }}>
        <div className="section-container" style={{ textAlign: "center" }}>
          <nav style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", fontSize: "0.8rem", color: "rgba(212,184,150,0.5)", marginBottom: "1.25rem" }}>
            <Link href="/" style={{ color: "rgba(212,184,150,0.5)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "#C9A96E" }}>Terms & Conditions</span>
          </nav>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem" }}>
            Terms & <span className="gradient-text-gold">Conditions</span>
          </h1>
          <p style={{ color: "rgba(212,184,150,0.7)", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto" }}>
            Please read these terms carefully before booking your trip.
          </p>
        </div>
      </section>

      <section style={{ padding: "4rem 0" }}>
        <div className="section-container" style={{ maxWidth: "800px" }}>
          <div className="glass-card" style={{ padding: "2.5rem 3rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem" }}>
              
              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>1. Booking & Payment Policies</h2>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  <li>A minimum advance payment of 25% to 50% (depending on the package) is required to confirm any booking.</li>
                  <li>The remaining balance must be paid as per the agreed schedule, usually before the commencement of the journey or upon arrival.</li>
                  <li>All bookings are subject to availability of vehicles and hotel rooms at the time of processing the booking.</li>
                  <li>In case of non-payment of the balance amount, the company reserves the right to cancel the booking and forfeit the advance paid.</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>2. Cancellation & Refund Policy</h2>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  <li><strong>72+ Hours before departure:</strong> Full refund of the advance amount (minus any non-refundable hotel/flight charges already incurred).</li>
                  <li><strong>24 to 72 Hours before departure:</strong> 50% refund of the advance amount.</li>
                  <li><strong>Less than 24 Hours:</strong> No refund will be provided.</li>
                  <li>Refunds (if applicable) will be processed within 5-7 working days to the original mode of payment.</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>3. Trip Modifications & Delays</h2>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  <li>Raghuvanshi Travels is not responsible for delays or alterations in the itinerary caused by natural hazards, traffic jams, weather conditions, accidents, or political closures.</li>
                  <li>Any extra costs incurred due to such unforeseen circumstances (extra hotel stays, meals, extended taxi rent) will be borne directly by the client.</li>
                  <li>Any changes to the itinerary requested by the client during the trip may attract additional charges.</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>4. Vehicle & Driver Guidelines</h2>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  <li>AC will be turned off in hilly areas to ensure vehicle safety and engine performance.</li>
                  <li>The driver will adhere to normal driving hours. Night driving is restricted in certain hilly regions for safety reasons.</li>
                  <li>Smoking and consumption of alcohol inside the vehicle is strictly prohibited.</li>
                  <li>Damage to the vehicle caused by the client will be billed to the client.</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>5. Liability & Jurisdiction</h2>
                <p>While we take all precautions to ensure your safety, Raghuvanshi Travels shall not be held liable for any loss of life, injury, or loss of personal property during the trip. All disputes are subject to the jurisdiction of the courts in New Delhi, India.</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
