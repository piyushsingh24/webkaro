import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Hire MERN Developers in Delhi NCR | Webkaro Careers",
  description: "Join Webkaro's engineering collective in Delhi. Remote-friendly roles in React, Node.js, Next.js, and full-stack development.",
  keywords: ["Webkaro Careers", "Remote Developer Jobs", "Engineering Collective", "UI UX Designer Jobs", "Join Webkaro"],
  openGraph: {
    title: "Careers at Webkaro | Engineered for Freedom",
    description: "Work from anywhere, share in the success. Explore open opportunities.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
