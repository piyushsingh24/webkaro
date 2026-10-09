"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useLayoutEffect, type ReactNode } from "react";
import { ensureGsapRegistered, ScrollTrigger } from "@/lib/gsap";

/**
 * Forwards Lenis smooth-scroll updates to ScrollTrigger so pinned /
 * scroll-linked GSAP animations stay in sync when this provider is used.
 */
function LenisScrollTriggerSync() {
  const lenis = useLenis();
  useLayoutEffect(() => {
    ensureGsapRegistered();
    if (!lenis) return;
    const update = () => ScrollTrigger.update();
    lenis.on("scroll", update);
    return () => {
      lenis.off("scroll", update);
    };
  }, [lenis]);
  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <LenisScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}
