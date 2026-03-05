"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Shield, Zap } from "lucide-react";
import Link from "next/link";
import FinalCTA from "@/components/sections/FinalCTA";

const products = [
  {
    title: "WebKaro Core CMS",
    description: "A headless, ultra-fast content management system designed for high-performance marketing sites.",
    features: ["API-first architecture", "Visual page builder", "Edge-optimized delivery", "Built-in SEO tools"],
    icon: Box,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Nexus Auth Gateway",
    description: "A secure, enterprise-grade authentication layer that integrates seamlessly with MERN and Next.js stacks.",
    features: ["Social login (SSO)", "Multi-factor verification", "JWT & Session management", "Role-based access"],
    icon: Shield,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Velocity Dashboard",
    description: "Real-time analytics and business intelligence tool for SaaS product owners.",
    features: ["Live user tracking", "Revenue monitoring", "Customer retention data", "Customizable widgets"],
    icon: Zap,
    color: "from-amber-500 to-orange-500",
  },
];

export default function ProductsClient() {
  return (
    <div className="pt-44 pb-24 text-foreground">
      {/* Hero */}
      <section className="px-6 mb-32 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4"
          >
            Digital Ecosystem
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black text-foreground mb-8 font-outfit"
          >
            Our In-House <br />
            <span className="text-gradient">Innovations.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-foreground/60 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            We don't just build for others; we engineer our own internal products
            to solve complex business problems at scale.
          </motion.p>
        </div>
      </section>

      {/* Product List */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto space-y-24">
          {products.map((product, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
            >
              <div className="flex-1 space-y-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg shadow-primary/20`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-foreground font-outfit">
                  {product.title}
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed max-w-xl">
                  {product.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground/60 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                  >
                    Request Early Access <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="flex-1 w-full relative">
                <div className={`aspect-[4/3] rounded-[3rem] bg-gradient-to-br ${product.color} blur-[100px] absolute inset-0 opacity-10`} />
                <div className="aspect-[4/3] rounded-[3rem] glass border-border overflow-hidden relative group">
                  <div className="absolute inset-0 bg-primary/[0.02] flex items-center justify-center p-12">
                    <div className="w-full h-full border border-border rounded-2xl bg-primary/[0.02] flex flex-col items-center justify-center text-center p-8">
                      <product.icon className="w-20 h-20 text-primary/10 mb-6 group-hover:scale-110 transition-transform duration-500" />
                      <p className="text-foreground/20 font-black uppercase tracking-widest text-sm">
                        Product Visual Pending
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto glass p-12 md:p-24 rounded-[4rem] text-center border-border overflow-hidden relative bg-gradient-to-br from-primary/5 to-transparent">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
          <div className="relative z-10 space-y-10">
            <h2 className="text-3xl md:text-5xl font-black text-foreground font-outfit">
              Need a Custom Solution?
            </h2>
            <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto">
              Our engineering collective can build bespoke software ecosystems for
              enterprises that require unique logic, highest security, and massive scale.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-black hover:scale-105 transition-all"
            >
              Partner With Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
