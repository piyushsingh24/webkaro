import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Webkaro | Our Collective & Mission",
  description: "Learn about Webkaro, a community-driven development collective engineering the future of high-performance web applications.",
  keywords: ["About Webkaro", "Development Collective", "Engineering Team", "Web Studio Mission"],
  openGraph: {
    title: "About Webkaro | Engineering Digital Excellence",
    description: "Discover our story, vision, and the collective of experts behind Webkaro.",
    images: ["/logo.png"],
  }
};

export default function AboutPage() {
  return <AboutClient />;
}
