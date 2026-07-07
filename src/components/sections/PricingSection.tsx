"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: "₹25,000+",
    subtitle: "Ideal for MVP & Landing Pages",
    features: [
      "Single Page Next.js App",
      "Mobile Responsive Design",
      "Zod Form Validation",
      "Framer Motion Animations",
      "10-14 Days Delivery",
      "1 Month Free Maintenance"
    ],
    cta: "Start Starter",
    featured: false
  },
  {
    name: "Growth",
    price: "₹75,000+",
    subtitle: "For Scalable SaaS & E-com",
    features: [
      "Multi-Page Application",
      "Full MERN Stack Integration",
      "Complex State Management",
      "Custom CMS Integration",
      "3-5 Weeks Delivery",
      "3 Months Support"
    ],
    cta: "Start Growth",
    featured: true
  },
  {
    name: "Scale",
    price: "₹2,00,000+",
    subtitle: "Custom Enterprise Solutions",
    features: [
      "Microservices Architecture",
      "Enterprise Grade Security",
      "Dedicated Dev & Project Lead",
      "Automated Testing Suite",
      "Custom Implementation",
      "Priority 24/7 Support"
    ],
    cta: "Let's Talk",
    featured: false
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding relative">
      <div className="content-container">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="h2 mb-6">Investment Guide</h2>
          <p className="text-white/60 text-lg">
            Transparent pricing for founders who value speed over savings. No hidden gaps, just engineering excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-10 rounded-[2.5rem] flex flex-col transition-all duration-500 ${
                tier.featured 
                  ? "bg-primary/5 border-primary/20 shadow-[0_0_50px_rgba(99,102,241,0.1)] scale-105 z-10" 
                  : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04]"
              } border`}
            >
              {tier.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-black text-white">{tier.price}</span>
                </div>
                <p className="text-white/40 text-sm font-semibold uppercase tracking-wider">{tier.subtitle}</p>
              </div>

              <div className="flex-1 space-y-5 mb-12">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4 text-white/70">
                    <div className="w-5 h-5 rounded-full bg-accent-teal/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent-teal" />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={tier.featured ? "default" : "outline"} 
                className={`w-full h-14 rounded-2xl text-base font-bold transition-all ${
                  tier.featured ? "shadow-glow" : "border-white/10 hover:bg-white/5"
                }`}
              >
                {tier.cta} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className="text-white/30 text-xs font-bold uppercase tracking-widest">
                All prices are starting estimates. Final quote after a 30-min discovery call.
            </p>
        </div>
      </div>
    </section>
  );
}
