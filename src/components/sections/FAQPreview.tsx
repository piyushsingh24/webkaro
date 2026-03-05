"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { faqs } from "@/data/faq";

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-background transition-colors duration-500 relative border-t border-border/40 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[450px] bg-primary/5 blur-[120px] rounded-full opacity-60 dark:opacity-80" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20 px-4">
          <h2 className="h2 mb-4 uppercase leading-[1.3] text-foreground">
            Common <span className="text-foreground dark:text-white">Questions</span><span className="text-gradient">.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-outfit">
            Everything you need to know about working with our engineering collective.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "bg-card dark:transparent dark:glass rounded-[2rem] md:rounded-3xl overflow-hidden transition-all duration-500 border border-border dark:border-white/5 shadow-sm",
                openIndex === index ? "shadow-premium border-primary/20" : "hover:border-border dark:hover:border-white/10"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left group transition-all"
                aria-expanded={openIndex === index}
              >
                <span className={cn(
                  "text-base md:text-xl font-black uppercase tracking-tight transition-colors font-outfit pr-4",
                  openIndex === index ? "text-primary" : "text-foreground group-hover:text-primary"
                )}>
                  {faq.question}
                </span>
                <div className={cn(
                  "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all shrink-0 border border-border dark:border-white/10 group-hover:border-primary/40 shadow-inner",
                  openIndex === index ? "bg-primary text-white border-primary" : "bg-primary/5 dark:bg-white/5 text-muted-foreground"
                )}>
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", openIndex === index ? "rotate-180" : "")} />
                </div>
              </button>

              <div className={cn(
                "overflow-hidden transition-all duration-300",
                openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              )}>
                <div className="p-6 md:p-8 pt-0 border-t border-border dark:border-white/5">
                  <p className="text-muted-foreground leading-relaxed text-[13px] md:text-sm mb-6 max-w-2xl">
                    {faq.answer}
                  </p>
                  <Link
                    href={`/faq/${faq.slug}`}
                    className="inline-flex items-center gap-2 text-primary text-[10px] md:text-xs font-black uppercase tracking-widest hover:gap-3 transition-all"
                  >
                    Details in our FAQ <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Link
            href="/contact"
            className="text-muted-foreground hover:text-primary transition-colors text-[10px] md:text-xs font-bold uppercase tracking-widest"
          >
            Still have questions? <span className="text-primary underline underline-offset-8">Talk to an expert</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
