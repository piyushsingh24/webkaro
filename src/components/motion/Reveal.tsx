"use client";

import {
  useLayoutEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  gsap,
  ensureGsapRegistered,
  ScrollTrigger,
  MOTION,
  prefersReducedMotion,
  isMobileViewport,
} from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Vertical offset in px (desktop). Halved automatically on mobile. */
  y?: number;
  delay?: number;
  duration?: number;
  /** ScrollTrigger start position, e.g. "top 82%" */
  start?: string;
  as?: "div" | "section" | "span" | "li";
  id?: string;
};

/**
 * Single-element scroll reveal: clipped upward fade.
 * - Sets the initial state via GSAP only (never CSS) so content is
 *   visible when JS is disabled / reduced-motion is on (SEO + a11y safe).
 * - Cleans up its ScrollTrigger on unmount; safe under React StrictMode.
 */
export function Reveal({
  children,
  className,
  style,
  y = MOTION.y,
  delay = 0,
  duration = MOTION.duration,
  start = MOTION.start,
  as = "div",
  id,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;
    ensureGsapRegistered();

    if (prefersReducedMotion()) return; // leave content visible, no animation

    const distance = isMobileViewport() ? Math.min(y, 18) : y;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: distance },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: MOTION.ease,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        }
      );
    }, el);

    return () => {
      ctx.revert();
    };
  }, [y, delay, duration, start]);

  const Tag = as as "div";
  return (
    <Tag ref={ref} className={className} style={style} id={id}>
      {children}
    </Tag>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Stagger between [data-reveal-item] children. */
  stagger?: number;
  y?: number;
  duration?: number;
  start?: string;
};

/**
 * Staggered group reveal. Children carrying `data-reveal-item` animate
 * in sequence when the group enters the viewport.
 */
export function RevealGroup({
  children,
  className,
  style,
  stagger = MOTION.stagger,
  y = 22,
  duration = 0.75,
  start = MOTION.start,
}: RevealGroupProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;
    ensureGsapRegistered();

    if (prefersReducedMotion()) return;

    const items = el.querySelectorAll("[data-reveal-item]");
    if (items.length === 0) return;

    const distance = isMobileViewport() ? Math.min(y, 16) : y;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: distance },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: MOTION.ease,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        }
      );
    }, el);

    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stagger, y, duration, start]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

/**
 * Call once per page (or in a shared provider) to refresh ScrollTrigger
 * after images/fonts settle. Harmless to call multiple times.
 */
export function useRefreshScrollTriggersOnLoad() {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    ensureGsapRegistered();
    const onLoad = () => ScrollTrigger.refresh();
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 1500);
    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(t);
    };
  }, []);
}
