import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-pierre-six.vercel.app";
const siteTitle = "Pierre Claver Sidibe | Portfolio";
const siteDescription =
  "Portfolio professionnel de Pierre Claver Sidibe, ingenieur statisticien specialise en data analyse, data visualisation et big data.";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Pierre Claver Sidibe",
  },
  description: siteDescription,
  keywords: [
    "Pierre Claver Sidibe",
    "portfolio data analyst",
    "ingenieur statisticien",
    "data visualisation",
    "big data",
    "R Shiny",
    "Bamako",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Pierre Claver Sidibe" }],
  creator: "Pierre Claver Sidibe",
  publisher: "Pierre Claver Sidibe",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Pierre Claver Sidibe",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/images/1.jpeg",
        width: 1200,
        height: 630,
        alt: "Portrait de Pierre Claver Sidibe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${manrope.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

