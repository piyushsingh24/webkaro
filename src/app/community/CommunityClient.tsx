"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FinalCTA from "@/components/sections/FinalCTA";
import { ArrowRight, Users } from "lucide-react";

const initiatives = [
  {
    title: "Open Source First",
    description: "We contribute to and maintain several open-source libraries in the Next.js and MERN ecosystem.",
    link: "https://github.com/webkaro",
    action: "View on GitHub",
  },
  {
    title: "Developer Collective",
    description: "A private network of vetted senior engineers who collaborate on high-stakes digital products.",
    link: "#vetted",
    action: "Apply to Join",
  },
  {
    title: "Weekly Webinars",
    description: "Deep-dives into architecture, performance optimization, and the future of the web.",
    link: "#events",
    action: "See Upcoming",
  },
];

const values = [
  {
    title: "Collaborative Over Competitive",
    description: "We believe in sharing knowledge and growing together. Our collective thrives when everyone succeeds.",
  },
  {
    title: "Quality as a Standard",
    description: "We don't just ship code; we craft solutions that are peer-reviewed and tested for excellence.",
  },
  {
    title: "Radical Transparency",
    description: "From project timelines to compensation models, we keep everything clear and honest.",
  },
];

export default function CommunityClient() {
  return (
    <div className="relative" style={{ backgroundColor: '#FAF8F5' }}>
      {/* Hero */}
      <section className="content-container pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-6" style={{ color: '#2563EB' }}>
            Our Collective Impact
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
            More Than Just Developers
          </h1>
          <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#656565' }}>
            We are a thriving community of engineers, designers, and innovators building tools and sharing knowledge to move the web forward.
          </p>
        </motion.div>
      </section>

      {/* Initiatives */}
      <section className="content-container pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {initiatives.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-2xl border bg-white transition-all duration-300 hover:shadow-soft"
              style={{ borderColor: 'rgba(0,0,0,0.06)' }}
            >
              <h3 className="text-base font-semibold mb-3" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed mb-6" style={{ color: '#888888' }}>
                {item.description}
              </p>
              <Link
                href={item.link}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-colors duration-300"
                style={{ color: '#2563EB' }}
              >
                {item.action} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="content-container pb-16 md:pb-24" id="vetted">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: '#2563EB' }}>
              Vetted Expertise
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-8" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
              Quality as a Standard
            </h2>
            <div className="space-y-8">
              <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>
                Our collective isn&apos;t open to everyone. We follow a rigorous vetting process to ensure only the top 1% of engineering and design talent enters our network.
              </p>
              {values.map((v, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="text-sm font-semibold" style={{ color: '#2563EB' }}>{v.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: '#888888' }}>{v.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border p-8 md:p-12 flex items-center justify-center" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.06)' }}>
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#F4F7F1' }}>
                <Users className="w-10 h-10" style={{ color: '#2563EB' }} />
              </div>
              <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: '#888888' }}>
                Top 1% Talent
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="content-container pb-20 md:pb-32" id="events">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: '#2563EB' }}>
              Events
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
              Collective Events
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { date: "March 15, 2026", title: "The Future of Next.js 16", speaker: "Remote Talk by @piyush_sh" },
              { date: "April 02, 2026", title: "Performance at Scale", speaker: "Workshop by WebKaro Experts" },
            ].map((event, i) => (
              <div key={i} className="p-6 md:p-8 rounded-2xl border flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 hover:shadow-soft" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.06)' }}>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-semibold mb-2" style={{ color: '#2563EB' }}>{event.date}</p>
                  <h4 className="text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>{event.title}</h4>
                  <p className="text-xs" style={{ color: '#888888' }}>{event.speaker}</p>
                </div>
                <ArrowRight className="w-4 h-4 shrink-0" style={{ color: '#2563EB' }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
