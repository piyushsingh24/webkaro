"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";
import CookieConsent from "./CookieConsent";
import ChatBotToggle from "./ChatBotToggle";
import GlobalFloatingButton from "@/components/ui/global-floating-button";

/**
 * Routes listed here will render WITHOUT the global Navbar, Footer,
 * CustomCursor, ChatBot or GlobalFloatingButton. Perfect for immersive
 * cinematic / standalone experience pages.
 */
const NO_CHROME_ROUTES = ["/cinematic"];

export default function ConditionalChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isBareRoute = NO_CHROME_ROUTES.some((r) => pathname.startsWith(r));

  if (isBareRoute) {
    // Render children directly — no shared chrome
    return <>{children}</>;
  }

  // Standard experience with full site chrome
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main
        id="main-content"
        className="relative flex flex-col min-h-screen z-10"
      >
        {children}
      </main>
      <Footer />
      <CookieConsent />
      <ChatBotToggle />
      <GlobalFloatingButton />
    </>
  );
}
