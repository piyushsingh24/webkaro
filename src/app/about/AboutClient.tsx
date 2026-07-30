"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Shield, Globe, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Community First",
    description: "We believe in the power of collaboration over individual competition. Our collective thrives on shared knowledge.",
  },
  {
    icon: Shield,
    title: "Engineering Excellence",
    description: "We don't settle for 'good enough'. We build systems that are secure, scalable, and optimized for performance.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Our members bring diverse experiences from around the world, ensuring we build products with a global reach.",
  },
];

export default function AboutClient() {
  return (
    <div className="relative" style={{ backgroundColor: '#FAF8F5' }}>
      {/* Hero */}
      <section className="content-container pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-6" style={{ color: '#2563EB' }}>
            Our Story
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
            More Than Just<br />A Studio.
          </h1>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#656565' }}>
            Webkaro is a community-driven development collective. We don&apos;t have employees; we have experts who collaborate to build the future of the web.
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="content-container py-20 md:py-32" id="mission">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border" style={{ backgroundColor: '#F6F3EE', borderColor: 'rgba(0,0,0,0.06)' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-6xl md:text-7xl font-semibold text-center leading-none tracking-tight" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
                  Innovation<br />Scale<br />Trust
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            id="vision"
          >
            <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: '#2563EB' }}>
              Vision 2030
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-8" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
              Our Collective Philosophy
            </h2>
            <div className="space-y-8">
              <p className="text-sm md:text-base leading-relaxed" style={{ color: '#656565' }}>
                Traditional agencies often operate with rigid hierarchies and siloed talent. Webkaro was founded on a different premise: that the best work happens when vetted experts collaborate in a fluid, community-driven environment.
              </p>
              <div className="space-y-6">
                {values.map((v, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.06)' }}>
                      <v.icon className="w-5 h-5" style={{ color: '#2563EB' }} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1" style={{ color: '#1B1B1B' }}>{v.title}</h4>
                      <p className="text-xs leading-relaxed" style={{ color: '#888888' }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership / Team */}
      <section className="content-container py-20 md:py-32" id="team">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 md:mb-24">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: '#2563EB' }}>
              Leadership
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
              Leadership Collective
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="text-sm md:text-base leading-relaxed" style={{ color: '#888888' }}>
              The core architects driving our community&apos;s excellence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:shadow-soft" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.06)' }}>
              <div className="aspect-[4/3] rounded-xl mb-6 overflow-hidden relative" style={{ backgroundColor: '#F6F3EE' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#888888' }}>Core Architect #{i}</p>
                </div>
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#2563EB' }}>Engineering Lead</p>
              <p className="text-xs leading-relaxed" style={{ color: '#888888' }}>
                15+ years of experience in distributed systems and modern web architecture. Leading our efforts in high-performance computing.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Culture */}
      <section className="content-container py-20 md:py-32" id="culture">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: '#2563EB' }}>
              Culture
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
              Our Work Culture
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: '#656565' }}>
              We operate on a &ldquo;Freedom with Responsibility&rdquo; model. No managers, no vanity metrics—just pure engineering excellence and a shared commitment to building the best digital products on the planet.
            </p>
            <Link href="/careers" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300" style={{ color: '#2563EB' }}>
              See Open Opportunities <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {['Remote First', 'High Autonomy', 'Async Work', 'Profit Share'].map((item, i) => (
              <div key={i} className="p-6 md:p-8 rounded-2xl border flex items-center justify-center text-center" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.06)' }}>
                <p className="text-[10px] md:text-xs font-semibold uppercase tracking-widest" style={{ color: i === 1 ? '#2563EB' : '#888888' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="content-container py-20 md:py-32">
        <div className="p-8 md:p-16 rounded-3xl border" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.06)' }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { value: '50+', label: 'Experts in Collective' },
              { value: '100+', label: 'Projects Delivered' },
              { value: '10+', label: 'Countries Served' },
              { value: '99%', label: 'Client Retention' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-semibold mb-2" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
                  {stat.value}
                </p>
                <p className="text-[10px] md:text-xs uppercase tracking-widest font-semibold" style={{ color: '#2563EB' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-container pb-20 md:pb-32">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
            Want to work with us?
          </h3>
          <p className="text-sm leading-relaxed mb-8" style={{ color: '#888888' }}>
            We&apos;re always open to discussing new projects and partnerships.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-medium transition-all duration-300 hover:translate-y-[-1px]"
            style={{ backgroundColor: '#2563EB' }}
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
