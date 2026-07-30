"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Github } from "lucide-react";

const founders = [
  {
    name: "Ankit Sharma",
    role: "Head of Marketing",
    bio: "Driving brand growth through data-driven strategies and creative campaigns that deliver measurable results.",
    image: "/founder-marketing.png",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Piyush Singh",
    role: "Senior Developer",
    bio: "Architecting scalable solutions with modern tech stacks and leading engineering excellence across projects.",
    image: "/founder-developer.png",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Saksham Dubey",
    role: "Creative Designer",
    bio: "Crafting pixel-perfect interfaces and immersive brand experiences that captivate and convert users.",
    image: "/founder-designer.png",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Priyanka Kumari",
    role: "HR Manager",
    bio: "Building a world-class team culture and nurturing talent that drives innovation and collaboration.",
    image: "/founder-hr.png",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
];

export default function FoundersSection() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="content-container py-20 md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20 md:mb-28"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: '#2563EB' }}>
              Leadership
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
              The team behind<br />the work.
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#656565' }}>
              Four people, one shared obsession: building digital products that outlast trends. We&apos;re generalists with deep specializations, and we bring that rare combination to every engagement.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {founders.map((founder, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] mb-6 rounded-2xl overflow-hidden" style={{ backgroundColor: '#F6F3EE' }}>
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
                  {founder.name}
                </h4>
                <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: '#6E8E59' }}>
                  {founder.role}
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#888888' }}>
                  {founder.bio}
                </p>
                <div className="flex gap-3">
                  <a href={founder.linkedin} className="w-8 h-8 rounded-lg flex items-center justify-center border transition-colors duration-300 hover:border-[#6E8E59]" style={{ borderColor: 'rgba(0,0,0,0.06)' }} aria-label={`${founder.name} LinkedIn`}>
                    <Linkedin className="w-4 h-4" style={{ color: '#888888' }} />
                  </a>
                  <a href={founder.github} className="w-8 h-8 rounded-lg flex items-center justify-center border transition-colors duration-300 hover:border-[#6E8E59]" style={{ borderColor: 'rgba(0,0,0,0.06)' }} aria-label={`${founder.name} GitHub`}>
                    <Github className="w-4 h-4" style={{ color: '#888888' }} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
