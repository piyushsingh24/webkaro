import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "@/styles/globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import CookieConsent from "@/components/layout/CookieConsent";
import { cn } from "@/lib/utils";
import ChatBotToggle from "@/components/layout/ChatBotToggle";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

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
  authors: [{ name: "Webkaro Studio Team", url: "https://webkaro.in" }],
  creator: "Webkaro Studio",
  publisher: "Webkaro Studio",
  metadataBase: new URL("https://webkaro.in"),
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
    url: "https://webkaro.in",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://webkaro.in/#organization",
  "name": "Webkaro Studio",
  "url": "https://webkaro.in",
  "logo": "https://webkaro.in/logo.png",
  "image": "https://webkaro.in/og-image.jpg",
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
};

import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Toaster } from "react-hot-toast";
import GlobalFloatingButton from "@/components/ui/global-floating-button";

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
          outfit.variable,
          "min-h-screen bg-background text-foreground font-sans antialiased transition-colors duration-300 overflow-x-hidden"
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
          <CustomCursor />
          <Navbar />
          <SmoothScroll>
            <main id="main-content" className="relative flex flex-col min-h-screen z-10">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
          <CookieConsent />
          <ChatBotToggle />
          <GlobalFloatingButton />
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
