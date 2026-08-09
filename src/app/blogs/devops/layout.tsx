import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("/blogs/devops", {
  title: "DevOps & Infrastructure | Webkaro Blog",
  description: "Insights on CI/CD, Kubernetes, Docker, AWS, cloud infrastructure, and deployment strategies from Webkaro's engineering collective.",
});

export default function BlogCategoryLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
