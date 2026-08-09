import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("/blogs/backend", {
  title: "Backend Engineering & Infrastructure | Webkaro Blog",
  description: "Deep dives into Node.js, Go, PostgreSQL, Redis, API design, and backend architecture from Webkaro's engineering collective.",
});

export default function BlogCategoryLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
