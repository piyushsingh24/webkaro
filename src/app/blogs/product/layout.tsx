import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("/blogs/product", {
  title: "Product Design & Strategy | Webkaro Blog",
  description: "Articles on product vision, UX strategy, user research, feature prioritization, and market positioning from Webkaro's engineering collective.",
});

export default function BlogCategoryLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
