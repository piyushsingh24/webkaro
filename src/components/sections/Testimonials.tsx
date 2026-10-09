"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials as staticTestimonials, type Testimonial as TestimonialType } from "@/data/testimonials";
import { Reveal } from "@/components/motion/Reveal";

export default function Testimonials({ testimonials }: { testimonials?: TestimonialType[] }) {
  const list = testimonials && testimonials.length > 0 ? testimonials : staticTestimonials;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % list.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, list.length]);

  const prev = () => setActiveIndex((prev) => (prev - 1 + list.length) % list.length);
  const next = () => setActiveIndex((prev) => (prev + 1) % list.length);

  const t = list[activeIndex];

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#F6F3EE' }}>
      <div className="content-container py-20 md:py-32 lg:py-40">
        <Reveal className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#2563EB' }} />
            ))}
          </div>

          <Quote className="w-10 h-10 mx-auto mb-8 opacity-20" style={{ color: '#2563EB' }} />

          <motion.blockquote
            key={t.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8"
            style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}
          >
            &ldquo;{t.quote}&rdquo;
          </motion.blockquote>

          <div className="flex items-center justify-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full flex items-center justify-center border" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.06)' }}>
                <span className="text-sm font-semibold" style={{ color: '#2563EB' }}>{t.initials}</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold" style={{ color: '#1B1B1B' }}>{t.name}</p>
              <p className="text-xs" style={{ color: '#888888' }}>{t.role}, {t.company}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="icon-nudge w-10 h-10 rounded-full flex items-center justify-center border hover:border-[#6E8E59]"
              style={{ borderColor: 'rgba(0,0,0,0.06)', color: '#1B1B1B' }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="icon-nudge w-10 h-10 rounded-full flex items-center justify-center border hover:border-[#6E8E59]"
              style={{ borderColor: 'rgba(0,0,0,0.06)', color: '#1B1B1B' }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
