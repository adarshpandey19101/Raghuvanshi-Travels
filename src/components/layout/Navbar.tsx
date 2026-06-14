"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Tour Packages",
    href: "/packages",
    children: [
      { name: "Himachal Packages", href: "/packages/himachal" },
      { name: "Kashmir Packages", href: "/packages/kashmir" },
      { name: "Uttarakhand Packages", href: "/packages/uttarakhand" },
      { name: "Rajasthan Packages", href: "/packages/rajasthan" },
      { name: "Goa Packages", href: "/packages/goa" },
      { name: "Char Dham Yatra", href: "/packages/char-dham" },
      { name: "Kedarnath Packages", href: "/packages/kedarnath" },
      { name: "Ayodhya Packages", href: "/packages/ayodhya" },
      { name: "Custom Packages", href: "/packages/custom" },
    ],
  },
  {
    name: "Taxi Services",
    href: "/taxi-services",
    children: [
      { name: "Airport Transfer", href: "/taxi-services#airport" },
      { name: "One Way Taxi", href: "/taxi-services#one-way" },
      { name: "Round Trip", href: "/taxi-services#round-trip" },
      { name: "Corporate Travel", href: "/taxi-services#corporate" },
      { name: "Tempo Traveller", href: "/taxi-services#tempo" },
      { name: "Luxury Cars", href: "/taxi-services#luxury" },
    ],
  },
  { name: "Fleet", href: "/fleet" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const isDark = mounted && theme === "dark";

  // Colors based on mode
  const navBg = isDark ? "#0D1B2A" : "#ffffff";
  const navBgScrolled = isDark ? "rgba(13,27,42,0.97)" : "rgba(255,255,255,0.97)";
  const textColor = isDark ? "#E8D5B0" : "#1A2B4A";
  const dropdownBg = isDark ? "#1A2B4A" : "#ffffff";
  const dropdownBorder = isDark ? "rgba(201,169,110,0.18)" : "rgba(201,169,110,0.2)";

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ── Top Info Bar ── */}
      <div style={{ background: "#07111e", padding: "0.45rem 0" }} className="hidden md:block">
        <div className="section-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "rgba(212,184,150,0.65)", fontSize: "0.78rem" }}>
            📍 Serving Pan India — Delhi NCR, Himachal, Uttarakhand & more
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <span style={{ color: "#C9A96E", fontSize: "0.78rem", fontWeight: 500 }}>⏰ 24/7 Available</span>
            <a
              href="tel:+918700418360"
              style={{ color: "#C9A96E", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.8rem", fontWeight: 600 }}
            >
              <Phone size={11} />
              +91 87004 18360
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <motion.header
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          width: "100%",
          background: isScrolled ? navBgScrolled : navBg,
          boxShadow: isScrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "none",
          borderBottom: `1px solid ${isDark ? "rgba(201,169,110,0.12)" : "rgba(201,169,110,0.18)"}`,
          transition: "background 0.3s ease, box-shadow 0.3s ease",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="section-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "4.25rem" }}>
          {/* ── Brand ── */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "1.25rem", color: isDark ? "#ffffff" : "#0D1B2A", lineHeight: 1.25 }}>
              Raghuvanshi
            </span>
            <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A96E" }}>
              Travels
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex" style={{ alignItems: "center", gap: "0.15rem" }}>
            {navLinks.map((link) => (
              <div
                key={link.name}
                style={{ position: "relative" }}
                onMouseEnter={() => link.children && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  style={{
                    display: "flex", alignItems: "center", gap: "0.2rem",
                    padding: "0.45rem 0.65rem", borderRadius: "0.5rem",
                    fontSize: "0.82rem", fontWeight: 500, textDecoration: "none",
                    color: isActive(link.href) ? "#C9A96E" : textColor,
                    background: isActive(link.href) ? "rgba(201,169,110,0.08)" : "transparent",
                    transition: "color 0.2s, background 0.2s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {link.name}
                  {link.children && (
                    <ChevronDown
                      size={12}
                      style={{
                        transition: "transform 0.2s",
                        transform: activeDropdown === link.name ? "rotate(180deg)" : "rotate(0deg)",
                        color: "#C9A96E",
                      }}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {link.children && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.14 }}
                        style={{
                          position: "absolute", top: "calc(100% + 8px)", left: 0,
                          width: "13rem", zIndex: 100,
                          background: dropdownBg,
                          border: `1px solid ${dropdownBorder}`,
                          borderRadius: "0.75rem",
                          boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                          padding: "0.4rem",
                        }}
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            style={{
                              display: "flex", alignItems: "center", gap: "0.5rem",
                              padding: "0.55rem 0.75rem", borderRadius: "0.5rem",
                              fontSize: "0.82rem", textDecoration: "none",
                              color: textColor, transition: "all 0.15s",
                            }}
                            onMouseEnter={e => {
                              (e.currentTarget as HTMLElement).style.color = "#C9A96E";
                              (e.currentTarget as HTMLElement).style.background = "rgba(201,169,110,0.07)";
                            }}
                            onMouseLeave={e => {
                              (e.currentTarget as HTMLElement).style.color = textColor;
                              (e.currentTarget as HTMLElement).style.background = "transparent";
                            }}
                          >
                            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#C9A96E", flexShrink: 0 }} />
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* ── Right CTAs ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                style={{
                  padding: "0.4rem", borderRadius: "0.5rem",
                  color: textColor, background: "transparent", border: "none",
                  cursor: "pointer", transition: "color 0.2s",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            {/* Call CTA */}
            <a href="tel:+918700418360" className="btn-gold" style={{ fontSize: "0.8rem", padding: "0.55rem 1.1rem", display: "none" }} id="nav-call-btn">
              <Phone size={14} />
              Call Now
            </a>
            <a href="tel:+918700418360" className="btn-gold hidden md:inline-flex" style={{ fontSize: "0.8rem", padding: "0.55rem 1.1rem" }}>
              <Phone size={14} />
              Call Now
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden"
              style={{
                padding: "0.4rem", borderRadius: "0.5rem",
                color: textColor, background: "transparent", border: "none",
                cursor: "pointer", display: "flex", alignItems: "center",
              }}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed", left: 0, right: 0, zIndex: 40,
              top: "calc(4.25rem + 2rem)",
              background: navBg,
              borderBottom: `1px solid ${isDark ? "rgba(201,169,110,0.12)" : "rgba(201,169,110,0.18)"}`,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
            className="lg:hidden"
          >
            <div className="section-container" style={{ padding: "1rem 1rem 1.5rem" }}>
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "0.75rem 1rem", borderRadius: "0.75rem",
                      fontSize: "0.9rem", fontWeight: 500, textDecoration: "none",
                      color: isActive(link.href) ? "#C9A96E" : textColor,
                      background: isActive(link.href) ? "rgba(201,169,110,0.08)" : "transparent",
                      marginBottom: "0.2rem",
                    }}
                    onClick={() => !link.children && setIsMobileOpen(false)}
                  >
                    {link.name}
                    {link.children && <ChevronDown size={14} style={{ color: "#C9A96E" }} />}
                  </Link>
                  {link.children && (
                    <div style={{ marginLeft: "1rem", marginBottom: "0.5rem" }}>
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          style={{
                            display: "flex", alignItems: "center", gap: "0.5rem",
                            padding: "0.6rem 1rem", borderRadius: "0.5rem",
                            fontSize: "0.84rem", textDecoration: "none",
                            color: isDark ? "rgba(212,184,150,0.7)" : "#4a5568",
                          }}
                          onClick={() => setIsMobileOpen(false)}
                        >
                          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#C9A96E", flexShrink: 0 }} />
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: `1px solid ${isDark ? "rgba(201,169,110,0.12)" : "rgba(201,169,110,0.18)"}`, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a href="tel:+918700418360" className="btn-gold" style={{ justifyContent: "center" }}>
                  <Phone size={16} />
                  Call: +91 87004 18360
                </a>
                <a
                  href="https://wa.me/918700418360?text=Hello%20Raghuvanshi%20Travels,%20I%20would%20like%20to%20know%20more%20about%20your%20tour%20packages%20and%20travel%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    gap: "0.5rem", padding: "0.75rem 1.5rem", borderRadius: "0.75rem",
                    fontWeight: 600, color: "white", background: "#25D366",
                    textDecoration: "none", fontSize: "0.875rem",
                  }}
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
