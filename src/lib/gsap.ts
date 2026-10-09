import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Central GSAP configuration for the WebKaro site.
 *
 * - Registers ScrollTrigger exactly once (safe for HMR / remounts).
 * - Exposes shared defaults so every section feels like one motion system.
 * - Exposes reduced-motion + breakpoint helpers so animations stay
 *   accessible and responsive.
 */

let registered = false;

export function ensureGsapRegistered() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return gsap;
}

/** Shared motion tokens — the single source of truth for the site. */
export const MOTION = {
  ease: "power3.out",
  duration: 0.85,
  stagger: 0.1,
  y: 28,
  start: "top 82%",
} as const;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isMobileViewport(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 768px)").matches;
}

/** Refresh ScrollTrigger after layout settles (fonts, images, dynamic content). */
export function refreshScrollTriggers() {
  if (typeof window === "undefined") return;
  ensureGsapRegistered();
  ScrollTrigger.refresh();
}

export { gsap, ScrollTrigger };
