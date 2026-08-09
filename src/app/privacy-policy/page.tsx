import FinalCTA from "@/components/sections/FinalCTA";
import { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | Webkaro Digital Excellence",
  description: "Learn how Webkaro collects, uses, and protects your personal information. Our commitment to data privacy and security is central to our engineering ethics.",
  openGraph: {
    title: "Privacy Policy | Webkaro",
    description: "Transparency and data protection at Webkaro.",
    type: "website",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Data We Collect",
      content: "We collect personal information that you provide to us, such as your name, email address, and phone number when you fill out forms on our website. We also automatically collect certain information when you visit, use, or navigate our Services, including your IP address, browser and device characteristics.",
    },
    {
      title: "How We Use Your Data",
      content: "We use the information we collect to operate and maintain our Services, provide you with the information and services you request, and to communicate with you. This includes responding to your inquiries, sending newsletters, and improving our website experience.",
    },
    {
      title: "Data Security",
      content: "We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.",
    },
    {
      title: "Third-Party Disclosure",
      content: "We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, so long as those parties agree to keep this information confidential.",
    },
    {
      title: "Your Rights",
      content: "You have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please contact us via our contact form.",
    },
  ];

  return (
    <div className="pt-44 pb-24">
      <PrivacyPolicyClient sections={sections} />
      <FinalCTA />
    </div>
  );
}
