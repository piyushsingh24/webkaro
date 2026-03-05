"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Quote, Copy, Check, ExternalLink } from "lucide-react";
import toast from "react-hot-toast";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const GOOGLE_REVIEW_URL = "https://g.page/r/CVJRXt-C6ge8EAI/review";

const reviews = [
  {
    id: 1,
    author: "Arjun Mehta",
    role: "Founder, TechStack",
    rating: 5,
    text: "Honestly, working with Webkaro was smoother than I expected. They helped us turn our rough MVP into something we were actually proud to launch. Super responsive and easy to work with.",
    date: "2 months ago",
  },
  {
    id: 2,
    author: "Sarah",
    role: "Product Manager, Flow",
    rating: 4,
    text: "Great experience overall. The team really understood what we were trying to build and gave practical suggestions along the way. Communication was clear and timelines were respected.",
    date: "1 month ago",
  },
  {
    id: 3,
    author: "Rahul Singh",
    role: "CEO, Sporty",
    rating: 5,
    text: "Loved the final result! The UI looks clean and modern, and everything just works smoothly. You can tell they care about the details.",
    date: "3 weeks ago",
  },
  {
    id: 4,
    author: "Elena",
    role: "Founder",
    rating: 4,
    text: "Very professional team. The code quality was solid and easy for our internal developers to continue working on. Would definitely collaborate again.",
    date: "2 weeks ago",
  },
];

const templates = [
  {
    id: "startup",
    label: "Startup Founder Tone",
    text: "Working with Webkaro was a game-changer for our startup. They built our MVP with high performance and scalability in mind. Highly recommended for fast-moving founders!",
  },
  {
    id: "enterprise",
    label: "Enterprise Client Tone",
    text: "Webkaro delivered a complex system integration with professional precision. Their collective model ensures you get the right experts for every part of the stack.",
  },
  {
    id: "technical",
    label: "Technical Collaboration Tone",
    text: "Impored by their clean architecture and use of modern technologies like Next.js 16 and GSAP. A truly engineering-first collective that delivers results.",
  },
];

export default function Testimonials() {
  const [activeTemplate, setActiveTemplate] = useState(templates[0]);
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiReview, setAiReview] = useState("");

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, reviews.length]);

  const generateWithAI = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch("/api/generate-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tone: activeTemplate.label,
          details: "web development, UI/UX design, and digital growth",
        }),
      });
      const data = await response.json();
      if (data.text) {
        setAiReview(data.text);
        setActiveTemplate({
          id: "ai-generated",
          label: "✨ AI Generated",
          text: data.text,
        });
      } else if (data.error) {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error("Failed to generate AI review");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = (text: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    toast.success("✓ Review template copied to clipboard!", {
      duration: 3000,
      position: 'top-right',
      style: {
        background: '#10B981',
        color: '#fff',
      },
    });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section-padding bg-background transition-colors duration-500 relative border-t border-border/40 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1000px] h-[500px] bg-primary/5 blur-[120px] rounded-full opacity-60 dark:opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24 px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 rounded-full mb-6 transition-colors">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-3 h-3" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-foreground/40 dark:text-white/40">Verified Google Reviews</span>
          </div>
          <h2 className="h2 mb-4 uppercase leading-[1.3] text-foreground">
            Trusted By <br className="hidden md:block" />
            <span className="text-foreground dark:text-white">Innovative</span> <span className="text-gradient">Teams.</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <span className="text-foreground dark:text-white font-black text-lg md:text-xl leading-none">5.0</span>
            <span className="text-muted-foreground text-xs md:text-sm font-bold uppercase tracking-wider">40+ Reviews</span>
          </div>
        </div>

        {/* Infinite Horizontal Scroll */}
        <div
          className="relative w-full overflow-hidden mb-12 md:mb-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-6 w-max"
            animate={{
              x: isPaused ? 0 : ["0%", "-50%"],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {[...reviews, ...reviews].map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className="flex-shrink-0 w-[300px] md:w-[450px] bg-card dark:bg-white/[0.02] p-6 md:p-10 rounded-[2.5rem] border border-border dark:border-white/5 hover:border-primary/50 hover:shadow-premium dark:hover:shadow-glow transition-all duration-500 group flex flex-col justify-between min-h-[250px] shadow-sm"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-foreground dark:text-white font-black text-sm md:text-base">
                      {review.author}
                    </h4>
                    <p className="text-muted-foreground text-[8px] md:text-[9px] uppercase tracking-wider font-bold">
                      {review.role}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-1.5">
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <span className="text-[7px] font-black text-foreground/20 dark:text-white/20 uppercase tracking-widest">
                      Verified
                    </span>
                  </div>
                </div>

                {/* Review Text */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-primary/10 absolute -left-2 -top-4 -z-10 rotate-180" />
                  <p className="text-foreground/80 dark:text-white/80 text-sm md:text-base font-bold font-outfit leading-relaxed italic relative z-10">
                    {review.text}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Leave Review Section */}
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-card dark:glass p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-border dark:border-primary/20 relative shadow-premium dark:shadow-glow-lg transition-all">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-5 py-2 bg-primary rounded-full text-[10px] md:text-xs font-bold text-white uppercase tracking-widest shadow-xl shadow-primary/40 whitespace-nowrap">
              Happy with our work?
            </div>
            <p className="text-foreground/70 mb-8 text-base md:text-lg lg:text-xl">
              Supporting us helps our collective grow. Copy a template below and leave us a review on Google!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                className="btn-cta-primary px-8 py-4 rounded-full font-black flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="" className="w-5 h-5 brightness-0 invert" />
                Write a Google Review
              </Link>
              <button
                onClick={() => setShowModal(true)}
                className="btn-cta-secondary px-8 py-4 rounded-full font-black flex items-center justify-center gap-3"
              >
                Review Templates <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Template Modal */}
        {showModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
            <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" onClick={() => setShowModal(false)} />
            <div className="relative bg-card dark:glass p-8 md:p-12 rounded-[3rem] max-w-2xl w-full border border-border dark:border-primary/30 shadow-2xl">
              <h3 className="text-2xl font-bold text-foreground dark:text-white mb-8 font-outfit text-center">Copy & Leave Review</h3>

              <div className="flex flex-wrap gap-2 mb-8 justify-center">
                {templates.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTemplate(t)}
                    className={cn(
                      "px-4 py-2 rounded-full text-xs font-bold transition-all",
                      activeTemplate.id === t.id ? "bg-primary text-white" : "bg-primary/5 dark:bg-white/5 text-muted-foreground hover:bg-primary/10 dark:hover:bg-white/10"
                    )}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="relative bg-background dark:bg-black/40 p-6 rounded-2xl border border-border dark:border-white/10 mb-8 min-h-[150px] max-h-[250px] overflow-y-auto flex flex-col justify-center">
                {isGenerating ? (
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                    <p className="text-xs font-bold text-primary animate-pulse uppercase tracking-[0.2em]">Crafting Review with AI...</p>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm leading-relaxed italic">
                    {activeTemplate.text}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-4">
                {!isGenerating && activeTemplate.id !== "ai-generated" && (
                  <button
                    onClick={generateWithAI}
                    className="w-full py-3 bg-primary/10 border border-primary/20 text-primary rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/20 transition-all hover:scale-[1.01]"
                  >
                    ✨ Generate with Gemini AI
                  </button>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => copyToClipboard(activeTemplate.text)}
                    disabled={isGenerating || !activeTemplate.text}
                    className="flex-1 py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {copied ? <><Check className="w-5 h-5" /> Copied!</> : <><Copy className="w-5 h-5" /> Copy Text</>}
                  </button>
                  <Link
                    href={GOOGLE_REVIEW_URL}
                    target="_blank"
                    className="flex-1 py-4 bg-foreground dark:bg-white text-background dark:text-black rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                  >
                    Open Google Maps <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
