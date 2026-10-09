"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  gsap,
  ensureGsapRegistered,
  prefersReducedMotion,
  isMobileViewport,
} from "@/lib/gsap";

/**
 * Hero — premium GSAP entrance + living dashboard.
 *
 * Design is preserved 1:1 (cream bg, serif headline, green accent,
 * blue CTAs, dashboard illustration, floating cards). Only motion is new.
 *
 * Timelines (all transform/opacity, power3.out):
 *  1. `entrance` — headline line-mask reveals -> paragraph -> CTAs ->
 *     trust stagger (+ genuine count-up) | dashboard fade/scale |
 *     floating cards | chart bars | growth badge.
 *  2. Idle loops (desktop only, no reduced-motion): dashboard float,
 *     floating cards drift, decorative dot + ring.
 */

const trustRow = [
  { value: "★★★★★", label: "Rating", count: null },
  { value: "250+", label: "Projects", count: { target: 250, suffix: "+", decimals: 0 } },
  { value: "40+", label: "Clients", count: { target: 40, suffix: "+", decimals: 0 } },
  { value: "4.9/5", label: "Rating", count: { target: 4.9, suffix: "/5", decimals: 1 } },
];

const chartBars = [35, 55, 40, 70, 50, 80, 45, 65, 75, 55, 85, 60];

export type HeroContent = {
  headline: string;
  description: string;
  primaryCta: { text: string; url: string };
  secondaryCta: { text: string; url: string };
};

const DEFAULT_CONTENT: HeroContent = {
  headline: "Digital Experiences\nThat Drive\nReal Growth.",
  description:
    "We partner with ambitious startups and growing businesses to design websites, SaaS platforms and digital products that create measurable business impact.",
  primaryCta: { text: "Start Your Project", url: "/contact" },
  secondaryCta: { text: "View Our Work", url: "/projects" },
};

export default function Hero({ content }: { content?: Partial<HeroContent> }) {
  const merged: HeroContent = { ...DEFAULT_CONTENT, ...content };
  // Headline lines: DB value uses blank-line separated lines; last line
  // renders in the green italic accent (editorial reveal order preserved).
  const lines = merged.headline.split("\n").map((l) => l.trim()).filter(Boolean);
  const headlineLines = lines.length > 0 ? lines : DEFAULT_CONTENT.headline.split("\n");
  const lastIndex = headlineLines.length - 1;
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof window === "undefined") return;
    ensureGsapRegistered();

    // Reduced motion: leave everything visible, run no animation.
    if (prefersReducedMotion()) return;

    const mobile = isMobileViewport();
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section);

      const lines = q(".gsap-line-inner");
      const para = q("[data-hero-para]");
      const ctas = q("[data-hero-cta]");
      const trustItems = q("[data-hero-trust]");
      const dashboard = q("[data-hero-dashboard]");
      const bars = q(".gsap-chart-bar");
      const badge = q("[data-hero-badge]");
      const floatA = q("[data-hero-float-a]");
      const floatB = q("[data-hero-float-b]");
      const dot = q(".gsap-deco-dot");
      const ring = q(".gsap-deco-ring");

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.1,
      });

      // 1 — Headline: clipped line-by-line reveal, green line last (DOM order).
      tl.fromTo(
        lines,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: mobile ? 0.7 : 0.9,
          stagger: 0.12,
        },
        0
      );

      // 2 — Supporting paragraph: gentle 20px rise + fade.
      tl.fromTo(
        para,
        { opacity: 0, y: mobile ? 14 : 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        mobile ? 0.35 : 0.45
      );

      // 3 — CTA buttons: slight rise, short stagger.
      tl.fromTo(
        ctas,
        { opacity: 0, y: mobile ? 12 : 18 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        mobile ? 0.5 : 0.6
      );

      // 4 — Trust indicators: short staggered sequence.
      tl.fromTo(
        trustItems,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
        mobile ? 0.6 : 0.75
      );

      // 4b — Genuine count-up on the numeric trust values only
      // (final strings identical to the existing business statistics).
      trustItems.forEach((item, i) => {
        const cfg = trustRow[i]?.count;
        if (!cfg) return;
        const valueEl = (item as HTMLElement).querySelector(
          "[data-count-value]"
        );
        if (!valueEl) return;
        const state = { n: 0 };
        tl.to(
          state,
          {
            n: cfg.target,
            duration: 1.1,
            ease: "power2.out",
            onUpdate: () => {
              valueEl.textContent = `${state.n.toFixed(cfg.decimals)}${cfg.suffix}`;
            },
          },
          0.75 + i * 0.08
        );
      });

      // 5 — Dashboard: fade + rise + 0.96 -> 1 settle, coordinated early.
      tl.fromTo(
        dashboard,
        { opacity: 0, y: mobile ? 24 : 36, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1.0 },
        0.2
      );

      // 6 — Chart bars: grow upward from baseline, sequential stagger.
      tl.fromTo(
        bars,
        { scaleY: 0.06 },
        {
          scaleY: 1,
          duration: 0.6,
          stagger: 0.05,
        },
        0.7
      );

      // 7 — Growth badge: subtle fade/scale reveal once bars are alive.
      tl.fromTo(
        badge,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.5 },
        1.0
      );

      // 8 — Floating cards: rise + fade, status card slightly delayed.
      tl.fromTo(
        floatA,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.9
      );
      tl.fromTo(
        floatB,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        1.05
      );

      // 9 — Decorative elements: barely-there entrance.
      tl.fromTo(
        [dot, ring],
        { opacity: 0 },
        { opacity: 1, duration: 1.2, stagger: 0.15 },
        0.5
      );

      // ---- Idle motion (desktop only): calm, barely noticeable ----
      if (!mobile) {
        tl.add(() => {
          gsap.to(dashboard, {
            y: -6,
            duration: 3.5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
          gsap.to(floatA, {
            y: -7,
            duration: 4,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
          gsap.to(floatB, {
            y: 6,
            duration: 5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: 1,
          });
          gsap.to(dot, {
            y: -8,
            duration: 6,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
          gsap.to(ring, {
            rotate: 8,
            scale: 1.03,
            duration: 9,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        });
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ backgroundColor: '#FAF8F5' }}>
      {/* Organic background shape */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.03]" style={{ background: 'radial-gradient(circle, #6E8E59 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.02]" style={{ background: 'radial-gradient(circle, #1B1B1B 0%, transparent 70%)' }} />
      </div>

      {/* Floating decorative elements — subtle, non-interactive */}
      <div className="gsap-deco-dot absolute left-[6%] top-[38%] hidden md:block" aria-hidden="true">
        <span className="block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#8B7CF6' }} />
      </div>
      <div className="gsap-deco-ring absolute left-[3.5%] top-[46%] hidden md:block" aria-hidden="true">
        <span className="block w-16 h-16 rounded-full border" style={{ borderColor: 'rgba(27,27,27,0.14)' }} />
      </div>

      <div className="content-container pt-28 md:pt-32 lg:pt-36 pb-20 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Typography */}
          <div className="max-w-xl">
            <h1 className="mb-8 tracking-tight" style={{ color: '#1B1B1B', fontFamily: 'var(--font-display)' }}>
              {headlineLines.map((line, i) => (
                <span key={i} className="gsap-line-mask">
                  {i === lastIndex ? (
                    <span className="gsap-line-inner italic" style={{ color: '#6E8E59' }}>{line}</span>
                  ) : (
                    <span className="gsap-line-inner">{line}</span>
                  )}
                </span>
              ))}
            </h1>

            <p data-hero-para className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: '#656565' }}>
              {merged.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                data-hero-cta
                href={merged.primaryCta.url || "/contact"}
                className="btn-arrow inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-medium transition-all duration-300 hover:translate-y-[-1px]"
                style={{ backgroundColor: '#2563EB' }}
              >
                {merged.primaryCta.text || "Start Your Project"}
                <ArrowRight className="btn-arrow-icon w-4 h-4" />
              </Link>
              <Link
                data-hero-cta
                href={merged.secondaryCta.url || "/projects"}
                className="btn-arrow inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-medium transition-all duration-300 border hover:translate-y-[-1px]"
                style={{
                  borderColor: 'rgba(0,0,0,0.08)',
                  color: '#2563EB'
                }}
              >
                {merged.secondaryCta.text || "View Our Work"}
                <ArrowRight className="btn-arrow-icon w-4 h-4" />
              </Link>
            </div>

            {/* Trust Row */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8">
              {trustRow.map((item, i) => (
                <div key={`${item.label}-${i}`} data-hero-trust className="flex items-center gap-2">
                  <span className="text-sm font-medium" style={{ color: '#1B1B1B' }} data-count-value={item.count ? "" : undefined}>
                    {item.value}
                  </span>
                  <span className="text-xs uppercase tracking-widest" style={{ color: '#888888' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard Visualization */}
          <div data-hero-dashboard className="gsap-dashboard relative">
            {/* Main browser frame */}
            <div className="relative rounded-3xl overflow-hidden border" style={{
              backgroundColor: '#FFFFFF',
              borderColor: 'rgba(0,0,0,0.06)',
              boxShadow: '0 8px 24px -8px rgba(0,0,0,0.06), 0 16px 48px -16px rgba(0,0,0,0.08)'
            }}>
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-5 py-4 border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#E8EFE3' }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#F4F7F1' }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#D1DFC7' }} />
                </div>
                <div className="flex-1 mx-4">
                  <div className="max-w-md mx-auto h-6 rounded-lg" style={{ backgroundColor: '#F6F3EE' }} />
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6 md:p-8" style={{ backgroundColor: '#FDFCFA' }}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#888888' }}>Revenue Overview</p>
                    <p className="text-2xl font-semibold" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>$48,592</p>
                  </div>
                  <div data-hero-badge className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#F4F7F1', color: '#6E8E59' }}>
                    +24.5%
                  </div>
                </div>

                {/* Chart bars */}
                <div className="flex items-end gap-2 h-32 mb-6">
                  {chartBars.map((h, i) => (
                    <div
                      key={i}
                      className="gsap-chart-bar flex-1 rounded-t-lg"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i === 6 ? '#6E8E59' : '#E8EFE3'
                      }}
                    />
                  ))}
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Users', value: '12.4k' },
                    { label: 'Conversion', value: '3.2%' },
                    { label: 'Bounce', value: '24%' },
                  ].map((stat, i) => (
                    <div key={i} className="p-4 rounded-xl" style={{ backgroundColor: '#F6F3EE' }}>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#888888' }}>{stat.label}</p>
                      <p className="text-lg font-semibold" style={{ color: '#1B1B1B' }}>{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating widgets */}
            <div
              data-hero-float-a
              className="gsap-float-card absolute -top-4 -right-4 p-4 rounded-2xl border"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: 'rgba(0,0,0,0.06)',
                boxShadow: '0 8px 24px -8px rgba(0,0,0,0.06)'
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F4F7F1' }}>
                  <svg className="w-5 h-5" style={{ color: '#6E8E59' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs" style={{ color: '#888888' }}>Growth</p>
                  <p className="text-sm font-semibold" style={{ color: '#1B1B1B' }}>+128%</p>
                </div>
              </div>
            </div>

            <div
              data-hero-float-b
              className="gsap-float-card absolute -bottom-4 -left-4 p-4 rounded-2xl border"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: 'rgba(0,0,0,0.06)',
                boxShadow: '0 8px 24px -8px rgba(0,0,0,0.06)'
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F4F7F1' }}>
                  <svg className="w-5 h-5" style={{ color: '#6E8E59' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs" style={{ color: '#888888' }}>Status</p>
                  <p className="text-sm font-semibold" style={{ color: '#1B1B1B' }}>All systems healthy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
