import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ExpertCommunity from "@/components/sections/ExpertCommunity";
import Testimonials from "@/components/sections/Testimonials";
import TrustSection from "@/components/sections/TrustSection";
import FAQPreview from "@/components/sections/FAQPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Strategic MERN Stack & Next.js Development Partner | Webkaro",
  description: "Webkaro is a premium digital studio specializing in high-performance MERN stack and Next.js applications. Build scalable startups with our expert engineering team.",
  keywords: ["MERN stack developer", "Next.js development studio", "custom web applications Noida", "premium digital experiences", "startup engineering team"],
  openGraph: {
    title: "Best MERN Stack & Next.js Development Partner | Webkaro",
    description: "Engineering scalable digital experiences for the modern web with Next.js and MERN stack.",
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedProjects />
      <ExpertCommunity />
      <Testimonials />
      <TrustSection />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
