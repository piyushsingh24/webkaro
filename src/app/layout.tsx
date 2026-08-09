import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import ConditionalChrome from "@/components/layout/ConditionalChrome";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Webkaro | Premium Web Development Studio in Delhi",
    template: "%s | Webkaro Studio"
  },
  description: "Webkaro is a premium digital studio in Delhi engineering high-performance, scalable websites and web applications using Next.js, React, and MERN stack.",
  keywords: [
    "Web Development Studio Delhi",
    "Best IT Services Delhi",
    "Next.js Development India",
    "SaaS MVP Development",
    "Software Development Collective",
    "MERN Stack Experts",
    "Custom Web Application Development",
    "Digital Strategic Partner",
    "Tech Startup Solutions Delhi",
    "Webkaro Engineering"
  ],
  authors: [{ name: "Webkaro Studio Team", url: "https://www.webkaro.in" }],
  creator: "Webkaro Studio",
  publisher: "Webkaro Studio",
  metadataBase: new URL("https://www.webkaro.in"),
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: "Webkaro | Engineering Digital Excellence",
    description: "We build high-performance digital experiences for the modern web.",
    url: "https://www.webkaro.in",
    siteName: "Webkaro Studio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Webkaro Digital Studio Overview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webkaro | Premium Web Development",
    description: "High-performance websites and web applications built with precision.",
    images: ["/logo.png"],
    creator: "@webkaro_dev",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.webkaro.in/#organization",
    "name": "Webkaro Studio",
    "url": "https://www.webkaro.in",
    "logo": "https://www.webkaro.in/logo.png",
    "image": "https://www.webkaro.in/og-image.jpg",
    "description": "Premium web development studio specializing in Next.js and high-performance digital solutions.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sovia Vihar 3rd Pusta",
      "addressLocality": "Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110094",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7048903201",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    "sameAs": [
      "https://twitter.com/webkaro_dev",
      "https://linkedin.com/company/webkaro",
      "https://instagram.com/webkaro_"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.webkaro.in/#website",
    "url": "https://www.webkaro.in",
    "name": "Webkaro Studio",
    "description": "Premium digital studio engineering high-performance, scalable websites and web applications.",
    "publisher": {
      "@id": "https://www.webkaro.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.webkaro.in/#localbusiness",
    "name": "Webkaro Studio",
    "image": "https://www.webkaro.in/logo.png",
    "telephone": "+91-7048903201",
    "url": "https://www.webkaro.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sovia Vihar 3rd Pusta",
      "addressLocality": "Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110094",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.7041,
      "longitude": 77.1025
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  }
];

import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          playfair.variable,
          "min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden"
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ConditionalChrome>
            {children}
          </ConditionalChrome>
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
