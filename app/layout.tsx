import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fibroplast - Precision in Piping • Strength in Civil Construction",
  description: "Delivering advanced GRP/GRE piping and civil infrastructure solutions for oil, gas, utilities, and industrial facilities.",
  keywords: ["GRP piping", "GRE piping", "civil construction", "oil and gas", "infrastructure", "Oman"],

  // Open Graph metadata for WhatsApp, Facebook, LinkedIn, etc.
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fibroplastllc.com",
    siteName: "Fibroplast LLC",
    title: "Fibroplast - Precision in Piping • Strength in Civil Construction",
    description: "Delivering advanced GRP/GRE piping and civil infrastructure solutions for oil, gas, utilities, and industrial facilities in Oman and UAE.",
    // The opengraph-image.tsx will automatically generate the OG image
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Fibroplast - Precision in Piping • Strength in Civil Construction",
    description: "Delivering advanced GRP/GRE piping and civil infrastructure solutions for oil, gas, utilities, and industrial facilities.",
    // The opengraph-image.tsx will automatically generate the Twitter Card image
  },

  // Apple mobile web app metadata
  appleWebApp: {
    capable: true,
    title: "Fibroplast LLC",
    statusBarStyle: "black-translucent",
  },

  // Additional metadata
  applicationName: "Fibroplast LLC",
  authors: [{ name: "Fibroplast LLC" }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: "Fibroplast LLC",
  publisher: "Fibroplast LLC",

  // Mobile app icons
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },

  // Verification and SEO
  metadataBase: new URL("https://fibroplastllc.com"),
  alternates: {
    canonical: "https://fibroplastllc.com",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
