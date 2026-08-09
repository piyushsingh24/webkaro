import FinalCTA from "@/components/sections/FinalCTA";
import { Metadata } from "next";
import ComplianceClient from "./ComplianceClient";

export const metadata: Metadata = {
  title: "Compliance & Governance | Webkaro IT Excellence",
  description: "Webkaro maintains high standards of compliance including SOC 2, GDPR, and ISO 27001. We ensure your digital products are secure and meet global regulatory requirements.",
  openGraph: {
    title: "Compliance & Governance | Webkaro",
    description: "Global standards and regulatory excellence at Webkaro.",
    type: "website",
  },
  alternates: {
    canonical: "/compliance",
  },
};

export default function CompliancePage() {
  return (
    <div className="pt-44 pb-24">
      <ComplianceClient />
      <FinalCTA />
    </div>
  );
}
