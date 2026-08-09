import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("/blogs/frontend", {
  title: "Frontend Engineering & Performance | Webkaro Blog",
  description: "Articles on Next.js, React, TypeScript, responsive design, and web performance optimization from Webkaro's engineering collective.",
});

export default function BlogCategoryLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
