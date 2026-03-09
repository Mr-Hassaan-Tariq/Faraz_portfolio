import "./globals.css";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-league-spartan",
});

export const metadata: Metadata = {
  title: {
    default: "Mr Faraz | Architecture & Interior Design",
    template: "%s | Mr Faraz",
  },
  description: "Crafting Dreams into Spaces. Professional architectural design, interior design, landscape design, and 3D visualization by Mr Faraz.",
  keywords: ["Architecture", "Interior Design", "Landscape Design", "3D Visualization", "Architectural Engineer", "Modern Apartments", "Boutique Cafes", "Commercial Interiors"],
  authors: [{ name: "Mr Faraz" }],
  creator: "Mr Faraz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://farazportfolio.com",
    siteName: "Mr Faraz Portfolio",
    title: "Mr Faraz | Architecture & Interior Design",
    description: "Crafting Dreams into Spaces. Professional architectural and interior design services.",
    images: [
      {
        url: "/logos/hero-section-1.webp",
        width: 1200,
        height: 630,
        alt: "Mr Faraz Architecture & Interior Design Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr Faraz | Architecture & Interior Design",
    description: "Crafting Dreams into Spaces. Professional architectural and interior design services.",
    images: ["/logos/hero-section-1.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={leagueSpartan.variable}>
      <body className="bg-gray-50 antialiased font-spartan">
        <Navbar />
        <main className="relative">
          {children}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
          />
        </main>
        <Footer />
      </body>
    </html>
  );
}
