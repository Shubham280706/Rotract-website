import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { club } from "@/content/club";
import { SmoothScroll } from "@/components/SmoothScroll";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rotaractbharuch.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rotaract Club of Bharuch — Service Above Self · RI District 3060",
    template: "%s · Rotaract Club of Bharuch",
  },
  description:
    "Official website of Rotaract Club of Bharuch (RI District 3060). Empowering youth, organizing community service, blood donation drives, tree plantations, and leadership initiatives in Bharuch, Gujarat.",
  keywords: [
    "Rotaract",
    "Rotaract Club of Bharuch",
    "Rotary Club of Bharuch",
    "Rotaract District 3060",
    "RI District 3060",
    "community service Bharuch",
    "NGO Bharuch",
    "youth service club Gujarat",
    "Helping in Rain Bharuch",
    "Jagannath Amrit Seva Bharuch",
    "fellowship service Bharuch",
  ],
  authors: [{ name: "Rotaract Club of Bharuch" }],
  creator: "Rotaract Club of Bharuch",
  publisher: "Rotaract Club of Bharuch",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Rotaract Club of Bharuch — Service Above Self · RI District 3060",
    description:
      "Official website of Rotaract Club of Bharuch. Community service drives, leadership initiatives, and youth fellowship in Bharuch, Gujarat.",
    url: siteUrl,
    siteName: "Rotaract Club of Bharuch",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Rotaract Club of Bharuch Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rotaract Club of Bharuch — Service Above Self",
    description:
      "Official website of Rotaract Club of Bharuch (RI District 3060). Youth leadership & community service in Bharuch, Gujarat.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "google01fad36f11ecc611",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: club.name,
    alternateName: "Rotaract Bharuch",
    description:
      "A youth service organization for people aged 18–30, sponsored by Rotary Club of Bharuch in RI District 3060.",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/logo.png`,
    parentOrganization: {
      "@type": "Organization",
      name: club.sponsorClub,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bharuch",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    email: club.email,
    sameAs: [club.socials.instagram, club.socials.facebook].filter(Boolean),
  };

  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
