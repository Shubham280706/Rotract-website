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

const siteUrl = "https://rotaractbharuch.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rotaract Club of Bharuch — Fellowship Through Service",
    template: "%s · Rotaract Club of Bharuch",
  },
  description:
    "Rotaract Club of Bharuch is a youth service club for people aged 18–30, sponsored by the Rotary Club of Bharuch. Community service, leadership, and fellowship in Bharuch, Gujarat.",
  keywords: [
    "Rotaract",
    "Rotaract Club of Bharuch",
    "Rotary Club of Bharuch",
    "community service Bharuch",
    "youth service club Gujarat",
  ],
  openGraph: {
    title: "Rotaract Club of Bharuch — Fellowship Through Service",
    description:
      "A youth service club for people aged 18–30 in Bharuch, Gujarat. Sponsored by the Rotary Club of Bharuch.",
    url: siteUrl,
    siteName: "Rotaract Club of Bharuch",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rotaract Club of Bharuch — Fellowship Through Service",
    description:
      "A youth service club for people aged 18–30 in Bharuch, Gujarat. Sponsored by the Rotary Club of Bharuch.",
  },
  alternates: { canonical: siteUrl },
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
    description:
      "A youth service club for people aged 18–30, sponsored by the Rotary Club of Bharuch.",
    url: siteUrl,
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
