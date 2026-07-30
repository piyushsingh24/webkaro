"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <div className="relative" style={{ backgroundColor: '#FAF8F5' }}>
      {/* Header */}
      <section className="content-container pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-6" style={{ color: '#2563EB' }}>
            Help Center
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
            Frequently Asked Questions
          </h1>
          <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#656565' }}>
            Everything you need to know about our collective, our process, and how we help you scale.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="content-container pb-20 md:pb-32">
        <div className="max-w-3xl mx-auto space-y-16">
          {faqCategories.map((cat) => (
            <div key={cat.id}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px" style={{ backgroundColor: '#2563EB' }} />
                <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
                  {cat.title}
                </h3>
              </div>
              <div className="space-y-3">
                {cat.questions.map((faq, idx) => {
                  const id = `${cat.id}-${idx}`;
                  const isOpen = openId === id;
                  return (
                    <div
                      key={id}
                      className="rounded-2xl border bg-white transition-all duration-300"
                      style={{ borderColor: isOpen ? 'rgba(37, 99, 235, 0.3)' : 'rgba(0,0,0,0.06)' }}
                    >
                      <button
                        onClick={() => setOpenId(isOpen ? null : id)}
                        className="w-full p-5 md:p-6 flex items-center justify-between text-left"
                      >
                        <span className={cn(
                          "text-sm md:text-base font-medium pr-4 transition-colors duration-300",
                          isOpen ? "" : ""
                        )} style={{ color: '#1B1B1B' }}>
                          {faq.q}
                        </span>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300" style={{ 
                          backgroundColor: isOpen ? '#F4F7F1' : 'transparent',
                          borderColor: isOpen ? 'rgba(37, 99, 235, 0.3)' : 'transparent'
                        }}>
                          {isOpen ? <Minus className="w-4 h-4" style={{ color: '#2563EB' }} /> : <Plus className="w-4 h-4" style={{ color: '#2563EB' }} />}
                        </div>
                      </button>
                      <div className={cn(
                        "overflow-hidden transition-all duration-300",
                        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      )}>
                        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                          <p className="text-xs leading-relaxed mb-4" style={{ color: '#888888' }}>
                            {faq.a}
                          </p>
                          <Link href="/blogs" className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest transition-colors duration-300" style={{ color: '#2563EB' }}>
                            Read blog article <ArrowRight className="w-3 h-3" />
                          </Link>
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
    </div>
  );
}
