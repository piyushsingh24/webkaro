import FinalCTA from "@/components/sections/FinalCTA";
import { Metadata } from "next";
import CookiePolicyClient from "./CookiePolicyClient";

export const metadata: Metadata = {
  title: "Cookie Policy | Webkaro Transparency",
  description: "Webkaro uses cookies to improve your experience and analyze our traffic. Learn about the types of cookies we use and how you can manage your preferences.",
  openGraph: {
    title: "Cookie Policy | Webkaro",
    description: "How we use cookies to enhance your digital experience.",
    type: "website",
  },
  alternates: {
    canonical: "/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  const sections = [
    {
      title: "What are Cookies?",
      content: "Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.",
    },
    {
      title: "How We Use Cookies",
      content: "We use cookies to understand how you use our website, remember your preferences, and improve your overall experience. This includes essential cookies for site functionality and analytical cookies to help us improve our performance.",
    },
    {
      title: "Managing Cookies",
      content: "Most web browsers allow you to control cookies through their settings. You can set your browser to block or alert you about these cookies, but some parts of the site may not function properly if you do.",
    },
    {
      title: "Cookie Duration",
      content: "The length of time a cookie stays on your device depends on whether it is a 'persistent' or 'session' cookie. Session cookies are deleted when you close your browser, while persistent cookies stay until they expire or are deleted.",
    },
  ];

  return (
    <div className="pt-44 pb-24">
      <CookiePolicyClient sections={sections} />
      <FinalCTA />
    </div>
  );
}
