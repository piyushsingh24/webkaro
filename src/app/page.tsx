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
  title: "Web Design Agency in Delhi | Webkaro",
  description: "Custom web design & development in Delhi. We build fast, conversion-focused websites for startups & businesses.",
  keywords: [
    "MERN stack developer",
    "Next.js development studio",
    "custom web applications Noida",
    "premium digital experiences",
    "startup engineering team",
    "web design agency Delhi",
    "website development Delhi",
  ],

  verification: {
    google: "a02zrNgd7cZycONHIRJnFCcigBIAx5jMcimO9wqvHQ8",
  },

  openGraph: {
    title: "Best MERN Stack & Next.js Development Partner | Webkaro",
    description:
      "Engineering scalable digital experiences for the modern web with Next.js and MERN stack.",
  },
  alternates: {
    canonical: "/",
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