"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaAws,
  FaNodeJs,
  FaDocker,
  FaFigma,
  FaJs,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiLaravel,
  SiRedis,
  SiPrisma,
  SiStripe,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "Stripe", icon: SiStripe, color: "#635BFF" },
];

export default function TechnologyStack() {
  return (
    <section className="relative overflow-hidden border-y" style={{ backgroundColor: '#FAF8F5', borderColor: 'rgba(0,0,0,0.06)' }}>
      <div className="content-container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: '#888888' }}>
            Technologies we work with
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {technologies.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <span
                key={tech.name}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 hover:-translate-y-[1px]"
                style={{ 
                  borderColor: 'rgba(0,0,0,0.06)',
                  color: '#656565',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <Icon className="w-4 h-4" style={{ color: tech.color }} />
                {tech.name}
              </span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
