import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("/blogs/trends", {
  title: "Tech Trends & Market Intelligence | Webkaro Blog",
  description: "Analysis of emerging tech trends, AI integration, global markets, edge computing, and venture capital insights from Webkaro's engineering collective.",
});

export default function BlogCategoryLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
