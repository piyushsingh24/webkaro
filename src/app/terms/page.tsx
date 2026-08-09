import FinalCTA from "@/components/sections/FinalCTA";
import { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms of Service | Webkaro Digital Excellence",
  description: "Review the contractual terms and conditions for using Webkaro's services. We maintain clear, fair, and professional agreements with all our clients.",
  openGraph: {
    title: "Terms of Service | Webkaro",
    description: "Legal agreement and service terms for Webkaro.",
    type: "website",
  },
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.",
    },
    {
      title: "2. Provision of Services",
      content: "Webkaro is a digital collective providing web development, design, and consultancy services. We reserve the right to modify or discontinue services with or without notice to you. Any new features that augment or enhance the current services shall be subject to the Terms of Service.",
    },
    {
      title: "3. Intellectual Property Rights",
      content: "All content included on this site, such as text, graphics, logos, button icons, images, and software, is the property of Webkaro or its content suppliers and protected by international copyright laws. The compilation of all content on this site is the exclusive property of Webkaro.",
    },
    {
      title: "4. User Conduct",
      content: "You agree to use the website only for lawful purposes. You are prohibited from posting or transmitting through the website any material which violates or infringes in any way upon the rights of others, or which is unlawful, threatening, abusive, defamatory, invasive of privacy or publicity rights.",
    },
    {
      title: "5. Limitation of Liability",
      content: "In no event shall Webkaro be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service.",
    },
    {
      title: "6. Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.",
    },
  ];

  return (
    <div className="pt-44 pb-24">
      <TermsClient sections={sections} />
      <FinalCTA />
    </div>
  );
}
