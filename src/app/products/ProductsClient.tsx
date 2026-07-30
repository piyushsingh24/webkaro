"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Shield, Zap } from "lucide-react";
import Link from "next/link";

const products = [
  {
    title: "WebKaro Core CMS",
    description: "A headless, ultra-fast content management system designed for high-performance marketing sites.",
    features: ["API-first architecture", "Visual page builder", "Edge-optimized delivery", "Built-in SEO tools"],
    icon: Box,
  },
  {
    title: "Nexus Auth Gateway",
    description: "A secure, enterprise-grade authentication layer that integrates seamlessly with MERN and Next.js stacks.",
    features: ["Social login (SSO)", "Multi-factor verification", "JWT & Session management", "Role-based access"],
    icon: Shield,
  },
  {
    title: "Velocity Dashboard",
    description: "Real-time analytics and business intelligence tool for SaaS product owners.",
    features: ["Live user tracking", "Revenue monitoring", "Customer retention data", "Customizable widgets"],
    icon: Zap,
  },
];

export default function ProductsClient() {
  return (
    <div className="relative" style={{ backgroundColor: '#FAF8F5' }}>
      {/* Hero */}
      <section className="content-container pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-6" style={{ color: '#2563EB' }}>
            Digital Ecosystem
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
            Our In-House Innovations
          </h1>
          <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#656565' }}>
            We don&apos;t just build for others; we engineer our own internal products to solve complex business problems at scale.
          </p>
        </motion.div>
      </section>

      {/* Product List */}
      <section className="content-container pb-20 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 md:p-8 rounded-2xl border bg-white transition-all duration-300 hover:shadow-soft"
              style={{ borderColor: 'rgba(0,0,0,0.06)' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#F4F7F1' }}>
                <product.icon className="w-6 h-6" style={{ color: '#2563EB' }} />
              </div>
              <h2 className="text-lg md:text-xl font-semibold mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
                {product.title}
              </h2>
              <p className="text-xs leading-relaxed mb-6" style={{ color: '#888888' }}>
                {product.description}
              </p>
              <ul className="space-y-2.5 mb-8">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs" style={{ color: '#656565' }}>
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: '#2563EB' }} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold transition-colors duration-300"
                style={{ color: '#2563EB' }}
              >
                Request Early Access <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="content-container pb-20 md:pb-32">
        <div className="p-8 md:p-16 rounded-3xl border text-center" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.06)' }}>
          <h2 className="text-xl md:text-3xl font-semibold tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
            Need a Custom Solution?
          </h2>
          <p className="text-xs md:text-sm leading-relaxed max-w-lg mx-auto mb-8" style={{ color: '#888888' }}>
            Our engineering collective can build bespoke software ecosystems for enterprises that require unique logic, highest security, and massive scale.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-white text-sm font-medium transition-all duration-300 hover:translate-y-[-1px]"
            style={{ backgroundColor: '#2563EB' }}
          >
            Partner With Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
