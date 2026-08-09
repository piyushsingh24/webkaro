import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("/faq", {
  title: "FAQ | Webkaro Engineering Collective",
  description: "Answers to common questions about our services, technology stack, development process, and pricing at Webkaro Studio.",
});

export default function FaqLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
