"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const trustRow = [
  { value: "★★★★★", label: "Rating" },
  { value: "250+", label: "Projects" },
  { value: "40+", label: "Clients" },
  { value: "4.9/5", label: "Rating" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#FAF8F5' }}>
      {/* Organic background shape */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.03]" style={{ background: 'radial-gradient(circle, #6E8E59 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.02]" style={{ background: 'radial-gradient(circle, #1B1B1B 0%, transparent 70%)' }} />
      </div>

      <div className="content-container pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Typography */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-xl"
          >
            <h1 className="text-foreground mb-8 tracking-tight">
              Digital Experiences<br />
              That Drive<br />
              <span className="italic" style={{ color: '#6E8E59' }}>Real Growth.</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: '#656565' }}>
              We partner with ambitious startups and growing businesses to design websites, SaaS platforms and digital products that create measurable business impact.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-medium transition-all duration-300 hover:translate-y-[-1px]"
                style={{ backgroundColor: '#2563EB' }}
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-medium transition-all duration-300 border hover:translate-y-[-1px]"
                style={{ 
                  borderColor: 'rgba(0,0,0,0.08)',
                  color: '#2563EB'
                }}
              >
                View Our Work
              </Link>
            </div>

            {/* Trust Row */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8">
              {trustRow.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-sm font-medium" style={{ color: '#1B1B1B' }}>{item.value}</span>
                  <span className="text-xs uppercase tracking-widest" style={{ color: '#888888' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Dashboard Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
            className="relative"
          >
            {/* Main browser frame */}
            <div className="relative rounded-3xl overflow-hidden border" style={{ 
              backgroundColor: '#FFFFFF',
              borderColor: 'rgba(0,0,0,0.06)',
              boxShadow: '0 8px 24px -8px rgba(0,0,0,0.06), 0 16px 48px -16px rgba(0,0,0,0.08)'
            }}>
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-5 py-4 border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#E8EFE3' }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#F4F7F1' }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#D1DFC7' }} />
                </div>
                <div className="flex-1 mx-4">
                  <div className="max-w-md mx-auto h-6 rounded-lg" style={{ backgroundColor: '#F6F3EE' }} />
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6 md:p-8" style={{ backgroundColor: '#FDFCFA' }}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#888888' }}>Revenue Overview</p>
                    <p className="text-2xl font-semibold" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>$48,592</p>
                  </div>
                  <div className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#F4F7F1', color: '#6E8E59' }}>
                    +24.5%
                  </div>
                </div>

                {/* Chart bars */}
                <div className="flex items-end gap-2 h-32 mb-6">
                  {[35, 55, 40, 70, 50, 80, 45, 65, 75, 55, 85, 60].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-lg transition-all duration-500"
                      style={{ 
                        height: `${h}%`,
                        backgroundColor: i === 6 ? '#6E8E59' : '#E8EFE3'
                      }}
                    />
                  ))}
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Users', value: '12.4k' },
                    { label: 'Conversion', value: '3.2%' },
                    { label: 'Bounce', value: '24%' },
                  ].map((stat, i) => (
                    <div key={i} className="p-4 rounded-xl" style={{ backgroundColor: '#F6F3EE' }}>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#888888' }}>{stat.label}</p>
                      <p className="text-lg font-semibold" style={{ color: '#1B1B1B' }}>{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating widgets */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 p-4 rounded-2xl border"
              style={{ 
                backgroundColor: '#FFFFFF',
                borderColor: 'rgba(0,0,0,0.06)',
                boxShadow: '0 8px 24px -8px rgba(0,0,0,0.06)'
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F4F7F1' }}>
                  <svg className="w-5 h-5" style={{ color: '#6E8E59' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs" style={{ color: '#888888' }}>Growth</p>
                  <p className="text-sm font-semibold" style={{ color: '#1B1B1B' }}>+128%</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 p-4 rounded-2xl border"
              style={{ 
                backgroundColor: '#FFFFFF',
                borderColor: 'rgba(0,0,0,0.06)',
                boxShadow: '0 8px 24px -8px rgba(0,0,0,0.06)'
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F4F7F1' }}>
                  <svg className="w-5 h-5" style={{ color: '#6E8E59' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs" style={{ color: '#888888' }}>Status</p>
                  <p className="text-sm font-semibold" style={{ color: '#1B1B1B' }}>All systems healthy</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
