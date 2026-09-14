import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://locallaunch-tau.vercel.app"),

  title: {
    default: "LocalLaunch | Website Design for Local Businesses",
    template: "%s | LocalLaunch",
  },

  description:
    "LocalLaunch builds modern, mobile-friendly websites for local businesses in Cape Town and across South Africa.",

  keywords: [
    "web design Cape Town",
    "website design Cape Town",
    "web developer Cape Town",
    "business websites Cape Town",
    "website development South Africa",
    "local business websites",
    "small business web design",
  ],

  authors: [{ name: "LocalLaunch" }],
  creator: "LocalLaunch",

  openGraph: {
    title: "LocalLaunch | Websites for Local Businesses",
    description:
      "Modern, professional websites designed to help local businesses get found, build trust and get more customers.",
    url: "https://locallaunch-tau.vercel.app",
    siteName: "LocalLaunch",
    locale: "en_ZA",
    type: "website",
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
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
