import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { homepageJsonLd, seoConfig } from "@/config/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: seoConfig.title,
  description: seoConfig.description,
  applicationName: seoConfig.siteName,
  authors: [{ name: seoConfig.brandName, url: seoConfig.mainWebsiteUrl }],
  creator: seoConfig.brandName,
  publisher: seoConfig.brandName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Steel calculation tools",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: seoConfig.siteUrl,
  },
  openGraph: {
    type: "website",
    siteName: seoConfig.siteName,
    title: seoConfig.title,
    description: seoConfig.description,
    url: seoConfig.siteUrl,
    locale: seoConfig.defaultLocale,
  },
  twitter: {
    card: seoConfig.twitterCard,
    title: seoConfig.title,
    description: seoConfig.description,
  },
  icons: {
    icon: seoConfig.logoPath,
    shortcut: seoConfig.logoPath,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
