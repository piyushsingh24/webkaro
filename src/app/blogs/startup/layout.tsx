import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("/blogs/startup", {
  title: "Startup Strategy & Growth | Webkaro Blog",
  description: "Strategic insights on startup engineering, product-market fit, funding, and scaling tech ventures from Webkaro's engineering collective.",
});

export default function BlogCategoryLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
