import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Process from "@/components/sections/Process";
import ExpertCommunity from "@/components/sections/ExpertCommunity";
import Statistics from "@/components/sections/Statistics";
import FoundersSection from "@/components/sections/FoundersSection";
import Testimonials from "@/components/sections/Testimonials";
import TechnologyStack from "@/components/sections/TechnologyStack";
import FAQPreview from "@/components/sections/FAQPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Strategic MERN Stack & Next.js Development Partner | Webkaro",

  description:
    "Webkaro is a premium digital studio specializing in high-performance MERN stack and Next.js applications. Build scalable startups with our expert engineering team.",

  keywords: [
    "MERN stack developer",
    "Next.js development studio",
    "custom web applications Noida",
    "premium digital experiences",
    "startup engineering team",
  ],

  verification: {
    google: "a02zrNgd7cZycONHIRJnFCcigBIAx5jMcimO9wqvHQ8",
  },

  openGraph: {
    title: "Best MERN Stack & Next.js Development Partner | Webkaro",
    description:
      "Engineering scalable digital experiences for the modern web with Next.js and MERN stack.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedProjects />
      <Process />
      <ExpertCommunity />
      <Statistics />
      <FoundersSection />
      <Testimonials />
      <TechnologyStack />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}