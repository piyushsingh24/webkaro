"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, Search, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import FinalCTA from "@/components/sections/FinalCTA";

const faqCategories = [
  {
    id: "general",
    title: "General",
    questions: [
      {
        q: "What is Webkaro?",
        a: "Webkaro is a community-driven development collective. We bring together top-tier developers, designers, and strategists to build high-performance, scalable digital products for startups and enterprises.",
      },
      {
        q: "How are you different from a traditional studio?",
        a: "Traditional agencies often have high overheads and rigid hierarchies. Our collective model allows us to pull in specialized experts for each project, ensuring better quality and more efficient development cycles.",
      },
    ],
  },
  {
    id: "services",
    title: "Services & Tech",
    questions: [
      {
        q: "Which technologies do you specialize in?",
        a: "We focus on modern, performance-first technologies: Next.js 16, TypeScript, Tailwind CSS, GSAP, Node.js, and cloud platforms like AWS and Vercel.",
      },
      {
        q: "Do you provide post-launch support?",
        a: "Yes, we offer various maintenance and support packages to ensure your application stays secure, updated, and performing optimally.",
      },
    ],
  },
  {
    id: "process",
    title: "Process & Timeline",
    questions: [
      {
        q: "How long does it take to build an MVP?",
        a: "A typical SaaS MVP takes between 6-10 weeks from discovery to launch, depending on the complexity of core features.",
      },
      {
        q: "What is your engagement model?",
        a: "We typically work on a project-based model with clearly defined milestones and deliverables. We also offer dedicated collective squads for long-term product development.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>("general-0");

  return (
    <div className="pt-44 pb-24">
      {/* Header */}
      <section className="px-6 mb-24 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">
            Help Center
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 font-outfit">
            Frequently Asked <br />
            <span className="text-gradient">Questions.</span>
          </h1>
          <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our collective, our process, and
            how we help you scale.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="px-6 mb-32">
        <div className="max-w-4xl mx-auto space-y-16">
          {faqCategories.map((cat) => (
            <div key={cat.id}>
              <h3 className="text-2xl font-bold text-white mb-8 font-outfit flex items-center gap-4">
                <div className="w-2 h-8 bg-primary rounded-full" />
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.questions.map((faq, idx) => {
                  const id = `${cat.id}-${idx}`;
                  const isOpen = openId === id;
                  return (
                    <div
                      key={id}
                      className={cn(
                        "glass rounded-3xl border border-white/5 transition-all duration-300",
                        isOpen ? "border-primary/30" : "hover:border-white/10"
                      )}
                    >
                      <button
                        onClick={() => setOpenId(isOpen ? null : id)}
                        className="w-full p-8 flex items-center justify-between text-left group"
                      >
                        <span className={cn(
                          "text-lg font-bold transition-colors font-outfit",
                          isOpen ? "text-primary" : "text-white/80 group-hover:text-white"
                        )}>
                          {faq.q}
                        </span>
                        <div className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                          isOpen ? "bg-primary text-white" : "bg-white/5 text-white/40"
                        )}>
                          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                        </div>
                      </button>
                      <div className={cn(
                        "overflow-hidden transition-all duration-300",
                        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      )}>
                        <div className="p-8 pt-0 border-t border-white/5">
                          <p className="text-foreground/60 leading-relaxed text-base">
                            {faq.a}
                          </p>
                          <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                            <span className="text-xs text-white/20">Related: Engineering, SaaS</span>
                            <Link href="/blogs" className="text-primary text-xs font-bold hover:underline">
                              Read blog article
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
