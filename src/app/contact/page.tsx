import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Webkaro | Start Your Project",
  description: "Get in touch with Webkaro's engineering collective. Let's discuss your next high-performance web application or SaaS MVP.",
  keywords: ["Contact Webkaro", "Hire Next.js Developers", "Start Project", "Web Development Inquiry"],
  openGraph: {
    title: "Contact Webkaro | Start Your Digital Transformation",
    description: "Ready to scale? Connect with our experts today.",
    images: ["/logo.png"],
  }
};

export default function ContactPage() {
  return <ContactClient />;
}
