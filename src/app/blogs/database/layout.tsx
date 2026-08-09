import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("/blogs/database", {
  title: "Database & Data Architecture | Webkaro Blog",
  description: "Articles on PostgreSQL, Redis, database optimization, data modeling, and data architecture patterns from Webkaro's engineering collective.",
});

export default function BlogCategoryLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
