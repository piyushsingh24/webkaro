"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Megaphone, Code2, Palette, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const founders = [
  {
    name: "Ankit Sharma",
    role: "Head of Marketing",
    department: "Marketing",
    image: "/founder-marketing.png",
    icon: Megaphone,
    bio: "Driving brand growth through data-driven strategies and creative campaigns that deliver measurable results.",
    accent: "from-violet-500 to-fuchsia-500",
    accentShadow: "rgba(139, 92, 246, 0.3)",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
  },
  {
    name: "Piyush Singh",
    role: "Senior Developer",
    department: "IT Solutions",
    image: "/founder-developer.png",
    icon: Code2,
    bio: "Architecting scalable solutions with modern tech stacks and leading engineering excellence across projects.",
    accent: "from-blue-500 to-cyan-500",
    accentShadow: "rgba(59, 130, 246, 0.3)",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    name: "Saksham Dubey",
    role: "Creative Designer",
    department: "Design",
    image: "/founder-designer.png",
    icon: Palette,
    bio: "Crafting pixel-perfect interfaces and immersive brand experiences that captivate and convert users.",
    accent: "from-rose-500 to-orange-500",
    accentShadow: "rgba(244, 63, 94, 0.3)",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-400",
  },
  {
    name: "Priyanka Kumari",
    role: "HR Manager",
    department: "Human Resources",
    image: "/founder-hr.png",
    icon: Users,
    bio: "Building a world-class team culture and nurturing talent that drives innovation and collaboration.",
    accent: "from-emerald-500 to-teal-500",
    accentShadow: "rgba(16, 185, 129, 0.3)",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FoundersSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[130px] rounded-full opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24 max-w-3xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              The Team
            </span>
          </div>

          <h2 className="h2 uppercase leading-[1.25] text-foreground">
            Meet The{" "}
            <span className="text-gradient">Founders.</span>
          </h2>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            The visionaries behind Webkaro — a team of passionate experts
            dedicated to delivering extraordinary digital experiences.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              <div
                className={cn(
                  "relative flex flex-col items-center text-center",
                  "p-8 pb-10 rounded-3xl",
                  "bg-card border border-border",
                  "hover:border-primary/30",
                  "transition-all duration-500",
                  "hover:-translate-y-3",
                  "overflow-hidden"
                )}
                style={{
                  boxShadow: `0 0 0 rgba(0,0,0,0)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 30px 80px -20px ${founder.accentShadow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`;
                }}
              >
                {/* Gradient glow on hover */}
                <div
                  className={cn(
                    "absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700",
                    `bg-gradient-to-br ${founder.accent}`
                  )}
                />

                {/* Profile Image */}
                <div className="relative mb-6">
                  <div
                    className={cn(
                      "w-28 h-28 rounded-full overflow-hidden ring-2 ring-border group-hover:ring-primary/40 transition-all duration-500",
                      "relative z-10"
                    )}
                  >
                    <Image
                      src={founder.image}
                      alt={`${founder.name} - ${founder.role} at Webkaro`}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {/* Floating icon badge */}
                  <div
                    className={cn(
                      "absolute -bottom-2 -right-2 z-20 w-10 h-10 rounded-xl flex items-center justify-center",
                      "bg-card border border-border",
                      "group-hover:border-primary/30 group-hover:scale-110 transition-all duration-500",
                      "shadow-lg"
                    )}
                  >
                    <founder.icon
                      className={cn(
                        "w-4.5 h-4.5 transition-colors duration-500",
                        founder.iconColor
                      )}
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-3 relative z-10">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1 font-display">
                      {founder.name}
                    </h3>
                    <p
                      className={cn(
                        "text-[11px] font-black uppercase tracking-[0.2em]",
                        founder.iconColor
                      )}
                    >
                      {founder.role}
                    </p>
                  </div>

                  <div className="w-8 h-px bg-border mx-auto" />

                  <p className="text-muted-foreground text-[13px] leading-relaxed max-w-[220px] mx-auto">
                    {founder.bio}
                  </p>

                  {/* Department tag */}
                  <div className="pt-2">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em]",
                        founder.iconBg,
                        founder.iconColor
                      )}
                    >
                      <span className="w-1 h-1 rounded-full bg-current" />
                      {founder.department}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
