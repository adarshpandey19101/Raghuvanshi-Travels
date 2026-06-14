import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raghuvanshitravels.com"),
  title: {
    default: "Raghuvanshi Travels — Best Travel Agency | Tour Packages | Taxi Services",
    template: "%s | Raghuvanshi Travels",
  },
  description:
    "Raghuvanshi Travels — Premium travel agency offering curated tour packages to Himachal, Kashmir, Uttarakhand, Rajasthan & Goa. Taxi services, airport transfers, tempo traveller booking & corporate travel across India.",
  keywords: [
    "best travel agency",
    "tour packages India",
    "taxi service",
    "airport taxi",
    "tempo traveller booking",
    "outstation taxi",
    "family tour packages",
    "holiday packages India",
    "religious tour packages",
    "Char Dham Yatra",
    "Kedarnath packages",
    "Kashmir tour",
    "Himachal packages",
    "Raghuvanshi Travels",
  ],
  authors: [{ name: "Raghuvanshi Travels" }],
  creator: "Raghuvanshi Travels",
  publisher: "Raghuvanshi Travels",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://raghuvanshitravels.com",
    siteName: "Raghuvanshi Travels",
    title: "Raghuvanshi Travels — Premium Tour Packages & Taxi Services",
    description:
      "Book premium tour packages, airport transfers, outstation trips & taxi services. Serving across India with luxury vehicles and expert guides.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Raghuvanshi Travels — Premium Travel Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raghuvanshi Travels — Best Travel Agency",
    description: "Premium tour packages, taxi services & airport transfers across India.",
    images: ["/og-image.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness"],
  "@id": "https://raghuvanshitravels.com/#localbusiness",
  name: "Raghuvanshi Travels",
  description:
    "Premium travel agency offering curated tour packages, airport transfers, outstation trips, tempo traveller booking and corporate travel services across India.",
  url: "https://raghuvanshitravels.com",
  telephone: "+918700418360",
  priceRange: "$$",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer, Card",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
