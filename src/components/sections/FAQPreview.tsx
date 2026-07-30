"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { faqs } from "@/data/faq";

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="content-container py-20 md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 md:mb-24"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: '#6E8E59' }}>
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
              Common<br />Questions.
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#656565' }}>
              Everything you need to know about working with our engineering collective.
            </p>
          </div>
        </motion.div>

        <div className="max-w-3xl space-y-3">
          {faqs.slice(0, 5).map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="border-b transition-colors duration-300"
                style={{ borderColor: 'rgba(0,0,0,0.06)' }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-5 md:py-6 flex items-center justify-between text-left group"
                  aria-expanded={isOpen}
                >
                  <span className={cn(
                    "text-sm md:text-base font-medium pr-8 transition-colors duration-300",
                    isOpen ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"
                  )} style={{ color: isOpen ? '#1B1B1B' : '#1B1B1B' }}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300",
                    isOpen ? "border-[#6E8E59]" : "border-transparent"
                  )} style={{ backgroundColor: isOpen ? '#F4F7F1' : 'transparent' }}>
                    <Plus className={cn("w-4 h-4 transition-transform duration-300", isOpen ? "rotate-45" : "")} style={{ color: '#6E8E59' }} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 md:pb-6 pr-8">
                        <p className="text-sm leading-relaxed mb-4" style={{ color: '#656565' }}>
                          {faq.answer}
                        </p>
                          <Link
                            href={`/faq/${faq.slug}`}
                            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-colors duration-300"
                            style={{ color: '#2563EB' }}
                          >
                          Read more
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300"
            style={{ color: '#2563EB' }}
          >
            Still have questions? Talk to an expert
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
