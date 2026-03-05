import FinalCTA from "@/components/sections/FinalCTA";
import { Metadata } from "next";
import ExpertiseClient from "./ExpertiseClient";

export const metadata: Metadata = {
  title: "Core Engineering Expertise | Webkaro",
  description: "Webkaro combines deep technical knowledge with product-thinking. Explore our expertise in Frontend, Backend, Infrastructure, and AI/ML.",
  openGraph: {
    title: "Technical Excellence & Product Engineering | Webkaro Expertise",
    description: "Architectures built for scale. Discover our capabilities in React, Next.js, Node.js, AWS, and AI integration.",
    type: "website",
  }
};

export default function ExpertisePage() {
  const expertise = [
    { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"], icon: "Globe" },
    { title: "Backend", items: ["Node.js", "Go", "PostgreSQL", "Redis"], icon: "Database" },
    { title: "Infrastructure", items: ["AWS", "Kubernetes", "Docker", "CI/CD"], icon: "Zap" },
    { title: "AI & ML", items: ["OpenAI", "PyTorch", "LLM Integration", "Computer Vision"], icon: "Cpu" },
  ];

  return (
    <div className="min-h-screen bg-background pt-40 md:pt-56 pb-24 px-6 sm:px-10 md:px-16">
      <ExpertiseClient expertise={expertise} />
      <FinalCTA />
    </div>
  );
}
