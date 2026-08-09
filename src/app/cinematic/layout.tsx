import type { Metadata } from "next";
import { Inter, Outfit, Cormorant_Garamond } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "WebKaro — Cinematic Experience | Design-First Engineering Collective",
  description:
    "An immersive scroll-driven narrative by WebKaro, Delhi's design-first MERN & Next.js engineering collective. Crafting digital products that convert.",
  alternates: {
    canonical: "/cinematic",
  },
};

export default function CinematicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Render in isolation — no global Navbar, Footer, Cursor, ChatBot or FloatingButton
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <div
        className={`${inter.variable} ${outfit.variable} ${cormorant.variable} antialiased`}
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
      >
        {children}
      </div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#1A1208",
            color: "#FAF7F2",
            border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: "0px",
            fontFamily: "var(--font-outfit), sans-serif",
            fontSize: "13px",
            letterSpacing: "0.05em",
          },
        }}
      />
    </ThemeProvider>
  );
}
