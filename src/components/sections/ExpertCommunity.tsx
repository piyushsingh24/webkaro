"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Fast Delivery",
    description: "We respect your timeline. Most MVPs ship in weeks, not quarters, without sacrificing code quality or architecture.",
  },
  {
    title: "Senior Developers",
    description: "Every project is led by experienced engineers who&apos;ve scaled products to millions of users. No juniors, no hand-holding.",
  },
  {
    title: "Business First",
    description: "We don&apos;t just write code. We study your market, your users, and your revenue goals before touching a keyboard.",
  },
  {
    title: "Scalable Architecture",
    description: "Built to grow. Our systems handle 10 users and 10 million with the same reliability and performance.",
  },
  {
    title: "SEO Ready",
    description: "Technical SEO isn&apos;t an afterthought. It&apos;s baked into every page, every component, every deployment.",
  },
  {
    title: "Long Term Support",
    description: "We don&apos;t disappear after launch. Ongoing optimization, feature evolution, and genuine partnership.",
  },
];

export default function ExpertCommunity() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="content-container py-20 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: '#2563EB' }}>
              Why Webkaro
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
              We don&apos;t just build websites. We build businesses.
            </h2>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#656565' }}>
              An engineering collective that treats your product like our own. Senior talent, production-grade rigor, and a process designed for outcomes.
            </p>
          </motion.div>

          {/* Right: Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ backgroundColor: 'rgba(0,0,0,0.06)' }}>
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 md:p-10"
                style={{ backgroundColor: '#FAF8F5' }}
              >
                <h4 className="text-base font-semibold mb-3" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
                  {benefit.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
