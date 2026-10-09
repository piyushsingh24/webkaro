"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse/trackpad) —
    // otherwise the dot would sit stranded at the viewport corner.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
      // Fade out over the site chrome (navbar) so the dot/ring never
      // overlap the date, time, language, or Support items.
      const overChrome =
        (e.target as HTMLElement | null)?.closest?.("nav") != null;
      gsap.to([cursorRef.current, followerRef.current], {
        opacity: overChrome ? 0 : 1,
        duration: 0.2,
        overwrite: "auto",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  // Rendered hidden by default (opacity-0); enabled via mousemove above.
  // Touch devices never enable it (effect returns early, opacity stays 0).
  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 opacity-0"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-primary/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 opacity-0"
      />
    </>
  );
}
