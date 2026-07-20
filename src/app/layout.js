import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers.js";
import { Navbar } from "@/components/layout/Navbar.js";
import { Footer } from "@/components/layout/Footer.js";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pathlume - Find your next step",
    template: "%s",
  },
  description:
    "Pathlume matches students with internships and early-career opportunities worth applying to.",
  keywords: [
    "internships",
    "student jobs",
    "career matching",
    "resume analysis",
    "early career opportunities",
    "job recommendations",
  ],
  applicationName: "Pathlume",
  authors: [{ name: "Pathlume" }],
  openGraph: {
    type: "website",
    siteName: "Pathlume",
    title: "Pathlume - Find your next step",
    description:
      "Pathlume matches students with internships and early-career opportunities worth applying to.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pathlume - Find your next step",
    description:
      "Pathlume matches students with internships and early-career opportunities worth applying to.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="relative min-h-screen bg-void">
        <div className="pointer-events-none fixed inset-0 bg-aurora-gradient" />
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
