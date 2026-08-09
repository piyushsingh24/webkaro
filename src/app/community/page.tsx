import type { Metadata } from "next";
import CommunityClient from "./CommunityClient";

export const metadata: Metadata = {
  title: "Join Our Community | Webkaro Developer Collective",
  description: "Beyond a studio—Webkaro is a thriving community contribution to open-source and mentoring the next generation of engineers.",
  keywords: ["Developer Community", "Open Source Contribution", "Webkaro Network", "Engineering Webinars", "Collective Impact"],
  openGraph: {
    title: "Webkaro Community | Engineering Digital Excellence",
    description: "Building tools and sharing knowledge to move the web forward.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/community",
  },
};

export default function CommunityPage() {
  return <CommunityClient />;
}
