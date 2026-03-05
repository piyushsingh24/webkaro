import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers at Webkaro | Join Our Collective",
  description: "Join a meritocratic collective of high-performance builders. Explore open engineering, design, and growth roles at Webkaro.",
  keywords: ["Webkaro Careers", "Remote Developer Jobs", "Engineering Collective", "UI UX Designer Jobs", "Join Webkaro"],
  openGraph: {
    title: "Careers at Webkaro | Engineered for Freedom",
    description: "Work from anywhere, share in the success. Explore open opportunities.",
    images: ["/logo.png"],
  }
};

export default function CareersPage() {
  return <CareersClient />;
}
