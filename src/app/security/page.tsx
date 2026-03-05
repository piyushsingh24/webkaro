import FinalCTA from "@/components/sections/FinalCTA";
import { Metadata } from "next";
import SecurityClient from "./SecurityClient";

export const metadata: Metadata = {
  title: "Security & Infrastructure | Webkaro Fortress Engineering",
  description: "Webkaro builds digital fortresses. Explore our security-first approach to infrastructure, featuring end-to-end encryption, Zero-Trust policies, and continuous monitoring.",
  openGraph: {
    title: "Security & Infrastructure | Webkaro",
    description: "Fortress engineering and Zero-Trust infrastructure at Webkaro.",
    type: "website",
  }
};

export default function SecurityPage() {
  return (
    <div className="pt-44 pb-24">
      <SecurityClient />
      <FinalCTA />
    </div>
  );
}
