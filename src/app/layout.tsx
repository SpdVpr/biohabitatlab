import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BioHabitat Lab | Bio-Optimization Protocols",
    template: "%s | BioHabitat Lab",
  },
  description:
    "Science-based bio-optimization protocols for home and office. Evidence-backed guides for circadian lighting, air quality, acoustic isolation, and sleep optimization with peer-reviewed research.",
  keywords: [
    "bio-optimization",
    "circadian lighting",
    "high-CRI",
    "home office",
    "air quality",
    "acoustic isolation",
    "melatonin",
    "productivity",
  ],
  authors: [{ name: "BioHabitat Lab" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "BioHabitat Lab",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CKJS15D4LZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CKJS15D4LZ');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
